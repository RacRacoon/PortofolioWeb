import Section from "./Section";
import Reveal from "./Reveal";
import { ventures } from "@/data/profile";

export default function Ventures() {
  return (
    <Section id="ventures" index="03" title="Usaha & Kewirausahaan">
      <p className="mb-8 -mt-4 text-sm text-muted">Di bawah entitas B401 Lab</p>
      <div className="grid gap-5 sm:grid-cols-2">
        {ventures.map((v, i) => (
          <Reveal key={v.org} delay={i * 80} variant={i % 2 === 0 ? "left" : "right"}>
          <article
            className="glass card-glow h-full rounded-xl p-6"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-yellow">
              {v.title}
            </p>
            <h3 className="mt-1 text-lg font-medium text-foreground">{v.org}</h3>
            <p className="mt-2 text-sm text-purple">{v.tagline}</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              {v.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
