"use client";

import Link from "next/link";
import {
  ArrowRight, Play, Star, Users, BookOpen, Award,
  TrendingUp, Palette, Brain, Megaphone, Briefcase, MoveRight,
} from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "12,000+", label: "Active Learners",    icon: <Users      className="w-4 h-4" /> },
  { value: "94%",     label: "Job Placement Rate", icon: <TrendingUp className="w-4 h-4" /> },
  { value: "150+",    label: "Online Courses",     icon: <BookOpen   className="w-4 h-4" /> },
  { value: "48+",     label: "Certified Partners", icon: <Award      className="w-4 h-4" /> },
];

const partners = [
  "Google", "Microsoft", "Meta", "Flutterwave", "Andela", "Interswitch", "Paystack", "Konga",
];

const schools = [
  {
    label: "Design School",
    href:  "/learn/design-school",
    icon:  <Palette   className="w-5 h-5" />,
    desc:  "Master UI/UX, graphics & brand design",
    accent:      "#f4a85e",
    accentLight: "rgba(244,168,94,0.15)",
    tag:   "Most Popular",
  },
  {
    label: "Data & AI School",
    href:  "/learn/data-ai-school",
    icon:  <Brain     className="w-5 h-5" />,
    desc:  "Data analytics, ML & AI engineering",
    accent:      "#34d399",
    accentLight: "rgba(52,211,153,0.15)",
    tag:   "Trending",
  },
  {
    label: "Marketing School",
    href:  "/learn/marketing-school",
    icon:  <Megaphone className="w-5 h-5" />,
    desc:  "Digital marketing & growth strategies",
    accent:      "#f4a85e",
    accentLight: "rgba(244,168,94,0.15)",
    tag:   "New Intake",
  },
  {
    label: "Management School",
    href:  "/learn/management-school",
    icon:  <Briefcase className="w-5 h-5" />,
    desc:  "Product, project & tech leadership",
    accent:      "#34d399",
    accentLight: "rgba(52,211,153,0.15)",
    tag:   "Enrolling Now",
  },
];

