"use client";

import Link from "next/link";
import { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const paper = {
  title: "Feeling Visual Motion: Mitigating Cybersickness in VR Using Tactile Motion Cues",
  authors: [
    { name: "Hyeseong Jin", affil: "1" },
    { name: "Jaehyeong Hwang", affil: "1" },
    { name: "Chaeyong Park", affil: "1", note: "†", url: "https://chaeyongpark.github.io/" },
  ],
  affiliations: [{ id: "1", name: "Korea University" }],
  venue: "IEEE ISMAR 2026",
  venueShort: "IEEE ISMAR 2026",
  year: 2026,
  abstract: `Despite rapid advancements in VR, cybersickness remains a critical barrier to comfortable user experiences. Cybersickness is often attributed to sensory conflict between perceived visual self-motion and the lack of corresponding vestibular feedback. We hypothesized that providing tactile motion cues as an alternative for vestibular stimuli could mitigate this conflict. To test this, we conducted an experiment using a haptic vest to deliver torso-based tactile motion cues synchronized with visual rotations in VR, focusing on yaw rotation as a first step. We evaluated sickness levels and UX across different directions (congruent and incongruent) and velocities. Results indicated that tactile motion opposing the visual direction—designed to mimic natural vestibular feedback—significantly reduced cybersickness and improved UX. Interestingly, tactile cues congruent with the visual direction also yielded positive outcomes when delivered at twice the visual velocity. These findings suggest that illusory tactile motion can help mitigate cybersickness without direct vestibular stimulation, highlighting the potential of haptic-based motion compensation for visually induced rotation in VR.`,
};

const contributions = [
  "First systematic mapping of torso-based rotational haptic motion cues—varying direction (congruent/incongruent) and velocity (1×/2×)—for mitigating yaw-rotation cybersickness in VR",
  "A Gaussian-based tactile-flow rendering algorithm for a 32-actuator haptic vest, with a single spread parameter (σ ≈ 1.46) shown to stay stable across velocities and torso regions",
  "A user study (N = 17) showing that opposite-direction cues at matched velocity (vestibular substitution) and same-direction cues at doubled velocity (visual reinforcement) both significantly reduced cybersickness and improved Haptic User Experience (HUX)",
  "Design implications for VR: amplify velocity for congruent haptic cues, but synchronize velocity for incongruent ones—simple velocity matching alone is not sufficient",
];

const conditions = [
  { id: "VO-2", title: "Opposite x2 velocity", desc: "Deviated from the expected vestibular relationship. Weakest and least consistent effect among the four haptic conditions.", color: "slate" },
  { id: "VO-1", title: "Opposite x1 velocity", desc: "Mimics natural vestibular feedback (vestibular substitution). Produced the strongest, most consistent sickness reduction across SSQ and FMS.", color: "teal" },
  { id: "VS-1", title: "Same x1 velocity", desc: "Matched visual velocity but same direction. Lowered SSQ somewhat, yet showed no HUX benefit over no haptics, congruence alone was not salient enough.", color: "gold" },
  { id: "VS-2", title: "Same x2 velocity", desc: "Reinforces the visual motion with a salient illusory spinning sensation. Reduced sickness and, uniquely among same-direction cues, boosted HUX.", color: "coral" },
];

const stats = [
  { value: "1.46", label: "Optimal σ", sub: "Stable across velocity & torso region" },
  { value: "−20%", label: "Oculomotor SSQ", sub: "VO-1 / VS-1 / VS-2 vs. no-haptic" },
  { value: "N = 17", label: "Main Study", sub: "22 recruited, 5 excluded for FMS criteria" },
  { value: "4", label: "Haptic Conditions", sub: "2 (direction) × 2 (velocity) factorial" },
];

const resultKeys = [
  { label: "SSQ", value: "VO-1, VS-1, VS-2 all lower than no-haptic (esp. Oculomotor); VO-2 no benefit" },
  { label: "FMS over time", value: "all 4 haptic conditions slow sickness buildup; VO-1 & VS-2 flattest" },
  { label: "HUX", value: "only VO-1 & VS-2 improve Harmony/Autotelic over no-haptic" },
];

const colorClass: Record<string, { card: string; dot: string; text: string; badge: string }> = {
  teal:  { card: "bg-teal-50 border-teal-200",  dot: "bg-teal-500",  text: "text-teal-700",  badge: "bg-teal-100 text-teal-700" },
  coral: { card: "bg-coral-50 border-coral-200", dot: "bg-coral-500", text: "text-coral-700", badge: "bg-coral-100 text-coral-700" },
  gold:  { card: "bg-gold-50 border-gold-200",   dot: "bg-gold-500",  text: "text-gold-700",  badge: "bg-gold-100 text-gold-700" },
  slate: { card: "bg-slate-50 border-slate-200", dot: "bg-slate-400", text: "text-slate-600",  badge: "bg-slate-100 text-slate-600" },
};

const guidelines = [
  { title: "Continuous motion rendering", desc: "Gaussian-based spatial interpolation across multiple actuators produces a seamless tactile flow around the torso." },
  { title: "Amplify velocity for congruent cues", desc: "Same-direction haptic motion (VS-1 → VS-2) needs to run faster than the visual speed to become perceptually salient and actually improve HUX." },
  { title: "Synchronize velocity for incongruent cues", desc: "Opposite-direction cues (VO-1, not VO-2) work best when matched to the visual rotational speed, facilitating effective illusory self-motion." },
  { title: "Torso-scale, non-invasive feedback", desc: "A wearable vest delivers spatial haptic cues without directly stimulating the vestibular system, preserving user comfort." },
];

const bibtex = `@inproceedings{Jin2026:feeling,
    author    = {Jin, Hyeseong and Hwang, Jaehyeong and Park, Chaeyong},
    title     = {Feeling Visual Motion: Mitigating Cybersickness in VR Using Tactile Motion Cues},
    booktitle = {2026 IEEE International Symposium on Mixed and Augmented Reality (ISMAR)},
    year      = {2026},
    note      = {Conditionally accepted, to appear}
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

const smHeightMap: Record<string, string> = {
  "h-56": "sm:max-h-56", "h-64": "sm:max-h-64", "h-72": "sm:max-h-72", "h-80": "sm:max-h-80",
  "h-[27rem]": "sm:max-h-[27rem]",
};
function FitImage({ src, alt, caption, h = "h-64" }: { src: string; alt: string; caption?: string; h?: string }) {
  const [err, setErr] = useState(false);
  const smH = smHeightMap[h] ?? "sm:max-h-64";
  return (
    <div className="flex flex-col items-center w-full">
      {!err ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto sm:h-auto sm:w-auto sm:max-w-full ${smH} rounded-xl border border-slate-200 bg-white`}
          onError={() => setErr(true)}
        />
      ) : (
        <div className={`w-full ${h} ${smH} sm:w-48 rounded-xl bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center`}>
          <p className="text-xs text-slate-400 text-center px-2">Add: {src.split("/").pop()}</p>
        </div>
      )}
      {caption && <p className="text-sm text-slate-400 text-center mt-2 italic">{caption}</p>}
    </div>
  );
}

