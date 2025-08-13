import React, { useState, useEffect } from "react";
import ResumeIcon from "../assets/icons/resume.svg?react";

export const ResumePop = () => {
  const [open, setOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <button onClick={() => setOpen(true)}>
        {" "}
        <ResumeIcon className="home-icon" />
        View Résumé
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Résumé"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            top: 100,
            background: "rgba(0,0,0,.55)",
            display: "grid",
            placeItems: "center",
            zIndex: 50,
            padding: 16,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(1000px, 95vw)",
              height: "min(85vh, 900px)",
              background: "white",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,.3)",
              display: "grid",
              gridTemplateRows: "48px 1fr",
            }}
          >
            <header
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 12px",
                borderBottom: "1px solid #e5e5e5",
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button>Open in new tab</button>
                </a>
                <a href="/Resume.pdf" download>
                  <button>Download</button>
                </a>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close">
                ✕
              </button>
            </header>

            <iframe
              title="Résumé PDF"
              src="/Resume.pdf"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
};
