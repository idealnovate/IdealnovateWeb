"use client";

import Link from "next/link";
import {
  ArrowRight, Play, Star, Users, BookOpen, Award,
  TrendingUp, Palette, Brain, Megaphone, Briefcase, MoveRight,
} from "lucide-react";
import { useState } from "react";

const stats = [
  { value: "12,000+", label: "Active Learners",    icon: <Users     className="w-4 h-4" /> },
  { value: "94%",     label: "Job Placement Rate", icon: <TrendingUp className="w-4 h-4" /> },
  { value: "150+",    label: "Online Courses",     icon: <BookOpen  className="w-4 h-4" /> },
  { value: "48+",     label: "Certified Partners", icon: <Award     className="w-4 h-4" /> },
];

const partners = [
  "Google", "Microsoft", "Meta", "Flutterwave", "Andela", "Interswitch", "Paystack", "Konga",
];

const schools = [
  {
    label: "Design School",
    href:  "/learn/design-school",
    icon:  <Palette  className="w-5 h-5 sm:w-6 sm:h-6" />,
    desc:  "Master UI/UX, graphics & brand design",
    accent:      "#f4a85e",
    accentLight: "rgba(244,168,94,0.15)",
    tag:   "Most Popular",
  },
  {
    label: "Data & AI School",
    href:  "/learn/data-ai-school",
    icon:  <Brain    className="w-5 h-5 sm:w-6 sm:h-6" />,
    desc:  "Data analytics, ML & AI engineering",
    accent:      "#34d399",
    accentLight: "rgba(52,211,153,0.15)",
    tag:   "Trending",
  },
  {
    label: "Marketing School",
    href:  "/learn/marketing-school",
    icon:  <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />,
    desc:  "Digital marketing & growth strategies",
    accent:      "#f4a85e",
    accentLight: "rgba(244,168,94,0.15)",
    tag:   "New Intake",
  },
  {
    label: "Management School",
    href:  "/learn/management-school",
    icon:  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
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
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Background image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Idealhero.jpg')" }}
      />

      {/* ── Branding gradient overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(2,44,40,0.97) 0%, rgba(6,130,118,0.82) 55%, rgba(10,158,144,0.75) 100%)",
        }}
      />
      {/* ── Extra left-side darkening layer 1 ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)",
        }}
      />
      {/* ── Extra left-side darkening layer 2 ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.10) 40%, transparent 65%)",
        }}
      />

      {/* ── Subtle radial accents on top of overlay ── */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 60%, #f4a85e 0%, transparent 45%), radial-gradient(circle at 85% 15%, #0a9e90 0%, transparent 40%)",
        }}
      />

      {/* ── Grid texture ── */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blobs — hidden on small screens to avoid clutter */}
      <div className="hidden sm:block absolute top-20 right-10 w-48 md:w-64 h-48 md:h-64 rounded-full bg-[#f4a85e]/10 blur-3xl animate-pulse" />
      <div className="hidden sm:block absolute bottom-20 left-10 w-60 md:w-80 h-60 md:h-80 rounded-full bg-[#0a9e90]/15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 lg:pb-16">

        {/* Two-column grid — stacks on mobile, side-by-side from md */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center flex-1">

          {/* ══ LEFT: Hero Copy ══ */}
          <div className="text-white space-y-5 sm:space-y-6 lg:space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#f4a85e] animate-pulse shrink-0" />
              <span className="font-[Montserrat]">Africa&apos;s #1 tech upskilling platform</span>
            </div>

            {/* Headline */}
            <h1 className="font-[Montserrat] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight">
              Learn the skill.
              <br />
              <span className="text-[#f4a85e]">Land the job.</span>
            </h1>

            {/* Sub-heading */}
            <p className="font-[Montserrat] font-semibold text-base sm:text-lg lg:text-xl text-white/85 max-w-lg leading-relaxed">
              Our top-rated online tech programs take you from zero experience to landing your dream tech job.
            </p>

            {/* CTA Buttons — full-width on xs, auto on sm+ */}
            <div className="flex flex-col xs:flex-row sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Link
                href="/company/scholarships"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-4 bg-[#f4a85e] text-white font-bold text-sm sm:text-base rounded-lg hover:bg-[#e8903e] transition-all duration-200 shadow-sm font-[Montserrat] w-full sm:w-auto"
              >
                Get Scholarship Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-5 sm:px-7 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-white/20 transition-all duration-200 font-[Montserrat] w-full sm:w-auto"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                  <Play className="w-3 h-3 text-[#068276] ml-0.5" fill="currentColor" />
                </span>
                Watch Demo
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 sm:gap-4 pt-1">
              <div className="flex -space-x-2 shrink-0">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white flex items-center justify-center text-[10px] sm:text-xs font-bold text-white"
                    style={{ background: i % 2 === 0 ? "#f4a85e" : "#0a9e90" }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f4a85e]" fill="currentColor" />
                  ))}
                  <span className="text-white font-bold text-xs sm:text-sm ml-1 font-[Montserrat]">4.9</span>
                </div>
                <p className="text-white/70 text-[10px] sm:text-xs font-[Montserrat]">Trusted by 12,000+ learners</p>
              </div>
            </div>
          </div>

          {/* ══ RIGHT: School Category Cards ══ */}
          <div className="flex flex-col gap-3 sm:gap-4">

            {/* Label */}
            <p className="text-white/50 text-[10px] sm:text-xs font-[Montserrat] uppercase tracking-widest font-semibold">
              Explore Our Schools
            </p>

            {/* 1×4 card grid */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {schools.map((school) => (
                <Link
                  key={school.label}
                  href={school.href}
                  onMouseEnter={() => setHoveredSchool(school.label)}
                  onMouseLeave={() => setHoveredSchool(null)}
                  className="group relative flex flex-row items-center gap-4 p-3.5 sm:p-5 rounded-2xl border transition-all duration-300"
                  style={{
                    background:
                      hoveredSchool === school.label
                        ? "rgba(255,255,255,0.15)"
                        : "rgba(255,255,255,0.07)",
                    borderColor:
                      hoveredSchool === school.label
                        ? school.accent
                        : "rgba(255,255,255,0.12)",
                    boxShadow:
                      hoveredSchool === school.label
                        ? `0 8px 32px ${school.accent}30`
                        : "none",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0"
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
                    <p className="font-[Montserrat] text-white/55 text-xs mt-0.5 leading-snug truncate">
                      {school.desc}
                    </p>
                  </div>

                  {/* Tag + Arrow */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span
                      className="text-[10px] font-bold font-[Montserrat] px-2 py-0.5 rounded-full leading-tight"
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

            {/* Bottom CTA strip */}
            <div className="mt-0.5 flex flex-col xs:flex-row sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl bg-white/8 border border-white/12 backdrop-blur-sm">
              <div>
                <p className="font-[Montserrat] font-bold text-white text-xs sm:text-sm">Not sure where to start?</p>
                <p className="font-[Montserrat] text-white/55 text-[10px] sm:text-xs mt-0.5">Take our free career quiz</p>
              </div>
              <Link
                href="/company/scholarships"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#068276] text-white font-bold text-xs rounded-lg hover:bg-[#f4a85e] transition-all duration-200 font-[Montserrat] w-full sm:w-auto justify-center sm:justify-start"
              >
                Start Quiz
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-5 text-center hover:bg-white/15 transition-all duration-200"
            >
              <div className="flex items-center justify-center gap-1.5 text-[#f4a85e] mb-1">
                {stat.icon}
              </div>
              <div className="text-white font-bold text-xl sm:text-2xl lg:text-3xl font-[Montserrat]">{stat.value}</div>
              <div className="text-white/60 text-[10px] sm:text-xs font-[Montserrat] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── Partners marquee ── */}
        <div className="mt-8 sm:mt-12">
          <p className="text-center text-white/50 text-[10px] sm:text-xs font-[Montserrat] uppercase tracking-widest mb-4 sm:mb-6">
            Trusted by professionals at
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-6 sm:gap-8 animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((partner, i) => (
                <span
                  key={i}
                  className="inline-flex items-center font-[Montserrat] font-bold text-white/40 text-xs sm:text-sm tracking-wider hover:text-white/70 transition-colors shrink-0"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden w-full max-w-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 bg-black/20 rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors text-lg"
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
