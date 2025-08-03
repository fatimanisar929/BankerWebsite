import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import FeatureSection from "./components/Features";
import "./App.css";
import AmortizationSection from "./components/AmortizationSection";
import AboutUs from "./components/AboutUs";
import GallerySection from "./components/GallerySection";
import Gallery from "./components/Gallery";
import Consult from "./components/consult";
import Working from "./components/working";
import Services from "./components/Services";
import Pricing from "./components/pricing";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />

      <section id="hero">
        <HeroSlider />
      </section>
      <div id="features">
        <FeatureSection />
      </div>
      <AmortizationSection />
      <section id="about">
        <AboutUs />
      </section>
      <section id="team">
        <GallerySection />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <Working />
      <section id="services">
        <Services />
      </section>
      <section id="test">
        <Testimonials />
      </section>

      <section id="pricing">
        <Pricing />
      </section>
      <section id="faq">
        <FAQ />
      </section>

      <Consult />
      <section id="blog">
        <Blog />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
