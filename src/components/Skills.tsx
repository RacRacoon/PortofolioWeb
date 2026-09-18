import Section from "./Section";
import Reveal from "./Reveal";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Keahlian">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 2) * 80}>
            <div className="glass card-glow rounded-xl p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-purple">
                {s.group}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/90 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
