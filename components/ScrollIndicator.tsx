"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="flex justify-center items-center py-10">
      {/* Corps de la souris */}
      <div className="w-[24px] h-[40px] border-2 border-[#FFFFFF] rounded-full flex justify-center p-1.5">
        {/* Le point qui s'anime */}
        <motion.div
          animate={{
            y: [0, 13, 0], // Mouvement vertical : départ -> bas -> départ
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity, // Boucle infinie
            ease: "easeInOut",
          }}
          className="w-1.5 h-1.5 bg-[#FFFFFF] rounded-full"
        />
      </div>
    </div>
  );
}
