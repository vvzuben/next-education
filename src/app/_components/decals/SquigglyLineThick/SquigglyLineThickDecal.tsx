import { Color, colorNameToCode } from '@app/helpers'
import SquigglyLineThickSvg from './SquigglyLineThickSvg'

type Props = {
  color: Color
  className?: string
}

export default function SquigglyLineThickDecal({ className, color }: Props): JSX.Element {
  return <><figure className={`z-50 absolute h-auto ${className}`}>
    <SquigglyLineThickSvg fill={colorNameToCode(color)} />
  </figure>
  </>
}
