import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 animate-fade-up">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
              Valeriia Baranova
            </h1>
            <div className="space-y-2">
              <p className="font-sans text-base text-muted-foreground">
                PhD in Information Retrieval
              </p>
              <p className="font-sans text-base text-muted-foreground">
                Senior Applied Scientist at Oracle, Medical AI
              </p>
            </div>
          </div>

          {/* Brief description */}
          <div className="max-w-3xl mx-auto">
            <p className="font-serif text-lg leading-relaxed text-foreground">
              Applied AI specialist with 13+ years of experience in IR/NLP, delivering high-impact fintech and agent systems across startups and Big Tech. 
              Led large teams (40+ people) and built AI systems from the ground up: research, modeling, deployment, and ongoing support. 
              Hands-on with data pipelines, engineering, and modern deep learning, including training large language models. 
              Currently focused on Medical AI. 
              PhD in Information Retrieval; Best Paper awards at top-tier conferences (CIKM, SIGIR).
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="default" 
              size="lg"
              asChild
            >
              <a href="#dissertation" className="flex items-center gap-2 font-sans">
                <Download className="w-4 h-4" />
                Download Dissertation
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2 font-sans">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </Button>
          </div>

          {/* Awards */}
          <div className="pt-8 space-y-1">
            <p className="font-sans text-sm text-muted-foreground">
              2× Best Paper Award Winner
            </p>
            <p className="font-sans text-sm text-muted-foreground">
              Oracle Applied Scientist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;