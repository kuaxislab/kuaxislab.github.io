"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const paper = {
  title: "Effects of Spatiotemporal Parameters on Forearm Vibrotactile Stimulus Identification",
  authors: [
    { name: "Dong-Geun Kim", affil: "1", url: "https://dgkim94.github.io/" },
    { name: "Geunho Lee", affil: "1" },
    { name: "Suheon Nam", affil: "1" },
    { name: "Chaeyong Park", affil: "2", url: "https://chaeyongpark.github.io/" },
    { name: "Seungmoon Choi", affil: "1" , url: "https://choism.postech.ac.kr/"},
  ],
  affiliations: [
    { id: "1", name: "POSTECH" },
    { id: "2", name: "Korea University" },
  ],
  venue: "IEEE Haptics Symposium 2026",
  venueShort: "IEEE Haptics Symposium 2026",
  year: 2026,
  award: "Best Paper Nomination",
  abstract: `Touch provides a direct and private channel for transmitting information through the skin, offering a foundation for wearable tactile communication. This study examines how spatial and temporal parameters jointly determine the perceptual identifiability and information transfer of vibrotactile stimuli on the forearm. In six experiments, we characterize the effects of actuator density, vibration duration, inter-stimulus interval, and sequence length using multi-actuator arrays. Results showed that localization remained reliable up to four tactors per forearm band but deteriorated with higher spatial density. Shorter vibration durations around 0.5 s preserved accuracy while improving temporal efficiency, and an inter-stimulus interval around 0.5 s effectively reduced sequential interference. These findings delineate how spatial layout and temporal timing influence identifiability and information transfer on the forearm, and inform the design of compact, efficient wearable tactile displays.`,
};

const contributions = [
  "First comprehensive 6-experiment study jointly examining spatial and temporal parameters for forearm vibrotactile identification, filling a critical gap in the tactile communication literature",
  "Established that up to 4 tactors per forearm band enables reliable localization (>95% accuracy), while performance degrades sharply beyond this density",
  "Demonstrated that 3–4 arm bands distribute tactors effectively, improving accuracy from 85% to 93% (IT 3.1–3.2 bits) compared to 2-band layouts",
  "Showed that 0.5 s vibration duration preserves single-stimulus accuracy while quadrupling temporal efficiency versus 2 s",
  "Identified 0.5 s ISI as the practical optimum for sequential stimulation, effectively mitigating interference without requiring longer gaps",
];

const spatialExps = [
  {
    id: "Exp 1",
    title: "Two-Band Arrays",
    n: 10,
    desc: "Examined localization with 2–4 tactors per band across distal and proximal forearm bands. Performance remained consistently above 95% for all layouts.",
    findings: ">95% PC for up to 4 tactors/band",
    color: "teal",
  },
  {
    id: "Exp 2",
    title: "Array Density Effects",
    n: 10,
    desc: "Progressively increased tactor count from 8 to 12 within two-band configurations. Accuracy declined significantly beyond 8 tactors.",
    findings: "8 tactors: 96.5% → 12 tactors: 73.4%",
    color: "coral",
  },
  {
    id: "Exp 3",
    title: "Multi-Band Configurations",
    n: 10,
    desc: "Distributed tactors across 3–5 arm bands. The 12-tactor multi-band layouts achieved 85–93%, outperforming 2-band equivalents.",
    findings: "12-tactor, 3–4 bands: 85–93% (IT 3.1–3.2 bits)",
    color: "gold",
  },
];

const temporalExps = [
  {
    id: "Exp 4",
    title: "Vibration Duration",
    n: 10,
    desc: "Compared 1.0 s and 0.5 s vibrations on the best spatial configurations from Exp 3. Duration showed no significant main effect on single-stimulus identification.",
    findings: "No significant effect: 0.5 s ≈ 1.0 s accuracy",
    color: "teal",
  },
  {
    id: "Exp 5",
    title: "Inter-Stimulus Interval",
    n: 10,
    desc: "Tested two consecutive vibrations with ISIs of 0, 0.5, and 1.0 s. Full-sequence accuracy improved from 44.0% at 0 s to 50.6% at 0.5 s, with no further gain at 1.0 s.",
    findings: "ISI 0 s: 44.0%, ISI 0.5 s: 50.6%, ISI 1.0 s: 50.5%",
    color: "coral",
  },
  {
    id: "Exp 6",
    title: "Sequence Length × ISI",
    n: 10,
    desc: "Extended to 2- and 3-vibration sequences with 9 tactors. Longer sequences showed greater sensitivity to ISI; 3-vibration accuracy improved from 46.8% to 55.1% with 0.5 s vs 0.3 s ISI.",
    findings: "2-vibration: 72.4% | 3-vibration: 50.9%",
    color: "gold",
  },
];

