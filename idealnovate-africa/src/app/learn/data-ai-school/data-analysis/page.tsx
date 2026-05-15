"use client";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight, Star, Clock, CheckCircle, ChevronDown,
  BarChart3, Monitor, Globe, Zap, BookOpen, Award,
  Target, Briefcase, TrendingUp, MessageSquare,
  Users, Calendar, Shield, HeartHandshake, GraduationCap,
  Layers, Search, Brain, Database,
} from "lucide-react";
import { useState } from "react";

const curriculum = [
  {
    module: "01", title: "Data Thinking & Excel Foundations", duration: "Weeks 1–2",
    desc: "Build the analytical mindset and master Excel as a professional data tool — far beyond VLOOKUP and basic formulas.",
    topics: ["How data drives business decisions", "Advanced Excel: XLOOKUP, SUMIFS, dynamic arrays", "Data cleaning: handling nulls, duplicates, outliers", "Pivot tables and dynamic reporting"],
  },
  {
    module: "02", title: "SQL for Data Analysis", duration: "Weeks 3–4",
    desc: "Write SQL queries to extract, filter, join, and aggregate data from relational databases — the core skill for every analyst role.",
    topics: ["SELECT, WHERE, GROUP BY, ORDER BY", "INNER, LEFT, RIGHT JOINs and multi-table queries", "Subqueries and CTEs (Common Table Expressions)", "Window functions: RANK, ROW_NUMBER, LAG/LEAD"],
  },
  {
    module: "03", title: "Data Visualisation with Tableau", duration: "Weeks 5–6",
    desc: "Transform raw data into compelling visual stories — build dashboards that executives and stakeholders actually use and act on.",
    topics: ["Connecting Tableau to Excel, SQL, and CSV", "Chart types: bar, line, scatter, map, treemap", "Calculated fields and LOD expressions", "Interactive dashboards with filters and actions"],
  },
  {
    module: "04", title: "Power BI & Business Reporting", duration: "Weeks 7–8",
    desc: "Build enterprise-grade reports in Power BI — from data modelling and DAX formulas to publishing live dashboards for teams.",
    topics: ["Power BI Desktop: data import and modelling", "DAX formulas: CALCULATE, SUMX, time intelligence", "Star schema data models and relationships", "Publishing and sharing via Power BI Service"],
  },
  {
    module: "05", title: "Python for Data Analysis (Foundations)", duration: "Weeks 9–10",
    desc: "An introduction to Python for data work — Pandas for manipulation, Matplotlib for visualisation, and real EDA projects.",
    topics: ["Python setup and Jupyter Notebook workflow", "Pandas: DataFrames, filtering, groupby, merge", "Matplotlib and Seaborn data visualisation", "Exploratory data analysis (EDA) on real datasets"],
  },
  {
    module: "06", title: "Capstone Project & Career Launch", duration: "Weeks 11–12",
    desc: "Apply every skill in an end-to-end capstone on real African business data, then build your portfolio and prepare for interviews.",
    topics: ["Multi-tool analysis: raw data to executive report", "Portfolio project with a real African dataset", "CV, LinkedIn, and portfolio optimisation", "Interview preparation and salary negotiation"],
  },
];

