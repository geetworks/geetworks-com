"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "./CountUp";
import Reveal from "./Reveal";

const STATS = [
  { to: 120, suffix: "+", label: "Projects delivered", desc: "Across web, mobile, and cloud" },
  { to: 40, suffix: "+", label: "Happy clients", desc: "Startups to enterprises" },
  { to: 8, suffix: "", label: "Years shipping", desc: "Battle-tested since 2018" },
  { to: 99, suffix: "%", label: "On-time delivery", desc: "Deadlines we actually hit" },
];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-paper-soft py-28">
      <motion.div aria-hidden style={{ y: yBg }} className="absolute inset-0">
        <div className="absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-brand-100/70 blur-3xl" />
        <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-cyan-100/70 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-12 text-center text-xs font-bold uppercase tracking-[0.25em] text-ink-mute">
            Numbers we&apos;re proud of
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="card-ring rounded-3xl bg-white p-8 text-center shadow-card"
            >
              <div className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                <CountUp to={s.to} suffix={s.suffix} className="text-gradient" />
              </div>
              <p className="mt-3 font-display text-base font-bold text-ink">{s.label}</p>
              <p className="mt-1 text-sm text-ink-mute">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
