import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github, Coffee } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "valeriia.baranova@oracle.com",
      href: "mailto:valeriia.baranova@oracle.com",
      description: "Best for professional inquiries",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/valeriiab",
      href: "https://linkedin.com/in/valeriiab",
      description: "Let's connect professionally"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@ValeriiAI",
      href: "https://twitter.com/valeriai",
      description: "AI thoughts and research updates"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/valeriiab",
      href: "https://github.com/valeriiab",
      description: "Research code and projects"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Let's connect!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you want to chat about research, collaboration, or just say hi—I'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={index}
                className={`p-6 hover:shadow-warm transition-all duration-300 animate-fade-up border-0 bg-card/80 backdrop-blur-sm ${
                  method.primary ? 'ring-2 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${method.primary ? 'bg-primary/10' : 'bg-muted'}`}>
                      <Icon className={`w-5 h-5 ${method.primary ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <h3 className="font-semibold text-foreground">{method.label}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-muted-foreground font-mono text-sm">
                      {method.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {method.description}
                    </p>
                  </div>

                  <Button 
                    variant={method.primary ? "warm" : "soft"} 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-4 h-4 mr-2" />
                      {method.primary ? 'Send Email' : `Visit ${method.label}`}
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-accent-soft/30 border-0 text-center animate-fade-up">
          <div className="space-y-4">
            <div className="flex justify-center">
              <Coffee className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Coffee Chat?
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              I love meeting fellow researchers, curious minds, and anyone passionate about AI. 
              If you're in the Bay Area or up for a virtual coffee, let's chat!
            </p>
            <Button variant="accent" size="lg" asChild>
              <a href="mailto:valeriia.baranova@oracle.com?subject=Coffee Chat!" className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Schedule a Chat
              </a>
            </Button>
          </div>
        </Card>

        <div className="text-center animate-fade-up">
          <p className="text-sm text-muted-foreground italic">
            Thank you for taking the time to explore my work. Your curiosity means the world! 💫
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;