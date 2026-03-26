import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Solar } from "@/components/Solar";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { About } from "@/components/About";
import { ServiceArea } from "@/components/ServiceArea";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solar />
        <WhyUs />
        <Gallery />
        <Reviews />
        <About />
        <ServiceArea />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
