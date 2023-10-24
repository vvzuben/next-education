import ThreeLines from '@components/decals/ThreeLines/ThreeLinesDecal'

export default function BlockContactUs() {
  return <div className="absolute w-full left-0 -top-[220px] sm:-top-[180px] lg:-top-[75px] max-lg:px-4">
    <div className="max-xl:!container max-lg:py-[40px] md:px-5 max-w-[1380px] mx-auto bg-royal-purple w-full bg-decal-squiggly-lines bg-left-bottom bg-no-repeat rounded-xl">
      <div className="py-4 mx-auto max-w-[1280px] w-full grid lg:grid-cols-2 grid-cols-1 gap-5 h-full place-content-center place-items-center">
        <div className="lg:py-[41px] lg:max-w-[717px] text-white font-gta-light max-lg:text-center text-3xl font-normal mobile-h3 lg:desktop-h3">
          <p>Talk to us about our expert range of ABA treatments to suit your child’s needs.</p>
        </div>
        <div className="w-full flex lg:justify-end content-center place-content-center items-center">
          <div className="w-[280px]">
            <div className="
        before:absolute
        before:bg-contain
        before:bg-no-repeat
        before:h-[143px]
        before:w-[143px]
        xl:before:-left-[175px]
        xl:before:bg-decal-arrow-right
        xl:before:top-[35%]
        relative">
              <div className="bg-center bg-cover bg-decal-orange-circle bg-no-repeat flex h-[176px] justify-center relative w-full items-center">
                <ThreeLines direction="right" className="top-[5%]" color="light-lavender">
                  <a className={`inline-block bg-white btn-primary py-4 px-12 shadow-btn-primary text-lg md:hover:bg-light-lilac`} href="/contact-us">Contact Us</a>
                </ThreeLines>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >
}
