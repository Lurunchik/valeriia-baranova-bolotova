import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            A bit about my journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From curiosity-driven research to real-world impact at Oracle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Academic Excellence */}
          <Card className="p-6 hover:shadow-warm transition-all duration-300 animate-fade-up border-0 bg-primary-soft/30">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Academic Excellence</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                PhD in Information Retrieval with a focus on making complex AI systems 
                more interpretable and effective. My research bridges theory and practice.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Information Retrieval</Badge>
                <Badge variant="secondary">AI Research</Badge>
                <Badge variant="secondary">PhD</Badge>
              </div>
            </div>
          </Card>

          {/* Research Impact */}
          <Card className="p-6 hover:shadow-warm transition-all duration-300 animate-fade-up border-0 bg-accent-soft/30">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Research Impact</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                2 best paper awards recognize work that pushes boundaries while 
                remaining grounded in practical applications. Quality over quantity, always.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Best Paper 2023</Badge>
                <Badge variant="outline">Best Paper 2022</Badge>
              </div>
            </div>
          </Card>

          {/* Industry Application */}
          <Card className="p-6 hover:shadow-warm transition-all duration-300 animate-fade-up border-0 bg-secondary/30">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Industry Impact</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                As an Applied Scientist at Oracle, I translate research insights into 
                products that millions use daily. It's where curiosity meets impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Oracle</Badge>
                <Badge variant="secondary">Applied Science</Badge>
                <Badge variant="secondary">Product Impact</Badge>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center animate-fade-up">
          <p className="text-muted-foreground italic">
            "The best research happens when you're genuinely curious about making things better."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;