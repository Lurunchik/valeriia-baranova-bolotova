import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Users, Target } from "lucide-react";

const DissertationSection = () => {
  return (
    <section id="dissertation" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            My PhD Dissertation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four years of research condensed into actionable insights
          </p>
        </div>

        <Card className="p-8 bg-gradient-soft border-0 shadow-warm animate-fade-up">
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h3 className="text-2xl font-bold text-foreground">
                "Advancing Information Retrieval through Contextual AI"
              </h3>
              <p className="text-muted-foreground">
                A comprehensive exploration of context-aware search systems
              </p>
              <div className="flex justify-center">
                <Button variant="warm" size="xl" className="animate-glow">
                  <Download className="mr-2" />
                  Download Full Dissertation
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">150+ Pages</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive research spanning multiple domains and methodologies
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">Real-World Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Tested with actual users and deployed in production systems
                </p>
              </div>

              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">Practical Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Not just theory—frameworks you can actually implement
                </p>
              </div>
            </div>

            <div className="bg-card/50 rounded-lg p-6 space-y-4">
              <h4 className="font-semibold text-foreground">What you'll find inside:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Novel context-aware ranking algorithms
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  User intent modeling frameworks
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Interpretability in neural IR
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Production deployment case studies
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground italic">
                "This research has been cited 200+ times and directly influenced industry practices at Oracle and beyond."
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DissertationSection;