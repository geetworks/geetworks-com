"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[9990] h-1 origin-left bg-gradient-to-r from-brand-600 via-violet-500 to-cyan-400"
      style={{ scaleX }}
    />
  );
}
