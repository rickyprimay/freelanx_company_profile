import ServiceCard from "@/components/Card/serviceCard";
import { SectionTitle } from "@/components/sectionTitle";

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
    delay: "0.4",
  },
  {
    title: "Desktop App",
    description: "Software handal untuk kebutuhan bisnis anda.",
    image: "assets/images/freelanx_common_assets/desktop-app.png",
    delay: "0.6",
  },
  {
    title: "Maintenance App",
    description: "Pemeliharaan sistem agar tetap aman dan optimal.",
    image: "assets/images/freelanx_common_assets/maintenance-app.png",
    delay: "0.6",
  },
];

export default function Services() {
  return (
    <section id="services" className="lg:pt-25 pt-15">
      <div className="container">
        <div className="text-center pb-15 fadeInUp" data-delay="0.2">
          <SectionTitle title="Layanan Kami" />
          <p className="md:text-6xl text-4xl font-bold mt-3 tracking-wide">Jasa Pengembangan Aplikasi</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
