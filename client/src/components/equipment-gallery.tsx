export default function EquipmentGallery() {
  const equipmentCategories = [
    {
      title: "Front-of-House Equipment",
      items: [
        {
          name: "Digital Mixing Consoles",
          description: "Professional-grade digital mixing boards for precise audio control and crystal-clear sound reproduction.",
          image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
        },
        {
          name: "Professional Speakers",
          description: "Full range, mid range, and subwoofers delivering powerful, clear audio for any venue size.",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
        }
      ]
    },
    {
      title: "Microphones & Accessories",
      items: [
        {
          name: "SHURE Professional Mics",
          description: "Complete range including SM58 corded/cordless, PG30 headset, lavalier, and drumset microphones.",
          image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
        },
        {
          name: "DJ Equipment & Decks",
          description: "Professional DJ setups with turntables, controllers, and monitoring systems for seamless performances.",
          image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
        }
      ]
    }
  ];

  const brands = ["SHURE", "AKG", "SAMSON", "YAMAHA"];

  return (
    <section id="equipment" className="py-20 bg-pioneer-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Equipment</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Industry-leading brands and cutting-edge technology</p>
        </div>
        
        {/* Equipment Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {equipmentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-3xl font-bold text-pioneer-orange mb-6">{category.title}</h3>
              
              {category.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex}
                  className="bg-pioneer-charcoal rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${(categoryIndex * 2 + itemIndex) * 0.2}s` }}
                >
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Equipment Brands */}
        <div className="text-center animate-slide-up">
          <h3 className="text-2xl font-bold text-white mb-8">Trusted Brands We Use</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="text-xl font-semibold hover:text-pioneer-orange transition-colors duration-300 cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
