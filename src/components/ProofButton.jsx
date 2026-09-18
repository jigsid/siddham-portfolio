"use client";

import { useState } from "react";
import ProofOverlay from "./ProofOverlay";

export default function ProofButton({ proof, tone = "light" }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={tone === "dark" ? "proof on-dark" : "proof"}
        onClick={() => setOpen(true)}
      >
        {proof.trigger}
        <span className="arr" aria-hidden="true">
          →
        </span>
      </button>
      {open ? <ProofOverlay proof={proof} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
