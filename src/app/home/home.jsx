import Loader from '@/components/loader';
import Navbar from '@/components/navbar';
import Hero from './_sections/hero';
import Partners from './_sections/partners';
import About from './_sections/about';
import WorkProcess from './_sections/workProcess';
import Services from './_sections/services';
import Projects from './_sections/projects';
import Features from './_sections/features';
import Pricing from './_sections/pricing';
import Faq from './_sections/faq';
import Book from './_sections/book';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>

      {/* Preloader */}
      <Loader />

      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Partners Section */}
      <Partners />

      {/* <!-- About Start --> */}
      <About />

      {/* <!-- work process start --> */}
      <WorkProcess />

      {/* <!-- services start --> */}
      <Services />

      {/* <!-- projects start --> */}
      <Projects />

      {/* <!-- Features Start --> */}
      <Features />

      {/* <!-- Pricing start --> */}
      <Pricing />

      {/* <!-- faqs start --> */}
      <Faq />

      {/* <!-- Book now start --> */}
      <Book />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <div id="scroll-to-top" className="z-40 fixed right-2.5 bottom-5 w-10 h-10 items-center justify-center cursor-pointer" style={{ display: 'none' }}>
        <i className="ri-arrow-up-s-line absolute text-primary"></i>
        <svg id="rounded-scroll" width="100%" height="100%" viewBox="-1 -1 102 102" stroke="#ff4f01" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </div>
    </>
  );
}