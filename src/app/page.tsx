import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { InteractiveServices } from "../components/InteractiveServices";
import { SplitShowcase } from "../components/SplitShowcase";
import { ProcessSteps } from "../components/ProcessSteps";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
import { CustomCursor } from "../components/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <Hero />
      <InteractiveServices />
      <SplitShowcase />
      <ProcessSteps />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

