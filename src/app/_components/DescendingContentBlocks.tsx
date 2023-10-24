import LongArrowDownDecal from "@components/decals/LongArrowDown/LongArrowDownDecal"
import MediumArrowDownDecal from "@components/decals/MediumArrowDown/MediumArrowDownDecal"

type Props = {
  blocks: {
    title?: string
    content?: string
  }[]
}

export default function DescendingContentBlocks(props: Props) {
  return <section className="mb-40 mt-36 text-dark-plum">
    <div className="mx-auto max-w-[1240px] flex flex-col gap-y-[200px] sm:gap-y-10 lg:gap-y-20">
      {props.blocks && props.blocks.map((block, idx) => {
        return <div key={idx} className={`flex lg:gap-y-44 ${idx % 2 ? "justify-end" : "justify-start"}`}>
          <div className={`relative flex flex-col gap-3 ${idx % 2 ? "w-[80%] sm:w-[60%] lg:w-[610px]" : "w-[80%] sm:w-[80%] lg:w-[795px]"}`}>
            {idx == 0 && <LongArrowDownDecal className="sm:-right-[20%] sm:-top-[20%] max-sm:bottom-[0%] max-sm:translate-y-2/3 -right-[25%] bottom-0 max-sm:w-[300px] max-sm:h-[285px] lg:left-[80%] lg:-top-[30%] lg:w-[414px] lg:h-[372px]" color="orange" />}
            {idx == 1 && <MediumArrowDownDecal className="max-sm:-bottom-20 max-sm:translate-y-1/2 max-sm:-left-[35%] sm:left-[5%] max-sm:-rotate-[50deg] max-sm:h-[150px] sm:-translate-x-full sm:-bottom-10 sm:translate-y-1/2 lg:right-[100%] lg:top-[60%] lg:w-[209px] h-[185px]" color="orange" />}
            <h2 className="mobile-h3 lg:desktop-h3">{block.title}</h2>
            <p className="mobile-p lg:desktop-p-regular text-dark-plum">{block.content}</p>
          </div>
        </div>
      })}
    </div>
  </section>
}
