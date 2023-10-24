import { ACF } from "@app/_wordpress/Types";
import Link from "next/link";

const themes = {
  // FIX ME -- we should only have one purple...
  'purple': 'bg-royal-purple text-white border-royal-purple',
  'royal-purple': 'bg-royal-purple text-white border-royal-purple',
  'primary': 'bg-royal-purple text-white border-royal-purple hover:opacity-90',
  'white': 'bg-white text-black border-light-grey',
  'secondary': 'text-royal-plume border-dark-plum/30 hover:bg-royal-purple/80 hover:text-white',
  'menu-opened': 'text-white border-white/30',
  'pale-pink': 'bg-pale-pink text-dark-plum border-dark-plum',
};

export type ButtonProps = {
  label?: string;
  className?: string
  link?: ACF.Type.Link.Array
  theme: keyof typeof themes
  elm?: 'a' | 'button'
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => void
};

export type ButtonComponentFieldGroup = Omit<ButtonProps, 'className'>

export default function Button({ className, ...props }: ButtonProps): JSX.Element {
  const classes = "rounded-xl border " + themes[props.theme] + " font-normal px-[28px] py-[14px] flex font-basis-grotesque-bold justify-center items-center hover:opacity-90 " + className

  if (props.elm === 'button') {
    const label = props.label ?? props.link?.title
    return <button aria-label={label} disabled={props.disabled} onClick={props.onClick} className={classes}>
      {label}
    </button>
  }

  if (props.link?.url === undefined) {
    return <></>
  }

  return <Link onClick={props.onClick} target={props.link?.target} className={classes}
    href={props.link.url}>
    {props.link.title ?? props.label}
  </Link>
}
