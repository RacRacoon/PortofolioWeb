import Section from "./Section";
import Reveal from "./Reveal";
import { Gallery } from "./Lightbox";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" index="01" title="Pengalaman Profesional">
      <div className="space-y-8">
        {experience.map((exp, i) => (
          <Reveal
            key={exp.title + exp.org}
            delay={i * 80}
            variant={i % 2 === 0 ? "left" : "right"}
            className={`glass card-glow rounded-xl p-6 ${
              exp.images ? "grid gap-6 sm:grid-cols-[minmax(0,220px)_1fr]" : ""
            }`}
          >
            {exp.images && <Gallery images={exp.images} className="h-48 sm:h-full" />}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium text-foreground">{exp.title}</h3>
                <span className="font-mono text-xs text-muted">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-purple">
                {exp.org}
                {exp.location ? ` · ${exp.location}` : ""}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {exp.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
