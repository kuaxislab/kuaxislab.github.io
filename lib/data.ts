// ─── Publications ───────────────────────────────────────────────────────────

export type Award =
  | "Best Paper"
  | "Best Paper Nomination"
  | "Honorable Mention";

export type PubType = "journal" | "conference" | "workshop" | "poster";

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number | "Under Review";
  doi?: string;
  award?: Award;
  type: PubType;
  note?: string;
  thumbnail?: string;
  slug?: string;
}

export const publications: Publication[] = [
  // ── Under Review ────────────────────────────────────────────────────────
  {
    title: "Fingertip Pressure Feedback Increases the Perceived Length of a Handheld Object",
    authors: "Chaeyong Park et al.",
    venue: "Under Review (Major Revision)",
    year: "Under Review",
    type: "journal",
  },
  {
    title: "Evaluation of Cybersickness via the Visual and Vestibular Systems",
    authors: "AXIS Lab",
    venue: "Under Review",
    year: "Under Review",
    type: "journal",
  },
  {
    title: "Cybersickness Reduction via Haptic Cue",
    authors: "AXIS Lab",
    venue: "Under Review",
    year: "Under Review",
    type: "journal",
  },
  {
    title: "VR Navigation via Wearable Haptics",
    authors: "AXIS Lab",
    venue: "Under Review",
    year: "Under Review",
    type: "journal",
  },

  // ── 2026 ────────────────────────────────────────────────────────────────
  {
    title:
      "HaptiCraft: A Modular Multimodal Haptic Controller for Immersive Virtual Reality Interactions",
    authors:
      "Chaeyong Park, Jeongwoo Kim, Yuk-Gwon Song, Sang-Youn Kim, Seungmoon Choi",
    venue: "IEEE Transactions on Visualization and Computer Graphics",
    year: 2026,
    doi: "https://ieeexplore.ieee.org/document/11481658",
    type: "journal",
    note: "Q1 Journal · JCR top 5.4%",
    thumbnail: "/images/publications/hapticraft.png",
    slug: "2026_TVCG_HaptiCraft",
  },
  {
    title:
      "HaRing: A Haptic Ring Interface for One-Handed Interaction with High-Dimensional Spatial Information",
    authors: "Suheon Nam, Juhyung Son, Seungmoon Choi, Chaeyong Park",
    venue: "ACM CHI 2026",
    year: 2026,
    doi: "https://doi.org/10.1145/3772318.3791663",
    type: "conference",
    thumbnail: "/images/publications/haring.png",
    slug: "2026_CHI_HaRing",
  },
  {
    title:
      "Effects of Haptic Feedback on Gaming Experiences: A Case Study Comparing Players and Spectators in FPS Games",
    authors: "Heeji Sohn, Chaeyong Park, Seungmoon Choi",
    venue: "ACM CHI 2026",
    year: 2026,
    doi: "https://doi.org/10.1145/3772318.3791144",
    type: "conference",
    thumbnail: "/images/publications/haptic_gaming_chi26.png",
    slug: "2026_CHI_HapticGaming",
  },
  {
    title:
      "Effects of Spatiotemporal Parameters on Forearm Vibrotactile Stimulus Identification",
    authors:
      "Dong-Geun Kim, Geunho Lee, Suheon Nam, Chaeyong Park, Seungmoon Choi",
    venue: "IEEE Haptics Symposium 2026",
    year: 2026,
    award: "Best Paper Nomination",
    type: "conference",
    thumbnail: "/images/publications/spatiotemporal_hs26.png",
    slug: "2026_HS_ForearmVibration",
  },
  {
    title:
      "Representing Egocentric Directions with Torso-Applied Vibrotactile Stimuli",
    authors:
      "Junwoo Kim, Jaejun Park, Chaeyong Park, Junseok Park, Seungmoon Choi",
    venue: "IEEE Transactions on Haptics",
    year: 2026,
    doi: "http://doi.org/10.1109/TOH.2026.3667214",
    type: "journal",
    thumbnail: "/images/publications/egocentric_directions.png",
    slug: "2026_TOH_EgocentricDirection",
  },
  {
    title:
      "Proactive Robotic Grasp Stability via Tactile Safety Margin Feedback",
    authors:
      "Yebin Park, Jaehyun Kim, Taeyeong Kim, Woosung Cho, Junchen Luo, Myeongryun Seong, Chaeyong Park, Anna Lee, Seungmoon Choi, Insang You, Unyong Jeong",
    venue: "Advanced Intelligent Systems",
    year: 2026,
    doi: "http://doi.org/10.1002/aisy.202501051",
    type: "journal",
    note: "Q1 Journal",
    thumbnail: "/images/publications/robotic_grasp.png",
    slug: "2026_AIS_RoboticGrasp",
  },
  {
    title:
      "Wearable Soft Ionic Tactile Controller for Virtual Reality: Decoupling Normal and Shear Forces without Motion Artifacts",
    authors:
      "Woosung Cho, Younghyun Lee, Taeyeong Kim, Jun Choi, Dongguen Kim, Minwoo Chae, Chaeyong Park, Wonjeong Suh, Unyong Jeong",
    venue: "ACS Applied Materials & Interfaces",
    year: 2026,
    doi: "https://doi.org/10.1021/acsami.5c19893",
    type: "journal",
    note: "Q1 Journal",
    thumbnail: "/images/publications/wearable_ionic.png",
  },
  {
    title:
      "Implicit and Explicit Visual Framing Effects on Illusory Relative Weight Perception in Virtual Reality",
    authors: "Mingyu Kim, Gerard Jounghyun Kim, Chaeyong Park",
    venue: "IEEE VR 2026",
    year: 2026,
    type: "poster",
    thumbnail: "/images/publications/visual_framing_vr26.png",
  },

  // ── 2025 ────────────────────────────────────────────────────────────────
  {
    title:
      "Effects of Haptic Feedback on Gaming Experiences: A Case Study for Players and Spectators in FPS Games",
    authors: "Heeji Sohn, Chaeyong Park, Seungmoon Choi",
    venue: "IEEE World Haptics Conference 2025",
    year: 2025,
    award: "Honorable Mention",
    type: "workshop",
    note: "Work-in-Progress",
    thumbnail: "/images/publications/haptic_gaming_whc25.png",
  },
  {
    title:
      "Identification of Spatio-Temporal Vibrotactile Stimuli Across the Torso: Toward Egocentric Haptic Navigation",
    authors:
      "Junwoo Kim, Jaejun Park, Chaeyong Park, Junseok Park, Seungmoon Choi",
    venue: "IEEE World Haptics Conference 2025",
    year: 2025,
    type: "workshop",
    note: "Work-in-Progress",
    thumbnail: "/images/publications/spatio_temporal_whc25.png",
  },
  {
    title:
      "Tactile Localization in Forearm-Mounted Multi-Tactor Displays: The Effect of Tactor Number and Position",
    authors:
      "Dong-Geun Kim, Suheon Nam, Chaeyong Park, Geunho Lee, Seungmoon Choi",
    venue: "IEEE World Haptics Conference 2025",
    year: 2025,
    type: "workshop",
    note: "Work-in-Progress",
    thumbnail: "/images/publications/tactile_localization_whc25.png",
  },
  {
    title:
      "Simple-Architectured Elastic Touch Sensor with High Spatiotemporal Resolution",
    authors:
      "Junchen Luo, Chaeyong Park, Yebin Park, Jaehyun Kim, Seungmoon Choi, Unyong Jeong",
    venue: "Advanced Materials Technologies, Vol. 10, No. 4, 2401280",
    year: 2025,
    doi: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/admt.202401280",
    type: "journal",
    note: "IF=6.4 · Q1",
    thumbnail: "/images/publications/elastic_touch.png",
  },

  // ── 2024 ────────────────────────────────────────────────────────────────
  {
    title:
      "Interactive Deformable Colored Sound Display Achieved with Electrostrictive Fluoropolymer and Halide Perovskite",
    authors:
      "Doowon Park, Woongji Kim, Chaeyong Park, Jun Choi, Arup Ghorai, Gilwoon Lee, Seungmoon Choi, Wonkyu Moon, Unyong Jeong",
    venue: "Small, Vol. 20, No. 43, 2402281",
    year: 2024,
    doi: "https://onlinelibrary.wiley.com/doi/10.1002/smll.202402281",
    type: "journal",
    note: "IF=13.0",
    thumbnail: "/images/publications/colored_sound.png",
  },
  {
    title:
      "Augmenting Perceived Length of Handheld Controllers: Effects of Object Handle Properties",
    authors: "Chaeyong Park, Seungmoon Choi",
    venue: "ACM CHI 2024",
    year: 2024,
    doi: "https://dl.acm.org/doi/10.1145/3613904.3642251",
    award: "Honorable Mention",
    type: "conference",
    thumbnail: "/images/publications/handheld_length_chi24.png",
  },
  {
    title:
      "Human Identification Performance of Vibrotactile Stimuli Applied on the Torso along Azimuth or Elevation",
    authors:
      "Junwoo Kim, Jaejun Park, Chaeyong Park, Junseok Park, Seungmoon Choi",
    venue: "Eurohaptics 2024",
    year: 2024,
    doi: "https://link.springer.com/chapter/10.1007/978-3-031-70058-3_1",
    type: "conference",
    thumbnail: "/images/publications/torso_vibrotactile_eh24.png",
  },

  // ── 2023 ────────────────────────────────────────────────────────────────
  {
    title: "Perceptual Simultaneity Between Vibrotactile and Impact Stimuli",
    authors: "Chaeyong Park, Seungmoon Choi",
    venue: "IEEE World Haptics Conference 2023",
    year: 2023,
    doi: "https://ieeexplore.ieee.org/document/10224459/",
    type: "conference",
    thumbnail: "/images/publications/simultaneity_whc23.png",
  },
  {
    title:
      "Human Recognition Performance of Simple Spatial Vibrotactile Patterns on the Torso",
    authors:
      "Junwoo Kim, Heeyeon Kim, Chaeyong Park, Seungmoon Choi",
    venue: "IEEE World Haptics Conference 2023",
    year: 2023,
    doi: "https://ieeexplore.ieee.org/document/10224430",
    type: "conference",
    thumbnail: "/images/publications/spatial_vibrotactile_whc23.png",
  },
  {
    title:
      "Information Transfer of Full-body Vibrotactile Stimuli: An Initial Study with One to Three Sequential Vibrations",
    authors:
      "Jaejun Park, Junwoo Kim, Sangyoon Han, Chaeyong Park, Junseok Park, Seungmoon Choi",
    venue: "IEEE World Haptics Conference 2023",
    year: 2023,
    doi: "https://ieeexplore.ieee.org/document/10224391",
    type: "conference",
    thumbnail: "/images/publications/fullbody_vibrotactile_whc23.png",
  },
  {
    title:
      "Visuo-haptic Crossmodal Shape Perception Model for Shape-Changing Handheld Controllers Bridged by Inertial Tensor",
    authors: "Chaeyong Park, Jeongwoo Kim, Seungmoon Choi",
    venue: "ACM CHI 2023",
    year: 2023,
    doi: "https://dl.acm.org/doi/10.1145/3544548.3580724",
    award: "Honorable Mention",
    type: "conference",
    thumbnail: "/images/publications/crossmodal_shape_chi23.png",
  },
  {
    title:
      "Intrinsically Synchronized Flexible Visuo-Haptic Device Operated by Single External Electric Field",
    authors:
      "Gilwoon Lee, Chaeyong Park, Doowon Park, Seungmoon Choi, Unyong Jeong",
    venue: "Advanced Optical Materials, Vol. 11, No. 7, 2202515",
    year: 2023,
    doi: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/adom.202202515",
    type: "journal",
    note: "IF=10.050",
    thumbnail: "/images/publications/visuo_haptic_device.png",
  },

  // ── 2022 ────────────────────────────────────────────────────────────────
  {
    title:
      "A Preliminary Study on the Perceptual Independence Between Vibrotactile and Thermal Senses",
    authors:
      "Jaejun Park, Jeongwoo Kim, Chaeyong Park, Seungjae Oh, Seungmoon Choi",
    venue: "Eurohaptics 2022",
    year: 2022,
    doi: "https://link.springer.com/chapter/10.1007/978-3-031-06249-0_9",
    type: "conference",
    thumbnail: "/images/publications/thermal_vibrotactile_eh22.png",
  },
  {
    title:
      "Small-sized Deformable Shear Sensor Array for Direct Monitoring the Quantitative Shear Distribution",
    authors:
      "Wonjeong Suh, Chaeyong Park, Joosung Oh, Sungmin Moon, Seungmoon Choi, Yeonsoo Kim, Unyong Jeong",
    venue: "Advanced Materials Technologies, Vol. 7, No. 6, 2107071",
    year: 2022,
    doi: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/admt.202101071",
    type: "journal",
    note: "IF=8.856",
    thumbnail: "/images/publications/shear_sensor.png",
  },
  {
    title:
      "Vibration-Augmented Buttons: Information Transmission Capacity and Application to Interaction Design",
    authors:
      "Chaeyong Park, Jeongwoo Kim, Dong-Geun Kim, Seungjae Oh, Seungmoon Choi",
    venue: "ACM CHI 2022",
    year: 2022,
    doi: "https://dl.acm.org/doi/10.1145/3491102.3501849",
    type: "conference",
    thumbnail: "/images/publications/vibration_buttons_chi22.png",
  },

  // ── 2021 ────────────────────────────────────────────────────────────────
  {
    title:
      "Omnidirectional Tactile Profiling Using a Deformable Pressure Sensor Array Based on Localized Piezoresistivity",
    authors:
      "Jaehyun Kim, Doowon Park, Sungmin Moon, Chaeyong Park, Kaliannan Thiyagarajan, Seungmoon Choi, Heeseon Hwang, Unyong Jeong",
    venue: "Advanced Materials Technologies, Vol. 7, No. 3, 2100688",
    year: 2021,
    doi: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/admt.202100688",
    type: "journal",
    note: "IF=8.856",
    thumbnail: "/images/publications/deformable_pressure.png",
  },
  {
    title:
      "Identifying Contact Fingers on Touch Sensitive Surfaces by Ring-Based Vibratory Communication",
    authors: "Seungjae Oh, Chaeyong Park, Yo-Seb Jeon, Seungmoon Choi",
    venue: "ACM UIST 2021",
    year: 2021,
    doi: "https://dl.acm.org/doi/10.1145/3472749.3474745",
    type: "conference",
    thumbnail: "/images/publications/ring_contact_uist21.png",
  },
  {
    title:
      "Length Perception Model for Hand-held Controllers: The Effects of Diameter and Inertia",
    authors: "Chaeyong Park, Jinsoo Kim, Seungmoon Choi",
    venue: "IEEE Transactions on Haptics, Vol. 14, No. 2",
    year: 2021,
    doi: "https://ieeexplore.ieee.org/document/9424473",
    type: "journal",
    note: "IF=3.105",
    thumbnail: "/images/publications/length_perception_toh21.png",
  },

  // ── 2020 ────────────────────────────────────────────────────────────────
  {
    title:
      "Augmenting Physical Buttons with Vibrotactile Feedback for Programmable Feels",
    authors: "Chaeyong Park, Jinhyuk Yoon, Seungjae Oh, Seungmoon Choi",
    venue: "ACM UIST 2020",
    year: 2020,
    doi: "https://dl.acm.org/doi/10.1145/3379337.3415837",
    type: "conference",
    thumbnail: "/images/publications/programmable_buttons_uist20.png",
  },
  {
    title: "Body-Penetrating Tactile Phantom Sensations",
    authors: "Jinsoo Kim, Seungjae Oh, Chaeyong Park, Seungmoon Choi",
    venue: "ACM CHI 2020",
    year: 2020,
    doi: "https://dl.acm.org/doi/10.1145/3313831.3376619",
    type: "conference",
    thumbnail: "/images/publications/phantom_sensations_chi20.png",
  },

  // ── 2019 ────────────────────────────────────────────────────────────────
  {
    title:
      "Realistic Haptic Rendering of Collision Effects Using Multimodal Vibrotactile and Impact Feedback",
    authors:
      "Chaeyong Park, Jaeyoung Park, Seungjae Oh, Seungmoon Choi",
    venue: "IEEE World Haptics Conference 2019",
    year: 2019,
    doi: "https://ieeexplore.ieee.org/document/8816116",
    award: "Best Paper Nomination",
    type: "conference",
    thumbnail: "/images/publications/collision_haptic_whc19.png",
  },
  {
    title:
      "VibEye: Vibration-Mediated Object Recognition for Tangible Interactive Applications",
    authors: "Seungjae Oh, Gyeore Yun, Chaeyong Park, Jinsoo Kim, Seungmoon Choi",
    venue: "ACM CHI 2019",
    year: 2019,
    doi: "https://dl.acm.org/doi/10.1145/3290605.3300906",
    type: "conference",
    thumbnail: "/images/publications/vibeye_chi19.png",
  },

  // ── 2018 ────────────────────────────────────────────────────────────────
  {
    title: "Random Forest for Modeling and Rendering of Viscoelastic Deformable Objects",
    authors:
      "Hojun Cha, Amit Bhardwaj, Chaeyong Park, Seungmoon Choi",
    venue: "Asia Haptics 2018",
    year: 2018,
    doi: "https://link.springer.com/chapter/10.1007/978-981-13-3194-7_10",
    type: "conference",
    thumbnail: "/images/publications/random_forest_ah18.png",
  },
];

