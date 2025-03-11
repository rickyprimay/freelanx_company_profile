"use client";

import { useState, useEffect } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionTitle } from "@/components/sectionTitle";

const images = [
  { src: "/assets/images/freelanx_common_assets/project/ticket.png", alt: "Ticketify", type: "Website" },
  { src: "/assets/images/freelanx_common_assets/project/ndoroKojo-app.png", alt: "Ndoro Kojo App", type: "Mobile App" },
  { src: "/assets/images/freelanx_common_assets/project/ndoroKojo-web.png", alt: "Ndoro Kojo Web", type: "Website" },
  { src: "/assets/images/freelanx_common_assets/project/spmi-polines.png", alt: "Spmi Polines", type: "Website" },
];

export default function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="lg:pt-25 pt-15" id="projects">
      <div className="container">
        <div className="text-center pb-15" data-aos="fade-up">
          <SectionTitle title="Portfolio" />
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium" data-aos="zoom-in">
            Portfolio
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            Beberapa project professional yang sudah kami kerjakan
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="w-full h-[300px] relative" data-aos="fade-up">
              <div
                className="w-full h-full rounded-lg overflow-hidden relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[linear-gradient(0deg,_rgba(0,0,0,.3),_transparent)] after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-500 group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:blur-[1.5px] group-hover:scale-[1.04] transition-all duration-500"
                />
                <span className="absolute top-4 right-4 inline-block rounded-[32px] bg-[rgba(255,79,1,.5)] py-[7px] px-[14px] text-white text-sm uppercase tracking-wider leading-[30px] font-medium">
                  {image.type}
                </span>
                <div className="z-20 absolute left-7.5 -bottom-0 opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500">
                  <h1 className="lg:text-3xl text-[26px] font-semibold text-white">
                    {image.alt}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images}
        index={lightboxIndex}
      />
    </div>
  );
}