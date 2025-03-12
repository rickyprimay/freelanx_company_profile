import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white ">
      <div className="container mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Freelanxx | IT Solutions</h2>
            <p className="mt-2 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ratione quisquam exercitationem vel explicabo illum perspiciatis laborum assumenda recusandae at architecto, quo voluptate est neque voluptatibus aliquam asperiores quas sapiente!
            </p>
            <div className="flex space-x-4 mt-4 text-gray-700">
              <i className="ri-instagram-line text-xl"></i>
              <i className="ri-whatsapp-line text-xl"></i>
              <i className="ri-twitter-line text-xl"></i>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Beranda</h2>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li><Link href="#services">Layanan</Link></li>
              <li><Link href="#projects">Portofolio</Link></li>
              <li><Link href="#pricing">Harga</Link></li>
              <li><Link href="#faqs">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li className="flex items-center gap-2"><i className="ri-phone-line"></i> (62) 812-2769-4379</li>
              <li className="flex items-center gap-2"><i className="ri-mail-line"></i> freelanxx.it@gmail.com</li>
            </ul>
          </div>

        </div>

        <div className=" mt-10 pt-4 sm:text-center md:text-end lg:text-end text-gray-400 text-sm">
          © 2025 Freelanxx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
