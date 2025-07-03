import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-pioneer-navy/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-pioneer-orange">Pioneer Sounds</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-gray-300 hover:text-pioneer-orange transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('services')}
                className="text-gray-300 hover:text-pioneer-orange transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('equipment')}
                className="text-gray-300 hover:text-pioneer-orange transition-colors duration-300"
              >
                Equipment
              </button>
              <button 
                onClick={() => handleNavClick('portfolio')}
                className="text-gray-300 hover:text-pioneer-orange transition-colors duration-300"
              >
                Portfolio
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-pioneer-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Contact
              </button>
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
            <button 
              onClick={() => handleNavClick('home')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-pioneer-orange"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('services')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-pioneer-orange"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('equipment')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-pioneer-orange"
            >
              Equipment
            </button>
            <button 
              onClick={() => handleNavClick('portfolio')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-pioneer-orange"
            >
              Portfolio
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-pioneer-orange"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
