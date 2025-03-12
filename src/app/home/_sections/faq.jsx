"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionTitle } from "@/components/sectionTitle";
import BgShape from "../../../../public/assets/images/freelanx_common_assets/bg_lines_about_us.png";
import FreelanxxLogo from "../../../../public/assets/images/freelanx_common_assets/freelanxx-logo-circle.png";

const faqList = [
  {
    question: "Apakah bisa request fitur khusus dalam aplikasi?",
    answer:
      "Tentu! Kami menyediakan paket custom development, di mana Anda bisa menentukan fitur sesuai kebutuhan bisnis Anda. Kami akan melakukan analisis untuk memberikan solusi terbaik.",
  },
  {
    question: "Berapa lama waktu pengerjaan proyek?",
    answer:
      "Waktu pengerjaan tergantung pada kompleksitas proyek. Untuk aplikasi standar, estimasi waktu sekitar 2-4 minggu, sedangkan proyek yang lebih kompleks dapat memakan waktu lebih lama.",
  },
  {
    question: "Apakah ada layanan after-sales atau maintenance?",
    answer:
      "Ya! Kami menyediakan layanan maintenance & support untuk memastikan aplikasi tetap berjalan optimal, aman, dan selalu up-to-date.",
  },
  {
    question: "Apakah Freelanxx hanya melayani perusahaan atau juga individu?",
    answer:
      "Kami melayani perusahaan, startup, UMKM, hingga individu yang membutuhkan solusi digital profesional.",
  },
  {
    question: "Apakah konsultasi awal dikenakan biaya?",
    answer:
      "Tidak! Konsultasi awal 100% gratis. Kami akan membantu memahami kebutuhan Anda sebelum memulai proyek.",
  },
  {
    question: "Bagaimana cara memulai kerja sama dengan Freelanxx?",
    answer:
      "Mudah! Cukup hubungi kami melalui WhatsApp, email, atau DM sosial media. Tim kami siap membantu Anda memulai transformasi digital bisnis Anda! 🚀",
  },
];

export default function Faq() {
  useEffect(() => {
    AOS.init({ duration: 800 });

    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        const isOpen = header.getAttribute("data-open") === "true";

        document.querySelectorAll(".accordion-body").forEach((item) => {
          item.style.maxHeight = null;
          item.style.opacity = 0;
          item.style.visibility = "hidden";
        });
        document.querySelectorAll(".accordion-header").forEach((item) => {
          item.setAttribute("data-open", "false");
        });

        if (!isOpen) {
          body.style.maxHeight = body.scrollHeight + "px";
          body.style.opacity = 1;
          body.style.visibility = "visible";
          header.setAttribute("data-open", "true");
        }
      });
    });

    return () => {
      accordionHeaders.forEach((header) => {
        header.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <section id="faqs" className="lg:pt-[25px] pt-[15px]">
      <div className="container">
        <div className="text-center pb-[25px]" data-aos="fade-up" data-aos-delay="200">
          <SectionTitle title="FAQs" />
          <p className="md:text-6xl text-4xl font-bold mt-1 tracking-wide" data-aos="zoom-in">
            Pertanyaan yang sering ditanyakan
          </p>
        </div>

        <div className="grid lg:grid-cols-[33.33%_auto] md:grid-cols-2 grid-cols-1 gap-6">
          <div
            className="p-12.5 rounded-[15px] bg-gradient-to-r from-[#00455F] to-[#00A5E3] text-center my-auto relative overflow-hidden"
            data-aos="fade-right"
          >
            <Image
              src={BgShape}
              alt="Background Shape"
              fill
              className="object-cover absolute inset-0 opacity-50"
            />
            <div className="relative z-10">
              <Image src={FreelanxxLogo} alt="Freelanxx Logo" width={100} height={100} className="inline-block" />
              <h2 className="text-white lg:text-[40px] text-3xl lg:leading-[1.2] py-3">Ada pertanyaan lagi?</h2>
              <div className="flex flex-col gap-4 mt-6">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white text-lg font-medium py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition"
                >
                  <i className="ri-whatsapp-line text-xl"></i> Konsultasi via WhatsApp
                </a>
                <div className="text-white text-lg font-medium">
                  Lebih nyaman di email?
                  <a
                    href="mailto:freelanxx.it@gmail.com"
                    className="block text-orange-500 hover:text-orange-600 transition font-bold"
                  >
                    freelanxx.it@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] lg:pl-7.5">
            {faqList.map((item, index) => (
              <div key={index} className="accordion-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <h2
                  data-open="false"
                  className="accordion-header flex justify-between items-center lg:text-[22px] text-lg rounded-[10px] border border-[#ccc] py-4 px-5 font-medium cursor-pointer"
                >
                  {item.question}
                  <span className="inline-block w-[11px] h-[11px] rounded-full bg-secondary shrink-0"></span>
                </h2>
                <div className="accordion-body max-h-0 overflow-hidden opacity-0 invisible px-5 py-0 transition-all duration-500">
                  <p className="my-4">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
