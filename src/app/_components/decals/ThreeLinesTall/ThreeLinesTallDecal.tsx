import { Color } from "@app/helpers"
import ThreeLinesTallTallSvg from "@components/decals/ThreeLinesTall/ThreeLinesTallSvg"

type Props = {
  color: Color
  className?: string
}

export default function ThreeLinesTallDecal({ color, className }: React.PropsWithChildren<Props>) {
  return <figure className={`absolute ${className}`}>
    <ThreeLinesTallTallSvg fill={color} />
  </figure>
}
