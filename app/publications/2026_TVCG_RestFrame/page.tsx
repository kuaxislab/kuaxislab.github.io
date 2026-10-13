"use client";

import Link from "next/link";
import { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const paper = {
  title: "Cybersickness Reduction Effects of Visual and Vestibular Player-Fixed Rest Frames",
  authors: [
    { name: "Jungha Kim", affil: "1" },
    { name: "Seunghoon Park", affil: "2" },
    { name: "Chaeyong Park", affil: "1", url: "https://chaeyongpark.github.io/" },
    { name: "Sun-Uk Lee", affil: "3" },
    { name: "Gerard J. Kim", affil: "1", note: "†" },
  ],
  affiliations: [
    { id: "1", name: "Korea University, Dept. of Computer Science and Engineering" },
    { id: "2", name: "PUBG Research Center, KRAFTON Inc." },
    { id: "3", name: "Korea University Medical Center, Dept. of Neurology" },
  ],
  venue: "IEEE Transactions on Visualization and Computer Graphics (IEEE ISMAR 2026)",
  venueShort: "IEEE TVCG (ISMAR 2026)",
  year: 2026,
  abstract: `Player-fixed rest frames (RFs) such as virtual noses have been proposed as cybersickness mitigation cues, yet their underlying mechanisms remain unclear. This study investigates how a player-fixed RF influences cybersickness, eye movement behavior, and perceived orientation during passive visually induced motion. In two experiments using a virtual roller coaster with eye tracking, we found that a player-fixed RF reduced overall cybersickness without compromising presence or vection, and promoted a more centralized gaze distribution that progressively diverged from the control condition over repeated trials. However, because the RF's presence and its alignment with upright were confounded in this setting, a second experiment introduced a visual–vestibular conflict through scene tilt. Under this conflict, only an RF aligned with gravitational (vestibular) upright suppressed the cumulative buildup of sickness and preserved veridical orientation perception, whereas an RF aligned with the tilted visual scene did not. These results suggest that a player-fixed RF operates through at least two channels: redistributing gaze away from destabilizing peripheral motion, and serving as an egocentric orientation reference whose effectiveness may be further enhanced by its congruence with vestibular upright.`,
};

const contributions = [
  "Two eye-tracking experiments (N = 20, N = 24) show a player-fixed rest frame (virtual nose) reduces cybersickness (SSQ, FMS) without harming presence or vection, and drives a gaze pattern that centralizes progressively over repeated exposure",
  "By tilting the visual scene 30° to dissociate visual from vestibular upright, shows that only a rest frame aligned with true gravitational upright suppresses the cumulative buildup of sickness and preserves accurate perceived verticality (SVV)—a visually-aligned cue does not",
  "Proposes a two-channel account of player-fixed rest frames: a scenario-dependent gaze-redistribution/occlusion effect, and an orientation-reference effect tied to vestibular congruence that generalizes across visual-motion contexts",
  "Reconciles conflicting prior findings on virtual-nose efficacy in the literature by showing that cue congruence—not mere visibility—determines effectiveness",
];

const exp1Stats = [
  { value: "20", label: "Participants", sub: "Passive VR roller coaster, eye tracked" },
  { value: "2 × 8", label: "Design", sub: "Control vs. RF × 8 repeated trials" },
  { value: "0.706 → 0.375", label: "FMS Slope / Trial", sub: "Control vs. RF (47% slower accumulation)" },
  { value: "17 / 33", label: "Ocular Variables Shifted", sub: "Gaze centralized toward screen center" },
];

const exp2Conditions = [
  { id: "T-Control", title: "Tilted, No Cue", desc: "30°-tilted scene with no rest frame. Fastest cybersickness buildup and largest, most unstable perceived-vertical error.", color: "slate" },
  { id: "Visual G-Cue", title: "Aligned to Tilted Scene", desc: "Rest frame rotated with the visual scene. Reduced overall FMS somewhat, but its rate of buildup mirrored T-Control, and it did not help perceived verticality.", color: "coral" },
  { id: "Vestibular G-Cue", title: "Aligned to True Upright", desc: "Rest frame kept at the real, gravity-aligned nose position. Only this condition flattened the sickness-accumulation slope and preserved accurate subjective visual vertical.", color: "teal" },
];

const exp2Stats = [
  { value: "24", label: "Participants", sub: "3 × 4 within-subject, 30° scene tilt" },
  { value: "1.375 → 0.554", label: "FMS Slope / Trial", sub: "T-Control vs. Vestibular-aligned RF" },
  { value: "r = 0.84", label: "SSQ Disorientation & Total", sub: "Vestibular RF vs. T-Control, largest effect sizes" },
  { value: "2", label: "Dissociable Channels", sub: "Gaze redistribution + orientation reference" },
];

const channels = [
  { title: "Channel 1 — Gaze redistribution", desc: "The rest frame's mere presence draws gaze away from the destabilizing lower/peripheral visual field toward a centralized viewing strategy. Its benefit scales with how much destabilizing optic flow actually falls within the occluded region." },
  { title: "Channel 2 — Orientation reference", desc: "When the rest frame is congruent with gravitational upright, it also functions as a stable egocentric reference for self-orientation—suppressing the cumulative buildup of sickness and preserving veridical verticality judgments." },
  { title: "Both channels usually align", desc: "In most everyday VR content the scene remains upright, so a player-fixed rest frame naturally satisfies both channels at once—explaining why virtual noses are broadly, if inconsistently, reported as helpful." },
  { title: "Design implication", desc: "Cue placement (what it occludes) and cue alignment (what upright it represents) should be treated as two independent levers when designing cybersickness mitigation cues, not a single unitary manipulation." },
];

const colorClass: Record<string, { card: string; dot: string; text: string; badge: string }> = {
  teal:  { card: "bg-teal-50 border-teal-200",  dot: "bg-teal-500",  text: "text-teal-700",  badge: "bg-teal-100 text-teal-700" },
  coral: { card: "bg-coral-50 border-coral-200", dot: "bg-coral-500", text: "text-coral-700", badge: "bg-coral-100 text-coral-700" },
  slate: { card: "bg-slate-50 border-slate-200", dot: "bg-slate-400", text: "text-slate-600",  badge: "bg-slate-100 text-slate-600" },
};

const bibtex = `@article{kim2026:cybersickness,
    author={Kim, Jungha and Park, Seunghoon and Park, Chaeyong and Lee, Sun-Uk and Kim, Gerard J.},
    journal={IEEE Transactions on Visualization and Computer Graphics}, 
    title={Cybersickness Reduction Effects of Visual and Vestibular Player-Fixed Rest Frames}, 
    year={2026},
    volume={XX},
    number={X},
    pages={XXXX-XXXX},
    doi={10.1109/TVCG.2026.XXXXXX}
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
  "h-[24rem]": "sm:max-h-[24rem]", "h-[32rem]": "sm:max-h-[32rem]",
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

function FullWidthImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [err, setErr] = useState(false);
  return (
    <div className="flex flex-col items-center w-full">
      {!err ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-xl border border-slate-200 bg-white"
          onError={() => setErr(true)}
        />
      ) : (
        <div className="w-full aspect-video rounded-xl bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center">
          <p className="text-xs text-slate-400 text-center px-2">Add: {src.split("/").pop()}</p>
        </div>
      )}
      {caption && <p className="text-sm text-slate-400 text-center mt-2 italic">{caption}</p>}
    </div>
  );
}

export default function RestFramePage() {
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
            <span className="badge badge-slate text-sm px-3 py-1">Q1 Journal &middot; JCR top 7.4%</span>
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

      {/* Teaser placeholder */}
      <section className="container-main pb-10">
        <AnimatedSection>
          <FitImage
            src="/images/pub_pages/rest-frame/teaser.png"
            alt="Player-fixed rest frame overview"
            caption="A player-fixed rest frame (virtual nose) provides a stable egocentric reference during visually induced motion in VR."
            h="h-[32rem]"
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

      {/* Exp 1 */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
              Exp. 1: Does a Rest Frame Reduce Sickness — and How?
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Twenty participants rode a passive, upright VR roller coaster for eight repeated one-minute trials, once with a virtual-nose rest frame and once without, while an eye tracker recorded gaze. The RF condition showed significantly lower SSQ Oculomotor, Disorientation, and Total scores, and a Fast Motion Sickness (FMS) score that climbed roughly twice as slowly as Control&mdash;with no cost to presence (IPQ) or vection. Seventeen of 33 ocular variables shifted significantly: fixations moved away from the lower visual field (where the nose sat) toward the screen center, saccades grew smaller and more frequent, and this centralization strengthened progressively across the eight trials, tracking the same timeline as the FMS divergence.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 items-stretch">
            {exp1Stats.map((s) => (
              <AnimatedSection key={s.label} className="h-full">
                <div className="card p-4 text-center h-full flex flex-col justify-center">
                  <p className="text-xl font-extrabold text-teal-600 mb-0.5">{s.value}</p>
                  <p className="text-sm font-semibold text-slate-700">{s.label}</p>
                  <p className="text-xs text-slate-400">{s.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <FitImage
                src="/images/pub_pages/rest-frame/fig2_ssq_exp1.png"
                alt="Experiment 1 SSQ subscale results"
                caption="Fig. 2. Mean SSQ subscale scores by condition. RF was significantly lower on Oculomotor, Disorientation, and Total."
                h="h-[24rem]"
              />
              <FitImage
                src="/images/pub_pages/rest-frame/fig3_fms_exp1.png"
                alt="Experiment 1 FMS results across trials"
                caption="Fig. 3. Mean FMS ratings across trials. RF's sickness accumulated at roughly half the rate of Control."
                h="h-[24rem]"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Exp 2 */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-gold-500 rounded-full inline-block" />
              Exp. 2: Separating Occlusion from Orientation
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              In Exp. 1, the rest frame&apos;s presence, its alignment with the (upright) visual scene, and its alignment with vestibular upright were all confounded. Exp. 2 tilted the entire scene 30&deg; while participants stayed physically upright, then compared no cue against two rest frames&mdash;one kept at the real, gravity-aligned nose position (Vestibular G-Cue) and one rotated with the tilted scene (Visual G-Cue)&mdash;while also measuring Subjective Visual Vertical (SVV) to track perceived gravity.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {exp2Conditions.map((cond, i) => {
              const c = colorClass[cond.color];
              return (
                <AnimatedSection key={cond.id} delay={i * 0.07}>
                  <div className={`card p-6 border ${c.card} h-full`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full ${c.dot}`} />
                      <span className={`font-bold text-sm ${c.text}`}>{cond.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-semibold mb-2">{cond.id}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{cond.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mb-8">
            <FitImage
              src="/images/pub_pages/rest-frame/fig5_conditions_exp2.png"
              alt="Experiment 2 tilted-scene conditions"
              caption="Fig. 5. The three Experiment 2 conditions: the scene was tilted 30° while the rest frame stayed at true upright (Vestibular G-Cue) or rotated with the scene (Visual G-Cue)."
              h="h-56"
            />
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 items-stretch">
            {exp2Stats.map((s) => (
              <AnimatedSection key={s.label} className="h-full">
                <div className="card p-4 text-center h-full flex flex-col justify-center">
                  <p className="text-xl font-extrabold text-teal-600 mb-0.5">{s.value}</p>
                  <p className="text-sm font-semibold text-slate-700">{s.label}</p>
                  <p className="text-xs text-slate-400">{s.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <FullWidthImage
                src="/images/pub_pages/rest-frame/fig7_ssq_exp2.png"
                alt="Experiment 2 SSQ subscale results"
                caption="Fig. 7. Mean SSQ subscale scores by condition. Vestibular G-Cue RF was lowest across all subscales."
              />
              <FullWidthImage
                src="/images/pub_pages/rest-frame/fig8_fms_exp2.png"
                alt="Experiment 2 FMS results across trials"
                caption="Fig. 8. Mean FMS ratings across trials. Only the vestibular-aligned RF flattened the sickness-accumulation slope."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Two-channel account */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              A Two-Channel Account of Player-Fixed Rest Frames
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Together, the two experiments suggest that a player-fixed rest frame is not a single, unitary manipulation—it acts through two at least partially separable channels, which explains the mixed findings on virtual-nose efficacy across the prior literature.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {channels.map((g, i) => (
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
          This work was partly supported by MSIT Korea under the Global Research Support Program in the Digital Field Program (RS-2024-00431357), and the ICT Creative Consilience Program (IITP-2026-RS-2020-II201819), through the Institute of Information &amp; Communications Technology Planning &amp; Evaluation (IITP).
        </p>
      </div>

    </div>
  );
}
