import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Doctor of Philosophy - PhD, Computer Science",
      university: "RMIT University",
      period: "Sep 2019 - Oct 2024",
      grade: "",
      thesis: "",
      activities: "",
      skills: ["Research Skills", "SQL", "Artificial Intelligence (AI)", "Language Modeling", "Data Analysis", "Skill Development", "Generative AI", "Large Language Models (LLM)", "Deep Learning"]
    },
    {
      degree: "Master's degree, Computer and Information Sciences, General",
      university: "Ural Federal University",
      period: "2017 - 2019",
      grade: "GPA: 4.9",
      thesis: "Applications of machine learning for humour modelling.",
      activities: "",
      skills: ["Research Skills", "SQL", "Artificial Intelligence (AI)", "Data Analysis", "Skill Development", "Deep Learning"]
    },
    {
      degree: "Bachelor's degree, Mathematics and Computer Science",
      university: "Ural Federal University",
      period: "2009 - 2013",
      grade: "GPA 4.59",
      thesis: "Performing sentiment-analysis task using Machine Learning techniques.",
      activities: "Robotics Seminar: Eurobot 2011 as a competitor of an international round; Trade-union leader of the department (2012-2013).",
      skills: ["Robotics"]
    }
  ];

  return (
    <section id="education" className="py-16 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-serif font-bold text-center text-foreground">
            Education
          </h2>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border border-border">
              <CardHeader className="pb-4">
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {edu.degree}
                  </CardTitle>
                  <p className="text-lg font-medium text-primary">
                    {edu.university}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    {edu.grade && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <span className="font-medium">{edu.grade}</span>
                      </>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {edu.thesis && (
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Thesis:</h4>
                      <p className="text-muted-foreground">{edu.thesis}</p>
                    </div>
                  )}
                  {edu.activities && (
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Activities and societies:</h4>
                      <p className="text-muted-foreground">{edu.activities}</p>
                    </div>
                  )}
                  {edu.skills && edu.skills.length > 0 && (
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;