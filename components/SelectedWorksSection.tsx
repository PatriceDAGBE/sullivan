import React from 'react';
import ProjectCard from "@/components/ProjectCard";

const SelectedWorksSection = () => {
    return (
        <section>
          <div className="mb-12">
            <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-medium">Selected Works</h2>
            <p className="text-light text-[22px] sm:text-[28px] lg:text-[38px] mt-6 sm:mt-10">
              A curated selection of projects <br className="hidden sm:block"/>solving meaningful problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard title="MoMo" category="Reconstruction of MoMo’s journey" image="/ressourses/momo.png" />
            <ProjectCard title="Medi Reminder" category="Mobile App" image="/ressourses/medi_reminder.png" />
            <ProjectCard title="Secure Box from Secure Destination " category="Born for locker" image="/ressourses/secure_box.png" />
            <ProjectCard title="Beyond The Gate" category="Immersive Experiences  " image="/ressourses/beyond_the_gate.png" />
          </div>

          <div className="pt-10 pb-2">
            <a
              href="#"
              className="group flex items-center justify-center gap-2 w-full py-4 sm:py-5 rounded-2xl
                text-white/70 hover:text-black transition-all duration-300 ease-out
                border border-[#2F2F2F] hover:bg-[#D3AF4A] hover:border-[#D3AF4A]
                text-sm font-medium"
            >
              <span>See More</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
          </div>
        </section>
    );
};

export default SelectedWorksSection;