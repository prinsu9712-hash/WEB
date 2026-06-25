import Header from "../components/Header";
import Footer from "../components/Footer";
import { Floating } from "../components/Sections";
export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <Floating />
    </>
  );
}
