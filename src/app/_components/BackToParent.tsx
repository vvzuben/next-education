import Link from 'next/link';
import CircleIcon from '@components/ui/CircleIcon';
import { ACF } from '@app/_wordpress/Types';

export default function BackToParent(props: ACF.Type.Link.Array): React.JSX.Element {
  return <section className="container mx-auto justify-center items-center flex">
    <Link href={props.url} className="inline-flex justify-between items-center gap-2.5 h-[44px]">
      <CircleIcon direction="left" icon="arrow" theme="lavender-mist" />
      <span className="text-[16px] font-basis-grotesque-bold font-bold leading-[30px] tracking-[0.195px]">{props.title}</span>
    </Link>
  </section>
}
