import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "lurunchik@gmail.com",
      href: "mailto:lurunchik@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "in/valeriia-baranova-bolotova-lurunchik",
      href: "https://www.linkedin.com/in/valeriia-baranova-bolotova-lurunchik/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Lurunchik",
      href: "https://github.com/Lurunchik",
    }
  ];

  return (
    <section id="contact" className="paper-section">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="academic-title text-3xl text-foreground mb-4">
            Contact
          </h2>
          <div className="paper-divider"></div>
        </div>

        <div className="space-y-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div key={index} className="flex items-center gap-4 pb-4 border-b border-border/30 last:border-b-0">
                <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-sm text-muted-foreground academic-emphasis block">
                    {method.label}
                  </span>
                  <a 
                    href={method.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/70 transition-colors"
                  >
                    {method.value}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-12">
          <p className="text-sm text-muted-foreground academic-emphasis">
            Always happy to discuss research, collaboration opportunities, or new ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;