import { Color } from "@app/helpers"
import ThreeLinesSvg, { ThreeLinesSvgProps } from "@components/decals/ThreeLines/ThreeLinesSvg"

type Props = {
  color: Color
  direction: ThreeLinesSvgProps['direction']
  className?: string
}

export default function ThreeLines({ children, color, direction, className }: React.PropsWithChildren<Props>) {
  return (
    <>
      <figure className={`-top-[22px] w-[50px] h-[33px] absolute ${direction == "left" ?
        '-top-[22px] -right-[22px]' :
        '-right-[5%] -top-[5%]'} ${className}`}
      >
        <ThreeLinesSvg fill={color} direction={direction} />
      </figure>
      {children}
    </>
  )
}
