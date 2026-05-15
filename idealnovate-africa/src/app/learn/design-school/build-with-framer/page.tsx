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
  Layers, Search, Brain, Cpu,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const curriculum = [
  {
    module: "01",
    title: "Introduction to Framer & Web Design Thinking",
    desc: "Understand how modern no-code websites are built and where Framer sits in the landscape. Set up your workspace, explore the interface, and publish your first live page before the week is out.",
    topics: [
      "Framer vs traditional web builders",
      "Interface orientation & workspace setup",
      "Design vs no-code: the modern workflow",
      "Publishing your first live Framer site",
    ],
    duration: "Week 1",
  },
  {
    module: "02",
    title: "Layouts, Frames & Responsive Breakpoints",
    desc: "Master Framer's layout engine — Frames, Stacks, and Grids. Build pages that look perfect across every screen size from mobile to widescreen desktop.",
    topics: [
      "Frames, stacks & grid containers",
      "Flex & auto-layout in Framer",
      "Responsive breakpoints — mobile, tablet, desktop",
      "Padding, margin & spacing systems",
    ],
    duration: "Week 2",
  },
  {
    module: "03",
    title: "Typography, Colours & Design Systems",
    desc: "Create a consistent visual language for any website. Learn to build typography scales, colour tokens, and reusable style guides directly inside Framer.",
    topics: [
      "Typography hierarchy & font pairings",
      "Colour systems & brand token setup",
      "Style guides & design tokens in Framer",
      "Visual consistency across multi-page sites",
    ],
    duration: "Week 3",
  },
  {
    module: "04",
    title: "Components, Variants & Reusable UI",
    desc: "Build smarter — not harder. Create Framer components with full variant states, interactive props, and override capabilities so your sites scale without repetition.",
    topics: [
      "Creating & managing Framer components",
      "Variants & interactive states (hover, active)",
      "Navigation bars, footers & card systems",
      "Component props & override architecture",
    ],
    duration: "Week 4",
  },
  {
    module: "05",
    title: "Animations, Scroll Effects & Interactions",
    desc: "Bring your websites to life. Master scroll-driven animations, page transitions, and micro-interactions — the details that separate amateur sites from premium ones.",
    topics: [
      "Page transitions & smart animate",
      "Scroll-triggered animations & parallax",
      "Hover micro-interactions & state transitions",
      "Interactive prototyping with Framer",
    ],
    duration: "Week 5",
  },
  {
    module: "06",
    title: "CMS Collections & Dynamic Content",
    desc: "Build data-driven websites. Use Framer CMS to create blogs, portfolios, and case study pages where the structure is designed once and the content scales indefinitely.",
    topics: [
      "Framer CMS — collections & field types",
      "Designing CMS-powered blog & portfolio pages",
      "Connecting CMS data to page templates",
      "Filtering, sorting & paginating CMS content",
    ],
    duration: "Week 6",
  },
  {
    module: "07",
    title: "SEO, Performance & Publishing",
    desc: "A beautiful site that nobody finds is a wasted site. Learn to optimise for search, improve Core Web Vitals, configure custom domains, and hand off live projects to clients.",
    topics: [
      "Meta titles, descriptions & Open Graph tags",
      "Image optimisation & performance best practices",
      "Custom domains & Framer hosting",
      "Analytics setup & site audit checklist",
    ],
    duration: "Week 7",
  },
  {
    module: "08",
    title: "AI-Powered Framer Workflow — Lovable AI & Claude",
    desc: "Use AI to design, write, and iterate faster than any traditional workflow. Combine Lovable AI for rapid prototyping and Claude AI for copy and content — then polish everything in Framer.",
    topics: [
      "Lovable AI for rapid UI generation & wireframing",
      "Claude AI for website copy & content strategy",
      "AI-assisted layout iteration & refinement",
      "Building a complete project with AI assistance",
    ],
    duration: "Week 8",
  },
  {
    module: "09",
    title: "Client Delivery, Freelancing & Portfolio Launch",
    desc: "Turn your Framer skills into income. Learn how to scope, price, and deliver client projects — then build and publish your own portfolio site as your graduation capstone.",
    topics: [
      "Client briefing & project scoping",
      "Framer pricing strategies for freelancers",
      "Delivering & handing off client projects",
      "Building & launching your portfolio site in Framer",
    ],
    duration: "Week 9",
  },
];

