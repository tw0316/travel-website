// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Desinations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
    </>
  );
}