import { ACF } from "@app/_wordpress/Types";
import { FacebookIcon, InstagramIcon } from "@components/SocialMediaIcons";
import Link from "next/link";

type Props = {
  copyright: string
  facebook_link?: ACF.Type.Link.Array
  instagram_link?: ACF.Type.Link.Array
  bottom_navigation_links?: Array<{
    link: ACF.Type.Link.Array
  }>
}

export default function FooterMeta(props: Props) {
  return (
    <div className={`
    flex gap-3 max-sm:flex-col-reverse md:justify-between text-[13px] w-full font-basis-grotesque-regular
    `}>
      <div className="flex max-sm:flex-col justify-center items-center gap-3">
        <p>{props.copyright}</p>
        <ul className="flex gap-3 font-bold">
          {props.bottom_navigation_links?.map(({ link }, idx) => (
            <li key={idx}>
              <Link className="hover:text-royal-purple" href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row gap-3 max-sm:w-full justify-center items-center">
        {props.facebook_link &&
          <a aria-label="Facebook Page" target="_blank" href={props.facebook_link.url}>
            <FacebookIcon color="white" />
          </a>
        }

        {props.instagram_link &&
          <a aria-label="Instagram Page" target="_blank" href={props.instagram_link.url}>
            <InstagramIcon color="white" />
          </a>
        }
      </div>
    </div >
  )
}
