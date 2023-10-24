import Button from './global/Button'
import Media from '@components/Media'
import { ACF } from '@app/_wordpress/Types'

type Props = {
  title?: string
  subtitle?: string
  image?: ACF.Type.Image.Array
  button_link: ACF.Type.Link.Array
  button_theme: "royal-purple"
}

export default function PageNotFound(props: Props) {
  return <section className="bg-white last-of-type:!mb-60 lg:last-of-type:!mb-40">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

      <div className="flex items-center justify-center max-md:order-1">
        {props.image?.url &&
          <Media className="w-full h-auto rounded-md" {...props.image} width={610} height={583} />
        }
      </div>

      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-5">
          {props.subtitle &&
            <h5 className="text-center flex mobile-h5 lg:desktop-h5 text-royal-purple">
              {props.subtitle}
            </h5>
          }

          {props.title &&
            <h2 className="text-center flex mobile-h2 lg:desktop-h2 text-dark-plum">
              {props.title}
            </h2>
          }
        </div>

        {props.button_link && props.button_theme &&
          <Button
            label={props.button_link.title ?? ""}
            className="desktop-button font-bold font-basis-grotesque-bold py-[10px] px-[28px]"
            theme={props.button_theme}
            {...props.button_link}
          />
        }
      </div>
    </div>
  </section>
}
