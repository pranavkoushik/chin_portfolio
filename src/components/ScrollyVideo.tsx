"use client";

import {
  useScroll,
  useSpring,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollyVideoProps {
  src: string;
  children?: (progress: MotionValue<number>) => ReactNode;
}

export default function ScrollyVideo({ src, children }: ScrollyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springScroll = useSpring(scrollYProgress, {
    damping: 80,
    stiffness: 200,
    mass: 0.5,
  });

  useMotionValueEvent(springScroll, "change", (latest) => {
    if (videoRef.current && videoRef.current.duration && videoRef.current.readyState > 0) {
      videoRef.current.currentTime = latest * videoRef.current.duration;
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {children && children(springScroll)}
      </div>
    </div>
  );
}
