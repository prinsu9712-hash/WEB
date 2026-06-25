import Hero from "../components/Hero";
import {
  Trusted,
  Services,
  WhyChoose,
  Emergency,
  About,
  Gallery,
  Process,
  Testimonials,
  FAQ,
  Contact,
} from "../components/Sections";
export default function Home() {
  return (
    <main>
      <Hero />
      <Trusted />
      <Services />
      <WhyChoose />
      <Emergency />
      <About />
      <Gallery />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
