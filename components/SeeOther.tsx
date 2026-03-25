"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";

export default function SeeOther({ currentSlug }: { currentSlug: string }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const otherProjects = [
      ...projects.filter(p => p.slug === currentSlug),
      ...projects.filter(p => p.slug !== currentSlug)
    ];

  const glassStyle = {
      "--bg-glass": "rgba(110, 110, 110, 0.15)", // On crée une variable
      backgroundColor: "var(--bg-glass)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.25)",
      // Note: borderImage peut parfois annuler le borderRadius sur certains navigateurs
    } as React.CSSProperties;

  return (
    <div className="fixed bottom-60 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4">

      {/* Pills — visibles quand open */}
      {open && (
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <button
            onClick={() => setOpen(false)}
            style={glassStyle}
            className="w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer
              text-white/70 hover:text-white transition-colors duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {otherProjects.map((p) => (
            <button
              key={p.slug}
              onClick={() => router.push(`/projects/${p.slug}`)}
              style={glassStyle}
              className="px-4 py-2.5 rounded-xl text-white/70
                hover:!bg-[#D3AF4A] hover:text-black
                transition-all duration-200 text-sm font-medium whitespace-nowrap"
            >
              {p.abrev}
            </button>
          ))}
        </div>
      )}

      {/* See other button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={glassStyle}
          className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl
            text-white/70 transition-colors duration-200 text-sm font-medium"
        >
          <span>See other</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="transition-transform duration-200">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </button>
      )}

    </div>
  );
}