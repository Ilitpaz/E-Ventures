import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
