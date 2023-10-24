'use client';

import { ACF } from "@app/_wordpress/Types";
import { Color } from "@app/helpers";
import CircleIcon, { CircleTheme } from "@components/ui/CircleIcon";
import Link from 'next/link'

type Props = ACF.Type.Link.Array & {
  fill?: Color
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  circleTheme?: CircleTheme
  transparent?: boolean
  ariaLabel?: string
}

export default function LinkAndCircleArrow(props: Props): React.JSX.Element {
  return (
    <Link aria-label={props.ariaLabel ?? props.title ?? "Open Link"} onClick={props.onClick} href={props.url} target={props.target} className={`inline-flex justify-between items-center gap-2.5 h-[44px] ${props.className}`}>
      <span className="text-base font-basis-grotesque-bold font-bold leading-[30px] tracking-[0.195px]">{props.title}</span>
      <CircleIcon transparent={props.transparent} direction="right" icon="arrow" theme={props.circleTheme ?? "lavender-mist"} />
    </Link>
  )
}
