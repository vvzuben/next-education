import Posts from '@components/Posts';
import { WP_Query } from "@app/_wordpress/WPClient"
import { notFound } from 'next/navigation';
import PageTitleAndSubTitle from '@components/PageTitleAndSubTitle';
import { GetCategoryBySlug, getYoastMetaData } from '@app/helpers'
import { WP } from '@app/_wordpress/Types';
import type { Metadata } from "next";

type QueryString = {
  page: number
  category?: string
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getYoastMetaData("page", "articles-and-advice");
  return data;
}

export default async function ArticlesAndAdvicePage({ searchParams }: { searchParams: QueryString }) {
  const [data] = await WP_Query<WP.Page[]>('pages?slug=articles-and-advice');
  const fields = data[0]?.acf;
  const params = searchParams;
  const page = params.page
  const current_page = page ?? 1
  let id;

  if (params.category) {
    const category = await GetCategoryBySlug(params.category);
    if (!category) {
      notFound();
    } else {
      id = category.id
    }
  }

  return <div className={`
    ${(fields.background_color_theme == "white" && "bg-white")}

  `}>
    <PageTitleAndSubTitle {...data[0]} />
    <Posts {...fields.articles_and_advice_component.acf.posts_grid_component} category_id={id} current_page={current_page} />
  </div>
}
