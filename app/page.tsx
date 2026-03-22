import ProjectCard from '@/components/ProjectCard';
import HeroSection from "@/components/Hero";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="mx-auto">
      {/* Hero Section */}
      < Hero />

      {/* Selected Works Section */}
        <section>
          <div className="mb-12">
            <h2 className="text-[72px] font-medium">Selected Works</h2>
            <p className="text-light text-[38px] mt-10">A curated selection of projects <br/>solving meaningful problems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProjectCard title="MoMo" category="Redesign of MoMo UI" image="/ressourses/momo.png" />
            <ProjectCard title="Medi Reminder" category="Mobile App" image="/ressourses/medi_reminder.png" />
            <ProjectCard title="Medi Reminder" category="Mobile App" image="/ressourses/medi_reminder.png" />
            <ProjectCard title="Medi Reminder" category="Mobile App" image="/ressourses/medi_reminder.png" />
          </div>

          <div className="pt-10 pb-2">
          <a
            href="#"
            className="group flex items-center justify-center gap-2 w-full py-5 rounded-2xl
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

      <section className="w-full mt-24">
          <p
            className="font-medium leading-[100px] text-[40px] md:text-[70px]"
            style={{ letterSpacing: "0%" }}
          >
            Design is not just{" "}
            <span className="text-white/30">what it looks like and feels like</span>{" "}
            design is how it works. Ready to see mine?
          </p>
          <a

            href="#"
            className="group inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl
              border border-[#2F2F2F] hover:border-[#D3AF4A] text-white/70 hover:text-white hover:bg-[#D3AF4A]
              transition-colors duration-200 text-lg font-medium"
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
              className="transition-transform duration-200"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </section>

      {/* Footer */}
      <footer className="mt-40 -mx-6 sm:-mx-16 md:-mx-[115px] px-6 sm:px-16 md:px-[115px] border-t border-[#2F2F2F] pt-10 pb-50">
          <div className="flex justify-between items-start">

            {/* Logo */}
            <span className="text-[120px] font-medium leading-none">S.A.</span>

            {/* Nav columns */}
            <div className="flex gap-16 pt-2">

              {/* Menu */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white mb-1">Menu</span>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Home</a>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Work</a>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">About</a>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-white mb-1">Contact</span>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Linkedin</a>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Mail</a>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">Phone</a>
              </div>

            </div>
          </div>
        </footer>
    </main>
  );
}
