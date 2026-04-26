"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const CHALLENGES = [
  { label: "Brand Awareness", icon: "📢" },
  { label: "Consumer Insights", icon: "🔍" },
  { label: "Creative Content", icon: "🎬" },
  { label: "Campaign Performance", icon: "📈" },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      setFormState({ name: "", email: "", topic: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden"
      id="contact"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-orange-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Challenge Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-amber-400/60 mb-4">
            What Can I Do For You?
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-[family-name:var(--font-playfair)]">
            What's your biggest marketing challenge?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {CHALLENGES.map((c, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() =>
                  setFormState((s) => ({
                    ...s,
                    topic: c.label,
                    message: `I need help with ${c.label.toLowerCase()}. `,
                  }))
                }
                className={`px-6 py-3 rounded-full border text-sm font-medium transition-all duration-300 ${
                  formState.topic === c.label
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                    : "bg-white/[0.03] border-white/[0.06] text-gray-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                <span className="mr-2">{c.icon}</span>
                {c.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight font-[family-name:var(--font-playfair)]">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                connect.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Open to full-time opportunities and collaboration. Based in
              Chicago, IL — open to relocate. Typically responds within 24–48
              hours.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <a
                href="mailto:connect@chinmaynb.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className="text-lg">connect@chinmaynb.com</span>
              </a>

              <div className="flex items-center gap-4">
                <SocialLink
                  href="https://linkedin.com/in/chinmaynb"
                  icon={<LinkedinIcon />}
                  label="LinkedIn"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <p className="text-xs font-mono uppercase tracking-widest text-amber-400/50 mb-3">
                Current Status
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>
                  <span className="text-white">Studying:</span> M.S. Marketing
                  Analysis @ DePaul — Class of 2026
                </p>
                <p>
                  <span className="text-white">Leading:</span> VP Social
                  Strategy, Kellstadt Marketing Group
                </p>
                <p>
                  <span className="text-white">Creating:</span> Digital
                  campaigns at DePaul Humanities Center
                </p>
                <p>
                  <span className="text-white">Based in:</span> Chicago, IL —
                  CST / CDT
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="topic"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Topic
                </label>
                <select
                  id="topic"
                  value={formState.topic}
                  onChange={(e) =>
                    setFormState({ ...formState, topic: e.target.value })
                  }
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="" className="bg-[#111]">
                    Select a topic...
                  </option>
                  <option value="Job Opportunity" className="bg-[#111]">
                    Job Opportunity
                  </option>
                  <option
                    value="Freelance / Collaboration"
                    className="bg-[#111]"
                  >
                    Freelance / Collaboration
                  </option>
                  <option value="Just Saying Hi" className="bg-[#111]">
                    Just Saying Hi
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  "Message Sent!"
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-gray-600 font-mono text-sm">
          <p>
            &copy; {new Date().getFullYear()} Chinmay N Bharadwaj · Chicago, IL
          </p>
        </footer>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-white/5 border border-white/[0.06] flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
