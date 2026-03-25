import React from 'react';

const BeforeFooter = () => {
    return (
        <section className="w-full mt-24">
          <p
            className="font-medium text-[32px] sm:text-[42px] md:text-[55px] lg:text-[70px] leading-tight sm:leading-tight md:leading-[100px]"
            style={{ letterSpacing: "0%" }}
          >
            Design is not just{" "}
            <span className="text-white/30">what it looks like and feels like</span>{" "}
            design is how it works. Ready to see mine?
          </p>

          <a
            href="#"
            className="group inline-flex items-center gap-2 mt-6 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl
              border border-[#2F2F2F] hover:border-[#D3AF4A] text-white/70 hover:text-black hover:bg-[#D3AF4A]
              transition-colors duration-200 text-base sm:text-lg font-medium"
          >
            <span>Get in touch</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </section>
    );
};

export default BeforeFooter;