import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-serif text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            Valeriia Baranova
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('publications')}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Publications
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              Education
            </button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('dissertation')}
              className="font-sans"
            >
              <Download className="w-4 h-4 mr-2" />
              Dissertation
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="font-sans"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;