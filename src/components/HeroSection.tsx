import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import TextEncrypt from "@/components/animations/TextEncrypt";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Name */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-foreground tracking-tight leading-tight animate-refined-fade-up">
          <TextEncrypt>Valeriia Baranova</TextEncrypt>
        </h1>

        {/* Subtitle */}
        <div className="space-y-3 animate-refined-fade-up" style={{
        animationDelay: '0.2s'
      }}>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground">
            <TextEncrypt>Valeriia Baranova (ex Bolotova)</TextEncrypt>
          </p>
          <p className="font-serif text-lg text-muted-foreground">
            Specialist in IR/NLP & Medical AI
          </p>
        </div>

        {/* Company */}
        <div className="space-y-2">
          <p className="font-serif text-lg text-foreground font-medium">
            Oracle Medical AI
          </p>
          <p className="font-serif text-base text-muted-foreground">
            Senior Applied Scientist
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg text-foreground">Contact</h3>
          <div className="space-y-2 text-muted-foreground">
            <p className="font-sans text-sm">Inquiries: lurunchik@gmail.com</p>
            <p className="font-sans text-sm">
              LinkedIn: <a href="https://www.linkedin.com/in/valeriia-baranova-bolotova-lurunchik" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">/in/valeriia-baranova-bolotova-lurunchik</a>
            </p>
            
          </div>
        </div>

        {/* Awards & Achievements */}
        <div className="space-y-6">
          <h3 className="font-serif text-lg text-foreground">Awards & Recognition</h3>
          <div className="space-y-3 text-muted-foreground text-left max-w-2xl mx-auto">
            <p className="font-serif text-sm">Best Paper Award at SIGIR (2022)</p>
            <p className="font-serif text-sm">Best Paper Award at CIKM (2020)</p>
            <p className="font-serif text-sm">Outstanding Video Award at ACL (2023)</p>
            <p className="font-serif text-sm">PhD in Information Retrieval - RMIT (2024)</p>
            <p className="font-serif text-sm">13+ Years in AI/ML Industry (2011-present)</p>
            
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg text-foreground">Bio</h3>
          <div className="max-w-3xl mx-auto">
            <p className="font-serif text-base text-muted-foreground leading-relaxed text-left">
              Valeriia Baranova is an Applied AI specialist with 13+ years of experience in Information Retrieval and Natural Language Processing. 
              She has delivered high-impact fintech and AI agent systems across startups and Big Tech companies. At Oracle, she focuses on Medical AI applications, 
              developing cutting-edge solutions for healthcare technology. Valeriia has led large teams of 40+ people and built AI systems from research to deployment. 
              She holds a PhD in Information Retrieval from RMIT University and has received Best Paper Awards at top-tier conferences including SIGIR and CIKM.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button variant="default" size="lg" className="font-sans text-sm px-6 py-3" asChild>
            <a href="#dissertation" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Dissertation
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="font-sans text-sm px-6 py-3" asChild>
            <a href="#contact" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;