// ─── News ────────────────────────────────────────────────────────────────────

export type NewsType = "paper" | "award" | "event" | "grant" | "service";

export interface NewsItem {
  date: string;
  year: number;
  description: string;
  type: NewsType;
  image?: string;
}

export const news: NewsItem[] = [
  // ── 2026 ────────────────────────────────────────────────────────────────
  {
    date: "April 2026",
    year: 2026,
    description:
      "AXIS Lab participated in ITRC 인재양성대전 2026 with several VR demonstrations, showcasing our latest research to the public.",
    type: "event",
    image: "/images/news/news_2026_itrc.png",
  },
  {
    date: "April 2026",
    year: 2026,
    description:
      "A paper accepted in IEEE Transactions on Visualization and Computer Graphics (Q1 Journal · JCR top 5.4%).",
    type: "paper",
    image: "/images/news/news_2026_tvcg.png",
  },
  {
    date: "March 2026",
    year: 2026,
    description:
      "Prof. Chaeyong Park selected for the Outstanding Young Researcher Grant by NRF, providing 94M KRW/year over three years.",
    type: "grant",
    image: "/images/news/news_2026_nrf.png",
  },
  {
    date: "February 2026",
    year: 2026,
    description:
      "A paper accepted in IEEE Transactions on Haptics.",
    type: "paper",
    image: "/images/news/news_2026_toh.png",
  },
  {
    date: "February 2026",
    year: 2026,
    description:
      "A paper accepted in Advanced Intelligent Systems (Q1 Journal).",
    type: "paper",
    image: "/images/news/news_2026_ais.png",
  },
  {
    date: "January 2026",
    year: 2026,
    description:
      "Two papers accepted at ACM CHI 2026.",
    type: "paper",
    image: "/images/news/news_2026_chi.png",
  },
  {
    date: "January 2026",
    year: 2026,
    description:
      "One poster conditionally accepted at IEEE VR 2026.",
    type: "paper",
    image: "/images/news/news_2026_vr.png",
  },
  {
    date: "January 2026",
    year: 2026,
    description:
      "Prof. Chaeyong Park appointed as Poster Associate Chair (AC) for ACM CHI 2026.",
    type: "service",
    image: "/images/news/news_2026_chi.png",
  },

  // ── 2025 ────────────────────────────────────────────────────────────────
  {
    date: "December 2025",
    year: 2025,
    description:
      "A paper accepted in ACS Applied Materials & Interfaces.",
    type: "paper",
    image: "/images/news/news_2025_acs.png",
  },
  {
    date: "December 2025",
    year: 2025,
    description:
      "A paper accepted at IEEE Haptics Symposium 2026.",
    type: "paper",
    image: "/images/news/news_2025_haptics.png",
  },
  {
    date: "September 2025",
    year: 2025,
    description:
      "Prof. Chaeyong Park has been appointed as an Assistant Professor at Korea University, Department of Computer Science and Engineering.",
    type: "event",
    image: "/images/news/news_2025_appointment.png",
  },
  {
    date: "February 2025",
    year: 2025,
    description:
      "A paper published in Advanced Materials Technologies (Q1 Journal).",
    type: "paper",
    image: "/images/news/news_2025_amt.png",
  },
];

