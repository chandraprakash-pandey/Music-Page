// import Image from "next/image";

import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/upcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { main } from "motion/react-client";

export default function Home() {
  return (
    <main className="bg-black/[0.96] min-h-screen antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
