"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight, Star, Users, Clock, CheckCircle, ChevronDown,
  Briefcase, BarChart3, Cpu, Zap, BookOpen, Award,
  Target, TrendingUp, Layers, Globe, MessageSquare,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "1,840+", label: "Students Enrolled" },
  { value: "4.8★",   label: "Average Rating" },
  { value: "10 Wks", label: "Flagship Duration" },
  { value: "92%",    label: "Job Placement Rate" },
];

const whyItems = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategy-First Curriculum",
    desc: "Learn to think at a systems level and drive decisions that affect whole organisations — not just individual tasks or departments.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI-Augmented Leadership",
    desc: "Understand how AI tools are reshaping product roadmaps, financial reporting, and strategic planning — and how to lead through that shift.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Real Business Case Studies",
    desc: "Analyse and solve actual product and management challenges from African companies and startups — not textbook simulations.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Industry-Standard Tool Stack",
    desc: "Master Notion, Jira, QuickBooks, Power BI, and ChatGPT — the exact tools product managers, finance leads, and ops teams use daily.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Mentorship From Executives",
    desc: "Learn from CPOs, finance leads, and operations directors at companies actively growing across Africa — real perspectives from the top.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Career-Ready Credentials",
    desc: "Earn certifications recognised by 48+ hiring partners across Africa — credentials that open doors to product, strategy, and finance roles.",
  },
];

const tools = [
  { name: "Notion",    icon: <BookOpen className="w-4 h-4" /> },
  { name: "Jira",      icon: <Layers className="w-4 h-4" /> },
  { name: "Asana",     icon: <Target className="w-4 h-4" /> },
  { name: "QuickBooks", icon: <BarChart3 className="w-4 h-4" /> },
  { name: "Power BI",  icon: <TrendingUp className="w-4 h-4" /> },
  { name: "ChatGPT",   icon: <Cpu className="w-4 h-4" /> },
  { name: "Figma",     icon: <Globe className="w-4 h-4" /> },
];

const programmes = [
  {
    id: 1,
    icon: <Briefcase className="w-6 h-6" />,
    tag: "Management School",
    tagColor: "#266D67",
    title: "Product Management",
    description: "Master the end-to-end product lifecycle — from discovery and roadmapping to delivery and stakeholder management — using frameworks top PMs actually use.",
    duration: "10 Weeks",
    students: "920",
    rating: "4.8",
    level: "Beginner–Intermediate",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/management-school/product-management",
    color: "#266D67",
  },
  {
    id: 2,
    icon: <Cpu className="w-6 h-6" />,
    tag: "Management School",
    tagColor: "#266D67",
    title: "AI Product Strategy",
    description: "Learn how to build, position, and scale AI-driven products. Develop the strategic lens to identify AI opportunities and guide product teams in building them.",
    duration: "6 Weeks",
    students: "580",
    rating: "4.9",
    level: "Intermediate",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/management-school/ai-product-strategy",
    color: "#f9ba48",
  },
  {
    id: 3,
    icon: <BarChart3 className="w-6 h-6" />,
    tag: "Management School",
    tagColor: "#266D67",
    title: "Accounting Software Management",
    description: "Master QuickBooks, Sage, and modern accounting platforms to manage financial workflows, reporting, and compliance with confidence and precision.",
    duration: "8 Weeks",
    students: "340",
    rating: "4.7",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/management-school/accounting-software",
    color: "#163d3a",
  },
];

