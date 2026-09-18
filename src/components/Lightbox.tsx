"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export type GalleryImage = { src: string; alt: string };

function Thumb({
  img,
  gridClass,
  onClick,
}: {
  img: GalleryImage;
  gridClass: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`btn-tactile group relative overflow-hidden rounded-lg border border-white/10 ${gridClass}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={600}
        height={600}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </button>
  );
}

export function Gallery({ images, className = "" }: { images: GalleryImage[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      {images.length === 1 ? (
        <Thumb img={images[0]} gridClass={className} onClick={() => setOpenIndex(0)} />
      ) : images.length === 2 ? (
        <div className={`grid grid-cols-2 gap-2 ${className}`}>
          {images.map((img, i) => (
            <Thumb key={img.src} img={img} gridClass="h-full" onClick={() => setOpenIndex(i)} />
          ))}
        </div>
      ) : (
        <div className={`grid grid-cols-2 grid-rows-2 gap-2 ${className}`}>
          <Thumb
            img={images[0]}
            gridClass="col-start-1 row-span-2 h-full"
            onClick={() => setOpenIndex(0)}
          />
          {images.slice(1, 3).map((img, i) => (
            <Thumb
              key={img.src}
              img={img}
              gridClass="col-start-2 h-full"
              onClick={() => setOpenIndex(i + 1)}
            />
          ))}
        </div>
      )}

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            className="btn-tactile absolute right-5 top-5 text-2xl text-white/80 hover:text-yellow"
            aria-label="Tutup"
          >
            ✕
          </button>
          <Image
            src={images[openIndex].src}
            alt={images[openIndex].alt}
            width={1200}
            height={1200}
            className="max-h-[85vh] w-auto max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
