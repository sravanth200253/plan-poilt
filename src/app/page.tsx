import { NavbarDemo } from "@/components/demos/navbar-demo";
import { BackgroundBeamsWithCollisionDemo } from "@/components/demos/background-beams-with-collision-demo";
import { Capabilities } from "@/components/sections/capabilities";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhyPlanPilot } from "@/components/sections/why-planpilot";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <BackgroundBeamsWithCollisionDemo />
      <Capabilities />
      <HowItWorks />
      <WhyPlanPilot />
      <Pricing />
      <Testimonials />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
