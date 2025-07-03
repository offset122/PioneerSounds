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
    <nav className="fixed top-0 w-full bg-pioneer-navy/95 backdrop-blur-md z-50 border-b border-pioneer-orange/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  location === item.path
                    ? "text-pioneer-orange bg-pioneer-orange/20 border border-pioneer-orange/30"
                    : "text-gray-200 hover:text-white hover:bg-pioneer-charcoal/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-white focus:outline-none focus:text-pioneer-orange transition-colors duration-200 p-2 rounded-lg hover:bg-pioneer-charcoal/50"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-pioneer-navy/98 backdrop-blur-lg border-b border-pioneer-orange/20">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={handleMobileNavClick}
                  className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl ${
                    location === item.path
                      ? "text-pioneer-orange bg-pioneer-orange/20 border border-pioneer-orange/30"
                      : "text-gray-200 hover:text-white hover:bg-pioneer-charcoal/50 active:bg-pioneer-charcoal/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}