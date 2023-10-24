import { WP } from "@app/_wordpress/Types"
import { parseDate } from "@app/helpers"
import Link from "next/link"

type Props = {
  post?: WP.Post
  show_date: boolean
}

export default function PostCategoryAndDate({ post, show_date }: Props): React.JSX.Element {
  if (!post) return <></>

  const term = post._embedded["wp:term"][0][0]
  const base = post.type == "post" ? "/articles-and-advice" : "/workshops"
  const term_url = base + "?category=" + term.slug

  return <div className="flex items-center gap-2 text-[15px]">
    <Link
      href={term_url}
      className="text-royal-purple font-bold font-basis-grotesque-bold">{term?.name}
    </Link>
    {post.date && show_date &&
      <>
        <span className="bg-dark-plum w-1 h-1 rounded-full"></span>
        <span className="text-dark-plum opacity-50 font-basis-grotesque-regular">{parseDate(post.date)}</span>
      </>
    }
  </div>
}
