import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Share2, Users, Calendar, BarChart3, MessageCircle } from "lucide-react";

const SocialMediaManagement = () => {
  const benefits = [
    "Increased brand awareness and engagement",
    "Consistent content creation and posting",
    "Community management and customer support",
    "Data-driven social media strategies",
    "Multi-platform content optimization",
    "Real-time performance monitoring and reporting"
  ];

  const services = [
    {
      icon: <Share2 className="h-12 w-12 text-primary" />,
      title: "Content Creation & Strategy",
      description: "Develop engaging content strategies and create compelling posts across all social platforms."
    },
    {
      icon: <Calendar className="h-12 w-12 text-primary" />,
      title: "Social Media Planning",
      description: "Strategic content calendar planning and scheduling for consistent brand presence."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Community Management",
      description: "Engage with your audience, respond to comments, and build meaningful relationships."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Social Media Analytics",
      description: "Track performance metrics and optimize strategies based on data-driven insights."
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-primary" />,
      title: "Paid Social Advertising",
      description: "Create and manage targeted social media campaigns to maximize reach and conversions."
    }
  ];

  const platforms = [
    { name: "Facebook", description: "Build community and engage with customers" },
    { name: "Instagram", description: "Visual storytelling and brand showcase" },
    { name: "Twitter", description: "Real-time updates and customer service" },
    { name: "LinkedIn", description: "Professional networking and B2B marketing" },
    { name: "TikTok", description: "Creative video content for younger audiences" },
    { name: "YouTube", description: "Long-form video content and tutorials" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Social Media Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Build a strong social media presence that engages your audience, drives brand awareness, 
              and converts followers into loyal customers across all platforms.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Start Social Strategy
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Social Media Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive social media solutions to build, manage, and grow your online community.
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

      {/* Platforms Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Platforms We Manage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              We create tailored strategies for each platform to maximize your social media impact.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{platform.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose Our Social Media Management?
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
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Social Media Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              A systematic approach to building and managing your social media presence.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Strategy</h3>
                <p className="text-sm text-muted-foreground">Develop comprehensive social media strategy and goals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Content</h3>
                <p className="text-sm text-muted-foreground">Create engaging content calendar and posts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Engage</h3>
                <p className="text-sm text-muted-foreground">Actively manage community and respond to interactions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Optimize</h3>
                <p className="text-sm text-muted-foreground">Analyze performance and optimize for better results</p>
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
              Ready to Amplify Your Social Presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create a social media strategy that builds your brand and drives real business results.
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              Get Social Media Audit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMediaManagement;