"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const svg = document.getElementById("preloaderSvg");
    const tl = gsap.timeline();

    const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

    tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
      delay: 1.5,
      y: -100,
      opacity: 0,
    });
    tl.to(svg, {
      duration: 0.5,
      attr: { d: curve },
      ease: "power2.easeIn",
    }).to(svg, {
      duration: 0.5,
      attr: { d: flat },
      ease: "power2.easeOut",
    });
    tl.to(".preloader", {
      y: -1500,
    });
    tl.to(".preloader", {
      zIndex: -1,
      display: "none",
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader z-[999] fixed w-full h-screen left-0 top-0 overflow-hidden bg-black flex items-center justify-center">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
      <div className="preloader-heading absolute top-0 left-0 flex justify-center items-center w-full h-full">
        <div className="load-text text-xl font-extralight uppercase tracking-[15px] text-white">
          {"Loading".split("").map((char, index) => (
            <span key={index} className="inline-block">{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
