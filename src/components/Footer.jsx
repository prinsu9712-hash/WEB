import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { business, services } from "../data/siteData";
export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h2>JRK Electrician</h2>
          <p>
            Premium electrician services for homes, shops, offices and
            industrial spaces across Gujarat.
          </p>
          <div className="social">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          {["Home", "Services", "Gallery", "Testimonials", "Contact"].map(
            (x) => (
              <a href={`#${x.toLowerCase()}`} key={x}>
                {x}
              </a>
            ),
          )}
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 6).map((s) => (
            <a href="#services" key={s.title}>
              {s.title}
            </a>
          ))}
        </div>
        <div>
          <h3>Business Hours</h3>
          <p>24/7 Emergency Service</p>
          <p>{business.email}</p>
          <p>{business.phone}</p>
        </div>
      </div>
      <small>
        © {new Date().getFullYear()} JRK Electrician. All rights reserved.
      </small>
    </footer>
  );
}
