import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import PublicationsSection from "@/components/PublicationsSection";
import EducationSection from "@/components/EducationSection";
import DissertationSection from "@/components/DissertationSection";
import ContactSection from "@/components/ContactSection";
import CursorFollower from "@/components/animations/CursorFollower";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CursorFollower />
      <Navigation />
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        <WorkExperienceSection />
        <PublicationsSection />
        <EducationSection />
        <DissertationSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
