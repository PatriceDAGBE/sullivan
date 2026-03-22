import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectsPageHero from "@/components/ProjectsPageHero";
import DetailsContentPage from "@/components/DetailsContentPage";
import BeforeFooter from "@/components/BeforeFooter";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto">

      {/* Hero */}
      <ProjectsPageHero slug={slug} project={project} />

      {/* Details  Content*/}
      <DetailsContentPage slug={slug} project={project} />

      {/* Before Footer */}
      <BeforeFooter />

    </main>
  );
}