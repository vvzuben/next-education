'use client';
import type { ACF } from "@app/_wordpress/Types"
import Media from "@components/Media"
import CircleRoundedDecal from "./decals/CircleRounded/CircleRoundedDecal"
import LinkAndCircleArrow from "./_partials/LinkAndCircleArrow"
import Link from "next/link"
import { useModalStore } from "@stores/ModalStore"
import Button, { ButtonProps } from "./global/Button";

function TeamMemberModalContent(props: ACF.Type.PostObject.TeamMember) {
  return <div className="p-0 lg:p-5 max-w-[1070px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-14">
    <div className="relative h-[321px] lg:h-full overflow-hidden">
      <CircleRoundedDecal className="z-20 top-[30px] left-[5%] absolute w-[90%]" color="royal-purple" />
      <div className="rounded-lg bg-pale-pink z-10 w-full h-full absolute"></div>

      <div className="h-[321px] lg:h-full overflow-hidden">
        <Media fallback={true} className="z-50 w-full h-auto" {...props.acf?.featured_image} width={345} height={321} />
      </div>
    </div>

    <div className="max-lg:p-5 flex gap-0.5 md:gap-1.5 flex-col">
      <h3 className="mobile-h3 lg:desktop-h3">{props.post_title}</h3>
      <h5 className="mobile-h5 lg:desktop-h5">{props.acf.job_title}</h5>
      <div dangerouslySetInnerHTML={{ __html: props.acf.content }} className="max-h-[321px] overflow-y-scroll mobile-p lg:desktop-p-regular" />
    </div>
  </div>
}

function TeamMember({ item, size, modal }: { item: ACF.Type.PostObject.TeamMember, size: string, modal: boolean }): React.JSX.Element {
  const link = `?name=${item.post_title}`
  const modalStore = useModalStore()
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()
    modalStore.setContent(<TeamMemberModalContent {...item} />)
    modalStore.setIsOpen(true);
  }

  const z = size ? size.split('x') : [292, 385]

  const img = <Media fallback={true} className="absolute z-50" {...item.acf.featured_image} width={Number(z[0])} height={Number(z[1])} />
  const heading = <span className="mobile-h4 lg:desktop-h4">{item.post_title}</span>

  return <div className="flex flex-col gap-3 md:gap-6"> <div className="flex flex-col">
      <CircleRoundedDecal className="z-20 left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 absolute max-w-[80%]" color="royal-purple" />
      <div className={
        `rounded-lg bg-pale-pink z-10 absolute w-full h-[${z[1]}px]`}></div>
      <div className=" overflow-hidden h-full bg-pale-pink">
        {modal &&
          <Link aria-label={item.post_title} onClick={(e) => handleClick(e)} href={link}>
            {item.acf?.featured_image && img
            }
          </Link>
        }

        {!modal && item.acf?.featured_image && img}
      </div>

    </div>
    <div className="flex w-full max-sm:justify-between">
      <div className="flex flex-col gap-0.5">
        {modal && <Link onClick={(e) => handleClick(e)} href={link}>{heading}</Link>}
        {!modal && heading}

        <p className="mobile-p lg:desktop-p-regular">{item.acf?.job_title}</p>
      </div>
      {modal &&
        <div>
          <LinkAndCircleArrow onClick={(e) => handleClick(e)} url={link} />
        </div>
      }
    </div>
  </div>
}

type Props = {
  title: string
  theme: ButtonProps["theme"]
  link: ACF.Type.Link.Array
  open_modal_on_click?: string | number
  template: "2" | "3"
  team_members: {
    team_member: ACF.Type.PostObject.TeamMember
  }[]
}

export default function TeamMembersGrid(props: Props) {
  const template = Number(props.template)
  const size = template == 3 ? "292x385" : "610x576"
  const modal = props.open_modal_on_click == 1 ? true : false

  return <section className="max-w-[1240px] mx-auto flex gap-10 flex-col cs">
    <style jsx>{` 
@media (min-width: 1240px) {
  .team-members-grid {
    grid-template-areas:
      '. z1 z2 z3'
      'z4 z5 z6 .'
      '. z7 z8 z9'
      'z10 z11 z12 .'
      '. z13 z14 z15'
      'z16 z17 z18 .'
      '. z19 z20 z21'
      'z22 z23 z24. ';
  }
  .team-members-grid > div:nth-child(1) {
    grid-area: z1;
  }
  .team-members-grid > div:nth-child(2) {
    grid-area: z2;
  }
  .team-members-grid > div:nth-child(3) {
    grid-area: z3;
  }
  .team-members-grid > div:nth-child(4) {
    grid-area: z4;
  }
  .team-members-grid > div:nth-child(5) {
    grid-area: z5;
  }
  .team-members-grid > div:nth-child(6) {
    grid-area: z6;
  }
  .team-members-grid > div:nth-child(7) {
    grid-area: z7;
  }
  .team-members-grid > div:nth-child(8) {
    grid-area: z8;
  }
  .team-members-grid > div:nth-child(9) {
    grid-area: z9;
  }

  .team-members-grid > div:nth-child(10) {
    grid-area: z10;
  }
  .team-members-grid > div:nth-child(11) {
    grid-area: z11;
  }
  .team-members-grid > div:nth-child(12) {
    grid-area: z12;
  }
  .team-members-grid > div:nth-child(13) {
    grid-area: z13;
  }
  .team-members-grid > div:nth-child(14) {
    grid-area: z14;
  }
  .team-members-grid > div:nth-child(15) {
    grid-area: z15;
  }
  .team-members-grid > div:nth-child(16) {
    grid-area: z16;
  }
  .team-members-grid > div:nth-child(17) {
    grid-area: z17;
  }
  .team-members-grid > div:nth-child(18) {
    grid-area: z18;
  }
  .team-members-grid > div:nth-child(19) {
    grid-area: z19;
  }
  .team-members-grid > div:nth-child(20) {
    grid-area: z20;
  }
  .team-members-grid > div:nth-child(21) {
    grid-area: z21;
  }
  .team-members-grid > div:nth-child(22) {
    grid-area: z22;
  }
  .team-members-grid > div:nth-child(23) {
    grid-area: z23;
  }
  .team-members-grid > div:nth-child(24) {
    grid-area: z24;
  }
}
`}
    </style>
    {(props.title || props.link) &&
      <div className="flex flex-col justify-center items-center gap-6">
        {props.title &&
          <h3 className="mobile-h2 lg:mobile-h2">{props.title}</h3>
        }
        {props.link && <Button theme={props.theme} link={props.link} />}
      </div>
    }

    <div
      className={`justify-between grid md:gap-y-14
      ${template == 2 ? "grid-cols-1 md:grid-cols-2 gap-14 max-w-[1240px] mx-auto" : "gap-14 md:gap-5 grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 team-members-grid"}
    `}> {props.team_members.map((team_member, idx) => {
        return <div className="relative w-full h-full" key={idx}>
          <TeamMember item={team_member.team_member} modal={modal} size={size} />
        </div>
      })}
    </div>
  </section>
}
