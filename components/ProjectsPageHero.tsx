"use client";
import {Project} from "@/data/projects";
import ScrollIndicator from "@/components/ScrollIndicator";
import SeeOther from "@/components/SeeOther";

export default function ProjectsPageHero({ slug, project }: { slug: string, project: Project}) {

  return (
    <section className="mt-[170px] sm:mt-[60px] md:mt-[60px] mb-32">
      <h1 className="text-[32px] sm:text-[48px] lg:text-[64px] font-medium leading-tight mb-10">
        {project.title}
      </h1>

      {/* Meta */}
      <div className="flex flex-wrap gap-8 sm:gap-12 lg:gap-16 mb-12">
        <div>
          <p className="text-white font-medium text-[18px] sm:text-[24px] lg:text-[30px] mb-1">Clients</p>
          <p className="text-white/40 text-[14px] sm:text-[18px] lg:text-[24px]">{project.client}</p>
        </div>
        <div>
          <p className="text-white font-medium text-[18px] sm:text-[24px] lg:text-[30px] mb-1">Year</p>
          <p className="text-white/40 text-[14px] sm:text-[18px] lg:text-[24px]">{project.year}</p>
        </div>
        <div>
          <p className="text-white font-medium text-[18px] sm:text-[24px] lg:text-[30px] mb-1">Projects</p>
          <p className="text-white/40 text-[14px] sm:text-[18px] lg:text-[24px]">{project.projectType}</p>
        </div>
      </div>

      {/* See other */}
      <SeeOther currentSlug={slug} />

      {/* Scroll indicator */}
      <div className="mt-16">
        <ScrollIndicator />
      </div>
    </section>
  );
}