import { WP_Query } from "@app/_wordpress/WPClient"
import { getYoastMetaData } from "@app/helpers";
import FAQs from '@components/FAQs';
import HeadingAndButton from "@components/HeadingAndButton";
import PageTitleAndSubTitle from "@components/PageTitleAndSubTitle";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return await getYoastMetaData("page", "frequently-asked-questions");
}

export default async function FaqsPage(): Promise<React.JSX.Element> {
  const [data] = await WP_Query<any>('pages?slug=frequently-asked-questions&_fields[]=acf');
  const fields = data[0]?.acf;

  return <>
    <PageTitleAndSubTitle {...data[0]} />
    <FAQs {...fields.faqs_component.acf.faqs_component} fullWidth={true} />
    <HeadingAndButton classes="max-w-[846px]" {...fields.heading_and_button_component.acf.heading_and_button_component} />
  </>
}
