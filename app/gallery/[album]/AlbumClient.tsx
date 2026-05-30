"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Album = {
  id: string;
  title: string;
  date: string;
  images: string[];
  description?: string;
};

export default function AlbumClient({ album }: { album: Album }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [direction, setDirection] = useState(0);

  const total = album.images.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + total) % total);
  }, [total]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, go]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="section-padding">
      <div className="container-main">
        <div className="mb-8">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors mb-5">
            <ArrowLeft size={16} /> Back to Gallery
          </Link>
          <h1 className="section-title">{album.title}</h1>
          <p className="text-sm text-slate-400 mt-1">{album.date} · {total} photos</p>
          {album.description && <p className="text-base text-slate-500 mt-2">{album.description}</p>}
        </div>

        <div className="relative bg-slate-900 rounded-2xl overflow-hidden mb-5" style={{ aspectRatio: "16/9" }}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={album.images[current]}
                alt={`${album.title} — photo ${current + 1}`}
                fill
                className="object-contain cursor-zoom-in"
                onClick={() => setLightbox(true)}
                priority={current === 0}
              />
            </motion.div>
          </AnimatePresence>

          {total > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
            {current + 1} / {total}
          </div>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {album.images.map((src, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === current ? "border-teal-500 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt={`Thumbnail ${i + 1}`} width={96} height={64} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            {total > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); go(-1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); go(1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={album.images[current]}
                alt={`${album.title} — photo ${current + 1}`}
                fill
                className="object-contain"
              />
            </motion.div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              {current + 1} / {total}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
