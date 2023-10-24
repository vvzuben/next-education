import { WP_Query } from "@app/_wordpress/WPClient";
import NewsletterSignupWide from "@components/NewsletterSignupWide";

export default async function PostSidebar() {
  const [options] = await WP_Query<any>('options/all');
  const [news_data] = await WP_Query<any>('pages?slug=resource-hub&_fields[]=acf');
  const news_fields = news_data[0]?.acf;

  return <div className="lg:sticky lg:top-[150px]">
    <NewsletterSignupWide context="sidebar" {...news_fields?.newsletter_wide_component?.acf?.newsletter_signup_wide_component} sucess_modal={options?.newsletter_sucess_modal} />
  </div>
}
