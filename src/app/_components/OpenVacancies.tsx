import { WP } from "@app/_wordpress/Types"
import { WP_Query } from "@app/_wordpress/WPClient"
import CircleIcon from "@components/ui/CircleIcon"
import Link from "next/link"

type Props = {
  subtitle?: string
  title?: string
  description?: string
  vacancies: WP.Vacancy[]
}

export default async function OpenVacancies(props: Props): Promise<React.JSX.Element> {
  const [vacancies] = await WP_Query<WP.Vacancy[]>('vacancy')

  return <section id="open-vacancies" className="container mx-auto cs">
    <div className="max-w-[860px] mx-auto flex flex-col gap-7 lg:gap-14 overflow-hidden">
      <div className="flex flex-col lg:gap-5 gap-2.5 justify-center items-center">
        {props.subtitle &&
          <span className="bg-royal-purple desktop-p-small inline-flex items-center justify-center px-2.5 rounded-3xl text-white">
            {props.subtitle}
          </span>
        }

        {props.title &&
          <h2 className="text-center mobile-h2 lg:desktop-h2">{props.title}</h2>
        }

        {props.description &&
          <p className="mobile-p lg:desktop-p-regular text-center">{props.description}</p>
        }
      </div>
      <div className="flex flex-col lg:gap-8 gap-4 justify-center items-center">
        {vacancies && vacancies.map((vacancy, idx) => {
          return <div key={idx} className="flex justify-between gap-10 items-center border-opacity-20 border-t border-t-dark-plum light-grey pt-7">
            <div className="flex flex-col gap-3.5 lg:gap-7" >
              <div className="flex flex-col gap-1">
                <Link href={vacancy.link}>
                  <h3 className="mobile-h4 lg:desktop-h4">{vacancy.title.rendered}</h3>
                </Link>
                <ul className="hidden md:flex gap-3 text-dark-plum">
                  {vacancy.acf.job_type &&
                    <li className="font-basis-grotesque-bold">{vacancy.acf.job_type}</li>
                  }

                  {vacancy.acf.department &&
                    <li className="flex gap-1.5">
                      <span className="font-basis-grotesque-bold">Department</span>
                      {vacancy.acf.department}
                    </li>
                  }

                  {vacancy.acf.location &&
                    <li className="flex gap-1.5">
                      <span className="font-basis-grotesque-bold">Location</span>
                      {vacancy.acf.location}
                    </li>
                  }
                </ul>
                {vacancy.excerpt.rendered &&
                  <div className="mobile-p desktop-p-regular" dangerouslySetInnerHTML={{ __html: vacancy.excerpt.rendered }} />
                }
              </div>
            </div>
            <div className="">
              <Link aria-label="View Vacancy" href={vacancy.link}>
                <CircleIcon icon="arrow" theme="lavender-mist" direction="right" />
              </Link>
            </div>
          </div>
        })}
      </div>
    </div >
  </section>
}
