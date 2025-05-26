import AboutSection from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import TimelineSection from "@/components/timeline-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
    </>
  );
}
