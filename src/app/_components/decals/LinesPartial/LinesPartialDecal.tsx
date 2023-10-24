import { colorNameToCode } from '@app/helpers'
import LinesPartialSvg from './LinesPartialSvg'
import colors from '@/tailwind.config.colors.json'

type Props = {
  color: keyof typeof colors
  className?: string
  children?: React.ReactNode
}

export default function LinesPartial({ className, color, children }: Props): JSX.Element {
  return <figure className={`absolute ${className}`}>
    <LinesPartialSvg fill={colorNameToCode(color)} />
    {children}
  </figure>
}
