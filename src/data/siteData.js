import {
  FaBolt,
  FaCertificate,
  FaShieldAlt,
  FaTools,
  FaRupeeSign,
  FaWhatsapp,
  FaHome,
  FaFan,
  FaLightbulb,
  FaPlug,
  FaVideo,
  FaIndustry,
  FaBuilding,
  FaBell,
  FaBatteryFull,
  FaStar,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

export const business = {
  name: "JRK Electrician",
  phone: "+91 94268 07286",
  phoneHref: "+919426807286",
  email: "jrkelectrician@gmail.com",
  domain: "jrkelectrician.in",
  area: "Gujarat",
  address: "Serving homes, shops, offices and industrial sites across Gujarat",
};
export const whatsappUrl = (
  message = "Hello JRK Electrician, I would like to book an electrician.",
) => `https://wa.me/${business.phoneHref}?text=${encodeURIComponent(message)}`;
export const heroImage =
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1800&q=80";
export const stats = [
  ["500+", "Projects Completed"],
  ["10+", "Years Experience"],
  ["24/7", "Emergency Support"],
  ["100%", "Customer Satisfaction"],
];
export const badges = [
  ["Licensed Electrician", FaCertificate],
  ["Verified Service", FaCheckCircle],
  ["Quality Materials", FaShieldAlt],
  ["Affordable Pricing", FaRupeeSign],
  ["Emergency Support", FaClock],
  ["100% Satisfaction", FaStar],
];
const imgs = [
  "photo-1621905251918-48416bd8575a",
  "photo-1558618666-fcd25c85cd64",
  "photo-1600585154340-be6161a56a0c",
  "photo-1565608438257-fac3c27beb36",
  "photo-1509391366360-2e959784a276",
  "photo-1581092160607-ee22621dd758",
];
export const services = [
  "House Wiring",
  "Electrical Repair",
  "Fan Installation",
  "Light Installation",
  "Switch & Socket Repair",
  "MCB Repair",
  "Fuse Repair",
  "Inverter Installation",
  "Door Bell Installation",
  "CCTV Installation",
  "Commercial Electrical Work",
  "Industrial Electrical Work",
  "Emergency Electrical Service",
  "Electrical Maintenance",
].map((title, i) => ({
  title,
  icon: [
    FaHome,
    FaTools,
    FaFan,
    FaLightbulb,
    FaPlug,
    FaBolt,
    FaShieldAlt,
    FaBatteryFull,
    FaBell,
    FaVideo,
    FaBuilding,
    FaIndustry,
    FaClock,
    FaCheckCircle,
  ][i],
  image: `https://images.unsplash.com/${imgs[i % imgs.length]}?auto=format&fit=crop&w=700&q=75`,
  description: `Premium ${title.toLowerCase()} completed safely with neat finishing, tested connections and dependable support for Gujarat customers.`,
}));
export const features = [
  [
    "Experienced Electricians",
    "Skilled professionals for residential, commercial and industrial work.",
  ],
  [
    "Affordable Pricing",
    "Transparent quotations with practical solutions for every budget.",
  ],
  [
    "Safety First",
    "Every job follows safe isolation, testing and protection practices.",
  ],
  [
    "Quick Response",
    "Fast WhatsApp and phone booking for urgent electrical needs.",
  ],
  [
    "High Quality Materials",
    "Reliable wires, switches, MCBs and fixtures recommended for long life.",
  ],
  [
    "Guaranteed Work",
    "Clean workmanship with customer satisfaction at the center.",
  ],
];
export const gallery = [
  "House Wiring",
  "Lighting",
  "Commercial",
  "Industrial",
  "Repair Work",
  "House Wiring",
  "Lighting",
  "Commercial",
].map((cat, i) => ({
  category: cat,
  src: `https://images.unsplash.com/${imgs[(i + 1) % imgs.length]}?auto=format&fit=crop&w=900&q=80`,
}));
export const process = [
  "Contact Us",
  "Inspection",
  "Quotation",
  "Work Starts",
  "Completion",
  "Payment",
];
export const testimonials = [
  [
    "Rakesh Patel",
    "Home Owner",
    "JRK Electrician fixed our wiring fault quickly and explained everything clearly. Very professional service.",
  ],
  [
    "Neha Shah",
    "Boutique Owner",
    "Lighting installation looks premium and the team finished the work neatly after business hours.",
  ],
  [
    "Amit Mehta",
    "Factory Supervisor",
    "Reliable support for MCB and maintenance work. Their response time is excellent.",
  ],
  [
    "Kiran Joshi",
    "Office Manager",
    "Booked on WhatsApp and received a clear quotation. Smooth experience from start to finish.",
  ],
];
export const faqs = [
  [
    "How much do you charge?",
    "Pricing depends on service type, site condition and materials. Share details on WhatsApp for a quick estimate.",
  ],
  [
    "Do you provide emergency service?",
    "Yes, JRK Electrician provides 24/7 emergency electrical support across serviceable Gujarat areas.",
  ],
  [
    "Which areas do you serve?",
    "We serve residential, commercial and industrial customers across Gujarat.",
  ],
  [
    "Can I book through WhatsApp?",
    "Yes. Use any Book on WhatsApp button and we will receive your service details instantly.",
  ],
  [
    "Do you provide commercial services?",
    "Yes, including office wiring, lighting, panel work, maintenance and troubleshooting.",
  ],
  [
    "Do you provide electrical materials?",
    "Yes, we can recommend and arrange quality materials when required.",
  ],
];
