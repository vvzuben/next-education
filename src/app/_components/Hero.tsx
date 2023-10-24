import Button from '@components/global/Button';
import Image from 'next/image';
import { ACF } from '@app/_wordpress/Types';

type HeroComponentFieldGroup = {
  title_classes?: string
  down_arrow?: Boolean
  hero_component_page_title: string
  hero_component_title: string
  hero_component_layout: "default" | "dense"
  hero_component_description: string
  hero_component_image_before_title: Boolean
  hero_component_background_color: "bg-white" | "bg-pale-pink" | "bg-pearl-white"
  hero_component_buttons: Array<{
    label: string
    link: ACF.Type.Link.Array
    theme: "royal-purple" | "pale-pink"
  }>
  hero_component_image: ACF.Type.Image.Array
}

export default function Hero(props: HeroComponentFieldGroup): React.JSX.Element {
  return <section className={`${props.hero_component_background_color ?? "bg-pale-pink"} bg-paper bg-bottom bg-no-repeat bg-contain ${props.down_arrow && "mb-20"}`}>
    <div className={`
      ${props.hero_component_image_before_title ? "" : "max-lg:pt-6"}
      ${(props.down_arrow && "md:after:-bottom-[5%] after:-translate-x-1/2 after:absolute after:h-[143px] after:bg-decal-arrow-right-orange after:left-1/2 after:rotate-90 after:w-[143px] after:-bottom-[40px]")}
      font-gta-light
      gap-y-5
      grid
      grid-cols-1
      max-w-[1240px]
      md:grid-cols-2
      mx-auto
      ${(props.down_arrow && "pb-[80px]")}
      relative 
      `}>
      <div className={`${props.hero_component_image_before_title ? "order-1" : "order-0"} 
            ${props.hero_component_layout === "dense" ? "" : "xl:max-w-[549px] xl-py-[150px]"}
            flex 
            flex-col 
            gap-5 
            items-center 
            justify-center 
            self-center
            xl:gap-9 
            xl:items-start 
            xl:justify-start 
            `}>
        <div className="flex flex-col gap-1.5">
          {props.hero_component_page_title &&
            <h5 className="mobile-h5 max-xl:text-center lg:desktop-h5 text-royal-purple">{props.hero_component_page_title}</h5>
          }

          {props.hero_component_title &&
            <h1 dangerouslySetInnerHTML={{ __html: props.hero_component_title }} className={`relative -left-[5px] max-xl:mobile-h1 max-xl:text-center font-gta-light xl:desktop-h1 max-lg:text-[35px] ${props.title_classes} `} />
          }
        </div>

        {props.hero_component_description &&
          <p className="mobile-p text-dark-plum max-xl:text-center font-basis-grotesque-regular opacity-80 xl:desktop-p-l">
            {props.hero_component_description}
          </p>
        }

        {props.hero_component_buttons?.length &&
          <div className="flex max-md:flex-col gap-2.5 max-md:w-full">
            {props.hero_component_buttons.map((button, idx) => (
              <Button className="desktop-button font-bold font-basis-grotesque-bold py-[10px] px-[28px]" key={idx} {...button} />
            ))}
          </div>
        }

      </div>

      {props.hero_component_image?.sizes?.['789x632'] &&
        <Image loading="eager" width={789} height={632} className="w-full h-auto" src={props.hero_component_image.sizes['789x632']} alt={props.hero_component_image.alt} />
      }
    </div>
  </section>
}
