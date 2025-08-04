import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "valeriia.baranova@oracle.com",
      href: "mailto:valeriia.baranova@oracle.com",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Valeriia Baranova",
      href: "https://www.linkedin.com/in/valeriia-baranova-bolotova-lurunchik/",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@ValeriiAI",
      href: "https://twitter.com/valeriai",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/valeriiab",
      href: "https://github.com/valeriiab",
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-soft">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Let's connect
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card 
                key={index}
                className="p-4 hover:shadow-warm transition-all duration-300 animate-fade-up border-0 bg-card/80 backdrop-blur-sm text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Button 
                  variant={method.primary ? "warm" : "soft"} 
                  size="sm" 
                  className="w-full"
                  asChild
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs">{method.label}</span>
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-up">
          <p className="text-sm text-muted-foreground italic">
            Thanks for exploring my work! 💫
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;