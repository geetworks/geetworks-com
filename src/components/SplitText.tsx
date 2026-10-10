"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  /** delay before the stagger starts */
  delay?: number;
  /** stagger between chars */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

/** Character-stagger text reveal on scroll into view. */
export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.022,
  as = "span",
}: Props) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const Tag = motion[as] as typeof motion.span;

  let charIndex = 0;

  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden>
          {word.split("").map((ch, ci) => {
            const i = charIndex++;
            return (
              <motion.span
                key={ci}
                className="inline-block"
                variants={{
                  hidden: { y: reduce ? 0 : "110%", rotate: reduce ? 0 : 4, opacity: 0 },
                  show: {
                    y: "0%",
                    rotate: 0,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 280, damping: 26 },
                  },
                }}
              >
                {ch}
              </motion.span>
            );
          })}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
