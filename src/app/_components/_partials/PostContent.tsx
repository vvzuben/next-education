import { WP } from "@app/_wordpress/Types";

export default function PostContent(props: { post: WP.Page | WP.Post | WP.Vacancy | WP.Workshop }): React.JSX.Element {
  return <div className={`content ${props.post.type}`} dangerouslySetInnerHTML={{ __html: props.post.content.rendered }} />
}
