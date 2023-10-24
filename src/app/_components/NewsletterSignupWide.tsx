import Media, { MediaProps } from "@components/Media";
import NewsletterSignup, { NewsletterSignupProps } from "./_forms/NewsletterSignup";

type Props = {
  title?: string
  subtitle?: string
  footer?: TrustedHTML
  image: MediaProps
  sucess_modal: NewsletterSignupProps["sucess_modal"]
  context?: "sidebar"
}

export default function NewsletterSignupWide(
  { title,
    subtitle,
    footer,
    image,
    sucess_modal,
    context
  }: Props) {

  const form_classes = (context == "sidebar") ? "flex-col h-full" : ""
  const button_classes = (context == "sidebar") ? "!w-full" : ""
  return (
    <section className="container mx-auto cs">
      <div className={`bg-light-lavender 
            ${(context == "sidebar" ? "py-3 px-6 rounded-xl lg:h-[450px] flex flex-col gap-4 justify-between" : "gap-4 grid grid-cols-1 lg:grid-cols-[1fr_2fr] lg:pb-28 max-w-[1380px] mx-auto rounded-xl lg:py-16 lg:px-20 justify-center items-center")}
      
      `}>
        <div className="flex flex-col justify-center align-center pr-4">
          {image &&
            <Media className="w-full h-auto" {...image} width={498} height={173} />
          }
        </div>
        <div className={`px-4 ${(context == "sidebar" && "h-full")}`}>
          <div className={`${(context == "sidebar" ? "flex flex-col gap-8" : "lg:gap-4 flex flex-col justify-center align-center")}`}>
            <div className="flex flex-col gap-2 ">
              {title && context != "sidebar" &&
                <h3 className="max-lg:text-center mobile-h3 lg:desktop-h3">{title}</h3>
              }
              {subtitle &&
                <p className="max-lg:text-center mobile-p lg:desktop-p-regular text-dark-plum !opacity-100">{subtitle}</p>
              }
            </div>
            <div className="flex flex-col lg:gap-4 justify-between gap-10">
              <NewsletterSignup buttonClasses={button_classes} formClasses={form_classes} sucess_modal={sucess_modal} inputClasses="bg-light-lavender" />
              {footer &&
                <div dangerouslySetInnerHTML={{ __html: footer }} className="max-lg:text-center newsletter-footer-p font-basis-grotesque-regular leading-5 text-[13px] text-dark-plum tracking-[0.159px]" />
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
