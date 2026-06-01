"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Copy, Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const paper = {
  title: "Effects of Haptic Feedback on Gaming Experiences: A Case Study Comparing Players and Spectators in FPS Games",
  authors: [
    { name: "Heeji Sohn", affil: "1" },
    { name: "Chaeyong Park", affil: "2", url: "https://chaeyongpark.github.io/" },
    { name: "Seungmoon Choi", affil: "1", url: "https://choism.postech.ac.kr/"},
  ],
  affiliations: [
    { id: "1", name: "POSTECH" },
    { id: "2", name: "Korea University" },
  ],
  venue: "ACM CHI 2026",
  venueShort: "ACM CHI 2026",
  year: 2026,
  doi: "https://doi.org/10.1145/3772318.3791144",
  abstract: `Haptic feedback has become a common feature in game experiences, yet little is known about how its effects differ between active players and passive spectators. This study investigated how haptic feedback influences user experience and technology acceptance in the context of first-person shooter (FPS) games, particularly by comparing its effects on active players and passive spectators. An experiment with 60 participants tested four conditions defined by two factors: haptic feedback (present vs. absent) and user role (player vs. spectator). The results showed that haptic feedback enhanced the intention to use games in both roles, with a stronger effect among spectators. Players' intention was primarily driven by perceived enjoyment through a hedonic pathway, whereas spectators responded to both perceived enjoyment and perceived usefulness through both hedonic and eudaimonic pathways.`,
};

const contributions = [
  "HAG-TAM (Haptic-Augmented Game Technology Acceptance Model): a novel 6-construct model tailored to evaluate haptic feedback in FPS gaming contexts",
  "First systematic comparison of haptic feedback effects between active players and passive spectators, revealing distinct technology acceptance pathways",
  "Identification of a hedonic pathway (dominant for players) and eudaimonic pathway (significant for spectators), informing role-sensitive haptic design",
  "Empirical evidence that spectators are more strongly influenced by haptic feedback than players, challenging assumptions about haptics in passive entertainment",
];

const constructs = [
  { abbr: "H", label: "Haptic Feedback", desc: "Presence or absence of tactile stimuli during gameplay", color: "teal" },
  { abbr: "CC", label: "Cognitive Concentration", desc: "Extent to which the user's attention is absorbed in the game", color: "slate" },
  { abbr: "PE", label: "Perceived Enjoyment", desc: "Degree to which playing/spectating is perceived as enjoyable", color: "coral" },
  { abbr: "PU", label: "Perceived Usefulness", desc: "Degree to which the game is perceived to improve quality of life", color: "gold" },
  { abbr: "ATT", label: "Attitude Toward Using", desc: "Overall affective evaluation about engaging with the game", color: "slate" },
  { abbr: "IU", label: "Intention to Use", desc: "Behavioral plan or desire to use the technology in the future", color: "teal" },
];

const pathCoefficients = [
  { hyp: "H1", label: "H → CC", player: "0.511", spectator: "0.793", note: "Stronger for spectators" },
  { hyp: "H2", label: "CC → PE", player: "0.562", spectator: "0.683", note: "Stronger for spectators" },
  { hyp: "H3", label: "CC → PU", player: "0.466", spectator: "0.519", note: "Similar across roles" },
  { hyp: "H4", label: "PE → ATT", player: "0.607", spectator: "0.529", note: "Stronger for players" },
  { hyp: "H5", label: "PU → ATT", player: "0.334", spectator: "0.446", note: "Stronger for spectators" },
  { hyp: "H6", label: "ATT → IU", player: "0.871", spectator: "0.924", note: "Very strong for both" },
];

const descriptiveStats = [
  { condition: "Player + Haptic",       cc: "6.19", pe: "5.56", pu: "4.79", att: "5.44", iu: "5.39" },
  { condition: "Player + No Haptic",    cc: "5.71", pe: "5.04", pu: "4.28", att: "4.97", iu: "4.77" },
  { condition: "Spectator + Haptic",    cc: "5.60", pe: "5.03", pu: "4.41", att: "4.97", iu: "4.76" },
  { condition: "Spectator + No Haptic", cc: "4.59", pe: "4.13", pu: "3.63", att: "4.10", iu: "3.81" },
];

const colorClass: Record<string, string> = {
  teal:  "bg-teal-50 border-teal-200 text-teal-700",
  coral: "bg-coral-50 border-coral-200 text-coral-700",
  gold:  "bg-gold-50 border-gold-200 text-gold-700",
  slate: "bg-slate-50 border-slate-200 text-slate-600",
};

