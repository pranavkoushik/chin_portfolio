"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    label: "The Filmmaker",
    title: "Origin",
    description:
      "300+ brand events on location. Cinematography isn't a past life — it's how I see every campaign.",
    icon: "🎬",
  },
  {
    label: "BLR → CHI",
    title: "Journey",
    description:
      "Bengaluru to Chicago. A culture shift and a career shift, simultaneously. Zero hesitation.",
    icon: "✈",
  },
  {
    label: "Dean's Scholar",
    title: "Achievement",
    description:
      "Dean's Scholarship at DePaul Driehaus School of Business. Academic excellence mirroring professional ambition.",
    icon: "🎓",
  },
  {
    label: "The Data Mind",
    title: "Obsession",
    description:
      "50+ campaigns managed. Learned to read data, tell its story, and make it drive action.",
    icon: "📊",
  },
  {
    label: "The Volunteer",
    title: "Values",
    description:
      "Global DePaul · Youth for Seva · CMCA. Community as a core value, not a resume line.",
    icon: "🤝",
  },
  {
    label: "The Strategist",
    title: "Leadership",
    description:
      "VP of Social Strategy at KMG, driving 30% engagement growth. Leadership through creativity, not authority.",
    icon: "🧭",
  },
];

export default function Story() {
  return (
    <section
      className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden"
      id="story"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight font-[family-name:var(--font-playfair)]">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Story
            </span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              <span className="text-white font-semibold">Act I — The Marketer & Filmmaker.</span>{" "}
              I spent years at the intersection of creativity and commerce — behind cameras, editing reels, and coordinating brand campaigns across 300+ events. I managed 50+ paid campaigns across Meta, Google, and Instagram, shot and edited 100+ marketing videos, and built content strategies that grew audiences and strengthened brand identities.
            </p>
            <p className="text-amber-400/80 font-medium italic border-l-2 border-amber-400/30 pl-6">
              The pivot: I realised the most powerful stories aren't just felt — they're proven.
            </p>
            <p>
              <span className="text-white font-semibold">Act II — The Analyst.</span>{" "}
              Enrolled at DePaul University as a Dean's Scholar in Marketing Analysis. Every campaign is now backed by conjoint analysis, perceptual mapping, consumer-behaviour research, and real data. The filmmaker and the analyst are the same person — just asking better questions now.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500"
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <p className="text-xs font-mono uppercase tracking-widest text-amber-400/70 mb-2">
                {pillar.title}
              </p>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                {pillar.label}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
