import { SectionTitle } from "@/components/sectionTitle";
import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [selectedPackage, setSelectedPackage] = useState("F&B");
  const [selectedMajorPackage, setSelectedMajorPackage] = useState("Paket Usaha");
  const scrollRef = useRef(null);

  const packages = {
    "F&B": {
      features: ["Point Of Sales (POS)", "Supply Chain Management (SCM)", "Inventory", "Customer Support 24/7"],
    },
    "Pendidikan": {
      features: ["Learning Management System (LMS)", "E-Course", "Student Teacher Portal", "Customer Support 24/7"],
    },
    "E-Commerce": {
      features: ["E-Commerce Platform", "Inventory", "Marketplace", "Customer Support 24/7"],
    },
    "Klinik & Kesehatan": {
      features: ["Medical Record", "Konsultasi", "Appointment & Queue Management", "Customer Support 24/7"],
    },
    "Event & Hiburan": {
      features: ["Ticketing System", "Reservation System", "Customer Support 24/7"],
    },
    "Wedding": {
      features: ["RSVP System", "Customer Support 24/7"],
    },
    "Manajemen Karyawan": {
      features: ["Payroll System", "Attendance System", "Customer Support 24/7"],
    },
  };

  const packageKeys = Object.keys(packages);

  return (
    <section id="pricing" className="py-16 text-center bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto max-w-4xl px-4">
        <SectionTitle title="Daftar Harga" />
        <h2 className="text-4xl font-bold mb-4" data-aos="zoom-in">
          Dengan Harga yang <span className="text-blue-500">Sangat Terjangkau!</span>
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-8 mt-8 border border-gray-200" data-aos="fade-up">
          <div className="flex justify-center gap-4 mb-6">
            <button
              className={`px-6 py-2 rounded-full text-sm font-semibold ${selectedMajorPackage === "Paket Usaha" ? "bg-[#004A70] text-white" : "bg-white text-[#004A70] border border-[#004A70]"}`}
              onClick={() => setSelectedMajorPackage("Paket Usaha")}
            >
              Paket Usaha
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-semibold ${selectedMajorPackage === "Paket Aplikasi Custom" ? "bg-[#004A70] text-white" : "bg-white text-[#004A70] border border-[#004A70]"}`}
              onClick={() => setSelectedMajorPackage("Paket Aplikasi Custom")}
            >
              Paket Aplikasi Custom
            </button>
          </div>
          {selectedMajorPackage === "Paket Usaha" && (
            <div className="relative flex flex-col lg:flex-row items-start justify-between gap-8">
              <div className="sm:text-center md:text-start lg:text-start w-full lg:w-1/2" data-aos="fade-up">
                <p className="text-2xl font-bold text-gray-500">Mulai dari</p>
                <div className="relative inline-block">
                  <p className="text-black line-through text-4xl mt-2">Rp 1.000.000</p>
                  <span className="absolute -top-2 -right-10 bg-red-500 text-white text-sm px-2 py-1 rounded-full">20%</span>
                </div>
                <p className="text-5xl font-bold text-red-500 mt-2">
                  Rp 800.000 <span className="text-black">Saja!</span>
                </p>
                <div className="mt-3">
                  <button className="hover:bg-green-500 hover:text-white px-4 py-1 rounded-xl font-semibold border border-green-500 text-green-500 transition duration-300">
                    Konsultasi Sekarang
                  </button>
                </div>
              </div>

              <div className="w-full max-w-md sm:max-w-lg border p-3 rounded-xl shadow-soft-lg mb-8" data-aos="fade-up">
                <div ref={scrollRef} className="flex overflow-x-auto gap-4 whitespace-nowrap scrollbar p-2 snap-x snap-mandatory">
                  {packageKeys.map((pkg) => (
                    <button
                      key={pkg}
                      className={`px-6 py-2 rounded-xl text-sm font-semibold flex-shrink-0 snap-center ${selectedPackage === pkg ? "bg-[#29A768] text-white" : "bg-white text-[#29A768] border border-[#29A768]"}`}
                      onClick={() => setSelectedPackage(pkg)}
                    >
                      {pkg}
                    </button>
                  ))}
                </div>
                <h3 className="font-bold text-xl text-gray-800">Fitur dan Benefit</h3>
                <ul className="mt-2 text-gray-700 list-disc list-inside text-start">
                  {packages[selectedPackage]?.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="absolute -bottom-6 -left-8 p-0" data-aos="fade-up">
                <span className="bg-orange-500 text-white text-md font-bold px-6 py-4 rounded-bl-2xl rounded-tr-2xl">
                  % Diskon Ramadhan
                </span>
              </div>

            </div>
          )}

          {selectedMajorPackage === "Paket Aplikasi Custom" && (
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8" data-aos="fade-up">
              <div className="sm:text-center md:text-start lg:text-start w-full lg:w-1/2">
                <p className="text-2xl font-bold text-gray-500">Mulai dari</p>
                <div className="relative inline-block">
                  <p className="text-black line-through text-4xl mt-2">Rp 1.800.000</p>
                  <span className="absolute -top-2 -right-10 bg-red-500 text-white text-sm px-2 py-1 rounded-full">20%</span>
                </div>
                <p className="text-5xl font-bold text-red-500 mt-2">
                  Rp 1.500.000 <span className="text-black">Saja!</span>
                </p>
                <div className="mt-3">
                  <button className="hover:bg-green-500 hover:text-white px-4 py-1 rounded-xl font-semibold border border-green-500 text-green-500 transition duration-300">
                    Konsultasi Sekarang
                  </button>
                </div>
              </div>

              <div className="w-full max-w-md sm:max-w-lg border p-3 rounded-xl shadow-soft-lg text-start">
                <h3 className="font-bold text-xl text-gray-800 text-center">Fitur dan Benefit</h3>
                <ul className="mt-2 text-gray-700 list-disc list-inside">
                  <li>Kustomisasi Design UI/UX</li>
                  <li>Kustomisasi Fitur Fleksibel</li>
                  <li>Multi-platform Support (Android & iOS)</li>
                  <li>Customer Support 24/7</li>
                </ul>
              </div>
              <div className="absolute -bottom-14 -left-8 p-0">
                <span className="bg-orange-500 text-white text-md font-bold px-6 py-4 rounded-bl-2xl rounded-tr-2xl">
                  % Diskon Ramadhan
                </span>
              </div>

            </div>

          )}
        </div>
        <div className="mt-6 text-sm text-gray-500">*Fitur lain dapat dikonsultasikan secara gratis</div>
      </div>
    </section>
  );
}