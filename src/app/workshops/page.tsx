import Posts from '@components/Posts';
import { WP_Query } from "@app/_wordpress/WPClient"
import type { WP } from '@app/_wordpress/Types'
import { notFound } from 'next/navigation';
import PageTitleAndSubTitle from '@components/PageTitleAndSubTitle';
import { getYoastMetaData } from '@app/helpers';
import { Metadata } from 'next';

type QueryString = {
  page: number
  category?: string
}

async function GetCategoryBySlug(slug: string) {
  const [categories] = await WP_Query<WP.Term[]>('categories');
  return categories?.find((category) => category.slug == slug);
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getYoastMetaData("page", "workshops");
  return data;
}

export default async function Workshops({ searchParams }: { searchParams: QueryString }) {
  const [data] = await WP_Query<any>('pages?slug=workshops');
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

  return <>
    <PageTitleAndSubTitle {...data[0]} />
    <Posts {...fields.articles_and_advice_component.acf.posts_grid_component} category_id={id} current_page={current_page} />
  </>
}
