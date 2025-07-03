export default function PortfolioSection() {
  const eventCategories = [
    {
      title: "Concerts & Shows",
      image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "Amani, Churchill, Sauti Sol, Suzanna Owiyo, Juliani, Dan Chizi Aceda"
    },
    {
      title: "Corporate Events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "Sankara Hotel, PanAfric Hotel, Crowne Plaza, National Museums"
    },
    {
      title: "Weddings",
      image: "/attached_assets/pioneer sounds profile.pdf-image-009_1751535111703.jpg",
      description: "Safari Park, Windsor Golf Club, Great Rift Valley Lodge, Marula Manor"
    },
    {
      title: "Church Events",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      description: "National Museums, Redeemed Gospel Church, PCEA St Andrews"
    }
  ];

  const featuredArtists = [
    { name: "Amani", venue: "KICC" },
    { name: "Churchill", venue: "KICC" },
    { name: "Sauti Sol", venue: "Sankara Hotel" },
    { name: "Suzanna Owiyo", venue: "Central Park" },
    { name: "Juliani", venue: "Nairobi Arboretum" },
    { name: "Daddy Owen", venue: "1 FM Launch" },
    { name: "Dan Chizi Aceda", venue: "Swiss Embassy" }
  ];

  const clients = [
    "Total Kenya", "K.C.B", "I.A.S.A Kenya", "Catholic University",
    "Muthaiga Primary", "Muguga Heritage"
  ];

  return (
    <section id="portfolio" className="py-20 bg-pioneer-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Delivering excellence across diverse events and venues</p>
        </div>
        
        {/* Event Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eventCategories.map((category, index) => (
            <div 
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-pioneer-navy rounded-xl overflow-hidden shadow-lg mb-4 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Artists */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Featured Artists We've Worked With</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
            {featuredArtists.map((artist, index) => (
              <div 
                key={index}
                className="bg-pioneer-navy p-4 rounded-lg hover:bg-pioneer-charcoal transition-colors duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-pioneer-orange font-semibold">{artist.name}</p>
                <p className="text-gray-400 text-sm">{artist.venue}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center animate-slide-up">
          <h3 className="text-2xl font-bold text-white mb-8">Trusted by Leading Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-gray-400">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="text-center p-4 hover:text-pioneer-orange transition-colors duration-300"
              >
                <p className="font-semibold">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
