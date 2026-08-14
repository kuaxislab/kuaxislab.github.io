export interface GalleryAlbum {
  id: string;
  title: string;
  date: string;
  description?: string;
  images: string[];
}

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

// "August 2026" -> sortable number (2026 * 12 + 7)
function dateValue(date: string): number {
  const [month, year] = date.trim().split(/\s+/);
  const m = MONTHS.indexOf(month.toLowerCase());
  return Number(year) * 12 + (m >= 0 ? m : 0);
}

const albums: GalleryAlbum[] = [
  {
    id: "2026_ITRC",
    title: "ITRC 인재양성대전 2026",
    date: "April 2026",
    description: "VR demonstrations at ITRC 인재양성대전 2026",
    images: [
      "/images/gallery/2026_ITRC/1.jpg",
      "/images/gallery/2026_ITRC/2.jpg",
      "/images/gallery/2026_ITRC/3.jpg",
    ],
  },
    {
    id: "2026_KHC",
    title: "2026 한국햅틱스학술대회 (KHC 2026)",
    date: "August 2026",
    description: "신진연구자 발표 및 구두발표 at 2026 한국햅틱스학술대회 (KHC 2026)",
    images: [
      "/images/gallery/2026_KHC/1.jpg",
      "/images/gallery/2026_KHC/2.jpg",
      "/images/gallery/2026_KHC/3.jpg",
      "/images/gallery/2026_KHC/4.jpg",
      "/images/gallery/2026_KHC/5.jpg",
      "/images/gallery/2026_KHC/6.jpg",
      "/images/gallery/2026_KHC/7.jpg",
    ],
  },
  // Add more albums here:
  // {
  //   id: "2026_example",
  //   title: "Album Title",
  //   date: "Month Year",
  //   images: [
  //     "/images/gallery/2026_example/1.jpg",
  //     "/images/gallery/2026_example/2.jpg",
  //   ],
  // },
];

// Newest first
export const galleryAlbums: GalleryAlbum[] = [...albums].sort(
  (a, b) => dateValue(b.date) - dateValue(a.date)
);
