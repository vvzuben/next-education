import ArticleBlocks from '@components/ArticleBlocks';
import ContentBlocks from '@components/ContentBlocks';
import CountiesAccordion from '@components/CountiesAccordion';
import Hero from '@components/Hero';
import Insurances from '@components/Insurances';
import OurServices from '@components/OurServices';
import Steps from '@components/Steps';
import Testimonials from '@components/Testimonials';
import { WP_Query } from '@app/_wordpress/WPClient';
import type { Metadata } from "next";
import { getYoastMetaData } from '@app/helpers';

export async function generateMetadata(): Promise<Metadata> {
  return await getYoastMetaData("page", "homepage");
}

export default async function Homepage(): Promise<JSX.Element> {
  const [data] = await WP_Query<any>('pages?slug=homepage&_fields[]=acf&acf_format=standard');
  const fields = data[0].acf;

  return <>
    <Hero {...fields} />
    <OurServices {...fields} />
    <ContentBlocks {...fields?.content_blocks_component?.acf?.content_blocks_component} />
    <CountiesAccordion {...fields} />
    <Insurances {...fields} />
    <Steps {...fields} />
    <Testimonials {...fields} />
    <ArticleBlocks {...fields?.featured_article_with_colored_blocks_component.acf?.featured_article_with_colored_blocks_component} />
  </>
}
