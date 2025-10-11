import { Testimonials } from "./_components/testimonials ";
import FeaturesSection from "./_components/features-8";
import HeroSection from "./_components/hero-section";
import { MarketingFooter } from "./_components/footer";
import FAQsFour from "./_components/faqsFour";

export default function Home() {
    return (
            <div className="h-full">
            <HeroSection />
            <FeaturesSection />
            <Testimonials />
            <FAQsFour />
            <MarketingFooter />
            </div>
    );
}
