import { useEffect, useState } from "react";
export function useScroll(threshold = 80) {
  const [scrolled, set] = useState(false);
  useEffect(() => {
    const on = () => set(window.scrollY > threshold);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [threshold]);
  return scrolled;
}
