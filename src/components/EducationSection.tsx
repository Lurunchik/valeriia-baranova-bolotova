import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Doctor of Philosophy - PhD, Computer Science",
      university: "RMIT University",
      period: "Sep 2019 - Oct 2024",
      grade: "",
      thesis: ""
    },
    {
      degree: "Master's degree, Computer and Information Sciences, General",
      university: "Ural Federal University",
      period: "2017 - 2019",
      grade: "GPA: 4.9",
      thesis: "Applications of machine learning for humour modelling."
    },
    {
      degree: "Bachelor's degree, Mathematics and Computer Science",
      university: "Ural Federal University",
      period: "2009 - 2013",
      grade: "GPA 4.59",
      thesis: "Performing sentiment-analysis task using Machine Learning techniques."
    }
  ];

  return (
    <section id="education" className="py-12 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-serif font-bold text-center text-foreground">
            Education
          </h2>
        </div>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <Card key={index} className="border border-border bg-background">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-base font-medium text-primary mb-1">
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
                </div>
                {edu.thesis && (
                  <div className="mt-3">
                    <span className="text-sm font-medium text-foreground">Thesis: </span>
                    <span className="text-sm text-muted-foreground">{edu.thesis}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;