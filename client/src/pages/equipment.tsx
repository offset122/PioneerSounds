import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Equipment() {
  const equipmentCategories = [
    {
      title: "Mixing Consoles",
      description:
        "Professional digital mixing boards for precise audio control",
      image:
        "https://media.istockphoto.com/id/1408070712/photo/asian-sports-event-crew-working-at-backstage-with-control-panel-on-stage-lighting-sound.jpg?s=612x612&w=0&k=20&c=eeTOmcnA_0_3dD2spZPMlKzSxDnxmJeZ8yJ2qvRjGxU=",
      items: [
        "Digital mixing consoles with multi-channel capability",
        "Analog mixing boards for traditional setups",
        "Compact mixers for smaller events",
        "Professional audio processors and effects",
      ],
    },
    {
      title: "Speaker Systems",
      description:
        "Full range, mid range, and subwoofer systems for powerful sound",
      image:
        "https://media.istockphoto.com/id/1201519766/photo/flight-cases-with-line-array-speakers-stage-trusses-led-screen-and-sound-speakers-background.jpg?s=612x612&w=0&k=20&c=ohLI7x2xTyDEkyIowVTARecDHxswc6JU54T4TQ059MI=",
      items: [
        "Full range speakers for complete frequency coverage",
        "Mid range speakers for vocal clarity",
        "Subwoofers for deep bass response",
        "Monitor speakers for stage monitoring",
      ],
    },
    {
      title: "Amplifiers & Processors",
      description: "High-quality amplification and signal processing equipment",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      items: [
        "Power amplifiers for speaker systems",
        "Signal processors and equalizers",
        "Crossovers for frequency management",
        "Limiters and compressors for audio control",
      ],
    },
    {
      title: "Professional Microphones",
      description: "SHURE, AKG, and SAMSON microphones for every application",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      items: [
        "SHURE SM58 Professional corded microphones",
        "SHURE SM58 Professional cordless microphones",
        "SHURE PG30 Headset microphones",
        "SHURE Lavalier microphones for presentations",
        "SHURE Drumset microphones",
        "AKG Condenser microphones",
        "SAMSON Condenser microphones",
      ],
    },
    {
      title: "Keyboards & Musical Equipment",
      description: "Professional keyboards and musical instrument equipment",
      image:
        "https://media.istockphoto.com/id/1177308757/video/close-up-of-musician-hand-playing-paino.avif?s=640x640&k=20&c=wZ0dNBP5oHs3qOU6fammsQW0ODr_zfLxjD0oLf5Mps8=",
      items: [
        "Yamaha Motif XS 8 Professional Keyboard",
        "Digital pianos and synthesizers",
        "Keyboard stands and accessories",
        "MIDI controllers and interfaces",
      ],
    },
    {
      title: "Stages & Platforms",
      description: "Modular staging systems for performances and presentations",
      image:
        "https://media.istockphoto.com/id/1222776839/photo/free-stage-with-lights.jpg?s=612x612&w=0&k=20&c=9xIidP0CdOPw-hCV5zUlqh24_nqq2rrTicLk2ScjZNA=",
      items: [
        "Modular stage platforms in various sizes",
        "Stage risers and steps",
        "Custom staging configurations",
        "Stage skirting and accessories",
      ],
    },
    {
      title: "Lighting Equipment",
      description: "Professional lighting for ambiance and effects",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      items: [
        "LED Parcan lights for colorful displays",
        "Moving head lights for dynamic effects",
        "Wall washers for ambient lighting",
        "Lighting control consoles",
      ],
    },
    {
      title: "Video & Projection",
      description: "High-definition projectors and display screens",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      items: [
        "HD projectors for large screen displays",
        "Projection screens in multiple sizes",
        "Plasma displays for smaller venues",
        "Video switchers and distribution",
      ],
    },
    {
      title: "DJ Equipment",
      description: "Professional DJ decks and controllers",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      items: [
        "Professional DJ turntables",
        "Digital DJ controllers",
        "DJ mixing boards",
        "DJ headphones and monitoring",
      ],
    },
    {
      title: "Accessories & Cables",
      description: "Essential cables, stands, and supporting equipment",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      items: [
        "Snake cables for audio distribution",
        "Microphone stands and boom arms",
        "Power generators for outdoor events",
        "Extension cables and power distribution",
      ],
    },
  ];

  const brands = [
    {
      name: "SHURE",
      description: "Professional microphones and audio equipment",
    },
    { name: "AKG", description: "Premium condenser microphones" },
    { name: "SAMSON", description: "Professional audio solutions" },
    { name: "YAMAHA", description: "Musical instruments and keyboards" },
  ];

  return (
    <div className="min-h-screen bg-pioneer-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-pioneer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Professional Equipment
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Industry-leading brands and cutting-edge technology for exceptional
            event experiences
          </p>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 bg-pioneer-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {equipmentCategories.map((category, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-slide-up ${isEven ? "" : "lg:grid-flow-col-dense"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 mb-6 text-lg">
                      {category.description}
                    </p>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-gray-300"
                        >
                          <div className="w-2 h-2 bg-pioneer-orange rounded-full mr-3 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isEven ? "" : "lg:col-start-1"}>
                    <img
                      src={category.image}
                      alt={category.title}
                      className="rounded-xl shadow-lg w-full h-96 object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted Brands
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We use only professional-grade equipment from industry-leading
              manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-pioneer-charcoal p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-pioneer-orange mb-3">
                  {brand.name}
                </h3>
                <p className="text-gray-400">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-pioneer-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Quality Assurance
          </h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            All our equipment is regularly maintained, tested, and calibrated to
            ensure optimal performance at your event. Our technical team
            conducts pre-event checks and provides on-site support to guarantee
            "clarity non-stop" throughout your event.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-pioneer-navy p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">
                Regular Maintenance
              </h3>
              <p className="text-gray-400">
                All equipment undergoes scheduled maintenance and testing
              </p>
            </div>
            <div className="bg-pioneer-navy p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">
                Pre-Event Testing
              </h3>
              <p className="text-gray-400">
                Complete system testing before every event
              </p>
            </div>
            <div className="bg-pioneer-navy p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-3">
                On-Site Support
              </h3>
              <p className="text-gray-400">
                Technical team available throughout your event
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Specific Equipment?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Contact us to discuss your equipment requirements and get a
            customized quote
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="bg-pioneer-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg"
          >
            Get Equipment Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
