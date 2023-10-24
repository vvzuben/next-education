import { ACF } from "@app/_wordpress/Types"
import { Color } from "@app/helpers"
import Button from "@components/global/Button"
import HeartsDecal from "./decals/Hearts/HeartsDecal"
import SignatureLineDecal from "./decals/SignatureLine/SignatureLineDecal"
import SquigglyLineSmallDecal from "./decals/SquigglyLineSmall/SquigglyLineSmallDecal"

type HeadingAndButtonComponentFieldGroup = {
  title: string
  button_link: ACF.Type.Link.Array
  button_theme: "royal-purple" | "white"
  background_color_theme: Color
  container_decal_theme?: "white_squiggly_lines",
  heading_decal?: "hearts_right"
  classes?: string
}

export default function HeadingAndButton(props: HeadingAndButtonComponentFieldGroup): React.JSX.Element {
  return <section className="container relative mx-auto overflow-hidden">
    <div className={`
    ${(props.background_color_theme == "white" && "bg-white text-dark-plum")} 
    ${(props.background_color_theme == "orange" && "bg-orange text-white")} 
    ${(props.background_color_theme == "royal-purple" && "bg-royal-purple text-white")} 
    ${(props.container_decal_theme == "white_squiggly_lines" && "!px-28 !py-14 max-sm:!p-5")}
    py-10 px-5 flex flex-col items-center justify-center gap-5 rounded-xl
    mx-auto
    ${props.classes}
   `}>

      {props.container_decal_theme == "white_squiggly_lines" &&
        <>
          <SignatureLineDecal className="top-0 -left-10 max-sm:-left-20 max-sm:-top-10" color="white" />
          <SquigglyLineSmallDecal className="w-[170px] h-[300px -bottom-[54px] -right-[45px] translate-y-1/2" color="white" />
        </>
      }

      <h3 className="mobile-h3 lg:desktop-h3 text-center relative">
        {props.title}
        {props.heading_decal == "hearts_right" &&
          <HeartsDecal className="left-[100%] -top-[32px] max-sm:left-[90%] max-sm:top-[25px]" color="white" direction="right" />
        }
      </h3>

      {props.button_link &&
        <Button label={props?.button_link?.title ?? ""}
          className={`w-[146px] desktop-button lg:py-3.5 lg:px-6
     ${props.background_color_theme == "white" && "bg-white text-dark-plum"}
      ${props.background_color_theme == "orange" && "bg-orange text-white"}
      ${props.background_color_theme == "royal-purple" && "bg-white text-dark-plum"}`}
          link={props.button_link}
          theme={props.button_theme}
        ></Button>}
    </div>
  </section>
}
