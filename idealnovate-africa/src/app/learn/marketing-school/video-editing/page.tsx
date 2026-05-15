"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight, Star, Clock, CheckCircle, ChevronDown,
  Megaphone, Monitor, Globe, Zap, BookOpen, Award,
  Target, Briefcase, TrendingUp, MessageSquare,
  Users, Calendar, Shield, HeartHandshake, GraduationCap,
  Layers, Search, Brain, Video,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const curriculum = [
  {
    module: "01",
    title: "Introduction to Video Storytelling",
    desc: "Understand how great videos are built — from concept to script to final cut. Learn the language of film and apply storytelling frameworks that keep audiences watching.",
    topics: ["Storytelling principles & narrative arcs", "Video planning & shot lists", "Scripting for short-form & long-form", "Understanding your audience & platform context"],
    duration: "Week 1",
  },
  {
    module: "02",
    title: "Mobile Video Editing with CapCut",
    desc: "Master CapCut from zero — editing clips, applying transitions, adding text, and producing polished short-form videos directly from your phone. Perfect for TikTok, Reels, and Shorts.",
    topics: ["CapCut workspace orientation", "Cuts, transitions & timing", "Text overlays, captions & stickers", "Audio sync & trending sounds"],
    duration: "Week 2",
  },
  {
    module: "03",
    title: "Advanced Mobile Editing — InShot & VN",
    desc: "Expand your mobile toolkit with InShot for quick social content and VN Video Editor for multi-track timelines. Learn when to use each tool to maximise output without slowing down.",
    topics: ["InShot for Instagram & YouTube Shorts", "VN multi-track timeline editing", "Speed ramping on mobile", "Colour adjustments on mobile devices"],
    duration: "Week 3",
  },
  {
    module: "04",
    title: "Professional PC Editing with DaVinci Resolve",
    desc: "Transition to the professional desktop workflow. Set up your DaVinci Resolve project, import media, learn the Cut and Edit pages, and understand non-linear editing fundamentals.",
    topics: ["DaVinci Resolve interface & project setup", "Media management & bins", "Cut page for speed-editing", "Edit page — advanced timeline control"],
    duration: "Week 4",
  },
  {
    module: "05",
    title: "Colour Grading & Visual Aesthetics",
    desc: "Learn professional colour correction and grading inside DaVinci Resolve's Colour page — the industry gold standard. Build signature looks, apply LUTs, and make your footage visually compelling.",
    topics: ["Primary & secondary colour correction", "Applying and creating LUTs", "Skin tone balancing & matching shots", "Building a consistent visual brand aesthetic"],
    duration: "Week 5",
  },
  {
    module: "06",
    title: "Audio Design & Sound Engineering",
    desc: "Great video is 50% audio. Learn to clean up dialogue, layer music, design sound effects, and mix audio tracks to broadcast standard using DaVinci Resolve's Fairlight page.",
    topics: ["Audio cleanup & noise reduction", "Music layering & sound effects", "Dialogue editing & levelling", "Fairlight audio mixing basics"],
    duration: "Week 6",
  },
  {
    module: "07",
    title: "Motion Graphics, Titles & Visual Effects",
    desc: "Add professional polish — animated titles, lower thirds, kinetic text, and basic VFX using Fusion in DaVinci Resolve and Canva Video for rapid social content creation.",
    topics: ["Animated titles & lower thirds", "Kinetic typography", "Canva Video for social graphics", "Basic compositing & green screen"],
    duration: "Week 7",
  },
  {
    module: "08",
    title: "AI Tools for Video Production",
    desc: "Supercharge your output with AI. Use AI-powered tools for auto-captioning, scene detection, background removal, voice cloning, and script generation — cutting editing time in half.",
    topics: ["AI auto-captions & subtitle tools", "AI background removal & scene editing", "Script generation with AI", "AI thumbnail creation & A/B testing"],
    duration: "Week 8",
  },
  {
    module: "09",
    title: "Content Strategy & Monetisation",
    desc: "Go beyond editing — build a repeatable content engine. Learn platform algorithms, content scheduling, packaging your skills as a freelancer, and pricing your video production services.",
    topics: ["Platform algorithm essentials (TikTok, YT, Reels)", "Content calendar & batch editing workflows", "Freelance pricing & client management", "YouTube monetisation fundamentals"],
    duration: "Week 9",
  },
  {
    module: "10",
    title: "Portfolio, Final Project & Career Launch",
    desc: "Produce your capstone video project — a full-scale production that showcases every skill from the programme. Build your public portfolio, craft your client pitch, and prepare for job applications or freelancing.",
    topics: ["Capstone video project (production & post)", "Portfolio assembly & showreel creation", "Client pitch deck & rate card", "LinkedIn & Upwork profile optimisation for video editors"],
    duration: "Week 10",
  },
];

