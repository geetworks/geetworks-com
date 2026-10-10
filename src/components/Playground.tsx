"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const TYPES = [
  { id: "web", label: "Website", base: 4000, weeks: 6 },
  { id: "mobile", label: "Mobile app", base: 12000, weeks: 12 },
  { id: "saas", label: "SaaS platform", base: 25000, weeks: 18 },
] as const;

const ADDONS = [
  { id: "design", label: "Premium UI/UX design", cost: 3500, weeks: 2 },
  { id: "cms", label: "CMS / admin panel", cost: 2500, weeks: 2 },
  { id: "payments", label: "Payments integration", cost: 1800, weeks: 1 },
  { id: "ai", label: "AI features", cost: 6000, weeks: 4 },
  { id: "analytics", label: "Analytics & dashboards", cost: 2200, weeks: 2 },
] as const;

function fmt(n: number) {
  return "$" + n.toLocaleString();
}

export default function Playground() {
  const [type, setType] = useState<(typeof TYPES)[number]["id"]>("web");
  const [addons, setAddons] = useState<string[]>(["design"]);

  const active = TYPES.find((t) => t.id === type)!;
  const selected = ADDONS.filter((a) => addons.includes(a.id));

  const total = useMemo(
    () => active.base + selected.reduce((s, a) => s + a.cost, 0),
    [active, selected]
  );
  const weeks = useMemo(
    () => active.weeks + selected.reduce((s, a) => s + a.weeks, 0),
    [active, selected]
  );

  const toggle = (id: string) =>
    setAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section className="relative overflow-hidden bg-paper-soft py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-light [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Try it live"
          title="Estimate your project in seconds"
          subtitle="Play with the options — this is the same scoping logic we use on real discovery calls."
        />

        <Reveal>
          <div className="card-ring grid overflow-hidden rounded-[2rem] bg-white shadow-card lg:grid-cols-5">
            {/* Controls */}
            <div className="p-8 sm:p-10 lg:col-span-3">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-ink-mute">
                1 · What are we building?
              </p>
              <div className="mb-10 grid grid-cols-3 gap-3">
                {TYPES.map((t) => (
                  <motion.button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    whileTap={{ scale: 0.96 }}
                    className={`rounded-2xl border-2 px-3 py-4 font-display text-sm font-bold transition-all sm:text-base ${
                      type === t.id
                        ? "border-brand-600 bg-brand-50 text-brand-700 shadow-glow"
                        : "border-ink/10 bg-white text-ink-soft hover:border-ink/25"
                    }`}
                  >
                    {t.label}
                  </motion.button>
                ))}
              </div>

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-ink-mute">
                2 · Add capabilities
              </p>
              <div className="space-y-3">
                {ADDONS.map((a) => {
                  const on = addons.includes(a.id);
                  return (
                    <motion.button
                      key={a.id}
                      onClick={() => toggle(a.id)}
                      whileTap={{ scale: 0.98 }}
                      className={`flex w-full items-center justify-between rounded-2xl border-2 px-5 py-4 text-left transition-all ${
                        on
                          ? "border-brand-600/60 bg-brand-50/60"
                          : "border-ink/10 bg-white hover:border-ink/25"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-lg border-2 text-xs font-bold text-white transition-all ${
                            on ? "border-brand-600 bg-brand-600" : "border-ink/20 bg-white"
                          }`}
                        >
                          {on ? "✓" : ""}
                        </span>
                        <span className="font-medium text-ink">{a.label}</span>
                      </span>
                      <span className="text-sm font-semibold text-ink-mute">+{fmt(a.cost)}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Result */}
            <div className="relative flex flex-col justify-center overflow-hidden bg-ink p-8 text-white sm:p-10 lg:col-span-2">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-600/40 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan-500/30 blur-3xl"
              />
              <p className="relative mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Your estimate
              </p>
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={total}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className="relative font-display text-5xl font-bold tracking-tight sm:text-6xl"
                >
                  {fmt(total)}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="popLayout">
                <motion.p
                  key={weeks}
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -12, opacity: 0 }}
                  className="relative mt-3 text-lg text-white/75"
                >
                  ≈ {weeks} weeks, start to launch
                </motion.p>
              </AnimatePresence>
              <div className="relative mt-8 space-y-2 text-sm text-white/60">
                <p>✓ Fixed price, locked before we start</p>
                <p>✓ Weekly demos from week one</p>
                <p>✓ You own 100% of the code</p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-display text-sm font-bold text-ink"
              >
                Get the exact quote →
              </motion.a>
              <p className="relative mt-4 text-xs text-white/40">
                Ballpark only — final quote after a free discovery call.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
