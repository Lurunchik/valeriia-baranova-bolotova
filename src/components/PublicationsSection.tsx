import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PublicationsSection = () => {
  const publications = [
    {
      title: "WikiHowQA: A Comprehensive Benchmark for Multi-Document Non-Factoid Question Answering",
      venue: "Association for Computational Linguistics, ACL 2023",
      award: "Outstanding-video award",
      description: "Answering non-factoid questions (NFQA) is a challenging task, requiring passage-level answers that are difficult to construct and evaluate. We present WIKIHOWQA, a new multi-document NFQA benchmark built on WikiHow. The benchmark includes 11,746 human-written answers along with 74,527 supporting documents. We describe the unique challenges of the resource, provide strong baselines, and propose a novel human evaluation framework.",
      tags: ["Non-Factoid QA", "Multi-Document", "Benchmark", "Evaluation"],
      link: "#",
      type: "conference"
    },
    {
      title: "A Non-Factoid Question-Answering Taxonomy",
      venue: "SIGIR '22: Proceedings of the 45th International ACM SIGIR Conference",
      award: "Best-paper award",
      description: "Non-factoid question answering (NFQA) is a challenging and under-researched task that requires constructing long-form answers. This work presents the first comprehensive taxonomy of NFQ categories and the expected structure of answers. The taxonomy was constructed with a transparent methodology and extensively evaluated via crowdsourcing.",
      tags: ["Non-Factoid QA", "Taxonomy", "Classification", "Evaluation"],
      link: "#",
      type: "conference"
    },
    {
      title: "Quantifying Human-Perceived Answer Utility in Non-factoid Question Answering",
      venue: "Proceedings of the 2021 Conference on Human Information Interaction and Retrieval",
      description: "Taking a user-centric approach, we study the features that render an answer to a non-factoid question useful in the eyes of the person who asked that question. An editorial study indicates considerable correlation between certain aspects such as relevance, correctness, and completeness with the user-perceived usefulness of answers.",
      tags: ["Human Evaluation", "Answer Quality", "User Studies", "NFQA"],
      link: "#",
      type: "conference"
    },
    {
      title: "Do People and Neural Nets Pay Attention to the Same Words: Studying Eye-Tracking Data for Non-Factoid QA Evaluation",
      venue: "Proceedings of the 29th ACM International Conference on Information & Knowledge Management",
      award: "Best-paper award",
      description: "We investigated how users evaluate passage-length answers for non-factoid questions. We conduct a study where answers were presented to users, sometimes shown with automatic word highlighting. Our results show that the correctness of an answer strongly depends on its completeness. We fine-tuned a BERT model to examine if the model attends to words similar to those annotated by humans.",
      tags: ["Eye-tracking", "BERT", "Attention", "Human Evaluation"],
      link: "#",
      type: "conference"
    },
    {
      title: "Large Dataset and Language Model Fun-tuning for Humor Recognition",
      venue: "Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics",
      description: "The task of humor recognition has attracted a lot of attention recently due to the urge to process large amounts of user-generated texts and rise of conversational agents. We collected a dataset of jokes and funny dialogues in Russian from various online resources. The dataset comprises of more than 300,000 short texts, which is significantly larger than any previous humor-related corpus.",
      tags: ["Humor Recognition", "Language Models", "Russian", "Dataset"],
      link: "#",
      type: "conference"
    },
    {
      title: "How to evaluate humorous response generation, seriously?",
      venue: "Proceedings of the 2018 Conference on Human Information Interaction&Retrieval",
      description: "Nowadays natural language user interfaces, such as chatbots and conversational agents, are very common. A desirable trait of such applications is a sense of humor. To address this problem, we conducted an online evaluation of 30 dialog jokes from different sources by almost 300 participants. Results show that demographics and joke topics can partly explain variation in humor judgments.",
      tags: ["Humor Evaluation", "Conversational Systems", "Human Annotation"],
      link: "#",
      type: "conference"
    },
    {
      title: "A Pinch of Humor for Short-Text Conversation: an Information Retrieval Approach",
      venue: "Lecture Notes in Computer Science. –Springer, 2017",
      description: "The paper describes a work in progress on humorous response generation for short-text conversation using information retrieval approach. We gathered a large collection of funny tweets and implemented three baseline retrieval models: BM25, the query term reweighting model based on syntactic parsing and named entity recognition, and the doc2vec similarity model.",
      tags: ["Humor Generation", "Information Retrieval", "Conversational AI"],
      link: "#",
      type: "conference"
    },
    {
      title: "Which IR Model has a Better Sense of Humor? Search over a Large Collection of Jokes",
      venue: "Computational Linguistics and Intellectual Technologies",
      description: "This paper describes experiments on humorous response generation for short text conversations. We compiled a collection of 63,000 jokes from online social networks (VK and Twitter) and implemented several context-aware joke retrieval models including BM25, query term reweighting, word2vec-based model, and learning-to-rank approach with multiple features.",
      tags: ["Information Retrieval", "Humor", "Social Networks", "Learning-to-Rank"],
      link: "#",
      type: "conference"
    },
    {
      title: "Information Retrieval Approach to Humorous Response Generation in Dialog Systems: a Baseline",
      venue: "Dialogue International Conference on Computational Linguistics and Intellectual Technologies",
      description: "In this paper, we present a baseline IR-based solution to humorous response generation in dialog systems. We describe 1) a corpus consisting of about 48,000 jokes gathered from the VK social network, 2) about 80 test stimuli, 3) BM25 and popularity-based baseline systems, 4) evaluation protocol and results.",
      tags: ["Dialog Systems", "Humor Generation", "Information Retrieval", "Baseline"],
      link: "#",
      type: "conference"
    }
  ];

  const sectionRef = useScrollAnimation();

  return (
    <section 
      ref={sectionRef}
      id="publications" 
      className="paper-section section-entrance"
    >
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="academic-title text-3xl text-foreground mb-4">
            Publications
          </h2>
          <div className="paper-divider"></div>
        </div>

        <div className="space-y-8">
          {publications.map((pub, index) => (
            <article 
              key={index} 
              className="border-b border-border/30 pb-6 last:border-b-0"
            >
              <div className="space-y-3">
                <div className="space-y-2">
                  <h3 className="academic-title text-lg text-foreground leading-tight">
                    {pub.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground academic-emphasis">{pub.venue}</span>
                    {pub.award && (
                      <>
                        <span className="text-muted-foreground">·</span>
                        <span className="text-primary font-medium">{pub.award}</span>
                      </>
                    )}
                  </div>
                </div>

                <p className="academic-body text-muted-foreground text-sm">
                  {pub.description}
                </p>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex flex-wrap gap-2">
                    {pub.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs text-muted-foreground/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 text-xs">
                    <a 
                      href={pub.link} 
                      className="text-primary hover:text-primary/70 transition-colors"
                    >
                      View Paper
                    </a>
                    <a 
                      href="#" 
                      className="text-primary hover:text-primary/70 transition-colors"
                    >
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center pt-12">
          <a 
            href="https://scholar.google.com/citations?user=hcVowx4AAAAJ" 
            className="text-sm text-primary hover:text-primary/70 transition-colors"
          >
            Complete publication list on Google Scholar →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;