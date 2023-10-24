import Media from "@components/Media";
import { ACF } from "@app/_wordpress/Types";
import LongArrowDownDecal from "@components/decals/LongArrowDown/LongArrowDownDecal";

type Props = ACF.Type.Image.Array

export default function HeroImage(props: Props) {
  return <section className="relative">
    <LongArrowDownDecal className="
    -rotate-[230deg]
    lg:-rotate-[220deg]
    lg:-top-[20%]
    -top-[15%] 
    w-[53%]
    h-[53%]
    lg:h-[500px]
    lg:left-[10%]
    md:-top-[20%] 
    -scale-y-100"
      color="orange" />
    <Media loading="eager" full={true} className="lg:hidden w-full h-auto" {...props} width={375} height={327} />
    <Media loading="eager" full={true} className="hidden lg:block w-full h-auto" {...props} width={1240} height={628} />
  </section>
}
