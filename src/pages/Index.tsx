import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import HowItWorks from "@/components/home/HowItWorks";
import Industries from "@/components/home/Industries";
import CaseStudy from "@/components/home/CaseStudy";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Industries />
        <CaseStudy />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
