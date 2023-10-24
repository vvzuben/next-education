import { Color } from "@app/helpers"
import CircleDecal from "./decals/Circle/CircleDecal"

type Props = {
  title?: string
  numbers?: {
    label?: string
    number?: string
  }[]
}

export default function Circlenumbers(props: Props) {
  let grid = 'grid-cols-1'

  if (props.numbers?.length === 2) {
    grid = 'grid-cols-1 md:grid-cols-2'
  } else if (props.numbers?.length === 3) {
    grid = 'grid-cols-1 md:grid-cols-3'
  }

  const theme = [
    { color: 'orange', rotate: 'rotate-[180deg]' },
    { color: 'green', rotate: 'rotate-[0deg]' },
    { color: 'royal-purple', rotate: 'rotate-[0deg] scale-y-[-1]' },
  ] as { color: Color, rotate: string }[]

  return <section className="flex flex-col justify-center items-center gap-8 cs mx-auto">
    {props.title &&
      <h3 className="mobile-h3 lg:desktop-h3 text-center">{props.title}</h3>
    }
    {props.numbers &&
      <div className={`container mx-auto grid justify-center items-center ${grid} max-md:gap-y-10 md:gap-9 lg:gap-20`}>
        {props.numbers.map((item, idx) => {
          return <div key={idx} className="">
            <div className="flex flex-col justify-center items-center">
              <div className="flex-col w-[249px] h-[183px] lg:w-[307px] lg:h-[225px] relative flex justify-center items-center">
                <CircleDecal className={`w-full h-full !z-0 ${theme[idx].rotate}`} color={theme[idx].color}>
                  <div className="relative z-50 -top-[5px] font-gta-light lg:leading-[77.6px] lg:tracking-[-2.4px] text-6xl tracking-[-1.8px] lg:text-[80px]">
                    {item.number}
                  </div>
                </CircleDecal>
                <div className="relative z-50 -top-[5px] font-basis-grotesque-bold leading-[30px] flex items-center justify-center text-lg">
                  {item.label}
                </div>
              </div>
            </div>
          </div>
        })}
      </div>

    }
  </section >
}
