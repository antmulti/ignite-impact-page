import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import MethodSection from "@/components/landing/MethodSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import ResultsSection from "@/components/landing/ResultsSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <AuthoritySection />
      <ResultsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
