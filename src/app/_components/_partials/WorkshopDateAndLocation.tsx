import { WP } from "@app/_wordpress/Types"

type Props = {
  workshop: WP.Workshop
  ulClassName?: string
  liClassName?: string
  separator: boolean
}

export default function WorkshopDateAndLocation({ separator, workshop, ulClassName, liClassName }: Props): React.JSX.Element {
  const location = workshop.acf.location ? workshop.acf.location : "TBD"
  let date = workshop.acf.date_time ?? "TBD"

  if (!date && !date.length) {
    date = "TBD"
  }

  return <ul className={`flex gap-2.5 items-center justify-start mobile-p lg:desktop-p-regular ${ulClassName}`}>
    <li className={`bg-list-map bg-no-repeat pl-[29px] text-dark-plum ${liClassName}`}>{location}</li>
    {date &&
      <>
        {separator &&
          <li>
            <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.6" d="M0.419023 3.02395C0.995024 3.59995 1.90702 3.59995 2.48302 3.02395C3.05902 2.44795 3.05902 1.55195 2.48302 0.975945C1.90702 0.399945 0.995024 0.399945 0.419023 0.975945C-0.140977 1.55195 -0.140977 2.44795 0.419023 3.02395Z" fill="#190D1A" />
            </svg>
          </li>
        }
        <li className={`bg-list-time bg-no-repeat pl-[29px] text-dark-plum ${liClassName}`}>{date}</li>
      </>
    }
  </ul>
}
