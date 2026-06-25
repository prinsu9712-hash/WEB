import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { business, whatsappUrl } from "../data/siteData";
export const SectionTitle = ({ eyebrow, title, text }) => (
  <motion.div
    className="section-title"
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <span>{eyebrow}</span>
    <h2>{title}</h2>
    <p>{text}</p>
  </motion.div>
);
export const CTAButtons = ({ message }) => (
  <div className="cta-row">
    <a
      className="btn primary"
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
    >
      <FaWhatsapp /> Book on WhatsApp
    </a>
    <a className="btn secondary" href={`tel:${business.phoneHref}`}>
      <FaPhoneAlt /> Call Now
    </a>
  </div>
);
export const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay, duration: 0.55 }}
  >
    {children}
  </motion.div>
);