const testimonials = [
  {
    name: "Temi Oladipo",
    role: "Video Editor @ TechPoint Africa",
    text: "I started with zero PC editing experience — just phone edits. By Week 5 I was colour grading in DaVinci Resolve like a pro. The progression is perfectly designed.",
    rating: 5,
    avatar: "TO",
    color: "#266D67",
  },
  {
    name: "Chisom Nwosu",
    role: "Content Creator (800K TikTok)",
    text: "The CapCut and AI tools modules alone were worth the full programme fee. My video production speed tripled — I now produce 5× more content with a fraction of the effort.",
    rating: 5,
    avatar: "CN",
    color: "#f9ba48",
  },
  {
    name: "Kwabena Asante",
    role: "Freelance Video Editor (Ghana)",
    text: "I landed my first ₵8,000 client project two weeks after completing the programme. The freelance pricing module taught me to value my skills — which most editors never learn.",
    rating: 4,
    avatar: "KA",
    color: "#163d3a",
  },
  {
    name: "Amara Diallo",
    role: "Video Producer @ Moniepoint",
    text: "The colour grading module changed everything. I could instantly see the difference in my work. Clients now comment on the cinematic look of every video — they've doubled my rate.",
    rating: 5,
    avatar: "AD",
    color: "#266D67",
  },
  {
    name: "Femi Adebisi",
    role: "Brand Video Lead @ Paystack",
    text: "Having mobile AND desktop editing in one programme is rare. Most courses pick one — Idealnovate gave us both, which is exactly what real brands need from a versatile editor.",
    rating: 5,
    avatar: "FA",
    color: "#163d3a",
  },
  {
    name: "Adaeze Eze",
    role: "Social Media Manager & Editor @ GTBank",
    text: "The AI tools module is a game changer. My video turnaround went from 3 days to same-day delivery for basic edits. My team thinks I hired a second editor.",
    rating: 5,
    avatar: "AE",
    color: "#f9ba48",
  },
];

