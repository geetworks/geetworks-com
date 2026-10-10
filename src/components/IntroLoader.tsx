"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = "GEETWORKS".split("");

export default function IntroLoader({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 650);
    }, 1700);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-white"
          exit={{ y: "-100%", transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-1 font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl"
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.055, delayChildren: 0.15 } },
              }}
            >
              {LETTERS.map((l, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: "110%", rotate: 6 },
                    show: {
                      y: "0%",
                      rotate: 0,
                      transition: { type: "spring", stiffness: 260, damping: 24 },
                    },
                  }}
                  className={i >= 4 ? "text-gradient" : undefined}
                >
                  {l}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-16 h-1 w-40 overflow-hidden rounded-full bg-ink/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand-600 via-violet-500 to-cyan-400"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
