"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Copy, Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const paper = {
  title: "HaRing: A Haptic Ring Interface for One-Handed Interaction with High-Dimensional Spatial Information",
  authors: [
    { name: "Suheon Nam", affil: "1" },
    { name: "Juhyung Son", affil: "1" },
    { name: "Seungmoon Choi", affil: "1" },
    { name: "Chaeyong Park", affil: "2", url: "https://chaeyongpark.github.io/" },
  ],
  affiliations: [
    { id: "1", name: "POSTECH" },
    { id: "2", name: "Korea University" },
  ],
  venue: "ACM CHI 2026",
  venueShort: "ACM CHI 2026",
  year: 2026,
  doi: "https://doi.org/10.1145/3772318.3791663",
  abstract: `Ring interfaces have gained attention in wearable technology for their lightweight and hands-free design. However, their compact form factor limits them to conveying simple information through vibration, electrotactile, or force feedback. We introduce HaRing, a novel haptic ring interface equipped with a 4 × 6 pin array display. This dynamic display delivers rich spatial patterns that simple vibration cannot express, effectively conveying high-dimensional information such as directions, semantic symbols, and letters. Its design enables one-handed, eyes-free interaction that does not interfere with visual tasks. We conducted a series of perceptual and user studies demonstrating a high recognition accuracy of over 94% for complex letters after a brief training period.`,
};

const contributions = [
  "HaRing: a light, eyes-free, one-handed wearable tactile ring with a 4 × 6 pin array — the first ring-form high-resolution pin-array display",
  "User-centered design methodology integrating empirical perceptual data to optimize haptic patterns for the pin-array form factor",
  "Directional information conveyed with 98.3% accuracy without prior training (12 directions)",
  "Alphabet recognition accuracy of 93.2% achieved with only ~32 minutes of short-term learning",
];

const experiments = [
  {
    id: "Exp 1",
    title: "Basic Perceptual Ability",
    desc: "Evaluated fundamental haptic perception using dots (single-pin), lines, and 2D shapes on HaRing across three sessions with 10 participants.",
    results: [
      { label: "Dots accuracy", value: "78.5%" },
      { label: "Lines accuracy", value: "84.0%" },
      { label: "Shapes accuracy", value: "69.6%" },
    ],
    color: "teal",
  },
  {
    id: "Exp 2",
    title: "Haptic Pattern Design Workshop",
    desc: "10 participants designed haptic patterns for 24 keywords (12 semantic + 12 directional), iteratively creating and refining patterns using the HaRing authoring tool.",
    results: [
      { label: "Participants", value: "10" },
      { label: "Keywords", value: "24" },
      { label: "Patterns collected", value: "240" },
    ],
    color: "coral",
  },
  {
    id: "Exp 3",
    title: "Pattern Identification",
    desc: "16 participants identified digits, alphabets, semantic keywords, and directional patterns. Intuitive user-designed patterns showed significantly higher accuracy than symbolic characters.",
    results: [
      { label: "Directions", value: "98.3%" },
      { label: "Semantic keywords", value: "81.1%" },
      { label: "Digits", value: "65.2%" },
      { label: "Alphabets", value: "55.2%" },
    ],
    color: "gold",
  },
  {
    id: "Exp 4",
    title: "Short-Term Learning Effect",
    desc: "18 participants underwent a structured learning protocol (Exploration → Learning → Test). Participants who did not meet the 80% threshold on Day 1 (Group B) were retested within 4 days.",
    results: [
      { label: "Initial accuracy", value: "68.8%" },
      { label: "Final accuracy", value: "93.2%" },
      { label: "Training time", value: "~32 min" },
      { label: "Response time", value: "4.52 s" },
    ],
    color: "teal",
  },
];

const scenarios = [
  { title: "Eyes-Free Navigation", desc: "Convey complex directional cues (e.g., 'go straight and turn left') during walking or driving without visual distraction." },
  { title: "Tactile Feedforward in VR", desc: "As users hover over virtual menu items, HaRing renders the shape or label of each item directly on the fingertip." },
  { title: "Unobtrusive Communication", desc: "Privately receive messages or cues during meetings without retrieving a smartphone, keeping interactions seamless." },
  { title: "Remote Object Control", desc: "During high-focus tasks like UAV or robot teleoperation, HaRing delivers ambient information such as obstacle proximity." },
];

