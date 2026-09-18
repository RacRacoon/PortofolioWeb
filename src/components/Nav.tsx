const links = [
  { href: "#about", label: "Tentang" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#projects", label: "Proyek" },
  { href: "#ventures", label: "Usaha" },
  { href: "#skills", label: "Keahlian" },
  { href: "#education", label: "Pendidikan" },
  { href: "#contact", label: "Kontak" },
];

export default function Nav() {
  return (
    <header className="glass sticky top-0 z-50 border-x-0 border-t-0">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-widest text-foreground/90 hover:text-yellow transition-colors"
        >
          SSR<span className="text-purple">_</span>
        </a>
        <ul className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-yellow transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn-tactile rounded-full border border-purple/50 px-4 py-1.5 text-xs text-purple hover:bg-purple hover:text-black sm:hidden"
        >
          Kontak
        </a>
      </nav>
    </header>
  );
}
