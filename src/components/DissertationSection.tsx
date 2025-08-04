import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DissertationSection = () => {
  return (
    <section id="dissertation" className="py-16 px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 animate-fade-up">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Dissertation
          </h2>
        </div>

        <div className="space-y-6 animate-fade-up">
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-foreground">
              Advancing Information Retrieval through Contextual AI
            </h3>
            
            <div className="space-y-4">
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                <strong>Abstract:</strong> This dissertation presents novel approaches to context-aware information retrieval, 
                introducing frameworks that significantly improve search relevance through advanced 
                user intent modeling and interpretable AI systems. The work contributes three main innovations: 
                (1) context-aware ranking algorithms that adapt to user behavior patterns, 
                (2) interpretability frameworks for neural information retrieval systems, and 
                (3) production-ready implementations validated through large-scale deployment.
              </p>
              
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                The research demonstrates measurable improvements in search relevance across multiple domains 
                while maintaining computational efficiency suitable for real-time applications. 
                Key findings include a 23% improvement in user satisfaction metrics and successful 
                deployment at Oracle serving millions of daily queries.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Button variant="default" size="lg" className="font-sans">
              <Download className="mr-2 w-4 h-4" />
              Download Full Dissertation (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DissertationSection;