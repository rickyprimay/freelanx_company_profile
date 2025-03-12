"use client";

import Image from "next/image";
import Link from "next/link";
import BgCircle from "../../../../public/assets/images/freelanx_common_assets/bg_half_circle.png";
import MTS from "../../../../public/assets/images/freelanx_common_assets/client/logo_mts_nu_tbs_kudus.png";
import Brebes from "../../../../public/assets/images/freelanx_common_assets/client/logo_pemkab_brebes.png";
import Cipta from "../../../../public/assets/images/freelanx_common_assets/client/cipta.png";
import Polines from "../../../../public/assets/images/freelanx_common_assets/client/logo_polines.png";

export default function Hero() {
  const logos = [Polines, Brebes, MTS, Cipta];

  return (
    <section
      id="home"
      className="relative lg:pt-[150px] pt-[100px] bg-gradient-to-b from-[#00455F] to-[#00A5E3] text-white overflow-hidden pb-10"
    >
      <div className="absolute inset-0 w-full h-full bg-[url('/assets/images/freelanx_common_assets/bg_curved_lines.png')] bg-cover bg-center opacity-80 mix-blend-overlay brightness-125"></div>

      <div className="container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold text-white xl:text-[64px] lg:text-[54px] md:text-[46px] text-[36px] leading-tight">
            Solusi <span className="text-[#FFC107] font-outline-2">Digital</span> <br />
            Performa <span className="text-[#FFC107] font-outline-2">Maksimal!</span>
          </h1>
          <p className="text-lg text-white mb-4 font-outline-1">
            Solusi terbaik aplikasi web, mobile, dan desktop dengan performa ngebut dan desain modern, langsung dari tangan para ahlinya.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-white font-bold">
            <Link href="#pricing" className="bg-orange-500 px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 border transition">
              List Harga (Diskon 20%)
            </Link>
            <Link href="#book" className="bg-[#004A70] px-6 py-3 rounded-full shadow-lg hover:bg-[#346882] border transition">
              Konsultasi Sekarang
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 font-semibold text-center max-w-sm mx-auto relative z-20 px-2">
        <h2 className="flex flex-row items-center bg-white text-black px-4 py-2 rounded-lg shadow-2xl hover:bg-gray-100 transition space-x-2">
          <i className="ri-window-line text-2xl"></i>
          <span>Web App</span>
        </h2>
        <h2 className="flex flex-row items-center bg-white text-black px-4 py-2 rounded-lg shadow-2xl hover:bg-gray-100 transition space-x-2">
          <i className="ri-smartphone-line text-2xl"></i>
          <span>Mobile App</span>
        </h2>
        <h2 className="flex flex-row items-center bg-white text-black px-4 py-2 rounded-lg shadow-2xl hover:bg-gray-100 transition space-x-2">
          <i className="ri-computer-line text-2xl"></i>
          <span>Desktop App</span>
        </h2>
        <h2 className="flex flex-row items-center bg-white text-black px-4 py-2 rounded-lg shadow-2xl hover:bg-gray-100 transition space-x-2">
          <i className="ri-tools-line text-2xl"></i>
          <span>Maintenance</span>
        </h2>
      </div>

      <div className="mt-10 text-center max-w-sm mx-auto relative z-20">
        <h2 className="text-2xl font-bold text-gray-300">Partner Kami</h2>
        <div className="relative w-full mt-4 overflow-hidden rounded-full">
          <div className="logos-slide flex space-x-6 ">
            {[...logos, ...logos].map((logo, index) => (
              <Image 
              key={index} 
              src={logo} 
              alt="Partner Logo" 
              className="w-[100px] h-[25px] object-contain" 
            />
            ))}
          </div>
          <div className="fade-left"></div>
          <div className="fade-right"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <Image src={BgCircle} alt="Background Half Circle" className="w-full h-auto object-contain" />
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .logos-slide {
          display: flex;
          white-space: nowrap;
          width: max-content;
          animation: scroll 10s linear infinite;
        }

        .fade-left, .fade-right {
          position: absolute;
          top: 0;
          width: 50px;
          height: 100%;
          pointer-events: none;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.5), transparent);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, rgba(255, 255, 255, 0.5), transparent);
        }
      `}</style>
    </section>
  );
}