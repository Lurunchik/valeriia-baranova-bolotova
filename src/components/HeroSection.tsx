import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const AnimatedName = () => {
  const name = "Valeriia Baranova";
  const [animateChars, setAnimateChars] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateChars(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
      {name.split('').map((char, index) => (
        <span
          key={index}
          className={`char-animate ${char === ' ' ? 'mr-4' : ''}`}
          style={{ 
            animationDelay: animateChars ? `${index * 0.05}s` : '999s'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-16">
          {/* Animated Name */}
          <div className="space-y-8">
            <AnimatedName />
            
            <div className="space-y-4 text-reveal" style={{ animationDelay: '1.5s' }}>
              <p className="font-serif text-xl text-muted-foreground">
                PhD in Information Retrieval
              </p>
              <p className="font-serif text-lg text-muted-foreground">
                Senior Applied Scientist at Oracle, Medical AI
              </p>
            </div>
          </div>

          {/* Elegant separator */}
          <div className="animate-refined-fade-up" style={{ animationDelay: '2s' }}>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto"></div>
          </div>

          {/* Bio section with refined typography */}
          <div className="max-w-4xl mx-auto space-y-8 animate-refined-fade-up" style={{ animationDelay: '2.5s' }}>            
            <div className="prose prose-lg max-w-none">
              <p className="font-serif text-xl leading-[1.8] text-foreground">
                Applied AI specialist with 13+ years of experience in IR/NLP, delivering high-impact fintech and agent systems across startups and Big Tech.
              </p>
              
              <p className="font-serif text-xl leading-[1.8] text-foreground mt-8">
                Led large teams (40+ people) and built AI systems from the ground up: research, modeling, deployment, and ongoing support. Hands-on with data pipelines, engineering, and modern deep learning, including training large language models.
              </p>
              
              <p className="font-serif text-xl leading-[1.8] text-foreground mt-8">
                Currently focused on Medical AI. PhD in Information Retrieval; Best Paper awards at top-tier conferences (CIKM, SIGIR).
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="animate-refined-fade-up" style={{ animationDelay: '3s' }}>
            <div className="flex justify-center items-center space-x-12 text-muted-foreground">
              <div className="text-center">
                <div className="font-serif text-3xl font-light mb-1">2×</div>
                <div className="font-sans text-sm uppercase tracking-wider">Best Paper Awards</div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="font-serif text-3xl font-light mb-1">13+</div>
                <div className="font-sans text-sm uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="w-px h-16 bg-border"></div>
              <div className="text-center">
                <div className="font-serif text-3xl font-light mb-1">40+</div>
                <div className="font-sans text-sm uppercase tracking-wider">Team Members Led</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-refined-fade-up" style={{ animationDelay: '3.5s' }}>
            <Button 
              variant="default" 
              size="lg"
              className="font-sans text-sm uppercase tracking-wider px-8 py-3 hover-lift"
              asChild
            >
              <a href="#dissertation" className="flex items-center gap-3">
                <Download className="w-4 h-4" />
                Download Dissertation
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="font-sans text-sm uppercase tracking-wider px-8 py-3 hover-lift"
              asChild
            >
              <a href="#contact" className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;