import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Users, Award, Clock, CheckCircle } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Award, label: "Years Experience", value: "12+" },
    { icon: Clock, label: "Events Covered", value: "1000+" },
    { icon: CheckCircle, label: "Success Rate", value: "99%" }
  ];

  const team = [
    {
      name: "Pioneer Sounds Band",
      role: "Professional Entertainment",
      description: "Our in-house band provides live entertainment for events"
    },
    {
      name: "Technical Team",
      role: "Equipment Specialists",
      description: "Expert technicians ensuring flawless equipment setup and operation"
    }
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We use only professional-grade equipment from trusted brands like SHURE, AKG, SAMSON, and YAMAHA."
    },
    {
      title: "Reliability",
      description: "Our 'clarity non-stop' promise ensures your event runs smoothly without technical interruptions."
    },
    {
      title: "Professional Service",
      description: "From setup to breakdown, our experienced team provides comprehensive support."
    },
    {
      title: "Customer Focus",
      description: "Every event is unique, and we tailor our services to meet your specific requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-pioneer-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-pioneer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            About Pioneer Sounds
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Your trusted partner for professional audio, lighting, and staging solutions since 2012
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-pioneer-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-pioneer-orange p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Since 2012, Pioneer Sounds has been Kenya's premier provider of professional audio, 
                lighting, and staging equipment. Based in Kiambu Town, we've grown from a small 
                startup to a trusted partner for major events across the country.
              </p>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Our mission is simple: deliver "clarity non-stop" for every event. Whether it's 
                a wedding at Safari Park, a corporate event at Sankara Hotel, or a concert 
                featuring top artists like Sauti Sol, we ensure flawless execution.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We've had the privilege of working with renowned artists including Amani, 
                Churchill, Suzanna Owiyo, Juliani, and many others, providing professional 
                audio solutions for venues ranging from KICC to Nairobi National Theatre.
              </p>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Pioneer Sounds in action"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-pioneer-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-pioneer-navy p-8 rounded-xl shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-pioneer-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional experts dedicated to your event's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-pioneer-charcoal p-8 rounded-xl shadow-lg text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-pioneer-orange font-semibold mb-4">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}