import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download } from "lucide-react";

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
    <section id="publications" className="py-16 px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4 animate-fade-up">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Publications
          </h2>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <article 
              key={index} 
              className="animate-fade-up border-b border-border pb-6 last:border-b-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3">
                {/* Title and Award */}
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-foreground leading-tight">
                    {pub.title}
                  </h3>
                  
                  <div className="flex items-center gap-3">
                    <p className="font-sans text-sm text-muted-foreground italic">{pub.venue}</p>
                    {pub.award && (
                      <Badge variant="secondary" className="text-xs font-sans">
                        {pub.award}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {pub.description}
                </p>

                {/* Tags and Links */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="font-sans text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a 
                      href={pub.link} 
                      className="font-sans text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Paper
                    </a>
                    <a 
                      href="#" 
                      className="font-sans text-xs text-primary hover:underline flex items-center gap-1"
                    >
                      <Download className="w-3 h-3" />
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center animate-fade-up pt-4">
          <a 
            href="https://scholar.google.com" 
            className="font-sans text-sm text-primary hover:underline flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            Complete publication list on Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;