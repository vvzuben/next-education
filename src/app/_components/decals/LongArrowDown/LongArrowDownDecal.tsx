import { colorNameToCode } from '@app/helpers'
import LongArrowDownSvg from './LongArrowDownSvg'
import { Color } from '@app/helpers'

type Props = {
  color: Color
  className?: string
  children?: React.ReactNode
}

export default function LongArrowDownDecal({ className, color, children }: Props): JSX.Element {
  return <><figure className={`
  z-50 absolute ${className}`}>
    <LongArrowDownSvg fill={colorNameToCode(color)} />
  </figure>
    {children}
  </>
}
