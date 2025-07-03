import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: [
        "Kiambu Town, Kika Stalls Suite E8",
        "P.O BOX 322-00900 Kiambu",
        "Kenya"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "0720-495135",
        "0738-050639"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "pioneersounds@gmail.com",
        "www.pioneersounds.co.ke"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 5:00 PM",
        "Sunday: Available for events"
      ]
    }
  ];

  const services = [
    "Professional Sound Systems",
    "Event Lighting & Effects", 
    "Video & Projection Equipment",
    "Staging & Platform Solutions",
    "Backline Musical Equipment",
    "Professional DJ Equipment",
    "Power Generation Solutions",
    "Complete Event Setup & Support"
  ];

  return (
    <div className="min-h-screen bg-pioneer-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-pioneer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to make your event unforgettable? Get in touch for a personalized quote
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-pioneer-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multiple ways to reach us for your event planning needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div 
                  key={index}
                  className="bg-pioneer-navy p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-pioneer-orange p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{method.title}</h3>
                  <div className="space-y-2">
                    {method.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-400">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Find Us</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Located in the heart of Kiambu Town for easy access
            </p>
          </div>
          
          <div className="bg-pioneer-charcoal p-8 rounded-xl shadow-lg">
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-pioneer-orange mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Kiambu Town Location</h3>
                <p className="text-gray-400 mb-2">Kika Stalls Suite E8</p>
                <p className="text-gray-400">P.O BOX 322-00900 Kiambu, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />

      {/* Why Choose Us */}
      <section className="py-20 bg-pioneer-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Pioneer Sounds?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the difference with Kenya's premier audio-visual equipment provider
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-pioneer-navy p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">12+ Years Experience</h3>
              <p className="text-gray-400">Over a decade of successful events across Kenya, from intimate weddings to major concerts.</p>
            </div>
            <div className="bg-pioneer-navy p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Equipment</h3>
              <p className="text-gray-400">Industry-leading brands like SHURE, AKG, YAMAHA, and SAMSON for guaranteed quality.</p>
            </div>
            <div className="bg-pioneer-navy p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-400">Skilled technicians and our Pioneer Sounds Band for complete event solutions.</p>
            </div>
            <div className="bg-pioneer-navy p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Trusted by Major Clients</h3>
              <p className="text-gray-400">Serving organizations like Total Kenya, KCB, Catholic University, and many more.</p>
            </div>
            <div className="bg-pioneer-navy p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">"Clarity Non-Stop"</h3>
              <p className="text-gray-400">Our promise of uninterrupted, crystal-clear audio throughout your event.</p>
            </div>
            <div className="bg-pioneer-navy p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Complete Solutions</h3>
              <p className="text-gray-400">From sound and lighting to staging and power generation - we handle it all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive audio-visual solutions for every type of event
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-pioneer-charcoal p-6 rounded-xl shadow-lg text-center hover:bg-pioneer-orange hover:text-white transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="font-semibold text-gray-300 hover:text-white transition-colors">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}