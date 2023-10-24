import { Color } from "@app/helpers"

export namespace YoastSEO {
  export type Head = {
    yoast_head_json: {
      title?: string
      description?: string
      robots?: {
        index?: string
        follow?: string
        "max-snippet"?: string
        "max-image-preview"?: string
        "max-video-preview"?: string
      }
      og_locale?: string
      og_description?: string
      og_type?: string
      og_title?: string
      og_url?: string
      og_site_name?: string
      article_modified_time?: string
      twitter_card?: string
    }
  }
}

export namespace WP {
  export type Term = {
    id: number
    count: number
    description: string
    link: string
    name: string
    slug: string
    taxonomy: string
    parent: number
    acf: {
      post_type: "post" | "workshop"
    }
  }
  export type Post = {
    id: number
    date: string
    guid: {
      rendered: string
    }
    modified: string
    slug: string
    post_name: string
    status: "publish" | "draft" | "pending" | "future" | "private"
    type: "post" | "page" | "workshop" | "team_member" | "vacancy"
    link: string
    title: {
      rendered: string
    }
    content: {
      rendered: string
    }
    excerpt: {
      rendered: string
    }
    acf: {
      featured_image: ACF.Type.Image.Array
    }
    _embedded: {
      "wp:term": Array<
        Array<{
          id: number
          link: string
          name: string
          slug: string
          taxonomy: string
        }>
      >
      author: Array<{
        id: number
        name: string
        url: string
        description: string
        link: string
        slug: string
        acf?: {
          title?: string
        }
      }>
    }
  }
  export interface Workshop extends Omit<WP.Post, "type" | "acf"> {
    type: "workshop"
    acf: {
      location: string
      date_time: string
      featured_image: ACF.Type.Image.Array
    }
  }
  export interface Vacancy extends Omit<WP.Post, "type" | "acf"> {
    type: "vacancy"
    acf: {
      location?: string
      heading?: string
      job_type?: string
      department?: string
      salary?: string
      list_items: {
        title?: string
        items?: {
          item: string
        }[]
      }[]
    }
  }
  export interface Page extends Omit<WP.Post, "type" | "acf"> {
    type: "page"
    acf: {
      background_color_theme?: Color
      featured_image?: ACF.Type.Image.Array
      articles_and_advice_component?: any
      page_meta?: {
        primary_title?: string
        subtitle?: string
        back_to_link?: ACF.Type.Link.Array
        circle_around_subtitle?: boolean
        background_color_theme?: Color
        content_and_button?: {
          content: string
          link: ACF.Type.Link.Array,
          theme: "white"
        }
      }
    }
  }
}

export namespace ACF {
  export namespace Group {
    export namespace ContactForm {
      export type contact_form_success_modal = {
        image?: ACF.Type.Image.Array
        title?: string,
        content?: string
      }
    }
  }
  export namespace Type {
    export namespace PostObject {
      export interface TeamMember extends PostObject {
        acf: {
          featured_image: ACF.Type.Image.Array
          job_title: string
          content: string
        }
      }
      export type PostObject = {
        ID: number
        author: number
        date: string
        guid: string
        link: string
        menu_order: number
        post_author: string
        post_content?: string
        post_content_filtered?: string
        post_date: string
        post_excerpt?: string
        post_modified: string
        post_name?: string
        post_parent: number
        post_status: "publish" | "draft" | "pending" | "future" | "private"
        post_title?: string
        post_type: "post"
        title?: { rendered: string }
        _embedded: {
          author: Array<{
            description: string
            id: number
            link: string
            name: string
            slug: string
            url: string
            acf: Array<any>
            _links: {
              self: Array<{
                href: string
              }>
              collection: Array<{
                href: string
              }>
            }
          }>
        }
        acf: {
          featured_image?: ACF.Type.Image.Array
        }
      }
    }
    export namespace GoogleMap {
      export type Array = {
        address: string
        lat: number
        lng: number
        zoom: number
        place_id: string
        name: string
        city: string
        state: string
        state_short: string
        post_code: string
        country: string
        country_short: string
      }
    }
    export namespace Image {
      export type Array = {
        title?: string
        url: string
        alt: string
        width: number
        height: number
        sizes?: {
          [key: string]: string
        }
      }
    }
    export namespace Link {
      export type Array = {
        title?: string
        url: string
        target?: string
      }
    }
  }
}
