import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 pb-16 pt-32 lg:pt-24">
      <Reveal variant="left" className="mb-10 flex items-baseline gap-3">
        <span className="font-mono text-sm text-yellow">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-yellow/60 via-purple/40 to-transparent" />
      </Reveal>
      {children}
    </section>
  );
}
