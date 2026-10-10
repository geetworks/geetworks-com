"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const POINTS = [
  {
    title: "Senior engineers only",
    desc: "No juniors learning on your dime. Every person on your project has shipped production software for years.",
  },
  {
    title: "Fixed scope, fixed price",
    desc: "You'll know the full cost before we write a line of code. If scope changes, you approve it first — always.",
  },
  {
    title: "Weekly demos, not status meetings",
    desc: "Every Friday you click through working software. Progress you can see beats progress reports every time.",
  },
  {
    title: "We answer fast",
    desc: "Direct line to your team on Slack. Questions get answers in hours, not ticket-queue purgatory.",
  },
  {
    title: "Post-launch partners",
    desc: "We don't vanish after deploy. Monitoring, updates, and iteration plans keep your product improving.",
  },
  {
    title: "You own everything",
    desc: "Code, designs, docs, credentials — 100% yours from day one. No lock-in, no hostage situations.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-paper-soft py-28">
      <div
        aria-hidden
        className="bg-lines-light absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Why Geetworks"
          title="The team you wish you'd hired sooner"
          subtitle="Plenty of agencies can code. Few combine senior talent, honest pricing, and communication you'll actually enjoy."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
              className="card-ring rounded-3xl bg-white p-7 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-cyan-500 font-display text-sm font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-ink">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-soft">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <div className="card-ring inline-flex flex-col items-center gap-4 rounded-3xl bg-white px-10 py-8 shadow-card sm:flex-row sm:gap-8">
            <p className="font-display text-xl font-bold text-ink">
              Not sure where to start? <span className="text-gradient">Get a free 30-min consult.</span>
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white shadow-card"
            >
              Book a call
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
