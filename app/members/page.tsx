"use client";

import Image from "next/image";
import { useState } from "react";
import { Mail, ExternalLink, GraduationCap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { professor, students } from "@/lib/data";
import type { Member } from "@/lib/data";
import Link from "next/link";

function MemberPhoto({ src, name, size = "md" }: { src: string; name: string; size?: "lg" | "md" }) {
  const [error, setError] = useState(false);
  const dim = size === "lg" ? "w-40 h-40 sm:w-48 sm:h-48" : "w-28 h-28 sm:w-36 sm:h-36";
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  return (
    <div className={`${dim} rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center shrink-0`}>
      {!error ? (
        <Image src={src} alt={name} width={192} height={192} className="w-full h-full object-cover" onError={() => setError(true)} />
      ) : (
        <span className="text-teal-600 font-bold text-2xl">{initials}</span>
      )}
    </div>
  );
}

function ProfessorCard({ member }: { member: Member }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="card p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start border-t-4 border-teal-500"
    >
      <MemberPhoto src={member.photo} name={member.name} size="lg" />
      <div className="flex-1 text-center sm:text-left">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h2 className="text-2xl font-extrabold text-slate-900">{member.name}</h2>
          <span className="badge badge-teal">PI</span>
        </div>
        <p className="text-base text-teal-600 font-semibold mb-0.5">Assistant Professor</p>
        <p className="text-sm text-slate-500 mb-4">Department of Computer Science and Engineering, Korea University</p>
        {member.interests && (
          <div className="flex items-start gap-2 text-base text-slate-600 mb-2">
            <GraduationCap size={16} className="mt-0.5 shrink-0 text-teal-500" />
            <span><span className="font-medium">Research Interests: </span>{member.interests}</span>
          </div>
        )}
        {member.education && (
          <div className="flex items-start gap-2 text-base text-slate-600 mb-4">
            <GraduationCap size={16} className="mt-0.5 shrink-0 text-teal-500" />
            <span><span className="font-medium">Education: </span>{member.education}</span>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
          <a href={`mailto:${member.email}`} className="btn-secondary text-xs px-3 py-1.5">
            <Mail size={13} />Email
          </a>
          {member.links?.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs px-3 py-1.5">
              <ExternalLink size={13} />{link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StudentCard({ member, index }: { member: Member; index: number }) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="card p-5 sm:p-6 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow h-full">
        <div className="relative">
          <MemberPhoto src={member.photo} name={member.name} size="md" />
          {member.status === "incoming" && (
            <span className="absolute -top-1.5 -right-1.5 badge badge-gold text-[10px] px-2">Incoming</span>
          )}
        </div>
        <div>
          <h3 className="font-bold text-slate-900 text-base mb-0.5">{member.name}</h3>
          <p className="text-sm text-teal-600 font-medium mb-1">{member.role}</p>
          {member.since && <p className="text-sm text-slate-400">Starting {member.since}</p>}
          {member.email && (
            <a href={`mailto:${member.email}`} className="mt-2 inline-flex items-center gap-1 text-sm text-slate-500 hover:text-teal-600 transition-colors">
              <Mail size={12} />{member.email}
            </a>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function MembersPage() {
  return (
    <div className="section-padding">
      <div className="container-main">
        <AnimatedSection className="mb-14">
          <h1 className="section-title mb-3">Members</h1>
        </AnimatedSection>

        <section className="mb-14">
          <AnimatedSection className="mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="w-4 h-px bg-teal-500" />Faculty
            </h2>
          </AnimatedSection>
          <ProfessorCard member={professor} />
        </section>

        <section className="mb-14">
          <AnimatedSection className="mb-6">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <span className="w-4 h-px bg-teal-500" />Students
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {students.map((student, i) => (
              <StudentCard key={student.name} member={student} index={i} />
            ))}
          </div>
        </section>

        <AnimatedSection>
          <div className="card p-8 sm:p-10 text-center border-2 border-dashed border-teal-300 bg-teal-50/40">
            <Users size={40} className="mx-auto mb-4 text-teal-500 opacity-70" />
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">You! We are waiting for you.</h3>
            <p className="text-slate-500 text-base mb-6 max-w-md mx-auto">
              AXIS Lab is actively recruiting undergraduate and graduate researchers. If you are passionate about haptics, VR, or HCI, please get in touch.
            </p>
            <Link href="/contact" className="btn-primary">
              <Mail size={16} />Contact / How to Join
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