const testimonials = [
  { name: "Chioma Nwosu", role: "Data Analyst @ Kuda Bank", text: "I went from manually updating spreadsheets to building automated dashboards in Python and Power BI. Idealnovate's curriculum mapped exactly to what my employer needed.", rating: 5, avatar: "CN", color: "#266D67" },
  { name: "Emeka Okafor", role: "BI Analyst, Lagos", text: "The SQL weeks were a complete game-changer. I went from not knowing what a JOIN was to writing complex window functions by week four. The progression is perfectly judged.", rating: 5, avatar: "EO", color: "#f9ba48" },
  { name: "Abena Asante", role: "Data Analyst, Accra", text: "Three job offers within two months of graduating. The portfolio project was the deciding factor in every interview — interviewers could see the quality of my analysis immediately.", rating: 5, avatar: "AA", color: "#163d3a" },
  { name: "Seun Adeyemi", role: "Financial Data Analyst, Nairobi", text: "The dashboards I built in class are now used by our executive team every Monday morning. That's real impact — and it started in week five of this programme.", rating: 5, avatar: "SA", color: "#266D67" },
  { name: "Tunde Obi", role: "Analytics Consultant, Abuja", text: "Twelve weeks is the right length for this programme. You cannot rush data skills. By the end I had genuine depth across five tools — not just surface-level familiarity.", rating: 5, avatar: "TO", color: "#f9ba48" },
  { name: "Fatima Suleiman", role: "Data Scientist @ MTN Nigeria", text: "Real data, real projects, real mentors — that's what Idealnovate delivered. My portfolio landed me three job offers within two months of graduating.", rating: 5, avatar: "FS", color: "#163d3a" },
];

const faqs = [
  { q: "Do I need any prior experience in data or coding?", a: "No prior experience is required. We start from absolute basics and build up systematically. The programme is designed for complete beginners — including people who have never used Excel professionally." },
  { q: "What is the difference between Data Analysis and Python for Data Analysis?", a: "Data Analysis is a broader 12-week programme covering Excel, SQL, Tableau, Power BI, and Python basics. Python for Data Analysis is a focused 6-week course for those who want to go deeper into Python specifically. Many students do the 12-week programme first, then return for Python." },
  { q: "Will I have access to the software tools?", a: "Yes. We provide setup guides for all tools. Most are free — Tableau Public, Power BI Desktop, and Python are all free. SQL exercises run in a provided online environment. No software purchases are required." },
  { q: "How is the 12-week workload structured?", a: "Expect 8–10 hours per week — two live sessions plus independent project work. All sessions are recorded. Most students manage the workload alongside full-time employment, though it requires genuine commitment." },
  { q: "What does the capstone project involve?", a: "You receive a real dataset from an African business — retail, fintech, or healthcare — and must clean, analyse, and present your findings as an executive dashboard and written report. Instructors provide structured feedback on your work." },
  { q: "Is scholarship funding available?", a: "Yes. We offer an 80% scholarship to qualifying applicants — meaning you only pay 20% as a registration fee. Apply via our scholarship page and our admissions team will review your application within 5 business days." },
  { q: "What happens after graduation?", a: "You receive your certificate, your portfolio goes live, and you join the Idealnovate alumni network. We actively connect graduates with employers through our hiring partners programme and weekly job board updates." },
  { q: "What roles does this programme prepare me for?", a: "Data analyst, business intelligence analyst, operations analyst, and junior data scientist. Graduates have been hired at fintechs, banks, telecoms, e-commerce companies, and management consultancies across Africa." },
];

