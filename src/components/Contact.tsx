import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-5xl overflow-hidden px-6 py-20 sm:py-28"
    >
      <div className="orb orb-purple orb-float left-1/4 top-0 h-64 w-64" />
      <div
        className="orb orb-yellow orb-float right-1/4 bottom-0 h-56 w-56"
        style={{ animationDelay: "-6s" }}
      />
      <Reveal variant="scale" className="glass-strong relative z-10 rounded-2xl p-10 text-center sm:p-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-yellow">
          06 · Kontak
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-foreground text-glow-purple sm:text-4xl">
          Mari terhubung
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted">
          Terbuka untuk diskusi seputar embedded systems, IoT, machine learning,
          maupun kolaborasi bisnis.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="btn-tactile rounded-full bg-yellow px-5 py-2.5 text-sm font-medium text-black hover:bg-purple hover:text-white"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile rounded-full border border-border px-5 py-2.5 text-sm text-foreground/90 hover:border-purple hover:text-purple"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tactile rounded-full border border-border px-5 py-2.5 text-sm text-foreground/90 hover:border-purple hover:text-purple"
          >
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
