import { Color, colorNameToCode } from '@app/helpers'
import CircleSvg from './CircleSvg'

type Props = {
  color: Color
  className?: string
  children?: React.ReactNode
  nested_children?: Boolean
}

export default function CircleDecal({ className, color, children, nested_children }: Props): JSX.Element {
  nested_children = nested_children ?? false
  return <><figure className={`z-50 absolute -top-[5%] -left-[2.5%] w-[105%] h-auto ${className}`}>
    <CircleSvg fill={colorNameToCode(color)} />
    {nested_children &&
      <div className="relative z-[51]">
        {children}
      </div>
    }
  </figure>
    {!nested_children && children}
  </>
}
