import { colorNameToCode } from '@app/helpers'
import SquigglyLineSvg from './SquigglyLineSvg'
import colors from '@/tailwind.config.colors.json'

type Props = {
  color: keyof typeof colors
  className?: string
  children?: React.ReactNode
}

export default function SquigglyLineDecal({ className, color, children }: Props): JSX.Element {
  return <figure className={`absolute ${className}`}>
    <SquigglyLineSvg fill={colorNameToCode(color)} />
    {children}
  </figure>
}
