import Button, { ButtonProps } from "@components/global/Button"
import CheckListLarge from "@decals/CheckListLarge/CheckListLargeDecal"
import CheckListSmallDecal from "@decals/CheckListSmall/CheckListSmallDecal"
import CircleDecal from "@decals/Circle/CircleDecal"
import CircleQuotesDecal from "@decals/CircleQuotes/CircleQuotesDecal"
import CircleRoundedDecal from "@decals/CircleRounded/CircleRoundedDecal"
import CursiveArrowDecal from "@decals/CursiveArrow/CursiveArrowDecal"
import Media from "@components/Media"
import SquigglyLineDecal from "@decals/SquigglyLine/SquigglyLineDecal"
import SquigglyLineWideDecal from "@decals/SquigglyLineWide/SquigglyLineWideDecal"
import ThreeLines from "@decals/ThreeLines/ThreeLinesDecal"
import { ACF } from "@app/_wordpress/Types"
import StyledList from "@components/_partials/StyledList"

type DecalTemplates =
  | "checklist"
  | "checklist_and_squiggle"
  | "circle_and_arrow"
  | "circle_and_squiggly_line"
  | "circle_with_quotes"
  | "rounded_circle_and_three_lines"

type AlternatingBlocksProps = {
  blocks?: Array<{
    title: string
    description: string
    checklist?: {
      checklist?: boolean,
      title?: string
      items?: {
        item?: {
          title?: string
        }
      }[]
    }
    image: ACF.Type.Image.Array
    button_link: ACF.Type.Link.Array
    decal_overlay_decal?: DecalTemplates
  }>
}

type DecalProviderProps = {
  decal_overlay_decal?: DecalTemplates
  children: React.ReactNode
}

function DecalProvider(props: DecalProviderProps): React.JSX.Element {
  return <> {
    (props.decal_overlay_decal === "circle_and_arrow" &&
      <>
        <CircleDecal className="
        md:-left-[0%]
        lg:max-xl:w-[100%]
        rotate-[175deg]
        -top-[13%]
        w-[90%]
        h-[90%]
        z-40" color="royal-purple" />
        <CursiveArrowDecal className="bottom-[25%] right-[25%] rotate-[15deg] w-[50%] z-50" direction="up" color="orange" />
        {props.children}
      </>
    ) ||
    (props.decal_overlay_decal === "circle_and_squiggly_line" &&
      <>
        <CircleDecal className="top-[5%] -left-[5%] w-[105%] z-40" color="orange" />
        <SquigglyLineDecal className="w-full -bottom-[5%] left-1/2 -translate-x-1/2 z-50" color="royal-purple" />
        {props.children}
      </>
    ) ||
    (
      props.decal_overlay_decal == "rounded_circle_and_three_lines" &&
      <>
        <CircleRoundedDecal nested_children={false} className="z-50 w-[50%] left-[10%] top-1/2 -translate-y-1/2" color="orange">
          <ThreeLines color="royal-purple" className="w-[40%] h-[40%] z-50 -top-[25px] bottom-full -right-[10%] -rotate-[15deg]" direction="right" />
        </CircleRoundedDecal>
        {props.children}
      </>
    ) ||
    (
      props.decal_overlay_decal == "checklist" &&
      <CheckListLarge className="-left-[10%] -top-[10%] w-[100%] z-50" color="orange">
        {props.children}
      </CheckListLarge>
    ) ||
    (
      props.decal_overlay_decal == "circle_with_quotes" &&
      <>
        <CircleQuotesDecal
          className="-right-[20%]
        top-[20%]
        w-[100%]
        h-[100%]
        z-50" color="orange" />
        {props.children}
      </>
    ) ||
    (
      props.decal_overlay_decal == "checklist_and_squiggle" &&
      <>
        <CheckListSmallDecal className="-left-[12%] w-[100%] z-40" color="orange" />
        <SquigglyLineWideDecal className="z-50 left-[12%] w-[100%] -bottom-[12%]" color="royal-purple" />
        {props.children}
      </>
    ) || props.children
  }
  </>
}

export default function AlternatingBlocks(props: AlternatingBlocksProps) {
  return <section className="mb-24 mx-auto max-w-[1240px]">
    <div className="grid grid-cols-1 gap-10 lg:gap-20 justify-items-center">
      {props?.blocks?.map((block, idx) => (
        <div key={idx} className="grid lg:grid-cols-2 max-lg:justify-center max-lg:items-center gap-5 max-lg:gap-10">
          <div className={`flex items-center justify-center ${idx % 2 && "lg:order-1"}`}>
            <div className="lg:max-w-[560px] max-w-[70%] relative">
              {block.image &&
                <DecalProvider decal_overlay_decal={block.decal_overlay_decal}>
                  <Media {...block.image} width={560} height={520} />
                </DecalProvider>
              }
            </div>
          </div>

          <div className="flex flex-col order-0">
            <div className="lg:flex lg:flex-col justify-center items-center">
              <div className="lg:max-w-[450px] flex flex-col gap-5 max-lg:justify-center max-lg:items-center">
                <h2 className="mobile-h2 lg:desktop-h2 max-lg:text-center">{block.title}</h2>
                <p className="mobile-p lg:desktop-p-regular max-lg:text-center">{block.description}</p>

                <div className="flex flex-col gap-2.5">
                  {block.checklist?.checklist && block.checklist?.title &&
                    <h3 className="mobile-h5 lg:desktop-h5">{block.checklist?.title}</h3>
                  }

                  {block.checklist?.checklist && block.checklist?.items &&
                    //@ts-expect-error
                    <StyledList items={block.checklist.items} />
                  }
                </div>

                {block.button_link &&
                  <Button link={block.button_link} theme="secondary" />
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
}
