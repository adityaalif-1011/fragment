import Navbar from "@/components/landing/Navbar/Navbar";
import Hero from "@/components/landing/Hero/Hero";
import WhatsInside from "@/components/landing/whats-inside/WhatsInside";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatsInside />
    </>
  );
}