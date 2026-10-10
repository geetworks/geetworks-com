"use client";

import Reveal from "./Reveal";

const ROW1 = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "React Native",
  "Flutter",
  "Python",
  "Go",
];
const ROW2 = [
  "AWS",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Tailwind CSS",
  "Figma",
  "TensorFlow",
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden">
      <div
        className="marquee-track flex shrink-0 animate-marquee items-center gap-4 pr-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-ink/10 bg-white px-6 py-3 font-display text-sm font-semibold text-ink-soft shadow-card transition-colors hover:border-brand-600/40 hover:text-brand-700"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden bg-paper-soft py-20">
      <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-ink-mute">
            The stack we ship with
          </p>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <div className="space-y-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <Row items={ROW1} />
          <Row items={ROW2} reverse />
        </div>
      </Reveal>
    </section>
  );
}
