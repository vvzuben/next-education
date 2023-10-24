import React from 'react'
import { ACF } from '@app/_wordpress/Types'
import Map from '@components/GoogleMap'
import LinkAndCircleArrow from "@components/_partials/LinkAndCircleArrow"
import ThreeLinesTallDecal from './decals/ThreeLinesTall/ThreeLinesTallDecal'

type Props = {
  title: string
  content: string
  link: ACF.Type.Link.Array
  marker: ACF.Type.GoogleMap.Array
}

export default function ContactInformation(props: Props) {
  return <section className="container mx-auto cs">
    <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-1 bg-pearl-white">
      <div className="relative flex flex-col bg-white p-1 rounded-xl justify-center items-center h-[300px]">
        <ThreeLinesTallDecal className="absolute w-3/4 z-0 -top-[75px] -left-[20px] lg:-top-[50px] lg:-left-[50px]" color="orange" />
        {props.marker && <Map {...props.marker} />}
      </div>
      <div className="flex flex-col md:justify-center md:items-center">
        <div className="max-w-[400px] flex flex-col gap-3 md:gap-7">
          <h2 className="mobile-h2 lg:desktop-h2"> {props.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: props.content }} className="text-dark-plum font-basis-grotesque-regular text-base" />
          <div className="md:max-lg:w-3/4">
            <LinkAndCircleArrow {...props.link} />
          </div>
        </div>
      </div>
    </div>
  </section>
}
