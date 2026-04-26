"use client";

import { useTransform, motion } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: any }) {
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.18, 0.24], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.28, 0.34, 0.48, 0.54], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.58, 0.64, 0.78, 0.84], [0, 1, 1, 0]);

  const y1 = useTransform(scrollYProgress, [0, 0.24], [30, -40]);
  const y2 = useTransform(scrollYProgress, [0.28, 0.54], [40, -40]);
  const y3 = useTransform(scrollYProgress, [0.58, 0.84], [40, -40]);

  const scale1 = useTransform(scrollYProgress, [0, 0.05, 0.18, 0.24], [0.96, 1, 1, 0.96]);
  const scale2 = useTransform(scrollYProgress, [0.28, 0.34, 0.48, 0.54], [0.96, 1, 1, 0.96]);
  const scale3 = useTransform(scrollYProgress, [0.58, 0.64, 0.78, 0.84], [0.96, 1, 1, 0.96]);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center">
      {/* Section 1 — Name reveal */}
      <motion.div
        style={{ opacity: opacity1, y: y1, scale: scale1 }}
        className="absolute inset-0 flex items-center justify-center p-8"
      >
        <div className="text-center">
          <p className="text-xs md:text-sm font-mono uppercase tracking-[0.35em] text-white/60 mb-6">
            Marketing Analyst & Visual Storyteller
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white font-[family-name:var(--font-playfair)] leading-[0.9]">
            Chinmay N
            <br />
            Bharadwaj<span className="text-amber-400">.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/50 font-light tracking-wide">
            Bengaluru → Chicago
          </p>
        </div>
      </motion.div>

      {/* Section 2 — Tagline */}
      <motion.div
        style={{ opacity: opacity2, y: y2, scale: scale2 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-20 lg:p-28"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-amber-400/60 mb-4">
            My Philosophy
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-white font-[family-name:var(--font-playfair)]">
            Marketing is my lens.
            <br />
            <span className="text-amber-400">Data</span> is my language.
          </h2>
        </div>
      </motion.div>

      {/* Section 3 — Closer */}
      <motion.div
        style={{ opacity: opacity3, y: y3, scale: scale3 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-20 lg:p-28 text-right"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-amber-400/60 mb-4">
            The Intersection
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-white font-[family-name:var(--font-playfair)]">
            The filmmaker &
            <br />
            <span className="text-amber-400">the analyst</span> —<br />
            same person.
          </h2>
        </div>
      </motion.div>

      {/* Scroll indicator at the very bottom */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.05, 0.1], [1, 1, 0]),
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </div>
  );
}
