type Props = {
  className?: string
}

export default function Arrow({ className }: Props) {
  return (
    <svg width="100%" className={className} height="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.1431 10L2.85735 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.57129 15.8336L2.73796 10.0003L8.57129 4.16695" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)
}
