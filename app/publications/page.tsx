"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Award, Star, Trophy } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { publications } from "@/lib/data";
import type { Publication } from "@/lib/data";

const DEFAULT_THUMB = "/images/publications/2026_tvcg.png";
const venueColor = "text-teal-600";

const awardIcon = {
  "Best Paper":            <Trophy size={11} />,
  "Best Paper Nomination": <Star size={11} />,
  "Honorable Mention":     <Award size={11} />,
};
const awardStyle = {
  "Best Paper":            "badge-coral",
  "Best Paper Nomination": "badge-gold",
  "Honorable Mention":     "badge-gold",
};

function PubThumb({ src }: { src: string }) {
  const [err, setErr] = useState(false);
  return (
    <div className="w-full sm:w-52 shrink-0 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 aspect-video">
      {!err ? (
        <Image src={src} alt="" width={208} height={117} className="w-full h-full object-cover" onError={() => setErr(true)} />
      ) : (
        <div className="w-full h-full bg-slate-200" />
      )}
    </div>
  );
}

function PubItem({ pub, index }: { pub: Publication; index: number }) {
  const thumb = pub.thumbnail ?? DEFAULT_THUMB;
  return (
    <AnimatedSection delay={index * 0.04}>
      <div className="flex flex-col sm:flex-row gap-4 py-5 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 -mx-4 px-4 rounded-xl transition-colors">
        <PubThumb src={thumb} />
        <div className="flex-1 min-w-0">
          <div className="mb-1.5 group/row">
            {pub.slug ? (
              <>
                <Link href={`/publications/${pub.slug}`}
                  className="font-semibold text-base text-slate-900 hover:text-teal-600 transition-colors leading-snug"
                >
                  {pub.title}
                </Link>
                {pub.doi && (
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center ml-1.5 opacity-0 group-hover/row:opacity-40 hover:!opacity-100 transition-opacity text-slate-400 hover:text-teal-600"
                  >
                    <ExternalLink size={12} />
                  </a>
                )}
              </>
            ) : pub.doi ? (
              <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                className="group/link font-semibold text-base text-slate-900 hover:text-teal-600 transition-colors leading-snug"
              >
                {pub.title}
                <ExternalLink size={12} className="inline ml-1.5 opacity-0 group-hover/link:opacity-50 transition-opacity" />
              </a>
            ) : (
              <span className="font-semibold text-base text-slate-900 leading-snug">{pub.title}</span>
            )}
          </div>
          <p className="text-base text-slate-500 mb-1.5">{pub.authors}</p>
          <div className="flex flex-wrap items-center gap-2">
            <span className={`font-medium italic text-sm ${venueColor}`}>{pub.venue}</span>
            {pub.type === "poster" && <span className="badge badge-slate">Poster</span>}
            {pub.note && <span className="badge badge-slate">{pub.note}</span>}
            {pub.award && (
              <span className={`badge ${awardStyle[pub.award]}`}>
                {awardIcon[pub.award]}{pub.award}
              </span>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function YearSection({ year, pubs }: { year: string | number; pubs: Publication[] }) {
  const paperCount = pubs.filter((p) => p.type === "journal" || p.type === "conference").length;
  const posterCount = pubs.filter((p) => p.type === "poster" || p.type === "workshop").length;
  const countLabel = [
    paperCount > 0 && `${paperCount} paper${paperCount > 1 ? "s" : ""}`,
    posterCount > 0 && `${posterCount} poster${posterCount > 1 ? "s" : ""}`,
  ].filter(Boolean).join(", ");

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-2xl font-extrabold text-teal-500 tabular-nums shrink-0">{year}</span>
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-sm text-slate-400 shrink-0">{countLabel}</span>
      </div>
      {pubs.map((pub, i) => <PubItem key={i} pub={pub} index={i} />)}
    </div>
  );
}

export default function PublicationsPage() {
  const byYear = publications
    .filter((p) => p.year !== "Under Review")
    .reduce<Record<number, Publication[]>>((acc, pub) => {
      const y = pub.year as number;
      if (!acc[y]) acc[y] = [];
      acc[y].push(pub);
      return acc;
    }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="section-padding">
      <div className="container-main">
        <AnimatedSection className="mb-14">
          <h1 className="section-title mb-3">Publications</h1>
        </AnimatedSection>

{years.map((year) => <YearSection key={year} year={year} pubs={byYear[year]} />)}
      </div>
    </div>
  );
}
