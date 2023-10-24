import BlockContactUs from "@components/global/BlockContactUs";
import FooterMenus from "@components/footer/FooterMenus";
import FooterMeta from "@components/footer/FooterMeta";
import NewsletterForm from "@components/global/NewsletterForm";

export default function Footer(props: any) {
  return <footer className="mt-[250px] sm:mt-[200px] lg:mt-[150px] px-4 bg-dark-plum text-white w-full sm:pt-52 pt-[212px] xl:pt-[160px] relative">
   <BlockContactUs /> 
    <div className="mx-auto max-w-[1261px]">
      <div className="container mx-auto flex max-[500px]:flex-col gap-10 max-xl:flex-wrap md:gap-3 md:flex-nowrap md:justify-between justify-start gap-x-20 flex-wrap">
        <div className="md:flex-shrink-1 md:max-xl:w-1/2 xl:max-w-xl sm:w-full w-full flex-grow-1">
          <NewsletterForm content={props.newsletter_content} />
        </div>
        <FooterMenus menus={props.menus} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container mx-auto border-midnight-aubergine border-t pt-5 sm:mt-10 sm:pb-10 mt-10 pb-5">
        <FooterMeta {...props} />
      </div>
    </div>
  </footer>
}
