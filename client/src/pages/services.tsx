import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  Volume2,
  Lightbulb,
  Tv,
  Guitar,
  Layers,
  Music,
  Zap,
  Headphones,
} from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Services() {
  const mainServices = [
    {
      icon: Volume2,
      title: "Professional Sound Systems",
      description:
        "High-quality audio equipment for crystal-clear sound reproduction at any venue size.",
      features: [
        "Digital mixing consoles for precise audio control",
        "Full range, mid range, and subwoofer speaker systems",
        "Professional amplifiers and audio processors",
        "Snake cables and distribution systems",
      ],
      image:
        "https://media.istockphoto.com/id/177747450/photo/group-of-speakers.jpg?s=612x612&w=0&k=20&c=Vgy_BuEqagfShC1BgT5VPO_LAjb1VAwpJMkzPigIfpg=",
    },
    {
      icon: Lightbulb,
      title: "Event Lighting & Effects",
      description:
        "Dynamic lighting solutions to create the perfect ambiance and visual impact for your event.",
      features: [
        "LED Parcan lights for vibrant color displays",
        "Moving head lights for dynamic effects",
        "Wall washers for ambient lighting",
        "Professional lighting control systems",
      ],
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Tv,
      title: "Video & Projection Equipment",
      description:
        "State-of-the-art visual display solutions for presentations, entertainment, and live broadcasts.",
      features: [
        "High-definition projectors for large-scale displays",
        "Projection screens in various sizes",
        "Plasma displays for smaller venues",
        "Video switching and distribution equipment",
      ],
      image:
        "https://media.istockphoto.com/id/182677992/photo/people-watching-movie-in-dark-cinema.jpg?s=612x612&w=0&k=20&c=IlDGQdGxLyn1r54I4xdrf-CG7sC_VvNgR5nrOPLrhQU=",
    },
    {
      icon: Guitar,
      title: "Backline Musical Equipment",
      description:
        "Complete musical instrument setup and amplification for live performances.",
      features: [
        "Yamaha Motif XS 8 keyboards and synthesizers",
        "Professional drum microphone systems",
        "Instrument amplifiers and monitoring",
        "Complete backline rental packages",
      ],
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Layers,
      title: "Staging & Platform Solutions",
      description:
        "Professional staging systems for performances, presentations, and ceremonies.",
      features: [
        "Modular stage systems in various configurations",
        "Custom staging design and setup",
        "Safety barriers and crowd control",
        "Staging accessories and equipment",
      ],
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Music,
      title: "Professional DJ Equipment",
      description:
        "Complete DJ setups with decks, controllers, and sound systems for parties and events.",
      features: [
        "Professional DJ turntables and controllers",
        "Digital mixing and effects systems",
        "DJ monitoring and headphone systems",
        "Complete mobile DJ packages",
      ],
      image:
        "https://media.istockphoto.com/id/538479389/photo/dj-mixer-with-headphones.jpg?s=612x612&w=0&k=20&c=ugkWXMbcIJ5IlIb8uGXGJI_g2V1earxgERDVYF6NuEg=",
    },
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: "Power Generation",
      description:
        "Reliable power generators to ensure uninterrupted event operation.",
    },
    {
      icon: Headphones,
      title: "Professional Microphones",
      description:
        "SHURE SM58, PG30 headset, lavalier, and specialty microphones.",
    },
  ];

  const eventTypes = [
    {
      title: "Weddings",
      description: "Complete audio-visual solutions for your special day",
      venues: [
        "Safari Park",
        "Windsor Golf Club",
        "Great Rift Valley Lodge",
        "Marula Manor - Karen",
      ],
    },
    {
      title: "Corporate Events",
      description:
        "Professional setups for business conferences and gatherings",
      venues: [
        "Sankara Hotel",
        "PanAfric Hotel",
        "Crowne Plaza",
        "National Museums",
      ],
    },
    {
      title: "Concerts & Shows",
      description: "Full-scale production for live performances",
      venues: ["KICC", "Kenya National Theatre", "Nairobi Arboretum"],
    },
    {
      title: "Church Events",
      description:
        "Audio systems for worship services and religious gatherings",
      venues: ["Redeemed Gospel Church", "PCEA St Andrews", "Charter Hall"],
    },
  ];

  return (
    <div className="min-h-screen bg-pioneer-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-pioneer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional equipment rental for all your event needs - delivering
            "clarity non-stop"
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-pioneer-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${isEven ? "" : "lg:grid-flow-col-dense"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="text-pioneer-orange text-4xl mb-6">
                      <IconComponent className="w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start text-gray-300"
                        >
                          <div className="w-2 h-2 bg-pioneer-orange rounded-full mr-3 mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isEven ? "" : "lg:col-start-1"}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl shadow-lg w-full h-96 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Supporting services to ensure your event runs smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-pioneer-charcoal p-8 rounded-xl shadow-lg animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-pioneer-orange text-4xl mb-4">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-pioneer-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Event Types We Cover
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized solutions for every type of event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((eventType, index) => (
              <div
                key={index}
                className="bg-pioneer-navy p-6 rounded-xl shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {eventType.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {eventType.description}
                </p>
                <div className="space-y-1">
                  <p className="text-pioneer-orange font-semibold text-sm mb-2">
                    Featured Venues:
                  </p>
                  {eventType.venues.map((venue, venueIndex) => (
                    <p key={venueIndex} className="text-gray-300 text-xs">
                      • {venue}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Plan Your Event?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get a personalized quote for your audio, lighting, and staging needs
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-pioneer-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg"
          >
            Request Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
