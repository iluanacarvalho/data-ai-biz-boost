import Hero from "@/components/Hero";
import Audiences from "@/components/Audiences";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Investment from "@/components/Investment";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Audiences />
      <Benefits />
      <About />
      <Investment />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
