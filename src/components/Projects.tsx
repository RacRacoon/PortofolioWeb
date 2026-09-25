"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { Gallery } from "./Lightbox";
import { projects, type Project } from "@/data/profile";

const categories: { key: Project["category"] | "all"; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "embedded", label: "Embedded / IoT" },
  { key: "ml-ai", label: "Machine Learning" },
  { key: "cv", label: "Computer Vision" },
];

function ProjectCard({
  project,
  number,
  onOpen,
}: {
  project: Project;
  number: number;
  onOpen: () => void;
}) {
  const cover = project.images?.[0];
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.4,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={ref} className="group relative isolate h-[22rem] overflow-hidden rounded-2xl border border-purple/40 shadow-[0_30px_60px_-30px_rgba(168,85,247,0.45)] sm:h-[26rem]">
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
      <div className="card-tint absolute inset-0 -z-10 bg-gradient-to-br from-[#120a24]/80 via-[#1b1140]/65 to-[#241a55]/50" />

      <div
        aria-hidden
        data-in={inView}
        className="card-cover absolute inset-0 bg-gradient-to-br from-[#120a24] via-[#2a1466] to-[#4a1f9c]"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 right-5 transition-opacity duration-500 group-hover:opacity-25 sm:-top-6 sm:right-8"
      >
        <span
          className={`font-wide block text-[6.5rem] font-black leading-none text-white/90 transition-opacity duration-700 sm:text-[10rem] ${
            inView ? "opacity-100 delay-500" : "opacity-0"
          }`}
        >
          {String(number).padStart(2, "0")}
        </span>
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-500 ease-out group-hover:translate-x-1.5 sm:p-10 [text-shadow:0_2px_14px_rgba(0,0,0,0.65)]">
        <div
          className={`transition-opacity duration-700 ${inView ? "opacity-100 delay-500" : "opacity-0"}`}
        >
        <h3 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
          {project.name}
        </h3>
        <p className="mt-2 max-w-xl font-serif text-base italic text-white/85 sm:text-lg">
          {project.tagline}
        </p>
        <button
          type="button"
          onClick={onOpen}
          className="btn-tactile font-label mt-5 inline-flex items-center gap-3 bg-yellow px-6 py-3 text-lg text-[#07070c] hover:bg-purple hover:text-white"
        >
          Lihat detail <span aria-hidden>&rarr;</span>
        </button>
        </div>
      </div>
    </article>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88svh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-purple/30 bg-surface p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="btn-tactile absolute right-4 top-4 text-2xl text-white/70 hover:text-yellow"
        >
          &#10005;
        </button>
        <h3 className="pr-8 text-2xl font-bold leading-snug text-foreground">{project.title}</h3>
        {project.period && (
          <p className="mt-1 font-mono text-xs text-muted">{project.period}</p>
        )}
        {project.images && <Gallery images={project.images} className="mt-5 h-56 sm:h-64" />}
        <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-purple/30 bg-purple/10 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]["key"]>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      projects.filter((p) => !p.hidden && (active === "all" || p.category === active)),
    [active]
  );

  return (
    <Section id="projects" index="02" title="Proyek Teknis">
      <p className="font-label -mt-6 mb-6 text-lg text-purple">Case studies</p>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`btn-tactile rounded-full border px-4 py-1.5 text-xs font-medium ${
              active === c.key
                ? "border-yellow bg-yellow text-black"
                : "border-border text-muted hover:border-purple hover:text-purple"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        {filtered.map((p, i) => (
          <ProjectCard key={p.title} project={p} number={i + 1} onOpen={() => setSelected(p)} />
        ))}
      </div>

      {selected && <ProjectDetail project={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
}
