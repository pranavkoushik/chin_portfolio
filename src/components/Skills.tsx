"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Marketing",
    accent: "text-amber-300",
    items: [
      "Social Media Marketing",
      "Content Strategy",
      "Brand Marketing",
      "Copywriting",
      "Strategic Planning",
    ],
  },
  {
    category: "Analytics",
    accent: "text-blue-300",
    items: [
      "Marketing Analytics",
      "Tableau",
      "Google Ads",
      "Meta Ads",
      "SPSS",
      "AI Tools for Marketing",
    ],
  },
  {
    category: "Creative",
    accent: "text-purple-300",
    items: [
      "Visual Storytelling",
      "Content Creation",
      "Adobe Creative Suite",
      "Prompt Engineering",
      "Cinematography",
    ],
  },
  {
    category: "Professional",
    accent: "text-emerald-300",
    items: [
      "Project Management",
      "Consumer Research",
      "Conjoint Analysis",
      "Perceptual Mapping",
      "Ethnographic Research",
    ],
  },
];

export default function Skills() {
  return (
    <section
      className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden"
      id="skills"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-playfair)]">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A blend of analytical rigour, creative craft, and strategic thinking
            — where data-driven insights meet visual storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500"
            >
              <h3
                className={`text-2xl font-bold ${group.accent} mb-6 uppercase tracking-wider`}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-black/40 rounded-full text-sm text-gray-300 border border-white/10 hover:border-white/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
