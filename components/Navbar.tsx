"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/members", label: "Members" },
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60" : "bg-white"
    }`}>
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-14 w-56">
              <Image src="/images/logo_full3.png" alt="AXIS Lab" fill className="object-contain object-left" priority />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <Link key={href} href={href} className={`nav-link px-3 ${active ? "active" : ""}`}>
                  {label}
                </Link>
              );
            })}
          </nav>

          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-slate-200 bg-white"
          >
            <nav className="container-main py-3 flex flex-col gap-0.5">
              {navLinks.map(({ href, label }) => {
                const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <Link key={href} href={href}
                    className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      active ? "bg-teal-50 text-teal-600" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
