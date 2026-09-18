"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const variants = {
  up: { hidden: "opacity-0 translate-y-8 scale-[0.98]", visible: "opacity-100 translate-y-0 scale-100" },
  left: { hidden: "opacity-0 -translate-x-8", visible: "opacity-100 translate-x-0" },
  right: { hidden: "opacity-0 translate-x-8", visible: "opacity-100 translate-x-0" },
  scale: { hidden: "opacity-0 scale-90", visible: "opacity-100 scale-100" },
} as const;

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: keyof typeof variants;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const v = variants[variant];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:scale-100 ${
        visible ? v.visible : v.hidden
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
