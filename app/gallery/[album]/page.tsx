import { notFound } from "next/navigation";
import { galleryAlbums } from "@/lib/galleryData";
import AlbumClient from "./AlbumClient";

export function generateStaticParams() {
  return galleryAlbums.map((a) => ({ album: a.id }));
}

export default async function AlbumPage({ params }: { params: Promise<{ album: string }> }) {
  const { album: albumId } = await params;
  const album = galleryAlbums.find((a) => a.id === albumId);
  if (!album) notFound();
  return <AlbumClient album={album} />;
}