const bibtex = `@inproceedings{Nam2026:HaRing,
  author    = {Nam, Suheon and Son, Juhyung and Choi, Seungmoon and Park, Chaeyong},
  title     = {HaRing: A Haptic Ring Interface for One-Handed Interaction with High-Dimensional Spatial Information},
  year      = {2026},
  isbn      = {9798400722783},
  publisher = {Association for Computing Machinery},
  address   = {New York, NY, USA},
  url       = {https://doi.org/10.1145/3772318.3791663},
  doi       = {10.1145/3772318.3791663},
  booktitle = {Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems},
  articleno = {1119},
  numpages  = {15},
  keywords  = {Wearable Tactile Display, Finger-Worn Tactile Display, Ring, One-hand interaction, Spatial Tactile Pattern, Eyes-Free Interaction},
  series    = {CHI '26}
}`;

const expColorClass: Record<string, { bg: string; dot: string; text: string; badge: string }> = {
  teal:  { bg: "bg-teal-50 border-teal-200",  dot: "bg-teal-500",  text: "text-teal-700",  badge: "bg-teal-100 text-teal-700" },
  coral: { bg: "bg-coral-50 border-coral-200", dot: "bg-coral-500", text: "text-coral-700", badge: "bg-coral-100 text-coral-700" },
  gold:  { bg: "bg-gold-50 border-gold-200",   dot: "bg-gold-500",  text: "text-gold-700",  badge: "bg-gold-100 text-gold-700" },
};

function CopyBibtex() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(bibtex); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-teal-50 hover:text-teal-600 text-slate-500 text-xs font-semibold transition-colors"
    >
      {copied ? <><Check size={13} />Copied!</> : <><Copy size={13} />Copy BibTeX</>}
    </button>
  );
}

/* 자연 비율 이미지 — 이미지 크기에 맞게 박스가 줄어듦 */
function PaperImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [err, setErr] = useState(false);
  return (
    <div>
      {!err ? (
        <Image src={src} alt={alt} width={1200} height={600} className="w-full rounded-xl object-contain" onError={() => setErr(true)} />
      ) : (
        <div className="w-full aspect-video rounded-xl bg-slate-100 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200">
          <p className="text-xs text-slate-400 font-medium">{alt}</p>
          <p className="text-xs text-slate-300">Add image to public/images/pub_pages/haring/</p>
        </div>
      )}
      {caption && <p className="text-sm text-slate-400 text-center mt-2 italic">{caption}</p>}
    </div>
  );
}

/* 고정 높이 + 자연 너비 — 이미지에 딱 맞는 박스, letterbox 없음
   모바일: w-full h-auto (자연 비율 유지)
   데스크탑(sm+): h-고정 w-auto */
