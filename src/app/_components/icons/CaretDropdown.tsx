import { Color, colorNameToCode } from "@app/helpers";

type Props = {
  stroke: Color 
  rotate?: boolean
}

export default function CaretDropdown(props: Props): React.JSX.Element {
  const stroke = colorNameToCode(props.stroke)

  return (
    <svg className={props.rotate ? "" : "rotate-180"} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.54492 8.90918L6.99947 4.45463L11.454 8.90918" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
