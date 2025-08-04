import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Trophy } from "lucide-react";

const PublicationsSection = () => {
  const publications = [
    {
      title: "Enhancing Information Retrieval through Contextual Understanding",
      venue: "ACM SIGIR 2023",
      award: "Best Paper Award",
      description: "A novel approach to improving search relevance by incorporating contextual signals and user intent modeling.",
      tags: ["Information Retrieval", "Machine Learning", "NLP"],
      link: "#",
      type: "conference"
    },
    {
      title: "Interpretable AI for Search: Making Black Boxes Transparent",
      venue: "ICML 2022",
      award: "Best Paper Award",
      description: "Framework for understanding and explaining AI-driven search decisions to improve trust and debugging.",
      tags: ["Explainable AI", "Search", "Interpretability"],
      link: "#",
      type: "conference"
    },
    {
      title: "User Intent Classification in Multi-Domain Search",
      venue: "WSDM 2023",
      description: "Cross-domain intent understanding that adapts to diverse user needs and search contexts.",
      tags: ["Intent Classification", "Multi-Domain", "Search"],
      link: "#",
      type: "conference"
    },
    {
      title: "Neural Information Retrieval: A Comprehensive Survey",
      venue: "Information Processing & Management 2023",
      description: "Comprehensive review of neural approaches in information retrieval, highlighting key trends and future directions.",
      tags: ["Survey", "Neural IR", "Deep Learning"],
      link: "#",
      type: "journal"
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Publications & Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bridging the gap between theoretical advances and practical impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-warm transition-all duration-300 animate-fade-up border-0 bg-card/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-foreground leading-tight">
                      {pub.title}
                    </h3>
                    {pub.award && (
                      <div className="flex items-center gap-1 text-accent">
                        <Trophy className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-primary">{pub.venue}</p>
                    {pub.award && (
                      <Badge variant="outline" className="text-xs border-accent text-accent">
                        {pub.award}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {pub.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <Button variant="soft" size="sm" asChild>
                    <a href={pub.link} className="flex items-center gap-2">
                      <ExternalLink className="w-3 h-3" />
                      Read Paper
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="#" className="flex items-center gap-2">
                      <Download className="w-3 h-3" />
                      PDF
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-up">
          <p className="text-muted-foreground mb-4">
            Want to dive deeper into my research?
          </p>
          <Button variant="accent" size="lg" asChild>
            <a href="https://scholar.google.com" className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Google Scholar Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;