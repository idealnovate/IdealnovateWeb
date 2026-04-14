"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight, Star, Users, Clock, CheckCircle, ChevronDown,
  Brain, BarChart3, Code2, Cpu, Zap, BookOpen, Award,
  Target, TrendingUp, Globe, Layers, Monitor, MessageSquare,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "5,280+", label: "Students Enrolled" },
  { value: "4.8★",   label: "Average Rating" },
  { value: "12 Wks", label: "Flagship Duration" },
  { value: "91%",    label: "Job Placement Rate" },
];

const whyItems = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Demand-Aligned Curriculum",
    desc: "Every module is mapped to what data teams at banks, fintechs, and startups are actively using — nothing taught here is outdated theory.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Real African Market Datasets",
    desc: "You won't study synthetic data. Analyse real datasets across finance, health, and e-commerce sectors to build genuine analytical instincts.",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Python & AI Integration",
    desc: "Go beyond spreadsheets. Learn how Python scripts and AI tools automate repetitive workflows and surface insights that manual analysis misses.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Industry-Standard Tool Stack",
    desc: "Master Excel, Tableau, SQL, Power BI, and ChatGPT — the exact combination data employers shortlist candidates for.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Mentorship From Practicing Analysts",
    desc: "Your instructors are currently working as data scientists and analysts at top-tier companies — not academics teaching from slides.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Portfolio That Gets You Noticed",
    desc: "Leave with 5+ completed data projects, live dashboards, and documented case studies that prove your capability to any hiring manager.",
  },
];

const tools = [
  { name: "Python",    icon: <Code2 className="w-4 h-4" /> },
  { name: "Excel",     icon: <BarChart3 className="w-4 h-4" /> },
  { name: "Tableau",   icon: <TrendingUp className="w-4 h-4" /> },
  { name: "SQL",       icon: <Layers className="w-4 h-4" /> },
  { name: "ChatGPT",   icon: <Cpu className="w-4 h-4" /> },
  { name: "Power BI",  icon: <Monitor className="w-4 h-4" /> },
  { name: "Claude AI", icon: <Brain className="w-4 h-4" /> },
];

const programmes = [
  {
    id: 1,
    icon: <Cpu className="w-6 h-6" />,
    tag: "Data & AI School",
    tagColor: "#266D67",
    title: "AI Prompting & Automations",
    description: "Master ChatGPT, Claude, and no-code automation tools to design smart workflows that save time and boost output across any role.",
    duration: "6 Weeks",
    students: "2,840",
    rating: "4.9",
    level: "Beginner",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/data-ai-school/ai-agents",
    color: "#266D67",
  },
  {
    id: 2,
    icon: <BarChart3 className="w-6 h-6" />,
    tag: "Data & AI School",
    tagColor: "#266D67",
    title: "Data Analysis",
    description: "Develop the ability to analyse, interpret, and visualise data using industry tools to drive real, evidence-based business decisions.",
    duration: "12 Weeks",
    students: "1,980",
    rating: "4.8",
    level: "Beginner",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/data-ai-school/data-analysis",
    color: "#266D67",
  },
  {
    id: 3,
    icon: <Code2 className="w-6 h-6" />,
    tag: "Data & AI School",
    tagColor: "#266D67",
    title: "Python for Data Analysis",
    description: "Learn Python from the ground up and apply it to real data problems — wrangling, visualisation, and statistical analysis.",
    duration: "6 Weeks",
    students: "1,640",
    rating: "4.9",
    level: "Beginner–Intermediate",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/data-ai-school/python-data-analysis",
    color: "#266D67",
  },
  {
    id: 4,
    icon: <Monitor className="w-6 h-6" />,
    tag: "Data & AI School",
    tagColor: "#266D67",
    title: "Tableau for Data Analysis",
    description: "Transform raw data into compelling visual stories using Tableau — build interactive dashboards that communicate insights with clarity.",
    duration: "8 Weeks",
    students: "890",
    rating: "4.7",
    level: "Beginner–Intermediate",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/data-ai-school/tableau-data-analysis",
    color: "#f9ba48",
  },
  {
    id: 5,
    icon: <Globe className="w-6 h-6" />,
    tag: "Data & AI School",
    tagColor: "#266D67",
    title: "Microsoft Excel Mastery",
    description: "Go beyond basics. Master advanced functions, Power Query, pivot tables, and automation techniques analysts use every day.",
    duration: "4 Weeks",
    students: "1,120",
    rating: "4.7",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/data-ai-school/excel-mastery",
    color: "#f9ba48",
  },
  {
    id: 6,
    icon: <Brain className="w-6 h-6" />,
    tag: "Data & AI School",
    tagColor: "#266D67",
    title: "AI Workplace Fundamentals",
    description: "Understand the AI landscape and learn to apply artificial intelligence tools to solve real workplace problems — no coding required.",
    duration: "3 Weeks",
    students: "1,240",
    rating: "4.8",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/data-ai-school/ai-fundamentals",
    color: "#163d3a",
  },
];

