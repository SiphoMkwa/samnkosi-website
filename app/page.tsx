import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import WhoWeServe from "@/components/sections/WhoWeServe";
import Capabilities from "@/components/sections/Capabilities";
import WhySamnkosi from "@/components/sections/WhySamnkosi";
import LeadershipPreview from "@/components/sections/LeadershipPreview";
import CTA from "@/components/ui/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <WhoWeServe />

      <Capabilities />

      <WhySamnkosi />

      <LeadershipPreview />

      <CTA
        title="Ready to Strengthen Your Mission?"
        description="Partner with SAMNKOSI Technology Group to modernize, secure, and transform your organization with trusted technology solutions."
        primaryText="Contact Us"
        secondaryText="Explore Capabilities"
      />

      <Footer />
    </>
  );
}
