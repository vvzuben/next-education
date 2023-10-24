import { WP } from "@app/_wordpress/Types"
import { WP_Query, WP_Query_Yarpp } from "@app/_wordpress/WPClient";
import PostCategoryAndDate from "@components/_partials/PostCategoryAndDate"
import { notFound } from 'next/navigation';
import SmallTestimonialArrow from "@public/webp/small-testimonial-arrow.webp"
import Image from "next/image"
import ThreeLinesTallDecal from "@components/decals/ThreeLinesTall/ThreeLinesTallDecal";
import Media from "@components/Media";
import ShareButtons from "@components/ShareButtons";
import PostContent from "@components/_partials/PostContent";
import PostSidebar from "@components/PostSidebar";
import type { Metadata } from "next";
import { Color, getYoastMetaData } from "@app/helpers";
import Posts, { PostsProps } from "@components/Posts";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return await getYoastMetaData("post", params.slug);
}

function PostHero(props: {
  post?: WP.Post,
}) {
  const author = props?.post?._embedded?.author[0]

  return <section className="
    lg:pt-16 pt-8  
    bg-paper
    bg-pale-pink
    bg-bottom
    bg-no-repeat
  bg-contain
    more-than-half-bg-pale-pink">
    <div className="max-w-[1240px] mx-auto flex flex-col gap-3 lg:gap-6 min-h-[300px]">
      {props.post &&
        <PostCategoryAndDate show_date={true} post={props.post} />
      }
      <div className="mobile-h2 lg:desktop-h2 relative -left-1">
        {props.post?.title?.rendered &&
          props.post.title.rendered
        }
      </div>
      <div className="flex gap-5">
        <div className="w-14 relative">
          <Image className="w-full h-auto" src={SmallTestimonialArrow} alt="" />
        </div>
        <div className="flex flex-col">
          {author &&
            <span className="mobile-h5 lg:desktop-h5 text-dark-plum">{author.name}</span>
          }
          {author?.acf?.title &&
            <span className="font-basis-grotesque-regular desktop-p-regular mobile-p">{author.acf.title}</span>
          }
        </div>
      </div>
      <div className="flex justify-center items-center w-full relative">
        {props.post?.acf?.featured_image && <>
          <ThreeLinesTallDecal color="orange" className="max-xs:hidden sm:-top-[25%] sm:-right-[50%] md:-top-[20%] md:-right-[50%] lg:-top-[100px] lg:-right-[125px] w-[575px] rotate-[232deg] z-10" />
          <Media className="z-50 lg:hidden w-full h-auto" {...props.post.acf.featured_image} width={375} height={327} />
          <Media className="z-50 hidden lg:block w-full h-auto" {...props.post.acf.featured_image} width={1240} height={628} />
        </>}
      </div>
    </div>
  </section>
}

type Props = {
  params: {
    slug: string
  }
}

async function RelatedPosts({ post_id }: { post_id: number }): Promise<React.JSX.Element | null> {
  const [related_posts, count] = await WP_Query_Yarpp<WP.Post[]>(`${post_id}?_fields=id`);

  if (count === 0) {
    return null;
  }

  const ids = related_posts.map(post => post.id)

  const params = {
    container: {
      title: "You also might be interested in",
      background_color_theme: "pearl-white",
      md_grid_cols: 3,
      lg_grid_cols: 3,
      xl_grid_cols: 3,
      sm_grid_cols: 1,
      className: "!p-0 !m-0"
    },
    limit: 3,
    post_type: "post",
    posts_per_page: 3,
    ids: ids
  } as PostsProps

  return <><Posts {...params} /></>
}

export default async function SinglePost(props: Props): Promise<React.JSX.Element | null> {
  let [post, count] = await WP_Query<WP.Post[]>('posts?status=publish&_embed&slug=' + props.params.slug);

  if (count !== 1) {
    notFound();
  }

  return <>
    <PostHero post={post[0]} />
    <section className="max-w-[1280px] mt-12 lg:mt-24 mx-auto grid-cols-1 grid lg:grid-cols-[337px_2fr] lg:gap-20 gap-10 cs">
      <aside className="max-lg:order-1 lg:max-w-[337px]">
        <PostSidebar />
      </aside>
      <div className="flex flex-col gap-7 lg:gap-14 max-w-[820px]">
        <PostContent post={post[0]} />
        <div className="flex justify-between items-center">
          <ShareButtons />
          <PostCategoryAndDate show_date={true} post={post[0]} />
        </div>
      </div>
    </section>
    <RelatedPosts post_id={post[0].id} />
  </>
}
