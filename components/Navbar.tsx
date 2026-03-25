"use client";
import { useState } from "react";
import { Menu, Globe, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/works" },
  { label: "About me", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative top-0 left-0 right-0 z-50 mt-[20px] sm:mt-[40px] md:mt-[60px]
            px-6 sm:px-12 md:px-[80px] lg:px-[115px]"
      >
        <div className="mx-auto flex justify-between items-start h-[51px]">

          {/* Menu dropdown */}
          <div className={`relative ${open ? "border border-[#6E6E6E]/40 rounded-xl px-4 overflow-hidden min-w-[230px]" : ""}`}>
            
            {/* Bouton Menu — toujours visible */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 py-4 transition-opacity hover:opacity-70 text-[#f0f0f0] w-full"
            >
              <Menu className="w-5 h-5 md:w-6 cursor-pointer md:h-6 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[16px] sm:text-[18px] md:text-[20px] font-medium leading-none">
                Menu
              </span>
            </button>

            {/* Liens — visibles seulement quand open */}
            {open && (
              <div>
                <div className='border-b border-[#6E6E6E]/40'></div>
                {links.map((link, i) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 my-4 text-[#f0f0f0] hover:bg-[#D3AF4A] hover:text-[#212121] transition-colors duration-200 group `}
                  >
                    <span className="text-base font-medium">{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-all duration-200" strokeWidth={1.5} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Droite */}
          <div className="flex items-center gap-4 md:gap-6 text-[#f0f0f0] py-4">
            <Globe className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:opacity-70 transition-opacity" strokeWidth={1.5} />
            <span className="text-[16px] sm:text-[18px] md:text-[20px] font-bold tracking-tighter">
              S.A.
            </span>
          </div>

        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-30" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
