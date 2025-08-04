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
    <section id="education" className="paper-section">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="academic-title text-3xl text-foreground mb-4">
            Education
          </h2>
          <div className="paper-divider"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <article key={index} className="border-b border-border/30 pb-6 last:border-b-0">
              <div className="space-y-2">
                <h3 className="academic-title text-lg text-foreground">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-medium">{edu.university}</span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground academic-emphasis">{edu.period}</span>
                  {edu.grade && (
                    <>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{edu.grade}</span>
                    </>
                  )}
                </div>
                {edu.thesis && (
                  <p className="text-sm text-muted-foreground pt-1">
                    <span className="academic-emphasis">Thesis:</span> {edu.thesis}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;