"use client";

import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3.5px] z-[100] pointer-events-none bg-black/10 dark:bg-white/5"
    >
      <div
        className="h-full bg-gradient-to-r from-[#211A19] via-[#C18F84] to-[#FAF6F0] dark:from-[#211A19] dark:via-[#C18F84] dark:to-[#EBE5DF] origin-left transition-transform duration-75 ease-out shadow-[0_0_12px_rgba(193,143,132,0.6)]"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  );
}