// ─── Members ─────────────────────────────────────────────────────────────────

export type MemberRole =
  | "Principal Investigator"
  | "PhD Student"
  | "MS-PhD Student"
  | "BS-PhD Student"
  | "Research Intern";

export interface Member {
  name: string;
  role: MemberRole;
  email: string;
  photo: string;
  interests?: string;
  education?: string;
  links?: { label: string; href: string }[];
  status: "current" | "incoming";
  since?: string;
}

export const professor: Member = {
  name: "Chaeyong Park",
  role: "Principal Investigator",
  email: "chaeyong@korea.ac.kr",
  photo: "/images/members/chaeyong-park.jpg",
  interests: "HCI, Haptics, VR/AR",
  education: "Ph.D & B.S., POSTECH",
  links: [
    { label: "CV", href: "https://drive.google.com/file/d/1n1WTxAel43w9w8EajqqlseumyDOJ49mL/view" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=Chaeyong+Park",
    },
    { label: "Personal Page", href: "https://chaeyongpark.github.io/" },
  ],
  status: "current",
};

export const students: Member[] = [
  {
    name: "Heeyeon Kim",
    role: "PhD Student",
    email: "",
    photo: "/images/members/heeyeon-kim.jpg",
    status: "incoming",
    since: "Fall 2026",
  },
  {
    name: "Jaehyeong Hwang",
    role: "MS-PhD Student",
    email: "",
    photo: "/images/members/jaehyeong-hwang.png",
    status: "incoming",
    since: "Fall 2026",
  },
  {
    name: "Hyeseong Jin",
    role: "BS-PhD Student",
    email: "",
    photo: "/images/members/hyeseong-jin.jpg",
    status: "incoming",
    since: "Fall 2026",
  },
  {
    name: "Jae-Yong Choi",
    role: "Research Intern",
    email: "",
    photo: "/images/members/jae-yong-choi.jpg",
    status: "current",
  },
];