const testimonials = [
  {
    name: "Tunde Fashola",
    role: "Product Manager @ Flutterwave",
    text: "The Product Management programme gave me a structured way to think about user problems, prioritisation, and shipping decisions. Within 4 months of graduating, I was leading a cross-functional team of 6.",
    rating: 5,
    avatar: "TF",
    color: "#266D67",
  },
  {
    name: "Efua Mensah",
    role: "AI Strategy Lead @ Wave Mobile",
    text: "The AI Product Strategy course is genuinely unlike anything else available in Africa right now. It helped me see AI not as a feature to bolt on, but as a framework for rethinking entire product propositions.",
    rating: 5,
    avatar: "EM",
    color: "#f9ba48",
  },
  {
    name: "Chidi Okonkwo",
    role: "Finance Manager @ TeamApt",
    text: "I was sceptical that accounting software training could add value at my level. I was wrong. The course revealed gaps in our reporting workflow and I restructured our entire financial operations as a result.",
    rating: 5,
    avatar: "CO",
    color: "#163d3a",
  },
  {
    name: "Ngozi Adeyemi",
    role: "Senior Product Manager @ Paystack",
    text: "What I valued most was learning from mentors who are actively building products in Africa. Their context is entirely different from what you'd find in a Western programme — and far more relevant to the problems we're solving.",
    rating: 5,
    avatar: "NA",
    color: "#266D67",
  },
  {
    name: "Kofi Asante",
    role: "Head of Product @ Dash, Ghana",
    text: "I came in as a business analyst wanting to transition into product. The structured curriculum and my 1-on-1 mentor gave me exactly the bridge I needed. I got my first PM role in under 3 months.",
    rating: 5,
    avatar: "KA",
    color: "#163d3a",
  },
  {
    name: "Amaka Nwosu",
    role: "Product Operations Lead @ Bamboo",
    text: "Idealnovate taught me how to communicate product decisions upward, sideways, and downward. That cross-functional communication skill has been the single most transformative thing for my career trajectory.",
    rating: 5,
    avatar: "AN",
    color: "#f9ba48",
  },
];

const roadmap = [
  {
    level: "01",
    badge: "Beginner",
    subtitle: "Start from Zero",
    title: "Elementary Diploma",
    description: "Perfect for complete beginners. Build your business and product foundations with structured lessons designed to develop strategic thinking.",
    duration: "2–4 Weeks",
    modules: "6 Modules",
    students: "28,753+ enrolled",
    icon: <BookOpen className="w-7 h-7" />,
    popular: false,
    features: [
      "No prior management experience needed",
      "Business & product fundamentals",
      "Introduction to PM tools (Notion, Jira)",
      "3 foundational case study projects",
    ],
    href: "/learn/management-school/product-management",
  },
  {
    level: "02",
    badge: "Most Popular",
    subtitle: "Go Professional",
    title: "Diploma",
    description: "Advance with end-to-end product management, AI strategy, and financial systems. Build the skills leadership teams are actively seeking.",
    duration: "10–12 Weeks",
    modules: "12 Modules",
    students: "4,137+ enrolled",
    icon: <Layers className="w-7 h-7" />,
    popular: true,
    features: [
      "End-to-end product management",
      "AI strategy & financial systems",
      "Real product roadmap projects",
      "1-on-1 executive mentor sessions",
    ],
    href: "/learn/management-school/product-management",
  },
  {
    level: "03",
    badge: "Expert",
    subtitle: "Become a Leader",
    title: "Masterclass",
    description: "An elite programme for professionals ready to step into leadership — advanced strategy, AI-augmented decision-making, and executive-level thinking.",
    duration: "2–4 Weeks",
    modules: "6 Modules",
    students: "900+ enrolled",
    icon: <Zap className="w-7 h-7" />,
    popular: false,
    features: [
      "Advanced leadership & strategy",
      "AI-augmented decision-making",
      "Live sessions with C-suite executives",
      "Career placement in leadership roles",
    ],
    href: "/learn/management-school/product-management",
  },
];

