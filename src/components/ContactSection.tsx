import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "valeriia.baranova@oracle.com",
      href: "mailto:valeriia.baranova@oracle.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/valeriia-baranova-bolotova-lurunchik",
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
    <section id="contact" className="py-16 px-6 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 animate-fade-up">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="space-y-1">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                  <span className="font-sans text-sm text-muted-foreground">
                    {method.label}:
                  </span>
                </div>
                <a 
                  href={method.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-primary hover:underline block pl-6"
                >
                  {method.value}
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-8 animate-fade-up">
          <p className="font-sans text-xs text-muted-foreground">
            Always happy to discuss research, collaboration opportunities, or new ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;