const designGuidelines = [
  { title: "Limit to 4 tactors per band", desc: "Localization remains reliable up to 4 tactors per arm band. Beyond this, spatial interference sharply reduces identifiability." },
  { title: "Use 3–4 arm bands", desc: "Distributing tactors across 3–4 bands improves accuracy from ~73% to 87%, reducing intra-band confusion without excessive inter-band errors." },
  { title: "Use 0.5 s vibration duration", desc: "A 0.5 s duration preserves single-stimulus accuracy while enabling up to 4× higher information throughput compared to 2 s stimuli." },
  { title: "Apply 0.5 s ISI for sequences", desc: "A 0.5 s inter-stimulus interval effectively mitigates temporal masking. Longer intervals yield little additional benefit." },
  { title: "Reduce density for longer sequences", desc: "For multi-vibration sequences, reducing spatial density (e.g., 12 → 9 tactors) significantly improves both accuracy and information transfer." },
  { title: "Prefer distal/proximal locations", desc: "Tactors at the distal and proximal ends of the forearm consistently support more reliable identification than intermediate regions." },
];

const colorClass: Record<string, { card: string; dot: string; text: string; badge: string }> = {
  teal:  { card: "bg-teal-50 border-teal-200",  dot: "bg-teal-500",  text: "text-teal-700",  badge: "bg-teal-100 text-teal-700" },
  coral: { card: "bg-coral-50 border-coral-200", dot: "bg-coral-500", text: "text-coral-700", badge: "bg-coral-100 text-coral-700" },
  gold:  { card: "bg-gold-50 border-gold-200",   dot: "bg-gold-500",  text: "text-gold-700",  badge: "bg-gold-100 text-gold-700" },
};

