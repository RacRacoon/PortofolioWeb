"use client";

import { useMemo, useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { Gallery } from "./Lightbox";
import { projects, type Project } from "@/data/profile";

const categories: { key: Project["category"] | "all"; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "embedded", label: "Embedded / IoT" },
  { key: "ml-ai", label: "Machine Learning" },
  { key: "cv", label: "Computer Vision" },
];

export default function Projects() {
  const [active, setActive] = useState<(typeof categories)[number]["key"]>("all");

  const filtered = useMemo(
    () => (active === "all" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <Section id="projects" index="02" title="Proyek Teknis">
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

      <div className="grid gap-5 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <Reveal
            key={p.title}
            delay={(i % 2) * 80}
            className={p.images ? "sm:col-span-2" : undefined}
          >
            <article
              className={`glass card-glow h-full rounded-xl p-6 ${
                p.images ? "grid gap-6 sm:grid-cols-[minmax(0,260px)_1fr]" : "flex flex-col"
              }`}
            >
              {p.images && (
                <Gallery images={p.images} className="h-56 sm:h-full" />
              )}
              <div className="flex flex-1 flex-col">
                <h3 className="text-base font-medium leading-snug text-foreground">
                  {p.title}
                </h3>
                {p.period && (
                  <p className="mt-1 font-mono text-xs text-muted">{p.period}</p>
                )}
                <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-muted">
                  {p.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
