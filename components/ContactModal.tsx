"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = async () => {
      if (!name || !email || !message) return;
      setStatus("sending");

      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            from_name: name,
            from_email: email,
            message: message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );

        setStatus("success");

        setTimeout(() => {
          setStatus("idle");
          setName("");
          setEmail("");
          setMessage("");
          onClose();
        }, 3000);

      } catch {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[101] flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="w-full max-w-[540px] rounded-2xl p-6 sm:p-8 flex flex-col gap-6"
              style={{
                backgroundColor: "#1A1A18",
                border: "1px solid #2F2F2F",
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[22px] sm:text-[26px] font-medium text-white leading-tight">
                    Get in touch
                  </h2>
                  <p className="text-[#6E6E6E] text-[14px] mt-1">
                    I'll get back to you as soon as possible.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-[#2F2F2F]
                    text-[#6E6E6E] hover:text-white hover:border-white/30 transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-10"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#D3AF4A" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-white font-medium text-[18px]">Message sent!</p>
                  <p className="text-[#6E6E6E] text-[14px] text-center">
                    Thanks for reaching out. I'll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] text-[#6E6E6E] font-medium uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-[14px] text-white placeholder-[#4A4A4A]
                        bg-[#111110] border border-[#2F2F2F] focus:border-[#D3AF4A] focus:outline-none
                        transition-colors duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] text-[#6E6E6E] font-medium uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-[14px] text-white placeholder-[#4A4A4A]
                        bg-[#111110] border border-[#2F2F2F] focus:border-[#D3AF4A] focus:outline-none
                        transition-colors duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] text-[#6E6E6E] font-medium uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl text-[14px] text-white placeholder-[#4A4A4A]
                        bg-[#111110] border border-[#2F2F2F] focus:border-[#D3AF4A] focus:outline-none
                        transition-colors duration-200 resize-none"
                    />
                  </div>

                  {status === "error" && (
                      <p className="text-red-400 text-[13px] text-center -mb-2">
                        Une erreur est survenue. Réessaie.
                      </p>
                  )}

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={!name || !email || !message || status === "sending"}
                    className="group inline-flex items-center justify-center gap-2 mt-1 px-5 py-3 rounded-xl
                      border border-[#2F2F2F] hover:border-[#D3AF4A] text-white/70 hover:text-white hover:bg-[#D3AF4A]
                      disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-[#2F2F2F] disabled:hover:text-white/70
                      transition-all duration-200 text-[14px] font-medium w-full"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}