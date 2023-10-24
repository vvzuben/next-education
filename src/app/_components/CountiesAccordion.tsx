'use client'

import { ACF } from "@app/_wordpress/Types"
import StyledList from "@components/_partials/StyledList"
import CircleIcon from "@components/ui/CircleIcon"
import { useState } from "react"
import Media from "@components/Media"
import MediumArrowDownDecal from "./decals/MediumArrowDown/MediumArrowDownDecal"

type CountiesAccordionComponentFieldGroup = {
  counties_component_title: string,
  counties_component_description: string,
  counties_component_image: ACF.Type.Image.Array,
  counties_component_countries: Array<{
    title: string
    counties: Array<{
      title: string
    }>
  }>
}

function County({ idx, county, defaultState }: { defaultState: boolean, idx: number, county: CountiesAccordionComponentFieldGroup["counties_component_countries"][0] }) {
  const [active, setActive] = useState<boolean>(defaultState)

  return <div key={idx} className={`${active ? 'bg-white shadow-primary' : ''} flex hover:cursor-pointer flex-col gap-3 rounded-xl`}>
    <div aria-label="Toggle" onClick={() => setActive(!active)} className={`py-3 px-5 flex justify-between items-center ${active ? '' : 'border-dark-plum/30 rounded-xl border'}`}>
      <h3 className="mobile-h4 md:desktop-h4">{county.title}</h3>
      <CircleIcon icon="caret" direction={active ? 'bottom' : 'top'} theme="lavender-mist" />
    </div>
    <StyledList className={!active ? 'hidden' : '!grid-cols-2 !sm:grid-cols-2 !md:grid-cols-2 p-5'} items={county.counties} />
  </div>
}

export default function CountiesAccordion(props: CountiesAccordionComponentFieldGroup): React.JSX.Element {
  return (
    <section className="max-w-[1380px] mx-auto cs mt-5">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3 text-center text-dark-plum relative max-w-[697px] justify-center items-center">
          <h2 dangerouslySetInnerHTML={{ __html: props.counties_component_title }} className="mobile-h2 md:desktop-h2" />
          <p className="mobile-p-l desktop-p-l text-center">{props.counties_component_description}</p>
          <MediumArrowDownDecal className="-rotate-[30deg] max-lg:-left-[50px] h-[146px] sm:h-[200px] lg:scale-y-100 lg:rotate-[10deg] lg:-left-1/4 left-0 top-3/4" color="royal-purple" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 mt-10">
          <Media className="w-full h-auto"  {...props.counties_component_image} width={610} height={583} />
          <div className="flex flex-col gap-4 ">
            {props.counties_component_countries.map((country, idx) => (
              <County key={idx} idx={idx} defaultState={idx == 0} county={country} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
