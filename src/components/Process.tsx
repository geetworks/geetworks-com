"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    desc: "We dig into your goals, users, and constraints. Workshops, research, and a ruthlessly prioritized roadmap — no bloated specs.",
    color: "from-brand-500 to-violet-500",
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes to pixel-perfect UI. You review interactive prototypes early, so there are no expensive surprises later.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    n: "03",
    title: "Develop",
    desc: "Clean, tested code shipped in weekly increments. You see working software from week one, not a big-bang reveal.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    n: "04",
    title: "Deploy",
    desc: "Zero-downtime launches with monitoring baked in. Then we measure, iterate, and keep making it better.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.4"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative bg-paper py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="How we work"
          title="A process built for momentum"
          subtitle="Four phases, zero black boxes. You always know what's happening, what's next, and what it costs."
        />

        <div ref={ref} className="relative mx-auto max-w-3xl">
          {/* Progress line */}
          <div className="absolute bottom-8 left-[27px] top-8 w-0.5 bg-ink/10 sm:left-[31px]">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-brand-600 via-violet-500 to-cyan-400"
              style={{ scaleY: lineScale }}
            />
          </div>

          <div className="space-y-10">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6 sm:gap-8"
              >
                <div
                  className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} font-display text-lg font-bold text-white shadow-glow sm:h-16 sm:w-16`}
                >
                  {s.n}
                </div>
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="card-ring flex-1 rounded-3xl bg-white p-6 shadow-card sm:p-8"
                >
                  <h3 className="mb-2 font-display text-2xl font-bold text-ink">{s.title}</h3>
                  <p className="leading-relaxed text-ink-soft">{s.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
