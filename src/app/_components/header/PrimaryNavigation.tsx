'use client';

import ArrowRight from '@public/svg/arrow-right.svg';
import CaretDropdown from '@components/icons/CaretDropdown';
import Image from 'next/image';
import Link from 'next/link'
import { ACF } from '@app/_wordpress/Types';
import { ElementRef, useEffect, useRef } from 'react'
import { NavigationStore, useNavigationStore } from '@stores/NavigationStore';
import { usePathname } from 'next/navigation'
import { useClickAway } from "react-use";

type Props = {
  isMenuOpen: boolean
  menuItems: MenuItem[]
  headerBackgroundColor: string
}

export type MenuItem = ACF.Type.Link.Array & {
  has_dropdown?: boolean
  children?: MenuItemChild[]
  link?: ACF.Type.Link.Array
}

type MenuItemChild = Omit<MenuItem, "children"> & {
  icon?: string
  link?: ACF.Type.Link.Array
}

export default function PrimaryNavigation(props: Props) {
  const nav: NavigationStore = useNavigationStore();

  const toggleMenu = (MenuItem: MenuItem) => {
    nav.setActiveMenuItem(nav.activeMenuItem === MenuItem ? undefined : MenuItem);
  }

  const isActive = (MenuItem: MenuItem) => {
    return MenuItem === nav.activeMenuItem;
  }

  const getUrl = (MenuItem: MenuItem) => {
    return MenuItem.children ? "" : MenuItem.link?.url
  }

  const handleParentLinkClick = (MenuItem: MenuItem, event: any) => {
    if (MenuItem.children) {
      event.preventDefault();
      toggleMenu(MenuItem)
    }
  }

  const hasValidDropdown = (MenuItem: MenuItem) => MenuItem.has_dropdown
  const isPurpleBackground = () => props.headerBackgroundColor.includes("bg-royal-purple")
  const pathname = usePathname()
  const ref = useRef<ElementRef<"nav">>(null);

  useClickAway(ref, (e: MouseEvent) => {
    const tagName = e.target as HTMLElement;
    if (tagName.tagName !== "HTML") {
      nav.setActiveMenuItem(undefined);
    }
  });

  useEffect(() => {
    nav.setActiveMenuItem(undefined);
  }, [pathname])

  return <nav ref={ref} className={(props.isMenuOpen ? "static" : "hidden") + " font-basis-grotesque-regular lg:block text-3xl py-8 p-3.5 top-20 font-normal left-0 max-lg:bg-royal-purple max-lg:w-full max-lg:h-full max-lg:fixed text-white lg:p-0 lg:m-0"}>
    <ul className="lg:text-dark-plum flex gap-[22px] lg:gap-5 flex-col lg:flex-row">
      {props.menuItems.map((link, i) => (
        <li key={i} className="lg:group lg:relative lg:items-center lg:justify-center">
          <div className="lg:items-start flex gap-1">
            {hasValidDropdown(link) && <button aria-label="Toggle Dropdown" onClick={(e) => handleParentLinkClick(link, e)} className="!p-0 !m-0 max-lg:mobile-h3 lg:text-base lg:font-bold lg:hover:text-royal-purple">
              {link.title ? link.title : link.link?.title}
            </button>
            }

            {!hasValidDropdown(link) && <Link className="inline-block max-lg:mobile-h3 lg:text-base lg:font-bold lg:hover:text-royal-purple" href={getUrl(link) ?? ""}>
              {link.title ? link.title : link.link?.title}
            </Link>
            }

            <span onClick={() => toggleMenu((link))} className={(hasValidDropdown(link) ? "visible" : "invisible") + " max-lg:items-center max-lg:justify-center relative top-1.5 hover:cursor-pointer max-lg:bg-light-purple rounded-full text-white w-8 h-8 lg:" + props.headerBackgroundColor.replace("shadow-header", "") + " group flex"}>
              <CaretDropdown rotate={isActive(link)} stroke={isPurpleBackground() ? 'white' : 'dark-plum'} />
            </span>
          </div>
          {
            hasValidDropdown(link) && isActive(link) && (
              <ul className={`
                before:-top-[20px]
                flex
                flex-col
                gap-[11px]
                lg:-translate-x-1/2
                lg:absolute
                lg:before:-translate-x-1/2
                lg:before:absolute
                lg:before:bg-shape-rectangle
                lg:before:border-dark-plum
                lg:before:h-[29px]
                lg:before:left-1/2
                lg:before:translate-y-[6px]
                lg:before:w-[29px]
                lg:bg-white
                lg:desktop-button
                lg:gap-10
                lg:group-hover:flex
                lg:min-w-[19.6rem]
                lg:mt-0
                lg:px-7
                lg:py-12
                lg:rounded-xl
                lg:shadow-primary
                lg:text-dark-plum
                lg:top-[72px]
                max-lg:desktop-button
                max-lg:mt-[22px]
                `}>
                {link.children?.map((child, i) => (
                  <li key={i} className="flex gap-3 group">
                    <i className="p-0.5 hidden lg:flex justify-center items-center rounded-lg w-[60px] h-[60px] bg-pearl-white">
                      {child.icon &&
                        <Image loading="eager" width={100} height={100} src={child.icon} alt={child.link?.title ?? ""} />
                      }
                    </i>
                    {child.link?.url &&
                      <Link className="justify-center lg:hover:text-royal-purple lg:group flex gap-7 items-center" href={child.link.url}>
                        <span>{child.link?.title}</span>
                        <Image className="invisible group-hover:visible" src={ArrowRight} alt={child.link?.title ?? ""} />
                      </Link>
                    }
                  </li>
                ))}
              </ul>)
          }
        </li>
      ))
      }
    </ul>
  </nav>
}