const smHeightMap: Record<string, string> = {
  "h-56": "sm:h-56", "h-64": "sm:h-64", "h-72": "sm:h-72", "h-80": "sm:h-80",
};
function FitImage({ src, alt, caption, h = "h-64" }: { src: string; alt: string; caption?: string; h?: string }) {
  const [err, setErr] = useState(false);
  const smH = smHeightMap[h] ?? "sm:h-64";
  return (
    <div className="flex flex-col items-center w-full">
      {!err ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto ${smH} sm:w-auto rounded-xl border border-slate-200`}
          onError={() => setErr(true)}
        />
      ) : (
        <div className={`w-full ${smH} sm:w-48 rounded-xl bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center`}>
          <p className="text-xs text-slate-400 text-center px-2">Add: {src.split("/").pop()}</p>
        </div>
      )}
      {caption && <p className="text-sm text-slate-400 text-center mt-2 italic">{caption}</p>}
    </div>
  );
}

/* 4:3 비율 고정 — 좌우 나란히 같은 높이 맞춤용 (결과 그래프 등) */
function RatioImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [err, setErr] = useState(false);
  return (
    <div>
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
        {!err ? (
          <Image src={src} alt={alt} fill className="object-contain" onError={() => setErr(true)} />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-xs text-slate-400">Add: {src.split("/").pop()}</p>
          </div>
        )}
      </div>
      {caption && <p className="text-sm text-slate-400 text-center mt-2 italic">{caption}</p>}
    </div>
  );
}

export default function HaRingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Back */}
      <div className="container-main pt-8 pb-0">
        <Link href="/publications" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-600 transition-colors">
          <ArrowLeft size={15} /> Publications
        </Link>
      </div>

      {/* Hero */}
      <section className="container-main py-10 sm:py-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="badge badge-teal text-sm px-3 py-1">{paper.venueShort} &middot; {paper.year}</span>
            <span className="badge badge-slate text-sm px-3 py-1">Barcelona, Spain</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl">
            {paper.title}
          </h1>

          <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1">
            {paper.authors.map((a) => (
              <span key={a.name} className="text-base text-slate-700 font-medium">
                {a.url ? (
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                    {a.name}
                  </a>
                ) : a.name}
                <sup className="text-slate-400 text-xs ml-0.5">{a.affil}</sup>
              </span>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap gap-x-4 gap-y-0.5">
            {paper.affiliations.map((a) => (
              <span key={a.id} className="text-sm text-slate-400">
                <sup className="mr-0.5">{a.id}</sup>{a.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={paper.doi} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={15} /> Paper (DOI)
            </a>
          </div>
        </motion.div>
      </section>

      {/* Teaser */}
      <section className="container-main pb-10">
        <AnimatedSection>
          <PaperImage
            src="/images/pub_pages/haring/teaser.png"
            alt="HaRing teaser — wearable haptic ring with 4×6 pin array"
            caption="HaRing is worn on the index finger and explored with the thumb, enabling eyes-free, one-handed interaction."
          />
        </AnimatedSection>
      </section>

      {/* Abstract */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-5 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Abstract
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">{paper.abstract}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Contributions */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Key Contributions
            </h2>
            <ul className="space-y-4">
              {contributions.map((c, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-teal-500 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-base text-slate-600 leading-relaxed">{c}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* HaRing Hardware */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              HaRing Design
            </h2>
            <p className="text-base text-slate-500 mb-8">
              HaRing is worn on the index finger and features a 4 × 6 pin array (24 pins total) actuated by individual solenoids with a flip-latch mechanism. The display module measures just 10.1 × 15.6 × 8.15 mm, fitting the ring form factor while delivering high-resolution spatial patterns.
            </p>
          </AnimatedSection>

          {/* 3 stat boxes — items-stretch keeps equal height */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8 items-stretch">
            {[
              { label: "Pin Array", value: "4 × 6", sub: "24 individually actuated pins" },
              { label: "Display Size", value: "10.1 mm", sub: "× 15.6 × 8.15 mm module" },
              { label: "Pattern Types", value: "Directions, Letters, Symbols", sub: "High-dimensional information" },
            ].map((s) => (
              <AnimatedSection key={s.label} className="flex">
                <div className="card p-5 text-center w-full flex flex-col justify-center">
                  <p className="text-2xl font-extrabold text-teal-600 mb-1">{s.value}</p>
                  <p className="text-sm font-semibold text-slate-700 mb-0.5">{s.label}</p>
                  <p className="text-xs text-slate-400">{s.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* fig2 + fig3: 같은 높이(h-64), 자연 너비, 가운데 정렬 */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-6 justify-center items-start">
              <FitImage
                src="/images/pub_pages/haring/fig2.png"
                alt="HaRing system architecture and hardware"
                caption="Fig. 2. System architecture, hardware, exploded view, and wearing example."
                h="h-64"
              />
              <FitImage
                src="/images/pub_pages/haring/fig3.png"
                alt="HaRing authoring tool"
                caption="Fig. 3. GUI-based authoring tool for creating tactile patterns."
                h="h-72"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* User Studies */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
              User Studies
            </h2>
            <p className="text-base text-slate-500 mb-10">
              Four sequential studies progressively validated HaRing&apos;s perceptual capabilities, from primitive pattern recognition to complex alphabet learning.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {experiments.map((exp, i) => {
              const c = expColorClass[exp.color];
              return (
                <AnimatedSection key={exp.id} delay={i * 0.07}>
                  <div className={`card p-6 border ${c.bg} h-full`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full ${c.dot}`} />
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.badge}`}>{exp.id}</span>
                      <span className={`font-bold text-base ${c.text}`}>{exp.title}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{exp.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {exp.results.map((r) => (
                        <div key={r.label} className="bg-white rounded-lg px-3 py-2 border border-slate-100">
                          <p className="text-base font-extrabold text-slate-900">{r.value}</p>
                          <p className="text-xs text-slate-400">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Designed Patterns from Exp. 2 — fig78 single wide image */}
          <AnimatedSection className="mt-12">
            <h3 className="text-lg font-extrabold text-slate-800 mb-2 flex items-center gap-3">
              <span className="w-5 h-1 bg-coral-500 rounded-full inline-block" />
              Designed Haptic Patterns (Exp. 2 Output)
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              10 participants iteratively designed patterns for 24 keywords using the HaRing authoring tool. The final patterns were selected by prioritizing user consensus, empirical perceptual data from Exp. 1, and expert refinement — balancing visual intuition with tactile distinguishability. Semantic patterns (left) include media controls, social actions, and confirmation symbols. Directional patterns (right) cover 8 cardinal directions and 4 navigation commands, designed using edge-based cues for clearer perceptual distinction.
            </p>
            <PaperImage
              src="/images/pub_pages/haring/fig78.png"
              alt="Designed patterns for semantic and directional information"
              caption="Fig. 7–8. Final haptic patterns designed for 12 semantic keywords (left) and 12 directional keywords (right)."
            />
          </AnimatedSection>

          {/* Exp. 3 & 4 Results */}
          <AnimatedSection className="mt-8">
            <div className="flex flex-wrap gap-6 justify-center items-start">
              <FitImage
                src="/images/pub_pages/haring/fig12.png"
                alt="Accuracy results of Exp. 3 pattern identification"
                caption="Fig. 12. Box plots for accuracy in Exp. 3: directions 98.3%, semantic 81.1%."
                h="h-72"
              />
              <FitImage
                src="/images/pub_pages/haring/fig13.png"
                alt="Learning effect results in Exp. 4"
                caption="Fig. 13. Accuracy improved from 68.8% to 93.2% after short-term learning."
                h="h-72"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-gold-500 rounded-full inline-block" />
              Application Scenarios
            </h2>
            <p className="text-base text-slate-500 mb-8">
              HaRing enables eyes-free, one-handed interaction across a variety of real-world and VR contexts where visual or auditory channels are occupied.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scenarios.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.07}>
                <div className="card p-5 h-full">
                  <p className="font-bold text-slate-900 text-sm mb-2">{s.title}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mt-8">
            <div className="max-w-2xl mx-auto">
              <PaperImage
                src="/images/pub_pages/haring/fig15.png"
                alt="HaRing application scenarios"
                caption="Fig. 15. Application scenarios: (a) eyes-free navigation, (b) VR menu selection, (c) unobtrusive information transfer, (d) remote object control."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Citation */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-3">
                <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
                Citation
              </h2>
              <CopyBibtex />
            </div>
            <pre className="bg-slate-900 text-slate-100 text-sm rounded-xl p-5 overflow-x-auto leading-relaxed font-mono">
              {bibtex}
            </pre>
          </AnimatedSection>
        </div>
      </section>

      {/* Acknowledgment */}
      <div className="container-main py-8 text-center">
        <p className="text-sm text-slate-400">
          This work was supported by ITRC (IITP-2026-RS-2024-00437866), NRF (RS-2024-00451947), NST (CRC23021-000), and ICT Creative Consilience Program (IITP-2026-RS-2020-II201819).
        </p>
      </div>

    </div>
  );
}
