import { ACF, WP } from "@app/_wordpress/Types"
import { WP_Query } from "@app/_wordpress/WPClient";
import { notFound, redirect } from 'next/navigation';
import PostContent from "@components/_partials/PostContent";
import PageTitleAndSubTitle from "@components/PageTitleAndSubTitle";
import { Color } from "sharp";
import StyledList from "@components/_partials/StyledList";
import SquigglyLinesEightDecal from "@components/decals/SquigglyLineEight/SquigglyLineEightDecal";
import VacancyApplicationForm from "@components/VacancyApplicationForm";
import { getYoastMetaData } from "@app/helpers";
import { Metadata } from "next";
import CursiveArrowDecal from "@components/decals/CursiveArrow/CursiveArrowDecal";

type Props = {
  params: {
    slug: string
  }
}
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  return await getYoastMetaData("vacancy", params.slug);
}

export default async function SingleVacancyPage(props: Props): Promise<React.JSX.Element | null | never> {
  redirect('https://www.indeed.com/cmp/First-Step-Children-S-Network,-Inc/jobs')
//   let [post, count] = await WP_Query<WP.Vacancy[]>('vacancy?status=publish&_embed&slug=' + props.params.slug);
//
//   if (count !== 1) {
//     notFound();
//   }
//
//   const fields = {
//     page_meta: {
//       background_color_theme: 'bg-pearl-white' as Color,
//       primary_title: post[0]?.title?.rendered,
//       content_and_button: {
//         link: {
//           url: '#scroll-to-apply',
//           title: 'Apply To Vacancy'
//         }
//       },
//       back_to_link: {
//         url: '/careers',
//         title: 'Back to Careers'
//       }
//     }
//   } as WP.Page["acf"]["page_meta"]
//
//   return <>
//     <section className="grid-cols-1 cs bg-pearl-white">
//       <div className="mx-auto max-w-[840px] overflow-hidden">
//         {/* @ts-expect-error*/}
//         <PageTitleAndSubTitle acf={fields} />
//         <div className="flex flex-col gap-3">
//           {post[0].acf.heading &&
//             <h2 className="mobile-h3 lg:desktop-h3">{post[0].acf.heading}</h2>
//           }
//           <div>
//             {post[0].acf.job_type &&
//               <p className="mobile-p lg:desktop-p-regular  !text-black !opacity-100">Job Type: {post[0].acf.job_type}</p>
//             }
//
//             {post[0].acf.salary &&
//               <p className="mobile-p lg:desktop-p-regular  !text-black !opacity-100">Job Type: {post[0].acf.salary}</p>
//             }
//           </div>
//           <PostContent post={post[0]} />
//           <div className="flex flex-col gap-10">
//             {post[0] && post[0].acf.list_items.map((list, idx) => {
//               return <div key={idx} className="flex flex-col gap-3">
//                 {list.title &&
//                   <h3 className="mobile-h4 lg:desktop-h4">{list.title}</h3>
//                 }
//                 {/* @ts-expect-error*/}
//                 <StyledList className="grid-cols-1 lg:grid-cols-1 gap-2" items={list.items} />
//               </div>
//             })}
//           </div>
//         </div>
//       </div>
//       <section id="apply" className="bg-peach-whip bg-paper-flipped
//     bg-top
//     bg-no-repeat
//     bg-contain
//     pt-[50px]
//     mt-[50px]
// ">
//         <div className="pt-[100px] max-w-[820px] mx-auto grid grid-cols-1 justify-center items-center w-full h-full py-14 relative">
//           <CursiveArrowDecal color="orange" className="max-lg:-top-[25px] w-[144px] h-[144px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-[25px]" direction="down" />
//           <SquigglyLinesEightDecal color="orange" className="w-[120%] h-[120%]" />
//           <VacancyApplicationForm />
//         </div>
//       </section>
//     </section>
//   </>
}

