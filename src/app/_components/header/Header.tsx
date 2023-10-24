'use client';

import Button from '@components/global/Button'
import Logo from '@components/header/Logo'
import NavigationToggle from '@components/header/NavigationToggle'
import PrimaryNavigation from '@components/header/PrimaryNavigation'
import { useEffect, useState } from 'react';
import type { MenuItem } from '@components/header/PrimaryNavigation';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ACF } from '@app/_wordpress/Types';

export default function Header({ menuItems, loginLink, buttonLink }: {
  menuItems: MenuItem[]
  loginLink: ACF.Type.Link.Array
  buttonLink: ACF.Type.Link.Array
}) {

  const colors = {
    "default": `bg-white`,
    "menu-opened": `lg:bg-pale-pink bg-royal-purple lg:bg:pale-pink`,
  }

  const pathname = usePathname()

  switch (pathname) {
    case "/":
    case "/aba-services":
    case "/about-us/careers":
      colors["default"] = "bg-pale-pink"
      break;
    case "/contact-us":
      colors["default"] = "bg-pale-lavender"
      break;
    default:
      colors["default"] = "bg-pearl-white"
      break;
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerBackgroundColor, setHeaderBackgroundColor] = useState<string>(colors["default"]);

  const isDesktop = () => window.innerWidth > 1024
  const isMobile = () => !isDesktop()

  const renderBackgroundColor = () => {
    if (isDesktop() && window.scrollY > 700) {
      setHeaderBackgroundColor("!bg-white shadow-header");
    } else if (isDesktop()) {
      setHeaderBackgroundColor(colors["default"]);
    } else if (isMobile() && isMenuOpen) {
      setHeaderBackgroundColor(colors["menu-opened"]);
    } else if (isMobile()) {
      setHeaderBackgroundColor(colors["default"]);
    }
  }

  const handleMenuToggle = () => {
    if (isDesktop()) {
      setIsMenuOpen(false);
    }
  }

  const handleScroll = () => {
    renderBackgroundColor();
  }

  useEffect(() => {
    renderBackgroundColor();
  })

  useEffect(() => {
    if (isMobile() && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname])



  useEffect(() => {
    window.addEventListener('resize', renderBackgroundColor);
    window.addEventListener('resize', handleMenuToggle);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', renderBackgroundColor)
      window.removeEventListener('resize', handleMenuToggle);
      window.removeEventListener('scroll', handleScroll);
    }
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    renderBackgroundColor();
  }

  return <header className={`${headerBackgroundColor} ${headerBackgroundColor.includes("!bg-white") && "shadow-header"} pt-1 flex justify-between lg:px-8 items-center gap-7 h-20 z-[9999] lg:h-28 w-full fixed`}>
    <div className="ml-[15px] max-lg:w-[145px] lg:-top-2 lg:left-[-1px] lg:relative">
      <Link aria-label="Return to Homepage" href="/">
        <Logo theme={isMenuOpen ? 'solid' : 'primary'} />
      </Link>
    </div>

    <PrimaryNavigation headerBackgroundColor={headerBackgroundColor} menuItems={menuItems} isMenuOpen={isMenuOpen} />

    <div className="flex px-5 max-lg:w-full max-lg:justify-between items-center gap-2 lg:gap-7 max-lg:fixed max-lg:bottom-0 lg:justify-between mb-5 lg:px-0 lg:relative lg:top-[7px]">
      <a target={loginLink.target} className={"max-lg:hidden lg:text-dark-plum text-dark-plum text-base font-bold bottom-0 lg:hover:text-royal-purple lg:w-1/2 font-basis-grotesque-regular"} href={loginLink.url}>{loginLink.title}</a>
      <Button label="Contact Us" link={buttonLink} className={`max-lg:hidden desktop-button font-basis-grotesque-bold leading-[30px] lg:text-base lg:px-6 lg:py-2.5 lg:min-w-[155px] lg:h-[52px]`} theme="royal-purple" />
      <Button label="Log In" link={loginLink} className={` ${!isMenuOpen && "hidden"} h-[52px] py-[14px] px-[26px] desktop-button  w-full border-velvet-plum text-white`} theme="royal-purple" />
      <Button label="Contact Us" link={buttonLink} className={` ${(!isMenuOpen && "hidden")} h-[52px] py-[14px] px-[26px] font-basis-grotesque-regular desktop-button w-full border-white text-dark-plum`} theme="white" />
    </div>

    <div className="mr-[15px] lg:hidden flex justify-between gap-2 items-center">
      <Button label="Contact Us" link={buttonLink} className={`lg:hidden text-dark-plum text-[15px] leading-[30px]`} theme={isMenuOpen ? "menu-opened" : "white"} />
      <NavigationToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  </header>
}
