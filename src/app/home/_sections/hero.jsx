import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="lg:pt-[200px] pt-[120px]">
      <div className="container">
        <div className="md:w-[70%] mx-auto text-center relative fadeInUp" data-delay="0.2">
          <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
            <i className="ri-refresh-line"></i>Subscription. Pause or cancel anytime
          </h3>
          <h2 className="lg:py-2.5 py-5 font-semibold xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px]">
            Hire Full-Service Design Agency For A Simple Monthly Fee.
          </h2>
          <p className="text-xl leading-7 mb-[5px] px-15 text-black-100">
            Create your products with top-tier designers at an affordable price. One subscription fee covers unlimited design requests.
          </p>
          <div className="mt-7.5">
            <Link href="#pricing" className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white">
              See Pricing Plans
            </Link>
            <Link href="#book" className="btn bg-black-200 text-white border-black-200 hover:text-primary">
              Book a free call
            </Link>
          </div>
          <div className="absolute lg:right-[-25%] top-1/2 right-0">
            <Image src="/assets/images/shapes/shape1.png" alt="Shape" width={300} height={300} className="lg:max-w-[300px] max-w-[70px]" />
          </div>
          <div className="absolute lg:-left-[30%] top-[10%] left-0">
            <Image src="/assets/images/shapes/shape2.png" alt="Shape" width={200} height={200} className="lg:max-w-[200px] max-w-15" />
          </div>
        </div>
      </div>
    </section>
  )
}