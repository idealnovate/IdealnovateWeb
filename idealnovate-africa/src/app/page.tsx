import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import LearningPath from "@/components/sections/LearningPath";
import WhyIdealnovate from "@/components/sections/WhyIdealnovate";
import WhatWeDo from "@/components/sections/WhatWeDo";
import TrendingProgrammes from "@/components/sections/TrendingProgrammes";
import StudentWorks from "@/components/sections/StudentWorks";
import Testimonials from "@/components/sections/Testimonials";
import Tutors from "@/components/sections/Tutors";
import Certification from "@/components/sections/Certification";
import Community from "@/components/sections/Community";
import KickstartJourney from "@/components/sections/KickstartJourney";
import FAQ from "@/components/sections/FAQ";
import VisitMarket from "@/components/sections/VisitMarket";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <LearningPath />
      <WhyIdealnovate />
      <WhatWeDo />
      <TrendingProgrammes />
      <StudentWorks />
      <Testimonials />
      <Tutors />
      <Certification />
      <Community />
      <KickstartJourney />
      <FAQ />
      <VisitMarket />
      <FinalCTA />
      <Footer />
    </main>
  );
}
