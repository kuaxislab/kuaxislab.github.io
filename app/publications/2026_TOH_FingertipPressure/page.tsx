"use client";

import Link from "next/link";
import { useState } from "react";
import { Copy, Check, ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const paper = {
  title: "Fingertip Pressure Feedback Increases the Perceived Length of a Handheld Object",
  authors: [
    { name: "Jeongwoo Kim", affil: "1" },
    { name: "Hyunyong Park", affil: "1" },
    { name: "Chaeyong Park", affil: "2", url: "https://chaeyongpark.github.io/" },
    { name: "Seungmoon Choi", affil: "1", note: "†", url: "https://choism.postech.ac.kr/" },
  ],
  affiliations: [
    { id: "1", name: "POSTECH" },
    { id: "2", name: "Korea University" },
  ],
  venueShort: "IEEE Transactions on Haptics",
  year: 2026,
  doi: "https://doi.org/10.1109/TOH.2026.3734692",
  abstract: `In haptics, supporting dynamic touch, the perception of object properties such as length and shape through wielding, remains a significant challenge, often requiring complex and bulky devices. This paper investigates whether the perceived length of a wielded physical object can be augmented using only dynamic cutaneous (pressure) feedback to the fingertips, motivated by the recent advancement of haptic gloves. We designed pressure feedback profiles inspired by the biomechanical changes in finger pressure that naturally occur during wielding. These profiles deliver sequential pressure stimuli to the fingertips, synchronized with the object's rotational angle during wielding. A perceptual experiment demonstrated that the fingertip pressure feedback significantly increased the perceived length of an elongated object by 6.1% on average. This effect was equivalent to an increase of 13.8% in the physical moment of inertia of the object. This finding suggests that cutaneous feedback can effectively modulate the perceptual properties of handheld objects mediated through dynamic touch, expanding the application areas of hand-worn haptic devices.`,
};

const contributions = [
  "Proposed modulating the perceived length of a wielded object with fingertip pressure feedback alone, without changing the object's mass distribution or adding bulky inertial displays",
  "Designed biomechanically-inspired spatiotemporal pressure profiles that flow across the five fingers in sync with the rod's rotation angle during downward and upward swings",
  "A perceptual experiment (N = 24) showed the dynamic profile increased perceived length by 6.1% on average, while constant pressure had no significant effect",
  "The effect was equivalent to a 13.8% increase in the physical moment of inertia, showing cutaneous feedback can modulate dynamic touch",
];

const conditions = [
  { id: "None", title: "No pressure", desc: "The glove is worn, but all actuators stay off. Baseline condition.", color: "slate" },
  { id: "Constant", title: "Constant pressure", desc: "All five fingers receive maximum pressure throughout the wielding motion. Second baseline.", color: "gold" },
  { id: "Dynamic", title: "Dynamic pressure", desc: "Sequential pressure flows across the fingers, synchronized with the rod angle during downward and upward swings.", color: "teal" },
];

const stats = [
  { value: "+6.1%", label: "Perceived Length", sub: "Dynamic vs. None, averaged over MOI levels" },
  { value: "+13.8%", label: "Equivalent MOI", sub: "Physical inertia needed for the same effect" },
  { value: "N = 24", label: "Participants", sub: "3 PFP × 3 MOI, within-subjects" },
  { value: "108", label: "Trials / Participant", sub: "Magnitude estimation with modulus" },
];

const resultKeys = [
  { label: "Pressure profile", value: "Dynamic > None (p < .001) and Dynamic > Constant (p = .002); None vs. Constant n.s. (p = .672)" },
  { label: "Moment of inertia", value: "all three levels differ significantly (p < .001), as expected" },
  { label: "Interaction", value: "not significant (p = .277); the Dynamic effect slightly shrank at larger MOI (7.0% → 6.2% → 5.1%)" },
];

const takeaways = [
  { title: "Timing matters, not just touch", desc: "Constant pressure did not change perceived length; only the cue coupled to the wielding motion was treated as informative." },
  { title: "Fingertip-only rendering", desc: "A haptic glove can modulate length perception without moving internal masses, avoiding complex, heavy inertial mechanisms." },
  { title: "Torque-like interpretation", desc: "Movement-synchronized pressure may be read as extra torque, cueing a larger inertia and thus a longer object." },
  { title: "Next: intensity and 3D swings", desc: "Future work covers continuous pressure scaled to swing speed, free 3D motion, and combining pressure with other tactile cues." },
];

const colorClass: Record<string, { card: string; dot: string; text: string; badge: string }> = {
  teal:  { card: "bg-teal-50 border-teal-200",  dot: "bg-teal-500",  text: "text-teal-700",  badge: "bg-teal-100 text-teal-700" },
  gold:  { card: "bg-gold-50 border-gold-200",   dot: "bg-gold-500",  text: "text-gold-700",  badge: "bg-gold-100 text-gold-700" },
  slate: { card: "bg-slate-50 border-slate-200", dot: "bg-slate-400", text: "text-slate-600",  badge: "bg-slate-100 text-slate-600" },
};

const bibtex = `@article{Kim2026:fingertip,
    author={Kim, Jeongwoo and Park, Hyunyong and Park, Chaeyong and Choi, Seungmoon},
    journal={IEEE Transactions on Haptics},
    title={Fingertip Pressure Feedback Increases the Perceived Length of a Handheld Object},
    year={2026},
    doi={10.1109/TOH.2026.3734692}
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

export default function FingertipPressurePage() {
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
          <FitImage
            src="/images/pub_pages/fingertip-pressure/teaser.png"
            alt="Fingertip pressure feedback teaser"
            caption="Fig. 1. A haptic glove renders fingertip pressure relative to the center of rotation (left), increasing the perceived length of the rod while its physical length remains unchanged (right)."
            h="h-[27rem]"
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

      {/* Pressure rendering */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Biomechanically-Inspired Pressure Rendering
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              A commercial haptic glove (WeArt TouchDIVER) presses on the five fingertips while the user wields a custom rod whose moment of inertia is adjusted by a brass weight. The rod angle is tracked in real time, and each finger receives binary (on/off) pressure over a preset angle range. The thumb stabilizes the grip, the ulnar side acts as an anchor, and the radial side brakes the swing, so pressure travels from finger to finger with a small overlap that induces tactile apparent motion.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mb-8">
            <FitImage
              src="/images/pub_pages/fingertip-pressure/fig2_setup.png"
              alt="Physical rods and the haptic glove"
              caption="Fig. 2. Rods for the three MOI conditions (left) and the haptic glove with five thimbles (middle). Thimble operation with and without pressure (right)."
              h="h-80"
            />
          </AnimatedSection>

          <AnimatedSection>
            <FitImage
              src="/images/pub_pages/fingertip-pressure/fig3_profile.png"
              alt="Activation profile of the haptic pattern for each finger"
              caption="Fig. 3. Rotational direction while wielding (left) and the activation profile of each finger during repetitive swing cycles (right)."
              h="h-72"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Experiment */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
              Perceptual Experiment
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Twenty-four participants wielded rods behind a partition, with no visual information, and rated each rod&apos;s length against a reference rod (Medium MOI, no pressure) set to 100. The design crossed three pressure feedback profiles (PFP) with three moments of inertia (Small 300 mm, Medium 400 mm, Large 500 mm) in a within-subjects design.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {conditions.map((cond, i) => {
              const c = colorClass[cond.color];
              return (
                <AnimatedSection key={cond.id} delay={i * 0.07}>
                  <div className={`card p-6 border ${c.card} h-full`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full ${c.dot}`} />
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${c.badge}`}>{cond.id}</span>
                      <span className={`font-bold text-sm ${c.text}`}>{cond.title}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{cond.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection>
            <FitImage
              src="/images/pub_pages/fingertip-pressure/fig4_experiment.png"
              alt="Experiment setup"
              caption="Fig. 4. Experiment setup."
              h="h-80"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-gold-500 rounded-full inline-block" />
              Results
            </h2>
            <ul className="space-y-2 mb-8 mt-5">
              {resultKeys.map((r) => (
                <li key={r.label} className="flex gap-2.5 text-sm text-slate-600">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-teal-500 mt-2" />
                  <span><span className="font-semibold text-slate-900">{r.label}</span> &mdash; {r.value}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 items-stretch">
            {stats.map((s) => (
              <AnimatedSection key={s.label} className="h-full">
                <div className="card p-4 text-center h-full flex flex-col justify-center">
                  <p className="text-2xl font-extrabold text-teal-600 mb-0.5">{s.value}</p>
                  <p className="text-sm font-semibold text-slate-700">{s.label}</p>
                  <p className="text-xs text-slate-400">{s.sub}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              <FullWidthImage
                src="/images/pub_pages/fingertip-pressure/fig5_results.png"
                alt="Mean perceived lengths for each MOI and PFP"
                caption="Fig. 5. Mean perceived lengths for each combination of MOI and PFP. Error bars indicate standard errors."
              />
              <FullWidthImage
                src="/images/pub_pages/fingertip-pressure/fig6_main_effects.png"
                alt="Main effects of PFP and MOI on perceived length"
                caption="Fig. 6. Geometric means of perceived length for each PFP and MOI level (** p < .01, *** p < .001)."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Takeaways */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Discussion &amp; Takeaways
            </h2>
            <p className="text-base text-slate-500 mb-8 text-justify">
              Dynamic touch has been served mostly by bulky shape-changing or modular devices. These results show that hand-worn haptic gloves can reach it as well.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {takeaways.map((g, i) => (
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
          This work was supported by a grant CRC23021-000 from NST and a grant IITP-RS-2025-02214780 from IITP, both funded by the Korea government.
        </p>
      </div>

    </div>
  );
}
