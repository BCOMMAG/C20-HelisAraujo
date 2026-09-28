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
        className="h-full bg-gradient-to-r from-[#0F1E36] via-[#A86E61] to-[#F8F9FA] dark:from-[#0B121C] dark:via-[#B87B6E] dark:to-[#F1F5F9] origin-left transition-transform duration-75 ease-out shadow-[0_0_12px_rgba(168,110,97,0.7)]"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  );
}
