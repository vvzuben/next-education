"use client"
import CircleIcon from "@components/ui/CircleIcon";
import CircleDecal from "@components/decals/Circle/CircleDecal";
import Media from "@components/Media";
import SquigglyLineThickDecal from "./decals/SquigglyLineThick/SquigglyLineThickDecal"
import SquigglyLineEightDecal from "./decals/SquigglyLineEight/SquigglyLineEightDecal"
import SquigglyLineLongDecal from "./decals/SquigglyLineLong/SquigglyLineLongDecal"
import { ACF } from "@app/_wordpress/Types";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

type StepsComponentFieldGroup = {
  steps_component_title?: string
  steps_component_description?: string
  steps_component_steps?: Array<{
    title?: string
    description?: string
    show_on_mobile?: boolean
    call_to_action_link?: ACF.Type.Link.Array
    image?: ACF.Type.Image.Array
  }>
}

export default function StepsComponent(props: StepsComponentFieldGroup): React.JSX.Element {
  const [scrollProgress, setScrollProgress] = useState(0.0);
  const isTriggerInitiated = useRef(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      console.log("consolehandle resize")
      if (window.innerWidth < 640) {
        if (isDesktop)
          setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });

  useEffect(() => {
    if (isTriggerInitiated.current) return;
    isTriggerInitiated.current = true;
    if (window.innerWidth < 640) return;
    let points = gsap.utils.toArray('.scroll-triggers-point');

    let height = 100 * points.length;

    let tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: ".scroll-triggers-box",
        start: "top center",
        end: "+=" + height + "%",
        scrub: true,
        id: "points",
      }
    })

    let pinner = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-triggers-box .scroll-triggers-wrapper",
        start: "top +=17%",
        end: "+=" + (height + 17) + "%",
        scrub: true,
        pin: ".scroll-triggers-box .scroll-triggers-wrapper",
        pinSpacing: true,
        id: "pinning",
        onUpdate: (self) => setScrollProgress(self.progress),
      }
    })

    points.forEach(function (elem: any, i) {
      gsap.set(elem, { position: "absolute", top: 90 });

      tl.from(elem.querySelector('.scroll-triggers-image'), { autoAlpha: 0 }, i)
      tl.from(elem.querySelector('.scroll-triggers-text'), { autoAlpha: 0, translateY: 80 }, i)

      if (i != points.length - 1) {
        tl.to(elem.querySelector('.scroll-triggers-text'), { autoAlpha: 0, translateY: -80 }, i + 0.75)
        tl.to(elem.querySelector('.scroll-triggers-image'), { autoAlpha: 0 }, i + 0.75)
      }
    });

    return () => {
      pinner.kill();
      tl.kill();
    }
  }, []);

  return (
    <section className="scroll-triggers-box sm:relative container mx-auto cs">
      <div className="bg-peach-whip scroll-triggers-wrapper sm:h-[38rem]
    container
    max-w-[1380px]
    flex
    flex-col
    gap-9
    lg:px-40
    mx-auto
    px-4
    py-16
    text-dark-plum
    rounded-xl relative overflow-hidden">
        <div className="scroll-triggers-progress absolute top-1/2 left-1 lg:left-[7.6rem] transform -translate-y-1/2 mt-[87px] sm:h-80 xl:h-72 h-72 w-8 hidden lg:flex">
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <div className=" w-7 h-7 rounded-full border-2 border-regal-blush flex items-center justify-center">
              <div className=" w-2.5 h-2.5 rounded-full bg-royal-purple"></div>
            </div>
            <div className="sm:h-[17.5rem] xl:h-56 h-56 w-0.5 bg-regal-blush relative rounded-b overflow-hidden">
              <div className="top-0 left-0 absolute w-full bg-royal-purple scroll-triggers-progress-action" style={{ height: `${scrollProgress * 100}%` }}></div>
            </div>
          </div>
        </div>
        <SquigglyLineThickDecal color="orange" className="top-20 -left-20 w-[192px] lg:w-[331px] lg:h-[77px] lg:top-[120px] lg:-left-[70px] rotate-[131deg]" />
        <SquigglyLineEightDecal color="orange" className="lg:bottom-0 lg:w-[642px] -left-[400px] lg:h-[331px] rotate-[113deg]" />
        <SquigglyLineLongDecal color="orange" className="sm:top-[50%] md:max-lg:-right-[40%] top-[20%] -right-[40%]  w-full h-full lg:h-[1115px] lg:top-[0px] lg:w-[642px] lg:-right-[235px] " />

        <div className="flex flex-col gap-4 justify-center items-center">
          {props.steps_component_title &&
            <h2 dangerouslySetInnerHTML={{ __html: props.steps_component_title }} className="mobile-h2 md:desktop-h2 text-center" />
          }
          <p className="text-base font-basis-grotesque-regular leading-[24px] text-center md:desktop-p-l">{props.steps_component_description}</p>
        </div>

        {props?.steps_component_steps?.map((step, index) => {
          return (
            <div key={index} className={"scroll-triggers-point sm:left-0 sm:w-full lg:px-40 sm:px-4 sm:h-[38rem] sm:pl-10 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-5" + (!step.show_on_mobile && ' max-sm:hidden grid-reverse')}>

              <div className="scroll-triggers-text flex gap-1 flex-col justify-between sm:justify-center
              max-sm:order-1
              relative
           ">
                <span className="
              font-basis-grotesque-bold
              relative
              text-royal-purple
              text-base 
              leading-[30px]">
                  Step {index + 1}
                </span>
                <div className="
              md:flex
              gap-2.5
              flex-col
              h-[11.1rem]
              sm:h-[15rem]
              xl:h-[11.1rem]
              relative
           ">
                  <h3 className="mobile-h3 md:desktop-h3">{step.title}</h3>
                  <p className="mobile-p md:desktop-p">{step.description}</p>
                </div>
                <div>
                  {step?.call_to_action_link?.url &&
                    <Link
                      className="gap-3.5 inline-flex items-center justify-between desktop-button"
                      href={step.call_to_action_link.url}>
                      {step.call_to_action_link.title}
                      <CircleIcon icon="arrow" direction="right" transparent={true} theme="royal-purple-opacity" />
                    </Link>
                  }
                </div>
              </div>

              <div className="scroll-triggers-image sm:flex sm:items-center max-w-[463px]">
                <div className="relative w-full">
                  {step?.image &&
                    <CircleDecal className="max-w-[463px]" color={index % 2 ? "orange" : "royal-purple"}>
                      <Media className="w-full h-auto" {...step.image} width={463} height={309} />
                    </CircleDecal>
                  }
                </div>
              </div>
            </div>
          );
        })
        }
      </div>
    </section>
  )
}
