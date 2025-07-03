
import { Phone, Mail, MessageCircle, Plus, X } from "lucide-react";
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
    setIsExpanded(false);
  };

  const handlePhoneClick = () => {
    window.open(`tel:${contactInfo.phone}`, '_blank');
    setIsExpanded(false);
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank');
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Desktop Floating Bar */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Expanded Options */}
          {isExpanded && (
            <div className="absolute bottom-16 right-0 flex flex-col space-y-3 animate-slide-up">
              <button
                onClick={handlePhoneClick}
                className="bg-pioneer-orange text-white p-3 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg group"
                title="Call us"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={handleEmailClick}
                className="bg-pioneer-charcoal text-white p-3 rounded-full hover:bg-gray-700 transition-all duration-300 shadow-lg group"
                title="Email us"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg group"
                title="WhatsApp us"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          )}

          {/* Main Toggle Button */}
          <button
            onClick={toggleExpanded}
            className={`bg-pioneer-orange text-white p-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg ${
              isExpanded ? 'rotate-45' : ''
            }`}
            title={isExpanded ? "Close" : "Contact us"}
          >
            {isExpanded ? (
              <X className="w-6 h-6" />
            ) : (
              <Plus className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Floating Bar */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Expanded Options */}
          {isExpanded && (
            <div className="absolute bottom-16 right-0 flex flex-col space-y-3 animate-slide-up">
              <button
                onClick={handlePhoneClick}
                className="bg-pioneer-orange text-white p-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg active:scale-95"
                title="Call us"
              >
                <Phone className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleEmailClick}
                className="bg-pioneer-charcoal text-white p-4 rounded-full hover:bg-gray-700 transition-all duration-300 shadow-lg active:scale-95"
                title="Email us"
              >
                <Mail className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg active:scale-95"
                title="WhatsApp us"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Main Toggle Button */}
          <button
            onClick={toggleExpanded}
            className={`bg-pioneer-orange text-white p-4 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg active:scale-95 ${
              isExpanded ? 'rotate-45' : ''
            }`}
            title={isExpanded ? "Close" : "Contact us"}
          >
            {isExpanded ? (
              <X className="w-6 h-6" />
            ) : (
              <Plus className="w-6 h-6" />
            )}
          </button>

          
        </div>
      </div>
    </>
  );
}