const bibtex = `@inproceedings{Sohn2026:effects,
  author    = {Sohn, Heeji and Park, Chaeyong and Choi, Seungmoon},
  title     = {Effects of Haptic Feedback on Gaming Experiences: A Case Study Comparing Players and Spectators in FPS Games},
  year      = {2026},
  isbn      = {9798400722783},
  publisher = {Association for Computing Machinery},
  address   = {New York, NY, USA},
  url       = {https://doi.org/10.1145/3772318.3791144},
  doi       = {10.1145/3772318.3791144},
  booktitle = {Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems},
  articleno = {846},
  numpages  = {16},
  keywords  = {Video games, haptics, gaming experience, player, spectator, technology acceptance},
  series    = {CHI '26}
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

/* 전체 너비 이미지 */
function PaperImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const [err, setErr] = useState(false);
  return (
    <div>
      {!err ? (
        <Image src={src} alt={alt} width={1200} height={600} className="w-full rounded-xl object-contain" onError={() => setErr(true)} />
      ) : (
        <div className="w-full aspect-video rounded-xl bg-slate-100 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200">
          <p className="text-xs text-slate-400 font-medium">{alt}</p>
          <p className="text-xs text-slate-300">Add image to public/images/pub_pages/haptic-gaming/</p>
        </div>
      )}
      {caption && <p className="text-sm text-slate-400 text-center mt-2 italic">{caption}</p>}
    </div>
  );
}

/* 고정 높이 + 자연 너비 — 이미지에 딱 맞는 박스, letterbox 없음
   모바일: w-full h-auto / 데스크탑: h-고정 w-auto */
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

export default function HapticGamingPage() {
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
            src="/images/pub_pages/haptic-gaming/teaser.png"
            alt="HAG-TAM research overview"
            caption="Research overview: users play or spectate an FPS game with haptic feedback, modeled through the HAG-TAM framework."
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

      {/* Study Design */}
      <section className="py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Study Design
            </h2>
            <p className="text-base text-slate-500 mb-8">
              A within-subject experiment with 60 participants (36M, 24F; ages 18–32) tested four conditions: Player vs. Spectator × Haptic vs. Non-Haptic. Participants used a custom haptic mouse (3 voice-coil actuators) in an FPS game powered by Aimlabs, with audio-to-haptic conversion for gunshot and footstep events.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: "60", label: "Participants", sub: "36M, 24F" },
              { value: "4", label: "Conditions", sub: "Role × Haptic" },
              { value: "3", label: "Voice-coil Actuators", sub: "Custom haptic mouse" },
              { value: "7-pt", label: "Likert Scale", sub: "14 questionnaire items" },
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
            <div className="flex flex-wrap gap-6 justify-center items-start">
              <FitImage
                src="/images/pub_pages/haptic-gaming/fig5.png"
                alt="FPS game used in the study"
                caption="Fig. 5. Custom FPS game (Aimlabs) used in the user study."
                h="h-64"
              />
              <FitImage
                src="/images/pub_pages/haptic-gaming/fig6.png"
                alt="Custom haptic mouse with voice-coil actuators"
                caption="Fig. 6. Custom haptic mouse with 3 embedded voice-coil actuators."
                h="h-64"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HAG-TAM Model */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
              <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
              HAG-TAM: Research Model
            </h2>
            <p className="text-base text-slate-600 mb-8">
              The Haptic-Augmented Game Technology Acceptance Model (HAG-TAM) extends the classic TAM with haptic feedback as an exogenous variable, and adds cognitive concentration and perceived enjoyment as hedonic constructs central to gaming contexts.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {constructs.map((c, i) => (
              <AnimatedSection key={c.abbr} delay={i * 0.06}>
                <div className={`card p-4 border h-full ${colorClass[c.color]}`}>
                  <p className="text-lg font-extrabold mb-1">{c.abbr}</p>
                  <p className="text-sm font-semibold mb-1">{c.label}</p>
                  <p className="text-xs leading-relaxed opacity-80">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="flex justify-center">
              <FitImage
                src="/images/pub_pages/haptic-gaming/fig3.png"
                alt="HAG-TAM research model diagram"
                caption="Fig. 3. HAG-TAM with 6 constructs and 6 hypothesized causal relationships (H1–H6)."
                h="h-72"
              />
            </div>
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
            <p className="text-base text-slate-500 mb-8">
              All six hypotheses were supported for both players and spectators (p &lt; .001). The structural model revealed two distinct pathways and notable role-dependent differences.
            </p>
          </AnimatedSection>

          {/* Fig. 8 — means of all constructs */}
          <AnimatedSection className="mb-10">
            <h3 className="text-base font-bold text-slate-700 mb-2">Construct Means by Condition</h3>
            <p className="text-sm text-slate-500 mb-4">
              Haptic feedback consistently raised all five constructs for both players and spectators. The effect was more pronounced among spectators across all measures, with the largest gap observed in cognitive concentration and intention to use.
            </p>
            <div className="flex justify-center">
              <FitImage
                src="/images/pub_pages/haptic-gaming/fig8.png"
                alt="Means and standard errors of the five constructs"
                caption="Fig. 8. Means and standard errors of (a) Cognitive Concentration, (b) Perceived Enjoyment, (c) Perceived Usefulness, (d) Attitude Toward Using, and (e) Intention to Use across the four conditions."
                h="h-72"
              />
            </div>
          </AnimatedSection>

          {/* Descriptive stats table */}
          <AnimatedSection className="mb-8">
            <h3 className="text-base font-bold text-slate-700 mb-3">Mean Scores by Condition (7-point scale)</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 text-slate-500 font-semibold">Condition</th>
                    <th className="text-center px-3 py-3 text-slate-500 font-semibold">CC</th>
                    <th className="text-center px-3 py-3 text-slate-500 font-semibold">PE</th>
                    <th className="text-center px-3 py-3 text-slate-500 font-semibold">PU</th>
                    <th className="text-center px-3 py-3 text-slate-500 font-semibold">ATT</th>
                    <th className="text-center px-3 py-3 text-slate-500 font-semibold">IU</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {descriptiveStats.map((row) => (
                    <tr key={row.condition} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-medium text-slate-700">{row.condition}</td>
                      <td className="text-center px-3 py-3 text-slate-600">{row.cc}</td>
                      <td className="text-center px-3 py-3 text-slate-600">{row.pe}</td>
                      <td className="text-center px-3 py-3 text-slate-600">{row.pu}</td>
                      <td className="text-center px-3 py-3 text-slate-600">{row.att}</td>
                      <td className="text-center px-3 py-3 text-slate-600">{row.iu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-2">CC: Cognitive Concentration, PE: Perceived Enjoyment, PU: Perceived Usefulness, ATT: Attitude Toward Using, IU: Intention to Use</p>
          </AnimatedSection>

          {/* Path coefficients */}
          <AnimatedSection className="mb-8">
            <h3 className="text-base font-bold text-slate-700 mb-3">HAG-TAM Path Coefficients (β)</h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 text-slate-500 font-semibold">Hypothesis</th>
                    <th className="text-left px-4 py-3 text-slate-500 font-semibold">Path</th>
                    <th className="text-center px-3 py-3 text-teal-600 font-semibold">Player β</th>
                    <th className="text-center px-3 py-3 text-coral-600 font-semibold">Spectator β</th>
                    <th className="text-left px-4 py-3 text-slate-500 font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pathCoefficients.map((row) => (
                    <tr key={row.hyp} className="hover:bg-slate-50/50">
                      <td className="px-4 py-3 font-semibold text-slate-500">{row.hyp}</td>
                      <td className="px-4 py-3 font-medium text-slate-700">{row.label}</td>
                      <td className="text-center px-3 py-3 font-bold text-teal-700">{row.player}</td>
                      <td className="text-center px-3 py-3 font-bold text-coral-700">{row.spectator}</td>
                      <td className="px-4 py-3 text-xs text-slate-400">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-2">All paths statistically significant at p &lt; .001 for both groups.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex justify-center">
              <FitImage
                src="/images/pub_pages/haptic-gaming/fig9.png"
                alt="HAG-TAM structural model results"
                caption="Fig. 9. Structural model results. Green: player path coefficients; Orange: spectator path coefficients. Hedonic pathway (top) and eudaimonic pathway (bottom)."
                h="h-72"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Findings */}
      <section className="bg-slate-50/70 py-14">
        <div className="container-main">
          <AnimatedSection>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
              Key Findings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: "Spectators benefit more from haptic feedback",
                  desc: "Haptic feedback increased all constructs for both groups, but spectators showed significantly larger improvements — particularly in cognitive concentration (H1: β=0.793 vs 0.511).",
                  color: "border-l-teal-500",
                },
                {
                  title: "Two distinct acceptance pathways",
                  desc: "Players are driven primarily by the hedonic pathway (perceived enjoyment → attitude, β=0.607), while spectators are influenced by both hedonic and eudaimonic (perceived usefulness → attitude, β=0.446) pathways.",
                  color: "border-l-coral-500",
                },
                {
                  title: "Game performance unaffected",
                  desc: "Shooting accuracy and game score showed no statistically significant difference between haptic and non-haptic conditions, suggesting haptics enhance experience without compromising performance.",
                  color: "border-l-gold-500",
                },
                {
                  title: "Attitude strongly predicts intention",
                  desc: "The ATT → IU path was extremely strong for both players (β=0.871) and spectators (β=0.924), validating that positive attitudes translate directly to future use intentions.",
                  color: "border-l-teal-500",
                },
              ].map((f) => (
                <div key={f.title} className={`card p-5 border-l-4 ${f.color}`}>
                  <p className="font-bold text-slate-900 text-sm mb-2">{f.title}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
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
          This research was partly supported by NST (CRC23021-000), NRF (2022R1A2C2091161), IITP (IITP-RS-2025-02214780), and ICT Creative Consilience Program (IITP-2026-RS-2020-II201819).
        </p>
      </div>

    </div>
  );
}
