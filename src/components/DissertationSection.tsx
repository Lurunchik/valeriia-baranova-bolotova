import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DissertationSection = () => {
  return (
    <section id="dissertation" className="py-16 px-4 bg-background">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            PhD Dissertation
          </h2>
        </div>

        <Card className="p-8 bg-gradient-soft border-0 shadow-warm animate-fade-up">
          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">
                "Advancing Information Retrieval through Contextual AI"
              </h3>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This dissertation presents novel approaches to context-aware information retrieval, 
                  introducing frameworks that significantly improve search relevance through advanced 
                  user intent modeling and interpretable AI systems.
                </p>
                
                <p className="text-sm text-muted-foreground">
                  Key contributions include context-aware ranking algorithms, interpretability 
                  frameworks for neural IR, and production-ready implementations deployed at scale.
                </p>
              </div>
            </div>

            <Button variant="warm" size="xl" className="animate-glow">
              <Download className="mr-2" />
              Download Full Dissertation
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DissertationSection;