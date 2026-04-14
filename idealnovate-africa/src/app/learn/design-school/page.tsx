"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight, Star, Users, Clock, CheckCircle, ChevronDown,
  Palette, Eye, Layers, Monitor, Globe, Zap, BookOpen, Award,
  Target, Briefcase, TrendingUp, PenTool, Cpu, MessageSquare,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "3,120+", label: "Students Enrolled" },
  { value: "4.8★",   label: "Average Rating" },
  { value: "10 Wks", label: "Flagship Duration" },
  { value: "94%",    label: "Job Placement Rate" },
];

const whyItems = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Industry-Mapped Curriculum",
    desc: "Every module was built with input from design leads at top companies. You learn exactly what gets you hired — nothing more, nothing outdated.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Direct Employer Pipeline",
    desc: "Our hiring partners actively recruit from our talent pool. Graduate and step straight into job opportunities with teams that already trust Idealnovate.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Real-World Portfolio Projects",
    desc: "Forget toy exercises. Every programme includes end-to-end projects built from real briefs, so your portfolio shows employers what you can actually do.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Globally Recognised Certifications",
    desc: "Our certificates are accepted by 48+ hiring partners across Africa and internationally — and they come with a verifiable digital badge for LinkedIn.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Mentorship From Practitioners",
    desc: "Learn from working designers — not just academics. Your mentors are currently solving real design problems at product companies and agencies.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Scholarship & Affordability",
    desc: "Financial constraints shouldn't block talent. Apply for full or partial scholarships and start your design career with zero upfront cost.",
  },
];

const tools = [
  { name: "Figma",        icon: <PenTool  className="w-4 h-4" /> },
  { name: "Framer",       icon: <Monitor  className="w-4 h-4" /> },
  { name: "WordPress",    icon: <Globe    className="w-4 h-4" /> },
  { name: "Illustrator",  icon: <Palette  className="w-4 h-4" /> },
  { name: "Protopie",     icon: <Layers   className="w-4 h-4" /> },
  { name: "Notion",       icon: <Eye      className="w-4 h-4" /> },
  { name: "Claude AI",    icon: <Cpu      className="w-4 h-4" /> },
];

const programmes = [
  {
    id: 1,
    icon: <Palette className="w-6 h-6" />,
    tag: "Design School",
    tagColor: "#c49a20",
    title: "UI/UX Design",
    description:
      "Master the end-to-end product design process — from user research and wireframing to high-fidelity UI and interactive prototypes in Figma.",
    duration: "10 Weeks",
    students: "3,120",
    rating: "4.8",
    level: "Beginner",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/design-school/ui-ux-design",
    color: "#f9ba48",
  },
  {
    id: 2,
    icon: <Eye className="w-6 h-6" />,
    tag: "Design School",
    tagColor: "#c49a20",
    title: "UX Research & Strategy with AI",
    description:
      "Go deep on user psychology, research frameworks, and AI-powered research tools to inform design decisions that convert and delight.",
    duration: "6 Weeks",
    students: "1,340",
    rating: "4.9",
    level: "Intermediate",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/design-school/ux-research",
    color: "#266D67",
  },
  {
    id: 3,
    icon: <MessageSquare className="w-6 h-6" />,
    tag: "Design School",
    tagColor: "#c49a20",
    title: "UX Portfolio Storytelling with AI",
    description:
      "Learn to craft compelling case studies, present your work with confidence, and use AI tools to produce stand-out portfolio pieces that land interviews.",
    duration: "4 Weeks",
    students: "980",
    rating: "4.8",
    level: "Beginner–Intermediate",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/design-school/ux-portfolio",
    color: "#163d3a",
  },
  {
    id: 4,
    icon: <Monitor className="w-6 h-6" />,
    tag: "Design School",
    tagColor: "#c49a20",
    title: "Build with Framer",
    description:
      "Turn your designs into live, production-quality websites using Framer — no code required. Perfect for designers who want to ship their own work.",
    duration: "5 Weeks",
    students: "720",
    rating: "4.7",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/design-school/build-with-framer",
    color: "#f9ba48",
  },
  {
    id: 5,
    icon: <Cpu className="w-6 h-6" />,
    tag: "Design School",
    tagColor: "#c49a20",
    title: "Web Design (No Code)",
    description:
      "Design and build fully functional, visually stunning websites without writing a single line of code — using the best no-code tools available today.",
    duration: "6 Weeks",
    students: "890",
    rating: "4.8",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/design-school/web-design-no-code",
    color: "#163d3a",
  },
  {
    id: 7,
    icon: <Globe className="w-6 h-6" />,
    tag: "Design School",
    tagColor: "#c49a20",
    title: "Build with WordPress",
    description:
      "Design and launch professional client-ready websites using WordPress, Elementor, WooCommerce, and SEO best practices — without writing code.",
    duration: "4 Weeks",
    students: "1,210",
    rating: "4.7",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/design-school/build-with-wordpress",
    color: "#266D67",
  },
];