const bibtex = `@inproceedings{kim2026spatiotemporal,
  title     = {Effects of Spatiotemporal Parameters on Forearm
               Vibrotactile Stimulus Identification},
  author    = {Kim, Dong-Geun and Lee, Geunho and Nam, Suheon
               and Park, Chaeyong and Choi, Seungmoon},
  booktitle = {Proceedings of the IEEE Haptics Symposium 2026},
  year      = {2026}
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

/* 이미지에 딱 맞는 박스 — 모바일: w-full h-auto / 데스크탑: h-고정 w-auto */
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

function ExpCard({ exp, type }: { exp: typeof spatialExps[0]; type: "spatial" | "temporal" }) {
  const c = colorClass[exp.color];
  return (
    <div className={`card p-6 border h-full ${c.card}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className={`w-3 h-3 rounded-full ${c.dot}`} />
        <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.badge}`}>{exp.id}</span>
        <span className={`font-bold text-sm ${c.text}`}>{exp.title}</span>
      </div>
      <p className="text-xs text-slate-400 mb-2">N = {exp.n} participants &middot; {type === "spatial" ? "Spatial" : "Temporal"}</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">{exp.desc}</p>
      <div className={`rounded-lg px-3 py-2 text-xs font-semibold ${c.badge}`}>
        {exp.findings}
      </div>
    </div>
  );
}

export default function SpatiotemporalPage() {
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
            <span className="badge badge-gold text-sm px-3 py-1">Best Paper Nomination</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl">
            {paper.title}
          </h1>

          <div className="mb-2 flex flex-wrap gap-x-4 gap-y-1">
            {paper.authors.map((a) => (
              <span key={a.name} className="text-base text-slate-700 font-medium">
                {a.url ? (
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="underline decoration-teal-500 decoration-2 underline-offset-2 hover:decoration-teal-700">
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
        </motion.div>
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

      {/* Apparatus — Fig 1 only */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Experimental Apparatus
            </h2>
            <p className="text-base text-slate-500 mb-8">
              ERM (Eccentric Rotating Mass) motors were used as vibrotactile actuators, driven by PWM signals from an Arduino Due. Tactors were mounted on adjustable velcro bands and positioned along the distal–proximal forearm axis, distributed across palmar, dorsal, medial, and lateral surfaces.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { value: "6", label: "Experiments", sub: "3 spatial + 3 temporal" },
              { value: "10/exp", label: "Participants", sub: "60 total across all experiments" },
              { value: "ERM", label: "Actuator Type", sub: "160 Hz, 1 G peak acceleration" },
              { value: "PC + IT", label: "Metrics", sub: "Percent-correct & Information Transfer" },
            ].map((s) => (
              <AnimatedSection key={s.label}>
                <div className="card p-4 text-center">
                  <p className="text-2xl font-extrabold text-teal-600 mb-0.5">{s.value}</p>
                  <p className="text-sm font-semibold text-slate-700">{s.label}</p>
                  <p className="text-xs text-slate-400">{s.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <FitImage
              src="/images/pub_pages/spatiotemporal/fig1.png"
              alt="Experimental setup showing forearm band placement"
              caption="Fig. 1. Example placement of tactors on the distal and proximal forearm using velcro bands."
              h="h-72"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Spatial Experiments — Fig 2 + Fig 4 at 40% */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
              Exp. 1–3: Effects of Spatial Factors
            </h2>
            <p className="text-base text-slate-500 mb-8">
              Three experiments systematically varied the number and arrangement of tactors to establish the spatial limits of forearm vibrotactile localization.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
            {spatialExps.map((exp, i) => (
              <AnimatedSection key={exp.id} delay={i * 0.07}>
                <ExpCard exp={exp} type="spatial" />
              </AnimatedSection>
            ))}
          </div>

          {/* Fig 2 + Fig 4 나란히 */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-6 justify-center items-start">
              <FitImage
                src="/images/pub_pages/spatiotemporal/fig2.png"
                alt="Spatial configurations of tactors used in Exp. 1–3"
                caption="Fig. 2. Spatial configurations used in Exp. 1–3."
                h="h-64"
              />
              <FitImage
                src="/images/pub_pages/spatiotemporal/fig4.png"
                alt="Results of Exp. 1–3 for spatial factors"
                caption="Fig. 4. PC scores and IT values across all spatial configurations in Exp. 1–3."
                h="h-64"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Temporal Experiments — Fig 9 first, Fig 11 second */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-gold-500 rounded-full inline-block" />
              Exp. 4–6: Effects of Temporal Factors
            </h2>
            <p className="text-base text-slate-500 mb-8">
              Using the optimal spatial configurations from Exp. 1–3, three further experiments examined vibration duration, inter-stimulus interval, and sequence length.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
            {temporalExps.map((exp, i) => (
              <AnimatedSection key={exp.id} delay={i * 0.07}>
                <ExpCard exp={exp} type="temporal" />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <FitImage
                src="/images/pub_pages/spatiotemporal/fig9.png"
                alt="Spatiotemporal conditions used in Exp. 4–6"
                caption="Fig. 9. Spatiotemporal conditions used in Exp. 4–6 with cross-sectional tactor layouts."
                h="h-72"
              />
              <FitImage
                src="/images/pub_pages/spatiotemporal/fig11.png"
                alt="Results of Exp. 4–6 temporal factors"
                caption="Fig. 11. PC scores for temporal experiments. Sequential stimuli accuracy by vibration number and ISI."
                h="h-72"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Design Guidelines */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Design Guidelines for Wearable Tactile Displays
            </h2>
            <p className="text-base text-slate-500 mb-8">
              Based on the six experiments, these guidelines inform the design of compact, efficient forearm-mounted vibrotactile displays for tactile communication.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {designGuidelines.map((g, i) => (
              <AnimatedSection key={g.title} delay={i * 0.06}>
                <div className="card p-5 h-full">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="font-bold text-slate-900 text-sm leading-snug">{g.title}</p>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed pl-9">{g.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="py-14">
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
          This work was supported by the Korean government (MSIT) through NST (CRC23021-000) and IITP (IITP-2026-RS-2024-00437866; IITP-RS-2025-02214780).
        </p>
      </div>

    </div>
  );
}
