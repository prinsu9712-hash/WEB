import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import "./styles/index.css";
export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </MainLayout>
    </BrowserRouter>
  );
}