const testimonials = [
  {
    name: "Chioma Nwosu",
    role: "Data Analyst @ Kuda Bank",
    text: "I went from manually updating spreadsheets to building automated dashboards in Python and Power BI. Idealnovate's curriculum mapped exactly to what my employer needed.",
    rating: 5,
    avatar: "CN",
    color: "#266D67",
  },
  {
    name: "Segun Ogunleye",
    role: "AI Automation Lead @ Interswitch",
    text: "The AI Prompting course unlocked a new way of working. Reports that used to take two days now run automatically in under an hour. I wish I'd found this sooner.",
    rating: 5,
    avatar: "SO",
    color: "#163d3a",
  },
  {
    name: "Fatima Suleiman",
    role: "Data Scientist @ MTN Nigeria",
    text: "Real data, real projects, real mentors — that's what Idealnovate delivered. My portfolio landed me three job offers within two months of graduating.",
    rating: 5,
    avatar: "FS",
    color: "#f9ba48",
  },
  {
    name: "Nana Boateng",
    role: "Business Analyst @ Stanbic Bank, Ghana",
    text: "Python seemed intimidating coming from an accounting background. The way Idealnovate structures the progression made it feel completely natural — I was writing scripts by week 3.",
    rating: 5,
    avatar: "NB",
    color: "#266D67",
  },
  {
    name: "Olumide Adeyemi",
    role: "BI Developer @ Flutterwave",
    text: "The Tableau programme gave me more practical exposure than my entire university degree. I built four live dashboards that I still use in my current role today.",
    rating: 5,
    avatar: "OA",
    color: "#163d3a",
  },
  {
    name: "Adaeze Obi",
    role: "Product Data Analyst @ Paystack",
    text: "What separates Idealnovate is the quality of mentorship. My mentor reviewed every project and pushed me to think beyond the numbers — like a real analyst, not a student.",
    rating: 5,
    avatar: "AO",
    color: "#f9ba48",
  },
];

const roadmap = [
  {
    level: "01",
    badge: "Beginner",
    subtitle: "Start from Zero",
    title: "Elementary Diploma",
    description: "Perfect for complete beginners. Build your data foundations with hands-on lessons designed to fast-track your analytical confidence.",
    duration: "2–4 Weeks",
    modules: "6 Modules",
    students: "28,753+ enrolled",
    icon: <BookOpen className="w-7 h-7" />,
    popular: false,
    features: [
      "No coding or data background needed",
      "Excel fundamentals & data basics",
      "Intro to charts & data visualisation",
      "3 beginner data projects",
    ],
    href: "/learn/data-ai-school/data-analysis",
  },
  {
    level: "02",
    badge: "Most Popular",
    subtitle: "Go Professional",
    title: "Diploma",
    description: "Level up with real-world datasets, Python programming, and industry dashboards. Build the competency data employers are actively hiring for.",
    duration: "10–12 Weeks",
    modules: "12 Modules",
    students: "4,137+ enrolled",
    icon: <Layers className="w-7 h-7" />,
    popular: true,
    features: [
      "Python, Tableau & Power BI mastery",
      "Real African market datasets",
      "Portfolio of 6+ data projects",
      "1-on-1 analyst mentoring sessions",
    ],
    href: "/learn/data-ai-school/data-analysis",
  },
  {
    level: "03",
    badge: "Expert",
    subtitle: "Become a Data Leader",
    title: "Masterclass",
    description: "An elite, intensive programme for professionals ready to dominate their field — advanced ML, AI automation, and live cohort sessions.",
    duration: "2–4 Weeks",
    modules: "6 Modules",
    students: "900+ enrolled",
    icon: <Zap className="w-7 h-7" />,
    popular: false,
    features: [
      "Advanced ML & AI automation",
      "Data strategy & stakeholder storytelling",
      "Live sessions with senior data scientists",
      "Guaranteed career placement support",
    ],
    href: "/learn/data-ai-school/data-analysis",
  },
];

