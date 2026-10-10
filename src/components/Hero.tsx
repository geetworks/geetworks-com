"use client";

import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import SplitText from "./SplitText";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

/** Deterministic pseudo-random for stable SSR. */
function seeded(i: number, salt: number) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function Particles({ count = 26 }: { count?: number }) {
  const reduce = useReducedMotion();
  const parts = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: seeded(i, 1) * 100,
        top: seeded(i, 2) * 100,
        size: 4 + seeded(i, 3) * 10,
        dur: 7 + seeded(i, 4) * 9,
        delay: seeded(i, 5) * 6,
        shape: seeded(i, 6) > 0.5 ? "rounded-full" : "rounded-[3px] rotate-45",
        color:
          seeded(i, 7) > 0.66
            ? "bg-brand-500/25"
            : seeded(i, 7) > 0.33
              ? "bg-violet-400/25"
              : "bg-cyan-400/25",
      })),
    [count]
  );
  if (reduce) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {parts.map((p, i) => (
        <motion.span
          key={i}
          className={`absolute ${p.shape} ${p.color}`}
          style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -46, 0], opacity: [0.2, 0.9, 0.2], rotate: [0, 90, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export default function Hero({ started }: { started: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "46%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Pastel gradient mesh */}
      <motion.div aria-hidden style={{ y: yBg }} className="absolute inset-0">
        <div className="bg-grid-light absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
        <motion.div
          className="absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full bg-brand-200/50 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-200/50 blur-3xl"
          animate={{ x: [0, -70, 0], y: [0, -50, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-200/40 blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 top-16 h-40 w-40 rounded-full bg-emerald-200/50 blur-2xl"
          animate={{ scale: [1, 1.35, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <Particles />

      {/* Content with parallax */}
      <motion.div
        style={{ y: yFg, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-600/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700 shadow-card backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Accepting new projects for 2026
        </motion.div>

        <h1 className="font-display text-[13vw] font-bold leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-8xl">
          {started && (
            <>
              <SplitText text="We build software" as="span" className="block" delay={0.25} />
              <SplitText
                text="that ships."
                as="span"
                className="block text-gradient pb-2"
                delay={0.65}
                stagger={0.03}
              />
            </>
          )}
        </h1>

        <Reveal delay={1.05} y={24}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Geetworks is a full-service software development company. We design, engineer, and
            launch <span className="font-semibold text-ink">websites</span>,{" "}
            <span className="font-semibold text-ink">mobile apps</span>, and{" "}
            <span className="font-semibold text-ink">cloud products</span> that people love to
            use — on time, on budget, without the drama.
          </p>
        </Reveal>

        <Reveal delay={1.2} y={24}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.35}>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-8 py-4 text-base font-semibold text-white shadow-card transition-shadow hover:shadow-glow"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-600 via-violet-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">Start your project</span>
                <span className="relative transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </Magnetic>
            <Magnetic strength={0.35}>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-8 py-4 text-base font-semibold text-ink shadow-card backdrop-blur transition-all hover:border-brand-600/40 hover:shadow-card-hover"
              >
                Explore services
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={1.35} y={20}>
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-ink-mute">
            {[
              ["120+", "Projects shipped"],
              ["40+", "Happy clients"],
              ["8 yrs", "Building products"],
            ].map(([n, label]) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold text-ink">{n}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-ink/20 p-1.5">
          <motion.div
            className="h-2.5 w-1.5 rounded-full bg-brand-600"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.a>
    </section>
  );
}
