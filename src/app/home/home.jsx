"use client";

import Loader from '@/components/loader';
import Navbar from '@/components/navbar';
import Hero from './_sections/hero';
import About from './_sections/about';
import WorkProcess from './_sections/workProcess';
import Services from './_sections/services';
import Projects from './_sections/projects';
import Pricing from './_sections/pricing';
import Faq from './_sections/faq';
import Book from './_sections/book';
import Footer from '@/components/footer';
import { useEffect } from "react";
import AOSInitializer from '@/components/AOSInitializer';

export default function Home() {

  return (
    <>
    <AOSInitializer />

      {/* Preloader */}
      <Loader />

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />


      {/* <!-- About Start --> */}
      <About />

      {/* <!-- services start --> */}
      <Services />

      {/* <!-- work process start --> */}
      <WorkProcess />

      

      {/* <!-- projects start --> */}
      <Projects />

      {/* <!-- Pricing start --> */}
      <Pricing />

      {/* <!-- faqs start --> */}
      <Faq />

      {/* <!-- Book now start --> */}
      <Book />

      {/* Footer */}
      <Footer />
    </>
  );
}