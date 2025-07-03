import { Volume2, Lightbulb, Tv, Guitar, Layers, Music } from "lucide-react";

const services = [
  {
    icon: Volume2,
    title: "Sound Systems",
    description: "Professional audio equipment including speakers, mixing consoles, and amplifiers for crystal-clear sound quality.",
    features: ["Full Range Speakers", "Digital Mixing Consoles", "Professional Microphones"]
  },
  {
    icon: Lightbulb,
    title: "Lighting & Effects",
    description: "Dynamic lighting solutions to create the perfect ambiance for your event with LED and moving head lights.",
    features: ["LED Parcan Lights", "Moving Head Lights", "Wall Washers"]
  },
  {
    icon: Tv,
    title: "Video & Projection",
    description: "High-quality projectors and screens for presentations, videos, and visual displays.",
    features: ["HD Projectors", "Projection Screens", "Plasma Displays"]
  },
  {
    icon: Guitar,
    title: "Backline Gear",
    description: "Complete musical instrument setup including keyboards, drum sets, and amplification for live performances.",
    features: ["Yamaha Keyboards", "Professional Drum Mics", "Instrument Amplifiers"]
  },
  {
    icon: Layers,
    title: "Stages & Platforms",
    description: "Professional staging solutions for performances, presentations, and ceremonies of all sizes.",
    features: ["Modular Stage Systems", "Custom Staging", "Safety Barriers"]
  },
  {
    icon: Music,
    title: "DJ Equipment",
    description: "Professional DJ setups with decks, controllers, and sound systems for parties and events.",
    features: ["Professional DJ Decks", "Digital Controllers", "Monitoring Systems"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-pioneer-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Professional equipment rental for all your event needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-pioneer-navy p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-pioneer-orange text-4xl mb-4">
                  <IconComponent className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="text-gray-300 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-pioneer-orange rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
