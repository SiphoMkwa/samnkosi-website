import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import WhoWeServe from "@/components/sections/WhoWeServe";
import Capabilities from "@/components/sections/Capabilities";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeServe />
      <Capabilities />
    </>
  );
}
