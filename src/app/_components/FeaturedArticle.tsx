import Link from "next/link"
import Media from "@components/Media"
import PostCategoryAndDate from "./_partials/PostCategoryAndDate"
import LinkAndCircleArrow from "./_partials/LinkAndCircleArrow"
import type { WP } from "@app/_wordpress/Types"
import SquigglyLineWideDecal from "./decals/SquigglyLineWide/SquigglyLineWideDecal"

export default function FeaturedArticle(post?: WP.Post) {

  if (!post) return null

  const link = {
    title: "Read More",
    url: post.guid.rendered
  }

  return post &&
    <section className="container mx-auto cs">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 lg:gap-10 lg:pt-12 lg:py-10 pt-4 py-3">
          <div className="relative">
            {post.acf?.featured_image &&
              <>
                <SquigglyLineWideDecal color="orange" className="w-[150px] h-[150px] top-0" />
                <Link aria-label={post.title.rendered} href={link.url}>
                  <Media
                    {...post.acf.featured_image}
                    width={812}
                    height={518}
                    className="w-full h-auto"
                  />
                </Link>
              </>
            }
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <PostCategoryAndDate show_date={true} post={post} />
              <h2 className="relative -left-[4px] mobile-h3 desktop-h3 text-dark-plum"><Link href={post.link}>{post.title.rendered}</Link></h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} className="mobile-p desktop-p text-dark-plum" />
            <div>
              <LinkAndCircleArrow {...link} />
            </div>
          </div>
        </div>
      </div>
    </section>
}

