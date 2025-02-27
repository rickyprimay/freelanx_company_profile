"use client"; 

import { useEffect } from "react";
import Image from "next/image";

export default function Faq() {
  useEffect(() => {
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
        <div className="text-center pb-[15px] fadeInUp" data-delay="0.2">
          <h3 className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px]">
            <i className="ri-arrow-right-up-line text-primary"></i> FAQs
          </h3>
          <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-medium">
            Frequently Asked Questions
          </h2>
          <p className="md:text-xl md:leading-7 text-base mt-2">
            Unsure about subscription design?
          </p>
        </div>

        <div className="grid lg:grid-cols-[33.33%_auto] md:grid-cols-2 grid-cols-1 gap-6">
          <div className="p-12.5 rounded-[15px] bg-black-200 text-center">
            <Image
              src="/assets/images/about/founder.png"
              alt="founder"
              title="founder"
              width={140}
              height={140}
              className="mx-auto"
            />
            <h2 className="text-white lg:text-[40px] text-3xl lg:leading-[1.2] py-3">
              Book a 15-minute intro call
            </h2>
            <a
              href="#"
              className="btn bg-primary text-secondary border-primary hover:bg-black-200 hover:text-white"
            >
              Schedule now <i className="ri-video-chat-line"></i>
            </a>
            <p className="text-white">
              Prefer to email?{" "}
              <a href="mailto:hello@designpro.com" className="text-primary">
                hello@designpro.com
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-[15px] lg:pl-7.5">
            {[
              "How secure is my financial data on your platform?",
              "How does the subscription work?",
              "How much do your plans cost?",
              "How quickly can you deliver designs for our business?",
              "Can I request revisions to the designs provided?",
              "What types of designs does Designpro specialize in?",
            ].map((question, index) => (
              <div key={index} className="accordion-item">
                <h2
                  data-open="false"
                  className="accordion-header flex justify-between items-center lg:text-[22px] text-lg rounded-[10px] border border-[#ccc] py-4 px-5 font-medium cursor-pointer"
                >
                  {question}
                  <span className="inline-block w-[11px] h-[11px] rounded-full bg-secondary shrink-0"></span>
                </h2>
                <div className="accordion-body max-h-0 overflow-hidden opacity-0 invisible px-5 py-0 transition-all duration-500">
                  <p className="my-4">
                    Our childcare center is open from 7:00 AM to 6:00 PM,
                    Monday through Friday. We offer flexible scheduling
                    options to accommodate working families.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
