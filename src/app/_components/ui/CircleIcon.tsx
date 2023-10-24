'use client';

import { Color } from "@app/helpers";
import Arrow from "@components/icons/Arrow";
import Caret from "@components/icons/Caret"

export type CircleTheme = "lavender-mist" |
  "default" |
  "lavender-mist-disabled" |
  "royal-purple" |
  "royal-purple-active" |
  "royal-purple-opacity" |
  "testimonial-back" |
  "testimonial-forward" |
  "transparent"

type Props = {
  direction?: "left" | "right" | "top" | "bottom"
  icon: "caret" | "arrow" | number
  onClick?: Function
  theme: CircleTheme
  fill?: Color
  transparent?: boolean
  className?: string
}

export default function CircleIcon(props: Props): JSX.Element {
  const direction = props.direction ? props.direction : "left"

  const themes = {
    "lavender-mist": {
      svg_classes: "stroke-royal-purple group-hover:stroke-white",
      classes: "bg-light-lavender hover:bg-royal-purple hover:opacity-100 hover:text-white text-royal-purple"
    },
    "royal-purple": {
      svg_classes: "stroke-light-lavender group-hover:stroke-white",
      classes: "bg-royal-purple hover:opacity-90 hover:text-white text-white"
    },
    "transparent": {
      svg_classes: "stroke-white",
      classes: "hover:opacity-90 bg-white bg-opacity-[0.15] hover:bg-opacity-30"
    },
    "testimonial-back": {
      svg_classes: "stroke-royal-purple group-hover:stroke-white",
      classes: "border border-light-grey hover:border-royal-purple bg-transparent hover:bg-royal-purple hover:opacity-100 hover:text-white text-white"
    },
    "testimonial-forward": {
      svg_classes: "stroke-white",
      classes: "bg-royal-purple border border-royal-purple hover:opacity-90"
    },
    "royal-purple-opacity": {
      svg_classes: "stroke-royal-purple group-hover:stroke-white",
      classes: "bg-royal-purple hover:bg-royal-purple hover:opacity-100 hover:text-white text-white"
    },
    "royal-purple-active": {
      svg_classes: "stroke-light-lavender group-hover:stroke-white",
      classes: "bg-royal-purple text-white"
    },
    "lavender-mist-disabled": {
      svg_classes: "stroke-royal-purple",
      classes: "opacity-[0.35] bg-light-lavender"
    },
    "default": {
      svg_classes: "stroke-royal-purple group-hover:stroke-white",
      classes: "bg-light-lavender hover:bg-royal-purple hover:opacity-100 hover"
    }
  }

  const key = props.theme

  return (
    <span onClick={(z) => props.onClick && props.onClick(z)} className={`
    h-[44px]
    inline-flex
    items-center
    justify-center 
    rounded-full
    w-[44px] 
    group
    ${props.className}
    ${(props.transparent && "bg-opacity-[0.15]")}
    ${themes[key].classes}
    ${(direction === "top" && "-rotate-90")}
    ${(direction === "bottom" && "rotate-90")}
    ${(direction === "right" && "rotate-180")}
    p-3
    `}>
      {props.icon === "caret" && <div className="-rotate-90"><Caret fill={props.fill} className={themes[key].svg_classes} /></div>}
      {props.icon === "arrow" && <Arrow className={themes[key].svg_classes} />}
      {props.icon !== "caret" && props.icon !== "arrow" && <>{props.icon}</>}
    </span >
  )
}
