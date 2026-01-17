import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import WhatWeDo from "@/components/landing/WhatWeDo";
import Products from "@/components/landing/Products";
import UseCases from "@/components/landing/UseCases";
import WhyUs from "@/components/landing/WhyUs";
import ResearchSection from "@/components/landing/ResearchSection";
import USPSection from "@/components/landing/USPSection";
import DatasetSection from "@/components/landing/DatasetSection";
import Partners from "@/components/landing/Partners";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Products />
      <UseCases />
      <WhyUs />
      <ResearchSection />
      <USPSection />
      <DatasetSection />
      <Partners />
      <Footer />
    </main>
  );
};

export default Index;
