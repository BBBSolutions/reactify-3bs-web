import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Search, Share2, BarChart3, Mail, Smartphone } from "lucide-react";

const DigitalMarketing = () => {
  const benefits = [
    "Increased online visibility and brand awareness",
    "Higher conversion rates and ROI",
    "Targeted audience engagement",
    "Data-driven marketing strategies",
    "Multi-channel campaign management",
    "Real-time performance tracking and optimization"
  ];

  const services = [
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Search Engine Marketing",
      description: "Boost your online presence with SEO and PPC campaigns that drive qualified traffic."
    },
    {
      icon: <Share2 className="h-12 w-12 text-primary" />,
      title: "Social Media Marketing",
      description: "Build engaging social media campaigns that connect with your audience across all platforms."
    },
    {
      icon: <Mail className="h-12 w-12 text-primary" />,
      title: "Email Marketing",
      description: "Create personalized email campaigns that nurture leads and drive customer loyalty."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Analytics & Reporting",
      description: "Track, measure, and optimize your marketing performance with comprehensive analytics."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile Marketing",
      description: "Reach customers on mobile devices with targeted campaigns and responsive experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Digital Marketing Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Accelerate your business growth with comprehensive digital marketing strategies 
              that deliver measurable results and maximize your online presence.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Start Your Campaign
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Digital Marketing Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From SEO to social media, we provide integrated digital marketing services that drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose Our Digital Marketing Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Boost Your Digital Presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a digital marketing strategy that drives growth and delivers exceptional ROI.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Get Your Free Strategy Session
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;