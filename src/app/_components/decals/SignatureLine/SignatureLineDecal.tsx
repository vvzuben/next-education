import { colorNameToCode } from '@app/helpers'
import SignatureLineSvg from './SignatureLineSvg'
import { Color } from '@app/helpers'

type Props = {
  color: Color
  className?: string
}

export default function SignatureLineDecal({ className, color }: Props): JSX.Element {
  return <><figure className={`z-50 absolute ${className}`}>
    <SignatureLineSvg fill={colorNameToCode(color)} />
  </figure>
  </>
}
