import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const DissertationSection = () => {
  return (
    <section id="dissertation" className="paper-section">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="academic-title text-3xl text-foreground mb-4">
            Dissertation
          </h2>
          <div className="paper-divider"></div>
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="academic-title text-xl text-foreground text-center">
              Multi-Document Non-Factoid Question Answering
            </h3>
            
            <div className="space-y-6">
              <div className="academic-body text-muted-foreground">
                <p className="mb-4">
                  <span className="font-medium">Abstract:</span> This thesis focuses on multi-document answer generation for non-factoid questions
                  (NFQs), a challenging task of generating answers to open-ended questions that can only
                  be answered by summarizing information from multiple supporting documents. We first
                  conducted an eye-tracking study on the user evaluation of passage-length answers to NFQs
                  and found that the overall answer quality depends on several aspects. To better understand
                  what makes an answer useful, we identified 12 aspects of answer quality and evaluated the
                  limitations of commonly used NFQA evaluation measures.
                </p>
                
                <p className="mb-4">
                  To enhance understanding of the categories of NFQs that people tend to ask, what form
                  of answers they expect to see in return, and what the key research challenges of each category
                  are, we developed the first comprehensive NFQA taxonomy constructed with a transparent
                  methodology and extensively evaluated via crowdsourcing. Our analysis of major NFQA
                  datasets shows that the most challenging NFQ categories are underrepresented.
                </p>
                
                <p className="mb-4">
                  To address this, we introduce WikiHowQA, a new multi-document NFQA benchmark
                  built on WikiHow, a website dedicated to answering "how-to" questions. We provide
                  strong baselines and propose a novel human evaluation framework that utilizes highlighted
                  relevant supporting passages to mitigate issues such as assessor unfamiliarity with the
                  question topic.
                </p>
                
                <p>
                  We aim for this research to serve as the basis for redefining user interactions with search
                  engines, ultimately creating the answer retrieval systems users have long desired.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 w-4 h-4" />
              Download Full Dissertation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DissertationSection;