import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import Logo from "@/components/logo";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Equipment", path: "/equipment" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" }
  ];

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-pioneer-navy/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Logo className="h-10 w-auto text-white" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.slice(0, -1).map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className={`transition-colors duration-300 ${
                    location === item.path 
                      ? "text-pioneer-orange" 
                      : "text-gray-300 hover:text-pioneer-orange"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                className="bg-pioneer-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-pioneer-charcoal border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                onClick={handleMobileNavClick}
                className={`block w-full text-left px-3 py-2 transition-colors duration-300 ${
                  location === item.path 
                    ? "text-pioneer-orange" 
                    : "text-gray-300 hover:text-pioneer-orange"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
