import { WP_Query } from "@app/_wordpress/WPClient";
import NewsletterSignup from "@components/_forms/NewsletterSignup";

type Props = {
  content?: string
}

export default async function NewsletterForm(props: Props) {
  const [options] = await WP_Query<any>('options/all');

  return (
    <div className="flex flex-col font-normal gap-4 text-2xl font-gta-light">
      {props.content &&
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      }
      <NewsletterSignup sucess_modal={options.newsletter_sucess_modal} />
    </div>
  )
}
