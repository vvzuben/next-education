import CheckListASvg from "@components/decals/CheckListLarge/CheckListLargeSvg"
import colors from '@/tailwind.config.colors.json'

type Props = {
  color: keyof typeof colors
  children: React.ReactNode
  className?: string
}

export default function CheckListLarge({ className, color, children }: Props): JSX.Element {
  return <div className={`relative h-full`}>
    <figure className={`absolute ${className}`}>
      <CheckListASvg />
    </figure>
    {children}
  </div>
}