// ─── Research Areas ───────────────────────────────────────────────────────────

export interface ResearchArea {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  color: "teal" | "coral" | "gold";
  icon: string;
}

export const researchAreas: ResearchArea[] = [
  {
    id: "haptic-tech",
    title: "Enhancing User Experience with Haptic Technology",
    shortTitle: "Haptic Technology",
    description:
      "We develop tactile feedback systems — incorporating vibration, heat, and muscle movement — to create deeply immersive interactions. Our work spans virtual reality, robotics, and human-computer interaction.",
    details: [
      "Vibrotactile rendering and perception",
      "Multimodal haptic feedback (vibration, heat, kinesthetic)",
      "Haptic devices for VR controllers",
      "Perceptual studies of touch and force feedback",
    ],
    color: "teal",
    icon: "hand",
  },
  {
    id: "vr-research",
    title: "Next-Generation Virtual Reality Research",
    shortTitle: "VR / AR Research",
    description:
      "We create multisensory virtual environments that combine visual, auditory, and haptic feedback to produce realistic digital worlds. We also investigate novel input methods designed for natural and intuitive user interactions.",
    details: [
      "Immersive VR environment design",
      "Cross-modal perception in VR/AR",
      "Cybersickness measurement and mitigation",
      "Novel VR input device development",
    ],
    color: "coral",
    icon: "vr",
  },
  {
    id: "interface-prototyping",
    title: "Interface Prototyping and Application",
    shortTitle: "Interface Prototyping",
    description:
      "We design and fabricate physical interaction devices using techniques ranging from 3D printing to custom circuit design. Our goal is to bridge physical and digital technologies to develop more user-friendly experiences.",
    details: [
      "Soft and flexible tactile sensors",
      "Custom haptic actuator design",
      "3D-printed interactive prototypes",
      "Circuit-level hardware for HCI systems",
    ],
    color: "gold",
    icon: "circuit",
  },
];
