import Image from "next/image";
import FreelanxxLogo from "../../../../public/assets/images/freelanx_common_assets/freelanxx.svg";
import { SectionTitle } from "@/components/sectionTitle";
import FeatureCard from "@/components/Card/featuresCard";

const features = [
  {
    icon: "ri-code-s-slash-line",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
    title: "Dibuat oleh Ahlinya",
    description: "Tim profesional siap menghadirkan solusi terbaik untuk bisnis Anda.",
  },
  {
    icon: "ri-flashlight-line",
    iconColor: "text-green-500",
    bgColor: "bg-green-100",
    title: "Cepat, Efisien, & Skalabel",
    description: "Pengembangan tanpa ribet, siap berkembang bersama kebutuhan Anda.",
  },
  {
    icon: "ri-service-line",
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100",
    title: "Kolaborasi Transparan",
    description: "Kami bekerja dengan Anda, bukan hanya untuk Anda.",
  },
];

export default function About() {
  return (
    <section className="lg:pt-20 pt-12">
      <div className="container">
        <div className="text-center pb-10 fadeInUp" data-delay="0.2">
          <SectionTitle title="Tentang Kami" />

          <p className="md:text-6xl text-4xl font-bold mt-3 tracking-wide">
            "<span className="text-blue-500">Inovasi</span>,{" "}
            <span className="text-green-600">Elevasi</span>, dan{" "}
            <span className="text-orange-500">Dominasi</span>
            <span className="text-black">!</span>"
          </p>
        </div>

        <div
          className="lg:w-[80%] w-full mx-auto lg:py-4 lg:px-20 py-4 px-10 fadeInUp flex flex-col lg:flex-row items-center justify-between gap-12"
          data-delay="0.2"
        >
          <div className="flex items-center justify-center">
            <div className="h-[200px] w-[200px] flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-full">
              <Image
                src={FreelanxxLogo}
                alt="Freelanxx Logo"
                className="w-24 z-10 h-24 md:w-32 md:h-32 object-contain"
              />
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl w-full lg:w-[50%]">
            <h3 className="text-lg md:text-xl leading-relaxed text-gray-900">
              Berdiri sejak 2024 di Semarang,{" "}
              <span className="text-blue-500 font-semibold">Freelanxx</span>{" "}
              menghadirkan solusi software inovatif dengan teknologi mutakhir,
              desain modern, dan performa tinggi. Dari web, mobile, hingga
              desktop, kami siap mengoptimalkan bisnis Anda dengan sistem yang handal, aman, dan scalable.
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-900">
              Saatnya naik level dengan solusi digital yang cerdas, cepat, dan tanpa batas! 🚀🔥
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6 text-center mt-12 container">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>


    </section>
  );
}
