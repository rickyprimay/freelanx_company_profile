import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Freelanxx | IT Solutions</h2>
            <p className="mt-2 text-gray-500">
              Didirikan pada 2024 di Semarang, Freelanxx menghadirkan solusi software inovatif untuk web, mobile, dan desktop. Mengoptimalkan bisnis Anda dengan sistem yang handal, aman, dan scalable.
            </p>
            <div className="flex space-x-4 mt-4 text-gray-700">
              <Link href="https://www.instagram.com/freelanxx_it/" target="_blank">
                <i className="ri-instagram-line text-xl hover:text-[#00455F]"></i>
              </Link>
              <Link href="https://wa.me/6285166994220?text=Halo%2C%20Saya%20ingin%20berkonsultasi%20mengenai%20Jasa%20Pembuatan%20Aplikasi%20di%20Freelanxx%21%20*%28Diskon%2020%25%29*" target="_blank">
                <i className="ri-whatsapp-line text-xl hover:text-[#00455F]"></i>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Beranda</h2>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li>
                <Link href="#services" className="hover:text-[#00455F]">Layanan</Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#00455F]">Portofolio</Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#00455F]">Harga</Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-[#00455F]">FAQs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
            <ul className="mt-2 space-y-2 text-gray-500">
              <a href="https://wa.me/6285166994220?text=Halo%2C%20Saya%20ingin%20berkonsultasi%20mengenai%20Jasa%20Pembuatan%20Aplikasi%20di%20Freelanxx%21%20*%28Diskon%2020%25%29*" target="_blank" className="hover:text-[#00455F]">
                <li className="flex items-center gap-2">
                  <i className="ri-phone-line"></i> (62) 851-6699-4220
                </li>
              </a>

              <a href="mailto:freelanxx.it@gmail.com" className="hover:text-[#00455F]" target="_blank">
                <li className="flex items-center gap-2">
                  <i className="ri-mail-line"></i> freelanxx.it@gmail.com
                </li>
              </a>

            </ul>
          </div>

        </div>

        <div className="mt-10 pt-4 sm:text-center md:text-end lg:text-end text-gray-400 text-sm">
          © 2025 Freelanxx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
