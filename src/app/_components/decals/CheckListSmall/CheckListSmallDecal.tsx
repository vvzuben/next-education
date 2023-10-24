import CheckListBSvg from "@components/decals/CheckListSmall/CheckListSmallSvg"
import colors from '@/tailwind.config.colors.json'
import { colorNameToCode } from "@app/helpers"

type Props = {
  color: keyof typeof colors
  children?: React.ReactNode
  className?: string
}

export default function ChecklistSmallDecal({ className, color, children }: Props): JSX.Element {
  return <div className={`relative h-full`}>
    <figure className={`absolute ${className}`}>
      <CheckListBSvg fill={colorNameToCode(color)} />
    </figure>
    {children}
  </div>
}