const faqs = [
  {
    q: "Do I need a coding or maths background to enrol in Data Analysis?",
    a: "Not at all. Our Elementary Diploma starts from absolute basics — no prior coding, statistics, or maths experience required. We build up systematically so every concept makes sense before we introduce the next.",
  },
  {
    q: "What's the difference between Data Analysis and Python for Data Analysis?",
    a: "Data Analysis is a broader programme covering tools like Excel, Tableau, and Power BI. Python for Data Analysis is more technical — it focuses specifically on writing Python code to clean, analyse, and visualise data. Many students do Data Analysis first, then Python to deepen their skills.",
  },
  {
    q: "How does the AI Prompting & Automations course work in practice?",
    a: "You'll learn how to write effective prompts for ChatGPT, Claude, and other AI tools — then use no-code platforms to automate real workflows. By the end, you'll have built at least 3 working automations you can use immediately in any job.",
  },
  {
    q: "Will I work with real data during the programmes?",
    a: "Yes — always. We use real datasets from African industries including fintech, health, agriculture, and retail. You'll analyse data that reflects actual business problems, not textbook examples.",
  },
  {
    q: "Which programme should I start with if I have zero experience?",
    a: "Start with Microsoft Excel Mastery or the Data Analysis Elementary Diploma — both are designed for complete beginners. If you're comfortable with spreadsheets already, you can jump straight into the Diploma programme.",
  },
  {
    q: "Are live sessions included, or is everything recorded?",
    a: "Core lessons are recorded so you learn at your own pace. Diploma and Masterclass programmes also include weekly live Q&A sessions, mentor check-ins, and peer review calls where you get direct feedback on your work.",
  },
  {
    q: "What career support do Data & AI graduates receive?",
    a: "You'll receive certified digital credentials, access to our employer talent pool, ongoing job placement support, and referrals to our 48+ hiring partners. 91% of our data graduates are employed in relevant roles within 6 months of completing their programme.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DataAISchoolPage() {
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
            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            {/* Radial glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
              style={{ background: "radial-gradient(circle, #266D67 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
              style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 60%)" }} />
            <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl"
              style={{ background: "radial-gradient(circle, #266D67 0%, transparent 60%)" }} />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/15 border border-[#f9ba48]/30 rounded-full text-xs font-semibold text-[#f9ba48] mb-8 font-[Montserrat]">
                <Brain className="w-3.5 h-3.5" />
                Idealnovate · Data &amp; AI School
              </div>

              {/* Headline */}
              <h1 className="font-[Montserrat] font-bold text-white leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
                Data Smart.<br />
                <span className="text-[#f9ba48]">AI Ready.</span>
              </h1>

              <p className="font-[Montserrat] text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                From Excel fundamentals to Python automation and AI prompting — master the analytics skills driving Africa&apos;s digital economy.
              </p>

              {/* CTAs */}
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

              {/* Social proof */}
              <div className="flex items-center justify-center gap-4 mb-14">
                <div className="flex -space-x-2">
                  {["CN","SO","FS","NB","OA"].map((init, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>{init}</div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-[#f9ba48]" fill="currentColor" />)}
                    <span className="text-white font-bold text-xs ml-1 font-[Montserrat]">4.8</span>
                  </div>
                  <p className="text-white/40 text-xs font-[Montserrat]">Trusted by 5,280+ data &amp; AI students</p>
                </div>
              </div>

              {/* Top programmes mini cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {[
                  { icon: <Cpu className="w-4 h-4" />, title: "AI Prompting & Automations", students: "2,840", rating: "4.9", weeks: "6 Wks", color: "#266D67", hot: true, href: "/learn/data-ai-school/ai-agents" },
                  { icon: <BarChart3 className="w-4 h-4" />, title: "Data Analysis", students: "1,980", rating: "4.8", weeks: "12 Wks", color: "#266D67", hot: true, href: "/learn/data-ai-school/data-analysis" },
                  { icon: <Code2 className="w-4 h-4" />, title: "Python for Data Analysis", students: "1,640", rating: "4.9", weeks: "6 Wks", color: "#163d3a", hot: true, href: "/learn/data-ai-school/python-data-analysis" },
                  { icon: <Globe className="w-4 h-4" />, title: "Microsoft Excel Mastery", students: "1,120", rating: "4.7", weeks: "4 Wks", color: "#f9ba48", hot: false, href: "/learn/data-ai-school/excel-mastery" },
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
            2. DATA SKILLS THAT DRIVE DECISIONS
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-10 mb-10">

              {/* LEFT — Picture card */}
              <div className="relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-0">
                <Image src="/IdealTalent3.jpg" alt="Data & AI School learners" fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.92) 0%, rgba(22,61,58,0.35) 45%, transparent 75%)" }} />
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-[#f9ba48] text-xs font-bold font-[Montserrat] mb-4">
                    <TrendingUp className="w-3 h-3" />
                    Why Data &amp; AI School
                  </span>
                  <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-3"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                    Data Skills That<br />
                    <span className="text-[#f9ba48]">Drive Decisions</span>
                  </h2>
                  <p className="text-white/65 text-sm font-[Montserrat] leading-relaxed max-w-xs">
                    We don&apos;t just teach tools — we build analysts who can turn raw information into strategic advantage.
                  </p>
                </div>
              </div>

              {/* RIGHT — 1×6 horizontal feature rows */}
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
                  { value: "5×", label: "Demand growth for data skills", sub: "Across Africa, 2023–2025", icon: <TrendingUp className="w-5 h-5" /> },
                  { value: "91%", label: "Job placement rate", sub: "Within 6 months of graduation", icon: <Award className="w-5 h-5" /> },
                  { value: "₦450k+", label: "Data analyst monthly salary", sub: "Entry-level roles in Nigeria", icon: <Zap className="w-5 h-5" /> },
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
                <Brain className="w-3.5 h-3.5" />
                Data &amp; AI School Programmes
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Start with Spreadsheets.
                <br />
                <span className="text-[#266D67]">End Up Building AI.</span>
              </h2>
              <p className="mt-5 text-gray-500 text-lg font-[Montserrat] font-light leading-relaxed">
                Every programme is accessible to beginners — no prior data, coding, or maths experience needed to enrol.
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
                  <span className="text-[#266D67]"> Real Analysts</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Our students don&apos;t just learn data skills — they automate workflows, land analyst roles, and build careers they&apos;re proud of.
                </p>
                <div className="space-y-4">
                  {[
                    { value: "4.8★", label: "Average programme rating" },
                    { value: "5,280+", label: "Graduates across Africa" },
                    { value: "91%", label: "Employed within 6 months" },
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
                Whether you&apos;re starting from scratch or deepening existing skills, we have a structured path that meets you exactly where you are.
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
                  Ready to Turn Data Into<br />
                  <span className="text-[#f9ba48]">Your Career?</span>
                </h2>
                <p className="font-[Montserrat] text-white/60 text-lg mb-8 max-w-md">
                  Join 5,280+ data professionals who built their careers through Idealnovate. Scholarships available — you may qualify to start for free.
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
                    "Structured, project-based data curriculum",
                    "Access to real African market datasets",
                    "Live mentor sessions with practicing analysts",
                    "Python, Tableau, Excel & AI tool training",
                    "Portfolio of 5+ completed data projects",
                    "Career coaching & interview preparation",
                    "Certified Data & AI diploma on completion",
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
                  Answers to the most common questions from aspiring data professionals.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our advisors are ready to help you find the right data or AI programme.</p>
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