export default function TactileMotionPage() {
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
            <span className="badge badge-gold text-sm px-3 py-1">Conditionally Accepted</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
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

      {/* Teaser */}
      <section className="container-main pb-10">
        <AnimatedSection>
          <FitImage
            src="/images/pub_pages/tactile-motion/teaser.png"
            alt="Overview of congruent and incongruent haptic rotational motion cues"
            caption="Congruent and incongruent torso-based haptic rotational motion cues were compared during visual yaw rotation in VR to mitigate cybersickness and enhance haptic user experience."
            h="h-72"
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
            <p className="text-base text-slate-600 leading-relaxed text-justify">{paper.abstract}</p>
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
                  <p className="text-base text-slate-600 leading-relaxed text-justify">{c}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* System */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Visual-Haptic Motion Generation System
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              A commercial 32-actuator haptic vest (TactSuit Pro) renders a continuous virtual vibration point that flows around the torso. Intensity is distributed across the closest actuators with a Gaussian profile, and the point&apos;s position is updated over time to create a smooth rotational tactile flow synchronized with the yaw-axis visual rotation, at roughly 20 ms haptic latency.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <FitImage
              src="/images/pub_pages/tactile-motion/fig2_rendering.png"
              alt="Haptic rendering methods for torso-based motion cue generation"
              caption="Fig. 2. Actuator layout, Gaussian-based virtual point rendering, and the resulting temporal tactile flow around the torso."
              h="h-[27rem]"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Preliminary experiment */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
              Preliminary Experiment: Optimal Rendering Configuration
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Ten participants calibrated their preferred vibration intensity, then tuned the spread parameter &sigma; for a natural rotational flow across three angular velocities and the front/back vs. lateral torso regions, and ranked four candidate vertical stimulation lines. Contrary to expectation, &sigma; stayed remarkably stable (overall mean 1.46) regardless of velocity or region&mdash;a single unified configuration was sufficient, and the third line (L3, mid-torso) was preferred as it avoided rib-borne discomfort.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <FitImage
              src="/images/pub_pages/tactile-motion/fig4_preliminary.png"
              alt="Preliminary experiment results on intensity, sigma, and line preference"
              caption="Fig. 4. Preferred vibration intensity, mean σ across velocities and regions, the resulting Gaussian profile, and mean preference ranks for the four candidate lines."
              h="h-64"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Main experiment */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-gold-500 rounded-full inline-block" />
              User Experiment: Direction &amp; Velocity Design Space
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Seventeen participants (of 22 recruited) experienced a 150 s theme-park VR yaw rotation under five conditions: No-Haptic (NH) and a 2&times;2 factorial of direction (Same/Opposite) &times; velocity (1&times;/2&times;). Sickness (SSQ, FMS) and Haptic User Experience (Harmony, Autotelics, Immersion, Discomfort) were assessed after every trial.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {conditions.map((cond, i) => {
              const c = colorClass[cond.color];
              return (
                <AnimatedSection key={cond.id} delay={i * 0.06}>
                  <div className={`card p-5 border h-full ${c.card}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.badge}`}>{cond.id}</span>
                    </div>
                    <p className={`font-bold text-sm mb-1.5 ${c.text}`}>{cond.title}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cond.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Results</h3>
            <ul className="space-y-2 mb-8">
              {resultKeys.map((r) => (
                <li key={r.label} className="flex gap-2.5 text-sm text-slate-600">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500 mt-2" />
                  <span><span className="font-semibold text-slate-900">{r.label}</span> &mdash; {r.value}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection className="mb-8">
            <FitImage
              src="/images/pub_pages/tactile-motion/fig6_ssq_fms.png"
              alt="SSQ and FMS results across conditions"
              caption="Fig. 6. (a) ΔSSQ and raw SSQ by subscale and condition. (b) Temporal progression of momentary sickness (FMS) over the 150 s exposure."
              h="h-64"
            />
          </AnimatedSection>

          <AnimatedSection>
            <FitImage
              src="/images/pub_pages/tactile-motion/fig7_hux.png"
              alt="Haptic User Experience results across conditions"
              caption="Fig. 7. Haptic User Experience (Harmony, Autotelics, Immersion, Discomfort) by condition. VO-1 and VS-2 both improved HUX; VS-1 did not."
              h="h-64"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <AnimatedSection key={s.label}>
                <div className="card p-4 text-center">
                  <p className="text-2xl font-extrabold text-teal-600 mb-0.5">{s.value}</p>
                  <p className="text-sm font-semibold text-slate-700">{s.label}</p>
                  <p className="text-xs text-slate-400">{s.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Design guidelines */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Design Implications for Rotational VR Experiences
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Achieving both cybersickness mitigation and a better haptic experience requires context-aware rendering tailored to whether the cue reinforces or opposes the visual motion.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {guidelines.map((g, i) => (
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
          This work was partly supported by the Institute of Information &amp; Communications Technology Planning &amp; Evaluation (IITP)-ICT Creative Consilience Program (IITP-2026-RS-2020-II201819) and by the National Research Foundation of Korea (NRF) (RS-2026-25483739) grant funded by the Korea government (MSIT).
        </p>
      </div>

    </div>
  );
}
