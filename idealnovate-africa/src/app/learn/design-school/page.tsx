"use client";

import Link from "next/link";
import {
  ArrowRight, CheckCircle, Star, Users, Clock, Award, Play,
  Palette, PenTool, Layers, Eye, Pen, Monitor, Smartphone, Globe,
  ChevronDown, Briefcase, TrendingUp, BookOpen, Zap, Shield,
} from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "3,120+", label: "Students Enrolled" },
  { value: "4.8★", label: "Average Rating" },
  { value: "3 Months", label: "Diploma Duration" },
  { value: "94%", label: "Job Placement Rate" },
];

const outcomes = [
  "UI/UX Designer",
  "Product Designer",
  "Brand Designer",
  "Visual Designer",
  "Graphic Designer",
  "Design Lead",
];

const tools = [
  { name: "Figma", icon: <PenTool className="w-5 h-5" /> },
  { name: "Adobe XD", icon: <Pen className="w-5 h-5" /> },
  { name: "Illustrator", icon: <Palette className="w-5 h-5" /> },
  { name: "Protopie", icon: <Layers className="w-5 h-5" /> },
  { name: "Framer", icon: <Monitor className="w-5 h-5" /> },
  { name: "Webflow", icon: <Globe className="w-5 h-5" /> },
];

const programmes = [
  {
    level: "01",
    badge: "Beginner",
    title: "Elementary Diploma",
    subtitle: "Start from Zero",
    duration: "4–8 Weeks",
    modules: "12 Modules",
    price: "₦45,000",
    popular: false,
    color: "#068276",
    features: [
      "Design fundamentals & principles",
      "Colour theory & typography",
      "Intro to Figma",
      "Your first 3 design projects",
      "Community support access",
    ],
  },
  {
    level: "02",
    badge: "Most Popular",
    title: "Professional Diploma",
    subtitle: "Go Professional",
    duration: "3 Months",
    modules: "28 Modules",
    price: "₦120,000",
    popular: true,
    color: "#f4a85e",
    features: [
      "Everything in Elementary",
      "UI/UX design processes",
      "User research & testing",
      "Portfolio of 8+ real projects",
      "1-on-1 mentoring sessions",
      "Career readiness coaching",
      "Job referral support",
    ],
  },
  {
    level: "03",
    badge: "Expert",
    title: "Masterclass",
    subtitle: "Become a Leader",
    duration: "6 Months",
    modules: "40+ Modules",
    price: "₦200,000",
    popular: false,
    color: "#022c28",
    features: [
      "Everything in Professional",
      "Advanced design systems",
      "Design leadership & strategy",
      "Live sessions with industry leads",
      "Brand identity & motion design",
      "Guaranteed job placement",
    ],
  },
];

const curriculum = [
  {
    week: "Week 1–2",
    title: "Design Thinking & Foundations",
    topics: ["Visual design principles", "Colour theory & typography", "Design thinking process", "Intro to Figma workspace"],
  },
  {
    week: "Week 3–4",
    title: "User Research & Strategy",
    topics: ["User interviews & surveys", "Personas & empathy maps", "Competitor analysis", "Information architecture"],
  },
  {
    week: "Week 5–6",
    title: "Wireframing & Prototyping",
    topics: ["Low-fi & high-fi wireframes", "Interactive prototypes in Figma", "User flows & journey maps", "Usability testing basics"],
  },
  {
    week: "Week 7–8",
    title: "UI Design & Design Systems",
    topics: ["Component libraries", "Design tokens & variables", "Responsive design patterns", "Accessibility in design"],
  },
  {
    week: "Week 9–10",
    title: "Portfolio & Real Projects",
    topics: ["End-to-end product design", "Case study writing", "Presentation skills", "Peer reviews & feedback"],
  },
  {
    week: "Week 11–12",
    title: "Career Readiness",
    topics: ["Portfolio polish & review", "Interview preparation", "Salary negotiation", "Job placement support"],
  },
];

