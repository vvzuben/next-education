'use client'

import { WP } from "@app/_wordpress/Types"
import BackToParent from './BackToParent';
import Button from './global/Button';
import { Color } from '@app/helpers';
import ThickSmallCircleDecal from './decals/ThickSmallCircle/ThickSmallCircleDecal';

type Props = {
  acf: WP.Page["acf"]
  className?: string
}

export default function PageTitleAndSubTitle(props: Props) {
  const background_color: Color = props.acf?.page_meta?.background_color_theme ?? "white"

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    const should_scroll = e.currentTarget.getAttribute("href")?.includes("#scroll-to")

    if (!should_scroll) return

    let target = e.currentTarget.getAttribute("href")?.split("#scroll-to-")[1]

    if (!target) return

    const options: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    }

    const t = document.getElementById(target)

    if (t) {
      t.style.scrollMarginTop = "120px"
      t.scrollIntoView(options)
    }
  }

  return <section className={`max-lg:pt-4 bg-${background_color} ${props.className}`}>
    <div className="flex flex-col gap-2 lg:gap-5 items-center justify-center pt-4 lg:pt-8">
      {
        props.acf?.page_meta?.back_to_link?.url &&
        <BackToParent {...props.acf.page_meta.back_to_link} />
      }
      {
        props.acf?.page_meta?.subtitle &&
        <h1 className="mobile-h5 lg:desktop-h5 text-royal-purple relative">
          {props.acf.page_meta.subtitle}
          <ThickSmallCircleDecal className="w-[126px] h-[68px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" color="orange" />
        </h1>
      }
      {
        props.acf?.page_meta?.primary_title &&
        <h1 dangerouslySetInnerHTML={{ __html: props.acf.page_meta.primary_title }} className="text-center mobile-h1 lg:desktop-h1" />}
      {
        props.acf?.page_meta?.content_and_button &&
        <div className={`flex justify-center items-center text-dark-plum opacity-80 flex-col gap-8 pb-8
        `}>
          <p dangerouslySetInnerHTML={{ __html: props.acf.page_meta.content_and_button.content }} className="text-center mobile-p lg:desktop-p-l" />
          {props.acf.page_meta.content_and_button.link &&
            <Button className="scroll-to" onClick={(e) => handleClick(e)} link={props.acf.page_meta.content_and_button.link} theme={props.acf.page_meta.content_and_button.theme} />
          }
        </div>
      }
    </div>
  </section>
}
