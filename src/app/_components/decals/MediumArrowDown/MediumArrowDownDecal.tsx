import { colorNameToCode } from '@app/helpers'
import MediumArrowDownSvg from './MediumArrowDownSvg'
import { Color } from '@app/helpers'

type Props = {
  color: Color
  className?: string
  children?: React.ReactNode
}

export default function MediumArrowDownDecal({ className, color, children }: Props): JSX.Element {
  return <><figure className={`
  z-50 absolute ${className}`}>
    <MediumArrowDownSvg fill={colorNameToCode(color)} />
  </figure>
    {children}
  </>
}
