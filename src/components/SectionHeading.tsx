"use client";

import SplitText from "./SplitText";
import Reveal from "./Reveal";

type Props = {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ kicker, title, subtitle, align = "center" }: Props) {
  const centered = align === "center";
  return (
    <div className={`mb-14 ${centered ? "text-center" : "text-left"}`}>
      <Reveal>
        <p
          className={`mb-4 inline-flex items-center gap-2 rounded-full border border-brand-600/20 bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-700`}
        >
          {kicker}
        </p>
      </Reveal>
      <SplitText
        as="h2"
        text={title}
        className={`font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl ${
          centered ? "mx-auto max-w-3xl" : "max-w-2xl"
        }`}
      />
      {subtitle && (
        <Reveal delay={0.25}>
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft ${
              centered ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
