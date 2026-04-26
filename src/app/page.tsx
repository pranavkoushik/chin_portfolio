import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Dock from "@/components/Dock";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <Hero />
      <Story />
      <Stats />
      <Projects />
      <Skills />
      <Timeline />
      <Blog />
      <Contact />
      <Dock />
    </main>
  );
}
