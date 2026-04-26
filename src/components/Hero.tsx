"use client";

import ScrollyVideo from "@/components/ScrollyVideo";
import Overlay from "@/components/Overlay";

export default function Hero() {
  return (
    <div className="relative" id="home">
      <ScrollyVideo src="/Cinematic_Hero_Shot_Generation.mp4">
        {(progress: any) => <Overlay scrollYProgress={progress} />}
      </ScrollyVideo>
    </div>
  );
}
