import Section from "./Section";
import Reveal from "./Reveal";
import { education, organizations, misc } from "@/data/profile";

export default function Education() {
  return (
    <Section id="education" index="05" title="Pendidikan & Organisasi">
      <div className="grid gap-5 sm:grid-cols-2">
        <Reveal className="glass card-glow rounded-xl p-6">
          <h3 className="text-lg font-medium text-foreground">{education.school}</h3>
          <p className="mt-1 text-sm text-purple">
            {education.degree} · NRP {education.nrp}
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            {education.affiliations.map((a, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-yellow" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {organizations.map((org, oi) => (
          <Reveal key={org.org} delay={(oi + 1) * 80} className="glass card-glow rounded-xl p-6">
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
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur-sm"
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

      {misc.length > 0 && (
        <Reveal className="glass card-glow mt-5 rounded-xl p-6">
          {misc.map((m) => (
            <div key={m.title}>
              <h3 className="text-sm font-medium text-foreground">{m.title}</h3>
              <p className="mt-1 text-sm text-muted">{m.detail}</p>
            </div>
          ))}
        </Reveal>
      )}
    </Section>
  );
}
