import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-auto">
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                <Mail size={15} className="mt-0.5 shrink-0 text-teal-500" />
                <a
                  href="mailto:chaeyong@korea.ac.kr"
                  className="hover:text-teal-600 transition-colors"
                >
                  chaeyong@korea.ac.kr
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-500">
                <MapPin size={15} className="mt-0.5 shrink-0 text-teal-500" />
                <span>
                  Room #404C, Science &amp; Engineering Library
                  <br />
                  Korea University, Seoul
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Logos side by side */}
          <div className="flex items-center gap-8 md:justify-end">
            <div className="relative h-16 w-56">
              <Image
                src="/images/logo_full.png"
                alt="AXIS Lab"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="relative h-16 w-64">
              <Image
                src="/images/logo_koreaUniv.png"
                alt="Korea University"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} AXIS Lab, Korea University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
