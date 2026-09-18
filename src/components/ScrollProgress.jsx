"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let tick = false;

    const update = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const next = max > 0 ? window.scrollY / max : 0;
        setProgress(Math.min(1, Math.max(0, next)));
        tick = false;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (pathname === "/") return null;

  return (
    <div
      className="progress"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
}
