import { Color, colorNameToCode } from '@app/helpers'
import SquigglyLineSmallSvg from './SquigglyLineSmallSvg'

type Props = {
  color: Color
  className?: string
  children?: React.ReactNode
  nested_children?: Boolean
}

export default function SquigglyLineSmallDecal({ className, color, children, nested_children }: Props): JSX.Element {
  nested_children = nested_children ?? false
  return <><figure className={`z-50 absolute w-[105%] h-auto ${className}`}>
    <SquigglyLineSmallSvg fill={colorNameToCode(color)} />
    {nested_children &&
      <div className="relative z-[51]">
        {children}
      </div>
    }
  </figure>
    {!nested_children && children}
  </>
}
