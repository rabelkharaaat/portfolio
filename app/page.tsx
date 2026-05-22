import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Noise from "@/components/Noise";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Featured from "@/components/Featured";
import Services from "@/components/Services";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      {/* First-visit brand reveal (~3s) */}
      <Loader />

      {/* Global overlays */}
      <Noise />
      <CustomCursor />

      <Navigation />

      <main>
        <Hero />
        <Marquee />
        <Featured />
        <Services />
        <About />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  );
}
