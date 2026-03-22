"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollIndicator from "@/components/ScrollIndicator";

const roles = [
  "UI/UX Designer.",
  "Creative.",
  "Polyvalent.",
  "Tech-enthusiast.",
  "Curious.",
  "Ambitious."
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const currentWord = roles[index];
  // Si le mot est "UI/UX Designer.", on met du blanc, sinon du gris
  const isDesigner = currentWord === "UI/UX Designer.";

  return (
    <section className="mt-[170px] sm:mt-[60px] md:mt-[60px]  mb-32">
      <div className="max-w-[950px] min-h-[94px] text-[#6E6E6E]">
        <h1 className="font-geist text-[26px] sm:text-[40px]  md:text-[45px] font-medium leading-[100%] tracking-normal">
          Hi, I'm <span className="text-[#FFFFFF]">Sullivan ATCHAHOUÉ.</span>
          <br />
          I'm{" "}
          <span className="inline-grid">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "linear" }}
                className={`col-start-1 row-start-1 ${
                  isDesigner ? "text-[#FFFFFF]" : "text-[#6E6E6E]"
                }`}
              >
                {currentWord}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
      </div>

      <p className="mt-8 text-[18px] text-[#6E6E6E] max-w-[500px] leading-relaxed font-geist">
        Passionately creating impactful digital<br/>
        experiences, rooted in user needs.
      </p>

      {/* l'indicateur de scroll */}
      <div className="mt-16">
        <ScrollIndicator />
      </div>
    </section>
  );
}