const testimonials = [
  {
    name: "Amara Osei",
    role: "UI Designer @ Flutterwave",
    text: "Within 3 months I went from zero design knowledge to landing a full-time role at Flutterwave. The mentorship and real-world projects made all the difference.",
    rating: 5,
    avatar: "AO",
    color: "#266D67",
  },
  {
    name: "Chidi Nwosu",
    role: "Product Designer @ Andela",
    text: "The curriculum is incredibly practical. I had a job offer before I even finished the programme. Idealnovate is the real deal — not just another online course.",
    rating: 5,
    avatar: "CN",
    color: "#f9ba48",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Freelance Brand Designer",
    text: "I was a graphic artist before, but this programme gave me the strategic UX skills I needed to charge 3x my old rates. Worth every kobo.",
    rating: 5,
    avatar: "FA",
    color: "#163d3a",
  },
  {
    name: "Kelechi Eze",
    role: "UX Designer @ Konga",
    text: "The portfolio coaching alone is worth the entire programme. My case studies got compliments in every single interview I attended.",
    rating: 5,
    avatar: "KE",
    color: "#266D67",
  },
  {
    name: "Sade Adewale",
    role: "Design Lead @ Paystack",
    text: "What sets Idealnovate apart is the community and the mentors. They check in on your progress and actually push you to be better.",
    rating: 5,
    avatar: "SA",
    color: "#163d3a",
  },
  {
    name: "Emmanuel Bello",
    role: "UI/UX Designer @ Interswitch",
    text: "I tried two other online courses before Idealnovate. None of them got me hired. This one did — in under 4 months.",
    rating: 5,
    avatar: "EB",
    color: "#f9ba48",
  },
];

const roadmap = [
  {
    level: "01",
    badge: "Beginner",
    badgeColor: "#266D67",
    subtitle: "Start from Zero",
    title: "Elementary Diploma",
    description:
      "Perfect for complete beginners. Build your creative eye foundations with bite-sized lessons designed to fast-track your confidence.",
    duration: "2–4 Weeks",
    modules: "6 Modules",
    students: "28,753+ enrolled",
    icon: <BookOpen className="w-7 h-7" />,
    popular: false,
    features: [
      "No prior experience required",
      "Design fundamentals & colour theory",
      "Intro to Figma workspace",
      "3 beginner portfolio projects",
    ],
    href: "/learn/design-school/ui-ux-design",
  },
  {
    level: "02",
    badge: "Most Popular",
    badgeColor: "#f9ba48",
    subtitle: "Go Professional",
    title: "Diploma",
    description:
      "Level up with real-world projects, portfolio building, and industry-grade tools. Build the competency employers are actively hiring for across Africa.",
    duration: "10–12 Weeks",
    modules: "12 Modules",
    students: "4,137+ enrolled",
    icon: <Layers className="w-7 h-7" />,
    popular: true,
    features: [
      "End-to-end UX design process",
      "User research & testing",
      "Portfolio of 8+ real projects",
      "1-on-1 mentoring sessions",
    ],
    href: "/learn/design-school/ui-ux-design",
  },
  {
    level: "03",
    badge: "Expert",
    badgeColor: "#f9ba48",
    subtitle: "Become a Leader",
    title: "Masterclass",
    description:
      "An elite, intensive programme for professionals ready to dominate their field — advanced systems, leadership strategy, and live cohort sessions.",
    duration: "2–4 Weeks",
    modules: "6 Modules",
    students: "900+ enrolled",
    icon: <Zap className="w-7 h-7" />,
    popular: false,
    features: [
      "Advanced design systems",
      "Design leadership & strategy",
      "Live sessions with industry leads",
      "Guaranteed job placement support",
    ],
    href: "/learn/design-school/ui-ux-design",
  },
];

