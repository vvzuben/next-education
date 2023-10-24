import { Color, colorNameToCode } from '@app/helpers'
import SquigglyLineWideSvg from './SquigglyLineWideSvg'

type Props = {
  color: Color
  className?: string
  children?: React.ReactNode
}

export default function SquigglyLineWideDecal({ className, color, children }: Props): JSX.Element {
  return <figure className={`absolute ${className}`}>
    <div className="relative">
      <SquigglyLineWideSvg fill={colorNameToCode(color)} />
      {children}
    </div>
  </figure>
}
