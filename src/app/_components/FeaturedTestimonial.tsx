import CircleDecal from "./decals/Circle/CircleDecal"
import Image from "next/image";
import Media, { MediaProps } from "@components/Media"
import SmallTestimonialArrow from "@public/png/arrow.png"

type FeaturedTestimonialComponentFieldGroup = {
  featured_testimonial_component_title?: string
  featured_testimonial_component_image?: MediaProps
  featured_testimonial_component_testimonial?: string
  featured_testimonial_component_author?: string
  featured_testimonial_component_author_title?: string
}

export default function FeaturedTestimonial(props: FeaturedTestimonialComponentFieldGroup): React.JSX.Element {
  return <section className="container mx-auto cs">
    <div className="bg-peach-whip
    container
    justify-center
    max-w-[1380px]
    mx-auto
    px-4
    gap-4
    py-14
    flex flex-col
    text-dark-plum
    lg:gap-10
    rounded-xl">
      <h2 className="mobile-h2 lg:desktop-h2 text-center">{props.featured_testimonial_component_title ?? ""}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex items-center justify-center relative">
          {props.featured_testimonial_component_image &&
            <CircleDecal className="lg:w-[540px] top-[5%] h-auto lg:top-[15px] lg:-left-[25px]" color="orange">
              <Media {...props?.featured_testimonial_component_image} />
            </CircleDecal>
          }
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1">
          <div className="flex flex-col gap-5 lg:justify-center items-center">
            <blockquote className="
          after:bottom-[40px]
          after:-right-[30px] 
          after:-rotate-[167deg]
          after:absolute 
          after:bg-quote
          after:h-[60px]
          after:w-[60px]
          before:-left-[5px]
          before:-top-[50px]
          before:absolute 
          before:bg-quote
          before:h-[55px]
          before:w-[60px]
          font-gta-light
          leading-[132.3%] 
          lg:font-normal 
          lg:leading-[126.3%] 
          lg:text-[30px] 
          lg:tracking-[-0.8px] 
          max-w-[80%]
          relative
          text-[28px] 
          text-black
          text-left
          gap-5
          flex
          flex-col
          tracking-[-0.56px]">{props.featured_testimonial_component_testimonial}
              <div
                className="
              lg:desktop-h5
              mobile-h5
              relative
              flex 
              flex-col
              pl-[80px]
              pt-[10px]
            ">
                <Image width="52" height="34" src={SmallTestimonialArrow} alt="" className="absolute top-0 left-0" />
                {props.featured_testimonial_component_author}
                <span className="text-base font-basis-grotesque-regular">{props.featured_testimonial_component_author_title}</span>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
}

