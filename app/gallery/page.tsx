"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImageIcon, ChevronRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { galleryAlbums } from "@/lib/galleryData";

function AlbumCard({ album, index }: { album: typeof galleryAlbums[0]; index: number }) {
  const [thumbErr, setThumbErr] = useState(false);
  const thumbnail = album.images[0];

  return (
    <AnimatedSection delay={index * 0.08}>
      <Link href={`/gallery/${album.id}`} className="group block card overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
          {!thumbErr ? (
            <Image
              src={thumbnail}
              alt={album.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setThumbErr(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <ImageIcon size={40} />
            </div>
          )}
          {/* Photo count badge */}
          <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
            {album.images.length} photos
          </div>
        </div>

        {/* Info */}
        <div className="p-4 sm:p-5 flex items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-teal-600 transition-colors">
              {album.title}
            </h3>
            <p className="text-sm text-slate-400 mt-0.5">{album.date}</p>
          </div>
          <ChevronRight size={18} className="text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all shrink-0" />
        </div>
      </Link>
    </AnimatedSection>
  );
}

export default function GalleryPage() {
  return (
    <div className="section-padding">
      <div className="container-main">
        <AnimatedSection className="mb-10">
          <h1 className="section-title mb-3">Gallery</h1>
        </AnimatedSection>

        {galleryAlbums.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryAlbums.map((album, i) => (
              <AlbumCard key={album.id} album={album} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-slate-400">
            <ImageIcon size={48} className="mx-auto mb-4 opacity-40" />
            <p className="text-base font-medium">No albums yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
