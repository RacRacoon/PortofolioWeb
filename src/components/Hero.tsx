import Image from "next/image";
import { profile } from "@/data/profile";
import Reveal from "./Reveal";

const nameLines = profile.name.split(" ");

export default function Hero() {
  return (
    <section id="top" className="relative min-h-svh overflow-hidden">
      <div className="orb orb-purple orb-float -left-32 top-1/4 h-96 w-96" />
      <div
        className="orb orb-yellow orb-float -right-24 bottom-10 h-96 w-96"
        style={{ animationDelay: "-4s" }}
      />
      <div className="pointer-events-none absolute right-[6%] top-[12%] hidden h-64 w-64 rounded-[3rem] border border-white/10 lg:block" />
      <div className="pointer-events-none absolute right-[22%] bottom-[10%] hidden h-48 w-72 rounded-[3rem] border border-white/10 lg:block" />

      <div className="relative z-10 mx-auto grid min-h-svh max-w-6xl lg:h-svh items-center gap-6 px-6 pb-10 pt-32 lg:pt-24 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <Reveal>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-purple">
              <span className="scanline mr-2 inline-block h-2 w-2 rounded-full bg-yellow align-middle" />
              {profile.location}
            </p>
            <h1 className="text-[clamp(2rem,min(7.5vw,10.5svh),5.5rem)] leading-[1.02] text-foreground">
              {nameLines.map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </h1>
            <p className="font-label mt-4 text-3xl text-foreground sm:text-4xl">
              Portfolio <span className="text-yellow">&copy;{new Date().getFullYear()}</span>
            </p>
            <p className="font-label mt-1 text-lg text-yellow sm:text-xl">
              Embedded <span className="text-purple">&#10035;</span> IoT{" "}
              <span className="text-purple">&#10035;</span> Machine Learning
            </p>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted lg:mx-0">
              {profile.summary}
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="btn-tactile rounded-full bg-yellow px-5 py-2.5 text-sm font-semibold text-[#07070c] hover:bg-purple hover:text-white"
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
          </Reveal>
        </div>

        <Reveal
          variant="scale"
          delay={150}
          className="relative order-1 mx-auto h-52 w-40 lg:order-2 lg:mx-0 lg:h-[min(66svh,32rem)] lg:w-[calc(min(66svh,32rem)*0.75)] lg:justify-self-center"
        >
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-purple to-yellow opacity-50 blur-xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/20">
            <Image
              src="/profile.jpg"
              alt={profile.name}
              width={576}
              height={768}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>

      <a
        href="#experience"
        className="font-label absolute bottom-8 left-6 z-10 hidden items-center gap-2 text-sm text-muted hover:text-yellow sm:flex"
      >
        Scroll to explore
        <span className="inline-block animate-[nudge-down_1.6s_ease-in-out_infinite]">&darr;</span>
      </a>
    </section>
  );
}
