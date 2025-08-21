import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Search, TrendingUp, FileText, Link, BarChart3 } from "lucide-react";

const SEOServices = () => {
  const benefits = [
    "Improved search engine rankings",
    "Increased organic website traffic",
    "Better user experience and site performance",
    "Higher conversion rates and ROI",
    "Long-term sustainable growth",
    "Competitive advantage in your market"
  ];

  const services = [
    {
      icon: <Search className="h-12 w-12 text-primary" />,
      title: "Keyword Research & Strategy",
      description: "Identify high-value keywords and develop comprehensive SEO strategies for your business."
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "On-Page Optimization",
      description: "Optimize your website content, meta tags, and structure for better search visibility."
    },
    {
      icon: <Link className="h-12 w-12 text-primary" />,
      title: "Link Building",
      description: "Build high-quality backlinks to improve your domain authority and search rankings."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-primary" />,
      title: "Technical SEO",
      description: "Improve site speed, mobile-friendliness, and technical aspects that impact rankings."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "SEO Analytics & Reporting",
      description: "Track performance, monitor rankings, and provide detailed SEO reports and insights."
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
              SEO Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Boost your online visibility and drive more qualified traffic to your website with 
              our comprehensive SEO strategies that deliver measurable results.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Get SEO Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our SEO Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive SEO services designed to improve your search rankings and drive organic growth.
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
              Why Invest in Professional SEO?
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

      {/* SEO Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our SEO Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We follow a systematic approach to deliver sustainable SEO results.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">SEO Audit</h3>
                <p className="text-sm text-muted-foreground">Comprehensive analysis of your current SEO performance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Strategy</h3>
                <p className="text-sm text-muted-foreground">Develop customized SEO strategy based on your goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Implementation</h3>
                <p className="text-sm text-muted-foreground">Execute optimization strategies across all SEO factors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Monitor</h3>
                <p className="text-sm text-muted-foreground">Track results and continuously optimize performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our SEO Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">250%</div>
                <p className="text-muted-foreground">Average Traffic Increase</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <p className="text-muted-foreground">First Page Rankings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">180%</div>
                <p className="text-muted-foreground">ROI Improvement</p>
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
              Ready to Dominate Search Results?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free SEO audit and discover how we can improve your search rankings.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Get Free SEO Audit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOServices;