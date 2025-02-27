import Image from 'next/image';

export default function Partners() { 
  return (
    <div className="lg:pt-25 pt-15">
        <div className="container">
          <h2 className="uppercase text-base text-center tracking-[5px] mb-7.5 font-medium">Top companies trust us with their design</h2>
          <div className="company-list">
            <div className="logo-slider overflow-hidden flex">
              <div className="logos-slide">
                <Image src="/assets/images/company-logo/company1.png" alt="company logo" width={150} height={50} />
                <Image src="/assets/images/company-logo/company2.png" alt="company logo" width={150} height={50} />
                <Image src="/assets/images/company-logo/company3.png" alt="company logo" width={150} height={50} />
                <Image src="/assets/images/company-logo/company4.png" alt="company logo" width={150} height={50} />
                <Image src="/assets/images/company-logo/company5.png" alt="company logo" width={150} height={50} />
                <Image src="/assets/images/company-logo/company6.png" alt="company logo" width={150} height={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}