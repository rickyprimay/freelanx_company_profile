import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Freelanxx - Jasa Pembuatan Aplikasi Web, Mobile, dan Desktop",
  description: "Jasa pembuatan aplikasi web, android, ios, dan desktop berkualitas tinggi untuk bisnis Anda, langsung dari tangan para ahli. Dirancang dengan teknologi mutakhir, keamanan tingkat tinggi, serta performa optimal untuk memastikan bisnis Anda berkembang pesat. Butuh solusi aplikasi custom yang inovatif, scalable, dan terpercaya? Percayakan proyek Anda kepada tim ahli kami dan wujudkan aplikasi impian Anda dengan kualitas terbaik!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <meta property="og:title" content="Freelanxx - Jasa Pembuatan Aplikasi Web, Mobile, dan Desktop" />
        <meta property="og:description" content="Jasa pembuatan aplikasi web, android, ios, dan desktop berkualitas tinggi untuk bisnis Anda, langsung dari tangan para ahli." />
        <meta property="og:image" content="https://www.freelanxx.com/assets/images/freelanx_common_assets/logo_header.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.freelanxx.com" />
        <meta property="og:type" content="website" />
    
        <link rel="icon" href="https://www.freelanxx.com/assets/images/freelanx_common_assets/freelanxx.svg" />

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
        <link rel="stylesheet" href="/assets/css/output.css" />

      </head>
      <body className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
