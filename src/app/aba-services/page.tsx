import AlternatingBlocks from '@components/AlternatingBlocks';
import FeaturedTestimonial from '@components/FeaturedTestimonial';
import Hero from '@components/Hero';
import Posts from '@components/Posts';
import { WP_Query } from "@app/_wordpress/WPClient"
import { getYoastMetaData } from '@app/helpers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const data = await getYoastMetaData("page", "aba-services");
  return data;
}

export default async function AbaServicesPage(): Promise<JSX.Element> {
  const [data] = await WP_Query<any>('pages?slug=aba-services&_fields[]=acf&acf_format=standard');
  const fields = data[0]?.acf;


  return (
    <>
      <Hero {...fields} />
      <AlternatingBlocks blocks={fields.alternating_blocks_component.acf?.alternating_blocks_component} />
      <FeaturedTestimonial {...fields} />
      <Posts
        {...fields.upcoming_workshops_component?.acf?.posts_grid_component}
      />
    </>
  )
}
