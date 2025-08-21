import React from "react";
import { Button } from "@/components/ui/button";
import heroGlobe from "@/assets/hero-globe.jpg";

const Hero = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Expand Your Operations with a 
                <span className="text-primary"> Satellite Office</span> in India
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Optimize your business processes, reduce costs, and access world-class 
                talent with a dedicated office in India.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="text-lg px-8 py-4">
                Get Started with a Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Learn More About Our Services
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroGlobe}
                alt="Global business connectivity showing satellite office expansion"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;