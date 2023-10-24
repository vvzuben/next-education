import CursiveArrowSvg from "@components/decals/CursiveArrow/CursiveArrowSvg"
import { Color, colorNameToCode } from "@app/helpers"

type Props = {
  color: Color
  children?: React.ReactNode
  className?: string
  direction: "up" | "down" | "left" | "right"
  nested_children?: Boolean
}

export default function CursiveArrowDecal({ className, color, nested_children, children, direction }: Props): JSX.Element {
  nested_children = nested_children ?? false
  return <>
    <figure className={`${className}
    ${direction == "up" && "scale-y-[-1]"} 
    ${direction == "down" && "scale-y-[-1] rotate-[90deg]"} 
    absolute `}>
      <CursiveArrowSvg fill={colorNameToCode(color)} />
      {nested_children &&
        <div className="relative">
          {children}
        </div>
      }
    </figure>
    {!nested_children && children}
  </>
}
