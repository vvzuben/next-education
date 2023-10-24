'use client';
import { ACF } from "@app/_wordpress/Types"
import { Color } from "@app/helpers"
import LinkAndCircleArrow from "@components/_partials/LinkAndCircleArrow"
import Media from "@components/Media"
import { useModalStore } from "@stores/ModalStore";
import ContactForm from "./_forms/ContactForm";

type Block = {
  theme?: Color
  image?: ACF.Type.Image.Array
  title?: string
  description?: string
  link?: ACF.Type.Link.Array
  open_modal_on_click?: boolean
  modal: "contact_form"
  contact_form_sucess_modal?: ACF.Group.ContactForm.contact_form_success_modal
}

function Block(props: Block) {
  const modalStore = useModalStore()

  const handleOnClick = (modal?: "contact_form") => {
    if (modal == "contact_form" && props.contact_form_sucess_modal) {
      modalStore.setContent(<ContactForm contact_form_sucess_modal={props.contact_form_sucess_modal} />);
      modalStore.setIsOpen(true);
    }
  }

  return <div className={`
  flex
  flex-col
  gap-2.5
  items-center
  justify-center
  md:gap-5
  md:h-[415px]
  md:px-10
  md:py-16
  px-5
  py-8
  rounded-lg
  text-white
  bg-${props.theme}`}>
    <div className="max-md:hidden flex justify-center items-center md:w-[182px] md:h-[175px]">
      {props.image &&
        <Media className="w-full h-auto" {...props.image} width={182} height={175} />
      }
    </div>
    <div className="flex flex-col gap-2.5 justify-center items-center">
      <h2 className="text-center mobile-h3 lg:desktop-h3 text-white">{props.title}</h2>
      <p className="text-center mobile-p lg:desktop-p-regular text-white opacity-80">{props.description}</p>
    </div>
    {props.link && !props.open_modal_on_click &&
      <LinkAndCircleArrow circleTheme="transparent" {...props.link} />
    }

    {props.link && props.open_modal_on_click && props.modal == "contact_form" &&
      <LinkAndCircleArrow onClick={(e) => handleOnClick(props.modal)} circleTheme="transparent"  {...props.link} />
    }
  </div>
}

type Props = {
  blocks?: Block[]
  title?: string
  subtitle?: string
  description?: string
  contact_form_sucess_modal: ACF.Group.ContactForm.contact_form_success_modal
  children?: React.ReactNode
}

export default function ColoredBlocks(props: Props) {
  return <section className="
  relative
    bg-pale-lavender
    bg-paper
    bg-bottom
    bg-no-repeat
    bg-contain
    pb-[143px]
    after:absolute
    after:-bottom-9
    after:bg-decal-arrow-right-orange 
    after:h-[143px] 
    after:left-1/2
    after:-translate-x-1/2
    after:x-translate-y-1/2
    max-lg:pb-[143px]
    max-lg:after:-bottom-12
    max-lg:mb-20
    mb-20
    after:rotate-90
    after:-scale-y-100
    after:w-[143px]
  ">
    {props.children}
    <div className="
      max-w-[1240px] 
      mx-auto 
">
      <div className="flex flex-col">
        <h5 className="mobile-h5 lg-desktop-h5">{props.subtitle}</h5>
        <h1 className="mobile-h5 lg-desktop-h5">{props.title}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {props?.blocks?.map((block, idx) => <Block contact_form_sucess_modal={props.contact_form_sucess_modal} key={idx} {...block} />)}
      </div>
    </div>
  </section>
}
