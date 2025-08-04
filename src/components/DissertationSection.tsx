import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DissertationSection = () => {
  return (
    <section id="dissertation" className="paper-section">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="academic-title text-3xl text-foreground mb-4">
            Dissertation
          </h2>
          <div className="paper-divider"></div>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="academic-title text-xl text-foreground text-center">
              Advancing Information Retrieval through Contextual AI
            </h3>
            
            <div className="space-y-6">
              <div className="academic-body text-muted-foreground">
                <p className="mb-4">
                  <span className="font-medium">Abstract:</span> This dissertation presents novel approaches to context-aware information retrieval, 
                  introducing frameworks that significantly improve search relevance through advanced 
                  user intent modeling and interpretable AI systems. The work contributes three main innovations: 
                  (1) context-aware ranking algorithms that adapt to user behavior patterns, 
                  (2) interpretability frameworks for neural information retrieval systems, and 
                  (3) production-ready implementations validated through large-scale deployment.
                </p>
                
                <p>
                  The research demonstrates measurable improvements in search relevance across multiple domains 
                  while maintaining computational efficiency suitable for real-time applications. 
                  Key findings include a 23% improvement in user satisfaction metrics and successful 
                  deployment at Oracle serving millions of daily queries.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 w-4 h-4" />
              Download Full Dissertation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DissertationSection;