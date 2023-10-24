
import CursiveArrowAltSvg from "@components/decals/CursiveArrowAlt/CursiveArrowAltSvg"
import { Color, colorNameToCode } from "@app/helpers"

type Props = {
  color: Color
  children?: React.ReactNode
  className?: string
  direction: "up" | "down" | "left" | "right"
}

export default function CursiveArrowAltDecal({ className, color, direction }: Props): JSX.Element {
  return <>
    <figure className={`${className}
    ${direction == "up" && "scale-y-[-1]"} absolute `}>
      <CursiveArrowAltSvg fill={colorNameToCode(color)} />
    </figure>
  </>
}
