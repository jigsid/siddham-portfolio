"use client";

import { useEffect } from "react";

const ASSETS = [
  "/abm-flow.webp",
  "/proofs/capvance-proof.webp",
  "/proofs/capvance-proof-2.webp",
  "/proofs/gushwork-proof.webp",
];

export default function AssetPreloader() {
  useEffect(() => {
    const connection = navigator.connection;
    if (connection && (connection.saveData || /2g/.test(connection.effectiveType || ""))) {
      return;
    }

    let cancelled = false;
    const warm = () => {
      ASSETS.forEach((src, index) => {
        setTimeout(() => {
          if (cancelled) return;
          const img = new window.Image();
          img.decoding = "async";
          img.src = src;
        }, index * 400);
      });
    };

    const idle = window.requestIdleCallback;
    if (idle) {
      const handle = idle(warm, { timeout: 2500 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(handle);
      };
    }

    const timer = setTimeout(warm, 1200);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return null;
}
