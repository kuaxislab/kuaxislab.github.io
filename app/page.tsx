"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Hand, Glasses, Cpu, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { news, researchAreas } from "@/lib/data";

const iconMap = { hand: Hand, vr: Glasses, circuit: Cpu };

const newsTypeStyle: Record<string, string> = {
  paper: "badge-teal", award: "badge-gold", grant: "badge-gold",
  event: "badge-slate", service: "badge-coral",
};
const newsTypeLabel: Record<string, string> = {
  paper: "Paper", award: "Award", grant: "Grant", event: "Event", service: "Service",
};

function HeroImage() {
  const [error, setError] = useState(false);
  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-slate-200/60">
      {!error ? (
        <Image src="/images/team.jpg" alt="AXIS Lab Team" fill className="object-cover" priority onError={() => setError(true)} />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-teal-50 via-slate-50 to-coral-50 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-teal-200">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-400/30" />
            <div className="w-10 h-10 rounded-full bg-coral-400/30" />
            <div className="w-10 h-10 rounded-full bg-gold-400/30" />
          </div>
          <p className="text-xs text-slate-400 font-medium">Add team photo → public/images/team.jpg</p>
        </div>
      )}
    </div>
  );
}

function HomeNewsImage({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false);
  if (err) return null;
  return (
    <div className="w-full sm:w-[36%] shrink-0 rounded-lg overflow-hidden bg-slate-100" style={{ aspectRatio: "600/250" }}>
      <Image src={src} alt={alt} width={300} height={125} className="w-full h-full object-cover" onError={() => setErr(true)} />
    </div>
  );
}

export default function HomePage() {
  const recentNews = news.slice(0, 4);

  return (
    <div>
      {/* ── Hero ── */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}>
              <div className="relative h-24 sm:h-32 w-80 sm:w-[440px] mb-6">
                <Image src="/images/logo_full.png" alt="AXIS Lab" fill className="object-contain object-left" priority />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-5" style={{ backgroundColor: "#79003015", borderColor: "#79003040" }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#790030" }} />
                <span className="text-xs font-bold tracking-widest" style={{ color: "#790030" }}>KOREA UNIVERSITY</span>
              </div>
              <p className="text-lg sm:text-xl font-medium text-slate-700 mb-3">
                Augmented eXperience &amp;<br />Interactive Systems Laboratory
              </p>
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-lg">
                We research haptic technology, next-generation VR/AR, and human-computer interaction — creating experiences that go beyond screens to engage every sense.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/publications" className="btn-primary">Publications<ArrowRight size={16} /></Link>
                <Link href="/members" className="btn-secondary">Join Us</Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}>
              <HeroImage />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Recent News ── */}
      <section className="section-padding bg-slate-50/70">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-10">
              <h2 className="section-title">Recent News</h2>
              <Link href="/news" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:gap-2.5 transition-all duration-200">
                View all <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {recentNews.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="card p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:gap-4 items-start hover:shadow-md transition-shadow">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`${newsTypeStyle[item.type]} shrink-0`}>{newsTypeLabel[item.type]}</span>
                      <span className="text-sm font-semibold text-slate-400 whitespace-nowrap">{item.date}</span>
                    </div>
                    <p className="text-base text-slate-700 leading-relaxed">{item.description}</p>
                    {item.link && (
                      <a href={item.link.href} target="_blank" rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        {item.link.label}<ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                  {item.image && <HomeNewsImage src={item.image} alt={item.description} />}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-6 sm:hidden text-center">
            <Link href="/news" className="btn-secondary text-sm">View all news <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* ── Research Areas ── */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <AnimatedSection>
            <div className="mb-10">
              <h2 className="section-title">Research Areas</h2>
              <p className="section-subtitle">We explore three interconnected research directions to advance the future of human-computer interaction.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {researchAreas.map((area, i) => {
              const Icon = iconMap[area.icon as keyof typeof iconMap];
              const colorMap = {
                teal:  { bg: "bg-teal-50",  icon: "text-teal-600",  border: "group-hover:border-teal-400" },
                coral: { bg: "bg-coral-50", icon: "text-coral-600", border: "group-hover:border-coral-400" },
                gold:  { bg: "bg-gold-50",  icon: "text-gold-600",  border: "group-hover:border-gold-400" },
              }[area.color];
              return (
                <AnimatedSection key={area.id} delay={i * 0.1}>
                  <Link href={`/research#${area.id}`}
                    className={`group card p-6 sm:p-7 flex flex-col gap-4 h-full hover:shadow-lg transition-all duration-300 border-2 border-transparent ${colorMap.border}`}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${colorMap.bg}`}>
                      <Icon size={22} className={colorMap.icon} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug group-hover:text-teal-600 transition-colors">{area.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{area.description}</p>
                    </div>
                    <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-teal-600">
                      Learn more <ChevronRight size={14} />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-teal-600 to-teal-500">
        <AnimatedSection>
          <div className="container-main text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">We are looking for passionate researchers.</h2>
            <p className="text-teal-100 text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Join AXIS Lab and help shape the future of human-computer interaction.
            </p>
            <Link href="/members" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-600 font-bold rounded-xl hover:bg-teal-50 transition-colors shadow-lg">
              Meet the Team <ExternalLink size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
