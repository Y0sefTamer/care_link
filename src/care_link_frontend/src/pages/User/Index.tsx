
import { HeroSection } from "@/components/landing/hero-section";
import { PromoSection } from "@/components/landing/promo-section";
import { ServicesSection } from "@/components/landing/services-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { NursesSection } from "@/components/landing/nurses-section";
import { FAQSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PromoSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <NursesSection />
      <FAQSection />
    </div>
  );
};

export default Index;
