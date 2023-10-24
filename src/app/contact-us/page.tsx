import ColoredBlocks from "@components/ColoredBlocks"
import { WP_Query } from "@app/_wordpress/WPClient"
import ContactInformation from "@components/ContactInformation";
import FAQs from "@components/FAQs";
import PageTitleAndSubTitle from "@components/PageTitleAndSubTitle";
import { Metadata } from "next";
import { getYoastMetaData } from "@app/helpers";

export async function generateMetadata(): Promise<Metadata> {
  return await getYoastMetaData("page", "contact-us");
}

export default async function ContactUsPage(): Promise<JSX.Element> {
  const [data] = await WP_Query<any>('pages?slug=contact-us&_fields[]=acf&acf_format=standard');
  const fields = data[0]?.acf;
  const [options] = await WP_Query<any>('options/all');
  const sucess_modal = options.contact_form_success_modal;

  return (
    <>
      <PageTitleAndSubTitle {...data[0]} />
      <ColoredBlocks contact_form_sucess_modal={sucess_modal} {...fields.colored_blocks_component.acf.colored_blocks_component} />
      <ContactInformation {...fields.contact_information_component.acf.contact_information_component} />
      <FAQs {...fields?.faqs_component?.acf?.faqs_component} />
    </>
  )
}
