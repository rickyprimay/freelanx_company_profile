import { useEffect } from "react";
import { SectionTitle } from "@/components/sectionTitle";

const steps = [
  {
    stage: "Tahap Pra-Produksi",
    color: "bg-blue-500",
    processes: [
      { number: "1", title: "Konsultasi Kebutuhan" },
      { number: "2", title: "Analisis Spesifikasi Aplikasi" },
      { number: "3", title: "Pembuatan MOU" },
      { number: "4", title: "Deal Project", highlight: "text-blue-500 font-bold", border: "bg-blue-200 border-blue-600 text-blue-600" },
    ],
  },
  {
    stage: "Tahap Produksi",
    color: "bg-green-500",
    processes: [
      { number: "5", title: "* Pembuatan Design UI/UX" },
      { number: "6", title: "* Revisi Design UI/UX" },
      { number: "7", title: "Implementasi Aplikasi dan Database" },
      { number: "8", title: "Revisi Akhir", highlight: "text-green-500 font-bold", border: "bg-green-200 border-green-600 text-green-600" },
    ],
  },
  {
    stage: "Tahap Pasca-Produksi",
    color: "bg-red-500",
    processes: [
      { number: "9", title: "Penyerahan Project" },
      { number: "10", title: "Pembuatan Dokumentasi Aplikasi" },
      { number: "11", title: "Project Done", highlight: "text-red-500 font-bold", border: "bg-red-200 border-red-600 text-red-600" },
    ],
  },
];

export default function WorkProcess() {

  return (
    <section id="how" className="lg:pt-20 pt-10 pb-10 bg-gray-100 mt-2">
      <div className="container">
        <div className="text-center pb-10 fadeInUp" data-aos="fade-up" data-aos-delay="200">
          <SectionTitle title="Tahap Pengerjaan"/>
          <h2 className="md:text-5xl text-3xl font-bold mt-3 tracking-wide" data-aos="zoom-in">
            Bagaimana proses produksi di <span className="text-blue-500">Freelanxx</span> berlangsung?
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg flex overflow-x-auto h-full" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className={`flex-shrink-0 ${step.color} text-white text-xl font-bold w-[250px] flex items-center justify-center text-center rounded-l-2xl p-4`}>
                {step.stage}
              </div>
              <div className="flex flex-1 items-stretch w-full p-4 min-w-max relative">
                {step.processes.map((process, i) => (
                  <div key={i} className="flex flex-col items-center relative flex-1">
                    {i > 0 && <div className="absolute top-4 left-[-50%] w-full h-1 bg-black"></div>}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                        process.highlight ? `${process.border}` : "bg-white border-black text-black"
                      } relative z-10`}
                    >
                      {process.number}
                    </div>
                    <p className={`text-center text-sm mt-2 flex items-center justify-center min-h-[60px] px-2 ${process.highlight || "text-gray-800"}`}>
                      {process.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-500 text-center">*Custom Design dapat dibicarakan lebih lanjut</div>
      </div>
    </section>
  );
}
