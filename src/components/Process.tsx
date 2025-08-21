import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Objective Evaluation",
      description: "We will answer your fundamental questions about direct ownership offshoring and provide an objective recommendation on whether it is a good fit for you."
    },
    {
      number: "02", 
      title: "Tailored Strategy",
      description: "Working together with you, we will create a tailored offshoring strategy that addresses your specific concerns, challenges, and goals to ensure success."
    },
    {
      number: "03",
      title: "Ongoing Assistance", 
      description: "We are committed to providing ongoing advice and support to help you maximize the potential of your direct ownership team."
    },
    {
      number: "04",
      title: "Expert Execution",
      description: "We will spearhead the execution on all fronts, and as experts in the field, adhere to best practices to ensure you have a strong foundation in your chosen destination."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            How We'll Set You Up for Success
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            As your trusted strategic partner to help you establish and maximize the potential of your offshore team,
            we recognize the importance of supporting you at every step to ensure the desired outcomes are achieved.
            Our proven four-step approach provides the guidance and assistance you need to succeed with direct ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;