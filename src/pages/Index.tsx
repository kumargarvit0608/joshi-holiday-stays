import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoomsSection from "@/components/RoomsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PaymentSection from "@/components/PaymentSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoomsSection />
      <ExperiencesSection />
      <GallerySection />
      <TestimonialsSection />
      <PaymentSection />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
