"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const TIMELINE_DATA = [
  {
    year: "2025 → Present",
    title: "Student Assistant",
    org: "DePaul Humanities Center · Chicago, IL",
    description:
      "Digital communications, newsletters, and social media management. Audience reach up ~35%, with event campaigns driving a 25% rise in participation.",
    type: "work",
  },
  {
    year: "2024 → 2026",
    title: "M.S. in Marketing Analysis",
    org: "DePaul University · Driehaus School of Business",
    description:
      "Dean's Scholar. Specialising in conjoint analysis, perceptual mapping, consumer behaviour research, and data-driven campaign strategy.",
    type: "education",
  },
  {
    year: "2024 → Present",
    title: "VP of Social Strategy",
    org: "Kellstadt Marketing Group (KMG) · DePaul",
    description:
      "Driving 30% engagement increase across DePaul's networks. Leadership through creativity, not authority.",
    type: "work",
  },
  {
    year: "2023 → 2024",
    title: "Freelance Cinematographer & Editor",
    org: "Remote · 10+ Clients",
    description:
      "100% client satisfaction with data-informed creative strategy. Delivered end-to-end visual storytelling for brand campaigns and events.",
    type: "work",
  },
  {
    year: "2022 → 2023",
    title: "Cinematographer, Editor & Marketing Assistant",
    org: "Lightbucket Productions · Bengaluru, India",
    description:
      "100+ marketing videos shot and edited. Managed 50+ paid campaigns across Google, Meta & Instagram. Drove 20% reach growth.",
    type: "work",
  },
  {
    year: "2020 → 2022",
    title: "Photographer & Marketing Coordinator",
    org: "Quadcore Media House · Bengaluru, India",
    description:
      "150+ visual assets created across 300+ brand events. Built visual consistency at scale for multiple brand identities.",
    type: "work",
  },
  {
    year: "2020 → 2023",
    title: "B.S. in Digital Filmmaking",
    org: "Jain University · Bengaluru, India",
    description:
      "Developed creative foundations in cinematography, editing, and visual storytelling that now inform every marketing campaign.",
    type: "education",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden"
      id="journey"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[20%] w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-playfair)]">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From behind the camera in Bengaluru to the analytics lab in Chicago
            — a career built at the intersection of creativity and data.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/20 via-orange-500/40 to-amber-500/20 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }: { item: (typeof TIMELINE_DATA)[number]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="hidden md:block w-1/2" />

      <div
        className={`absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full border-4 border-[#0a0a0a] transform -translate-x-1/2 z-10 ${
          item.type === "education"
            ? "bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]"
            : "bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]"
        }`}
      >
        <div
          className={`absolute inset-0 blur-sm opacity-70 ${
            item.type === "education" ? "bg-amber-300" : "bg-orange-400"
          }`}
        />
      </div>

      <div
        className={`w-full md:w-1/2 pl-12 md:pl-0 ${
          isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
        }`}
      >
        <div className="group relative p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300">
          <div
            className={`flex flex-col ${
              isEven ? "md:items-end" : "md:items-start"
            } mb-2`}
          >
            <span
              className={`text-xs font-mono px-2 py-1 rounded-full mb-2 w-fit border ${
                item.type === "education"
                  ? "text-amber-400 border-amber-500/30 bg-amber-500/10"
                  : "text-orange-400 border-orange-500/30 bg-orange-500/10"
              }`}
            >
              {item.year}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
              {item.title}
            </h3>
          </div>

          <p className="text-sm text-amber-400/60 mb-4 font-medium uppercase tracking-wider">
            {item.org}
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
