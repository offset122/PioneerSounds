
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function FloatingContactBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactInfo = {
    phone: "0720495135",
    email: "info.pioneersounds2008@gmail.com",
    whatsapp: "254720495135" // Kenya country code format for WhatsApp
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${contactInfo.phone}`, '_blank');
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank');
  };

  return (
    <>
      {/* Desktop Floating Bar */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <div className="bg-pioneer-orange shadow-2xl rounded-full p-4 hover:shadow-3xl transition-all duration-300">
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePhoneClick}
              className="bg-white text-pioneer-orange p-3 rounded-full hover:bg-gray-100 transition-all duration-300 group"
              title="Call us"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={handleEmailClick}
              className="bg-white text-pioneer-orange p-3 rounded-full hover:bg-gray-100 transition-all duration-300 group"
              title="Email us"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300 group"
              title="WhatsApp us"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Floating Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-pioneer-navy bg-opacity-95 backdrop-blur-md border-t border-pioneer-orange border-opacity-20 p-4">
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={handlePhoneClick}
              className="bg-pioneer-orange text-white p-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg active:scale-95"
            >
              <Phone className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleEmailClick}
              className="bg-pioneer-charcoal text-white p-4 rounded-full hover:bg-gray-700 transition-all duration-300 shadow-lg active:scale-95"
            >
              <Mail className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
          
          {/* Contact Info Display */}
          <div className="mt-3 text-center">
            <p className="text-white text-sm font-medium">Quick Contact</p>
            <p className="text-gray-300 text-xs">{contactInfo.phone} • {contactInfo.email}</p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Padding to Prevent Content Overlap */}
      <div className="md:hidden h-32"></div>
    </>
  );
}
