import { Color, colorNameToCode } from '@app/helpers'
import ThickSmallCircleSvg from './ThickSmallCircleSvg'

type Props = {
  color: Color
  className?: string
  children?: React.ReactNode
  nested_children?: Boolean
}

export default function ThickSmallCircleDecal({ className, color, children, nested_children }: Props): JSX.Element {
  nested_children = nested_children ?? false
  return <><figure className={`z-50 absolute -top-[5%] -left-[2.5%] w-[105%] h-auto ${className}`}>
    <ThickSmallCircleSvg fill={colorNameToCode(color)} />
    {nested_children &&
      <div className="relative z-[51]">
        {children}
      </div>
    }
  </figure>
    {!nested_children && children}
  </>
}
