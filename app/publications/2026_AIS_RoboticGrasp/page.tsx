"use client";

import Link from "next/link";
import { useState } from "react";
import { Copy, Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const paper = {
  title: "Proactive Robotic Grasp Stability via Tactile Safety Margin Feedback",
  authors: [
    { name: "Yebin Park", affil: "1†" },
    { name: "Jaehyun Kim", affil: "1,2†" },
    { name: "Taeyeong Kim", affil: "1" },
    { name: "Woosung Cho", affil: "1" },
    { name: "Junchen Luo", affil: "1" },
    { name: "Myeongryun Seong", affil: "3" },
    { name: "Chaeyong Park", affil: "4", url: "https://chaeyongpark.github.io/" },
    { name: "Anna Lee", affil: "3" },
    { name: "Seungmoon Choi", affil: "5" },
    { name: "Insang You", affil: "6" },
    { name: "Unyong Jeong", affil: "1" },
  ],
  affiliations: [
    { id: "1", name: "POSTECH (MSE)" },
    { id: "2", name: "ETRI" },
    { id: "3", name: "POSTECH (ME)" },
    { id: "4", name: "Korea University" },
    { id: "5", name: "POSTECH (CSE)" },
    { id: "6", name: "KAIST" },
  ],
  venue: "Advanced Intelligent Systems",
  venueShort: "Adv. Intell. Syst.",
  year: 2026,
  doi: "https://doi.org/10.1002/aisy.202501051",
  note: "Open Access · Q1 Journal",
  abstract: `Robotic artificial intelligence requires an artificial tactile sensing system to enable delicate and adaptive task execution with robotic hands. Deformable electronic skin devices can function as a robotic skin, providing real-time monitoring of grasping conditions during manipulation. However, grasp stability has traditionally been assessed only after slippage occurs, due to the lack of an effective feedback system. This work introduces the concept of tactile safety margin (TSM) for the first time, enabling proactive assessment of grasp stability while maintaining contact with target objects. This deterministic metric allows robots to adjust grip force or position to secure object manipulation before slippage occurs. Grasping instability is inferred from surface strain and temperature, both of which are concurrently detected by a deformable multimodal sensor array. The maximum static friction, derived from normal pressure, determines the range of mechanical instability the system can withstand. The integration of ionic multimodal sensor array and piezoresistive sensor array demonstrates independent responsivity to pressure, strain, and temperature within a simple and robust architecture. The effectiveness of TSM is validated through various robotic grasping scenarios, including dynamic thermal tests and pick-and-place tasks. This concept highlights a new role for deformable electronic skin in advancing robotic tactile sensing.`,
};

const contributions = [
  "Introduces Tactile Safety Margin (TSM), a novel deterministic metric for proactive grasp stability assessment — the first to predict slippage before it occurs",
  "Develops a bilayer E-skin architecture that simultaneously and independently measures strain, temperature, and normal pressure within a single robust device",
  "Demonstrates TSM-based proactive feedback across diverse robotic scenarios: dynamic thermal load changes and pick-and-place tasks requiring grip repositioning",
  "Validates superiority over commercial piezoelectric sensors, which fail to detect gradual grasp deterioration that the TSM-based E-skin correctly identifies",
  "Establishes a practical framework for integrating TSM thresholds (TSMset) into robotic control loops, enabling autonomous grip force adjustment and re-grasping",
];

const findings = [
  { title: "Proactive vs. reactive sensing", desc: "Unlike conventional sensors that detect slip only after it occurs, TSM continuously quantifies the ratio between maximum static friction and instantaneous friction force." },
  { title: "Bilayer architecture", desc: "The upper ionic layer (LM-PDMS + PVDF-HFP iongel) senses strain and temperature independently, while the lower piezoresistive layer (Ag-PDMS + CNT-PU foam) measures normal pressure." },
  { title: "Decoupled multimodal sensing", desc: "Temperature (via relaxation time τ), strain (via normalized capacitance C/C₀), and pressure (via current) are simultaneously measurable without cross-interference." },
  { title: "Durability over 1,000 cycles", desc: "Both the strain and pressure sensing layers maintained stable performance across 1,000 loading cycles, confirming suitability for repetitive robotic tasks." },
  { title: "Dynamic thermal grasping", desc: "The robot successfully withheld grasping until a hot cup (60°C) cooled below Tset = 40°C, then maintained grip until TSM dropped to TSMset = 0.2 with added water weight." },
  { title: "Adaptive pick-and-place", desc: "When an off-center grasp caused rotation (TSM < TSMset = 0.7), the robot automatically repositioned to the center of mass and completed the task successfully." },
];

const bibtex = `@article{Park2026:proactive,
  author = {Park, Yebin and Kim, Jaehyun and Kim, Taeyeong and Cho, Woosung and Luo, Junchen and Seong, Myeongryun and Park, Chaeyong and Lee, Anna and Choi, Seungmoon and You, Insang and Jeong, Unyong},
  title = {Proactive Robotic Grasp Stability via Tactile Safety Margin Feedback},
  journal = {Advanced Intelligent Systems},
  volume = {8},
  number = {5},
  pages = {e202501051},
  doi = {https://doi.org/10.1002/aisy.202501051},
  url = {https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/aisy.202501051},
  year = {2026}
}`;

const smHeightMap: Record<string, string> = {
  "h-48": "sm:h-48", "h-56": "sm:h-56", "h-64": "sm:h-64",
  "h-72": "sm:h-72", "h-80": "sm:h-80", "h-96": "sm:h-96",
};

function FitImage({ src, alt, caption, h }: { src: string; alt: string; caption?: string; h?: string }) {
  const [err, setErr] = useState(false);
  if (h) {
    const smH = smHeightMap[h] ?? "sm:h-64";
    return (
      <div className="flex flex-col items-center w-full">
        <div className={`w-full ${h} ${smH} bg-white rounded-xl border border-slate-200 overflow-hidden flex items-center`}>
          {!err ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt} className="w-full h-full object-contain" onError={() => setErr(true)} />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-slate-100 border-2 border-dashed border-slate-200 rounded-xl">
              <p className="text-xs text-slate-400 text-center px-2">Add: {src.split("/").pop()}</p>
            </div>
          )}
        </div>
        {caption && <p className="text-sm text-slate-400 text-center mt-2 italic">{caption}</p>}
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center w-full">
      {!err ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="w-full h-auto rounded-xl border border-slate-200" onError={() => setErr(true)} />
      ) : (
        <div className="w-full aspect-video rounded-xl bg-slate-100 border-2 border-dashed border-slate-200 flex items-center justify-center">
          <p className="text-xs text-slate-400 text-center px-2">Add: {src.split("/").pop()}</p>
        </div>
      )}
      {caption && <p className="text-sm text-slate-400 text-center mt-2 italic">{caption}</p>}
    </div>
  );
}

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

