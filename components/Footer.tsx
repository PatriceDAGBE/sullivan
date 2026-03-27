"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactModal from "@/components/ContactModal";

export default function Footer() {
  const [showPhone, setShowPhone] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className="mt-40 px-6 sm:px-12 md:px-[80px] lg:px-[115px] border-t border-[#2F2F2F] pt-10 pb-24">
      <div className="flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-0">

        {/* Logo */}
        <span className="text-[60px] sm:text-[80px] lg:text-[120px] font-medium leading-none">S.A.</span>

        {/* Nav columns */}
        <div className="flex gap-10 sm:gap-16 pt-0 sm:pt-2">

          {/* Menu */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white mb-1">Menu</span>
            <a href="/" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Home</a>
            <a href="/works" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Work</a>
            <a href="/about" className="text-sm text-white/40 hover:text-white transition-colors duration-200">About</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-white mb-1">Contact</span>
            <a
              href="https://www.linkedin.com/in/sullivan-atchahoue-7b8a782b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors duration-200"
            >
              Linkedin
            </a>
            {/* ← remplace le <a href="#"> par ce bouton */}
            <button
              onClick={() => setShowContact(true)}
              className="text-sm text-white/40 hover:text-white transition-colors duration-200 text-left"
            >
              Mail
            </button>
            <button
              onClick={() => setShowPhone(true)}
              className="text-sm text-white/40 hover:text-white transition-colors duration-200 text-left"
            >
              Phone
            </button>
          </div>

        </div>
      </div>

      {/* Phone Modal */}
      <AnimatePresence>
        {showPhone && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowPhone(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: [0.33, 1, 0.68, 1] }}
              className="fixed inset-0 z-[101] flex items-center justify-center px-4"
              onClick={() => setShowPhone(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[320px] rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: "#1A1A18", border: "1px solid #2F2F2F" }}
              >
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-[#6E6E6E] uppercase tracking-wider font-medium">Phone</span>
                  <button
                    onClick={() => setShowPhone(false)}
                    className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#2F2F2F]
                      text-[#6E6E6E] hover:text-white hover:border-white/30 transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Number */}
                <a
                  href="tel:+2290142086714"
                  className="text-[28px] font-medium text-white hover:text-[#D3AF4A] transition-colors duration-200 tracking-tight"
                >
                  +2290142086714 {/* ← ton numéro ici */}
                </a>

                {/* Copy button */}
                <button
                  onClick={() => navigator.clipboard.writeText("+2290142086714")}
                  className="flex items-center gap-2 text-[13px] text-[#6E6E6E] hover:text-white cursor-pointer transition-colors duration-200 w-fit"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy number
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </footer>
  );
}