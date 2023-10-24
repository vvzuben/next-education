import Button from "@components/global/Button"
import CircleIcon from "@components/ui/CircleIcon"
import { WP_Query } from "@app/_wordpress/WPClient"
import PostCategoryAndDate from "@components/_partials/PostCategoryAndDate"
import type { ACF, WP } from "@app/_wordpress/Types"
import Media from "@components/Media"
import Link from "next/link"
import { Color } from "@app/helpers"
import LinesPartial from "./decals/LinesPartial/LinesPartialDecal"
import LinkAndCircleArrow from "./_partials/LinkAndCircleArrow"

type ArticleBlocksFieldGroup = {
  title: string
  button_link: ACF.Type.Link.Array
  featured_article: number
  colored_blocks: Array<{
    title: string
    link: ACF.Type.Link.Array
    background_color_theme: Color
    image: ACF.Type.Image.Array
  }>
}


async function ArticlePreview({ id }: { id: number }): Promise<React.JSX.Element> {
  const [data] = await WP_Query<WP.Post[]>(`posts?include[]=${id}&_embed`);
  const article = data[0]
  return <div className="flex flex-col gap-6 bg-pale-pink rounded-xl px-12  py-10 relative overflow-hidden">
    <LinesPartial color="orange" className="w-[575px] h-[480px] left-0 -top-[200px]" />
    {article?.acf?.featured_image &&
      <Link aria-label={article.title.rendered} href={article.link}>
        <Media {...article.acf.featured_image} width={672} height={390} />
      </Link>
    }<div className="flex flex-col gap-1.5">
      <PostCategoryAndDate show_date={true} {...article} />
      <h3 className="mobile-h3 lg:desktop-h3">
        <Link aria-label={article.title.rendered} href={article.link}>{article?.title?.rendered}</Link>
        <div className="relative inline max-lg:hidden lg:-top-2.5">
          <LinkAndCircleArrow ariaLabel={article.title.rendered} url={article.link} />
        </div>
      </h3>
    </div>
  </div>
}

export default function ArticleBlocks(props: ArticleBlocksFieldGroup): React.JSX.Element {
  return <section className="container mx-auto">
    <div className="max-w-[1240px] xl:mx-auto grid grid-cols-1 gap-10 lg:gap-16">

      <div className="flex flex-col gap-5 md:flex-row md:justify-between xl:gap-5">
        <h3 dangerouslySetInnerHTML={{ __html: props.title }} className="mobile-h2 lg:desktop-h2" />
        <Button
          label="Test"
          className="w-56 py-3.5 px-7 desktop-button"
          theme="royal-purple"
          link={props.button_link}
        />

      </div>
      <div className="lg:grid lg:grid-cols-2 lg:justify-end flex flex-col max-xl:gap-5 xl:grid-cols-[64%_1fr]">
        {<ArticlePreview id={props.featured_article} />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-1 xl:justify-items-end content-between">
          {props.colored_blocks?.map((block, index) => (

            <div key={index} className={`
        ${block.background_color_theme === "orange" && "bg-orange"}
        ${block.background_color_theme === "green" && "bg-green"}
        flex
        flex-col
        gap-8
        h-[274px]
        overflow-hidden
        p-5
        relative
        rounded-xl
        sm:min-h-[205px]
        text-white
        xl:h-[294px]
        xl:w-[412px]
        `}>
              <div className="z-50 relative flex flex-col gap-4">
                <Link href={block.link.url} target={block.link.target}>
                  <h3 className="mobile-h3 lg:mobile-desktop" dangerouslySetInnerHTML={{ __html: block.title }} />
                </Link>
              </div>

              <Link aria-label={block.link.title} href={block.link.url} target={block.link.target} className="z-50 inline-flex items-center gap-2.5 h-[44px]">
                <span className="text-base font-basis-grotesque-bold font-bold leading-[30px] tracking-[0.195px]">{block.link.title}</span>
                <CircleIcon direction="right" icon="arrow" fill="white" theme="transparent" />
              </Link>

              <div className="z-0 absolute bottom-0 right-0">
                <Link aria-label={block.link.title} href={block.link.url} target={block.link.target}>
                  <Media {...block.image} width={253} height={239} className="w-full h-auto" />
                </Link>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  </section>
}

