import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

// Event-specific image components based on PDF content
const KICCConcertImage = () => (
  <div className="w-full h-96 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-black opacity-20"></div>
    <div className="relative text-center text-white z-10">
      <h3 className="text-2xl font-bold mb-2">KICC Concert Hall</h3>
      <p className="text-sm opacity-90">Kenyatta International Conference Centre</p>
      <div className="flex justify-center space-x-4 mt-4">
        <div className="w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="w-8 h-8 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="w-8 h-8 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  </div>
);

const SankaraHotelImage = () => (
  <div className="w-full h-96 bg-gradient-to-br from-amber-800 to-amber-600 rounded-xl flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-black opacity-15"></div>
    <div className="relative text-center text-white z-10">
      <h3 className="text-2xl font-bold mb-2">Sankara Hotel</h3>
      <p className="text-sm opacity-90">Corporate Events & Business Gatherings</p>
      <div className="grid grid-cols-3 gap-2 mt-4 max-w-24 mx-auto">
        <div className="w-6 h-6 bg-blue-400 rounded"></div>
        <div className="w-6 h-6 bg-blue-400 rounded"></div>
        <div className="w-6 h-6 bg-blue-400 rounded"></div>
      </div>
    </div>
  </div>
);

const SafariParkWeddingImage = () => (
  <div className="w-full h-96 bg-gradient-to-br from-green-400 to-blue-400 rounded-xl flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-white opacity-10"></div>
    <div className="relative text-center text-white z-10">
      <h3 className="text-2xl font-bold mb-2">Safari Park Wedding</h3>
      <p className="text-sm opacity-90">Outdoor Garden Ceremonies</p>
      <div className="flex justify-center mt-4">
        <div className="w-16 h-8 border-4 border-white rounded-t-full bg-transparent"></div>
      </div>
      <div className="flex justify-center space-x-2 mt-2">
        <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
      </div>
    </div>
  </div>
);

