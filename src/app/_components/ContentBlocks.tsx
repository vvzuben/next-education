'use client'
import Button from "@components/global/Button"
import CursiveArrowDecal from "@components/decals/CursiveArrow/CursiveArrowDecal"
import Media from "@components/Media"

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from "react"
import HeartsDecal from "./decals/Hearts/HeartsDecal"
import SquigglyLineSmallDecal from "./decals/SquigglyLineSmall/SquigglyLineSmallDecal"
import { ACF } from "@app/_wordpress/Types"
import SignatureLineDecal from "./decals/SignatureLine/SignatureLineDecal"

type Slide = ContactUsBlockComponentFieldGroup & {
  image: ACF.Type.Image.Array
  title: string
  description: string
  index: number
  hearts_decal?: boolean
}

type ContactUsBlockComponentFieldGroup = {
  title?: string
  subtitle?: string
  description?: string
  button_link?: ACF.Type.Image.Array
  blocks?: Slide[]
  alternating_arrows?: boolean
  carousel?: boolean
}

function Slide(props: Slide) {
  return <div className="flex keen-slider__slide justify-center items-center max-lg:w-full">
    <div className="flex flex-col relative">
      {props.alternating_arrows &&
        <CursiveArrowDecal direction="up" color={props.index % 2 ? "orange" : "green"} className={`-top-[10px] h-[40px] left-[190px] lg:left-[95%] ${props.index % 2 ? "lg:top-[25%]" : "lg:scale-y-100 lg:top-[15%]"} max-lg:scale-y-100 w-[113px] xl:-right-[110%] ${props.index == 2 && "lg:hidden"}`} />
      }
      <div className="flex relative justify-center items-center">
        {
          props.index == 2 && props.hearts_decal &&
          <HeartsDecal direction="right" className="-right-[40px] -top-[30px] max-lg:hidden" nested_children={false} color="royal-purple" />
        }
        <div className="w-[190px] h-[195px]">
          <Media className="w-full h-auto" {...props.image} width={190} height={195} />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 items-center">
        <h3 className="mobile-h4 lg:desktop-h4">{props.title}</h3>
        <p className="text-center max-lg:mobile-p-l lg:desktop-p-regular text-dark-plum/80">{props.description}</p>
      </div>
    </div>
  </div>
}

export default function ContentBlocks(props: ContactUsBlockComponentFieldGroup): React.JSX.Element {
  const btn = props.button_link;
  const [activeSlide, setActiveSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    disabled: !props.carousel,
    mode: 'snap',
    slideChanged(s) {
      setActiveSlide(s.track.details.rel);
    },
    loop: true,
    breakpoints: {
      '(min-width: 1024px)': {
        disabled: true
      }
    }
  })

  const scrollTo = (index: number) => instanceRef.current?.moveToIdx(index)

  return <section className="mx-auto cs container max-w-[1380px]">
    <div className="pb-16 bg-light-lavender flex flex-col gap-8 lg:pb-28 pt-16 px-10 rounded-xl overflow-hidden relative">

      <SignatureLineDecal className="sm:-left-[15%] -left-[15%] top-[0%] lg:left-[0%]" color="royal-purple" />
      <SquigglyLineSmallDecal color="royal-purple" className="w-[170px] h-[140px] -bottom-1/4 -right-[25%] sm:-right-[10%] lg:-right-[100px]" />

      <div className="flex flex-col justify-between gap-2.5 items-center lg:gap-4">
        {props.subtitle &&
          <h3 className="mobile-h5 text-center lg:desktop-h5 text-royal-purple">{props.subtitle}</h3>
        }
        {props.title &&
          <h2 dangerouslySetInnerHTML={{ __html: props.title }} className="mobile-h2 text-center lg:desktop-h2 mb-2.5" />
        }
        {props.description &&
          <p className="max-lg:mobile-p-l lg:desktop-p-l text-center lg:text-lg text-dark-plum/80 max-w-[826px]">{props.description}</p>
        }
        {btn && <Button className="mt-2.5 px-7 py-3.5 desktop-button" link={btn} label={btn.title ?? ""} theme="purple" />}
      </div>
      <div ref={sliderRef} className="keen-slider grid lg:grid-cols-3 lg:gap-24">
        {props.blocks?.map((block, idx) => (
          <Slide {...props} {...block} index={idx} key={idx} />
        ))}
      </div>
      {props.carousel &&
        <div className={"flex gap-4 items-center w-full justify-center my-4 lg:hidden"}>
          {props.blocks?.map((block, idx) => (
            <span key={idx} onClick={() => scrollTo(idx)} className={`border h-2 w-2 ${activeSlide === idx ? 'bg-light-purple' : 'border-light-grey'} border-bg-light-purple rounded hover:cursor-pointer hover:opacity-90`}></span>
          ))}
        </div>
      }
    </div>
  </section>
}
