import './globals.css'
import './decals.scss'

import './_styles/breaks.css'
import './_styles/fonts.scss'
import './_styles/wordpress.scss'

import {
  basis_grotesque_bold,
  basis_grotesque_regular,
  gta_alpina_standard_light,
  gta_alpine_standard_regular
} from './fonts'
import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
import { WP_Query } from '@app/_wordpress/WPClient'
import Modal from '@components/ui/Modal'
import type { Metadata } from "next";

const default_keywords = [
  "1-1 sessions",
  "ABA provider",
  "BCBA",
  "Board Certified Behavior Analyst",
  "Caregiver training",
  "Child's journey",
  "Child's needs",
  "Dedicated Support Staff",
  "Direct therapy services",
  "Evidence-based therapies",
  "Exceed expectations of care",
  "Family-oriented",
  "Full potential",
  "In-home access to specialists",
  "Individualized treatment planning",
  "Inland Empire",
  "Parent Consultation",
  "Personalized ABA treatment",
  "Quality health care",
  "Research-backed methodologies"
];

export const metadata = {
  title: 'First Step Children\'s Network',
  description: "First Step Children's Network is a BCBA founded ABA provider in the Inland Empire. We specialize in personalized ABA treatment that best suits your child's needs. Get started with us today!",
  keywords: default_keywords,
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
} as Metadata

export default async function RootLayout(props: {
  children: React.ReactNode
}) {
  const [options] = await WP_Query<any>('options/all');

  return (
    <html lang="en" className={`${gta_alpina_standard_light.variable} ${gta_alpine_standard_regular.variable} ${basis_grotesque_regular.variable} ${basis_grotesque_bold.variable}
    `}>
      <body className="text-base text-dark-plum bg-pearl-white">
        <Header loginLink={options.login_link} buttonLink={options.button_link} menuItems={options.primary_navigation_links} />
        <main className="grid grid-cols-1 pt-[80px] lg:pt-[104px]">
          {props.children}
          <Modal />
        </main>
        <Footer {...options.footer} />
      </body>
    </html>
  )
}
