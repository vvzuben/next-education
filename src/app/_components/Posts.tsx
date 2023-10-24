import type { ButtonProps } from "@components/global/Button"
import Button from "@components/global/Button"
import { WP_Query } from "@app/_wordpress/WPClient"
import type { WP } from "@app/_wordpress/Types"
import PostPreview from "./PostPreview"
import SelectMenu from "./_partials/SelectMenu"
import { getGridCols, type Color } from "@app/helpers"
import SignatureLineDecal from "./decals/SignatureLine/SignatureLineDecal"
import SquigglyLineDecal from "./decals/SquigglyLine/SquigglyLineDecal"
import Pagination from "@components/Pagination"

type Column = 1 | 2 | 3 | 4 | 5

export type PostsProps = {
  category_id?: number
  current_page?: number
  container?: {
    background_color_theme?: Color
    decals?: boolean
    decals_color?: Color
    padding?: boolean
    subtitle?: string
    title?: string
    className?: string
    breakpoints?: {
      lg_grid_cols?: Column
      md_grid_cols?: Column
      sm_grid_cols?: Column
      xl_grid_cols?: Column
      xs_grid_cols?: Column
    }
  },
  header_button?: ButtonProps
  page?: number
  post_type?: "post" | "workshop"
  posts_per_page?: number
  show_filters?: boolean
  show_pagination?: boolean
  theme?: Color,
  className?: string
  ids?: number[]
}

export default async function Posts(
  {
    category_id,
    container,
    current_page,
    header_button,
    post_type,
    posts_per_page,
    show_filters,
    show_pagination,
    ids
  }: PostsProps) {

  const { xl, lg, md, sm, xs } = getGridCols(container);

  let themeClasses = "";

  if (container?.padding) {
    themeClasses += 'rounded-xl !py-10 !px-5 lg:!py-20 lg:!px-20 ';
  }

  themeClasses += " bg-" + (container?.background_color_theme ?? " white");

  const _post_type = post_type === 'post' ? 'posts' : 'workshop'

  current_page = Number(current_page ?? 1)

  let query = `${_post_type}?orderby=date&_embed&per_page=${posts_per_page}&page=${current_page}`

  if (ids && ids.length > 0) {
    query = query += `&include=${ids.join(',')}`
  } else if (category_id) {
    query = query += `&categories=${category_id}`
  }

  const [posts, totalPosts] = await WP_Query<WP.Post[]>(query);
  const [categories] = await WP_Query<WP.Term[]>('categories');

  let thumbnail_height = 389

  switch (container?.breakpoints?.lg_grid_cols) {
    case 2:
      thumbnail_height = 342
      break;
    case 3:
      thumbnail_height = 251
      break;
  }

  return <section className="max-w-[1240px] mx-auto overflow-hidden cs">
    <div className={`lg:py-0 grid grid-cols-1 relative overflow-hidden gap-5 lg:gap-10 ${themeClasses} ${container?.className ?? ""}`}>
      {container?.decals &&
        <>
          <SignatureLineDecal color={container.decals_color ?? "orange"} className="max-lg:hidden w-[250px] h-full -top-[190px] -left-[20px]" />
          <SquigglyLineDecal color={container.decals_color ?? "orange"} className="bottom-0 -right-[155px] w-[300px] h-[100px] rotate-[50deg]" />
        </>
      }

      {(container?.title || header_button?.link?.title) &&
        <div className="flex flex-col gap-5 md:flex-row md:justify-between xl:gap-5">
          {container?.title &&
            <h3 className="mobile-h2 lg:desktop-h2">
              {container.title}
            </h3>
          }
          {header_button?.link?.title &&
            <Button
              className="w-56 py-3.5 px-7 desktop-button" {...header_button}
              label={header_button?.link.title}
              theme="royal-purple"
            />
          }
        </div>
      }
      <div className="flex justify-between items-center flex-col lg:flex-row gap-5">
        {container?.subtitle &&
          <h3 className="mobile-h3 lg:desktop-h3">{container.subtitle}</h3>
        }
        {show_filters &&
          <div className="flex flex-col w-56 h-12">
            <div className="relative">
              <form
                className="before:absolute
              before:bg-caret-down
              before:bg-no-repeat
              before:h-[24px]
              before:right-[24px]
              before:translate-y-1/2
              before:w-[24px]
              relative
              w-full
              ">
                <SelectMenu post_type={post_type} categories={categories} />
              </form>
            </div>
          </div>
        }
      </div>
      <div className={`gap-5 grid lg:grid-cols-${lg} md:grid-cols-${md} sm:grid-cols-${sm} xl:grid-cols-${xl} xs:grid-cols-${xs}`}>
        {posts && posts.length && posts?.map((post: WP.Post, idx) => {
          return <PostPreview key={idx} thumbnail_height={thumbnail_height} post={post} />
        })}
      </div>
      {show_pagination &&
        <Pagination totalCount={totalPosts} currentPage={current_page} pageSize={posts_per_page ?? 12} />
      }
    </div>
  </section>
}
