"use client";

import { useState } from "react";
import SmoothScroll from "./SmoothScroll";
import CustomCursor from "./CustomCursor";
import IntroLoader from "./IntroLoader";
import ScrollProgress from "./ScrollProgress";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TechMarquee from "./TechMarquee";
import Services from "./Services";
import Stats from "./Stats";
import Process from "./Process";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import Playground from "./Playground";
import Contact from "./Contact";
import Footer from "./Footer";

export default function HomePage() {
  const [started, setStarted] = useState(false);

  return (
    <SmoothScroll>
      <IntroLoader onDone={() => setStarted(true)} />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero started={started} />
        <TechMarquee />
        <Services />
        <Stats />
        <Process />
        <WhyUs />
        <Testimonials />
        <Playground />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