const faqs = [
  {
    q: "Do I need a business or tech background to take Product Management?",
    a: "Not at all. Our Product Management programme is built to welcome career switchers. Whether you're coming from engineering, design, business, or an unrelated field, the programme guides you from first principles up to job-ready competency.",
  },
  {
    q: "What's the difference between Product Management and AI Product Strategy?",
    a: "Product Management covers the full PM lifecycle — discovery, roadmapping, prioritisation, and delivery. AI Product Strategy is more specialised — it focuses on how to identify AI opportunities, build AI-native products, and lead teams through AI integration. Many students do Product Management first, then AI Product Strategy.",
  },
  {
    q: "Is Accounting Software Management suitable for non-accountants?",
    a: "Yes. The programme is designed for anyone who works with financial data or manages reporting — including operations managers, business owners, and administrative professionals. It teaches the software workflows, not accounting principles from scratch.",
  },
  {
    q: "Will I build a real product roadmap during the programme?",
    a: "Absolutely. Product Management graduates build and present a full product roadmap for a real or simulated product, including user research synthesis, prioritised backlog, go-to-market strategy, and stakeholder communication plan.",
  },
  {
    q: "Are the Diploma and Masterclass programmes live or self-paced?",
    a: "Both. Core modules are recorded for self-paced learning. Diploma and Masterclass learners also attend weekly live sessions — including mentor check-ins, case study reviews, and peer critique rounds — designed to replicate a real working environment.",
  },
  {
    q: "What companies are Management School graduates working at?",
    a: "Our graduates are building products and leading teams at companies including Flutterwave, Paystack, PiggyVest, Interswitch, Wave Mobile, Moniepoint, Bamboo, and Stanbic Bank — across Nigeria, Ghana, Kenya, and South Africa.",
  },
  {
    q: "What makes Idealnovate's product management programme different?",
    a: "Three things: Africa-first context (our case studies, datasets, and mentors reflect African market realities), practitioner-led instruction (not academics), and portfolio depth (you leave with documented projects, not just a certificate). Employers trust our graduates because they've already done the work.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ManagementSchoolPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen">

        {/* ══════════════════════════════════════════
            1. HERO
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
                <Briefcase className="w-3.5 h-3.5" />
                Idealnovate · Management School
              </div>

              <h1 className="font-[Montserrat] font-bold text-white leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
                Build Leaders.<br />
                <span className="text-[#f9ba48]">Shape Tech Futures.</span>
              </h1>

              <p className="font-[Montserrat] text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                From product management to AI-powered strategy and financial systems — develop the leadership skills that drive organisations forward.
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
                  {["TF","EM","CO","NA","KA"].map((init, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>{init}</div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-[#f9ba48]" fill="currentColor" />)}
                    <span className="text-white font-bold text-xs ml-1 font-[Montserrat]">4.8</span>
                  </div>
                  <p className="text-white/40 text-xs font-[Montserrat]">Trusted by 1,840+ management students</p>
                </div>
              </div>

              {/* Top programmes mini cards — 3 programmes */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {[
                  { icon: <Briefcase className="w-4 h-4" />, title: "Product Management", students: "920", rating: "4.8", weeks: "10 Wks", color: "#266D67", hot: true, href: "/learn/management-school/product-management" },
                  { icon: <Cpu className="w-4 h-4" />, title: "AI Product Strategy", students: "580", rating: "4.9", weeks: "6 Wks", color: "#f9ba48", hot: true, href: "/learn/management-school/ai-product-strategy" },
                  { icon: <BarChart3 className="w-4 h-4" />, title: "Accounting Software Management", students: "340", rating: "4.7", weeks: "8 Wks", color: "#163d3a", hot: false, href: "/learn/management-school/accounting-software" },
                ].map((p) => (
                  <Link key={p.title} href={p.href} className="bg-white/6 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                    <div className="h-1 w-full" style={{ background: p.color }} />
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0" style={{ background: p.color }}>
                          {p.icon}
                        </div>
                        {p.hot && <span className="text-[#f9ba48] text-[10px] font-bold font-[Montserrat]">🔥 Hot</span>}
                      </div>
                      <p className="text-white font-bold text-xs font-[Montserrat] leading-snug mb-3 flex-1">{p.title}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <span className="flex items-center gap-1 text-white/50 text-[10px] font-[Montserrat]"><Users className="w-3 h-3" />{p.students}</span>
                        <span className="flex items-center gap-0.5 text-[#f9ba48] text-[10px] font-bold font-[Montserrat]"><Star className="w-3 h-3" fill="currentColor" />{p.rating}</span>
                        <span className="flex items-center gap-1 text-white/50 text-[10px] font-[Montserrat]"><Clock className="w-3 h-3" />{p.weeks}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Stats bar */}
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
            2. LEADERSHIP SKILLS THAT SCALE ORGANISATIONS
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-10 mb-10">

              <div className="relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-0">
                <Image src="/IdealTalent6.png" alt="Management School learners" fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.92) 0%, rgba(22,61,58,0.35) 45%, transparent 75%)" }} />
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-[#f9ba48] text-xs font-bold font-[Montserrat] mb-4">
                    <TrendingUp className="w-3 h-3" />
                    Why Management School
                  </span>
                  <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-3"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                    Leadership Skills That<br />
                    <span className="text-[#f9ba48]">Scale Organisations</span>
                  </h2>
                  <p className="text-white/65 text-sm font-[Montserrat] leading-relaxed max-w-xs">
                    We don&apos;t just teach management tools — we develop leaders who think strategically, communicate with clarity, and build things that last.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3">
                {whyItems.map((item) => (
                  <div key={item.title}
                    className="group flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 hover:border-[#266D67]/30 hover:shadow-md hover:shadow-[#266D67]/6 transition-all duration-200">
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
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #f9ba48 0%, transparent 65%)" }} />
              <div className="relative z-10 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                {[
                  { value: "₦600k+", label: "Product manager monthly salary", sub: "Entry-level roles in Nigeria", icon: <TrendingUp className="w-5 h-5" /> },
                  { value: "92%", label: "Job placement rate", sub: "Within 6 months of graduation", icon: <Award className="w-5 h-5" /> },
                  { value: "4.8★", label: "Average learner satisfaction", sub: "Across all programmes", icon: <Zap className="w-5 h-5" /> },
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
                <Briefcase className="w-3.5 h-3.5" />
                Management School Programmes
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Start as an Individual.
                <br />
                <span className="text-[#266D67]">Lead as an Executive.</span>
              </h2>
              <p className="mt-5 text-gray-500 text-lg font-[Montserrat] font-light leading-relaxed">
                Every programme is designed to be accessible regardless of your background — career switchers and working professionals welcome.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programmes.map(prog => (
                <Link key={prog.id} href={prog.href}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#266D67]/20 hover:shadow-xl hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${prog.color}, ${prog.color}88)` }} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0" style={{ background: prog.color }}>
                        {prog.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        {prog.hot && <span className="px-2.5 py-1 bg-[#f9ba48]/10 text-[#f9ba48] text-xs font-bold rounded-full font-[Montserrat]">🔥 Popular</span>}
                        <span className="px-2.5 py-1 text-xs font-semibold rounded-full font-[Montserrat]"
                          style={{ background: `${prog.tagColor}20`, color: prog.tagColor }}>{prog.tag}</span>
                      </div>
                    </div>
                    <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-base mb-2 group-hover:text-[#266D67] transition-colors leading-snug">{prog.title}</h3>
                    <p className="text-gray-500 text-sm font-[Montserrat] font-light leading-relaxed flex-1 mb-4">{prog.description}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 flex-wrap font-[Montserrat]">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{prog.duration}</span>
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{prog.students} students</span>
                      <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-[#f9ba48]" fill="currentColor" />{prog.rating}</span>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500 font-[Montserrat]">{prog.level}</span>
                      <span className="text-xs font-bold text-[#266D67] bg-[#eef6f5] px-3 py-1 rounded-full font-[Montserrat]">{prog.price}</span>
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
              <div className="lg:sticky lg:top-32">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <Star className="w-3.5 h-3.5" fill="currentColor" />
                  Student Stories
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  Real Results from
                  <span className="text-[#266D67]"> Real Leaders</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Our students don&apos;t just learn management — they lead products, drive organisational strategy, and build exceptional careers across Africa.
                </p>
                <div className="space-y-4">
                  {[
                    { value: "4.8★", label: "Average programme rating" },
                    { value: "1,840+", label: "Graduates across Africa" },
                    { value: "92%", label: "Employed within 6 months" },
                  ].map(s => (
                    <div key={s.label} className="flex items-center gap-4">
                      <p className="font-[Montserrat] font-bold text-[#266D67] text-2xl w-20 shrink-0">{s.value}</p>
                      <p className="text-gray-500 text-sm font-[Montserrat]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {testimonials.map(t => (
                  <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#266D67]/20 hover:shadow-lg transition-all duration-200">
                    <div className="flex mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#f9ba48]" fill="currentColor" />
                      ))}
                    </div>
                    <p className="font-[Montserrat] text-[#163d3a] text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-[11px] font-[Montserrat] shrink-0" style={{ background: t.color }}>
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
                Whether you&apos;re entering management or ascending into leadership, we have a structured path that meets you exactly where you are.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {roadmap.map((path) => (
                <div key={path.title}
                  className={`relative group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    path.popular ? "shadow-2xl shadow-[#163d3a]/20 md:scale-105" : "shadow-lg hover:shadow-[#266D67]/10"
                  }`}>
                  {path.popular && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f9ba48] to-[#266D67]" />}
                  <div className={`p-8 h-full flex flex-col ${path.popular ? "bg-[#163d3a] text-white" : "bg-white border border-gray-100"}`}>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-5xl font-bold font-[Montserrat] ${path.popular ? "text-white/10" : "text-gray-100"}`}>{path.level}</span>
                      <span className="px-3 py-1 text-xs font-bold rounded-full font-[Montserrat]"
                        style={{ background: path.popular ? "#f9ba48" : "#eef6f5", color: path.popular ? "white" : "#266D67" }}>{path.badge}</span>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${path.popular ? "bg-white/10 text-[#f9ba48]" : "bg-[#eef6f5] text-[#266D67]"}`}>
                      {path.icon}
                    </div>
                    <p className={`text-sm font-semibold uppercase tracking-wider mb-1 font-[Montserrat] ${path.popular ? "text-[#f9ba48]" : "text-[#266D67]"}`}>{path.subtitle}</p>
                    <h3 className={`font-[Montserrat] font-bold text-2xl mb-3 ${path.popular ? "text-white" : "text-[#163d3a]"}`}>{path.title}</h3>
                    <p className={`text-sm leading-relaxed mb-6 font-[Montserrat] flex-1 ${path.popular ? "text-white/70" : "text-gray-500"}`}>{path.description}</p>
                    <div className="flex flex-wrap gap-2.5 mb-6">
                      {[{ icon: <Clock className="w-3.5 h-3.5" />, text: path.duration }, { icon: <Layers className="w-3.5 h-3.5" />, text: path.modules }, { icon: <Users className="w-3.5 h-3.5" />, text: path.students }].map(meta => (
                        <span key={meta.text} className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-[Montserrat] font-medium ${path.popular ? "bg-white/10 text-white/70" : "bg-[#f4f9f8] text-gray-600"}`}>
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
                    <Link href={path.href}
                      className={`group/btn flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-sm transition-all shadow-sm font-[Montserrat] ${path.popular ? "bg-[#f9ba48] text-white hover:bg-[#d4a030]" : "bg-[#163d3a] text-white hover:bg-[#266D67]"}`}>
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
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute inset-0 opacity-15"
            style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #f9ba48 0%, transparent 55%), radial-gradient(circle at 70% 50%, #266D67 0%, transparent 55%)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-xs font-semibold text-[#f9ba48] mb-6 font-[Montserrat]">
                  <Zap className="w-3.5 h-3.5" />
                  Limited Scholarship Slots Available
                </div>
                <h2 className="font-[Montserrat] font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
                  Ready to Step Into<br />
                  <span className="text-[#f9ba48]">a Leadership Role?</span>
                </h2>
                <p className="font-[Montserrat] text-white/60 text-lg mb-8 max-w-md">
                  Join 1,840+ professionals who built their management careers through Idealnovate. Scholarships available — you may qualify to start for free.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/company/scholarships"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                    Apply for Scholarship
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="mailto:hello@idealnovate.com"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
                    <MessageSquare className="w-4 h-4" />
                    Contact an Advisor
                  </Link>
                </div>
              </div>
              <div className="bg-white/8 border border-white/15 rounded-3xl p-8">
                <p className="font-[Montserrat] font-bold text-white text-lg mb-6">What you get when you enrol</p>
                <ul className="space-y-4">
                  {[
                    "Structured product & management curriculum",
                    "Real business case study projects",
                    "Mentorship from CPOs and senior executives",
                    "Training on Notion, Jira, QuickBooks & AI tools",
                    "Comprehensive product management portfolio",
                    "Career coaching & stakeholder presentation prep",
                    "Certified Management diploma on completion",
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
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  Got Questions?
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  Frequently Asked
                  <span className="text-[#266D67]"> Questions</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Answers to the most common questions from aspiring product leaders and managers.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our advisors are ready to help you choose the right management or product programme.</p>
                  <Link href="mailto:hello@idealnovate.com"
                    className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]">
                    Contact Support
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i}
                    className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${openFaq === i ? "border-[#266D67]/30 shadow-lg shadow-[#266D67]/8" : "border-gray-100 hover:border-[#266D67]/20"}`}>
                    <button className="w-full flex items-center justify-between gap-4 p-5 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                      <span className="font-[Montserrat] font-bold text-[#163d3a] text-sm leading-snug">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-[#266D67] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${openFaq === i ? "max-h-60" : "max-h-0"}`}>
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
