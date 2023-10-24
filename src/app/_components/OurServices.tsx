import StyledList from "@components/_partials/StyledList"
import Button from "@components/global/Button"
import { ButtonComponentFieldGroup } from "@components/global/Button"
import { StyledListProps } from "@components/_partials/StyledList"
import { ACF } from "@app/_wordpress/Types"
import Media from "@components/Media"

type OurServicesComponentFieldGroup = {
  list_of_services_component_title: string
  list_of_services_component_description: string
  list_of_services_component_list_title: string
  list_of_services_component_list_of_services: StyledListProps['items']
  list_of_services_component_buttons: Array<ButtonComponentFieldGroup>
  list_of_services_component_image: ACF.Type.Image.Array
}

export default async function OurServices(props: OurServicesComponentFieldGroup): Promise<React.JSX.Element> {
  return <section className="component text-dark-plum cs">
    <div className="max-w-[1238px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 lg:justify-items-center">
        <div className="flex flex-col gap-4 lg:w-[505px] xl:mt-[66px]">
          <h2 className="max-lg:mobile-h2 lg:desktop-h2">
            {props.list_of_services_component_title}
          </h2>
          <p className="max-lg:mobile-p lg:desktop-p-l">
            {props.list_of_services_component_description}
          </p>
          <div className="font-basis-grotesque-regular font-normal flex flex-col gap-1">
            {props.list_of_services_component_list_title &&
              <h3 className="max-lg:mobile-h5 lg:desktop-h5">{props.list_of_services_component_list_title}</h3>
            }
            <StyledList items={props.list_of_services_component_list_of_services} />
          </div>

          {props?.list_of_services_component_buttons?.map((button, idx) => (
            <Button className="w-[196px] desktop-button py-3.5 px-7" key={idx} {...button} />
          ))}
        </div>

        <div className="lg:row-start-1">
          <Media className="w-full h-auto rounded-md" {...props.list_of_services_component_image} width={619} height={572} />
        </div>
      </div>
    </div>
  </section>
}
