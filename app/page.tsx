import ProjectCard from '@/components/ProjectCard';
import HeroSection from "@/components/Hero";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="mx-auto py-30">
      {/* Hero Section */}
      < Hero />

      {/* Selected Works Section */}
      <section>
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Selected Works</h2>
          <p className="text-gray-500">A curated selection of projects solving meaningful problems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard title="MoMo" category="Redesign of MoMo UI" image="/ressourses/momo.png" />
          <ProjectCard title="Medi Reminder" category="Mobile App" image="/ressourses/medi_reminder.png" />
          {/* Ajoute les autres projets ici */}
        </div>
      </section>

      {/* Footer / CTA Section */}
      <section className="mt-40 border-t border-gray-800 pt-20 pb-10">
        <h2 className="text-4xl md:text-5xl font-medium leading-snug">
          Design is not just <span className="text-gray-600 italic">what it looks like...</span>
        </h2>
        <div className="mt-20 flex justify-between items-end">
           <span className="text-4xl font-bold">S.A.</span>
           <nav className="flex gap-8 text-sm text-gray-400 uppercase tracking-widest">
             <a href="#">Home</a>
             <a href="#">Contact</a>
           </nav>
        </div>
      </section>
    </main>
  );
}
