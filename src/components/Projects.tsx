"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: "google-pixel",
    mission: "01",
    title: "Consumer Research · Conjoint Analysis",
    subtitle: "Google Pixel",
    category: "Research · Analytics",
    status: "Complete",
    description:
      "Decoded how consumers prioritise features when choosing a smartphone in a crowded premium market.",
    longDescription:
      "Used conjoint analysis to simulate real-world feature trade-offs. Designed a conjoint survey across 6 key attributes, collected preference data, and ran utility-score analysis to rank feature impact. Users would accept a $50 price increase for a 20% battery improvement — reshaping how Pixel communicates value vs. Samsung and iPhone.",
    outcome:
      "Battery life and camera quality outweigh price sensitivity in Pixel's core demographic — directly informing positioning and pricing strategy.",
    tools: ["SPSS", "Survey Design", "Data Visualization"],
    color: "from-blue-600/20 to-cyan-500/20",
    hoverColor: "group-hover:from-blue-600/40 group-hover:to-cyan-500/40",
    span: "md:col-span-2 md:row-span-2",
    mediaUrl:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "aldi",
    mission: "02",
    title: "Brand Strategy · Perceptual Mapping",
    subtitle: "Aldi",
    category: "Strategy · Tableau",
    status: "Complete",
    description:
      "Mapped Aldi's brand position vs. competitors and surfaced untapped positioning opportunities in the US grocery market.",
    longDescription:
      "Consumer-perception survey across 8 brand attributes; two-axis perceptual map built in Tableau identifying competitive clusters. Mapped Aldi against 6 grocery retailers on 'price vs. quality' and 'conventional vs. specialty' axes. Found Aldi in a unique quadrant — high perceived value but underperforming on 'quality storytelling,' a major narrative gap.",
    outcome:
      "Surfaced an untapped 'quality-value' positioning gap — clear differentiation against Whole Foods and Trader Joe's.",
    tools: ["Tableau", "Consumer Surveys", "Excel"],
    color: "from-amber-600/20 to-orange-500/20",
    hoverColor: "group-hover:from-amber-600/40 group-hover:to-orange-500/40",
    span: "md:col-span-1 md:row-span-2",
    mediaUrl:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl:
      "https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "heal-circle",
    mission: "03",
    title: "Qualitative Research · Ethnographic Study",
    subtitle: "Heal Circle",
    category: "Ethnography · Insights",
    status: "Research",
    description:
      "Understood emotional and behavioral drivers behind wellness-community engagement and retention.",
    longDescription:
      "Weeks of observational research synthesised through affinity mapping and thematic coding. Insight — members stay for relationships, not programs — led to a pivoted community architecture: content-first to accountability-partner pairing as the core experience.",
    outcome:
      "Peer accountability — not content quality — is the primary retention driver, reshaping Heal Circle's community strategy.",
    tools: ["Ethnography", "Thematic Analysis", "Insights Report"],
    color: "from-emerald-600/20 to-teal-500/20",
    hoverColor: "group-hover:from-emerald-600/40 group-hover:to-teal-500/40",
    span: "md:col-span-1 md:row-span-1",
    mediaUrl:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "netflix",
    mission: "04",
    title: "Strategic Marketing Plan",
    subtitle: "Netflix",
    category: "Strategy · Planning",
    status: "Complete",
    description:
      "Developed a differentiated growth strategy to arrest subscriber churn amid intensifying streaming competition.",
    longDescription:
      "Comprehensive plan addressing Netflix's post-pandemic subscriber plateau. Competitive analysis vs. Disney+, HBO Max, Amazon Prime; segmentation-led content marketing with personalized acquisition funnels per cohort, projected LTV modeling, and phased rollout across paid, organic, and partnership channels.",
    outcome:
      "A content-personalization + community-engagement strategy designed to reduce churn by targeting highest-value cohorts.",
    tools: ["Market Research", "Strategy Frameworks", "Deck Presentation"],
    color: "from-red-600/20 to-rose-500/20",
    hoverColor: "group-hover:from-red-600/40 group-hover:to-rose-500/40",
    span: "md:col-span-2 md:row-span-1",
    mediaUrl:
      "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    demoUrl:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section
      className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden"
      id="projects"
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
            Mission{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Briefings
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Featured analytics and strategy projects — where data meets
            storytelling to drive real business outcomes.
          </p>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]"
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={project.id}
                onClick={() => setSelectedId(project.id)}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-md ${project.span}`}
                whileHover={{ scale: 1.015 }}
              >
                <img
                  src={project.mediaUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} ${project.hoverColor} transition-all duration-500 opacity-60 group-hover:opacity-80 mix-blend-overlay`}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-amber-300 backdrop-blur-md">
                        Mission {project.mission}
                      </span>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider backdrop-blur-md border ${
                          project.status === "Complete"
                            ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                            : "bg-amber-500/10 border-amber-500/20 text-amber-300"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <p className="text-amber-300/60 text-xs font-mono uppercase tracking-wider mb-2">
                      {project.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform drop-shadow-lg">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-3 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-md">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                      {project.tools.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase tracking-wider text-white/80 bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[60]"
              />
              <div className="fixed inset-0 flex items-center justify-center z-[70] pointer-events-auto p-4 md:p-8">
                <motion.div
                  layoutId={selectedId}
                  className="bg-[#111] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 shadow-2xl relative"
                >
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="flex flex-col md:flex-row h-full">
                    <div className="w-full md:w-2/5 min-h-[300px] relative overflow-hidden flex flex-col justify-end p-8">
                      <img
                        src={selectedProject.demoUrl || selectedProject.mediaUrl}
                        alt={selectedProject.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-b ${selectedProject.color} mix-blend-overlay opacity-80`}
                      />
                      <div className="absolute inset-0 bg-black/30" />

                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10 inline-block px-3 py-1 rounded-full bg-black/40 text-xs font-mono text-amber-300 mb-2 w-fit border border-white/10 backdrop-blur-md"
                      >
                        Mission {selectedProject.mission} · {selectedProject.subtitle}
                      </motion.span>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative z-10 text-3xl font-bold text-white leading-tight tracking-tight drop-shadow-xl font-[family-name:var(--font-playfair)]"
                      >
                        {selectedProject.title}
                      </motion.h3>
                    </div>

                    <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#111]">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                          Strategy & Approach
                        </h4>
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                          {selectedProject.longDescription}
                        </p>

                        <div className="mb-8 p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                          <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3">
                            Key Outcome
                          </h4>
                          <p className="text-gray-300 leading-relaxed">
                            {selectedProject.outcome}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                            Tools & Methods
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tools.map((tool, i) => (
                              <motion.span
                                key={tool}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + i * 0.05 }}
                                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-gray-200 border border-white/5 transition-colors cursor-default"
                              >
                                {tool}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