export default function DataAnalysisPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <>
      <Navigation />
      <main className="flex flex-col min-h-screen">

        {/* ── 1. HERO ── */}
        <section className="bg-[#163d3a] pt-24 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[88vh]">
            <div className="flex flex-col justify-center py-12 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28">
              <div className="flex items-center gap-2 mb-6">
                <Link href="/learn/data-ai-school" className="text-white/40 hover:text-white/60 transition-colors text-xs font-[Montserrat]">Data &amp; AI School</Link>
                <span className="text-white/25">/</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#f9ba48]/15 border border-[#f9ba48]/30 rounded-full text-[#f9ba48] text-xs font-bold font-[Montserrat]">
                  <BarChart3 className="w-3 h-3" /> Data Analysis Diploma
                </span>
              </div>
              <h1 className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
                Turn Data Into<br /><span className="text-[#f9ba48]">Decisions That Matter</span>
              </h1>
              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                The most complete data analysis programme in Africa — Excel, SQL, Tableau, Power BI, and Python in 12 weeks. Build the skills that put you in the top 10% of analysts on the continent.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "12 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Job Opportunities", value: "Data & Analytics Roles" },
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
                <a href="mailto:hello@idealnovate.com?subject=Data%20Analysis%20Diploma%20Enquiry" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold text-sm rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat]">
                  <MessageSquare className="w-4 h-4" /> Talk with Admissions
                </a>
                <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all font-[Montserrat]">
                  Start an Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
                <div className="flex -space-x-2">
                  {["CN", "EO", "AA", "SA", "TO"].map((init, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[9px] font-bold text-white" style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>{init}</div>
                  ))}
                </div>
                <p className="text-white/45 text-xs font-[Montserrat]">Joined by <span className="text-white/70 font-semibold">1,980+ data analysts</span> across Africa</p>
              </div>
            </div>
            <div className="hidden lg:flex flex-col justify-center py-12 lg:py-16 px-8 xl:px-12">
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
                <Image src="/IdealTalent2.png" alt="Data Analysis learners at Idealnovate" fill className="object-cover object-top" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,61,58,0.4) 0%, transparent 35%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.55) 0%, transparent 40%)" }} />
                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]"><Award className="w-5 h-5" /></div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">91%</p>
                      <p className="text-gray-400 text-xs font-[Montserrat]">Job placement rate</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Primary Tool</p>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#f9ba48]" />
                    <span className="text-white font-bold text-sm font-[Montserrat]">Tableau</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. BENEFITS ── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <BarChart3 className="w-3.5 h-3.5" /> Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                The Only Data Programme<br /><span className="text-[#266D67]">Built to Get You Hired</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                Not a single-tool course. A complete analyst skill set — built over 12 weeks of structured, applied learning.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Database className="w-7 h-7" />, title: "5 Tools in One Programme", desc: "Excel, SQL, Tableau, Power BI, and Python — the exact combination that appears in 90% of data analyst job descriptions across Africa.", color: "#f9ba48" },
                { icon: <TrendingUp className="w-7 h-7" />, title: "Real African Datasets", desc: "Every project uses real, anonymised data from Nigerian, Kenyan, and Ghanaian businesses — so you understand the context behind the numbers.", color: "#266D67" },
                { icon: <Briefcase className="w-7 h-7" />, title: "Portfolio-First Assessment", desc: "No exams. You are assessed on the quality of your analysis outputs — dashboards, reports, and SQL scripts you can show employers immediately.", color: "#163d3a" },
                { icon: <Users className="w-7 h-7" />, title: "Hiring Partner Network", desc: "Idealnovate has active relationships with 30+ hiring companies. Graduates are introduced to relevant opportunities as they arise.", color: "#f9ba48" },
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

        {/* ── 3. TOOLS ── */}
        <section className="relative overflow-hidden py-20 bg-[#163d3a]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] opacity-20 blur-[100px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #266D67 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] opacity-15 blur-[80px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/6 border border-white/12 rounded-full text-white/50 text-xs font-semibold font-[Montserrat] mb-5 uppercase tracking-widest">
                <Zap className="w-3 h-3 text-[#f9ba48]" /> Industry-Standard Tools
              </span>
              <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Tools You&apos;ll <span className="text-[#f9ba48]">Master</span>
              </h2>
              <p className="text-white/45 font-[Montserrat] text-lg max-w-lg mx-auto leading-relaxed">
                Get hands-on with the exact tools data employers use every day — from session one.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Microsoft Excel", tagline: "Data Foundations", glow: "rgba(33,115,70,0.5)", iconBg: "linear-gradient(145deg, #1a3a1a 0%, #217346 100%)", accent: "#217346", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="4" y="6" width="30" height="26" rx="3" stroke="white" strokeWidth="2"/><line x1="4" y1="14" x2="34" y2="14" stroke="white" strokeWidth="1.5"/><line x1="4" y1="22" x2="34" y2="22" stroke="white" strokeWidth="1.5"/><line x1="16" y1="6" x2="16" y2="32" stroke="white" strokeWidth="1.5"/><path d="M7 17.5L12 20.5M12 17.5L7 20.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
                { name: "SQL", tagline: "Data Querying", glow: "rgba(37,99,235,0.5)", iconBg: "linear-gradient(145deg, #1e3a6e 0%, #2563eb 100%)", accent: "#2563eb", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><ellipse cx="19" cy="11" rx="13" ry="5" stroke="white" strokeWidth="2"/><path d="M6 11v7c0 2.76 5.82 5 13 5s13-2.24 13-5v-7" stroke="white" strokeWidth="2"/><path d="M6 18v7c0 2.76 5.82 5 13 5s13-2.24 13-5v-7" stroke="white" strokeWidth="2"/></svg> },
                { name: "Tableau", tagline: "Data Visualisation", glow: "rgba(39,86,188,0.5)", iconBg: "linear-gradient(145deg, #1a2a6b 0%, #2756BC 100%)", accent: "#2756BC", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="17" y="4" width="4" height="30" rx="2" fill="white"/><rect x="4" y="17" width="30" height="4" rx="2" fill="white"/><rect x="10" y="10" width="4" height="18" rx="2" fill="white" fillOpacity="0.6"/><rect x="24" y="10" width="4" height="18" rx="2" fill="white" fillOpacity="0.6"/></svg> },
                { name: "Power BI", tagline: "Business Intelligence", glow: "rgba(242,199,17,0.45)", iconBg: "linear-gradient(145deg, #7a3800 0%, #F2C811 100%)", accent: "#F2C811", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="5" y="24" width="6" height="10" rx="1.5" fill="white"/><rect x="16" y="16" width="6" height="18" rx="1.5" fill="white"/><rect x="27" y="8" width="6" height="26" rx="1.5" fill="white"/><path d="M8 18L19 12L30 6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
                { name: "Python", tagline: "Data Programming", glow: "rgba(59,130,246,0.5)", iconBg: "linear-gradient(145deg, #1a3a6b 0%, #3b82f6 100%)", accent: "#3b82f6", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><path d="M19 5C13 5 10 7.5 10 11v4h9v2H8C5 17 3 19.5 3 23v4c0 3.5 3 6 7 6v-3c-2 0-4-1-4-3v-4c0-2 1.5-3 4-3h10c3 0 5-2 5-4v-8c0-3-2.5-6-6-6z" fill="white" fillOpacity="0.9"/><path d="M19 33C25 33 28 30.5 28 27v-4h-9v-2h12c3 0 5-2.5 5-6v-4c0-3.5-3-6-7-6v3c2 0 4 1 4 3v4c0 2-1.5 3-4 3H19c-3 0-5 2-5 4v8c0 3 2.5 6 5 6z" fill="white" fillOpacity="0.5"/><circle cx="14.5" cy="12" r="1.5" fill="#1a3a6b"/><circle cx="23.5" cy="26" r="1.5" fill="#1a3a6b"/></svg> },
                { name: "ChatGPT", tagline: "AI-Assisted Analysis", glow: "rgba(16,163,127,0.5)", iconBg: "linear-gradient(145deg, #0a4a3a 0%, #10A37F 100%)", accent: "#10A37F", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><path d="M19 5C11.27 5 5 11.27 5 19c0 2.22.57 4.31 1.57 6.13L5 33l7.87-1.57A13.93 13.93 0 0019 33c7.73 0 14-6.27 14-14S26.73 5 19 5z" stroke="white" strokeWidth="2.5" fill="none"/><circle cx="13" cy="19" r="1.5" fill="white"/><circle cx="19" cy="19" r="1.5" fill="white"/><circle cx="25" cy="19" r="1.5" fill="white"/></svg> },
              ].map((tool) => (
                <div key={tool.name} className="group relative flex flex-col items-center text-center p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/16 transition-all duration-300 hover:-translate-y-2 cursor-default">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `0 0 40px 0 ${tool.glow}` }} />
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg" style={{ background: tool.iconBg }}>
                    <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
                    <div className="relative z-10">{tool.icon}</div>
                  </div>
                  <div className="w-6 h-0.5 rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-10" style={{ background: tool.accent }} />
                  <p className="font-[Montserrat] font-bold text-white text-sm leading-tight mb-1">{tool.name}</p>
                  <p className="font-[Montserrat] text-white/35 text-xs leading-snug">{tool.tagline}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-white/25 text-xs font-[Montserrat] mt-10">All tools introduced progressively across 6 modules — no prior experience required.</p>
          </div>
        </section>

        {/* ── 4. WHERE ALUMNI WORK ── */}
        <section className="py-14 bg-[#f4f9f8] border-y border-[#e2efee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Where our alumni work</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Kuda Bank", color: "#7c3aed" }, { name: "Interswitch", color: "#e02020" },
                { name: "MTN Nigeria", color: "#f9a825" }, { name: "Flutterwave", color: "#f5a623" },
                { name: "Access Bank", color: "#e02020" }, { name: "Stanbic IBTC", color: "#003087" },
                { name: "Jumia", color: "#f97316" }, { name: "OPay", color: "#34d186" },
                { name: "Moniepoint", color: "#4f46e5" }, { name: "Paystack", color: "#011B33" },
              ].map((c) => (
                <div key={c.name} className="flex items-center justify-center px-4 py-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0 hover:-translate-y-0.5 cursor-default">
                  <span className="font-[Montserrat] font-bold text-sm text-center leading-tight" style={{ color: c.color }}>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. STUDENT SUPPORT ── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2 min-h-[420px]">
              <div className="relative bg-gradient-to-br from-[#163d3a] via-[#1d5450] to-[#266D67] flex flex-col justify-center px-8 sm:px-12 py-12 lg:py-16">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="relative z-10 max-w-md">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold font-[Montserrat] mb-5">
                    <HeartHandshake className="w-3.5 h-3.5 text-[#f9ba48]" /> Student Support
                  </span>
                  <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                    Analysts Teaching<br /><span className="text-[#f9ba48]">Analysts</span>
                  </h2>
                  <p className="text-white/65 font-[Montserrat] text-base leading-relaxed mb-8">
                    Every instructor is a working data professional — analysts, scientists, and BI developers who use these tools daily at African banks, fintechs, and tech companies.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {["Bi-weekly live sessions with practising data professionals", "SQL and Python help desk for technical questions", "Portfolio review and feedback from working analysts", "Alumni hiring partner network with 30+ companies"].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-[#f9ba48] shrink-0 mt-0.5" />
                        <span className="text-white/75 text-sm font-[Montserrat]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/company/scholarships" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                    Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[320px] lg:min-h-0">
                <Image src="/IdealTeam.png" alt="Idealnovate data mentors" fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.35) 0%, transparent 50%)" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. CURRICULUM ── */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:sticky lg:top-32 self-start">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <BookOpen className="w-3.5 h-3.5" /> Course Curriculum
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  6 Modules.<br /><span className="text-[#266D67]">One Career.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  A structured, project-led journey from complete beginner to job-ready data analyst — in just 12 weeks.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6 space-y-4">
                  {[
                    { icon: <Layers className="w-4 h-4" />, label: "6 Core Modules" },
                    { icon: <Clock className="w-4 h-4" />, label: "12 Weeks" },
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
                              <CheckCircle className="w-3 h-3" /> {t}
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

        {/* ── 7. OUR EDGE ── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <Zap className="w-3.5 h-3.5" /> Our Edge
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight mb-5">
                  What Makes<br /><span className="text-[#266D67]">Us Different</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                  Every element of this diploma is designed to move you from learner to employed — not just from beginner to certified.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Database className="w-6 h-6" />, title: "African Business Datasets", desc: "All case studies use real, anonymised data from Nigerian, Kenyan, and Ghanaian businesses — so you understand the context behind the numbers." },
                  { icon: <Brain className="w-6 h-6" />, title: "Live Dashboard Critiques", desc: "Senior analysts review and critique your dashboards live in cohort — the same way design critiques happen at top data teams globally." },
                  { icon: <Target className="w-6 h-6" />, title: "12-Month Access", desc: "Your recordings, project templates, and resource library remain accessible for 12 months after graduation — your personal data reference library." },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Python Entry Point", desc: "The course includes Python foundations so you leave with a clear path into data science — not just analyst roles. A genuine differentiator." },
                ].map((u, i) => (
                  <div key={i} className="group bg-[#f4f9f8] rounded-2xl p-6 border border-[#e2efee] hover:border-[#266D67]/30 hover:shadow-lg hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1">
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

        {/* ── 8. CTA GRADIENT ── */}
        <section className="section-padding relative overflow-hidden" style={{ background: "linear-gradient(135deg, #163d3a 0%, #1d5450 40%, #266D67 100%)" }}>
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 blur-3xl rounded-full" style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 65%)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold font-[Montserrat] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9ba48] animate-pulse" /> Applications Open Now
            </span>
            <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Africa&apos;s Data Economy Needs Analysts.<br /><span className="text-[#f9ba48]">Be One of Them</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 1,980+ graduates who built their data careers with Idealnovate — and start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-xl font-[Montserrat] text-sm">
                Apply Now — It&apos;s Easy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Data%20Analysis%20Diploma%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
                <MessageSquare className="w-4 h-4" /> Ask a Question
              </a>
            </div>
          </div>
        </section>

        {/* ── 9. COHORTS ── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Calendar className="w-3.5 h-3.5" /> Upcoming Cohorts
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Pick Your <span className="text-[#266D67]">Start Date</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Choose the cohort that works best for your schedule — all seats are limited.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { month: "Jul", year: "2026", fullDate: "Starts July 14, 2026", status: "Filling Fast", statusColor: "#f9ba48", accent: "#f9ba48", spots: "14 seats left", highlight: true },
                { month: "Oct", year: "2026", fullDate: "Starts October 6, 2026", status: "Open", statusColor: "#266D67", accent: "#266D67", spots: "24 seats left", highlight: false },
                { month: "Jan", year: "2027", fullDate: "Starts January 13, 2027", status: "Open", statusColor: "#266D67", accent: "#163d3a", spots: "30 seats left", highlight: false },
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
                      <Clock className="w-3.5 h-3.5" /> {cohort.fullDate}
                    </div>
                    <div className="flex items-center gap-2 mb-7">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: cohort.statusColor }} />
                      <span className={`text-xs font-[Montserrat] font-semibold ${cohort.highlight ? "text-white/70" : "text-gray-500"}`}>{cohort.spots}</span>
                    </div>
                    <Link href="/company/scholarships" className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm font-[Montserrat] text-white transition-all hover:opacity-90" style={{ background: cohort.highlight ? "#f9ba48" : "#163d3a" }}>
                      Reserve My Seat <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. TESTIMONIALS ── */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-32">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <Star className="w-3.5 h-3.5" fill="currentColor" /> Student Stories
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  Real Analysts.<br /><span className="text-[#266D67]">Real Results.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Graduates who went from zero to employed — with portfolios, offers, and promotions to prove it.</p>
                <div className="space-y-4">
                  {[{ value: "4.8★", label: "Average diploma rating" }, { value: "1,980+", label: "Data graduates across Africa" }, { value: "91%", label: "Employed within 5 months" }].map((s) => (
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
                    <div className="flex mb-3">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 text-[#f9ba48]" fill="currentColor" />)}</div>
                    <p className="font-[Montserrat] text-[#163d3a] text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs font-[Montserrat] shrink-0 ring-2 ring-white shadow-sm" style={{ background: `linear-gradient(135deg, ${t.color}99 0%, ${t.color} 100%)` }}>{t.avatar}</div>
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

        {/* ── 11. TUITION ── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Shield className="w-3.5 h-3.5" /> Tuition &amp; Payment
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Flexible <span className="text-[#266D67]">Payment Options</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Financial barriers shouldn&apos;t stop great talent. Choose the plan that works for you.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { icon: <Award className="w-6 h-6" />, title: "Pay in Full", tag: "Best Value", tagColor: "#266D67", price: "Full Access", sub: "Single one-time payment", perks: ["Full access immediately", "Priority seat reservation", "5% early-bird discount available", "Scholarship option (pay 20% only)"], popular: false, cta: "Enrol Now" },
                { icon: <Zap className="w-6 h-6" />, title: "Instalment Plan", tag: "Most Popular", tagColor: "#f9ba48", price: "2 payments", sub: "Split at 0% interest", perks: ["60% upfront, 40% at Week 6", "Zero interest, zero fees", "Full access from day one", "Flexible date arrangement"], popular: true, cta: "Get Started" },
                { icon: <HeartHandshake className="w-6 h-6" />, title: "Deferred Payment", tag: "Scholarship Track", tagColor: "#163d3a", price: "₦0 Now", sub: "Start now, registration at Week 2", perks: ["Begin learning with zero deposit", "Registration fee collected at Week 2", "For scholarship recipients only", "Admissions approval required"], popular: false, cta: "Enrol Now" },
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
                          <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-[#f9ba48]" : "text-[#266D67]"}`} /> {p}
                        </li>
                      ))}
                    </ul>
                    <Link href="/company/scholarships" className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm font-[Montserrat] transition-all ${plan.popular ? "bg-[#f9ba48] text-white hover:bg-[#d4a030]" : "bg-[#163d3a] text-white hover:bg-[#266D67]"}`}>
                      {plan.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm font-[Montserrat]">
              Tuition rates available upon request — we accept multiple currencies across Africa.{" "}
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20Data%20Analysis" className="text-[#266D67] font-semibold hover:underline">Contact admissions</a> for full pricing details.
            </p>
          </div>
        </section>

        {/* ── 12. HOW TO APPLY ── */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <GraduationCap className="w-3.5 h-3.5" /> Application Process
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Getting In Is <span className="text-[#266D67]">Simple</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Four straightforward steps between you and your data career.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", icon: <Search className="w-6 h-6" />, title: "Explore the Programme", desc: "Read through the curriculum, payment options, and cohort dates. Attend a free info session or reach out with any questions." },
                { step: "02", icon: <Briefcase className="w-6 h-6" />, title: "Submit Your Application", desc: "Complete our short application form. No essays, no prior experience needed — just tell us about yourself and your goals." },
                { step: "03", icon: <MessageSquare className="w-6 h-6" />, title: "Talk with Admissions", desc: "A member of our admissions team will reach out within 48 hours to discuss scholarship eligibility and confirm your fit." },
                { step: "04", icon: <GraduationCap className="w-6 h-6" />, title: "Enrol & Secure Your Seat", desc: "Complete your registration, secure your cohort seat, and receive your pre-programme welcome kit. Day one starts here." },
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
                Start My Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 13. FAQ ── */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">Got Questions?</span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  Frequently <span className="text-[#266D67]">Asked</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Everything you need to know about the Data Analysis Diploma before applying.</p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our admissions team is happy to help you make the right decision.</p>
                  <a href="mailto:hello@idealnovate.com?subject=Data%20Analysis%20Diploma%20Question" className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]">Email Admissions</a>
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
                      <div className="px-5 pb-5"><p className="text-gray-500 text-sm font-[Montserrat] font-light leading-relaxed">{faq.a}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. FINAL CTA ── */}
        <section className="section-padding bg-[#163d3a] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #f9ba48 0%, transparent 45%), radial-gradient(circle at 80% 50%, #266D67 0%, transparent 45%)" }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-xs font-semibold text-[#f9ba48] mb-6 font-[Montserrat]">
              <Zap className="w-3.5 h-3.5" /> Next Cohort Filling Up
            </span>
            <h2 className="font-[Montserrat] font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Become the Analyst<br /><span className="text-[#f9ba48]">Every Team Wants to Hire</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">Over 1,980 data analysts have taken this step. The only question is — are you next?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                Start an Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Data%20Analysis%20Diploma%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
                <MessageSquare className="w-4 h-4" /> Talk with Admissions
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
