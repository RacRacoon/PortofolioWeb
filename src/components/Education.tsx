import Section from "./Section";
import Reveal from "./Reveal";
import { education, organizations } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" index="05" title="Pendidikan & Organisasi">
      <div className="grid gap-5 sm:grid-cols-2">
        <Reveal variant="left" className="glass card-glow rounded-xl p-6">
          <h3 className="text-lg font-medium text-foreground">{education.school}</h3>
          <p className="mt-1 text-sm text-purple">
            {education.degree} · NRP {education.nrp}
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            {education.affiliations.map((a, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                <div>
                  <span>{a.title}</span>
                  <ul className="mt-2 space-y-1.5">
                    {a.details.map((d) => (
                      <li key={d} className="flex gap-2 text-foreground/90">
                        <span className="mt-2 h-px w-3 shrink-0 bg-purple" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {organizations.map((org, oi) => (
          <Reveal key={org.org} delay={(oi + 1) * 80} variant="right" className="glass card-glow rounded-xl p-6">
            <h3 className="text-lg font-medium text-foreground">{org.org}</h3>
            <p className="mt-1 font-mono text-xs text-muted">
              {org.location} · {org.duration}
            </p>
            <div className="mt-4 space-y-4">
              {org.roles.map((r) => (
                <div key={r.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-medium text-foreground">{r.title}</p>
                    <span className="font-mono text-xs text-muted">{r.period}</span>
                  </div>
                  <p className="text-xs text-purple">{r.type}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {r.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-purple/30 bg-purple/10 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
