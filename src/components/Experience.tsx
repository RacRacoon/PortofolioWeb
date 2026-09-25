"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { experience, type Experience as ExperienceItem } from "@/data/profile";

const TITLE_SCALE = 0.45;

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const cover = exp.images?.[0];
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [titleH, setTitleH] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const active = open || hover;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.4,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setTitleH(el.offsetHeight));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
      className="group relative isolate h-[22rem] cursor-pointer overflow-hidden rounded-2xl border border-purple/40 shadow-[0_30px_60px_-30px_rgba(168,85,247,0.45)] sm:h-[26rem]"
    >
      {cover ? (
        <Image
          src={cover.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="-z-20 object-cover brightness-[0.7]"
        />
      ) : (
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_70%_20%,rgba(168,85,247,0.55),transparent_60%),radial-gradient(ellipse_at_10%_90%,rgba(250,204,21,0.25),transparent_55%)]" />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#120a24]/80 via-[#1b1140]/65 to-[#241a55]/50" />
      <div
        className={`absolute inset-0 -z-10 bg-black/70 transition-opacity duration-300 group-hover:opacity-100 ${
          open ? "opacity-100" : "opacity-30"
        }`}
      />

      <div
        aria-hidden
        data-in={inView}
        className="card-cover absolute inset-0 bg-gradient-to-br from-[#120a24] via-[#2a1466] to-[#4a1f9c]"
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-700 sm:px-14 [text-shadow:0_2px_14px_rgba(0,0,0,0.65)] ${
          inView ? "opacity-100 delay-500" : "opacity-0"
        }`}
      >
        <div
          className="w-full transition-[height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={titleH ? { height: active ? titleH * TITLE_SCALE : titleH } : undefined}
        >
          <div
            ref={titleRef}
            className={`origin-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
              active ? "scale-[0.45]" : "scale-100"
            }`}
          >
            <h3 className="font-wide text-[clamp(2rem,7.5vw,5rem)] font-black uppercase leading-[1.05] text-white">
              {exp.title}
            </h3>
            <p className="font-label mt-3 text-xl text-yellow sm:text-3xl">{exp.org}</p>
            <p className="mt-1 font-mono text-xs text-white/70">{exp.period}</p>
          </div>
        </div>

        <div
          className={`grid w-full transition-[grid-template-rows,opacity] duration-700 ease-out ${
            active ? "grid-rows-[1fr] opacity-100 delay-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <p className="mx-auto max-w-2xl pt-4 text-sm leading-relaxed text-white sm:text-lg">
              {exp.summary}
            </p>
          </div>
        </div>

        <p className="mt-3 hidden text-xs text-white/60 [@media(hover:none)]:block">
          {open ? "Ketuk untuk menutup" : "Ketuk untuk ringkasan"}
        </p>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <Section id="experience" index="01" title="Pengalaman Profesional">
      <div className="space-y-8">
        {experience.map((exp) => (
          <ExperienceCard key={exp.title + exp.org} exp={exp} />
        ))}
      </div>
    </Section>
  );
}
