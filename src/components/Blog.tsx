"use client";

import { motion } from "framer-motion";

const ARTICLES = [
  {
    title: "Why Data Without Story Is Just Numbers",
    excerpt:
      "How blending analytical rigor with narrative craft creates campaigns that connect, not just convert.",
    category: "Marketing Analytics",
    readTime: "Coming Soon",
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "What Filmmaking Taught Me About Brand Strategy",
    excerpt:
      "Six years behind a camera shaped how I think about audience, emotion, and making people genuinely care.",
    category: "Visual Storytelling",
    readTime: "Coming Soon",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Tools Every Marketing Analyst Should Know",
    excerpt:
      "A practical guide to the tools reshaping research, planning, execution, and measurement in 2025.",
    category: "AI & Marketing",
    readTime: "Coming Soon",
    color: "from-purple-500 to-pink-500",
  },
];

export default function Blog() {
  return (
    <section
      className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden"
      id="journal"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-[family-name:var(--font-playfair)]">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              Journal
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Thoughts on marketing, data, storytelling, and the spaces where
            they intersect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ARTICLES.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block h-full"
            >
              <div className="h-full bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 flex flex-col">
                <div className={`h-1.5 bg-gradient-to-r ${article.color}`} />

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-amber-300 border border-amber-500/10">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-600 font-mono">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors font-[family-name:var(--font-playfair)]">
                    {article.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center text-amber-400/50 font-medium text-sm">
                    Coming Soon <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
