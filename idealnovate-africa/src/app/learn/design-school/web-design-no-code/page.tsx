"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight, Star, Clock, CheckCircle, ChevronDown,
  Monitor, Globe, Zap, BookOpen, Award,
  Target, Briefcase, TrendingUp, MessageSquare,
  Users, Calendar, Shield, HeartHandshake, GraduationCap,
  Layers, Search, Brain, BarChart,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const curriculum = [
  {
    module: "01",
    title: "The No-Code Web Design Landscape",
    desc: "Understand the modern no-code ecosystem and where each tool fits. Learn to choose the right platform for every client project and build a workflow that maximises speed without sacrificing quality.",
    topics: [
      "No-code vs code — understanding the modern web",
      "Platform comparison — Webflow, Wix Studio & beyond",
      "Design thinking for the web",
      "Setting up your workspace and professional profile",
    ],
    duration: "Week 1",
  },
  {
    module: "02",
    title: "Webflow Foundations — Layout & Structure",
    desc: "Master Webflow's visual canvas. Learn the box model, flexbox, and grid-based layouts that are the foundation of every professional Webflow site.",
    topics: [
      "Webflow interface & designer orientation",
      "Div blocks, sections & container structure",
      "Flexbox & grid layouts in Webflow",
      "Spacing, sizing & responsive units",
    ],
    duration: "Week 2",
  },
  {
    module: "03",
    title: "Visual Design — Typography, Colour & Components",
    desc: "Build a consistent visual design language. Create reusable classes, symbols, and design systems inside Webflow that make every project faster to build and easier to hand off.",
    topics: [
      "Typography systems & web-safe font stacks",
      "Color theming & global style management",
      "Reusable classes & component architecture",
      "Building navigation, footers & card layouts",
    ],
    duration: "Week 3",
  },
  {
    module: "04",
    title: "Interactions, Animations & Scroll Effects",
    desc: "Bring your websites to life with Webflow's powerful interactions engine. Build scroll-triggered animations, micro-interactions, and page transitions that elevate your work from functional to premium.",
    topics: [
      "Webflow interactions & animation timeline",
      "Scroll-triggered animations & parallax effects",
      "Hover states, micro-interactions & transitions",
      "Loading animations & page entrance sequences",
    ],
    duration: "Week 4",
  },
  {
    module: "05",
    title: "Wix Studio — Rapid Professional Builds",
    desc: "Add Wix Studio to your toolkit for faster, client-managed websites. Learn to build pixel-perfect layouts in Wix Studio and configure the CMS so clients can update their own content without you.",
    topics: [
      "Wix Studio interface & design system",
      "Responsive layouts & breakpoint control",
      "Wix CMS — dynamic content collections",
      "App integrations, forms & booking systems",
    ],
    duration: "Week 5",
  },
  {
    module: "06",
    title: "SEO, Performance, Client Delivery & Portfolio Launch",
    desc: "Everything that happens after design — launch, optimise, and hand off professionally. Build your own portfolio site as your graduation capstone and learn how to win and deliver no-code projects.",
    topics: [
      "On-page SEO — meta tags, schema & sitemap",
      "Performance optimisation & Core Web Vitals",
      "Custom domains, hosting & site launch",
      "Client project delivery & portfolio launch",
    ],
    duration: "Week 6",
  },
];

