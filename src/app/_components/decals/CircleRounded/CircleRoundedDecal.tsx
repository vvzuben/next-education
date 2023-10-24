import { colorNameToCode } from '@app/helpers'
import CircleRoundedSvg from './CircleRoundedSvg'

type Props = {
  color: "orange" | "royal-purple"
  className?: string
  children?: React.ReactNode
  nested_children?: boolean
}

export default function CircleRoundedDecal({ nested_children, className, color, children }: Props): JSX.Element {
  return <><figure className={`absolute -top-[5%] -left-[2.5%] w-[105%] h-auto ${className}`}>
    <CircleRoundedSvg fill={colorNameToCode(color)} />
    {children}
  </figure>
  </>
}
