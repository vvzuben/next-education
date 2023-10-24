import { colorNameToCode } from '@app/helpers'
import SquigglyLineLongSvg from './SquigglyLineLongSvg'
import colors from '@/tailwind.config.colors.json'

type Props = {
  color: keyof typeof colors
  className?: string
  children?: React.ReactNode
}

export default function SquigglyLinesLongDecal({ className, color, children }: Props): JSX.Element {
  return <figure className={`absolute ${className}`}>
    <SquigglyLineLongSvg fill={colorNameToCode(color)} />
    {children}
  </figure>
}