const testimonials = [
  {
    name: "Adaeze Nwosu",
    role: "Freelance Web Designer (Enugu)",
    text: "In six weeks I went from someone who thought web design required coding to someone charging ₦180k to build client websites. The Webflow module alone was worth three times the course fee. I now have a waitlist of clients.",
    rating: 5,
    avatar: "AN",
    bg: "linear-gradient(135deg, #26aaa599 0%, #266D67 100%)",
  },
  {
    name: "Kweku Mensah",
    role: "Creative Director @ Brand Co. (Accra)",
    text: "I'd been outsourcing web builds for years. This programme changed that completely. I now design and launch our client websites in Webflow in-house — and the quality has gone up while our timelines have halved.",
    rating: 5,
    avatar: "KM",
    bg: "linear-gradient(135deg, #f9ba4899 0%, #f9ba48 100%)",
  },
  {
    name: "Blessing Okonkwo",
    role: "UX Designer & No-Code Developer",
    text: "What I loved is that we learned Webflow AND Wix Studio — so I can always recommend the right tool for each client rather than forcing every project into one platform. That flexibility makes me more valuable and more competitive.",
    rating: 5,
    avatar: "BO",
    bg: "linear-gradient(135deg, #163d3a99 0%, #163d3a 100%)",
  },
  {
    name: "Ife Oladapo",
    role: "Founder, NovaCraft Studio (Lagos)",
    text: "The interactions module is where the money is. Once you can build scroll-triggered animations in Webflow, you can charge at least 40% more per project. Clients see the premium finish and they stop questioning your rates.",
    rating: 5,
    avatar: "IO",
    bg: "linear-gradient(135deg, #26aaa599 0%, #266D67 100%)",
  },
  {
    name: "Naledi Dlamini",
    role: "Web Designer @ Discovery SA (Johannesburg)",
    text: "As a graphic designer making the move into web, no-code was my entry point. Idealnovate's structure is perfect — you learn design fundamentals first, then the tools. I got hired at Discovery before the programme even ended.",
    rating: 4,
    avatar: "ND",
    bg: "linear-gradient(135deg, #163d3a99 0%, #163d3a 100%)",
  },
  {
    name: "Uchenna Ibeh",
    role: "No-Code Developer @ Paystack",
    text: "I applied for a no-code web role at Paystack with a portfolio of four live Webflow sites I built during this programme. The hiring manager said my portfolio was the best he'd seen from a candidate at my level. Got the job in Week 6.",
    rating: 5,
    avatar: "UI",
    bg: "linear-gradient(135deg, #f9ba4899 0%, #f9ba48 100%)",
  },
];

