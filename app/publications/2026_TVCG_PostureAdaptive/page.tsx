"use client";

import Link from "next/link";
import { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const paper = {
  title: "Posture-Adaptive Azimuthal Guidance via a Forearm Vibrotactile Interface for VR Navigation",
  authors: [
    { name: "Jaehyeong Hwang", affil: "1" },
    { name: "Hyeseong Jin", affil: "1" },
    { name: "Chaeyong Park", affil: "1", note: "†", url: "https://chaeyongpark.github.io/" },
  ],
  affiliations: [{ id: "1", name: "Korea University" }],
  venue: "IEEE Transactions on Visualization and Computer Graphics (IEEE ISMAR 2026)",
  venueShort: "IEEE TVCG (ISMAR 2026)",
  year: 2026,
  abstract: `While forearm-worn interfaces are effective for tactile navigation in VR, variations in arm posture during handheld controller use can distort directional perception. This paper presents a posture-adaptive compensation model designed to deliver consistent 2D azimuthal cues across changes in arm posture. In our first experiment, we quantified how the horizontal body-to-forearm angle and wrist rotation affected perceived azimuth, establishing an empirical basis for our computational model. Notably, the perceptual shift remained substantially smaller than the physical change in the body-to-forearm angle, evidencing hybrid integration of body-centered and device-centered reference frames. Based on these findings, we developed a user-adaptive compensation model that combines a representative-posture model with lightweight user adaptation to render intended azimuthal directions across changes in arm posture. Subsequent VR navigation experiments demonstrated that this user-adaptive model significantly improved directional accuracy and navigation efficiency, outperforming the posture-independent baseline by up to 22.4 percentage points. This work establishes a methodology for posture-adaptive, eyes-free navigation by mitigating posture-dependent distortions in directional communication.`,
};

const contributions = [
  "Quantified how the body-to-forearm angle and wrist rotation systematically shift the perceived azimuth of forearm vibrotactile cues, revealing a hybrid integration of body-centered and device-centered reference frames",
  "Developed three posture-compensation models (Individual, Global, User-adaptive) and validated them via Leave-One-Subject-Out simulation; the hybrid User-adaptive Model (w = 0.45) achieved the lowest error",
  "VR navigation study (N = 18) showed the User-adaptive Model improved directional accuracy by up to 22.4 percentage points and reduced trials-to-arrival by ~20% versus a posture-independent baseline at a 75° body-to-forearm angle",
  "A short-term learning study (N = 5) showed directional accuracy rising from 51.2% to 86.6% after brief familiarization, confirming practical viability for real-world use",
];

const models = [
  {
    id: "IM",
    title: "Individual Model",
    desc: "User-specific azimuth profile built from a single participant's own calibration trials. Most tailored, but costly to collect and hard to generalize.",
    color: "coral",
  },
  {
    id: "GM",
    title: "Global Model",
    desc: "Mean perceived-azimuth profile pooled across all participants. Consistent out-of-the-box, but does not reflect individual variation.",
    color: "gold",
  },
  {
    id: "UM",
    title: "User-adaptive Model",
    desc: "Hybrid of GM and few-shot IM data (SUM = w·SIM + (1−w)·SGM). Balances generalizability with personal calibration at low cost.",
    color: "teal",
  },
];

const stats = [
  { value: "30.7°", label: "Avg. Perceived Shift", sub: "vs. 90° physical body-to-forearm change" },
  { value: "19.08°", label: "Min. Model MAE", sub: "User-adaptive Model at w = 0.45" },
  { value: "+22.4pp", label: "Accuracy Gain", sub: "UM vs. baseline at 75° posture" },
  { value: "86.6%", label: "Accuracy after Training", sub: "Up from 51.2% before familiarization" },
];

const colorClass: Record<string, { card: string; dot: string; text: string; badge: string }> = {
  teal:  { card: "bg-teal-50 border-teal-200",  dot: "bg-teal-500",  text: "text-teal-700",  badge: "bg-teal-100 text-teal-700" },
  coral: { card: "bg-coral-50 border-coral-200", dot: "bg-coral-500", text: "text-coral-700", badge: "bg-coral-100 text-coral-700" },
  gold:  { card: "bg-gold-50 border-gold-200",   dot: "bg-gold-500",  text: "text-gold-700",  badge: "bg-gold-100 text-gold-700" },
};

const bibtex = `@article{Hwang2026:posture,
    author={Hwang, Jaehyeong and Jin, Hyeseong and Park, Chaeyong},
    journal={IEEE Transactions on Visualization and Computer Graphics}, 
    title={Posture-Adaptive Azimuthal Guidance via a Forearm Vibrotactile Interface for VR Navigation}, 
    year={2026},
    volume={X},
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
  "h-[48rem]": "sm:max-h-[48rem]",
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

export default function PostureAdaptivePage() {
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
            src="/images/pub_pages/posture-adaptive/teaser.png"
            alt="Posture-adaptive forearm vibrotactile navigation teaser"
            caption="Although identical haptic guidance is provided, the perceived direction varies with arm posture; our posture-adaptive model corrects for this shift so intended and perceived directions align."
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

      {/* Hardware */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Forearm Vibrotactile Navigation System
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Twelve ERM motors are arranged circumferentially and longitudinally across three velcro bands on the forearm. A fixed &ldquo;anchor&rdquo; motor always fires first to give a stable reference, followed by a target cue; phantom-sensation rendering across adjacent motors delivers continuous, fine-grained azimuthal cues beyond the physical motor positions.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <FitImage
              src="/images/pub_pages/posture-adaptive/fig2_hardware.png"
              alt="Forearm-worn haptic armband hardware"
              caption="Fig. 2. Armband configuration: 12 ERM motors distributed across three bands around the forearm."
              h="h-72"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Exp 1 */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
              Exp. 1: Azimuth Perception Under Posture Variation
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Twenty-four participants judged the perceived direction of vibrotactile cues at three body-to-forearm angles (0&deg;, 45&deg;, 90&deg;) and two wrist rotations. Perceived azimuth shifted systematically with body-to-forearm angle&mdash;but by a much smaller margin than the physical change, indicating a hybrid of body-centric and device-centric reference frames. Wrist rotation had only a weak, non-significant effect.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap gap-6 justify-center items-start mb-8">
              <FitImage
                src="/images/pub_pages/posture-adaptive/fig5_setup.png"
                alt="Experiment 1 setup with articulating arm rest"
                caption="Fig. 5. Experiment 1 setup: the forearm was fixed at each target angle using an articulating arm rest."
                h="h-64"
              />
              <FitImage
                src="/images/pub_pages/posture-adaptive/fig6_azimuth.png"
                alt="Circular means of perceived azimuth across body-to-forearm angles"
                caption="Fig. 6. Circular means of perceived azimuth per motor at 0°, 45°, and 90° body-to-forearm angle."
                h="h-64"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compensation models */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-gold-500 rounded-full inline-block" />
              Posture-Adaptive Compensation Models
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Using the Exp. 1 dataset, three compensation strategies were built and compared via Leave-One-Subject-Out cross-validation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {models.map((m, i) => {
              const c = colorClass[m.color];
              return (
                <AnimatedSection key={m.id} delay={i * 0.07}>
                  <div className={`card p-6 border ${c.card} h-full`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full ${c.dot}`} />
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.badge}`}>{m.id}</span>
                      <span className={`font-bold text-sm ${c.text}`}>{m.title}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection>
            <FitImage
              src="/images/pub_pages/posture-adaptive/fig8_boxplot.png"
              alt="Simulation results comparing MAE by method and posture"
              caption="Fig. 8. Simulation results by method and posture. UM matches IM's accuracy with much lower variance, especially at larger body-to-forearm angles."
              h="h-[48rem]"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Exp 2 */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Exp. 2: Posture-Adaptive VR Navigation
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Eighteen participants navigated haptics-only VR mazes at two novel body-to-forearm angles (30&deg; and 75&deg;, reflecting HMD-controller and game-console-controller postures) using the Baseline (BM), Global (GM), and User-adaptive (UM) models. At the challenging 75&deg; posture, UM reached 67.2% directional accuracy versus 44.8% for BM and 51.3% for GM, and required ~20% fewer trials to reach the destination.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap gap-6 justify-center items-start mb-8">
              <FitImage
                src="/images/pub_pages/posture-adaptive/fig10_vr.png"
                alt="VR navigation scene and controller postures"
                caption="Fig. 10. (a) VR navigation scene; (b, c) 30° and 75° body-to-forearm postures with HMD and console controllers."
                h="h-64"
              />
              <FitImage
                src="/images/pub_pages/posture-adaptive/fig11_maps.png"
                alt="Navigation map examples"
                caption="Fig. 11. Example navigation maps; squares mark start points and stars mark destinations."
                h="h-64"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <FitImage
              src="/images/pub_pages/posture-adaptive/fig12_accuracy.png"
              alt="Directional and nearby accuracy results"
              caption="Fig. 12. Directional accuracy and nearby accuracy by method and posture."
              h="h-72"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Stats + learning study */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
              Headline Results &amp; Short-Term Learning
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              A follow-up summative study gave five participants a brief training-practice cycle with the User-adaptive Model at 75&deg;. Directional accuracy rose from 51.2% to 86.6% (+35.4 percentage points, p &lt; .01), confirming that the compensation model pairs well with rapid tactile-spatial learning.
            </p>
          </AnimatedSection>

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
