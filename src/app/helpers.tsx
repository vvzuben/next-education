import moment from "moment";
import colors from "../../tailwind.config.colors.json"
import { WP_Query } from "./_wordpress/WPClient";
import { WP, YoastSEO } from "./_wordpress/Types";
import { decodeHTML } from 'entities';
import type { Metadata } from "next";
export type Color = keyof typeof colors

export function colorNameToCode(color: Color): string {
  return colors[color]
}

export function parseDate(date: string): string | undefined {
  return moment(date).format("MMMM Do, YYYY")
}

export async function GetCategoryBySlug(slug: string) {
  const [categories] = await WP_Query<WP.Term[]>('categories');
  return categories?.find((category) => category.slug == slug);
}

export function getZodError(string: string) {
  return JSON.parse(string).shift().message
}

export function getZodErrorMessage<T>(errors: any, field: T) {
  const tmp = errors?.fieldErrors
  if (tmp && tmp[field] && tmp[field].length > 0) {
    return tmp[field][0]
  }
}

export function getGridCols(container: any) {
  const xl = container.xl_grid_cols ?? container.xl_grid_cols ?? 3;
  const lg = container.lg_grid_cols ?? container.lg_grid_cols ?? 3;
  const md = container.md_grid_cols ?? container.md_grid_cols ?? 2;
  const sm = container.sm_grid_cols ?? container.sm_grid_cols ?? 1;
  const xs = container.xs_grid_cols ?? container.xs_grid_cols ?? 1;
  return { xl, lg, md, sm, xs };
}

export async function getYoastMetaData(post_type: WP.Post["type"], page_slug: string): Promise<Metadata> {
  let _post_type = post_type as string

  if (post_type == "page") {
    _post_type = "pages"
  } else if (post_type == "post") {
    _post_type = "posts"
  }

  const [data] = await WP_Query<YoastSEO.Head[]>(`${_post_type}?slug=${page_slug}&_fields[]=yoast_head_json`);

  const output = {} as Metadata

  if (data.length == 0) return output

  const yoast = data[0].yoast_head_json

  if (yoast.title) {
    output.title = decodeHTML(yoast.title)
  }

  if (yoast.description) {
    output.description = decodeHTML(yoast.description)
  }

  output.openGraph = {}

  if (yoast.og_title) {
    output.openGraph.title = decodeHTML(yoast.og_title)
  }

  if (yoast.og_locale) {
    output.openGraph.locale = yoast.og_locale
  }

  if (yoast.og_url) {
    output.openGraph.url = yoast.og_url
  }

  if (yoast.og_description) {
    output.openGraph.description = decodeHTML(yoast.og_description)
  }

  if (yoast.og_url) {
    output.metadataBase = new URL(yoast.og_url)
  }

  return output
}
