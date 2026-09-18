"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProofOverlay({ proof, onClose }) {
  const ref = useRef(null);
  const images = proof.images && proof.images.length ? proof.images : [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    dialog.showModal();
    document.documentElement.classList.add("locked");

    const onCancel = (event) => {
      event.preventDefault();
      onClose();
    };

    dialog.addEventListener("cancel", onCancel);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      document.documentElement.classList.remove("locked");
    };
  }, [onClose]);

  const onBackdrop = (event) => {
    if (event.target === ref.current) onClose();
  };

  const active = images[index] || images[0];

  return (
    <dialog
      ref={ref}
      className="proofdlg"
      onClick={onBackdrop}
      aria-label={proof.title}
    >
      <div className="proofbox">
        <div className="proofhead">
          <div>
            <p className="peyebrow">Proof</p>
            <p className="ptitle">{proof.title}</p>
          </div>
          <button
            type="button"
            className="pclose"
            onClick={onClose}
            aria-label="Close proof"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="proofmedia">
          {proof.kind === "image" && active ? (
            <Image
              key={active.src}
              src={active.src}
              alt={proof.title}
              width={active.width}
              height={active.height}
              sizes="(max-width: 900px) 92vw, 900px"
            />
          ) : (
            <div className="pvideowrap">
              <iframe
                className="pvideo"
                src={`https://www.youtube-nocookie.com/embed/${proof.id}?autoplay=1&rel=0&modestbranding=1`}
                title={proof.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}
        </div>
        {proof.kind === "image" && images.length > 1 ? (
          <div className="pstrip" aria-label="Proof images">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                className="pthumb"
                aria-current={i === index}
                aria-label={`Show image ${i + 1}`}
                onClick={() => setIndex(i)}
              >
                <Image
                  src={image.src}
                  alt=""
                  width={192}
                  height={108}
                />
              </button>
            ))}
          </div>
        ) : null}
        <div className="pfoot">
          <p className="pcap">{proof.caption}</p>
          <span className="hint">esc to close</span>
        </div>
      </div>
    </dialog>
  );
}