const faqs = [
  {
    q: "Do I need any prior editing experience to join this programme?",
    a: "None at all. The programme is built for complete beginners — we start from understanding how video works before touching any software. If you've already used CapCut on your phone, you'll be ahead of the curve by Week 2.",
  },
  {
    q: "What devices do I need — phone, laptop, or both?",
    a: "Ideally both. The mobile modules (CapCut, InShot, VN) run on Android or iPhone. The PC modules use DaVinci Resolve, which is free and runs on Windows or Mac. If you only have one device, let our admissions team know and we'll tailor the focus of your programme accordingly.",
  },
  {
    q: "Is DaVinci Resolve expensive? Do I need to buy it?",
    a: "DaVinci Resolve has a fully free version that covers everything taught in this programme. You do not need to purchase any software. The free version is what many professional editors use day-to-day.",
  },
  {
    q: "How are classes delivered — live or pre-recorded?",
    a: "Classes are delivered live with a minimum of 2 sessions per week (up to 2 hours each), and all sessions are recorded so you never fall behind. You also get mentor check-ins and live cohort reviews throughout the 10 weeks.",
  },
  {
    q: "Can I use this programme to go freelance, or is it only for employment?",
    a: "Both paths are fully supported. Module 9 dedicates a full week to freelance strategy — pricing, client pitching, contracts, and platforms like Upwork. Module 10 covers both job applications and building a freelance portfolio. Many graduates freelance part-time while still employed.",
  },
  {
    q: "Is a scholarship available for this programme?",
    a: "Yes. We offer 80% scholarships to qualifying applicants — you pay only the 20% registration fee to secure your seat. Apply via our Scholarship page and our admissions team will review your application within 5 business days.",
  },
  {
    q: "What certificate do I receive on completion?",
    a: "You receive an Idealnovate Professional Certificate in Video Editing (Mobile & PC) — a digitally verifiable credential with a LinkedIn-ready badge. The certificate is recognised by 48+ hiring partners across Africa and is accepted for international remote job applications.",
  },
  {
    q: "What types of videos will I be able to edit by graduation?",
    a: "By graduation you'll be able to edit social media content (TikTok, Reels, Shorts, YouTube), corporate brand videos, product demos, event recaps, vlogs, documentary-style pieces, and client-ready commercial productions — on both mobile and desktop.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VideoEditingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen">

        {/* ══════════════════════════════════════════
            1. HERO — Split Left / Right
        ══════════════════════════════════════════ */}
        <section className="bg-[#163d3a] pt-24 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[88vh]">

            {/* LEFT — Content */}
            <div className="flex flex-col justify-center py-12 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-6">
                <Link
                  href="/learn/marketing-school"
                  className="text-white/40 hover:text-white/60 transition-colors text-xs font-[Montserrat]"
                >
                  Marketing School
                </Link>
                <span className="text-white/25">/</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#f9ba48]/15 border border-[#f9ba48]/30 rounded-full text-[#f9ba48] text-xs font-bold font-[Montserrat]">
                  <Video className="w-3 h-3" />
                  Video Editing Diploma
                </span>
              </div>

              <h1
                className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
              >
                Edit Video Like a<br />
                <span className="text-[#f9ba48]">Professional Creator</span>
              </h1>

              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Master mobile and PC video editing — from CapCut to DaVinci Resolve — and build a career in Africa&apos;s fastest-growing creative industry.
              </p>

              {/* Key feature badges */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "10 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Career Paths", value: "Freelance & Employment" },
                  { icon: <Star className="w-4 h-4" fill="currentColor" />, label: "Alumni Rating", value: "4.7 / 5 ★" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 bg-white/6 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <div className="text-[#f9ba48] shrink-0">{f.icon}</div>
                    <div>
                      <p className="text-white/40 text-[10px] font-[Montserrat] uppercase tracking-wider">{f.label}</p>
                      <p className="text-white font-bold text-xs font-[Montserrat] leading-tight">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Video%20Editing%20Diploma"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold text-sm rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Talk with Admissions
                </a>
                <Link
                  href="/company/scholarships"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all font-[Montserrat]"
                >
                  Start an Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
                <div className="flex -space-x-2">
                  {["TO", "CN", "KA", "AD", "FA"].map((init, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-white/45 text-xs font-[Montserrat]">
                  Joined by <span className="text-white/70 font-semibold">1,400+ creators</span> across Africa
                </p>
              </div>
            </div>

            {/* RIGHT — Full-bleed image */}
            <div className="relative hidden lg:block">
              <Image
                src="/IdealTalent5.png"
                alt="Video Editing learners at Idealnovate"
                fill
                className="object-cover object-top"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #163d3a 0%, transparent 30%)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #163d3a 0%, transparent 25%)" }}
              />

              {/* Floating stat card */}
              <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">87%</p>
                    <p className="text-gray-400 text-xs font-[Montserrat]">Job placement rate</p>
                  </div>
                </div>
              </div>

              {/* Floating tool badge */}
              <div className="absolute bottom-10 right-8 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Primary Tools</p>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-[#f9ba48]" />
                  <span className="text-white font-bold text-sm font-[Montserrat]">CapCut + DaVinci</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            2. BENEFITS
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Megaphone className="w-3.5 h-3.5" />
                Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                The Only Video Programme<br />
                <span className="text-[#266D67]">Built for African Creators</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                We don&apos;t just teach software — we build editors who can create, monetise, and grow a career in video production.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <Video className="w-7 h-7" />,
                  title: "Mobile & PC Mastery",
                  desc: "Learn to edit on your phone with CapCut, InShot and VN — then graduate to professional PC workflows with DaVinci Resolve. Most courses teach one; we teach both because the industry expects both.",
                  color: "#f9ba48",
                },
                {
                  icon: <TrendingUp className="w-7 h-7" />,
                  title: "High-Income Creative Skill",
                  desc: "Skilled video editors in Africa earn ₦200k–₦500k+ monthly. Content creators and video production agencies are paying top rates for editors who combine speed, quality, and AI fluency.",
                  color: "#266D67",
                },
                {
                  icon: <Briefcase className="w-7 h-7" />,
                  title: "Freelance-Ready From Day One",
                  desc: "We teach the full freelance stack — not just editing. Pricing, client management, contracts, and portfolio building are embedded in the programme so you can take paying clients before you graduate.",
                  color: "#163d3a",
                },
                {
                  icon: <Users className="w-7 h-7" />,
                  title: "Community of Creators",
                  desc: "Join a network of 1,400+ video editors and content creators across Africa. Collaborate on projects, get peer feedback, share client referrals, and build professional relationships that last beyond graduation.",
                  color: "#f9ba48",
                },
              ].map((b, i) => (
                <div
                  key={i}
                  className="group relative bg-[#f4f9f8] rounded-3xl p-7 border border-[#e2efee] hover:border-[#266D67]/40 hover:shadow-xl hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: b.color }}
                  />
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: b.color }}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-base mb-2">{b.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-[Montserrat]">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TOOLS YOU'LL MASTER
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 bg-[#163d3a]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] opacity-20 blur-[100px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #266D67 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] opacity-15 blur-[80px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/6 border border-white/12 rounded-full text-white/50 text-xs font-semibold font-[Montserrat] mb-5 uppercase tracking-widest">
                <Zap className="w-3 h-3 text-[#f9ba48]" />
                Industry-Standard Tools
              </span>
              <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Tools You&apos;ll
                <span className="text-[#f9ba48]"> Master</span>
              </h2>
              <p className="text-white/45 font-[Montserrat] text-lg max-w-lg mx-auto leading-relaxed">
                Get hands-on with the exact tools professional video editors and top creators use every day.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                {
                  name: "CapCut",
                  tagline: "Mobile & PC Editing",
                  glow: "rgba(0,0,0,0.6)",
                  iconBg: "linear-gradient(145deg, #000000 0%, #1a1a1a 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <circle cx="20" cy="20" r="12" fill="white" fillOpacity="0.15"/>
                      <path d="M16 14l12 6-12 6V14z" fill="white"/>
                      <circle cx="20" cy="20" r="3" fill="white" fillOpacity="0.4"/>
                    </svg>
                  ),
                  accent: "#ffffff",
                },
                {
                  name: "DaVinci",
                  tagline: "Professional Grading",
                  glow: "rgba(255,90,0,0.5)",
                  iconBg: "linear-gradient(145deg, #1c1c1e 0%, #2d2d2f 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <path d="M20 6C12.268 6 6 12.268 6 20s6.268 14 14 14 14-6.268 14-14S27.732 6 20 6z" fill="none" stroke="#FF5A00" strokeWidth="2.5"/>
                      <path d="M14 20c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" fill="#FF5A00" fillOpacity="0.8"/>
                      <circle cx="20" cy="20" r="2" fill="white"/>
                    </svg>
                  ),
                  accent: "#FF5A00",
                },
                {
                  name: "Adobe Premiere",
                  tagline: "Industry Standard",
                  glow: "rgba(159,51,255,0.45)",
                  iconBg: "linear-gradient(145deg, #2c0059 0%, #5a0096 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <path d="M8 32V8l10 14L8 32z" fill="white" fillOpacity="0.9"/>
                      <path d="M32 32V8L22 22l10 10z" fill="white" fillOpacity="0.5"/>
                      <path d="M13 20h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
                    </svg>
                  ),
                  accent: "#9F33FF",
                },
                {
                  name: "InShot",
                  tagline: "Quick Social Edits",
                  glow: "rgba(70,191,127,0.45)",
                  iconBg: "linear-gradient(145deg, #1DB954 0%, #46BF7F 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <rect x="8" y="12" width="16" height="16" rx="3" fill="white" fillOpacity="0.9"/>
                      <path d="M28 16l5 4-5 4V16z" fill="white"/>
                      <path d="M11 18h10M11 22h7" stroke="#1DB954" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  accent: "#1DB954",
                },
                {
                  name: "Canva Video",
                  tagline: "Social Content",
                  glow: "rgba(0,196,204,0.45)",
                  iconBg: "linear-gradient(145deg, #00C4CC 0%, #7D2AE8 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <rect x="7" y="13" width="26" height="14" rx="4" fill="white" fillOpacity="0.2"/>
                      <rect x="7" y="13" width="26" height="14" rx="4" stroke="white" strokeWidth="1.5"/>
                      <path d="M17 17.5C17 16.67 17.67 16 18.5 16c.38 0 .74.14 1.01.38L22 19l-2.49 2.62A1.5 1.5 0 0117 20.5v-3z" fill="white"/>
                      <circle cx="26" cy="20" r="2.5" fill="white" fillOpacity="0.8"/>
                    </svg>
                  ),
                  accent: "#00C4CC",
                },
                {
                  name: "VN Editor",
                  tagline: "Multi-Track Mobile",
                  glow: "rgba(249,186,72,0.45)",
                  iconBg: "linear-gradient(145deg, #c47f00 0%, #f9ba48 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <rect x="7" y="12" width="26" height="5" rx="2.5" fill="white" fillOpacity="0.9"/>
                      <rect x="7" y="20" width="20" height="5" rx="2.5" fill="white" fillOpacity="0.6"/>
                      <rect x="7" y="28" width="14" height="4" rx="2" fill="white" fillOpacity="0.35"/>
                    </svg>
                  ),
                  accent: "#f9ba48",
                },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="group relative flex flex-col items-center text-center p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/16 transition-all duration-300 hover:-translate-y-2 cursor-default"
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `0 0 40px 0 ${tool.glow}` }}
                  />
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{ background: tool.iconBg }}
                  >
                    <div className="absolute inset-0 rounded-2xl"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
                    <div className="relative z-10">{tool.icon}</div>
                  </div>
                  <div
                    className="w-6 h-0.5 rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-10"
                    style={{ background: tool.accent }}
                  />
                  <p className="font-[Montserrat] font-bold text-white text-sm leading-tight mb-1">{tool.name}</p>
                  <p className="font-[Montserrat] text-white/35 text-xs leading-snug">{tool.tagline}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-white/25 text-xs font-[Montserrat] mt-10">
              All tools are introduced progressively across 10 modules — mobile tools first, then professional PC workflows.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3. WHERE ALUMNI WORK
        ══════════════════════════════════════════ */}
        <section className="py-14 bg-[#f4f9f8] border-y border-[#e2efee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
              Where our alumni work & create
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "TechPoint Africa", color: "#0066ff" },
                { name: "Paystack", color: "#011B33" },
                { name: "Moniepoint", color: "#00A86B" },
                { name: "Boomplay", color: "#e02020" },
                { name: "Flutterwave", color: "#f5a623" },
                { name: "GTBank", color: "#f97316" },
                { name: "Audiomack", color: "#f9ba48" },
                { name: "Zikoko Media", color: "#7c3aed" },
                { name: "Ndani TV", color: "#163d3a" },
                { name: "Glovo", color: "#f9a825" },
              ].map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-center px-4 py-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-0.5 cursor-default"
                >
                  <span
                    className="font-[Montserrat] font-bold text-sm text-center leading-tight"
                    style={{ color: c.color }}
                  >
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            4. CTA — We've Got Your Back
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2 min-h-[420px]">

              {/* LEFT */}
              <div className="relative bg-gradient-to-br from-[#163d3a] via-[#1d5450] to-[#266D67] flex flex-col justify-center px-8 sm:px-12 py-12 lg:py-16">
                <div className="absolute inset-0 opacity-[0.05]"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 blur-3xl"
                  style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 70%)" }} />

                <div className="relative z-10 max-w-md">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold font-[Montserrat] mb-5">
                    <HeartHandshake className="w-3.5 h-3.5 text-[#f9ba48]" />
                    Student Support
                  </span>
                  <h2
                    className="font-[Montserrat] font-bold text-white leading-tight mb-4"
                    style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                  >
                    We&apos;ve Got<br />
                    <span className="text-[#f9ba48]">Your Back</span>
                  </h2>
                  <p className="text-white/65 font-[Montserrat] text-base leading-relaxed mb-8">
                    From your first CapCut cut to your first paid client — our team and community support you every step of the way.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {[
                      "Dedicated mentor for the full 10 weeks",
                      "Missed a class? Every session is recorded",
                      "Community of 1,400+ creators across Africa",
                      "Freelance support until you land your first client",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#f9ba48] shrink-0 mt-0.5" />
                        <span className="text-white/75 text-sm font-[Montserrat]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/company/scholarships"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* RIGHT — image */}
              <div className="relative min-h-[320px] lg:min-h-0">
                <Image
                  src="/IdealTeam.png"
                  alt="Idealnovate mentorship team"
                  fill
                  className="object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(22,61,58,0.35) 0%, transparent 50%)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            5. CURRICULUM
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

              {/* Left sticky */}
              <div className="lg:sticky lg:top-32 self-start">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <BookOpen className="w-3.5 h-3.5" />
                  Course Curriculum
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  10 Modules.<br />
                  <span className="text-[#266D67]">One Career.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  A structured journey from complete beginner to professional video editor — covering mobile, PC, AI, and freelance strategy.
                </p>

                <div className="bg-[#163d3a] rounded-2xl p-6 space-y-4">
                  {[
                    { icon: <Layers className="w-4 h-4" />, label: "10 Core Modules" },
                    { icon: <Clock className="w-4 h-4" />, label: "8–10 Weeks" },
                    { icon: <Users className="w-4 h-4" />, label: "Live + Recorded Sessions" },
                    { icon: <Award className="w-4 h-4" />, label: "Professional Certification" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#f9ba48]/15 flex items-center justify-center text-[#f9ba48]">
                        {s.icon}
                      </div>
                      <span className="text-white text-sm font-[Montserrat] font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Accordion */}
              <div className="lg:col-span-2 space-y-3">
                {curriculum.map((mod, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
                      openModule === i
                        ? "border-[#266D67]/30 shadow-lg shadow-[#266D67]/8"
                        : "border-gray-100 hover:border-[#266D67]/20"
                    }`}
                  >
                    <button
                      className="w-full flex items-center gap-4 p-5 text-left"
                      onClick={() => setOpenModule(openModule === i ? null : i)}
                    >
                      <span className="w-9 h-9 rounded-xl bg-[#f4f9f8] flex items-center justify-center font-bold text-xs text-[#266D67] font-[Montserrat] shrink-0">
                        {mod.module}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-[Montserrat] font-bold text-[#163d3a] text-sm leading-snug">{mod.title}</p>
                        <p className="text-gray-400 text-xs font-[Montserrat] mt-0.5">{mod.duration}</p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#266D67] shrink-0 transition-transform duration-200 ${openModule === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${openModule === i ? "max-h-[500px]" : "max-h-0"}`}>
                      <div className="px-5 pb-5 pl-[4.25rem]">
                        <p className="text-gray-500 text-sm font-[Montserrat] leading-relaxed mb-4">{mod.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {mod.topics.map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f4f9f8] border border-[#e2efee] rounded-lg text-xs font-[Montserrat] text-[#266D67] font-medium"
                            >
                              <CheckCircle className="w-3 h-3" />
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            6. WHAT MAKES US DIFFERENT
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <Zap className="w-3.5 h-3.5" />
                  Our Edge
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight mb-5">
                  What Makes<br />
                  <span className="text-[#266D67]">Us Different</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                  Every module in this programme is built to produce editors who work fast, earn well, and never stop improving.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Video className="w-6 h-6" />,
                    title: "Mobile + Desktop in One",
                    desc: "Most video courses pick one platform. We cover both — because clients and employers need editors who can produce polished content on a phone and a workstation equally well.",
                  },
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: "AI-Powered Workflow",
                    desc: "AI tools for auto-captions, scene detection, voice cleanup, and script generation are embedded in the curriculum — so you graduate faster and more output-capable than any editor who trained without them.",
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: "Real Client Briefs",
                    desc: "Every project in the programme mirrors real briefs from African brands and content agencies — the exact type of work you'll be paid to produce within weeks of graduating.",
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Freelance Business Skills",
                    desc: "Technical skills alone won't build a career. We teach pricing, client management, portfolio strategy, and platform optimisation so you can earn from your editing skills from day one.",
                  },
                ].map((u, i) => (
                  <div
                    key={i}
                    className="group bg-[#f4f9f8] rounded-2xl p-6 border border-[#e2efee] hover:border-[#266D67]/30 hover:shadow-lg hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67] mb-4 group-hover:bg-[#266D67] group-hover:text-white transition-all duration-300">
                      {u.icon}
                    </div>
                    <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-sm mb-2">{u.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed font-[Montserrat]">{u.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            7. CTA — Gradient
        ══════════════════════════════════════════ */}
        <section
          className="section-padding relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #163d3a 0%, #1d5450 40%, #266D67 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 blur-3xl rounded-full"
            style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 65%)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold font-[Montserrat] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9ba48] animate-pulse" />
              Applications Open Now
            </span>
            <h2
              className="font-[Montserrat] font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Your Career in Video<br />
              <span className="text-[#f9ba48]">Starts With One Click</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 1,400+ creators who turned their love of video into a professional skill — and started earning from it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/company/scholarships"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-xl font-[Montserrat] text-sm"
              >
                Apply Now — It&apos;s Easy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:hello@idealnovate.com?subject=Video%20Editing%20Diploma%20Enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Ask a Question
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            8. NEXT COHORT
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Calendar className="w-3.5 h-3.5" />
                Upcoming Cohorts
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Pick Your
                <span className="text-[#266D67]"> Start Date</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">
                Choose the cohort that fits your schedule — all seats are limited and fill up quickly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  month: "Jul",
                  year: "2026",
                  fullDate: "Starts July 18, 2026",
                  status: "Filling Fast",
                  statusColor: "#f9ba48",
                  accent: "#f9ba48",
                  spots: "10 seats left",
                  highlight: true,
                },
                {
                  month: "Sep",
                  year: "2026",
                  fullDate: "Starts September 19, 2026",
                  status: "Open",
                  statusColor: "#266D67",
                  accent: "#266D67",
                  spots: "22 seats left",
                  highlight: false,
                },
                {
                  month: "Nov",
                  year: "2026",
                  fullDate: "Starts November 14, 2026",
                  status: "Open",
                  statusColor: "#266D67",
                  accent: "#163d3a",
                  spots: "30 seats left",
                  highlight: false,
                },
              ].map((cohort) => (
                <div
                  key={cohort.month}
                  className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                    cohort.highlight
                      ? "bg-[#163d3a] shadow-2xl shadow-[#163d3a]/30"
                      : "bg-[#f4f9f8] border border-[#e2efee] hover:shadow-xl hover:shadow-[#266D67]/10"
                  }`}
                >
                  {cohort.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: `linear-gradient(90deg, ${cohort.accent}, #266D67)` }} />
                  )}

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: cohort.highlight ? "rgba(249,186,72,0.15)" : "#eef6f5" }}>
                        <Calendar className="w-6 h-6" style={{ color: cohort.accent }} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold font-[Montserrat]"
                        style={{ background: `${cohort.statusColor}20`, color: cohort.statusColor }}>
                        {cohort.status}
                      </span>
                    </div>

                    <p className={`font-[Montserrat] text-6xl font-bold leading-none mb-1 ${cohort.highlight ? "text-[#f9ba48]" : "text-[#163d3a]"}`}>
                      {cohort.month}
                    </p>
                    <p className={`font-[Montserrat] font-semibold text-base mb-4 ${cohort.highlight ? "text-white/40" : "text-gray-400"}`}>
                      {cohort.year}
                    </p>

                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-6 text-xs font-[Montserrat] font-medium ${cohort.highlight ? "bg-white/8 text-white/60" : "bg-white text-gray-500"}`}>
                      <Clock className="w-3.5 h-3.5" />
                      {cohort.fullDate}
                    </div>

                    <div className="flex items-center gap-2 mb-7">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: cohort.statusColor }} />
                      <span className={`text-xs font-[Montserrat] font-semibold ${cohort.highlight ? "text-white/70" : "text-gray-500"}`}>
                        {cohort.spots}
                      </span>
                    </div>

                    <Link
                      href="/company/scholarships"
                      className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm font-[Montserrat] text-white transition-all hover:opacity-90"
                      style={{ background: cohort.highlight ? "#f9ba48" : "#163d3a" }}
                    >
                      Reserve My Seat
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            9. TESTIMONIALS
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-32">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <Star className="w-3.5 h-3.5" fill="currentColor" />
                  Student Stories
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  Real Editors.<br />
                  <span className="text-[#266D67]">Real Results.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Graduates who went from zero to professional — with client projects, income, and social audiences to prove it.
                </p>
                <div className="space-y-4">
                  {[
                    { value: "4.7★", label: "Average diploma rating" },
                    { value: "1,400+", label: "Video editors across Africa" },
                    { value: "87%", label: "Employed or freelancing within 6 months" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-4">
                      <p className="font-[Montserrat] font-bold text-[#266D67] text-2xl w-20 shrink-0">{s.value}</p>
                      <p className="text-gray-500 text-sm font-[Montserrat]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#266D67]/20 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#f9ba48]" fill="currentColor" />
                      ))}
                    </div>
                    <p className="font-[Montserrat] text-[#163d3a] text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs font-[Montserrat] shrink-0 ring-2 ring-white shadow-sm"
                        style={{ background: `linear-gradient(135deg, ${t.color}99 0%, ${t.color} 100%)` }}
                      >
                        {t.avatar}
                      </div>
                      <div>
                        <p className="font-[Montserrat] font-bold text-[#163d3a] text-sm">{t.name}</p>
                        <p className="font-[Montserrat] text-gray-400 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            10. TUITION
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Shield className="w-3.5 h-3.5" />
                Tuition &amp; Payment
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Flexible
                <span className="text-[#266D67]"> Payment Options</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">
                Financial barriers shouldn&apos;t stop great creators. Choose the plan that works for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: <Award className="w-6 h-6" />,
                  title: "Pay in Full",
                  tag: "Best Value",
                  tagColor: "#266D67",
                  price: "Full Access",
                  sub: "Single one-time payment",
                  perks: [
                    "Full access immediately",
                    "Priority seat reservation",
                    "5% early-bird discount available",
                    "Scholarship option (pay 20% only)",
                  ],
                  popular: false,
                  cta: "Enrol Now",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Installment Plan",
                  tag: "Most Popular",
                  tagColor: "#f9ba48",
                  price: "2 payments",
                  sub: "Split at 0% interest",
                  perks: [
                    "60% upfront, 40% at Week 5",
                    "Zero interest, zero fees",
                    "Full access from day one",
                    "Flexible date arrangement",
                  ],
                  popular: true,
                  cta: "Get Started",
                },
                {
                  icon: <HeartHandshake className="w-6 h-6" />,
                  title: "Deferred Payment",
                  tag: "Scholarship Track",
                  tagColor: "#163d3a",
                  price: "₦0 Now",
                  sub: "Start now, registration at Week 2",
                  perks: [
                    "Begin learning with zero deposit",
                    "Registration fee collected at Week 2",
                    "For scholarship recipients only",
                    "Admissions approval required",
                  ],
                  popular: false,
                  cta: "Enrol Now",
                },
              ].map((plan) => (
                <div
                  key={plan.title}
                  className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    plan.popular
                      ? "bg-[#163d3a] shadow-2xl shadow-[#163d3a]/25"
                      : "bg-[#f4f9f8] border border-[#e2efee] hover:shadow-xl hover:shadow-[#266D67]/10"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: "linear-gradient(90deg, #f9ba48, #266D67)" }} />
                  )}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.popular ? "bg-[#f9ba48]/15 text-[#f9ba48]" : "bg-[#eef6f5] text-[#266D67]"}`}>
                        {plan.icon}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold font-[Montserrat]"
                        style={{ background: `${plan.tagColor}20`, color: plan.tagColor }}>
                        {plan.tag}
                      </span>
                    </div>
                    <h3 className={`font-[Montserrat] font-bold text-xl mb-1 ${plan.popular ? "text-white" : "text-[#163d3a]"}`}>
                      {plan.title}
                    </h3>
                    <p className={`text-sm font-[Montserrat] mb-5 ${plan.popular ? "text-white/50" : "text-gray-400"}`}>
                      {plan.sub}
                    </p>
                    <p className={`font-[Montserrat] font-bold text-3xl mb-7 ${plan.popular ? "text-[#f9ba48]" : "text-[#163d3a]"}`}>
                      {plan.price}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.perks.map((p) => (
                        <li key={p} className={`flex items-start gap-2.5 text-sm font-[Montserrat] ${plan.popular ? "text-white/75" : "text-gray-600"}`}>
                          <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-[#f9ba48]" : "text-[#266D67]"}`} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/company/scholarships"
                      className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm font-[Montserrat] transition-all ${
                        plan.popular ? "bg-[#f9ba48] text-white hover:bg-[#d4a030]" : "bg-[#163d3a] text-white hover:bg-[#266D67]"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-sm font-[Montserrat]">
              Tuition rates are available upon request — we accept multiple currencies across Africa and beyond.{" "}
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20Video%20Editing%20Diploma" className="text-[#266D67] font-semibold hover:underline">
                Contact admissions
              </a>{" "}
              to get full pricing details and explore your options.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            11. HOW TO APPLY
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <GraduationCap className="w-3.5 h-3.5" />
                Application Process
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Getting In Is
                <span className="text-[#266D67]"> Simple</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">
                Four simple steps between you and the start of your video editing career.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  icon: <Search className="w-6 h-6" />,
                  title: "Explore the Programme",
                  desc: "Review the curriculum, cohort dates, and payment options. Attend a free info session or reach out directly with any questions — our team responds within 24 hours.",
                },
                {
                  step: "02",
                  icon: <Briefcase className="w-6 h-6" />,
                  title: "Submit Your Application",
                  desc: "Complete our short application form — no portfolio or experience required. Just tell us about yourself, your device setup, and what you want to create.",
                },
                {
                  step: "03",
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Talk with Admissions",
                  desc: "Our admissions team will contact you within 48 hours — answer your questions, assess scholarship eligibility, and confirm your cohort placement.",
                },
                {
                  step: "04",
                  icon: <GraduationCap className="w-6 h-6" />,
                  title: "Enrol & Secure Your Seat",
                  desc: "Complete registration, confirm your cohort seat, and receive access to your pre-programme welcome kit — including device setup guides. Day one begins here.",
                },
              ].map((s, i) => (
                <div key={i} className="group bg-white rounded-3xl p-7 border border-[#e2efee] hover:border-[#266D67]/30 hover:shadow-xl hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67] group-hover:bg-[#266D67] group-hover:text-white transition-all duration-300">
                      {s.icon}
                    </div>
                    <span className="font-[Montserrat] font-bold text-4xl text-[#f4f9f8] group-hover:text-[#e2efee] transition-colors">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-base mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-[Montserrat]">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/company/scholarships"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#163d3a] text-white font-bold rounded-lg hover:bg-[#266D67] transition-all shadow-lg font-[Montserrat] text-sm"
              >
                Start My Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            12. FAQ
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  Got Questions?
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  Frequently
                  <span className="text-[#266D67]"> Asked</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Everything you need to know about the Video Editing Diploma before applying.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">
                    Our admissions team is happy to help — reach out anytime.
                  </p>
                  <a
                    href="mailto:hello@idealnovate.com?subject=Video%20Editing%20Diploma%20Question"
                    className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]"
                  >
                    Email Admissions
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`bg-[#f4f9f8] rounded-2xl border overflow-hidden transition-all duration-200 ${
                      openFaq === i
                        ? "border-[#266D67]/30 shadow-lg shadow-[#266D67]/8"
                        : "border-[#e2efee] hover:border-[#266D67]/20"
                    }`}
                  >
                    <button
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-[Montserrat] font-bold text-[#163d3a] text-sm leading-snug">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#266D67] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${openFaq === i ? "max-h-[400px]" : "max-h-0"}`}>
                      <div className="px-5 pb-5">
                        <p className="text-gray-500 text-sm font-[Montserrat] font-light leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            13. FINAL CTA
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#163d3a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute inset-0 opacity-15"
            style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #f9ba48 0%, transparent 45%), radial-gradient(circle at 80% 50%, #266D67 0%, transparent 45%)" }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-xs font-semibold text-[#f9ba48] mb-6 font-[Montserrat]">
              <Zap className="w-3.5 h-3.5" />
              Next Cohort Filling Up
            </span>
            <h2 className="font-[Montserrat] font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Your Future as a Video Editor<br />
              <span className="text-[#f9ba48]">Begins Right Now</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Over 1,400 creators have taken this step. The only question is — are you next?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/company/scholarships"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm"
              >
                Start an Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Video%20Editing%20Diploma"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Talk with Admissions
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
