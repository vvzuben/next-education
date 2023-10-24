type Props = {
  className?: string
  fill?: string
}

export default function Caret(props: Props): React.JSX.Element {
  return (<svg className={props.className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="caret-up">
      <path id="Vector" d="M3 13L10 6L17 13"
        stroke={props.fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>)
}
