"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const photos = ["hero8.png", "hero13.png", "hero10.png", "hero11.png", "hero12.png","hero14.png", "hero15.png", "hero16.png"];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(true);
  const playing = !paused && !reducedMotion && visible;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % photos.length), 5000);
    return () => window.clearTimeout(timer);
  }, [active, playing]);

  return (
    <div className="absolute inset-0 bg-[#073C32]" role="region" aria-roledescription="carousel" aria-label="Kenya travel photos">
      {photos.map((photo, index) => (
        <div
          key={photo}
          aria-hidden="true"
          className={`hero-slide absolute inset-0 overflow-hidden ${index === active ? "opacity-100" : "opacity-0"}`}
        >
          <div className="hero-slide-motion absolute inset-0" data-active={index === active} style={{ animationPlayState: playing ? "running" : "paused" }}>
            <Image src={`/images/${photo}`} alt="" fill sizes="100vw" loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} className="object-cover object-center" />
          </div>
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-4 z-20 flex items-center justify-center gap-2">
        <div className="flex items-center rounded-full border border-white/20 bg-black/35 px-2 backdrop-blur-sm">
          {photos.map((photo, index) => (
            <button key={photo} type="button" aria-label={`Show photo ${index + 1} of ${photos.length}`} aria-pressed={active === index} onClick={() => { setActive(index); setPaused(true); }} className="flex h-11 w-9 items-center justify-center">
              <span className={`h-1.5 rounded-full transition-all duration-300 ${active === index ? "w-6 bg-[#D6A23B]" : "w-1.5 bg-white/65"}`} />
            </button>
          ))}
        </div>
        {/* {!reducedMotion && (
          <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play photo carousel" : "Pause photo carousel"} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-sm">
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
        )} */}
      </div>
    </div>
  );
}
