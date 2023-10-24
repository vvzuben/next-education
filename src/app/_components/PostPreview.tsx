import Media from "@components/Media"
import PostCategoryAndDate from "@components/_partials/PostCategoryAndDate"
import LinkAndCircleArrow from "@components/_partials/LinkAndCircleArrow"
import Link from 'next/link'
import { WP } from "@app/_wordpress/Types"
import { CircleTheme } from "./ui/CircleIcon"
import React from "react"
import WorkshopDateAndLocation from "./_partials/WorkshopDateAndLocation"

function PostPreviewMeta(props: {
  post: WP.Post,
  circleTheme: CircleTheme,
  transparent?: boolean
}): React.JSX.Element {
  return <>
    <PostCategoryAndDate show_date={true} post={props.post} />
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-6 justify-between lg:min-h-[100px] md:justify-start md:items-start">
        <h4 className="mobile-h4 lg:desktop-h4 text-dark-plum">
          <Link href={props.post.link}>
            {props.post.title?.rendered}
          </Link>
        </h4>
      </div>
      <div>
        <LinkAndCircleArrow
          title="Read More"
          transparent={props.transparent}
          circleTheme={props.circleTheme}
          url={props.post.link} />
      </div>
    </div>
  </>
}

function WorkshopPreviewMeta(workshop: WP.Workshop): React.JSX.Element {
  return workshop && <div className="flex flex-col justify-between gap-7 min-h-[150px]">
    <div className="flex flex-col gap-2">
      <h4 className="mobile-h4 lg:desktop-h4 text-dark-plum">
        <Link href={workshop.link}>
          {workshop.title?.rendered}
        </Link>
      </h4>
      <WorkshopDateAndLocation separator={true} workshop={workshop} />
    </div>
    <div className="flex">
      <LinkAndCircleArrow title="View Workshop" url={workshop.link} />
    </div>
  </div>
}

export default function PostPreview(
  {
    post,
    thumbnail_height
  }: {
    post: WP.Post | WP.Workshop,
    thumbnail_height: number
  }): React.JSX.Element {
  return post && <div className="flex flex-col justify-between gap-5 min-h-[180px]">

    <div className="flex flex-col gap-3 lg:gap-6">
      <Link aria-label={post.title.rendered} href={post.link}>
        {post?.acf?.featured_image?.url &&
          <div style={{ maxHeight: thumbnail_height }}
            className="overflow-hidden relative bg-royal-purple before:bg-royal-purple before:top-0 before:left-0 before:absolute before:w-full before:h-full before:z-50 before:opacity-0 before:hover:opacity-[0.35]">
            <Media className="rounded-md" {...post.acf.featured_image} width={610} height={thumbnail_height} />
          </div>
        }

        {!post?.acf?.featured_image &&
          <Media className="rounded-md" alt="" url={`https://placehold.co/610x342/efe7e1/6c45aa/webp?text=${post?.title?.rendered}`} width={610} height={thumbnail_height} />
        }
      </Link>
      <div className="flex-col gap-2.5 flex justify-between">
        {post && post.type == "post" &&
          <PostPreviewMeta transparent={true} post={post} circleTheme="royal-purple-opacity" />
        }

        {post && post.type == "workshop" &&
          //@ts-expect-error
          <WorkshopPreviewMeta {...post} />
        }
      </div>
    </div>
  </div>
}
