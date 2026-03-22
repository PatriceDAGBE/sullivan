import Hero from "@/components/Hero";
import SelectedWorksSection from "@/components/SelectedWorksSection";
import BeforeFooter from "@/components/BeforeFooter";

export default function Home() {
  return (
    <main className="mx-auto">
      {/* Hero Section */}
      < Hero />

      {/* Selected Works Section */}
      <SelectedWorksSection />

      {/* Before Footer */}
      <BeforeFooter />

    </main>
  );
}
