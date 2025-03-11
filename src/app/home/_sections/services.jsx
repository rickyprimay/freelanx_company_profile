"use client";

import ServiceCard from "@/components/Card/serviceCard";
import { SectionTitle } from "@/components/sectionTitle";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "Website App",
    description: "Website modern, fungsionalitas, responsif, dan cepat.",
    image: "assets/images/freelanx_common_assets/web-app.png",
    delay: "0.2",
  },
  {
    title: "Mobile App",
    description: "Aplikasi Android & iOS dengan performa optimal.",
    image: "assets/images/freelanx_common_assets/mobile-app.png",
    delay: "0.3",
  },
  {
    title: "Desktop App",
    description: "Software handal untuk kebutuhan bisnis anda.",
    image: "assets/images/freelanx_common_assets/desktop-app.png",
    delay: "0.4",
  },
  {
    title: "Maintenance App",
    description: "Pemeliharaan sistem agar tetap aman dan optimal.",
    image: "assets/images/freelanx_common_assets/maintenance-app.png",
    delay: "0.5",
  },
];

export default function Services() {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  return (
    <section id="services" className="lg:pt-25 pt-15">
      <div className="container">
        <div className="text-center pb-10 fadeInUp" data-aos="fade-up" data-delay="0.2">
          <SectionTitle title="Layanan Kami" />
          <p className="md:text-5xl text-3xl font-bold mt-3 tracking-wide" data-aos="zoom-in">
            Jasa Pengembangan Aplikasi
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="h-full flex">
               <ServiceCard key={index} {...service} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
