"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Copy, Check, ArrowLeft, Github } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const paper = {
  title: "HaptiCraft: A Modular Multimodal Haptic Controller for Immersive Virtual Reality Interactions",
  authors: [
    { name: "Chaeyong Park", affil: "1", note: "*", url: "https://chaeyongpark.github.io/" },
    { name: "Jeongwoo Kim", affil: "2" },
    { name: "Yuk-Gwon Song", affil: "3" },
    { name: "Sang-Youn Kim", affil: "3" },
    { name: "Seungmoon Choi", affil: "2", note: "†" },
  ],
  affiliations: [
    { id: "1", name: "Korea University" },
    { id: "2", name: "POSTECH" },
    { id: "3", name: "KOREATECH" },
  ],
  venue: "IEEE Transactions on Visualization and Computer Graphics",
  venueShort: "IEEE TVCG",
  year: 2026,
  doi: "https://doi.org/10.1109/TVCG.2026.3683951",
  github: "https://github.com/ChaeyongPark-KU/HaptiCraft",
  abstract: `This paper presents HaptiCraft, a modular handheld haptic controller designed to replicate the appearance, mass distribution, and multimodal haptic properties of virtual objects. HaptiCraft consists of many modules that provide distinct functions for assembly and multimodal haptic feedback, supporting five types: vibration, impact, thermal, variable inertia, and variable stiffness. Users can readily assemble these modules to create a controller tailored to their needs. To simplify the design process, especially for novice users, we also provide a graphical authoring tool and assess its usability. Finally, we evaluate the system's effectiveness through various virtual reality (VR) scenarios, demonstrating that HaptiCraft significantly enhances user experience.`,
};

const contributions = [
  "Six distinct haptic modules (vibration, impact, thermal, variable inertia, variable stiffness, and shape) that support flexible modular assembly",
  "A graphical authoring tool enabling novice users to design both controller shape and multimodal haptic feedback",
  "Perceptual validation confirming 83.4% identification accuracy for bimodal (V+I) stimuli",
  "Summative VR user study with 18 participants across 7 VR scenarios demonstrating significant UX improvements",
];

const modules = [
  {
    name: "Shape",
    weight: "55 g | 48x48x48 mm",
    desc: "Unit cube module for structural assembly. Provides no active haptic effect but forms the spatial scaffold of the controller.",
    color: "slate",
  },
  {
    name: "Vibration",
    weight: "71 g",
    desc: "Dual-motor vibrotactile feedback up to 6 G amplitude across 0-210 Hz, covering a wide perceptual frequency range.",
    color: "teal",
  },
  {
    name: "Impact",
    weight: "71 g",
    desc: "Short, strong impulse at 30 G / 100 ms, perceptually distinct from vibration for events like gunshots or collisions.",
    color: "coral",
  },
  {
    name: "Thermal",
    weight: "65 g",
    desc: "Peltier element delivers +18C heating and -8C cooling relative to ambient, enabling temperature sensation in VR.",
    color: "gold",
  },
  {
    name: "Variable Inertia",
    weight: "235 g",
    desc: "A moving brass mass shifts the moment of inertia (1.02-2.17 x10^4 g cm^2), simulating different object lengths.",
    color: "teal",
  },
  {
    name: "Variable Stiffness",
    weight: "140 g",
    desc: "Magneto-rheological fluid actuator provides more than 10x stiffness range (2-25 N/mm), rendering soft or rigid surface feel.",
    color: "coral",
  },
];

const vrScenarios = [
  { name: "Gatling Gun", haptics: "Impact + Inertia" },
  { name: "Flamethrower", haptics: "Vibration + Heat" },
  { name: "Sword", haptics: "Impact + Inertia" },
  { name: "Wand", haptics: "Vibration + Inertia" },
  { name: "Cup", haptics: "Vibration + Impact + Thermal" },
  { name: "Drill", haptics: "Vibration + Impact" },
  { name: "Frying Pan", haptics: "Inertia only" },
];

const bibtex = `@article{park2026hapticraft,
  title   = {HaptiCraft: A Modular Multimodal Haptic Controller
             for Immersive Virtual Reality Interactions},
  author  = {Park, Chaeyong and Kim, Jeongwoo and Song, Yuk-Gwon
             and Kim, Sang-Youn and Choi, Seungmoon},
  journal = {IEEE Transactions on Visualization and Computer Graphics},
  year    = {2026},
  doi     = {10.1109/TVCG.2026.3683951}
}`;

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

function FigurePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full aspect-video rounded-xl bg-slate-100 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200">
      <p className="text-xs text-slate-400 font-medium">Figure: {label}</p>
      <p className="text-xs text-slate-300">Add image to public/images/pub_pages/hapticraft/</p>
    </div>
  );
}

function PaperImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [err, setErr] = useState(false);
  return (
    <div>
      {!err ? (
        <Image src={src} alt={alt} width={1200} height={600} className="w-full rounded-xl object-cover" onError={() => setErr(true)} />
      ) : (
        <FigurePlaceholder label={alt} />
      )}
      {caption && <p className="text-sm text-slate-400 text-center mt-2 italic">{caption}</p>}
    </div>
  );
}

function FixedHeightImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [err, setErr] = useState(false);
  return (
    <div>
      <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
        {!err ? (
          <Image src={src} alt={alt} width={800} height={500} className="w-full h-full object-contain" onError={() => setErr(true)} />
        ) : (
          <p className="text-xs text-slate-400">Add: {src.split("/").pop()}</p>
        )}
      </div>
      {caption && <p className="text-sm text-slate-400 text-center mt-2 italic">{caption}</p>}
    </div>
  );
}

const moduleColorClass: Record<string, { bg: string; dot: string; text: string }> = {
  teal:  { bg: "bg-teal-50 border-teal-200",  dot: "bg-teal-500",  text: "text-teal-700" },
  coral: { bg: "bg-coral-50 border-coral-200", dot: "bg-coral-500", text: "text-coral-700" },
  gold:  { bg: "bg-gold-50 border-gold-200",   dot: "bg-gold-500",  text: "text-gold-700" },
  slate: { bg: "bg-slate-50 border-slate-200", dot: "bg-slate-400", text: "text-slate-600" },
};

export default function HaptiCraftPage() {
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
            <span className="badge badge-slate text-sm px-3 py-1">Q1 Journal &middot; JCR top 5.4%</span>
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
            <a href={paper.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={15} /> GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* Teaser */}
      <section className="container-main pb-10">
        <AnimatedSection>
          <PaperImage
            src="/images/pub_pages/hapticraft/teaser.png"
            alt="HaptiCraft teaser"
            caption="HaptiCraft: (a) individual modules and (b) Gun, (c) Steering Wheel, (d) Cup use cases in VR."
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

      {/* Modules */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              HaptiCraft Modules
            </h2>
            <p className="text-base text-slate-500 mb-10 max-w-2xl">
              Each module serves a distinct function and can be freely assembled with magnetic pogo-pin connectors, sharing power from a single battery module.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m, i) => {
              const c = moduleColorClass[m.color];
              return (
                <AnimatedSection key={m.name} delay={i * 0.07}>
                  <div className={`card p-6 border ${c.bg} h-full`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full ${c.dot}`} />
                      <span className={`font-bold text-base ${c.text}`}>{m.name} Module</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mb-2">{m.weight}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mt-8">
            <PaperImage
              src="/images/pub_pages/hapticraft/fig3.png"
              alt="Designs of haptic modules"
              caption="Fig. 3. Designs of haptic modules: (a) shape, (b) vibration, (c) impact, (d) thermal, (e) variable inertia, (f) variable stiffness."
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Authoring Tool */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-5 flex items-center gap-3">
              <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
              Graphical Authoring Tool
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              HaptiCraft includes a WYSIWYG graphical authoring tool that allows users&nbsp;&mdash; including haptic novices&nbsp;&mdash; to design both the physical controller shape and multimodal haptic feedback through an intuitive GUI. Users assemble modules visually, then assign haptic properties via a timeline-based editor. The tool exports a <code className="text-teal-600 bg-teal-50 px-1 rounded text-sm">.hdf</code> file compatible with Unity.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { score: "6.3", label: "Perceived Ease of Use" },
                { score: "6.6", label: "Attitude Toward Using" },
                { score: "6.4", label: "Behavioral Intention" },
              ].map((s) => (
                <div key={s.label} className="card p-4 text-center">
                  <p className="text-3xl font-extrabold text-coral-600 mb-1">
                    {s.score}<span className="text-lg text-slate-300">/7</span>
                  </p>
                  <p className="text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 justify-center items-start">
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/pub_pages/hapticraft/fig9.png" alt="GUI of HaptiCraft authoring tool" className="w-full h-auto sm:h-64 sm:w-auto rounded-xl border border-slate-200" />
                <p className="text-sm text-slate-400 text-center mt-2 italic">Fig. 9. GUI of the HaptiCraft authoring tool.</p>
              </div>
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/pub_pages/hapticraft/fig12.png" alt="TAM results of authoring tool user study" className="w-full h-auto sm:h-64 sm:w-auto rounded-xl border border-slate-200" />
                <p className="text-sm text-slate-400 text-center mt-2 italic">Fig. 12. Technology Acceptance Model (TAM) for the controller authoring tool.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* VR Study */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-gold-500 rounded-full inline-block" />
              Summative VR User Study
            </h2>
            <p className="text-base text-slate-500 mb-10">
              18 participants evaluated HaptiCraft Multimodal (HAP-MM), HaptiCraft Unimodal (HAP-UM), and a commercial controller (COM) across 7 VR scenarios, rating Realism, Immersion, Harmony, and Enjoyment.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {vrScenarios.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.06}>
                <div className="card p-4">
                  <p className="font-bold text-slate-900 text-sm mb-1">{s.name}</p>
                  <p className="text-xs text-teal-600 font-medium">{s.haptics}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <PaperImage
              src="/images/pub_pages/hapticraft/fig15.png"
              alt="Seven VR scenarios"
              caption="Fig. 15. Seven VR scenarios evaluated in the summative user study, each paired with a multimodal haptic controller (HAP-MM)."
            />
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
          This work was supported by NRF (RS-2024-00451947, RS-2026-25483739), ITRC (IITP-2026-RS-2024-00437866), and ICT Creative Consilience Program (IITP-2026-RS-2020-II201819).
        </p>
      </div>

    </div>
  );
}
