"use client";

import { motion } from "framer-motion";

const COLS = [
  {
    title: "Services",
    links: ["Web Development", "Mobile Apps", "UI/UX Design", "Cloud & DevOps", "AI/ML Solutions"],
  },
  {
    title: "Company",
    links: ["About", "Process", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl font-bold tracking-tight"
            >
              Geet<span className="bg-gradient-to-r from-brand-400 to-cyan-300 bg-clip-text text-transparent">works</span>
            </motion.p>
            <p className="mt-4 max-w-sm leading-relaxed text-white/60">
              A software development company crafting websites, apps, and cloud products people
              love. Designed with care, engineered to last.
            </p>
            <div className="mt-6 flex gap-3">
              {["𝕏", "in", "ig", "gh"].map((s) => (
                <motion.a
                  key={s}
                  href="#top"
                  aria-label={`Social link ${s}`}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-bold text-white/70 transition-colors hover:border-brand-400 hover:text-white"
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                {c.title}
              </p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-[15px] text-white/70 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Geetworks. All rights reserved.</p>
          <p>
            Built with <span className="text-gradient font-semibold">obsession</span> by Geetworks.
          </p>
        </div>
      </div>
    </footer>
  );
}
