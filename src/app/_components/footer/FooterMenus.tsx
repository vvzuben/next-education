import { ACF } from "@app/_wordpress/Types"
import type { MenuItem as TypeMenuItem } from "@components/header/PrimaryNavigation"
import Link from "next/link"

type Props = {
  menus: Array<{
    heading?: string
    content?: string
    links?: Array<{
      link: ACF.Type.Link.Array
      highlight?: string
    }>
  }>
}

export default function FooterMenus(props: Props): React.JSX.Element {
  return <>
    {props.menus.map((menu, idx) => (
      (menu.links &&
        <div key={idx} className={"flex flex-col gap-5 font-basis-grotesque-regular"}>
          {menu.heading &&
            <h3 className="text-xl md:text-2xl font-gta-regular">{menu.heading}</h3>
          }

          {menu.content &&
            <div dangerouslySetInnerHTML={{ __html: menu.content }} className="text-ivory" />
          }
          <ul className="flex flex-col gap-2 md:gap-2 font-bold text-base">
            {menu.links.map((link, index) =>
              <li className="flex gap-4 md:max-lg:gap-2" key={index}>
                <Link href={link?.link?.url ?? ""} className="font-text-white hover:text-royal-purple ">{link.link.title}</Link>
                {link.highlight && <span dangerouslySetInnerHTML={{ __html: link.highlight }}
                  className="bg-light-lavender desktop-p-small inline-flex items-center justify-center px-2.5 rounded-3xl text-dark-plum"
                />
                }
              </li>
            )}
          </ul>
        </div>
      )
    ))}
  </>
}
