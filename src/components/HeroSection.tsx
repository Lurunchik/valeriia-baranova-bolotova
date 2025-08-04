import { Button } from "@/components/ui/button";
import { Download, Mail, ExternalLink } from "lucide-react";
import heroImage from "@/assets/valeriia-headshot.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-soft px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-warm opacity-[0.02] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Image Column */}
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-warm animate-fade-up">
              <img 
                src={heroImage} 
                alt="Valeriia Baranova - AI Research Scientist"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-4 left-4 w-80 h-80 bg-gradient-warm rounded-3xl opacity-30"></div>
          </div>
        </div>

        {/* Content Column */}
        <div className="order-1 lg:order-2 text-center lg:text-left animate-slide-in">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-warm bg-clip-text text-transparent">
                  Valeriia
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                PhD in Information Retrieval • Applied Scientist at Oracle
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                I'm passionate about making AI research both accessible and impactful. 
                With 2 best paper awards and a fresh perspective on information retrieval, 
                I bridge the gap between cutting-edge research and real-world applications.
              </p>
              
              <p className="text-muted-foreground italic">
                Thanks for stopping by—I'm excited to share my journey with you! ✨
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                variant="warm" 
                size="xl"
                className="group"
                asChild
              >
                <a href="#dissertation" className="flex items-center gap-2">
                  <Download className="group-hover:animate-bounce" />
                  Download Dissertation
                </a>
              </Button>
              
              <Button 
                variant="contact" 
                size="xl"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Mail />
                  Say Hi!
                </a>
              </Button>
            </div>

            <div className="pt-6 space-y-2">
              <p className="text-sm text-muted-foreground">
                🏆 2 Best Paper Awards
              </p>
              <p className="text-sm text-muted-foreground">
                🔬 Applied Scientist at Oracle
              </p>
              <p className="text-sm text-muted-foreground">
                📚 PhD in Information Retrieval
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;