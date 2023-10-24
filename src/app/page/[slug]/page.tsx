import { ACF, WP } from "@app/_wordpress/Types"
import { WP_Query } from "@app/_wordpress/WPClient";
import { notFound } from 'next/navigation';
import PostContent from "@components/_partials/PostContent";
import PageTitleAndSubTitle from "@components/PageTitleAndSubTitle";
import { getYoastMetaData } from "@app/helpers";
import { Metadata } from "next";

type Props = {
  params: {
    slug: string
  }
}
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return await getYoastMetaData("page", params.slug);
}

export default async function SinglePolicy(props: Props): Promise<React.JSX.Element | null> {
  let [page, count] = await WP_Query<WP.Page[]>('pages?status=publish&_embed&slug=' + props.params.slug);

  if (count !== 1) {
    notFound();
  }

  return <>
    <section className="grid-cols-1 cs bg-pearl-white">
      <div className="mx-auto max-w-[840px] overflow-hidden">
        <PageTitleAndSubTitle {...page[0]} />
        <div className="flex flex-col gap-3">
          <PostContent post={page[0]} />
        </div>
      </div>
    </section>
  </>
}

