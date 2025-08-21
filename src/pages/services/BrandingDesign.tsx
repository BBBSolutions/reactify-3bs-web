import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Palette, Image, FileText, Package, Eye } from "lucide-react";

const BrandingDesign = () => {
  const benefits = [
    "Distinctive brand identity that stands out",
    "Consistent visual messaging across all platforms",
    "Professional design that builds trust",
    "Increased brand recognition and recall",
    "Complete brand guidelines and assets",
    "Scalable designs for future growth"
  ];

  const services = [
    {
      icon: <Palette className="h-12 w-12 text-primary" />,
      title: "Brand Identity Design",
      description: "Create memorable logos and visual identities that perfectly represent your brand values."
    },
    {
      icon: <Image className="h-12 w-12 text-primary" />,
      title: "Graphic Design",
      description: "Design compelling graphics for marketing materials, social media, and digital platforms."
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Print Design",
      description: "Professional print designs for brochures, business cards, flyers, and marketing collateral."
    },
    {
      icon: <Package className="h-12 w-12 text-primary" />,
      title: "Packaging Design",
      description: "Eye-catching packaging designs that make your products stand out on the shelf."
    },
    {
      icon: <Eye className="h-12 w-12 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and drive engagement."
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
              Branding & Design Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Create a powerful brand identity that resonates with your audience and drives business success 
              through strategic design and compelling visual storytelling.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Start Your Brand Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Design Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From brand identity to digital experiences, we create designs that tell your story.
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
              Why Invest in Professional Branding & Design?
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Design Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We follow a proven process to ensure your brand design perfectly captures your vision.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Discovery</h3>
                <p className="text-sm text-muted-foreground">Understanding your brand, values, and target audience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Concept</h3>
                <p className="text-sm text-muted-foreground">Creating initial design concepts and ideas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Design</h3>
                <p className="text-sm text-muted-foreground">Developing refined designs based on feedback</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Delivery</h3>
                <p className="text-sm text-muted-foreground">Final designs with complete brand guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a brand identity that captures your essence and captivates your audience.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Get Design Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandingDesign;