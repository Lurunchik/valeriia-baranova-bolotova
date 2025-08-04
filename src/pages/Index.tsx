import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import PublicationsSection from "@/components/PublicationsSection";
import DissertationSection from "@/components/DissertationSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <WorkExperienceSection />
        <PublicationsSection />
        <DissertationSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
