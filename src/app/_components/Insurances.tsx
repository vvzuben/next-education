import { ACF } from '@app/_wordpress/Types'
import Image from 'next/image'

type InsurancesComponentFieldGroup = {
  insurances_component_title: string
  insurances_component_description: string
  insurances_component_logos: Array<{
    logo: ACF.Type.Image.Array
  }>,
  insurances_component_footer_copy: string
}

export default function Insurances(props: InsurancesComponentFieldGroup): React.JSX.Element {
  return <section id="insurances" className="max-w-[1240px] mx-auto px-5 flex flex-col justify-center items-center gap-5 py-5">
    <h3 className="mobile-h3 desktop-h3 text-center">{props.insurances_component_title}</h3>
    <div className="grid gap-y-6 grid-cols-2 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {props.insurances_component_logos.map((logo, idx) => (
        <div key={idx} className="w-40 h-16 flex justify-center items-center px-7 py-5 bg-pale-pink rounded-xl">
          <Image className={`${logo.logo.height < 150 ? 'w-full h-auto' : 'w-auto h-[200%]'}`} width={logo.logo.width} height={logo.logo.height} src={logo.logo.url} alt={logo.logo.alt} />
        </div>
      ))}
    </div>
    <p dangerouslySetInnerHTML={{ __html: props.insurances_component_footer_copy }}
      className="insurances text-sm lg:text-base text-center opacity-60 leading-[25px] lg:leading-[26px] font-basis-grotesque-regular text-dark-plum"></p>
  </section>
}
