import { motion } from "framer-motion";
import { heroImage, stats } from "../data/siteData";
import { CTAButtons } from "./Shared";
export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(120deg,rgba(15,23,42,.92),rgba(15,23,42,.55)),url(${heroImage})`,
      }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="pill">
          Certified electrical services across Gujarat
        </span>
        <h1>Professional Electrical Solutions for Homes & Businesses</h1>
        <p>
          Reliable, Affordable & Certified Electrician Services Across Gujarat
          with neat workmanship, safe repairs and fast emergency response.
        </p>
        <CTAButtons />
        <div className="stats">
          {stats.map(([n, l]) => (
            <div key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
