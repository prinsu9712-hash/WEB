import { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaPlus,
  FaMinus,
  FaMapMarkerAlt,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  badges,
  business,
  services,
  features,
  gallery,
  process,
  testimonials,
  faqs,
  whatsappUrl,
} from "../data/siteData";
import { SectionTitle, CTAButtons, Reveal } from "./Shared";

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <Reveal delay={(index % 4) * 0.04}>
      <article className="service-card">
        <img loading="lazy" src={service.image} alt={service.title} />
        <div>
          <Icon />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <a
            href={whatsappUrl(
              `Hello JRK Electrician, I want to book ${service.title}.`,
            )}
          >
            Book Now
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function Trusted() {
  return (
    <section className="trusted">
      {badges.map(([b, Icon]) => (
        <Reveal key={b}>
          <div className="trust-card">
            <Icon />
            <span>{b}</span>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
export function Services() {
  return (
    <section id="services" className="section">
      <SectionTitle
        eyebrow="Our Services"
        title="Complete Electrical Services"
        text="Premium residential, commercial and industrial electrical support built around safety, speed and transparent booking."
      />
      <div className="grid cards">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
export function WhyChoose() {
  return (
    <section className="section soft">
      <SectionTitle
        eyebrow="Why Choose JRK"
        title="Premium Workmanship, Practical Pricing"
        text="Every visit is planned to protect your property, save time and deliver long-lasting electrical performance."
      />
      <div className="grid features">
        {features.map(([t, d]) => (
          <Reveal key={t}>
            <div className="feature">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
export function Emergency() {
  return (
    <section className="emergency">
      <h2>Need an Emergency Electrician?</h2>
      <p>
        Available 24 Hours for urgent electrical faults, MCB trips, fuse issues
        and critical repairs.
      </p>
      <CTAButtons message="Hello JRK Electrician, I need emergency electrical service." />
    </section>
  );
}
export function About() {
  return (
    <section id="about" className="section about">
      <div>
        <SectionTitle
          eyebrow="About JRK"
          title="Trusted Electrical Partner for Gujarat"
          text="JRK Electrician helps families and businesses keep their spaces safe, efficient and ready for everyday use."
        />
        <p>
          Our mission is to provide dependable electrical service with honest
          guidance, clean execution and a strong commitment to safety. We
          support new wiring, repairs, lighting, maintenance, CCTV and emergency
          breakdown calls with customer satisfaction as the final checkpoint.
        </p>
        <div className="about-list">
          <span>Mission-led service</span>
          <span>Safety-first inspection</span>
          <span>10+ years experience</span>
          <span>Clear communication</span>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://images.unsplash.com/photo-1621905252472-e3d3a0f1480d?auto=format&fit=crop&w=900&q=80"
        alt="JRK electrician inspecting wiring"
      />
    </section>
  );
}
export function Gallery() {
  const [index, setIndex] = useState(-1);
  return (
    <section id="gallery" className="section">
      <SectionTitle
        eyebrow="Project Gallery"
        title="Neat Work You Can Trust"
        text="A look at wiring, lighting, repair, commercial and industrial electrical work."
      />
      <div className="masonry">
        {gallery.map((g, i) => (
          <button key={i} onClick={() => setIndex(i)}>
            <img loading="lazy" src={g.src} alt={g.category} />
            <span>{g.category}</span>
          </button>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={gallery.map((g) => ({ src: g.src }))}
      />
    </section>
  );
}
export function Process() {
  return (
    <section className="section soft">
      <SectionTitle
        eyebrow="Working Process"
        title="Simple Booking to Safe Completion"
        text="A professional flow designed for clarity from the first call to final payment."
      />
      <div className="timeline">
        {process.map((p, i) => (
          <Reveal key={p}>
            <div>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <span>{p}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
export function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <SectionTitle
        eyebrow="Testimonials"
        title="Google Review Style Feedback"
        text="Customers choose JRK Electrician for fast response, clean finishing and trustworthy advice."
      />
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2600 }}
        pagination
        loop
        spaceBetween={24}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {testimonials.map(([n, job, txt]) => (
          <SwiperSlide key={n}>
            <div className="review">
              <div className="stars">★★★★★</div>
              <p>“{txt}”</p>
              <h3>{n}</h3>
              <span>{job}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
export function FAQ() {
  const [open, set] = useState(0);
  return (
    <section className="section soft">
      <SectionTitle
        eyebrow="FAQ"
        title="Common Questions"
        text="Quick answers before booking your electrician."
      />
      <div className="faq">
        {faqs.map(([q, a], i) => (
          <div className="faq-item" key={q}>
            <button onClick={() => set(open === i ? -1 : i)}>
              {q}
              {open === i ? <FaMinus /> : <FaPlus />}
            </button>
            {open === i && <p>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
export function Contact() {
  const [f, set] = useState({
    name: "",
    phone: "",
    service: "House Wiring",
    address: "",
    date: "",
    message: "",
  });
  const msg = `Hello JRK Electrician,\n\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nAddress: ${f.address}\nMessage: ${f.message}\n\nI would like to book an electrician.`;
  return (
    <section id="contact" className="section contact">
      <div>
        <SectionTitle
          eyebrow="Contact"
          title="Book JRK Electrician"
          text="Share your details and get quick support by WhatsApp or phone."
        />
        <p>
          <FaPhoneAlt /> {business.phone}
        </p>
        <p>
          <FaEnvelope /> {business.email}
        </p>
        <p>
          <FaMapMarkerAlt /> {business.address}
        </p>
        <iframe
          title="Gujarat map"
          loading="lazy"
          src="https://www.google.com/maps?q=Gujarat%20India&output=embed"
        ></iframe>
      </div>
      <form>
        <input
          placeholder="Name"
          onChange={(e) => set({ ...f, name: e.target.value })}
        />
        <input
          placeholder="Phone Number"
          onChange={(e) => set({ ...f, phone: e.target.value })}
        />
        <select onChange={(e) => set({ ...f, service: e.target.value })}>
          {services.slice(0, 10).map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
        </select>
        <input
          placeholder="Address"
          onChange={(e) => set({ ...f, address: e.target.value })}
        />
        <input
          type="date"
          onChange={(e) => set({ ...f, date: e.target.value })}
        />
        <textarea
          placeholder="Message"
          onChange={(e) => set({ ...f, message: e.target.value })}
        />
        <div className="cta-row">
          <a
            className="btn primary"
            href={whatsappUrl(msg)}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp /> Book on WhatsApp
          </a>
          <a className="btn secondary" href={`tel:${business.phoneHref}`}>
            <FaPhoneAlt /> Call Now
          </a>
        </div>
      </form>
    </section>
  );
}
export function Floating() {
  return (
    <div className="floating">
      <a href={whatsappUrl()}>
        <FaWhatsapp />
      </a>
      <a href={`tel:${business.phoneHref}`}>
        <FaPhoneAlt />
      </a>
      <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>
        <FaArrowUp />
      </button>
    </div>
  );
}
