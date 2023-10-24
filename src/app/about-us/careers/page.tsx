import { WP_Query } from "@app/_wordpress/WPClient"
import { getYoastMetaData } from "@app/helpers";
import AlternatingBlocks from "@components/AlternatingBlocks";
import FeaturedTestimonial from "@components/FeaturedTestimonial";
import HeadingAndButton from "@components/HeadingAndButton";
import ImageCarousel from "@components/ImageCarousel";
import OpenVacancies from "@components/OpenVacancies";
import PageTitleAndSubTitle from "@components/PageTitleAndSubTitle";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getYoastMetaData("page", "careers");
  return data;
}

export default async function CareersPage(): Promise<React.JSX.Element> {
  const [data] = await WP_Query<any>('pages?slug=careers&_fields[]=acf');
  const fields = data[0]?.acf;

  return <>
    <PageTitleAndSubTitle {...data[0]} />
    <ImageCarousel {...fields.carousel_component.acf.carousel_component} />
    <AlternatingBlocks blocks={fields.alternating_blocks_component.acf.alternating_blocks_component} />
    <FeaturedTestimonial {...fields} />
    <OpenVacancies {...fields.open_vacancies_component.acf.open_vacancies_component} />
    <section className="max-w-[860px] mx-auto">
      <HeadingAndButton {...fields.heading_and_button_component.acf.heading_and_button_component} />
    </section>
  </>
}
