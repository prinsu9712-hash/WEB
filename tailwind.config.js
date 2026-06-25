/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0F172A",
        electric: "#FACC15",
        whatsapp: "#22C55E",
        body: "#1F2937",
      },
      borderRadius: {
        premium: "16px",
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 18px 50px rgba(15, 23, 42, 0.1)",
      },
    },
  },
  plugins: [],
};
