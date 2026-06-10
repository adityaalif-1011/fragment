import Navbar from "@/components/landing/Navbar/Navbar";
import Hero from "@/components/landing/Hero/Hero";
import WhatsInside from "@/components/landing/whats-inside/WhatsInside";
import WhyFragment from "@/components/landing/WhyFragment/WhyFragment";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatsInside />
      <WhyFragment />
    </>
  );
}