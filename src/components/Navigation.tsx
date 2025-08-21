import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" }
  ];

  const serviceItems = [
    { name: "Business Consulting", href: "/services/business-consulting" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Branding & Design", href: "/services/branding-design" },
    { name: "SEO Services", href: "/services/seo-services" },
    { name: "Social Media Management", href: "/services/social-media-management" }
  ];

  return (
    <nav className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-primary rounded text-primary-foreground flex items-center justify-center font-bold text-lg mr-3">
                3B
              </div>
              <span className="text-xl font-bold text-foreground">Business Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium flex items-center gap-1">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {serviceItems.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link
                        to={service.href}
                        className="w-full cursor-pointer"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;