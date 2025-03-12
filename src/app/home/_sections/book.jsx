import Image from "next/image";

export default function Book() {
  return (
    <section id="book" className="lg:pt-25 pt-15">
      <div className="container">
        <div className="relative mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:px-12.5 py-7.5 px-8 rounded-[20px] bg-gradient-to-r from-[#00455F] to-[#00A5E3] text-white items-center overflow-hidden">
          <Image
            src="/assets/images/freelanx_common_assets/bg_lines_about_us.png"
            alt="Background Shape"
            fill
            className="object-cover absolute inset-0 opacity-80"
          />

          <div className="relative z-10 space-y-2 text-left">
            <h2 className="text-3xl text-white font-bold">
              Konsultasi dengan Freelanxx - Gratis!
            </h2>
            <p className="mt-2 text-sm md:text-base">
              Diskusikan kebutuhan bisnis Anda dengan tim ahli kami! Kami siap
              memberikan insight, solusi terbaik, dan strategi pengembangan yang
              tepat untuk mewujudkan proyek Anda.
            </p>
          </div>

          <div className="relative z-10 mt-5 lg:mt-0 flex flex-col lg:flex-row justify-end gap-4">
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 shadow-md"
            >
              <i className="ri-whatsapp-line text-xl"></i> Konsultasi via Whatsapp
            </a>
            <a
              href="#"
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 shadow-md"
            >
              <i className="ri-mail-line text-xl"></i> Konsultasi via Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
