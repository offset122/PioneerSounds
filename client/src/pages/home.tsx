import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import EquipmentGallery from "@/components/equipment-gallery";
import PortfolioSection from "@/components/portfolio-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-pioneer-navy">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <EquipmentGallery />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
