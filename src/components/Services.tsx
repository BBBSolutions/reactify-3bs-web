import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Office Setup and Legal Compliance",
      description: "We take care of everything from finding office space to navigating the complexities of Indian legal requirements. Our team ensures that your satellite office is compliant with local labor laws, tax regulations, and more.",
      color: "bg-primary"
    },
    {
      title: "Recruitment and Talent Acquisition", 
      description: "India boasts a vast talent pool of IT professionals, accountants, engineers, and more. We help you find the best employees tailored to your company's needs.",
      color: "bg-secondary"
    },
    {
      title: "Cost Efficiency Consulting",
      description: "We provide insights into cost-effective solutions, enabling you to cut expenses on labor, infrastructure, and operational costs while maximizing efficiency.",
      color: "bg-primary"
    },
    {
      title: "Infrastructure and IT Setup",
      description: "From establishing high-speed internet connections to securing state-of-the-art IT infrastructure, we ensure your office is fully operational and technologically advanced.",
      color: "bg-secondary"
    },
    {
      title: "Ongoing HR and Management Support",
      description: "Our team remains on hand to help with ongoing HR needs, from payroll to employee retention and training.",
      color: "bg-primary"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            Drive Growth with Strategic Global Expansion
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            Leverage India's skilled workforce, cost-effective solutions, and time zone advantages 
            to enhance your company's operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className={`${service.color} text-white rounded-t-lg`}>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;