const faqs = [
  {
    q: "Do I need any technical or design background?",
    a: "No prior experience is required. This programme starts with design fundamentals and builds from there — so whether you're coming from zero or transitioning from another creative field, you'll find the progression logical and achievable. If you can use a laptop and a browser, you can take this programme.",
  },
  {
    q: "Why learn both Webflow and Wix Studio?",
    a: "Different clients need different tools. Webflow gives you maximum design control and is the premium choice for marketing agencies, startups, and larger brands. Wix Studio is faster to set up and ideal for small businesses that want to manage their own content. Learning both means you can always recommend the right platform — and win more clients as a result.",
  },
  {
    q: "Can I really build professional websites without any code?",
    a: "Absolutely. Webflow and Wix Studio are used by professional agencies and Fortune 500 marketing teams to build pixel-perfect, animated, responsive websites — entirely visually. Several of our graduates have built websites that have won design awards and generated millions in revenue for their clients — all without writing a single line of code.",
  },
  {
    q: "What kind of websites will I be able to build?",
    a: "By graduation you will have built a multi-page Webflow site with scroll-triggered animations, a CMS-driven portfolio or blog, and a Wix Studio landing page — all live and shareable. You will be able to build marketing sites, SaaS landing pages, portfolios, blogs, business directories, and event sites confidently and professionally.",
  },
  {
    q: "How is no-code web design different from using Canva or simple website builders?",
    a: "Canva and basic website builders produce generic, template-limited output. Webflow and Wix Studio give you full visual design control — custom layouts, animations, CMS integration, and SEO — so your output is indistinguishable from custom-coded sites. Clients hiring no-code designers are specifically looking for that premium, custom look.",
  },
  {
    q: "How are classes delivered — live or recorded?",
    a: "All sessions are delivered live (minimum 2 sessions per week, up to 2 hours each) with all classes recorded so you can review at your own pace. Diploma students also get access to 1-on-1 mentor check-ins and live portfolio critique sessions where you receive direct instructor feedback.",
  },
  {
    q: "Is scholarship funding available?",
    a: "Yes. We offer an 80% scholarship to qualifying applicants — meaning you pay only 20% as a registration fee to secure your seat. Apply through our Scholarship page and our admissions team will review your application within 5 business days.",
  },
  {
    q: "What certificate do I receive on completion?",
    a: "You receive an Idealnovate Professional Certificate in No-Code Web Design — a digitally verifiable credential with a LinkedIn-ready digital badge. The certificate is recognised by 48+ hiring partners across Africa and internationally, and is accepted for remote job applications and client pitches.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WebDesignNoCodePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen">

        {/* ══════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════ */}
        <section className="bg-[#163d3a] pt-24 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[88vh]">

            <div className="flex flex-col justify-center py-12 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28">
              <div className="flex items-center gap-2 mb-6">
                <Link href="/learn/design-school" className="text-white/40 hover:text-white/60 transition-colors text-xs font-[Montserrat]">
                  Design School
                </Link>
                <span className="text-white/25">/</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#f9ba48]/15 border border-[#f9ba48]/30 rounded-full text-[#f9ba48] text-xs font-bold font-[Montserrat]">
                  <Monitor className="w-3 h-3" />
                  Web Design (No Code) Diploma
                </span>
              </div>

              <h1 className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
                No Code. No Limits.<br />
                <span className="text-[#f9ba48]">Real Websites.</span>
              </h1>

              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Master Webflow and Wix Studio — the professional no-code tools used by top agencies worldwide — and launch a freelance web design career in just 6 weeks.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "6 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Career Paths", value: "Freelance & Employment" },
                  { icon: <Star className="w-4 h-4" fill="currentColor" />, label: "Alumni Rating", value: "4.8 / 5 ★" },
                ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3 bg-white/6 border border-white/10 rounded-xl px-4 py-3">
                    <div className="text-[#f9ba48] shrink-0">{f.icon}</div>
                    <div>
                      <p className="text-white/40 text-[10px] font-[Montserrat] uppercase tracking-wider">{f.label}</p>
                      <p className="text-white font-bold text-xs font-[Montserrat] leading-tight">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Web%20Design%20No%20Code%20Diploma"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold text-sm rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat]"
                >
                  <MessageSquare className="w-4 h-4" />
                  Talk with Admissions
                </a>
                <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all font-[Montserrat]">
                  Start an Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
                <div className="flex -space-x-2">
                  {["AN", "KM", "BO", "IO", "ND"].map((init, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[9px] font-bold text-white" style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-white/45 text-xs font-[Montserrat]">
                  Joined by <span className="text-white/70 font-semibold">890+ designers</span> across Africa
                </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-center py-12 lg:py-16 px-8 xl:px-12">
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
                <Image src="/IdealTalent2.png" alt="Web Design learners at Idealnovate" fill className="object-cover object-center" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,61,58,0.4) 0%, transparent 35%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.55) 0%, transparent 40%)" }} />

                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">88%</p>
                      <p className="text-gray-400 text-xs font-[Montserrat]">Freelancing within 3 months</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Primary Tool</p>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                      <rect x="2" y="2" width="5" height="12" rx="1" fill="#f9ba48"/>
                      <rect x="9" y="2" width="5" height="7" rx="1" fill="#f9ba4899"/>
                      <rect x="9" y="11" width="5" height="3" rx="1" fill="#f9ba4866"/>
                    </svg>
                    <span className="text-white font-bold text-sm font-[Montserrat]">Webflow</span>
                  </div>
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
                <Monitor className="w-3.5 h-3.5" />
                Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                From First Design to<br />
                <span className="text-[#266D67]">Paying Client in 6 Weeks</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                No-code tools have levelled the playing field — any designer can now ship premium websites without a developer. This diploma is built to get you earning in Africa&apos;s fastest-growing web market.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Monitor className="w-7 h-7" />, title: "Professional Output, Zero Code", desc: "Webflow and Wix Studio produce output indistinguishable from custom-coded websites. By graduation you will have a portfolio of live, animated, responsive websites that clients and employers immediately recognise as premium professional work.", color: "#f9ba48" },
                { icon: <TrendingUp className="w-7 h-7" />, title: "Two Tools, Twice the Clients", desc: "You graduate fluent in both Webflow and Wix Studio — which means you can confidently serve high-end agency clients and small business owners alike. Two platforms means twice the market reach and twice the earning potential from day one.", color: "#266D67" },
                { icon: <Briefcase className="w-7 h-7" />, title: "Animation Skills That Pay More", desc: "Scroll-triggered animations and page transitions are the premium differentiator in web design. Designers who can build motion in Webflow charge 30–50% more per project. We dedicate an entire week to Webflow interactions so you graduate with that skill fully developed.", color: "#163d3a" },
                { icon: <Users className="w-7 h-7" />, title: "Africa-First Freelance Strategy", desc: "The no-code web design market in Africa is dramatically undersupplied — most small businesses and growing brands need professional websites but can&apos;t afford development agencies. You are entering this market at exactly the right time, with exactly the right skills.", color: "#f9ba48" },
              ].map((b, i) => (
                <div key={i} className="group relative bg-[#f4f9f8] rounded-3xl p-7 border border-[#e2efee] hover:border-[#266D67]/40 hover:shadow-xl hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: b.color }} />
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-110" style={{ background: b.color }}>
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
            3. TOOLS
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 bg-[#163d3a]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] opacity-20 blur-[100px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #266D67 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] opacity-15 blur-[80px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/6 border border-white/12 rounded-full text-white/50 text-xs font-semibold font-[Montserrat] mb-5 uppercase tracking-widest">
                <Zap className="w-3 h-3 text-[#f9ba48]" />
                Your Professional Toolkit
              </span>
              <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Tools You&apos;ll<span className="text-[#f9ba48]"> Master</span>
              </h2>
              <p className="text-white/45 font-[Montserrat] text-lg max-w-lg mx-auto leading-relaxed">
                Two of the world&apos;s most powerful no-code web builders — plus the analytics knowledge to prove your websites perform.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  name: "Webflow",
                  tagline: "Premium No-Code Builder",
                  glow: "rgba(70,130,200,0.5)",
                  iconBg: "linear-gradient(145deg, #0b1f3a 0%, #1a3a6b 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      {/* Webflow W-diamond hybrid */}
                      <path d="M5 13L13 27L20 17L27 27L35 13" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="20" cy="17" r="2.5" fill="white" fillOpacity="0.5"/>
                    </svg>
                  ),
                  accent: "#4682C8",
                },
                {
                  name: "Wix Studio",
                  tagline: "Smart Visual Website Builder",
                  glow: "rgba(0,170,100,0.4)",
                  iconBg: "linear-gradient(145deg, #003d20 0%, #006633 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      {/* Stylised W for Wix */}
                      <path d="M6 12L12 26L20 16L28 26L34 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 28L28 28" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
                    </svg>
                  ),
                  accent: "#00AA64",
                },
                {
                  name: "Google Analytics",
                  tagline: "Performance & Insights",
                  glow: "rgba(249,166,72,0.45)",
                  iconBg: "linear-gradient(145deg, #7a3800 0%, #e65100 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      <rect x="7" y="20" width="7" height="14" rx="3.5" fill="white" fillOpacity="0.6"/>
                      <rect x="17" y="13" width="7" height="21" rx="3.5" fill="white" fillOpacity="0.8"/>
                      <rect x="27" y="7" width="7" height="27" rx="3.5" fill="white" fillOpacity="0.95"/>
                    </svg>
                  ),
                  accent: "#F9A648",
                },
              ].map((tool) => (
                <div key={tool.name} className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/16 transition-all duration-300 hover:-translate-y-2 cursor-default">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 50px 0 ${tool.glow}` }} />
                  <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg" style={{ background: tool.iconBg }}>
                    <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
                    <div className="relative z-10">{tool.icon}</div>
                  </div>
                  <div className="w-6 h-0.5 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-12" style={{ background: tool.accent }} />
                  <p className="font-[Montserrat] font-bold text-white text-base leading-tight mb-1">{tool.name}</p>
                  <p className="font-[Montserrat] text-white/35 text-sm leading-snug">{tool.tagline}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-white/25 text-xs font-[Montserrat] mt-12">
              Webflow from Week 2, Wix Studio in Week 5, Google Analytics throughout.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            4. WHERE ALUMNI WORK
        ══════════════════════════════════════════ */}
        <section className="py-14 bg-[#f4f9f8] border-y border-[#e2efee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Where our alumni work</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Google", color: "#4285f4" },
                { name: "Paystack", color: "#011B33" },
                { name: "Microsoft", color: "#00a4ef" },
                { name: "Vital Relief Wellness", color: "#2e7d32" },
                { name: "Bolt", color: "#34d186" },
                { name: "Glovo", color: "#f9a825" },
                { name: "Flutterwave", color: "#f5a623" },
                { name: "Thuja", color: "#7c3aed" },
                { name: "Interswitch", color: "#e02020" },
                { name: "Konga", color: "#f97316" },
              ].map((c) => (
                <div key={c.name} className="flex items-center justify-center px-4 py-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-0.5 cursor-default">
                  <span className="font-[Montserrat] font-bold text-sm text-center leading-tight" style={{ color: c.color }}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            5. STUDENT SUPPORT
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2 min-h-[420px]">
              <div className="relative bg-gradient-to-br from-[#163d3a] via-[#1d5450] to-[#266D67] flex flex-col justify-center px-8 sm:px-12 py-12 lg:py-16">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 70%)" }} />

                <div className="relative z-10 max-w-md">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold font-[Montserrat] mb-5">
                    <HeartHandshake className="w-3.5 h-3.5 text-[#f9ba48]" />
                    Student Support
                  </span>
                  <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                    We&apos;ve Got<br />
                    <span className="text-[#f9ba48]">Your Back</span>
                  </h2>
                  <p className="text-white/65 font-[Montserrat] text-base leading-relaxed mb-8">
                    From your first Webflow layout to your first paying client — our mentors and community support you at every stage of the journey.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {[
                      "Dedicated no-code mentor for the full 6 weeks",
                      "Missed a session? Every class is recorded",
                      "Community of 890+ web designers across Africa",
                      "Freelance coaching until you land your first client",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#f9ba48] shrink-0 mt-0.5" />
                        <span className="text-white/75 text-sm font-[Montserrat]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/company/scholarships" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-0">
                <Image src="/IdealTeam.png" alt="Idealnovate mentorship team" fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.35) 0%, transparent 50%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            6. CURRICULUM
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:sticky lg:top-32 self-start">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <BookOpen className="w-3.5 h-3.5" />
                  Course Curriculum
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  6 Modules.<br />
                  <span className="text-[#266D67]">Two Platforms. One Career.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  A focused, fast-paced curriculum that takes you from design fundamentals to a portfolio of live, animated websites — ready to show clients on graduation day.
                </p>

                <div className="bg-[#163d3a] rounded-2xl p-6 space-y-4">
                  {[
                    { icon: <Layers className="w-4 h-4" />, label: "6 Core Modules" },
                    { icon: <Clock className="w-4 h-4" />, label: "6 Weeks" },
                    { icon: <Users className="w-4 h-4" />, label: "Live + Recorded Sessions" },
                    { icon: <Award className="w-4 h-4" />, label: "Professional Certification" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#f9ba48]/15 flex items-center justify-center text-[#f9ba48]">{s.icon}</div>
                      <span className="text-white text-sm font-[Montserrat] font-medium">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 space-y-3">
                {curriculum.map((mod, i) => (
                  <div key={i} className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${openModule === i ? "border-[#266D67]/30 shadow-lg shadow-[#266D67]/8" : "border-gray-100 hover:border-[#266D67]/20"}`}>
                    <button className="w-full flex items-center gap-4 p-5 text-left" onClick={() => setOpenModule(openModule === i ? null : i)}>
                      <span className="w-9 h-9 rounded-xl bg-[#f4f9f8] flex items-center justify-center font-bold text-xs text-[#266D67] font-[Montserrat] shrink-0">{mod.module}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-[Montserrat] font-bold text-[#163d3a] text-sm leading-snug">{mod.title}</p>
                        <p className="text-gray-400 text-xs font-[Montserrat] mt-0.5">{mod.duration}</p>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-[#266D67] shrink-0 transition-transform duration-200 ${openModule === i ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${openModule === i ? "max-h-[500px]" : "max-h-0"}`}>
                      <div className="px-5 pb-5 pl-[4.25rem]">
                        <p className="text-gray-500 text-sm font-[Montserrat] leading-relaxed mb-4">{mod.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {mod.topics.map((t) => (
                            <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f4f9f8] border border-[#e2efee] rounded-lg text-xs font-[Montserrat] text-[#266D67] font-medium">
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
            7. OUR EDGE
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
                  We don&apos;t just teach tools — we build no-code professionals who deliver premium websites, charge premium rates, and operate as confident independent web designers from week one.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Globe className="w-6 h-6" />, title: "Live from Week Two", desc: "You publish a real, live website in your second week — not a localhost preview, not a draft. That tangible momentum builds confidence fast and gives you something to show clients while you're still learning." },
                  { icon: <Monitor className="w-6 h-6" />, title: "Two Platforms, One Diploma", desc: "Most programmes teach only one no-code tool. We teach Webflow for premium builds and Wix Studio for fast client-managed sites — giving you twice the flexibility and double the addressable client market from day one." },
                  { icon: <Brain className="w-6 h-6" />, title: "Animation Is Core, Not Extra", desc: "Scroll-triggered animations and micro-interactions aren't an optional bonus — they're a dedicated week of the curriculum. Because that's what separates designers who charge ₦80k from designers who charge ₦250k." },
                  { icon: <Target className="w-6 h-6" />, title: "Portfolio That Gets You Hired", desc: "By graduation you have 3+ live websites with animations, responsive layouts, and CMS-driven content — real URLs that load in a browser, not mockups in a PDF. That's what wins clients and gets you through agency interview rounds." },
                ].map((u, i) => (
                  <div key={i} className="group bg-[#f4f9f8] rounded-2xl p-6 border border-[#e2efee] hover:border-[#266D67]/30 hover:shadow-lg hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67] mb-4 group-hover:bg-[#266D67] group-hover:text-white transition-all duration-300">{u.icon}</div>
                    <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-sm mb-2">{u.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed font-[Montserrat]">{u.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            8. CTA — Gradient
        ══════════════════════════════════════════ */}
        <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, #163d3a 0%, #1d5450 40%, #266D67 100%)" }}>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 blur-3xl rounded-full" style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 65%)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold font-[Montserrat] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9ba48] animate-pulse" />
              Applications Open Now
            </span>
            <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Your First Live Website.<br />
              <span className="text-[#f9ba48]">Built in 6 Weeks.</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 890+ designers across Africa who turned no-code skills into a real career — building websites clients love and charging rates they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-xl font-[Montserrat] text-sm">
                Apply Now — It&apos;s Easy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Web%20Design%20No%20Code%20Diploma%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
                <MessageSquare className="w-4 h-4" />
                Ask a Question
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            9. UPCOMING COHORTS
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Calendar className="w-3.5 h-3.5" />
                Upcoming Cohorts
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Pick Your<span className="text-[#266D67]"> Start Date</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Three cohorts per year — choose the one that fits your schedule. Seats are limited and fill fast.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { month: "Aug", year: "2026", label: "August 2026", status: "Filling Fast", statusColor: "#f9ba48", accent: "#f9ba48", spots: "9 seats left", highlight: true },
                { month: "Oct", year: "2026", label: "October 2026", status: "Open", statusColor: "#266D67", accent: "#266D67", spots: "25 seats left", highlight: false },
                { month: "Dec", year: "2026", label: "December 2026", status: "Open", statusColor: "#266D67", accent: "#163d3a", spots: "30 seats left", highlight: false },
              ].map((cohort) => (
                <div key={cohort.month} className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 ${cohort.highlight ? "bg-[#163d3a] shadow-2xl shadow-[#163d3a]/30" : "bg-[#f4f9f8] border border-[#e2efee] hover:shadow-xl hover:shadow-[#266D67]/10"}`}>
                  {cohort.highlight && <div className="absolute top-0 left-0 right-0 h-1" style={{ background: `linear-gradient(90deg, ${cohort.accent}, #266D67)` }} />}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: cohort.highlight ? "rgba(249,186,72,0.15)" : "#eef6f5" }}>
                        <Calendar className="w-6 h-6" style={{ color: cohort.accent }} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold font-[Montserrat]" style={{ background: `${cohort.statusColor}20`, color: cohort.statusColor }}>{cohort.status}</span>
                    </div>
                    <p className={`font-[Montserrat] text-6xl font-bold leading-none mb-1 ${cohort.highlight ? "text-[#f9ba48]" : "text-[#163d3a]"}`}>{cohort.month}</p>
                    <p className={`font-[Montserrat] font-semibold text-base mb-4 ${cohort.highlight ? "text-white/40" : "text-gray-400"}`}>{cohort.year}</p>
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-6 text-xs font-[Montserrat] font-medium ${cohort.highlight ? "bg-white/8 text-white/60" : "bg-white text-gray-500"}`}>
                      <Clock className="w-3.5 h-3.5" />
                      Starting {cohort.label}
                    </div>
                    <div className="flex items-center gap-2 mb-7">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: cohort.statusColor }} />
                      <span className={`text-xs font-[Montserrat] font-semibold ${cohort.highlight ? "text-white/70" : "text-gray-500"}`}>{cohort.spots}</span>
                    </div>
                    <Link href="/company/scholarships" className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm font-[Montserrat] text-white transition-all hover:opacity-90" style={{ background: cohort.highlight ? "#f9ba48" : "#163d3a" }}>
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
            10. TESTIMONIALS
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
                  Real Designers.<br />
                  <span className="text-[#266D67]">Real Results.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Graduates who turned no-code skills into live websites, paying clients, and full-time creative careers.
                </p>
                <div className="space-y-4">
                  {[
                    { value: "4.8★", label: "Average diploma rating" },
                    { value: "890+", label: "No-code graduates across Africa" },
                    { value: "88%", label: "Freelancing or employed within 3 months" },
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
                  <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#266D67]/20 hover:shadow-lg transition-all duration-200">
                    <div className="flex mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#f9ba48]" fill="currentColor" />
                      ))}
                    </div>
                    <p className="font-[Montserrat] text-[#163d3a] text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs font-[Montserrat] shrink-0 ring-2 ring-white shadow-sm" style={{ background: t.bg }}>
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
            11. TUITION & PAYMENT
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Shield className="w-3.5 h-3.5" />
                Tuition &amp; Payment
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Flexible<span className="text-[#266D67]"> Payment Options</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Financial barriers shouldn&apos;t stop great talent. Choose the plan that works for you.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: <Award className="w-6 h-6" />, title: "Pay in Full", tag: "Best Value", tagColor: "#266D67", price: "Full Access", sub: "Single one-time payment", perks: ["Full access immediately", "Priority seat reservation", "5% early-bird discount available", "Scholarship option (pay 20% only)"], popular: false, cta: "Enrol Now" },
                { icon: <Zap className="w-6 h-6" />, title: "Installment Plan", tag: "Most Popular", tagColor: "#f9ba48", price: "2 payments", sub: "Split at 0% interest", perks: ["60% upfront, 40% at Week 3", "Zero interest, zero fees", "Full access from day one", "Flexible date arrangement"], popular: true, cta: "Get Started" },
                { icon: <HeartHandshake className="w-6 h-6" />, title: "Deferred Payment", tag: "Scholarship Track", tagColor: "#163d3a", price: "₦0 Now", sub: "Part or full payment at Week 2", perks: ["Begin learning with zero deposit", "Registration fee collected at Week 2", "For scholarship recipients only", "Admissions approval required"], popular: false, cta: "Enrol Now" },
              ].map((plan) => (
                <div key={plan.title} className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${plan.popular ? "bg-[#163d3a] shadow-2xl shadow-[#163d3a]/25" : "bg-[#f4f9f8] border border-[#e2efee] hover:shadow-xl hover:shadow-[#266D67]/10"}`}>
                  {plan.popular && <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #f9ba48, #266D67)" }} />}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.popular ? "bg-[#f9ba48]/15 text-[#f9ba48]" : "bg-[#eef6f5] text-[#266D67]"}`}>{plan.icon}</div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold font-[Montserrat]" style={{ background: `${plan.tagColor}20`, color: plan.tagColor }}>{plan.tag}</span>
                    </div>
                    <h3 className={`font-[Montserrat] font-bold text-xl mb-1 ${plan.popular ? "text-white" : "text-[#163d3a]"}`}>{plan.title}</h3>
                    <p className={`text-sm font-[Montserrat] mb-5 ${plan.popular ? "text-white/50" : "text-gray-400"}`}>{plan.sub}</p>
                    <p className={`font-[Montserrat] font-bold text-3xl mb-7 ${plan.popular ? "text-[#f9ba48]" : "text-[#163d3a]"}`}>{plan.price}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.perks.map((p) => (
                        <li key={p} className={`flex items-start gap-2.5 text-sm font-[Montserrat] ${plan.popular ? "text-white/75" : "text-gray-600"}`}>
                          <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-[#f9ba48]" : "text-[#266D67]"}`} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link href="/company/scholarships" className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm font-[Montserrat] transition-all ${plan.popular ? "bg-[#f9ba48] text-white hover:bg-[#d4a030]" : "bg-[#163d3a] text-white hover:bg-[#266D67]"}`}>
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 text-sm font-[Montserrat]">
              Tuition rates are available upon request — we accept multiple currencies across Africa and beyond.{" "}
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20Web%20Design%20No%20Code%20Diploma" className="text-[#266D67] font-semibold hover:underline">Contact admissions</a>{" "}
              to get the full pricing details and explore your options.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            12. HOW TO APPLY
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <GraduationCap className="w-3.5 h-3.5" />
                Application Process
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Getting In Is<span className="text-[#266D67]"> Simple</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Four straightforward steps stand between you and your first live no-code website.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", icon: <Search className="w-6 h-6" />, title: "Explore the Programme", desc: "Read through the curriculum, payment options, and cohort dates. Attend a free info session or reach out to an advisor with any questions." },
                { step: "02", icon: <Briefcase className="w-6 h-6" />, title: "Submit Your Application", desc: "Complete our short application form. No essays, no prior experience needed — just tell us a little about yourself and your goals." },
                { step: "03", icon: <MessageSquare className="w-6 h-6" />, title: "Talk with Admissions", desc: "A member of our admissions team will reach out within 48 hours to answer your questions, discuss scholarship eligibility, and confirm your fit." },
                { step: "04", icon: <GraduationCap className="w-6 h-6" />, title: "Enrol & Secure Your Seat", desc: "Complete your registration, secure your cohort seat, and get access to your pre-programme welcome kit. Day one starts here." },
              ].map((s, i) => (
                <div key={i} className="group bg-white rounded-3xl p-7 border border-[#e2efee] hover:border-[#266D67]/30 hover:shadow-xl hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67] group-hover:bg-[#266D67] group-hover:text-white transition-all duration-300">{s.icon}</div>
                    <span className="font-[Montserrat] font-bold text-4xl text-[#f4f9f8] group-hover:text-[#e2efee] transition-colors">{s.step}</span>
                  </div>
                  <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-base mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-[Montserrat]">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/company/scholarships" className="group inline-flex items-center gap-2 px-8 py-4 bg-[#163d3a] text-white font-bold rounded-lg hover:bg-[#266D67] transition-all shadow-lg font-[Montserrat] text-sm">
                Start My Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            13. FAQ
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">Got Questions?</span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  Frequently<span className="text-[#266D67]"> Asked</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Everything you need to know about the Web Design (No Code) Diploma — from tools to freelance income potential.</p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our admissions team is happy to help you make the right decision.</p>
                  <a href="mailto:hello@idealnovate.com?subject=Web%20Design%20No%20Code%20Question" className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]">Email Admissions</a>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className={`bg-[#f4f9f8] rounded-2xl border overflow-hidden transition-all duration-200 ${openFaq === i ? "border-[#266D67]/30 shadow-lg shadow-[#266D67]/8" : "border-[#e2efee] hover:border-[#266D67]/20"}`}>
                    <button className="w-full flex items-center justify-between gap-4 p-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span className="font-[Montserrat] font-bold text-[#163d3a] text-sm leading-snug">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-[#266D67] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
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
            14. FINAL CTA
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#163d3a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #f9ba48 0%, transparent 45%), radial-gradient(circle at 80% 50%, #266D67 0%, transparent 45%)" }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-xs font-semibold text-[#f9ba48] mb-6 font-[Montserrat]">
              <Zap className="w-3.5 h-3.5" />
              Next Cohort Filling Up
            </span>
            <h2 className="font-[Montserrat] font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Your No-Code Career<br />
              <span className="text-[#f9ba48]">Begins Right Now</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Over 890 designers across Africa have taken this step. Your first live animated website is 6 weeks away — the only question is, are you next?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                Start an Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Web%20Design%20No%20Code%20Diploma" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
