"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
};

/** 3D tilt-on-hover card with optional glare sweep. Desktop only. */
export default function TiltCard({ children, className, maxTilt = 8, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ rx: (0.5 - py) * maxTilt * 2, ry: (px - 0.5) * maxTilt * 2 });
    setGlarePos({ x: px * 100, y: py * 100 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        setTilt({ rx: 0, ry: 0 });
      }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={{ transformStyle: "preserve-3d", perspective: 900 }}
    >
      <div className="relative h-full overflow-hidden rounded-3xl">
        {children}
        {glare && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: hovering ? 1 : 0,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.55), transparent 60%)`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
