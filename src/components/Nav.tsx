const links = [
  { href: "#experience", label: "Pengalaman" },
  { href: "#projects", label: "Proyek" },
  { href: "#ventures", label: "Usaha" },
  { href: "#skills", label: "Keahlian" },
  { href: "#education", label: "Pendidikan" },
  { href: "#contact", label: "Kontak" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-background/95 via-background/60 to-transparent backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#top"
          className="font-label text-2xl text-foreground transition-colors hover:text-yellow"
        >
          SSR<span className="text-purple">_</span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="order-3 w-full overflow-x-auto rounded-full border border-white/15 bg-black/60 px-2 backdrop-blur-xl lg:order-none lg:w-auto"
        >
          <ul className="flex min-w-max items-center justify-center gap-1 py-1.5">
            {links.map((l, i) => (
              <li key={l.href} className="flex items-center gap-1">
                {i > 0 && <span className="text-xs text-purple">&#10035;</span>}
                <a
                  href={l.href}
                  className="font-label whitespace-nowrap rounded-full px-3 py-1 text-base text-foreground/85 transition-colors hover:text-yellow"
                >
                  <span className="text-yellow">{String(i + 1).padStart(2, "0")}.</span> {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="btn-tactile font-label justify-self-end rounded-lg border border-white/20 bg-black/40 px-5 py-2 text-base text-foreground backdrop-blur-md hover:border-yellow hover:text-yellow"
        >
          Say hello
        </a>
      </div>
    </header>
  );
}