export default function RoboticGraspPage() {
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
            <span className="badge badge-gold text-sm px-3 py-1">{paper.note}</span>
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
          <p className="text-xs text-slate-400 mb-3">† Equal contribution</p>

          <div className="mb-8 flex flex-wrap gap-x-4 gap-y-0.5">
            {paper.affiliations.map((a) => (
              <span key={a.id} className="text-sm text-slate-400">
                <sup className="mr-0.5">{a.id}</sup>{a.name}
              </span>
            ))}
          </div>

          {paper.doi && (
            <a href={paper.doi} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-lg transition-colors">
              View Paper (DOI)
            </a>
          )}
        </motion.div>
      </section>

      {/* Teaser — Fig 1 */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <div className="w-full sm:w-1/2 mx-auto">
              <FitImage
                src="/images/pub_pages/robotic-grasp/fig1.png"
                alt="Concept of Tactile Safety Margin (TSM) and bilayer E-skin architecture"
                caption="Fig. 1. Concept of TSM and the bilayer E-skin architecture. (a) Robotic grasp mechanics with friction and grip forces. (b) TSM diagram defining safe and unsafe grasping zones. (c) Bilayer E-skin structure. (d) Independent sensing mechanisms for temperature, strain, and pressure."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Abstract */}
      <section className="py-14">
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

      {/* E-skin Characterization — Fig 2 + Fig 3 */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              E-skin Characterization &amp; TSM Validation
            </h2>
            <p className="text-base text-slate-500 mb-8">
              The bilayer E-skin was characterized for its decoupled sensing capabilities. Temperature sensing (via ionic relaxation time τ) remained unaffected by strain up to 50%. Strain sensing (via normalized capacitance C/C₀) was temperature-independent across 20–60°C. The piezoresistive pressure layer was shear-insensitive, thanks to a low-friction talc interface. Both layers maintained stable performance over 1,000 loading cycles. TSM was experimentally validated on a robotic gripper grasping a spherical object under controlled push disturbances, demonstrating proactive stability feedback.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { value: "TSM", label: "Core Metric", sub: "(Fmax − Ffric) / Fmax" },
              { value: "7×7", label: "Sensor Array", sub: "2.5 × 2.5 cm robotic E-skin" },
              { value: "1,000", label: "Cycle Durability", sub: "strain & pressure layers" },
              { value: "3", label: "Sensing Modalities", sub: "strain · temperature · pressure" },
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FitImage
                src="/images/pub_pages/robotic-grasp/fig2.png"
                alt="Characterization of E-skin sensing layers"
                caption="Fig. 2. Decoupled sensing characterization. Temperature, strain, and pressure sensing remain mutually independent under simultaneous stimuli. Spatial mapping shows orthogonal thermal, strain, and force profiles."
                h="h-72"
              />
              <FitImage
                src="/images/pub_pages/robotic-grasp/fig3.png"
                alt="TSM concept and experimental validation"
                caption="Fig. 3. TSM measurement setup and validation. Strong vs. weak grip conditions produce distinct TSM trajectories before, during, and after push disturbances."
                h="h-72"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Robotic Demonstrations — Fig 4 + Fig 5 */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
              Robotic Demonstrations
            </h2>
            <p className="text-base text-slate-500 mb-8">
              The TSM framework was validated in two representative robotic scenarios. In the thermal test, the robot monitored both temperature and TSM to safely grasp and handle a hot water-filled glass. In the pick-and-place task, the robot detected off-center grasping instability from TSM and autonomously repositioned to the center of mass.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <FitImage
                src="/images/pub_pages/robotic-grasp/fig4.png"
                alt="TSM evaluation under dynamic thermal and mechanical load conditions"
                caption="Fig. 4. Thermal grasping test. The robot withholds grasp at 60°C and 48°C until Tset ≤ 40°C is satisfied, then lifts the glass. Adding cold water increases load and drops TSM to TSMset = 0.2."
                h="h-80"
              />
              <FitImage
                src="/images/pub_pages/robotic-grasp/fig5.png"
                alt="Pick-and-place task with re-grasp strategy from corner to center"
                caption="Fig. 5. Adaptive pick-and-place. Off-center grasping causes rotation and TSM drops below TSMset = 0.7, triggering release. Re-grasping at the center of mass enables stable lifting and shelf placement."
                h="h-80"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Key Findings
            </h2>
            <p className="text-base text-slate-500 mb-8">
              The TSM-based E-skin represents a fundamental shift from reactive to proactive tactile sensing in robotic manipulation.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {findings.map((g, i) => (
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
          This work was supported by the National Research Foundation of Korea (NRF, RS-2024-00338686) and Ministry of Trade Industry &amp; Energy (MOTIE, Korea, RS-2024-00443121).
        </p>
      </div>

    </div>
  );
}