const testimonials = [
  {
    name: "Zainab Okonkwo",
    role: "Freelance Framer Designer (Lagos)",
    text: "I had zero web design experience. Eight weeks later, I launched three client websites in Framer and charged ₦180k per project. This course paid for itself three times over in my first month of freelancing.",
    rating: 5,
    avatar: "ZO",
    color: "#266D67",
    bg: "linear-gradient(135deg, #26aaa599 0%, #266D67 100%)",
  },
  {
    name: "Kwame Asante",
    role: "Web Designer @ Flutterwave (Accra)",
    text: "What shocked me was how fast you go from 'I've never used Framer' to 'I just published a live animated website.' By Week 3 I had something I was proud to show my manager. By Week 6, I was redesigning our internal tools.",
    rating: 5,
    avatar: "KA",
    color: "#f9ba48",
    bg: "linear-gradient(135deg, #f9ba4899 0%, #f9ba48 100%)",
  },
  {
    name: "Chiamaka Eze",
    role: "Product Designer & Framer Developer",
    text: "The CMS module alone changed my business model. I now build blog and portfolio sites for clients and they manage their own content. That independence is what clients are willing to pay premium prices for.",
    rating: 5,
    avatar: "CE",
    color: "#163d3a",
    bg: "linear-gradient(135deg, #163d3a99 0%, #163d3a 100%)",
  },
  {
    name: "Emeka Osei",
    role: "Creative Director @ Ndani TV (Lagos)",
    text: "I came in as a graphic designer who was dependent on developers to ship anything. Framer changed that completely. I now design and publish our landing pages in hours — our dev team can focus on the product.",
    rating: 5,
    avatar: "EO",
    color: "#266D67",
    bg: "linear-gradient(135deg, #26aaa599 0%, #266D67 100%)",
  },
  {
    name: "Fatima Bello",
    role: "UI Designer @ Paystack",
    text: "The animations module is genuinely world-class. My Framer portfolio attracted a recruiter from Paystack directly through LinkedIn. I didn't apply — they reached out. That's the power of a premium Framer portfolio.",
    rating: 4,
    avatar: "FB",
    color: "#163d3a",
    bg: "linear-gradient(135deg, #163d3a99 0%, #163d3a 100%)",
  },
  {
    name: "Samuel Mensah",
    role: "Founder, Pixel Arc Studio (Ghana)",
    text: "I built my agency on Framer. Every single client site we deliver is built in Framer. The AI workflow module — Lovable + Claude + Framer — has cut our delivery time in half. We now onboard two new clients a month.",
    rating: 5,
    avatar: "SM",
    color: "#f9ba48",
    bg: "linear-gradient(135deg, #f9ba4899 0%, #f9ba48 100%)",
  },
];

