import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-12 animate-fade-up">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
              Valeriia Baranova
            </h1>
            <div className="space-y-3">
              <p className="font-serif text-xl text-muted-foreground">
                PhD in Information Retrieval
              </p>
              <p className="font-serif text-lg text-muted-foreground">
                Senior Applied Scientist at Oracle, Medical AI
              </p>
            </div>
          </div>

          {/* Brief description with better typography */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="w-16 h-px bg-border mx-auto"></div>
            
            <div className="prose prose-lg prose-serif max-w-none">
              <p className="font-serif text-xl leading-[1.8] text-foreground text-justify indent-8">
                Applied AI specialist with 13+ years of experience in IR/NLP, delivering high-impact fintech and agent systems across startups and Big Tech.
              </p>
              
              <p className="font-serif text-xl leading-[1.8] text-foreground text-justify indent-8 mt-6">
                Led large teams (40+ people) and built AI systems from the ground up: research, modeling, deployment, and ongoing support. Hands-on with data pipelines, engineering, and modern deep learning, including training large language models.
              </p>
              
              <p className="font-serif text-xl leading-[1.8] text-foreground text-justify indent-8 mt-6">
                Currently focused on Medical AI. PhD in Information Retrieval; Best Paper awards at top-tier conferences (CIKM, SIGIR).
              </p>
            </div>
            
            <div className="w-16 h-px bg-border mx-auto"></div>
          </div>

          {/* Awards in academic style */}
          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-8 text-muted-foreground">
              <div className="text-center">
                <div className="font-serif text-2xl font-light">2×</div>
                <div className="font-sans text-sm uppercase tracking-wider">Best Paper Awards</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="font-serif text-2xl font-light">13+</div>
                <div className="font-sans text-sm uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="font-serif text-2xl font-light">40+</div>
                <div className="font-sans text-sm uppercase tracking-wider">Team Members Led</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="default" 
              size="lg"
              className="font-sans text-sm uppercase tracking-wider px-8 py-3"
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
              className="font-sans text-sm uppercase tracking-wider px-8 py-3"
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