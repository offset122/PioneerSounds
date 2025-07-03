import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pioneer-charcoal border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-pioneer-orange mb-4">Pioneer Sounds</h2>
          <p className="text-xl text-gray-400 mb-4">"clarity non-stop"</p>
          <p className="text-gray-400 mb-8">Your one-stop events gear provider for professional audio, lighting, and staging solutions</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-pioneer-orange transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-pioneer-orange transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-pioneer-orange transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-pioneer-orange transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">&copy; 2024 Pioneer Sounds. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
