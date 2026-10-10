"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

const inputCls =
  "w-full rounded-2xl border-2 border-ink/10 bg-white px-5 py-4 text-ink placeholder:text-ink-mute outline-none transition-all focus:border-brand-600 focus:shadow-glow";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-28">
      <div aria-hidden className="absolute inset-0">
        <motion.div
          className="absolute -left-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-32 top-10 h-[24rem] w-[24rem] rounded-full bg-cyan-100/60 blur-3xl"
          animate={{ x: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          kicker="Get in touch"
          title="Let's build something great"
          subtitle="Tell us about your project. We reply within one business day — usually much faster."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="card-ring rounded-[2rem] bg-white p-8 shadow-card sm:p-10">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-3xl text-white shadow-glow"
                    >
                      ✓
                    </motion.div>
                    <h3 className="mb-3 font-display text-3xl font-bold text-ink">
                      Message received!
                    </h3>
                    <p className="max-w-sm text-ink-soft">
                      Thanks, {form.name.split(" ")[0] || "there"}. We&apos;ll get back to you within
                      one business day with next steps.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={submit}
                    exit={{ opacity: 0, y: -16 }}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
                          Your name
                        </label>
                        <input
                          id="name"
                          required
                          value={form.name}
                          onChange={set("name")}
                          placeholder="Jane Cooper"
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={set("email")}
                          placeholder="jane@company.com"
                          className={inputCls}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-2 block text-sm font-semibold text-ink">
                        Budget range
                      </label>
                      <select id="budget" value={form.budget} onChange={set("budget")} className={inputCls}>
                        <option value="">Select a range…</option>
                        <option>Under $5k</option>
                        <option>$5k – $15k</option>
                        <option>$15k – $50k</option>
                        <option>$50k+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                        Project details
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="What are you building? What does success look like?"
                        className={`${inputCls} resize-none`}
                      />
                    </div>
                    <Magnetic strength={0.25} className="w-full">
                      <motion.button
                        type="submit"
                        whileTap={{ scale: 0.98 }}
                        className="group relative w-full overflow-hidden rounded-full bg-ink py-4 font-display text-base font-bold text-white shadow-card"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-brand-600 via-violet-500 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0" />
                        <span className="relative">Send message →</span>
                      </motion.button>
                    </Magnetic>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              {[
                { t: "Email us", d: "hello@geetworks.com", icon: "✉" },
                { t: "Response time", d: "Within 1 business day", icon: "◷" },
                { t: "Based in", d: "India · working worldwide", icon: "◍" },
              ].map((c) => (
                <motion.div
                  key={c.t}
                  whileHover={{ x: 8 }}
                  className="card-ring flex items-center gap-5 rounded-3xl bg-white p-6 shadow-card"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-500 text-xl text-white">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-ink-mute">{c.t}</p>
                    <p className="font-display font-bold text-ink">{c.d}</p>
                  </div>
                </motion.div>
              ))}
              <div className="card-ring rounded-3xl bg-gradient-to-br from-brand-600 via-violet-600 to-brand-700 p-6 text-white shadow-glow">
                <p className="font-display text-lg font-bold">Prefer to talk?</p>
                <p className="mt-1 text-sm text-white/75">
                  Book a free 30-minute discovery call. No pitch, just a plan.
                </p>
                <a
                  href="mailto:hello@geetworks.com?subject=Discovery%20call"
                  className="mt-4 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-bold text-ink"
                >
                  Book a call
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
