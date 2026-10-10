"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const QUOTES = [
  {
    quote:
      "Geetworks took our napkin sketch to a live product in ten weeks. The weekly demos meant we never once wondered where things stood.",
    name: "Aarav Mehta",
    role: "Founder, Finlytics",
    initials: "AM",
    hue: "from-brand-500 to-violet-500",
  },
  {
    quote:
      "Our old app had a 2.1-star rating. Six months after Geetworks rebuilt it, we're at 4.8 — and support tickets dropped by two-thirds.",
    name: "Sarah D'Souza",
    role: "CPO, RetailKart",
    initials: "SD",
    hue: "from-cyan-500 to-blue-500",
  },
  {
    quote:
      "The rare agency that pushes back — respectfully — when you're about to build the wrong thing. That honesty saved us months.",
    name: "Rohan Iyer",
    role: "CTO, MedSync",
    initials: "RI",
    hue: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "Fixed price, delivered early, zero drama. Our board now asks why every vendor can't work like this.",
    name: "Priya Nair",
    role: "CEO, EduSpark",
    initials: "PN",
    hue: "from-amber-500 to-orange-500",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const go = useCallback((next: number, d: number) => {
    setDir(d);
    setIndex((next + QUOTES.length) % QUOTES.length);
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => go(index + 1, 1), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [index, go]);

  const q = QUOTES[index];

  return (
    <section id="testimonials" className="relative bg-paper py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          kicker="Client love"
          title="Don't take our word for it"
          subtitle="Real founders, real products, real results."
        />

        <div className="relative">
          <div className="card-ring min-h-[320px] overflow-hidden rounded-[2rem] bg-white p-8 shadow-card sm:p-12">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: 80 * dir }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 * dir }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 font-display text-6xl leading-none text-brand-200">&ldquo;</div>
                <blockquote className="-mt-6 mb-8 font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                  {q.quote}
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${q.hue} font-display text-base font-bold text-white`}
                  >
                    {q.initials}
                  </div>
                  <div>
                    <p className="font-display font-bold text-ink">{q.name}</p>
                    <p className="text-sm text-ink-mute">{q.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(index - 1, -1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-white text-xl text-ink shadow-card transition-all hover:border-brand-600/50 hover:shadow-card-hover"
            >
              ←
            </button>
            <div className="flex gap-2">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > index ? 1 : -1)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-gradient-to-r from-brand-600 to-cyan-400" : "w-2.5 bg-ink/15 hover:bg-ink/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(index + 1, 1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-white text-xl text-ink shadow-card transition-all hover:border-brand-600/50 hover:shadow-card-hover"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
