'use client'

import { MouseEventHandler, useState } from "react"
import Button, { ButtonProps } from "./global/Button"
import CircleIcon from "./ui/CircleIcon"

type FaqProps = {
  faq: {
    activeId: number
    onClick: MouseEventHandler
    ID: number
    post_title: string
    fullWidth?: boolean
    acf: {
      content: string
    }
  }
}

type Props = {
  title: string
  button: ButtonProps
  faqs: FaqProps[]
  fullWidth?: boolean
}

function Faq(props: FaqProps["faq"]): React.JSX.Element {
  const isActive = props.activeId == props.ID

  return <div className={`flex flex-col ${isActive && 'shadow-primary'}`}>
    <div onClick={props.onClick} className={`
      hover:cursor-pointer flex justify-between 
      ${((!isActive) && "border border-dark-plum/30 hover:bg-dark-plum/[0.06] hover:border-pearl-white group")}
      ${(isActive ? "bg-white" : '')} 
      py-3 px-5 rounded-xl items-center`}>
      {props.fullWidth &&
        <h3 className="text-[20px] leading-[26px] tracking-[-0.2px] font-gta-regular lg:text-[24px] lg:-tracking-[0.48px] text-dark-plum w-[80%]">
          {props.post_title}
        </h3>
      }

      {!props.fullWidth &&
        <h3 className="text-[20px] leading-[26px] tracking-[-0.2px] font-gta-regular lg:text-[24px] lg:-tracking-[0.48px] text-dark-plum">
          {props.post_title}
        </h3>
      }

      <CircleIcon
        className="group-hover:opacity-80"
        theme={props.fullWidth ? "lavender-mist" : "royal-purple"}
        direction={props.activeId !== props.ID ? "top" : "bottom"}
        icon="caret"
      />
    </div>
    <div>
      <div className={`${props.activeId !== props.ID && "hidden"} text-base font-basis-grotesque-regular leading-[26px] bg-white flex py-3 px-5`}>
        <p dangerouslySetInnerHTML={{ __html: props.acf.content }} className={`text-dark-plum/80 ${props.fullWidth ? 'max-w-[90%]' : 'max-w-[629px]'}`} />
      </div>
    </div>
  </div>
}

export default function FAQs(props: Props) {
  const [activeId, setActiveId] = useState(0)
  const toggle = (id: number) => setActiveId(id === activeId ? 0 : id)

  return <section className="container mx-auto">
    <div className={`mx-auto 
            ${(!props.fullWidth ? "grid max-w-[1240px] lg:grid-cols-[1fr_2fr] max-lg:gap-5" : "gap-10 max-w-[846px] gap-page-title flex flex-col")}`}>
      <div className={`${(props.fullWidth && "justify-center items-center")} flex flex-col ${(!props.fullWidth ? "lg:gap-4 lg:max-w-[433px] gap-5" : "")}`}>
        {(props.title && !props.fullWidth) &&
          <h2 className="mobile-h2 lg:desktop-h2">{props.title}</h2>
        }

        {props.button?.link &&
          <Button className="w-fit desktop-button lg:py-3.5 lg:px-6" {...props.button} />
        }
      </div>
      <div className="flex flex-col gap-3">
        {props.faqs.map((faq, idx) => {
          return <Faq key={idx} {...faq.faq} onClick={() => toggle(faq.faq.ID)} activeId={activeId} fullWidth={props.fullWidth} />
        })}
      </div>
    </div>
  </section>
}
