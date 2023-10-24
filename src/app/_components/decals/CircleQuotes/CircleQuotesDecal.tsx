import { colorNameToCode } from '@app/helpers'
import CircleQuotesSvg from './CircleQuotesSvg'

type Props = {
  color: "orange" | "royal-purple"
  className?: string
}

export default function CircleQuotesDecal({ className, color }: Props): JSX.Element {
  return (
    <figure className={`absolute ${className}`}>
      <CircleQuotesSvg fill={colorNameToCode(color)} />
    </figure>
  )
}