const testimonials = [
  {
    name: "Amara Osei",
    role: "UI Designer @ Flutterwave",
    text: "Within 3 months I went from zero design knowledge to landing a full-time role at Flutterwave. The mentorship and real-world projects made all the difference.",
    rating: 5,
    avatar: "AO",
    color: "#068276",
  },
  {
    name: "Chidi Nwosu",
    role: "Product Designer @ Andela",
    text: "The curriculum is incredibly practical. I had a job offer before I even finished the programme. Idealnovate is the real deal.",
    rating: 5,
    avatar: "CN",
    color: "#f4a85e",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Freelance Brand Designer",
    text: "I was a graphic artist before, but this programme gave me the strategic UX skills I needed to charge 3x my old rates. Worth every kobo.",
    rating: 5,
    avatar: "FA",
    color: "#022c28",
  },
];

const faqs = [
  {
    q: "Do I need any prior design experience?",
    a: "No experience needed. Our Elementary Diploma is designed for complete beginners. We start from the very basics and build up systematically.",
  },
  {
    q: "What tools will I learn?",
    a: "You'll master Figma (industry standard), Adobe Illustrator, Protopie for advanced prototyping, and Framer for design-to-code workflows.",
  },
  {
    q: "Are classes live or recorded?",
    a: "We offer a hybrid model — recorded lessons you can watch at your own pace, plus live weekly Q&A sessions and mentoring calls with instructors.",
  },
  {
    q: "Is there a scholarship available?",
    a: "Yes! We offer full and partial scholarships to qualifying applicants. Apply through our scholarship page and our admissions team will review your application.",
  },
  {
    q: "What happens after I complete the programme?",
    a: "You receive an Idealnovate-certified diploma, get featured in our talent pool for employer referrals, and receive ongoing job placement support.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function DesignSchoolPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen">

        {/* ── HERO ────────────────────────────────────────────────────── */}
        <section className="bg-[#022c28] pt-32 pb-20 relative overflow-hidden">
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #068276 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #f4a85e 0%, transparent 70%)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#068276]/20 border border-[#068276]/30 rounded-full text-xs font-semibold text-[#0a9e90] mb-6 font-[Montserrat]">
                <Palette className="w-3.5 h-3.5" />
                Design School
              </div>

              <h1 className="font-[Montserrat] font-bold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-6">
                Become a World-Class
                <br />
                <span className="text-[#f4a85e]">UI/UX Designer</span>
              </h1>
              <p className="font-[Montserrat] text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
                Master Figma, design systems, and user research. Build a portfolio of real projects and land your dream design job in 3 months.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-12">
                <Link
                  href="/company/scholarships"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#f4a85e] text-white font-bold rounded-lg hover:bg-[#e8903e] transition-all shadow-lg font-[Montserrat] text-sm"
                >
                  Apply for Scholarship
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Play className="w-3 h-3 text-white ml-0.5" fill="currentColor" />
                  </span>
                  Watch Programme Overview
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <p className="font-[Montserrat] font-bold text-white text-lg">{s.value}</p>
                    <p className="font-[Montserrat] text-white/45 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TOOLS STRIP ─────────────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <p className="font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-widest shrink-0">
                Tools you&apos;ll master
              </p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#f7fbfa] border border-[#e8f5f3] rounded-lg text-sm font-semibold text-[#022c28] font-[Montserrat]"
                  >
                    <span className="text-[#068276]">{tool.icon}</span>
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU'LL LEARN ────────────────────────────────────────── */}
        <section className="section-padding bg-[#f7fbfa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5f3] text-[#068276] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <BookOpen className="w-3.5 h-3.5" />
                  What You&apos;ll Learn
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#022c28] leading-tight mb-6">
                  Skills that get you
                  <span className="text-[#068276]"> hired</span>
                </h2>
                <p className="font-[Montserrat] text-gray-500 leading-relaxed mb-8">
                  Our curriculum is built with input from top design teams across Africa and globally. Every skill you learn maps directly to what employers are hiring for.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "UI/UX design principles",
                    "Figma & design tools",
                    "User research methods",
                    "Wireframing & prototyping",
                    "Design systems & components",
                    "Responsive web design",
                    "Mobile app design",
                    "Portfolio development",
                    "Brand identity design",
                    "Accessibility standards",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-3 py-2">
                      <CheckCircle className="w-4 h-4 text-[#068276] shrink-0" />
                      <span className="font-[Montserrat] text-sm text-[#022c28] font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career outcomes card */}
              <div className="bg-[#022c28] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-2xl"
                  style={{ background: "radial-gradient(circle, #f4a85e 0%, transparent 70%)" }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <Briefcase className="w-5 h-5 text-[#f4a85e]" />
                    <p className="font-[Montserrat] font-bold text-white text-sm uppercase tracking-wider">Career Outcomes</p>
                  </div>
                  <p className="font-[Montserrat] text-white/60 text-sm mb-6">Graduates of our Design School go on to work as:</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {outcomes.map((role) => (
                      <span key={role} className="px-3 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-full font-[Montserrat]">
                        {role}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-6 grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-[Montserrat] font-bold text-white text-2xl">₦300k+</p>
                      <p className="font-[Montserrat] text-white/50 text-xs mt-1">Entry-level monthly salary</p>
                    </div>
                    <div>
                      <p className="font-[Montserrat] font-bold text-white text-2xl">94%</p>
                      <p className="font-[Montserrat] text-white/50 text-xs mt-1">Employed within 6 months</p>
                    </div>
                  </div>
                  <Link
                    href="/company/scholarships"
                    className="mt-8 flex items-center justify-center gap-2 py-3 px-6 bg-[#f4a85e] text-white font-bold text-sm rounded-lg hover:bg-[#e8903e] transition-all font-[Montserrat]"
                  >
                    Start Your Journey <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CURRICULUM ──────────────────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0faf8] text-[#068276] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Layers className="w-3.5 h-3.5" />
                Curriculum
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#022c28] leading-tight">
                12 Weeks to
                <span className="text-[#068276]"> Designer</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] leading-relaxed">
                A structured, project-based curriculum built for working people — flexible enough to fit your schedule.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {curriculum.map((mod, i) => (
                <div
                  key={i}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                    openModule === i ? "border-[#068276]/40 shadow-md" : "border-gray-100 hover:border-[#068276]/20"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-10 h-10 rounded-xl bg-[#f0faf8] flex items-center justify-center text-[#068276] font-bold text-sm font-[Montserrat] shrink-0">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-[Montserrat] text-xs text-[#068276] font-semibold mb-0.5">{mod.week}</p>
                        <p className="font-[Montserrat] font-bold text-[#022c28] text-sm sm:text-base">{mod.title}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform shrink-0 ${openModule === i ? "rotate-180 text-[#068276]" : ""}`}
                    />
                  </button>
                  {openModule === i && (
                    <div className="px-6 pb-5 grid sm:grid-cols-2 gap-2">
                      {mod.topics.map((t) => (
                        <div key={t} className="flex items-center gap-2.5">
                          <CheckCircle className="w-3.5 h-3.5 text-[#068276] shrink-0" />
                          <span className="font-[Montserrat] text-sm text-gray-600">{t}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROGRAMMES / PRICING ────────────────────────────────────── */}
        <section className="section-padding bg-[#f7fbfa]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5f3] text-[#068276] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Award className="w-3.5 h-3.5" />
                Choose Your Programme
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#022c28] leading-tight">
                Pick the right
                <span className="text-[#068276]"> level for you</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat]">
                All programmes include scholarship access. You may qualify for up to 100% funding.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {programmes.map((p) => (
                <div
                  key={p.title}
                  className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    p.popular ? "shadow-2xl shadow-[#022c28]/20 md:scale-105" : "shadow-lg"
                  }`}
                >
                  {p.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f4a85e] to-[#068276]" />
                  )}
                  <div className={`p-8 h-full flex flex-col ${p.popular ? "bg-[#022c28] text-white" : "bg-white border border-gray-100"}`}>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-5xl font-bold font-[Montserrat] ${p.popular ? "text-white/10" : "text-gray-100"}`}>{p.level}</span>
                      <span
                        className="px-3 py-1 text-xs font-bold rounded-full font-[Montserrat]"
                        style={{ background: p.popular ? "#f4a85e" : "#f0faf8", color: p.popular ? "white" : "#068276" }}
                      >
                        {p.badge}
                      </span>
                    </div>

                    <p className={`text-sm font-semibold uppercase tracking-wider mb-1 font-[Montserrat] ${p.popular ? "text-[#f4a85e]" : "text-[#068276]"}`}>
                      {p.subtitle}
                    </p>
                    <h3 className={`font-[Montserrat] font-bold text-2xl mb-2 ${p.popular ? "text-white" : "text-[#022c28]"}`}>{p.title}</h3>

                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-[Montserrat] font-medium ${p.popular ? "bg-white/10 text-white/70" : "bg-[#f7fbfa] text-gray-600"}`}>
                        <Clock className="w-3 h-3" />{p.duration}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-[Montserrat] font-medium ${p.popular ? "bg-white/10 text-white/70" : "bg-[#f7fbfa] text-gray-600"}`}>
                        <Layers className="w-3 h-3" />{p.modules}
                      </span>
                    </div>

                    <ul className="space-y-2.5 mb-8 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className={`flex items-start gap-2.5 text-sm font-[Montserrat] ${p.popular ? "text-white/80" : "text-gray-600"}`}>
                          <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${p.popular ? "text-[#f4a85e]" : "text-[#068276]"}`} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-dashed mb-6" style={{ borderColor: p.popular ? "rgba(255,255,255,0.15)" : "#e5e7eb" }} />

                    <div className="mb-6">
                      <p className={`font-[Montserrat] text-xs mb-1 ${p.popular ? "text-white/50" : "text-gray-400"}`}>Programme fee</p>
                      <p className={`font-[Montserrat] font-bold text-3xl ${p.popular ? "text-white" : "text-[#022c28]"}`}>{p.price}</p>
                      <p className={`font-[Montserrat] text-xs mt-1 ${p.popular ? "text-[#f4a85e]" : "text-[#068276]"}`}>Scholarship available — may pay ₦0</p>
                    </div>

                    <Link
                      href="/company/scholarships"
                      className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-sm transition-all font-[Montserrat] ${
                        p.popular ? "bg-[#f4a85e] text-white hover:bg-[#e8903e]" : "bg-[#022c28] text-white hover:bg-[#068276]"
                      }`}
                    >
                      Apply Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0faf8] text-[#068276] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Star className="w-3.5 h-3.5" fill="currentColor" />
                Student Stories
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#022c28] leading-tight">
                Real results from
                <span className="text-[#068276]"> real students</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-[#f7fbfa] rounded-2xl p-6 border border-[#e8f5f3]">
                  <div className="flex mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#f4a85e]" fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-[Montserrat] text-[#022c28] text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs font-[Montserrat] shrink-0"
                      style={{ background: t.color }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-[Montserrat] font-bold text-[#022c28] text-sm">{t.name}</p>
                      <p className="font-[Montserrat] text-gray-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────── */}
        <section className="section-padding bg-[#f7fbfa]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5f3] text-[#068276] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                Frequently Asked Questions
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#022c28] leading-tight">
                Got questions?
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border overflow-hidden transition-all ${
                    openFaq === i ? "border-[#068276]/40" : "border-gray-100"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-[Montserrat] font-semibold text-[#022c28] text-sm sm:text-base pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openFaq === i ? "rotate-180 text-[#068276]" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="font-[Montserrat] text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="section-padding bg-[#022c28] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #f4a85e 0%, transparent 60%), radial-gradient(circle at 70% 50%, #068276 0%, transparent 60%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f4a85e]/20 border border-[#f4a85e]/30 rounded-full text-xs font-semibold text-[#f4a85e] mb-6 font-[Montserrat]">
              <Zap className="w-3.5 h-3.5" />
              Limited Scholarship Slots Available
            </div>
            <h2 className="font-[Montserrat] font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
              Ready to become a
              <br />
              <span className="text-[#f4a85e]">designer?</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Join 3,120+ learners who transformed their careers with the Idealnovate Design School. Scholarships available — you may pay ₦0.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/company/scholarships"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f4a85e] text-white font-bold rounded-lg hover:bg-[#e8903e] transition-all shadow-lg font-[Montserrat]"
              >
                Apply for Scholarship <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/company/about"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat]"
              >
                <Shield className="w-4 h-4" />
                Learn About Idealnovate
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