const faqs = [
  {
    q: "Do I need any prior design experience to enrol?",
    a: "No experience is needed. Our Elementary Diploma is designed for complete beginners — we start with the very basics and build up systematically. All you need is a laptop, internet connection, and the drive to learn.",
  },
  {
    q: "What design tools will I learn?",
    a: "You'll master Figma (the industry standard for UI/UX), and depending on your chosen programme, also Framer, WordPress/Elementor, Adobe Illustrator, and Protopie for advanced prototyping.",
  },
  {
    q: "Are classes live or self-paced?",
    a: "Both. Core lessons are recorded so you can learn on your own schedule. Diploma and Masterclass programmes also include live weekly Q&A sessions, mentor check-ins, and cohort review calls.",
  },
  {
    q: "How long does it take to complete a programme?",
    a: "It depends on the level — our shortest courses are 4 weeks, the UI/UX Design Diploma runs 10 weeks, and the Masterclass is 6 months. All are designed to fit around a working schedule of 1–2 hours per day.",
  },
  {
    q: "Is there a scholarship I can apply for?",
    a: "Yes. We offer full and partial scholarships to qualifying applicants. Visit our Scholarship page, complete the application form, and our admissions team will review it within 5 business days.",
  },
  {
    q: "What happens after I complete the programme?",
    a: "You receive an Idealnovate-certified digital diploma, get featured in our employer talent pool, and receive ongoing job placement support. 94% of our graduates land relevant roles within 6 months.",
  },
  {
    q: "Will I build a portfolio during the programme?",
    a: "Absolutely — portfolio development is central to every programme. You'll complete real-world design projects with proper case studies, guided by mentors, so you graduate with a portfolio that gets noticed.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DesignSchoolPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen">

        {/* ══════════════════════════════════════════
            1. HERO — Hero B: Centred Immersive
        ══════════════════════════════════════════ */}
        <section className="flex flex-col min-h-screen">

          <div className="flex-1 relative bg-[#163d3a] flex flex-col items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
              style={{ background: "radial-gradient(circle, #266D67 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
              style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 60%)" }} />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
              style={{ background: "radial-gradient(circle, #266D67 0%, transparent 60%)" }} />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/15 border border-[#f9ba48]/30 rounded-full text-xs font-semibold text-[#f9ba48] mb-8 font-[Montserrat]">
                <Palette className="w-3.5 h-3.5" />
                Idealnovate · Design School
              </div>

              <h1 className="font-[Montserrat] font-bold text-white leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
                Where Great<br />
                <span className="text-[#f9ba48]">Designers</span> Are Made.
              </h1>

              <p className="font-[Montserrat] text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Hands-on programmes, real-world projects, and mentorship from industry professionals — built for the African creative economy.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
                <Link href="/company/scholarships"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold text-sm rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat]">
                  Apply for Scholarship
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="mailto:hello@idealnovate.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all font-[Montserrat]">
                  <MessageSquare className="w-4 h-4" />
                  Contact an Advisor
                </Link>
              </div>

              <div className="flex items-center justify-center gap-4 mb-14">
                <div className="flex -space-x-2">
                  {["AO","CN","FA","KE","SA"].map((init, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>{init}</div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-[#f9ba48]" fill="currentColor" />)}
                    <span className="text-white font-bold text-xs ml-1 font-[Montserrat]">4.8</span>
                  </div>
                  <p className="text-white/40 text-xs font-[Montserrat]">Trusted by 3,120+ design students</p>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {[
                  { icon: <Palette className="w-4 h-4" />, title: "UI/UX Design", students: "3,120", rating: "4.8", weeks: "10 Wks", color: "#f9ba48", hot: true, href: "/learn/design-school/ui-ux-design" },
                  { icon: <Eye className="w-4 h-4" />, title: "UX Research & Strategy with AI", students: "1,340", rating: "4.9", weeks: "6 Wks", color: "#266D67", hot: true, href: "/learn/design-school/ux-research" },
                  { icon: <Globe className="w-4 h-4" />, title: "Build with WordPress", students: "1,210", rating: "4.7", weeks: "4 Wks", color: "#266D67", hot: false, href: "/learn/design-school/build-with-wordpress" },
                  { icon: <Monitor className="w-4 h-4" />, title: "Web Design (No Code)", students: "890", rating: "4.8", weeks: "6 Wks", color: "#163d3a", hot: false, href: "/learn/design-school/web-design-no-code" },
                ].map((p) => (
                  <Link key={p.title} href={p.href} className="bg-white/6 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                    {/* colour strip */}
                    <div className="h-1 w-full" style={{ background: p.color }} />
                    <div className="p-4 flex flex-col flex-1">
                      {/* icon + hot badge */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0" style={{ background: p.color }}>
                          {p.icon}
                        </div>
                        {p.hot && (
                          <span className="text-[#f9ba48] text-[10px] font-bold font-[Montserrat]">🔥 Hot</span>
                        )}
                      </div>
                      {/* title */}
                      <p className="text-white font-bold text-xs font-[Montserrat] leading-snug mb-3 flex-1">{p.title}</p>
                      {/* meta */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <span className="flex items-center gap-1 text-white/50 text-[10px] font-[Montserrat]">
                          <Users className="w-3 h-3" />{p.students}
                        </span>
                        <span className="flex items-center gap-0.5 text-[#f9ba48] text-[10px] font-bold font-[Montserrat]">
                          <Star className="w-3 h-3" fill="currentColor" />{p.rating}
                        </span>
                        <span className="flex items-center gap-1 text-white/50 text-[10px] font-[Montserrat]">
                          <Clock className="w-3 h-3" />{p.weeks}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(s => (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#eef6f5] flex items-center justify-center text-[#266D67] shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-[Montserrat] font-bold text-[#163d3a] text-lg leading-tight">{s.value}</p>
                    <p className="font-[Montserrat] text-gray-400 text-xs">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            TOOLS STRIP
        ══════════════════════════════════════════ */}
        <section className="bg-white border-b border-gray-100 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <p className="font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-widest shrink-0">
              Tools you&apos;ll master
            </p>
            <div className="flex flex-wrap gap-2.5">
              {tools.map(tool => (
                <span key={tool.name} className="inline-flex items-center gap-2 px-4 py-2 bg-[#f4f9f8] border border-[#e2efee] rounded-lg text-sm font-semibold text-[#163d3a] font-[Montserrat]">
                  <span className="text-[#266D67]">{tool.icon}</span>
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            2. DESIGN SKILLS THAT GET YOU HIRED
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Main two-column layout */}
            <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-10 mb-10">

              {/* LEFT — Picture card with headline overlay */}
              <div className="relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-0">
                <Image
                  src="/IdealTalent2.png"
                  alt="Design School learners"
                  fill
                  className="object-cover object-center"
                />
                {/* Vignette */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.92) 0%, rgba(22,61,58,0.35) 45%, transparent 75%)" }} />
                {/* Decorative dot grid */}
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

                {/* Content pinned to bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-[#f9ba48] text-xs font-bold font-[Montserrat] mb-4">
                    <TrendingUp className="w-3 h-3" />
                    Why Design School
                  </span>
                  <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-3"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                    Design Skills That<br />
                    <span className="text-[#f9ba48]">Get You Hired</span>
                  </h2>
                  <p className="text-white/65 text-sm font-[Montserrat] leading-relaxed max-w-xs">
                    We don&apos;t just teach design tools — we engineer career transitions from learning to landing.
                  </p>
                </div>
              </div>

              {/* RIGHT — 1×6 horizontal feature rows */}
              <div className="flex flex-col justify-center gap-3">
                {whyItems.map((item) => (
                  <div
                    key={item.title}
                    className="group flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 hover:border-[#266D67]/30 hover:shadow-md hover:shadow-[#266D67]/6 transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67] shrink-0 group-hover:bg-[#266D67] group-hover:text-white transition-all duration-200">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-sm mb-0.5">{item.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed font-[Montserrat]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark metrics strip */}
            <div className="relative bg-[#163d3a] rounded-3xl overflow-hidden">
              {/* Subtle radial glow */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #f9ba48 0%, transparent 65%)" }} />
              <div className="relative z-10 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                {[
                  { value: "₦300k+", label: "Entry-level monthly salary", sub: "For designers in Nigeria", icon: <TrendingUp className="w-5 h-5" /> },
                  { value: "94%",    label: "Job placement rate",          sub: "Within 6 months of graduation", icon: <Award className="w-5 h-5" /> },
                  { value: "3×",     label: "Average salary increase",     sub: "Post-certification growth", icon: <Zap className="w-5 h-5" /> },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-5 px-8 py-8">
                    <div className="w-12 h-12 rounded-xl bg-[#f9ba48]/15 flex items-center justify-center text-[#f9ba48] shrink-0">
                      {m.icon}
                    </div>
                    <div>
                      <p className="font-[Montserrat] font-bold text-[#f9ba48] text-3xl leading-none mb-1">{m.value}</p>
                      <p className="text-white font-semibold text-sm font-[Montserrat] leading-tight">{m.label}</p>
                      <p className="text-white/45 text-xs font-[Montserrat] mt-0.5">{m.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════
            3. PROGRAMMES
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Palette className="w-3.5 h-3.5" />
                Design School Programmes
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Start as a Beginner.
                <br />
                <span className="text-[#266D67]">Leave as a Designer.</span>
              </h2>
              <p className="mt-5 text-gray-500 text-lg font-[Montserrat] font-light leading-relaxed">
                Every programme is designed to be accessible to beginners — with no prior design experience needed to enrol.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmes.map(prog => (
                <Link
                  key={prog.id}
                  href={prog.href}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#266D67]/20 hover:shadow-xl hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  {/* Color top strip */}
                  <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${prog.color}, ${prog.color}88)` }} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Icon + badges */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: prog.color }}>
                        {prog.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        {prog.hot && (
                          <span className="px-2.5 py-1 bg-[#f9ba48]/10 text-[#f9ba48] text-xs font-bold rounded-full font-[Montserrat]">🔥 Popular</span>
                        )}
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-full font-[Montserrat]"
                          style={{ background: `${prog.tagColor}20`, color: prog.tagColor }}>
                          {prog.tag}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-base mb-2 group-hover:text-[#266D67] transition-colors leading-snug">
                      {prog.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-[Montserrat] font-light leading-relaxed flex-1 mb-4">
                      {prog.description}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 flex-wrap font-[Montserrat]">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{prog.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{prog.students} students</span>
                      <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-[#f9ba48]" fill="currentColor" />{prog.rating}</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500 font-[Montserrat]">{prog.level}</span>
                      <span className="text-xs font-bold text-[#266D67] bg-[#eef6f5] px-3 py-1 rounded-full font-[Montserrat]">
                        {prog.price}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            4. STUDENT STORIES
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
              {/* Left: sticky header */}
              <div className="lg:sticky lg:top-32">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <Star className="w-3.5 h-3.5" fill="currentColor" />
                  Student Stories
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  Real Results from
                  <span className="text-[#266D67]"> Real Designers</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Our students don&apos;t just learn design — they land jobs, grow freelance businesses, and build careers they love.
                </p>
                {/* Summary stats */}
                <div className="space-y-4">
                  {[
                    { value: "4.8★", label: "Average programme rating" },
                    { value: "3,120+", label: "Graduates across Africa" },
                    { value: "94%",  label: "Employed within 6 months" },
                  ].map(s => (
                    <div key={s.label} className="flex items-center gap-4">
                      <p className="font-[Montserrat] font-bold text-[#266D67] text-2xl w-20 shrink-0">{s.value}</p>
                      <p className="text-gray-500 text-sm font-[Montserrat]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: review cards */}
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {testimonials.map(t => (
                  <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#266D67]/20 hover:shadow-lg transition-all duration-200">
                    {/* Stars */}
                    <div className="flex mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#f9ba48]" fill="currentColor" />
                      ))}
                    </div>
                    <p className="font-[Montserrat] text-[#163d3a] text-sm leading-relaxed mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-[11px] font-[Montserrat] shrink-0"
                        style={{ background: t.color }}
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
            5. LEARNING ROADMAP
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#266D67]" />
                Your Roadmap to Success
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Choose Your
                <span className="text-[#266D67]"> Learning Path</span>
              </h2>
              <p className="mt-4 text-gray-500 text-lg font-[Montserrat] font-light leading-relaxed">
                Whether you&apos;re starting from scratch or levelling up, we have a structured path that meets you exactly where you are.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {roadmap.map((path) => (
                <div
                  key={path.title}
                  className={`relative group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    path.popular ? "shadow-2xl shadow-[#163d3a]/20 md:scale-105" : "shadow-lg hover:shadow-[#266D67]/10"
                  }`}
                >
                  {path.popular && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f9ba48] to-[#266D67]" />
                  )}
                  <div className={`p-8 h-full flex flex-col ${path.popular ? "bg-[#163d3a] text-white" : "bg-white border border-gray-100"}`}>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-5xl font-bold font-[Montserrat] ${path.popular ? "text-white/10" : "text-gray-100"}`}>
                        {path.level}
                      </span>
                      <span className="px-3 py-1 text-xs font-bold rounded-full font-[Montserrat]"
                        style={{ background: path.popular ? "#f9ba48" : "#eef6f5", color: path.popular ? "white" : "#266D67" }}>
                        {path.badge}
                      </span>
                    </div>

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                      path.popular ? "bg-white/10 text-[#f9ba48]" : "bg-[#eef6f5] text-[#266D67]"
                    }`}>
                      {path.icon}
                    </div>

                    <p className={`text-sm font-semibold uppercase tracking-wider mb-1 font-[Montserrat] ${path.popular ? "text-[#f9ba48]" : "text-[#266D67]"}`}>
                      {path.subtitle}
                    </p>
                    <h3 className={`font-[Montserrat] font-bold text-2xl mb-3 ${path.popular ? "text-white" : "text-[#163d3a]"}`}>
                      {path.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-6 font-[Montserrat] flex-1 ${path.popular ? "text-white/70" : "text-gray-500"}`}>
                      {path.description}
                    </p>

                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {[
                        { icon: <Clock className="w-3.5 h-3.5" />,  text: path.duration },
                        { icon: <Layers className="w-3.5 h-3.5" />, text: path.modules },
                        { icon: <Users className="w-3.5 h-3.5" />,  text: path.students },
                      ].map(meta => (
                        <span key={meta.text} className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-[Montserrat] font-medium ${
                          path.popular ? "bg-white/10 text-white/70" : "bg-[#f4f9f8] text-gray-600"
                        }`}>
                          {meta.icon}{meta.text}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2 mb-8">
                      {path.features.map(f => (
                        <li key={f} className={`flex items-start gap-2.5 text-sm font-[Montserrat] ${path.popular ? "text-white/80" : "text-gray-600"}`}>
                          <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${path.popular ? "text-[#f9ba48]" : "text-[#266D67]"}`} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={path.href}
                      className={`group/btn flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-sm transition-all shadow-sm font-[Montserrat] ${
                        path.popular ? "bg-[#f9ba48] text-white hover:bg-[#d4a030]" : "bg-[#163d3a] text-white hover:bg-[#266D67]"
                      }`}
                    >
                      Enrol Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 font-[Montserrat] mb-4">Not sure which path suits you?</p>
              <Link href="/company/scholarships" className="inline-flex items-center gap-2 text-[#266D67] font-bold hover:text-[#163d3a] transition-colors font-[Montserrat] text-sm">
                <Award className="w-4 h-4" />
                Take our free career assessment →
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            6. FINAL CTA
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#163d3a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute inset-0 opacity-15"
            style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #f9ba48 0%, transparent 55%), radial-gradient(circle at 70% 50%, #266D67 0%, transparent 55%)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-xs font-semibold text-[#f9ba48] mb-6 font-[Montserrat]">
                  <Zap className="w-3.5 h-3.5" />
                  Limited Scholarship Slots Available
                </div>
                <h2 className="font-[Montserrat] font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
                  Ready to Kick-Start
                  <br />
                  <span className="text-[#f9ba48]">Your Design Journey?</span>
                </h2>
                <p className="font-[Montserrat] text-white/60 text-lg mb-8 max-w-md">
                  Join 3,120+ designers who transformed their careers with Idealnovate. Scholarships available — you may qualify to start for free.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/company/scholarships"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm"
                  >
                    Apply for Scholarship
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="mailto:hello@idealnovate.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Contact an Advisor
                  </Link>
                </div>
              </div>

              {/* Right: checklist card */}
              <div className="bg-white/8 border border-white/15 rounded-3xl p-8">
                <p className="font-[Montserrat] font-bold text-white text-lg mb-6">What you get when you enrol</p>
                <ul className="space-y-4">
                  {[
                    "Structured, project-based curriculum",
                    "Access to live mentor sessions",
                    "Real-world portfolio projects",
                    "Career coaching & interview prep",
                    "Certified digital diploma on completion",
                    "Employer introductions & job referrals",
                    "Lifetime access to course content",
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-[#f9ba48] shrink-0" />
                      <span className="text-white/75 text-sm font-[Montserrat]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            7. FAQ
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Left */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  Got Questions?
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  Frequently Asked
                  <span className="text-[#266D67]"> Questions</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Answers to the most common questions from aspiring designers.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our advisors are ready to help you choose the right programme.</p>
                  <Link
                    href="mailto:hello@idealnovate.com"
                    className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>

              {/* Right: accordion */}
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
                      openFaq === i ? "border-[#266D67]/30 shadow-lg shadow-[#266D67]/8" : "border-gray-100 hover:border-[#266D67]/20"
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
                    <div className={`overflow-hidden transition-all duration-200 ${openFaq === i ? "max-h-48" : "max-h-0"}`}>
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

      </main>
      <Footer />
    </>
  );
}
