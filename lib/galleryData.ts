export interface GalleryAlbum {
  id: string;
  title: string;
  date: string;
  description?: string;
  images: string[];
}

export const galleryAlbums: GalleryAlbum[] = [
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
