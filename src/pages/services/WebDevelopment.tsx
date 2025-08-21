import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code, Globe, Smartphone, Database, Shield } from "lucide-react";

const WebDevelopment = () => {
  const benefits = [
    "Custom web solutions tailored to your business",
    "Responsive design for all devices",
    "SEO-optimized development",
    "Fast loading and high performance",
    "Secure and scalable architecture",
    "Ongoing maintenance and support"
  ];

  const services = [
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Custom Web Applications",
      description: "Build powerful, scalable web applications tailored to your specific business requirements."
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Website Development",
      description: "Create stunning, professional websites that engage visitors and drive conversions."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile-First Design",
      description: "Ensure your web presence looks perfect and functions flawlessly on all mobile devices."
    },
    {
      icon: <Database className="h-12 w-12 text-primary" />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure databases and efficient API integrations."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Security & Performance",
      description: "Implement advanced security measures and optimization for maximum performance."
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
              Web Development Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Build powerful, scalable, and user-friendly web solutions that drive business growth 
              and deliver exceptional user experiences across all platforms.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Development Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From simple websites to complex web applications, we deliver cutting-edge solutions.
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
              Why Choose Our Web Development Services?
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

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Technologies We Use
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We leverage the latest technologies and frameworks to build modern, efficient web solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Frontend</h3>
                <p className="text-sm text-muted-foreground">React, Vue.js, Angular, TypeScript</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Backend</h3>
                <p className="text-sm text-muted-foreground">Node.js, Python, PHP, .NET</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Database</h3>
                <p className="text-sm text-muted-foreground">MySQL, PostgreSQL, MongoDB</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Cloud</h3>
                <p className="text-sm text-muted-foreground">AWS, Azure, Google Cloud</p>
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and bring your web development vision to life.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;