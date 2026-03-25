"use client";

import ScrollIndicator from "@/components/ScrollIndicator";
import BeforeFooter from "@/components/BeforeFooter";
import {Project, projects as allProjects} from "@/data/projects";
import React from "react";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="group cursor-pointer flex flex-col gap-4 relative"
      style={{
        border: "1.17px solid #2F2F2F",
        borderRadius: "24px",
        padding: "16px 24px",
      }}
    >
      {/* Image container with hover overlay */}
      <div
        className="relative overflow-hidden"
        style={{ borderRadius: "16px" }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[220px] sm:h-[300px] md:h-[450px] lg:h-[700px] xl:h-[700px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div
          className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
          style={{ borderRadius: "16px" }}
        />

        {/* Arrow button — fades + slides up on hover */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="
              flex items-center justify-center
              rounded-full
              opacity-0 translate-y-4
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300 ease-out delay-75
            "
            style={{ backgroundColor: "#D3AF4A", width: "100px", height: "100px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm">{project.category}</p>
      </div>
    </div>
  );
}

// ---------- Page ----------
export default function WorkPage() {

  return (
    <main className="mx-auto">
      {/* ── Hero ── */}
      <section className="mt-[170px] sm:mt-[60px] md:mt-[60px]  mb-32">
          <div className="max-w-[950px] min-h-[94px] text-[#6E6E6E]">
            <h1 className="font-geist text-[26px] sm:text-[40px]  md:text-[45px] font-medium leading-[100%] tracking-normal">
              Here is some of my <span className="text-[#FFFFFF]">Works.</span>
              <br />
              I've worked in Finance.
            </h1>
          </div>

          <p className="mt-8 text-[18px] text-[#6E6E6E] max-w-[500px] leading-relaxed font-geist">
            For any questions regarding work, feel<br/>
            free to reach out.
          </p>

          {/* l'indicateur de scroll */}
          <div className="mt-16">
            <ScrollIndicator />
          </div>
      </section>

      {/* Projects grid */}
      <section>
          <div className="mb-12">
            <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] font-medium">Selected Works</h2>
            <p className="text-light text-[22px] sm:text-[28px] lg:text-[38px] mt-6 sm:mt-10">
              A curated selection of projects <br className="hidden sm:block"/>solving meaningful problems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
              {allProjects.map((project, i) => (
                  <ProjectCard key={project.slug} project={project} index={i} />
              ))}
          </div>
      </section>

      {/* ── Before Footer ── */}
      <BeforeFooter />
    </main>
  );
}