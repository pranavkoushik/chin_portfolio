"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "4+", label: "Years Building Brands" },
  { value: "300+", label: "Brand Events Captured" },
  { value: "50+", label: "Paid Campaigns Managed" },
  { value: "100+", label: "Marketing Videos" },
  { value: "35%", label: "Avg. Reach Growth" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-24 px-4 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-2 font-[family-name:var(--font-playfair)] group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-500">
                {stat.value}
              </div>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-mono">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
