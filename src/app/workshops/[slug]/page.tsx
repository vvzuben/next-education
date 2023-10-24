import { WP } from "@app/_wordpress/Types"
import { WP_Query } from "@app/_wordpress/WPClient";
import PostCategoryAndDate from "@components/_partials/PostCategoryAndDate"
import { notFound } from 'next/navigation';
import ThreeLinesTallDecal from "@components/decals/ThreeLinesTall/ThreeLinesTallDecal";
import Media from "@components/Media";
import ShareButtons from "@components/ShareButtons";
import PostContent from "@components/_partials/PostContent";
import WorkshopDateAndLocation from "@components/_partials/WorkshopDateAndLocation";
import CursiveArrowDecal from "@components/decals/CursiveArrow/CursiveArrowDecal";
import PostSidebar from "@components/PostSidebar";
import { getYoastMetaData } from "@app/helpers";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return await getYoastMetaData("workshop", params.slug);
}

function WorkshopHero(props: {
  post?: WP.Workshop,
}) {
  return <section className="bg-pale-pink bg-paper bg-bottom bg-no-repeat bg-contain relative">
    <CursiveArrowDecal color="orange" className="w-[143px] h-[144px] -bottom-5 left-1/2 -translate-x-1/2" direction="down" />
    <div className="container mx-auto grid-cols-1 lg:grid-cols-2 pt-16 mb-36">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col lg-h-[420px] justify-center items-start gap-3.5 lg:gap-7">
          {props.post?.title.rendered &&
            <div className="max-w-[490px]">
              <h2 className="mobile-h2 lg:desktop-h2 ">
                {props.post?.title.rendered}
              </h2>
            </div>
          }

          {props.post &&
            <div>
              <WorkshopDateAndLocation separator={false}
                liClassName="pl-[35px]"
                ulClassName="items-start justify-start items-start gap-0 flex flex-col !items-start gap-0"
                workshop={props.post} />
            </div>
          }

        </div>
        <div className="flex flex-col relative">
          <div className="z-50">
            {props?.post?.acf?.featured_image &&
              <Media {...props.post?.acf?.featured_image} width={610} height={419} />
            }
          </div>
          <ThreeLinesTallDecal className="rotate-180 absolute w-3/4 z-0 max-lg:-top-[75px] max-lg:left-[20px] lg:-top-[50px] lg:-right-[150px] lg:-bottom-[500px]" color="orange" />
        </div>
      </div>
    </div>
  </section>
}

type Props = {
  params: {
    slug: string
  }
}

export default async function SingleWorkshop(props: Props): Promise<React.JSX.Element | null> {
  let [post, count] = await WP_Query<WP.Workshop[]>('workshop?status=publish&_embed&slug=' + props.params.slug);

  if (count !== 1) {
    notFound();
  }

  return <>
    <WorkshopHero post={post[0]} />
    <section className="mt-12 lg:mt-24 container mx-auto grid-cols-1 grid lg:grid-cols-[337px_2fr] lg:gap-20 gap-10">
      <aside className="max-lg:order-1">
        <PostSidebar />
      </aside>
      <div className="flex flex-col gap-7 lg:gap-14 max-w-[820px]">
        <PostContent post={post[0]} />
        <div className="flex justify-between items-center">
          <ShareButtons />
          <PostCategoryAndDate show_date={false} post={post[0]} />
        </div>
      </div>
    </section>
  </>
}

