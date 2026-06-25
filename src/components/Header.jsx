import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { business } from "../data/siteData";
import { useScroll } from "../hooks/useScroll";
import { CTAButtons } from "./Shared";
import { scrollToId } from "../utils/scroll";
const nav = ["Home", "Services", "About", "Gallery", "Testimonials", "Contact"];
export default function Header() {
  const scrolled = useScroll();
  const [open, setOpen] = useState(false);
  const go = (n) => {
    scrollToId(n.toLowerCase());
    setOpen(false);
  };
  return (
    <>
      <div className="topbar">
        <span>⚡ 24/7 Emergency Service</span>
        <span>Serving Gujarat</span>
        <a href={`tel:${business.phoneHref}`}>
          <FaPhoneAlt />
          {business.phone}
        </a>
        <a href={`mailto:${business.email}`}>
          <FaEnvelope />
          {business.email}
        </a>
        <span className="social">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </span>
      </div>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <button className="brand" onClick={() => go("Home")}>
          <b>JRK</b>
          <span>Electrician</span>
        </button>
        <nav className={open ? "open" : ""}>
          {nav.map((n) => (
            <button key={n} onClick={() => go(n)}>
              {n}
            </button>
          ))}
          <div className="mobile-cta">
            <CTAButtons />
          </div>
        </nav>
        <div className="desktop-cta">
          <CTAButtons />
        </div>
        <button className="menu" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </header>
    </>
  );
}
