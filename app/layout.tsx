import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AXIS Lab | Korea University",
    template: "%s | AXIS Lab",
  },
  description:
    "Augmented eXperience & Interactive Systems Laboratory at Korea University. Research in haptics, VR/AR, and human-computer interaction.",
  keywords: ["haptics", "VR", "HCI", "Korea University", "AXIS Lab"],
  icons: {
    icon: "/images/logo_circle.png",
    apple: "/images/logo_circle.png",
  },
  openGraph: {
    title: "AXIS Lab | Korea University",
    description:
      "Augmented eXperience & Interactive Systems Laboratory at Korea University. Research in haptics, VR/AR, and human-computer interaction.",
    url: "https://kuaxislab.github.io",
    siteName: "AXIS Lab",
    images: [
      {
        url: "https://kuaxislab.github.io/images/logo_full.png",
        width: 1200,
        height: 630,
        alt: "AXIS Lab Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
