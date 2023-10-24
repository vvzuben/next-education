import { colorNameToCode } from '@app/helpers'
import SquigglyLineEightSvg from './SquigglyLineEightSvg'
import colors from '@/tailwind.config.colors.json'

type Props = {
  color: keyof typeof colors
  className?: string
  children?: React.ReactNode
}

export default function SquigglyLinesEightDecal({ className, color, children }: Props): JSX.Element {
  return <figure className={`absolute ${className}`}>
    <SquigglyLineEightSvg fill={colorNameToCode(color)} />
    {children}
  </figure>
}