const ChurchEventImage = () => (
  <div className="w-full h-96 bg-gradient-to-br from-amber-700 to-amber-900 rounded-xl flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-black opacity-25"></div>
    <div className="relative text-center text-white z-10">
      <h3 className="text-2xl font-bold mb-2">Church Events</h3>
      <p className="text-sm opacity-90">Worship Services & Religious Gatherings</p>
      <div className="flex justify-center mt-4">
        <div className="relative">
          <div className="w-1 h-8 bg-yellow-400"></div>
          <div className="w-6 h-1 bg-yellow-400 absolute top-2 -left-2.5"></div>
        </div>
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  const featuredEvents = [
    {
      category: "Concerts & Shows",
      title: "Major Artist Performances",
      description: "We've provided professional audio solutions for renowned artists across premier venues in Kenya",
      imageComponent: KICCConcertImage,
      events: [
        { artist: "Amani", venue: "Kenyatta International Conference Centre" },
        { artist: "Churchill", venue: "Kenyatta International Conference Centre" },
        { artist: "Sauti Sol", venue: "Sankara Hotel" },
        { artist: "Suzanna Owiyo", venue: "Central Park Nairobi" },
        { artist: "Juliani", venue: "Nairobi Arboretum" },
        { artist: "Daddy Owen", venue: "1 FM Launch" },
        { artist: "Dan Chizi Aceda", venue: "Swiss Embassy" },
        { artist: "Nairobi Gospel Choir", venue: "Kenya National Theatre" }
      ]
    },
    {
      category: "Corporate Events",
      title: "Professional Business Gatherings",
      description: "Delivering crystal-clear audio and professional staging for corporate conferences and events",
      imageComponent: SankaraHotelImage,
      events: [
        { event: "1 FM Launch", venue: "Sankara Hotel" },
        { event: "GM Dinner", venue: "Mavuno Church" },
        { event: "KCDF Event", venue: "PanAfric Hotel" },
        { event: "Zetech College Graduation", venue: "Uhuru Park" },
        { event: "Africa Grantmakers Network", venue: "National Museums of Kenya" },
        { event: "Communications Commission of Kenya", venue: "Splash Water World" },
        { event: "UN End of Year", venue: "BP Shell Club" },
        { event: "PSI Event", venue: "Laico Regency" },
        { event: "African Banking and Finance Conference", venue: "Crowne Plaza" },
        { event: "Unilever Town Hall Session", venue: "Corporate Venue" },
        { event: "Tourism Investment Conference", venue: "Norfolk Hotel" },
        { event: "Dasani Golf Tournaments", venue: "Railways Golf Club" }
      ]
    },
    {
      category: "Weddings",
      title: "Unforgettable Wedding Celebrations",
      description: "Creating magical moments with perfect audio and lighting for your special day",
      imageComponent: SafariParkWeddingImage,
      events: [
        { venue: "Safari Park", description: "Elegant outdoor ceremony and reception" },
        { venue: "Windsor Golf Club", description: "Sophisticated golf course wedding" },
        { venue: "Great Rift Valley Lodge", description: "Scenic mountain lodge celebration" },
        { venue: "Marula Manor - Karen", description: "Luxurious garden wedding venue" },
        { venue: "UN Grounds", description: "Prestigious international venue" },
        { venue: "Jockey Club Nairobi", description: "Classic equestrian club setting" },
        { venue: "Nairobi School", description: "Traditional school grounds ceremony" },
        { venue: "Ridgeways", description: "Intimate residential venue celebration" }
      ]
    },
    {
      category: "Church Events",
      title: "Sacred Worship & Religious Gatherings",
      description: "Supporting spiritual communities with clear, powerful audio for worship and special events",
      imageComponent: ChurchEventImage,
      events: [
        { event: "Bible Trivia", venue: "National Museums" },
        { event: "Christ Embassy Service", venue: "Nyayo National Stadium Museum" },
        { event: "Vicky Kitonga Album Launch", venue: "Redeemed Gospel Church Huruma" },
        { event: "Judah Ministries", venue: "Charter Hall Nairobi" },
        { event: "Dennis Mutara Album Launch", venue: "PCEA St Andrews" },
        { event: "Mavuno Teen Service", venue: "Mavuno Church" },
        { event: "Sunshine Kids Show", venue: "Kenya National Theatre" },
        { event: "SDA Rally", venue: "Uhuru Park" }
      ]
    }
  ];

  const privateEvents = [
    {
      title: "Birthday Celebrations",
      description: "Memorable birthday parties with professional sound and lighting",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Thanksgiving Events",
      description: "Grateful celebrations with warm, inviting atmospheres",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const bandPerformances = [
    { venue: "Village Market", description: "Live entertainment at premier shopping destination" },
    { venue: "Nairobi Jockey Club", description: "Elegant performances at exclusive club events" },
    { venue: "Serena Hotel", description: "Sophisticated hotel entertainment" },
    { venue: "Nairobi Sailing Club", description: "Waterfront venue performances" }
  ];

  const clients = [
    "Total Kenya",
    "Motion Pictures Exclusive Ltd",
    "Wedding Planners",
    "Musicians",
    "I.A.S.A Kenya",
    "K.C.B",
    "Event Organizers",
    "Muguga Heritage Schools",
    "Churches",
    "Catholic University of E. Africa",
    "Conference Organizers",
    "Muthaiga Primary School",
    "St. Anthony Kiambu"
  ];

  return (
    <div className="min-h-screen bg-pioneer-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-pioneer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Delivering excellence across diverse events and prestigious venues since 2012
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-pioneer-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {featuredEvents.map((category, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-slide-up ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="bg-pioneer-orange text-white px-4 py-2 rounded-lg inline-block mb-4 text-sm font-semibold">
                      {category.category}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                    <p className="text-gray-400 mb-6 text-lg">{category.description}</p>
                    
                    <div className="space-y-3 max-h-80 overflow-y-auto">
                      {category.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="bg-pioneer-navy p-4 rounded-lg">
                          {category.category === "Weddings" ? (
                            <div>
                              <p className="text-white font-semibold">{event.venue}</p>
                              {(event as any).description && <p className="text-gray-400 text-sm">{(event as any).description}</p>}
                            </div>
                          ) : (
                            <div>
                              <p className="text-white font-semibold">
                                {(event as any).artist || (event as any).event}
                              </p>
                              <p className="text-gray-400 text-sm">{event.venue}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={isEven ? '' : 'lg:col-start-1'}>
                    <category.imageComponent />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pioneer Sounds Band */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Pioneer Sounds Band</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our professional in-house band provides live entertainment for events across Nairobi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandPerformances.map((performance, index) => (
              <div 
                key={index}
                className="bg-pioneer-charcoal p-6 rounded-xl shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{performance.venue}</h3>
                <p className="text-gray-400 text-sm">{performance.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="py-20 bg-pioneer-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Private Events</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Creating intimate and memorable experiences for personal celebrations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {privateEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-pioneer-navy rounded-xl overflow-hidden shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're proud to serve a diverse range of clients across Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-pioneer-charcoal p-6 rounded-xl text-center hover:bg-pioneer-orange hover:text-white transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="font-semibold text-gray-300 hover:text-white transition-colors">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-pioneer-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Our Track Record</h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Over 12 years of delivering exceptional audio-visual solutions across Kenya's 
            most prestigious venues and events.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pioneer-navy p-8 rounded-xl">
              <h3 className="text-4xl font-bold text-pioneer-orange mb-2">500+</h3>
              <p className="text-white font-semibold mb-2">Events Completed</p>
              <p className="text-gray-400 text-sm">Successful events across all categories</p>
            </div>
            <div className="bg-pioneer-navy p-8 rounded-xl">
              <h3 className="text-4xl font-bold text-pioneer-orange mb-2">50+</h3>
              <p className="text-white font-semibold mb-2">Artists Supported</p>
              <p className="text-gray-400 text-sm">Major artists and performers</p>
            </div>
            <div className="bg-pioneer-navy p-8 rounded-xl">
              <h3 className="text-4xl font-bold text-pioneer-orange mb-2">99%</h3>
              <p className="text-white font-semibold mb-2">Client Satisfaction</p>
              <p className="text-gray-400 text-sm">Delivering "clarity non-stop"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Portfolio?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let us help make your event a success with our professional audio-visual solutions
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-pioneer-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg"
          >
            Start Planning Your Event
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}