export default function Hero() {
  const [videoOpen,     setVideoOpen]     = useState(false);
  const [hoveredSchool, setHoveredSchool] = useState<string | null>(null);

  return (
    <section className="flex flex-col min-h-screen">

      {/* ══════════════════════════════════════════
          SPLIT HERO  —  White left | Brand right
      ══════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-2">

        {/* ── LEFT: White panel ── */}
        <div className="bg-white flex items-center justify-end pt-28 sm:pt-32 lg:pt-36 pb-12 lg:pb-16 px-6 sm:px-10 lg:px-12 xl:px-20">
          <div className="w-full max-w-lg">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f0faf8] border border-[#e8f5f3] rounded-full text-xs sm:text-sm font-semibold text-[#068276] mb-6 font-[Montserrat]">
              <span className="w-2 h-2 rounded-full bg-[#068276] animate-pulse shrink-0" />
              Africa&apos;s #1 tech upskilling platform
            </div>

            {/* Headline */}
            <h1 className="font-[Montserrat] font-bold text-[#022c28] text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight mb-5">
              Learn the skill.
              <br />
              <span className="text-[#068276]">Land the job.</span>
            </h1>

            {/* Sub-heading */}
            <p className="font-[Montserrat] font-semibold text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Our top-rated online tech programs take you from zero experience to landing your dream tech job.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/company/scholarships"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#022c28] text-white font-bold text-sm rounded-lg hover:bg-[#068276] transition-all duration-200 shadow-sm font-[Montserrat]"
              >
                Get Scholarship Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 border border-[#022c28]/20 text-[#022c28] font-semibold text-sm rounded-lg hover:border-[#022c28] hover:bg-[#f7fbfa] transition-all duration-200 font-[Montserrat]"
              >
                <span className="w-7 h-7 rounded-full bg-[#022c28] flex items-center justify-center shrink-0">
                  <Play className="w-3 h-3 text-white ml-0.5" fill="currentColor" />
                </span>
                Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
              <div className="flex -space-x-2 shrink-0">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white"
                    style={{ background: i % 2 === 0 ? "#f4a85e" : "#068276" }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#f4a85e]" fill="currentColor" />
                  ))}
                  <span className="text-[#022c28] font-bold text-xs ml-1 font-[Montserrat]">4.9</span>
                </div>
                <p className="text-gray-400 text-xs font-[Montserrat] mt-0.5">Trusted by 12,000+ learners across Africa</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Brand dark panel ── */}
        <div className="bg-[#022c28] flex items-center justify-start relative overflow-hidden pt-8 pb-12 lg:pt-36 lg:pb-16 px-6 sm:px-10 lg:px-10 xl:px-16">

          {/* Decorative background elements */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #068276 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #f4a85e 0%, transparent 70%)" }}
          />

          {/* Cards content */}
          <div className="relative z-10 w-full max-w-lg">

            {/* Label */}
            <p className="text-white/40 text-[10px] sm:text-xs font-[Montserrat] font-semibold uppercase tracking-widest mb-4">
              Explore Our Schools
            </p>

            {/* 1×4 school cards */}
            <div className="flex flex-col gap-3">
              {schools.map((school) => (
                <Link
                  key={school.label}
                  href={school.href}
                  onMouseEnter={() => setHoveredSchool(school.label)}
                  onMouseLeave={() => setHoveredSchool(null)}
                  className="group flex flex-row items-center gap-4 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border transition-all duration-300"
                  style={{
                    background:
                      hoveredSchool === school.label
                        ? "rgba(255,255,255,0.10)"
                        : "rgba(255,255,255,0.05)",
                    borderColor:
                      hoveredSchool === school.label
                        ? school.accent
                        : "rgba(255,255,255,0.10)",
                    boxShadow:
                      hoveredSchool === school.label
                        ? `0 4px 24px ${school.accent}25`
                        : "none",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 shrink-0"
                    style={{
                      background: hoveredSchool === school.label ? school.accent : school.accentLight,
                      color:      hoveredSchool === school.label ? "#fff"        : school.accent,
                    }}
                  >
                    {school.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[Montserrat] font-bold text-white text-sm leading-tight">
                      {school.label}
                    </h3>
                    <p className="font-[Montserrat] text-white/45 text-xs mt-0.5 leading-snug truncate">
                      {school.desc}
                    </p>
                  </div>

                  {/* Tag + Arrow */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span
                      className="text-[9px] font-bold font-[Montserrat] px-2 py-0.5 rounded-full leading-tight"
                      style={{ background: school.accentLight, color: school.accent }}
                    >
                      {school.tag}
                    </span>
                    <MoveRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: school.accent }}
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Bottom quiz strip */}
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-5 py-3.5 rounded-xl bg-white/5 border border-white/8">
              <div>
                <p className="font-[Montserrat] font-bold text-white text-xs sm:text-sm">Not sure where to start?</p>
                <p className="font-[Montserrat] text-white/40 text-[10px] sm:text-xs mt-0.5">Take our free career quiz</p>
              </div>
              <Link
                href="/company/scholarships"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-[#068276] text-white font-bold text-xs rounded-lg hover:bg-[#f4a85e] transition-all duration-200 font-[Montserrat] w-full sm:w-auto justify-center"
              >
                Start Quiz <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          STATS BAR  —  Full width, white
      ══════════════════════════════════════════ */}
      <div className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#f0faf8] flex items-center justify-center text-[#068276] shrink-0">
                {stat.icon}
              </div>
              <div>
                <p className="font-[Montserrat] font-bold text-[#022c28] text-lg sm:text-xl leading-tight">{stat.value}</p>
                <p className="font-[Montserrat] text-gray-400 text-xs">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          PARTNERS MARQUEE  —  Full width, off-white
      ══════════════════════════════════════════ */}
      <div className="bg-[#f7fbfa] border-t border-gray-100 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-[10px] sm:text-xs font-[Montserrat] uppercase tracking-widest mb-4">
            Trusted by professionals at
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((partner, i) => (
                <span
                  key={i}
                  className="inline-flex items-center font-[Montserrat] font-bold text-gray-300 text-xs sm:text-sm tracking-wider hover:text-[#068276] transition-colors shrink-0"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Video Modal ── */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/10 rounded-full flex items-center justify-center text-[#022c28] hover:bg-black/20 transition-colors text-lg font-bold"
              onClick={() => setVideoOpen(false)}
            >
              ×
            </button>
            <div className="aspect-video bg-[#022c28] flex items-center justify-center">
              <div className="text-center text-white px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#068276] flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" />
                </div>
                <p className="font-[Montserrat] font-bold text-base sm:text-lg">Demo Video Coming Soon</p>
                <p className="font-[Montserrat] text-white/60 text-xs sm:text-sm mt-2">Watch how Idealnovate transforms careers</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
