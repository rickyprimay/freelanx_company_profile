"use client"; // Pastikan komponen ini dijalankan di sisi klien

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Import stylesheet YARL

export default function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Daftar gambar untuk lightbox
  const images = [
    { src: "/assets/images/projects/work7.jpg", alt: "A Branch with Flowers" },
    { src: "/assets/images/projects/work1.jpg", alt: "Orange Rose Flower" },
    { src: "/assets/images/projects/work6.jpg", alt: "Green Plant on a Desk" },
    { src: "/assets/images/projects/work5.jpg", alt: "Orange Rose Flower" },
  ];

  // Fungsi untuk membuka lightbox dengan indeks tertentu
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="lg:pt-25 pt-15" id="projects">
      <div className="container">
        <div className="text-center pb-15 fadeInUp" data-delay="0.2">
          <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
            <i className="ri-arrow-right-up-line text-primary"></i> Projects
          </h3>
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
            Featured Projects
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">Get a glimpse of our work</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index}>
              <div
                className="rounded-lg overflow-hidden relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[linear-gradient(0deg,_rgba(0,0,0,.3),_transparent)] after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-500 group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="group-hover:blur-[1.5px] group-hover:scale-[1.04] transition-all duration-500"
                />
                <span className="absolute top-4 right-4 inline-block rounded-[32px] bg-[rgba(255,79,1,.5)] py-[7px] px-[14px] text-white text-sm uppercase tracking-wider leading-[30px] font-medium">
                  {index === 0 ? "Website" : index === 1 ? "Apps" : index === 2 ? "Landing" : "Mockup"}
                </span>
                <div className="z-20 absolute left-7.5 -bottom-0 opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500">
                  <h1 className="lg:text-3xl text-[26px] font-semibold text-white">{image.alt}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={images}
        index={lightboxIndex}
      />
    </div>
  );
}