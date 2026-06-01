"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const researchTopics = [
  "촉각 장치를 활용한 아바타 움직임 개선 및 조작 방법",
  "시-촉각 형상이 일치하는 가상현실을 위한 VR 컨트롤러 지각 및 렌더링",
  "VR 입력 방식 고도화를 위한 인터페이스 방법론",
  "3D 프린팅을 활용한 인터랙티브 인터페이스 개발",
  "몰입감 및 정보 전달을 위한 전신 햅틱 슈트 응용 연구",
  "AI 기술을 활용한 HCI 및 햅틱스 연구",
  "그 외 사용자 경험 또는 시스템 개발과 관련된 어떠한 프로젝트",
];

export default function ContactPage() {
  return (
    <div className="section-padding">
      <div className="container-main">

        {/* Back */}
        <div className="mb-8">
          <Link href="/members" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-teal-600 transition-colors">
            <ArrowLeft size={15} /> Members
          </Link>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="section-title mb-3">학부 연구생 및 대학원생을 모집합니다.</h1>
          <p className="text-base text-slate-500 mb-12">
            AXIS (Augmented eXperience and Interactive System) 연구실은 더 나은 사용자 경험을 만들기 위한 기술을 연구합니다.
            인간-컴퓨터 상호작용(HCI)을 기반으로 햅틱스, 가상현실 등 사용자에게 직접적으로 맞닿아 있는 분야를 연구합니다.
          </p>
        </motion.div>

        {/* Research Topics */}
        <AnimatedSection className="mb-14">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
            <span className="w-8 h-1 bg-teal-500 rounded-full inline-block" />
            연구 분야
          </h2>
          <p className="text-base text-slate-500 mb-6">
            아래는 현재 진행 중이거나 계획 중인 연구 주제입니다. 이 외에도 사용자 경험 또는 시스템 개발과 관련된 프로젝트를 함께 환영합니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {researchTopics.map((topic, i) => (
              <AnimatedSection key={i} delay={i * 0.05} className="h-full">
                <div className="card p-4 flex items-start gap-3 border-l-4 border-l-teal-400 h-full">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed">{topic}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* How to Apply */}
        <AnimatedSection className="mb-14">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
            <span className="w-8 h-1 bg-coral-500 rounded-full inline-block" />
            지원 방법
          </h2>
          <div className="card p-6 sm:p-8 border-l-4 border-l-coral-500">
            <p className="text-base text-slate-600 leading-relaxed mb-5">
              관심 있으신 분은 아래 내용을 포함하여 이메일을 보내주세요.
            </p>
            <ul className="space-y-3">
              {[
                "간단한 자기소개 및 관심 연구 주제 (위 주제가 아니어도 상관없음)",
                "희망 인턴십 기간 또는 지원 학위 과정",
                "이력서 또는 CV",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-coral-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Contact Info */}
        <AnimatedSection className="mb-14">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3 flex items-center gap-3">
            <span className="w-8 h-1 bg-gold-500 rounded-full inline-block" />
            연락처
          </h2>
          <div className="card p-6 sm:p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-teal-500" />
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">이메일</p>
                  <a href="mailto:chaeyong@korea.ac.kr" className="text-base text-teal-600 font-medium hover:underline">
                    chaeyong@korea.ac.kr
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-teal-500" />
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">전화</p>
                  <p className="text-base text-slate-600">02-3290-3980</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal-500" />
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">위치</p>
                  <p className="text-base text-slate-600 leading-relaxed">
                    서울특별시 성북구 안암로 145 고려대학교 과학도서관 404C호
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
