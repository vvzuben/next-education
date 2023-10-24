'use client';

import { ACF } from '@app/_wordpress/Types';
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react';
import CursiveArrowAltDecal from './decals/CursiveArrowAlt/CursiveArrowAltDecal';

type Props = {
  animation_duration?: number
  images?: {
    image?: ACF.Type.Image.Array
    image_size?: string
  }[]
}

export default function ImageCarousel(props: Props): React.JSX.Element | null {

  const [sliderRef, emblaApi] = useEmblaCarousel({
    dragFree: false,
    loop: true,
    watchDrag: false,
    align: 'start',
    duration: props.animation_duration ?? 15000,
    skipSnaps: true,
    slidesToScroll: props.images?.length,
  })

  useEffect(() => {
    if (!emblaApi?.scrollProgress()) {
      emblaApi?.scrollNext()
    }
    emblaApi?.on('slidesChanged', () => emblaApi?.scrollNext())
  }, [emblaApi]);

  if (props.images?.length === 0) return null

  return <section className="half-bg-pale-pink relative overflow-x-hidden mb-20">
    <CursiveArrowAltDecal color="orange" className="absolute left-1/2 -translate-x-1/2 -top-[0px] w-[150px] z-[999]" direction="down" />
    <div ref={sliderRef}>
      <div className="embla flex embla__container gap-5">
        {props.images && props?.images?.map(({ image, image_size }, idx) => {
          const size = image_size?.split('x').map(Number) ?? [150, 150]
          return <div key={idx} className="flex shrink-0 justify-center items-center">
            {image?.sizes &&
              <Image width={size[0]} height={size[1]} src={image.sizes[image_size ?? "150x150"]} alt={image.alt} />
            }
          </div>
        })}

        {props.images && props?.images?.map(({ image, image_size }, idx) => {
          const size = image_size?.split('x').map(Number) ?? [150, 150]

          return <div key={idx} className="flex shrink-0 justify-center items-center">
            {image?.sizes &&
              <Image width={size[0]} height={size[1]} src={image.sizes[image_size ?? "150x150"]} alt={image.alt} />
            }
          </div>
        })}
      </div>
    </div>
  </section>
}
