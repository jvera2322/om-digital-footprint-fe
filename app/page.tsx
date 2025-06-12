import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import AiGuardianSection from "@/components/ai-guardian-section"
import CtaSection from "@/components/cta-section"
import FaqSection from "@/components/faq-section"

export default function FullLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-offWhite">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AiGuardianSection />
        <CtaSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
