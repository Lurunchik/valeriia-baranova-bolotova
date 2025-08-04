import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WorkExperienceSection = () => {
  const experiences = [
    {
      title: "Applied Scientist",
      company: "Oracle",
      period: "Nov 2023 - Present · 1 yr 10 mos",
      location: "Melbourne, Victoria, Australia · On-site",
      type: "Full-time",
      description: ""
    },
    {
      title: "Head of NLP Department, Tinkoff Center AI Technologies",
      company: "Tinkoff",
      period: "Sep 2019 - Jan 2022 · 2 yrs 5 mos",
      location: "Melbourne, Victoria, Australia · Remote",
      type: "Part-time",
      description: "• Established and led the NLP department: Managed four teams and over 40 employees, fostering a culture of innovation with a focus on the latest research papers. Personally involved in coding and model training, utilizing advanced deep learning architectures.\n\n• Developed and launched Oleg: A voice assistant serving Tinkoff's 17M+ users, utilizing advanced deep learning architectures (DSSM, ELMo, Bert, etc) for diverse tasks such as conversation and lifestyle bookings.\n\n• Transformed the bank support ML team: Boosted accuracy by 36%. The chatbot became the primary support channel for 65% of Tinkoff customers and was recognized as the number one chatbot in 2021. This product is the main profit generator in the AI center, saving millions monthly.\n\n• Initiated and co-led a data analytics team: Implemented automated systems for dataset validation and auto-training of robust baselines. This led to more reliable and efficient model training, improved task performance, and reduced workload for ML engineers.\n\n• Established a dedicated NLP team for external stakeholders: Handled all consolidated NLP tasks and eliminated the need for temporary ML engineers or outsourcing.",
      skills: ["Large Language Models (LLM)", "Communication", "Deep Learning", "NLP"]
    },
    {
      title: "Chatbot NLP TeamLead",
      company: "Tinkoff",
      period: "Dec 2018 - Sep 2019 · 10 mos",
      location: "Russian Federation",
      type: "Full-time",
      description: "Leading team of the voice assistant Oleg.\n\n• Developing chit-chat component of tinkoff chatbot: research and implementation of various DL architectures DSSM, ULMFit (RNN), ELMo, Bert.\n• Developing Intent classification and slot filling component for chatbot: Deep Learning (DSSM, CNN) + Machine Learning (KNN, Conditional Random fields, SVM, and so on).\n• Developing dialogue management platform.\n• Giving lectures \"Applications of deep learning in dialogue systems\" for students (1 term)",
      skills: ["Large Language Models (LLM)", "Communication", "Deep Learning", "Machine Learning"]
    },
    {
      title: "Head Of Software Development",
      company: "PressIndex (news and social media monitoring)",
      period: "Dec 2013 - Oct 2018 · 4 yrs 11 mos",
      location: "Russian Federation",
      type: "Full-time",
      description: "• Named entities recognition, sentiment analysis: object-oriented; and client-specific.\n• Creation of Machine Learning models for scrapping web-sites and extracting news from them. Clustering of news events, text classification, duplicate matching.\n• Developing high-availability and performance services for loading data (>55k websites, >500k news daily, delay < 25min) and various API loaders (FB, VK, twitter, avito, etc.)\n• Building, deploying and configuration services and applications on server clusters; implementing Service-Oriented and fault-tolerant architecture. Writing automated tests for the system including performance and functional tests for whole microservices infrastructure; and end-to-end, integration and unit-test cases for all services.\n• Providing team leadership and coaching for 8 programmers, performing peer code-reviews, practising Agile for team management automated by writing specific task workflows.",
      skills: ["Communication", "Agile Methodologies", "Software Architecture", "Team Leadership"]
    },
    {
      title: "Software Development Engineer",
      company: "SiteSoft (IT solutions for government organizations)",
      period: "Feb 2013 - Dec 2013 · 11 mos",
      location: "Yekaterinburg",
      type: "Full-time",
      description: "•Development and maintenance of government web-portals. Transferring data from MySQL to PostgreSQL, optimization of performance of SQL queries.",
      skills: ["Software Testing", "Test Automation", "Database Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-foreground">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-border">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-medium text-primary mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {exp.period}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {exp.location}
                    </p>
                  </div>
                  <Badge variant="outline" className="shrink-0">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              {exp.description && (
                <CardContent className="pt-0">
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    {exp.description.split('\n').map((paragraph, pIndex) => (
                      paragraph.trim() && (
                        <p key={pIndex} className="mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      )
                    ))}
                  </div>
                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;