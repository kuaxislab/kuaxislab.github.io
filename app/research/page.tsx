"use client";

import { Hand, Glasses, Cpu, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { researchAreas } from "@/lib/data";
import type { ResearchArea } from "@/lib/data";

const iconMap = { hand: Hand, vr: Glasses, circuit: Cpu };

const colorTokens = {
  teal:  { badge: "badge-teal",  accent: "text-teal-600",  iconBg: "bg-teal-50",  iconText: "text-teal-600",  border: "border-teal-500",  number: "text-teal-500/20",  bullet: "text-teal-500" },
  coral: { badge: "badge-coral", accent: "text-coral-600", iconBg: "bg-coral-50", iconText: "text-coral-600", border: "border-coral-500", number: "text-coral-500/20", bullet: "text-coral-500" },
  gold:  { badge: "badge-gold",  accent: "text-gold-600",  iconBg: "bg-gold-50",  iconText: "text-gold-600",  border: "border-gold-500",  number: "text-gold-500/20",  bullet: "text-gold-500" },
};

function ResearchBlock({ area, index }: { area: ResearchArea; index: number }) {
  const Icon = iconMap[area.icon as keyof typeof iconMap];
  const c = colorTokens[area.color];
  const isEven = index % 2 === 0;

  return (
    <motion.section
      id={area.id}
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`card overflow-hidden border-l-4 ${c.border}`}
    >
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
        {/* Visual panel */}
        <div className={`lg:w-2/5 p-8 sm:p-10 flex items-center justify-center ${c.iconBg} min-h-[200px]`}>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center bg-white shadow-md">
              <Icon size={36} className={c.iconText} />
            </div>
            <span className={`text-7xl font-black select-none ${c.number}`}>0{index + 1}</span>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10">
          <span className={`${c.badge} mb-4 inline-flex`}>Research Area {index + 1}</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 leading-snug">{area.title}</h2>
          <p className="text-base text-slate-600 leading-relaxed mb-6">{area.description}</p>
          <ul className="space-y-2.5">
            {area.details.map((detail) => (
              <li key={detail} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${c.bullet}`} />
                <span className="text-base text-slate-700">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default function ResearchPage() {
  return (
    <div className="section-padding">
      <div className="container-main">
        <AnimatedSection className="mb-14">
          <h1 className="section-title mb-3">Research</h1>
        </AnimatedSection>
        <div className="space-y-8">
          {researchAreas.map((area, i) => <ResearchBlock key={area.id} area={area} index={i} />)}
        </div>
      </div>
    </div>
  );
}
