"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

const SERVICES = [
  {
    icon: "◈",
    title: "Web Development",
    desc: "Blazing-fast websites and web apps with Next.js and React. SEO-first, accessible, and built to convert visitors into customers.",
    tags: ["Next.js", "React", "E-commerce"],
    hue: "from-brand-500 to-violet-500",
  },
  {
    icon: "◉",
    title: "Mobile Apps",
    desc: "Native-quality iOS and Android apps from a single codebase. We ship to both stores and keep them updated.",
    tags: ["React Native", "Flutter", "Expo"],
    hue: "from-cyan-500 to-blue-500",
  },
  {
    icon: "✦",
    title: "UI/UX Design",
    desc: "Interfaces people instantly understand. Research-backed flows, design systems, and pixel-perfect handoff to engineering.",
    tags: ["Figma", "Design systems", "Prototyping"],
    hue: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: "⬢",
    title: "Cloud & DevOps",
    desc: "Infrastructure that scales while you sleep. CI/CD pipelines, zero-downtime deploys, monitoring, and cost control.",
    tags: ["AWS", "Docker", "Kubernetes"],
    hue: "from-emerald-500 to-teal-500",
  },
  {
    icon: "✺",
    title: "AI/ML Solutions",
    desc: "Practical AI that earns its keep — chatbots, recommendations, document intelligence, and LLM integrations.",
    tags: ["LLMs", "RAG", "ML pipelines"],
    hue: "from-amber-500 to-orange-500",
  },
  {
    icon: "⬣",
    title: "Consulting",
    desc: "A senior team on call. Architecture reviews, team augmentation, rescue missions for projects gone sideways.",
    tags: ["Audits", "Staff aug", "CTO-as-a-service"],
    hue: "from-rose-500 to-pink-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-paper py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="What we do"
          title="Everything you need to ship software"
          subtitle="One team, end to end. From the first sketch to production traffic — and everything after."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full">
                <div className="card-ring group flex h-full flex-col rounded-3xl bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover">
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${s.hue} font-display text-2xl text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    {s.icon}
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mb-6 flex-1 leading-relaxed text-ink-soft">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-paper-soft px-3 py-1 text-xs font-semibold text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
