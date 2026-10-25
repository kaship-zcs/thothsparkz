import Header from "@/components/Header";
import Hero from "@/components/hero/Hero";
import Philosophy from "@/components/Philosophy";
import Capabilities from "@/components/Capabilities";
import Stats from "@/components/Stats";
import Work from "@/components/Work";
import SparkSystem from "@/components/SparkSystem";
import Trusted from "@/components/Trusted";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Capabilities />
        <Stats />
        <Work />
        <SparkSystem />
        <Trusted />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
