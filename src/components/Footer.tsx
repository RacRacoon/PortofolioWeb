import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border pb-8 pt-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}.</p>
        <p className="font-mono">built with Next.js &amp; Tailwind</p>
      </div>
    </footer>
  );
}
