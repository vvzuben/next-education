type Props = {
  fill: string
}

export default function ChecklistSmallSvg({ fill }: Props): JSX.Element {
  return <svg width="100%" height="100%" viewBox="0 0 361 175" fill={fill}>
    <use xlinkHref={`/sprites/checklistsmall.svg#checklistsmall`} />
  </svg>
}


