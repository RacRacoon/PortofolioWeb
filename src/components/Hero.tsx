import Image from "next/image";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32"
    >
      <div className="orb orb-purple orb-float -left-24 -top-24 h-72 w-72" />
      <div
        className="orb orb-yellow orb-float -right-16 top-10 h-64 w-64"
        style={{ animationDelay: "-4s" }}
      />

      <Reveal className="glass relative z-10 grid gap-8 rounded-2xl p-8 sm:grid-cols-[1fr_auto] sm:items-center sm:p-12">
        <div className="order-2 sm:order-1">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-purple">
            <span className="scanline mr-2 inline-block h-2 w-2 rounded-full bg-yellow align-middle" />
            {profile.location}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground text-glow-purple sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted/90 sm:text-base">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="btn-tactile rounded-full bg-purple px-5 py-2.5 text-sm font-medium text-black hover:bg-yellow"
            >
              Lihat proyek
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile rounded-full border border-white/15 px-5 py-2.5 text-sm text-foreground/90 backdrop-blur-sm hover:border-yellow hover:text-yellow"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tactile rounded-full border border-white/15 px-5 py-2.5 text-sm text-foreground/90 backdrop-blur-sm hover:border-yellow hover:text-yellow"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="relative order-1 mx-auto shrink-0 sm:order-2 sm:mx-0">
          <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-purple to-yellow opacity-60 blur-lg" />
          <div className="relative h-72 w-56 overflow-hidden rounded-2xl border border-white/15 sm:h-96 sm:w-72">
            <Image
              src="/profile.jpg"
              alt={profile.name}
              width={576}
              height={768}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
