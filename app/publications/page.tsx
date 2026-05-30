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
          <div className="mb-1.5">
            {pub.slug ? (
              <Link href={`/publications/${pub.slug}`}
                className="group/link font-semibold text-base text-slate-900 hover:text-teal-600 transition-colors leading-snug"
              >
                {pub.title}
                <span className="ml-2 inline-flex items-center text-xs font-semibold text-teal-500 opacity-0 group-hover/link:opacity-100 transition-opacity">
                  Project Page →
                </span>
              </Link>
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
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-2xl font-extrabold text-teal-500 tabular-nums shrink-0">{year}</span>
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-sm text-slate-400 shrink-0">{pubs.length} paper{pubs.length > 1 ? "s" : ""}</span>
      </div>
      {pubs.map((pub, i) => <PubItem key={i} pub={pub} index={i} />)}
    </div>
  );
}

export default function PublicationsPage() {
  const underReview = publications.filter((p) => p.year === "Under Review");
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

        {underReview.length > 0 && (
          <AnimatedSection>
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-extrabold text-slate-400 shrink-0">Under Review</span>
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-sm text-slate-400 shrink-0">{underReview.length} papers</span>
              </div>
              <p className="text-sm text-slate-400 italic mb-4">Details omitted pending review.</p>
              <div className="space-y-2.5">
                {underReview.map((pub, i) => (
                  <div key={i} className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-slate-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                    <span className="text-base text-slate-600">{pub.title}</span>
                    <span className="ml-auto badge badge-slate shrink-0">
                      {pub.venue.includes("Major") ? "Major Revision" : "Under Review"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {years.map((year) => <YearSection key={year} year={year} pubs={byYear[year]} />)}
      </div>
    </div>
  );
}
