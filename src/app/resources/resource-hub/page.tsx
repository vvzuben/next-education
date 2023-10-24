import FeaturedArticle from '@components/FeaturedArticle';
import Hero from '@components/Hero';
import Posts from '@components/Posts';
import { WP_Query } from "@app/_wordpress/WPClient"
import NewsletterSignupWide from '@components/NewsletterSignupWide';
import FAQs from '@components/FAQs';
import { WP } from '@app/_wordpress/Types'
import { getYoastMetaData } from '@app/helpers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getYoastMetaData("page", "resource-hub");
  return data;
}

export default async function ResourceHubPage(): Promise<JSX.Element> {

  const [data] = await WP_Query<any>('pages?slug=resource-hub&_fields[]=acf');
  const fields = data[0]?.acf;
  const [options] = await WP_Query<any>('options/all');
  const post_id = fields.featured_article_component?.acf?.featured_article_component?.post?.ID;
  const [post] = await WP_Query<WP.Post[]>(`posts?include[]=${post_id}&_embed`)

  return <>
    <Hero title_classes="md:text-left" {...fields} />
    <FeaturedArticle {...post[0]} />
    <Posts {...fields?.articles_and_advice_component?.acf?.posts_grid_component} />
    <Posts {...fields?.upcoming_workshops_component?.acf?.posts_grid_component} />
    <NewsletterSignupWide {...fields?.newsletter_wide_component?.acf?.newsletter_signup_wide_component} sucess_modal={options?.newsletter_sucess_modal} />
    <FAQs {...fields?.faqs_component?.acf?.faqs_component} />
  </>
}
