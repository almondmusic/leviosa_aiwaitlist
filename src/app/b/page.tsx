import { Suspense } from "react";
import { Header } from "@/components/landing-b/header";
import { HeroSection } from "@/components/landing-b/hero-section";
import { FeaturesSection } from "@/components/landing-b/features-section";
import { RevenueProofSection } from "@/components/landing-b/revenue-proof-section";
import { TestimonialsSection } from "@/components/landing-b/testimonials-section";
import { PricingSection } from "@/components/landing-b/pricing-section";
import { FaqSection } from "@/components/landing-b/faq-section";
import { CtaSection } from "@/components/landing-b/cta-section";
import { Footer } from "@/components/landing-b/footer";
import { WaitlistProvider } from "@/components/landing-b/waitlist-context";
import { WaitlistModal } from "@/components/landing-b/waitlist-modal";

export const metadata = {
  title: "레비오사 AI | 스마트스토어 AI 자동화",
  description:
    "상품 등록, CS, 재고 관리까지 자동화하여 시간을 절약하고 매출을 키우세요.",
};

export default function VariantB() {
  return (
    <WaitlistProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <RevenueProofSection />
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
          <CtaSection />
        </main>
        <Footer />
        <Suspense fallback={null}>
          <WaitlistModal />
        </Suspense>
      </div>
    </WaitlistProvider>
  );
}
