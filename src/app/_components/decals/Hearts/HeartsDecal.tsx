import { colorNameToCode } from '@app/helpers'
import HeartsSvg from './HeartsSvg'
import { Color } from '@app/helpers'

type Props = {
  color: Color
  className?: string
  children?: React.ReactNode
  nested_children?: Boolean
  direction: "left" | "right"
}

export default function HeartsDecal({ className, color, children, direction, nested_children }: Props): JSX.Element {
  nested_children = nested_children ?? false
  return <><figure className={`
  ${direction == "right" && "right-0"} 
  ${direction == "left" && "left-0"} 
  z-50 absolute w-[65px] h-[65px] ${className}`}>
    <HeartsSvg fill={colorNameToCode(color)} />
    {nested_children &&
      <div className="relative z-[51]">
        {children}
      </div>
    }
  </figure>
    {!nested_children && children}
  </>
}
