import { useState } from "react";
import { MapPin, Phone, Mail, Check, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (since no database is needed)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: "",
      });
      
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1000);
  };

  const services = [
    "Professional Sound Systems",
    "Event Lighting & Effects", 
    "Video & Projection Equipment",
    "Staging & Platform Solutions",
    "Backline Musical Equipment",
    "Professional DJ Equipment"
  ];

  return (
    <section id="contact" className="py-20 bg-pioneer-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Ready to make your event unforgettable? Contact us for a personalized quote</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-pioneer-orange p-3 rounded-lg">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400">Location</p>
                    <div className="text-white font-semibold">
                      <p>Kiambu Town, Kika Stalls Suite E8</p>
                      <p className="text-sm text-gray-400">P.O BOX 322-00900 Kiambu, Kenya</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-pioneer-orange p-3 rounded-lg">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <div className="text-white font-semibold">
                      <p>0720-495135</p>
                      <p>0738-050639</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-pioneer-orange p-3 rounded-lg">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <div className="text-white font-semibold">
                      <p>pioneersounds@gmail.com</p>
                      <p className="text-pioneer-orange text-sm">www.pioneersounds.co.ke</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Services Summary */}
            <div className="bg-pioneer-charcoal p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">Our Services Include:</h4>
              <ul className="space-y-2 text-gray-300">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-pioneer-orange w-4 h-4 mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-pioneer-charcoal p-8 rounded-xl shadow-lg animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
            
            {showSuccess && (
              <div className="bg-green-600 text-white p-4 rounded-lg mb-6">
                <h4 className="font-semibold">Thank you for your inquiry!</h4>
                <p>We'll get back to you soon with a personalized quote.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <Input 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    type="tel"
                    className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange"
                    placeholder="Your Phone"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <Input 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  type="email"
                  className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Event Type</label>
                <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                  <SelectTrigger className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange">
                    <SelectValue placeholder="Select Event Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-pioneer-navy border-gray-600">
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="concert">Concert/Show</SelectItem>
                    <SelectItem value="church">Church Event</SelectItem>
                    <SelectItem value="private">Private Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Event Date</label>
                <Input 
                  value={formData.eventDate}
                  onChange={(e) => handleInputChange('eventDate', e.target.value)}
                  type="date"
                  className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <Textarea 
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  className="bg-pioneer-navy border-gray-600 text-white focus:border-pioneer-orange"
                  placeholder="Tell us about your event requirements..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-pioneer-orange text-white hover:bg-orange-600 transition-all duration-300 shadow-lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
