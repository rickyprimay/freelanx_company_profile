import Image from "next/image";
import BgShape from "../../public/assets/images/freelanx_common_assets/bg_lines_about_us.png";

export const SectionTitle = ({ title }) => {
  return (
    <h3 className="relative border border-black py-2.5 px-5 rounded-3xl md:text-base text-sm inline-block font-normal mb-3 bg-gray-100 shadow-soft-lg overflow-hidden">
    <Image
      src={BgShape}
      alt="Background Shape"
      className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay brightness-125"
    />

    <i className="ri-arrow-right-up-line text-black"></i> {title}
  </h3>
  )
}