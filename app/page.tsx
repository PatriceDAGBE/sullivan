import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="mb-32">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm <span className="text-gray-400">Sullivan ATCHAHOUÉ.</span><br />
          I'm UI/UX Designer.
        </h1>
        <p className="mt-6 text-gray-500 max-w-lg">
          Passionately creating impactful digital experiences, rooted in user needs.
        </p>
      </section>

      {/* Selected Works Section */}
      <section>
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Selected Works</h2>
          <p className="text-gray-500">A curated selection of projects solving meaningful problems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ProjectCard title="MoMo" category="Redesign of MoMo UI" image="/momo.png" />
          <ProjectCard title="Medi Reminder" category="Mobile App" image="/medi.png" />
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