const faqs = [
  {
    q: "Do I need to know how to code to learn Framer?",
    a: "Not at all. Framer is a no-code visual web builder — you design and build in a visual canvas without writing HTML, CSS, or JavaScript. Everything taught in this programme is achievable without a single line of code. If you can use design software, you can build in Framer.",
  },
  {
    q: "What kinds of websites can I build with Framer?",
    a: "With Framer you can build anything from personal portfolios and landing pages to full marketing sites, SaaS product pages, blogs, and CMS-driven content sites. By the end of the programme you'll have built a live multi-page website with animations, a CMS-powered blog, and your own professional portfolio.",
  },
  {
    q: "How is Framer different from Webflow, Squarespace, or WordPress?",
    a: "Framer sits at the intersection of design tool and website builder. Unlike WordPress or Squarespace, it gives you pixel-perfect design control. Unlike Webflow, it has a gentler learning curve and built-in AI features. For designers who want to ship premium websites without writing code, Framer is the fastest, most powerful option available.",
  },
  {
    q: "Will my websites actually be live on the internet during the programme?",
    a: "Yes — from Week 1. Framer's hosting is built-in, and you'll publish your first live page before the end of the first module. Every project you build during the programme is live, shareable, and portfolio-ready the moment you hit publish.",
  },
  {
    q: "Is freelancing with Framer profitable in Africa?",
    a: "Very much so. Demand for Framer designers is rising sharply — most clients have never heard of it but instantly recognise the quality of the output. Framer freelancers in Africa typically charge ₦100k–₦400k per project, and a single retainer client can easily cover your monthly income target. Module 9 covers pricing strategy specifically.",
  },
  {
    q: "How are classes delivered — live or recorded?",
    a: "Classes are delivered live (minimum 2 sessions per week, up to 2 hours each), and all sessions are recorded so you never fall behind. Diploma students also get 1-on-1 mentor check-ins and live cohort review calls where you present your work and get direct feedback.",
  },
  {
    q: "Is scholarship funding available?",
    a: "Yes. We offer an 80% scholarship to qualifying applicants — meaning you only pay 20% as a registration fee to secure your seat. Apply via our Scholarship page and our admissions team will review your application within 5 business days.",
  },
  {
    q: "What certificate do I receive on completion?",
    a: "You receive an Idealnovate Professional Certificate in Web Design with Framer — a digitally verifiable credential with a LinkedIn-ready digital badge. The certificate is recognised by 48+ hiring partners across Africa and internationally, and is accepted for remote job applications and client pitches.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BuildWithFramerPage() {
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
                  href="/learn/design-school"
                  className="text-white/40 hover:text-white/60 transition-colors text-xs font-[Montserrat]"
                >
                  Design School
                </Link>
                <span className="text-white/25">/</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#f9ba48]/15 border border-[#f9ba48]/30 rounded-full text-[#f9ba48] text-xs font-bold font-[Montserrat]">
                  <Monitor className="w-3 h-3" />
                  Build with Framer Diploma
                </span>
              </div>

              <h1
                className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
              >
                Design It. Publish It.<br />
                <span className="text-[#f9ba48]">No Code Required.</span>
              </h1>

              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Learn to build stunning, animated, production-ready websites in Framer — and ship live work clients will pay premium prices for.
              </p>

              {/* Key feature badges */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "8 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Career Paths", value: "Freelance & Employment" },
                  { icon: <Star className="w-4 h-4" fill="currentColor" />, label: "Alumni Rating", value: "4.6 / 5 ★" },
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
                  href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Build%20with%20Framer%20Diploma"
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
                  {["ZO", "KA", "CE", "EO", "FB"].map((init, i) => (
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
                  Joined by <span className="text-white/70 font-semibold">437+ builders</span> across Africa
                </p>
              </div>
            </div>

            {/* RIGHT — Contained image card */}
            <div className="hidden lg:flex flex-col justify-center py-12 lg:py-16 px-8 xl:px-12">
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
                <Image
                  src="/IdealHire2.png"
                  alt="Build with Framer learners at Idealnovate"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, rgba(22,61,58,0.4) 0%, transparent 35%)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(22,61,58,0.55) 0%, transparent 40%)" }}
                />

                {/* Floating stat card */}
                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">89%</p>
                      <p className="text-gray-400 text-xs font-[Montserrat]">Freelancing within 3 months</p>
                    </div>
                  </div>
                </div>

                {/* Floating tool badge */}
                <div className="absolute bottom-6 right-6 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Primary Tool</p>
                  <div className="flex items-center gap-2">
                    {/* Framer logo mark */}
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                      <path d="M2 2h12v6H8L2 2z" fill="#f9ba48"/>
                      <path d="M2 8h6l6 6H2V8z" fill="#f9ba4899"/>
                    </svg>
                    <span className="text-white font-bold text-sm font-[Montserrat]">Framer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            2. BENEFITS — Why Learn With Us
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Monitor className="w-3.5 h-3.5" />
                Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                The Fastest Path From<br />
                <span className="text-[#266D67]">Designer to Web Publisher</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                Framer collapses the gap between design and a live website — and this diploma is built to get you there in 8 weeks, with clients paying for your work before you even graduate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <Monitor className="w-7 h-7" />,
                  title: "Ship Without a Developer",
                  desc: "Design and publish production-quality websites yourself — no developer dependency, no bottleneck. Framer gives designers total control from first frame to live URL, and you'll master every step of that process.",
                  color: "#f9ba48",
                },
                {
                  icon: <TrendingUp className="w-7 h-7" />,
                  title: "Premium Freelance Income",
                  desc: "Framer freelancers across Africa charge ₦150k–₦450k per project. Clients pay more for the visual quality and animation polish that Framer delivers — and our graduates know how to price their work to reflect that value.",
                  color: "#266D67",
                },
                {
                  icon: <Briefcase className="w-7 h-7" />,
                  title: "A Portfolio That Speaks First",
                  desc: "Every project you build in this diploma is a live, public, shareable website. By graduation you'll have a portfolio of 4+ live Framer sites — not screenshots, not mockups, real URLs employers and clients can visit and experience.",
                  color: "#163d3a",
                },
                {
                  icon: <Users className="w-7 h-7" />,
                  title: "Community of Builders",
                  desc: "Join a growing network of 437+ Framer builders across Africa. Share projects, trade client referrals, collaborate on briefs, and stay connected to a community that is actively earning from the same skills you're learning.",
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
            3. TOOLS YOU'LL MASTER
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
                Your Professional Toolkit
              </span>
              <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Tools You&apos;ll
                <span className="text-[#f9ba48]"> Master</span>
              </h2>
              <p className="text-white/45 font-[Montserrat] text-lg max-w-lg mx-auto leading-relaxed">
                Go beyond Framer basics — learn the complete AI-powered toolkit that top web designers use to design, build, and ship premium sites faster than ever.
              </p>
            </div>

            {/* 3 tools — centred wider cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  name: "Framer",
                  tagline: "No-Code Web Builder",
                  glow: "rgba(0,170,255,0.5)",
                  iconBg: "linear-gradient(145deg, #0d1117 0%, #1a2332 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      <path d="M8 8h24v12H20L8 8z" fill="white" fillOpacity="0.95"/>
                      <path d="M8 20h12L8 32V20z" fill="white" fillOpacity="0.55"/>
                    </svg>
                  ),
                  accent: "#00AAFF",
                },
                {
                  name: "Lovable AI",
                  tagline: "AI Product Builder",
                  glow: "rgba(232,67,147,0.45)",
                  iconBg: "linear-gradient(145deg, #C2185B 0%, #E91E8C 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      <path d="M20 34S5 24.5 5 14.5a7.875 7.875 0 0 1 15-3.3 7.875 7.875 0 0 1 15 3.3C35 24.5 20 34 20 34z" fill="white"/>
                      <path d="M20 34S5 24.5 5 14.5a7.875 7.875 0 0 1 15-3.3 7.875 7.875 0 0 1 15 3.3C35 24.5 20 34 20 34z" fill="url(#lv2)" fillOpacity="0.3"/>
                      <defs>
                        <linearGradient id="lv2" x1="5" y1="10" x2="35" y2="34" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF6B9D"/>
                          <stop offset="1" stopColor="#C2185B"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                  accent: "#E91E8C",
                },
                {
                  name: "Claude AI",
                  tagline: "AI Research & Copy",
                  glow: "rgba(217,119,87,0.45)",
                  iconBg: "linear-gradient(145deg, #C4673A 0%, #E8906A 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      {/* Claude's actual triangle/diamond logomark */}
                      <path d="M20 7l9 22H11L20 7z" fill="white" fillOpacity="0.95"/>
                      <path d="M14.5 22h11" stroke="#C4673A" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="20" cy="33" r="2" fill="white" fillOpacity="0.6"/>
                    </svg>
                  ),
                  accent: "#D97757",
                },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/16 transition-all duration-300 hover:-translate-y-2 cursor-default"
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `0 0 50px 0 ${tool.glow}` }}
                  />
                  <div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{ background: tool.iconBg }}
                  >
                    <div className="absolute inset-0 rounded-2xl"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
                    <div className="relative z-10">{tool.icon}</div>
                  </div>
                  <div
                    className="w-6 h-0.5 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-12"
                    style={{ background: tool.accent }}
                  />
                  <p className="font-[Montserrat] font-bold text-white text-base leading-tight mb-1">{tool.name}</p>
                  <p className="font-[Montserrat] text-white/35 text-sm leading-snug">{tool.tagline}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-white/25 text-xs font-[Montserrat] mt-12">
              Tools are introduced progressively — Framer from Week 1, AI tools embedded from Week 8 onward.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            4. WHERE ALUMNI WORK
        ══════════════════════════════════════════ */}
        <section className="py-14 bg-[#f4f9f8] border-y border-[#e2efee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
              Where our alumni work
            </p>
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
            5. STUDENT SUPPORT — We've Got Your Back
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
                    From your first Framer frame to your first paying client — our mentors and community are with you every step of the way.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {[
                      "Dedicated Framer mentor for the full 8 weeks",
                      "Missed a session? Every class is recorded",
                      "Community of 437+ builders across Africa",
                      "Freelance coaching until you land your first client",
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
                  src="/Idealhero.jpg"
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
            6. CURRICULUM
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
                  9 Modules.<br />
                  <span className="text-[#266D67]">One Live Website.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  A structured project-led journey from blank canvas to a portfolio of live Framer websites — and the freelance skills to monetise them.
                </p>

                <div className="bg-[#163d3a] rounded-2xl p-6 space-y-4">
                  {[
                    { icon: <Layers className="w-4 h-4" />, label: "9 Core Modules" },
                    { icon: <Clock className="w-4 h-4" />, label: "8 Weeks" },
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
            7. OUR EDGE — What Makes Us Different
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
                  We don&apos;t just teach you to use Framer — we build designers who ship live work, win clients, and operate as independent professionals from day one.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Live from Week One",
                    desc: "You publish a real, live website in your very first week — not a mockup, not a prototype. That momentum sets the tone for everything that follows and gives you something tangible to show from day one.",
                  },
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: "AI-Accelerated Building",
                    desc: "Lovable AI and Claude are woven into the curriculum — not bolted on at the end. You graduate knowing how to use AI to generate layouts, write copy, and cut delivery time dramatically compared to designers who don't.",
                  },
                  {
                    icon: <Monitor className="w-6 h-6" />,
                    title: "Every Project Is a Portfolio Piece",
                    desc: "Each module produces a live, shareable Framer site. By graduation you have 4+ published websites — real URLs with real interactions — that clients and employers can visit, experience, and hire you based on.",
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: "Africa-Centred Client Briefs",
                    desc: "Every project brief is rooted in African market realities — brands, businesses, and products your clients will instantly recognise. You graduate with a portfolio that speaks directly to the market you're entering.",
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
            8. CTA — Gradient
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
              Your First Live Website.<br />
              <span className="text-[#f9ba48]">Built in 8 Weeks.</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 437+ designers across Africa who turned Framer into a career — shipping client sites, earning premium fees, and never waiting on a developer again.
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
                href="mailto:hello@idealnovate.com?subject=Build%20with%20Framer%20Diploma%20Enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm"
              >
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
                Pick Your
                <span className="text-[#266D67]"> Start Date</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">
                Three cohorts per year — choose the one that fits your schedule. Seats are limited and fill fast.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  month: "Jun",
                  year: "2026",
                  label: "June 2026",
                  status: "Filling Fast",
                  statusColor: "#f9ba48",
                  accent: "#f9ba48",
                  spots: "8 seats left",
                  highlight: true,
                },
                {
                  month: "Aug",
                  year: "2026",
                  label: "August 2026",
                  status: "Open",
                  statusColor: "#266D67",
                  accent: "#266D67",
                  spots: "20 seats left",
                  highlight: false,
                },
                {
                  month: "Oct",
                  year: "2026",
                  label: "October 2026",
                  status: "Open",
                  statusColor: "#266D67",
                  accent: "#163d3a",
                  spots: "28 seats left",
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
                      Starting {cohort.label}
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
            10. TESTIMONIALS — Student Stories
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
                  Real Builders.<br />
                  <span className="text-[#266D67]">Real Results.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Graduates who went from zero Framer experience to live websites, paying clients, and full-time creative careers.
                </p>
                <div className="space-y-4">
                  {[
                    { value: "4.6★", label: "Average diploma rating" },
                    { value: "437+", label: "Framer graduates across Africa" },
                    { value: "89%", label: "Freelancing or employed within 3 months" },
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
                    <p className="font-[Montserrat] text-[#163d3a] text-sm leading-relaxed mb-5">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs font-[Montserrat] shrink-0 ring-2 ring-white shadow-sm"
                        style={{ background: t.bg }}
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
                Flexible
                <span className="text-[#266D67]"> Payment Options</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">
                Financial barriers shouldn&apos;t stop great talent. Choose the plan that works for you.
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
                    "60% upfront, 40% at Week 4",
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
                  sub: "Part or full payment at Week 2",
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
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20Build%20with%20Framer%20Diploma" className="text-[#266D67] font-semibold hover:underline">
                Contact admissions
              </a>{" "}
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
                Getting In Is
                <span className="text-[#266D67]"> Simple</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">
                Four straightforward steps stand between you and your first live Framer website.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  icon: <Search className="w-6 h-6" />,
                  title: "Explore the Programme",
                  desc: "Read through the curriculum, payment options, and cohort dates. Attend a free info session or reach out to an advisor with any questions.",
                },
                {
                  step: "02",
                  icon: <Briefcase className="w-6 h-6" />,
                  title: "Submit Your Application",
                  desc: "Complete our short application form. No essays, no prior experience needed — just tell us a little about yourself and your goals.",
                },
                {
                  step: "03",
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Talk with Admissions",
                  desc: "A member of our admissions team will reach out within 48 hours to answer your questions, discuss scholarship eligibility, and confirm your fit.",
                },
                {
                  step: "04",
                  icon: <GraduationCap className="w-6 h-6" />,
                  title: "Enrol & Secure Your Seat",
                  desc: "Complete your registration, secure your cohort seat, and get access to your pre-programme welcome kit. Day one starts here.",
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
            13. FAQ
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
                  Everything you need to know about the Build with Framer Diploma — from software requirements to freelance earning potential.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">
                    Our admissions team is happy to help you make the right decision.
                  </p>
                  <a
                    href="mailto:hello@idealnovate.com?subject=Build%20with%20Framer%20Question"
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
            14. FINAL CTA
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
              Your Future as a Framer Builder<br />
              <span className="text-[#f9ba48]">Begins Right Now</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Over 437 builders across Africa have taken this step. Your first live site is 8 weeks away — the only question is, are you next?
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
                href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Build%20with%20Framer%20Diploma"
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
