// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/desinations";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
    </>
  );
}