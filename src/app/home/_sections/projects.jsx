"use client";

import { useEffect } from "react";
import $ from "jquery";
import "magnific-popup";

export default function Projects() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("magnific-popup").then(() => {
        $(".work-popup").magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });
      });
    }
  }, []);

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
          <div>
            <a href="assets/images/projects/work7.jpg" className="work-popup">
              <img src="assets/images/projects/work7.jpg" alt="Project 1" />
            </a>
          </div>
          <div>
            <a href="assets/images/projects/work1.jpg" className="work-popup">
              <img src="assets/images/projects/work1.jpg" alt="Project 2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
