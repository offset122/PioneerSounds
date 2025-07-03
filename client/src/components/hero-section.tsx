import { Play, Phone } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-pioneer-navy/85" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white drop-shadow-lg">Pioneer</span>
          <span className="text-pioneer-orange drop-shadow-lg"> Sounds</span>
        </h1>
        <p className="text-2xl md:text-3xl text-pioneer-orange font-semibold mb-4 drop-shadow-md">
          "clarity non-stop"
        </p>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
          Your one-stop events gear provider for the hire of Sound, Projectors, Screens, Backline Gear, Video, Lighting & Stages
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services">
            <button className="bg-pioneer-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 hover:shadow-xl">
              <Play className="w-5 h-5" />
              Explore Services
            </button>
          </Link>
          <Link href="/contact">
            <button className="border-2 border-pioneer-orange text-pioneer-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pioneer-orange hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <Phone className="w-5 h-5" />
              Get Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}