import React from "react";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;