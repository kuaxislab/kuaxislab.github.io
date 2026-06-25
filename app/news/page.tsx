"use client";

import Image from "next/image";
import { useState } from "react";
import { Newspaper, Award, Calendar, TrendingUp, BookOpen, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { news } from "@/lib/data";
import type { NewsType } from "@/lib/data";

const typeConfig: Record<NewsType, { label: string; icon: React.ReactNode; style: string; dot: string }> = {
  paper:   { label: "Paper",   icon: <BookOpen size={13} />,   style: "badge-teal",  dot: "bg-teal-500" },
  award:   { label: "Award",   icon: <Award size={13} />,      style: "badge-gold",  dot: "bg-gold-500" },
  grant:   { label: "Grant",   icon: <TrendingUp size={13} />, style: "badge-gold",  dot: "bg-gold-500" },
  event:   { label: "Event",   icon: <Calendar size={13} />,   style: "badge-slate", dot: "bg-slate-400" },
  service: { label: "Service", icon: <Newspaper size={13} />,  style: "badge-coral", dot: "bg-coral-500" },
};

function NewsImage({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false);
  if (err) return null;
  return (
    <div className="w-full sm:w-[36%] shrink-0 rounded-lg overflow-hidden bg-slate-100" style={{ aspectRatio: "600/250" }}>
      <Image src={src} alt={alt} width={300} height={125} className="w-full h-full object-cover" onError={() => setErr(true)} />
    </div>
  );
}

export default function NewsPage() {
  const byYear = news.reduce<Record<number, typeof news>>((acc, item) => {
    if (!acc[item.year]) acc[item.year] = [];
    acc[item.year].push(item);
    return acc;
  }, {});
  const years = Object.keys(byYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="section-padding">
      <div className="container-main">
        <AnimatedSection className="mb-14">
          <h1 className="section-title mb-3">News</h1>
        </AnimatedSection>

        {years.map((year) => (
          <div key={year} className="mb-14">
            <AnimatedSection>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-2xl font-extrabold text-teal-500 tabular-nums shrink-0">{year}</span>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" />
              <div className="space-y-2">
                {byYear[year].map((item, i) => {
                  const cfg = typeConfig[item.type];
                  return (
                    <AnimatedSection key={i} delay={i * 0.06}>
                      <div className="flex gap-5 sm:gap-6 group">
                        <div className="relative shrink-0 mt-5">
                          <div className={`w-3.5 h-3.5 rounded-full border-2 border-white shadow-sm ${cfg.dot} transition-transform duration-200 group-hover:scale-125`} />
                        </div>
                        <div className="flex-1 card p-4 sm:p-5 mb-4 hover:shadow-md transition-shadow">
                          {/* Top row: badge + date */}
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className={`badge ${cfg.style}`}>{cfg.icon}{cfg.label}</span>
                            <span className="text-sm font-semibold text-slate-400">{item.date}</span>
                          </div>
                          {/* Content: text + image side by side on sm+, stacked on mobile */}
                          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
                            <div className="flex-1">
                              <p className="text-base text-slate-700 leading-relaxed">
                                {item.description}
                              </p>
                              {item.papers && (
                                <ul className="mt-2 space-y-1">
                                  {item.papers.map((title, j) => (
                                    <li key={j} className="text-sm text-teal-700 italic leading-snug pl-3 border-l-2 border-teal-200">
                                      {title}
                                    </li>
                                  ))}
                                </ul>
                              )}
                              {item.link && (
                                <a href={item.link.href} target="_blank" rel="noopener noreferrer"
                                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                                >
                                  {item.link.label}<ExternalLink size={13} />
                                </a>
                              )}
                            </div>
                            {item.image && <NewsImage src={item.image} alt={item.description} />}
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
