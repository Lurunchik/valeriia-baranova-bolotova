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
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Valeriia Baranova
          </button>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('publications')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Publications
            </button>
            <button
              onClick={() => scrollToSection('dissertation')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Dissertation
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('dissertation')}
              className="hidden sm:flex"
            >
              <Download className="w-4 h-4 mr-2" />
              Dissertation
            </Button>
            <Button 
              variant="warm" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Say Hi
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;