"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Hand, Glasses, Cpu, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { researchAreas, publications } from "@/lib/data";
import type { ResearchArea, Publication } from "@/lib/data";

const iconMap = { hand: Hand, vr: Glasses, circuit: Cpu };

const colorTokens = {
  teal:  { iconBg: "bg-teal-50",  iconText: "text-teal-600",  line: "bg-teal-300",  tag: "bg-teal-50 text-teal-700",   venue: "text-teal-600",  hover: "hover:border-teal-300" },
  coral: { iconBg: "bg-coral-50", iconText: "text-coral-600", line: "bg-coral-300", tag: "bg-coral-50 text-coral-700", venue: "text-coral-600", hover: "hover:border-coral-300" },
  gold:  { iconBg: "bg-gold-50",  iconText: "text-gold-600",  line: "bg-gold-300",  tag: "bg-gold-50 text-gold-700",   venue: "text-gold-600",  hover: "hover:border-gold-300" },
};

type Featured = { title: string; short: string; venue: string };

const featuredWork: Record<string, Featured[]> = {
  "haptic-tech": [
    { title: "Posture-Adaptive Azimuthal Guidance via a Forearm Vibrotactile Interface for VR Navigation", short: "Posture-Adaptive Azimuthal Guidance", venue: "IEEE TVCG (ISMAR 2026)" },
    { title: "Effects of Haptic Feedback on Gaming Experiences: A Case Study Comparing Players and Spectators in FPS Games", short: "Effects of Haptic Feedback on Gaming Experiences", venue: "ACM CHI 2026" },
    { title: "Augmenting Perceived Length of Handheld Controllers: Effects of Object Handle Properties", short: "Augmenting Perceived Length of Handheld Controllers", venue: "ACM CHI 2024" },
    { title: "Representing Egocentric Directions with Torso-Applied Vibrotactile Stimuli", short: "Representing Egocentric Directions", venue: "IEEE ToH 2026" },
  ],
  "vr-research": [
    { title: "Feeling Visual Motion: Mitigating Cybersickness in VR Using Tactile Motion Cues", short: "Feeling Visual Motion", venue: "IEEE ISMAR 2026" },
    { title: "Fingertip Pressure Feedback Increases the Perceived Length of a Handheld Object", short: "Fingertip Pressure Feedback", venue: "IEEE ToH 2026" },
    { title: "Cybersickness Reduction Effects of Visual and Vestibular Player-Fixed Rest Frames", short: "Cybersickness Reduction with Rest Frames", venue: "IEEE TVCG (ISMAR 2026)" },
    { title: "Visuo-haptic Crossmodal Shape Perception Model for Shape-Changing Handheld Controllers Bridged by Inertial Tensor", short: "Visuo-haptic Crossmodal Shape Perception", venue: "ACM CHI 2023" },
  ],
  "interface-prototyping": [
    { title: "HaptiCraft: A Modular Multimodal Haptic Controller for Immersive Virtual Reality Interactions", short: "HaptiCraft", venue: "IEEE TVCG 2026" },
    { title: "HaRing: A Haptic Ring Interface for One-Handed Interaction with High-Dimensional Spatial Information", short: "HaRing", venue: "ACM CHI 2026" },
    { title: "Proactive Robotic Grasp Stability via Tactile Safety Margin Feedback", short: "Proactive Robotic Grasp Stability", venue: "Adv. Intell. Syst. 2026" },
    { title: "Wearable Soft Ionic Tactile Controller for Virtual Reality: Decoupling Normal and Shear Forces without Motion Artifacts", short: "Wearable Soft Ionic Tactile Controller", venue: "ACS AMI 2026" },
  ],
};

function Thumb({ src, alt }: { src?: string; alt: string }) {
  const [err, setErr] = useState(false);
  return (
    <div className="aspect-video w-full overflow-hidden bg-slate-100">
      {src && !err ? (
        <Image src={src} alt={alt} width={400} height={225} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={() => setErr(true)} />
      ) : (
        <div className="w-full h-full bg-slate-200" />
      )}
    </div>
  );
}

function WorkCard({ item, pub, color }: { item: Featured; pub?: Publication; color: keyof typeof colorTokens }) {
  const c = colorTokens[color];
  const body = (
    <>
      <Thumb src={pub?.thumbnail} alt={item.short} />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-slate-900 text-sm leading-snug mb-1.5">{item.short}</h3>
        <p className={`text-xs font-semibold ${c.venue} mt-auto flex items-center gap-1`}>
          {item.venue}
          {pub?.slug && <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
        </p>
      </div>
    </>
  );
  const cls = "group card overflow-hidden h-full flex flex-col border border-slate-200";
  return pub?.slug ? (
    <Link href={`/publications/${pub.slug}`} title={item.title} className={`${cls} ${c.hover} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}>
      {body}
    </Link>
  ) : (
    <div title={item.title} className={cls}>{body}</div>
  );
}

function ResearchBlock({ area, index }: { area: ResearchArea; index: number }) {
  const Icon = iconMap[area.icon as keyof typeof iconMap];
  const c = colorTokens[area.color];
  const works = featuredWork[area.id] ?? [];

  return (
    <motion.section
      id={area.id}
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="scroll-mt-24 py-12 sm:py-16 first:pt-0 border-t border-slate-200 first:border-t-0"
    >
      <div className="mb-6">
        <p className={`flex items-center gap-2.5 text-lg sm:text-xl font-bold mb-3 ${c.iconText}`}>
          <span className={`w-9 h-9 rounded-xl flex items-center justify-center ${c.iconBg}`}>
            <Icon size={19} />
          </span>
          Research Area 0{index + 1}
          <span className={`h-0.5 w-12 rounded-full ${c.line}`} />
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">{area.title}</h2>
        <p className="text-base sm:text-lg text-slate-500 mt-2">{area.summary}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {area.details.map((d) => (
          <span key={d} className={`text-xs font-medium px-2.5 py-1 rounded-full ${c.tag}`}>{d}</span>
        ))}
      </div>

      {/* Horizontal scroller: shows 4 cards per row on desktop; extra cards scroll sideways. */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mb-3">
        {works.map((item) => (
          <div key={item.title} className="snap-start shrink-0 w-[78%] sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-3rem)/4)]">
            <WorkCard item={item} pub={publications.find((p) => p.title === item.title)} color={area.color} />
          </div>
        ))}
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
        <div>
          {researchAreas.map((area, i) => <ResearchBlock key={area.id} area={area} index={i} />)}
        </div>
      </div>
    </div>
  );
}
