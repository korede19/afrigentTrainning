import AboutSection from "@/components/aboutSection";
import Earning from "@/components/earning";
import FooterComp from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import Invest from "@/components/invest";
import Master from "@/components/master";
import Testimonials from "@/components/testimonial";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <Master />
      <Invest />
      <Testimonials />
      <Earning />
      <FooterComp />
    </div>
  );
};

export default LandingPage;
