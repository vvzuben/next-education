'use client'

import useEmblaCarousel from 'embla-carousel-react'
import CircleIcon from "@components/ui/CircleIcon";
import HeartsDecal from './decals/Hearts/HeartsDecal';
import Quote from "@public/svg/quote.svg";
import Image from 'next/image';
import type React from 'react';

type TestimonialsComponentFieldGroup = {
  testimonials_component_title: string
  testimonials_component_description: string
  testimonials_component_testimonials: Array<{
    testimonial: string
    author: string
    author_title: string
  }>
}

export default function Testimonials(props: TestimonialsComponentFieldGroup): React.JSX.Element {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  return <section className="mt-8 cs">
    <div className="text-dark-plum gap-10 lg:gap-6 flex flex-col">
      <div className="container mx-auto max-w-[1240px] flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="flex flex-col gap-2 relative">
            <h2 className="pr-10 max-sm:max-w-[296px] mobile-h2 lg:desktop-h2 relative inline w-fit">
              {props.testimonials_component_title} <HeartsDecal color="orange" direction="right" className="-top-[32px]" />
            </h2>
            <p className="mobile-p-l lg:desktop-p-l">{props.testimonials_component_description}</p>
          </div>
          <div className="flex gap-3 self-end">
            <button aria-label="Scroll Back" onClick={() => emblaApi?.scrollPrev()} ><CircleIcon theme="testimonial-back" direction="left" icon="arrow" /></button>
            <button aria-label="Scroll Forward" onClick={() => emblaApi?.scrollNext()} ><CircleIcon theme="testimonial-forward" direction="right" icon="arrow" /></button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden embla" ref={emblaRef}>
        <div className="embla__container flex relative">
          {props.testimonials_component_testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white flex flex-col justify-between gap-5 mr-10 shadow-primary min-w-[95%] md:min-w-[50%] lg:min-w-[25%] lg-h-[380px] h-[350px] ml-0 p-5">
              <div className="flex flex-col gap-4">
                <figure className="w-[66px] h-[51px]">
                  <Image src={Quote} alt="" className="w-full h-auto" />
                </figure>
                <blockquote className="mobile-p font-basis-grotesque-regular text-dark-plum">
                  {testimonial.testimonial}
                </blockquote>
              </div>
              <div>
                <div className="flex flex-col">
                  <span className="text-dark-plum mobile-h5 lg:desktop-h5">{testimonial.author}</span>
                  <span className="lg:desktop-p-regular mobile-p">{testimonial.author_title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
}
