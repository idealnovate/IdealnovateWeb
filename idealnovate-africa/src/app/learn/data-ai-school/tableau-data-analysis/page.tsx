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
  Layers, Search, Brain, Database, BarChart3,
} from "lucide-react";
import { useState } from "react";

const curriculum = [
  {
    module: "01", title: "Data Visualisation Fundamentals", duration: "Weeks 1–2",
    desc: "Build a solid foundation in data visualisation principles — learn how to choose the right chart, avoid misleading visuals, and communicate data clearly before touching Tableau.",
    topics: ["Why visualisation matters in business decisions", "Chart selection: bar, line, scatter, pie, map", "Data storytelling principles and structure", "Introduction to Tableau Desktop interface", "Connecting Tableau to Excel and CSV files"],
  },
  {
    module: "02", title: "Building Dashboards in Tableau", duration: "Weeks 3–4",
    desc: "Move from single charts to multi-view dashboards. Learn Tableau's calculated fields, filters, parameters, and interactive actions that make dashboards executives actually use.",
    topics: ["Tableau worksheets vs dashboards vs stories", "Calculated fields and basic LOD expressions", "Filters, parameters, and dashboard actions", "Formatting and design for business audiences", "Publishing to Tableau Public — your free portfolio"],
  },
  {
    module: "03", title: "SQL for Data Preparation", duration: "Weeks 5–6",
    desc: "Learn SQL to extract, filter, and aggregate data from databases before bringing it into Tableau — the skill that separates intermediate from senior analysts.",
    topics: ["SELECT, WHERE, GROUP BY, ORDER BY queries", "INNER and LEFT JOINs across multiple tables", "Subqueries and Common Table Expressions (CTEs)", "Connecting Tableau directly to SQL databases", "Combining SQL and Tableau in a real workflow"],
  },
  {
    module: "04", title: "Power BI, Excel & Google Sheets Integration", duration: "Weeks 7–8",
    desc: "Extend your skills across the full business intelligence toolkit — Power BI for enterprise reporting, Excel for quick analysis, and Google Sheets for collaborative data work.",
    topics: ["Power BI Desktop: data import and basic DAX", "Excel pivot tables and dynamic charts as Tableau complements", "Google Sheets as a live data source in Tableau", "Cross-tool workflow: when to use which platform", "Capstone: multi-tool executive dashboard project"],
  },
];

const testimonials = [
  { name: "Adaora Ike", role: "BI Analyst @ Access Bank", text: "Within three weeks I was building dashboards that our regional managers now use every Monday. The progression from single charts to full interactive dashboards is brilliantly designed.", rating: 5, avatar: "AI", color: "#266D67" },
  { name: "Kingsley Okafor", role: "Data Analyst, Lagos", text: "The SQL weeks were a game-changer. I always felt like I was 'just a Tableau person' — now I can query the database directly and build my own data sources. Completely different level.", rating: 5, avatar: "KO", color: "#f9ba48" },
  { name: "Nana Owusu", role: "Analytics Consultant, Accra", text: "I got three client projects within a month of finishing this course. My Tableau Public portfolio was the first thing every client asked to see — and it closed the deal every time.", rating: 5, avatar: "NO", color: "#163d3a" },
  { name: "Damilola Adesanya", role: "Operations Analyst, Nairobi", text: "The Power BI week gave me the confidence to work across both tools. I can now walk into any company and handle whatever BI platform they use. That flexibility is invaluable.", rating: 5, avatar: "DA", color: "#266D67" },
  { name: "Chinonso Eze", role: "Business Intelligence Lead, Abuja", text: "Eight weeks is exactly the right length for this level of depth. By week four I felt genuinely capable. By week eight I had a portfolio I was proud to show every recruiter I met.", rating: 5, avatar: "CE", color: "#f9ba48" },
  { name: "Remi Adebayo", role: "Data Analyst @ Kuda Bank", text: "The real-world African datasets made all the difference. I was analysing Nigerian retail and fintech data — not abstract toy examples — from week one. That context changes everything.", rating: 5, avatar: "RA", color: "#163d3a" },
];

const faqs = [
  { q: "Do I need any prior data or Tableau experience?", a: "No prior experience is needed. The course starts from absolute basics — connecting data, understanding chart types, and navigating the Tableau interface. If you can use Excel, you are ready to start." },
  { q: "What version of Tableau will I use?", a: "We use Tableau Desktop (free 14-day trial available) and Tableau Public (permanently free). All dashboards you build can be published to Tableau Public as a free portfolio that employers can view directly." },
  { q: "How is this different from the Data Analysis Diploma?", a: "The Data Analysis Diploma covers Excel, SQL, Tableau, Power BI, and Python in 12 weeks — giving you breadth across all tools. This 8-week course goes much deeper into Tableau specifically, with more dashboard projects, advanced techniques, and a stronger focus on data storytelling. Many students take this course to deepen their Tableau skills after the Diploma." },
  { q: "Will I learn SQL in this course?", a: "Yes. Weeks 5–6 cover SQL fundamentals — SELECT, WHERE, GROUP BY, JOINs, and CTEs — specifically in the context of preparing data for Tableau dashboards. You will also learn how to connect Tableau directly to SQL databases." },
  { q: "What does the capstone project involve?", a: "In weeks 7–8 you build a multi-tool executive dashboard project using real African business data. You must combine SQL-prepared data, Tableau visualisations, and at least one supporting tool (Power BI or Excel). Instructors provide detailed feedback on your work." },
  { q: "Is Tableau Public sufficient for building a portfolio?", a: "Absolutely. Tableau Public is free and lets you publish fully interactive dashboards that employers can view without needing a Tableau license. Most employers expect to see a Tableau Public profile — and graduates of this course consistently have strong ones." },
  { q: "Is scholarship funding available?", a: "Yes. We offer an 80% scholarship to qualifying applicants — you pay only 20% as a registration fee. Apply via our scholarship page and our admissions team will review your application within 5 business days." },
  { q: "What roles does this course prepare me for?", a: "Business intelligence analyst, data analyst, dashboard developer, and reporting analyst. Graduates have been hired at banks, fintechs, telecoms, retail companies, and management consultancies across Africa." },
];

export default function TableauDataAnalysisPage() {
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
                  <BarChart3 className="w-3 h-3" /> Tableau for Data Analysis
                </span>
              </div>
              <h1 className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
                Dashboards That Make<br /><span className="text-[#f9ba48]">Executives Pay Attention</span>
              </h1>
              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                An 8-week deep dive into Tableau, SQL, Power BI, and data storytelling. Build the visualisation skills that open analyst, BI, and consultant roles across Africa.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "8 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Job Opportunities", value: "BI & Analytics Roles" },
                  { icon: <Star className="w-4 h-4" fill="currentColor" />, label: "Alumni Rating", value: "4.7 / 5 ★" },
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
                <a href="mailto:hello@idealnovate.com?subject=Tableau%20for%20Data%20Analysis%20Enquiry" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold text-sm rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat]">
                  <MessageSquare className="w-4 h-4" /> Talk with Admissions
                </a>
                <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all font-[Montserrat]">
                  Start an Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
                <div className="flex -space-x-2">
                  {["AI", "KO", "NO", "DA", "CE"].map((init, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[9px] font-bold text-white" style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>{init}</div>
                  ))}
                </div>
                <p className="text-white/45 text-xs font-[Montserrat]">Joined by <span className="text-white/70 font-semibold">890+ BI analysts</span> across Africa</p>
              </div>
            </div>
            <div className="hidden lg:flex flex-col justify-center py-12 lg:py-16 px-8 xl:px-12">
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
                <Image src="/IdealTalent3.png" alt="Tableau Data Analysis learners at Idealnovate" fill className="object-cover object-top" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,61,58,0.4) 0%, transparent 35%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.55) 0%, transparent 40%)" }} />
                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]"><Award className="w-5 h-5" /></div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">87%</p>
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
                The Visualisation Course<br /><span className="text-[#266D67]">Built for BI Careers</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                Not just Tableau tutorials. A complete visualisation skill set built over eight weeks of structured, applied practice.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <BarChart3 className="w-7 h-7" />, title: "Tableau + SQL Together", desc: "Most Tableau courses skip SQL entirely. Ours dedicates two full weeks to SQL so you can query your own data — the skill that makes you a senior analyst, not just a dashboard builder.", color: "#f9ba48" },
                { icon: <TrendingUp className="w-7 h-7" />, title: "Real African Business Data", desc: "Every dashboard project uses real, anonymised data from Nigerian, Kenyan, and Ghanaian businesses — so your portfolio demonstrates local market understanding.", color: "#266D67" },
                { icon: <Briefcase className="w-7 h-7" />, title: "Portfolio on Tableau Public", desc: "You finish the course with a live Tableau Public portfolio — free, publicly accessible, and directly shareable with employers. No fee, no software required.", color: "#163d3a" },
                { icon: <Users className="w-7 h-7" />, title: "Multi-Tool Competency", desc: "Beyond Tableau, you gain working knowledge of Power BI, Excel dashboards, and Google Sheets — making you versatile across any analytics environment.", color: "#f9ba48" },
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
                The complete business intelligence and visualisation stack used across Africa&apos;s top organisations.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Tableau Desktop", tagline: "Core Visualisation", glow: "rgba(39,86,188,0.5)", iconBg: "linear-gradient(145deg, #1a2a6b 0%, #2756BC 100%)", accent: "#2756BC", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="17" y="4" width="4" height="30" rx="2" fill="white"/><rect x="4" y="17" width="30" height="4" rx="2" fill="white"/><rect x="10" y="10" width="4" height="18" rx="2" fill="white" fillOpacity="0.6"/><rect x="24" y="10" width="4" height="18" rx="2" fill="white" fillOpacity="0.6"/></svg> },
                { name: "Tableau Public", tagline: "Free Portfolio", glow: "rgba(39,86,188,0.4)", iconBg: "linear-gradient(145deg, #1a3060 0%, #3769D9 100%)", accent: "#3769D9", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><circle cx="19" cy="19" r="13" stroke="white" strokeWidth="2" fill="none"/><path d="M19 6C19 6 13 12 13 19s6 13 6 13" stroke="white" strokeWidth="1.5" fill="none"/><path d="M19 6C19 6 25 12 25 19s-6 13-6 13" stroke="white" strokeWidth="1.5" fill="none"/><line x1="6" y1="19" x2="32" y2="19" stroke="white" strokeWidth="1.5"/><line x1="8" y1="13" x2="30" y2="13" stroke="white" strokeWidth="1"/><line x1="8" y1="25" x2="30" y2="25" stroke="white" strokeWidth="1"/></svg> },
                { name: "SQL", tagline: "Data Querying", glow: "rgba(37,99,235,0.5)", iconBg: "linear-gradient(145deg, #1e3a6e 0%, #2563eb 100%)", accent: "#2563eb", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><ellipse cx="19" cy="11" rx="13" ry="5" stroke="white" strokeWidth="2"/><path d="M6 11v7c0 2.76 5.82 5 13 5s13-2.24 13-5v-7" stroke="white" strokeWidth="2"/><path d="M6 18v7c0 2.76 5.82 5 13 5s13-2.24 13-5v-7" stroke="white" strokeWidth="2"/></svg> },
                { name: "Power BI", tagline: "Enterprise BI", glow: "rgba(242,199,17,0.45)", iconBg: "linear-gradient(145deg, #7a3800 0%, #F2C811 100%)", accent: "#F2C811", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="5" y="24" width="6" height="10" rx="1.5" fill="white"/><rect x="16" y="16" width="6" height="18" rx="1.5" fill="white"/><rect x="27" y="8" width="6" height="26" rx="1.5" fill="white"/><path d="M8 18L19 12L30 6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
                { name: "Microsoft Excel", tagline: "Quick Analysis", glow: "rgba(33,115,70,0.5)", iconBg: "linear-gradient(145deg, #1a3a1a 0%, #217346 100%)", accent: "#217346", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="4" y="6" width="30" height="26" rx="3" stroke="white" strokeWidth="2"/><line x1="4" y1="14" x2="34" y2="14" stroke="white" strokeWidth="1.5"/><line x1="4" y1="22" x2="34" y2="22" stroke="white" strokeWidth="1.5"/><line x1="16" y1="6" x2="16" y2="32" stroke="white" strokeWidth="1.5"/><path d="M7 17.5L12 20.5M12 17.5L7 20.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
                { name: "Google Sheets", tagline: "Collaborative Data", glow: "rgba(52,168,83,0.5)", iconBg: "linear-gradient(145deg, #0a4a1a 0%, #34A853 100%)", accent: "#34A853", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="7" y="5" width="24" height="28" rx="3" stroke="white" strokeWidth="2" fill="none"/><line x1="7" y1="13" x2="31" y2="13" stroke="white" strokeWidth="1.5"/><line x1="7" y1="21" x2="31" y2="21" stroke="white" strokeWidth="1.5"/><line x1="16" y1="5" x2="16" y2="33" stroke="white" strokeWidth="1.5"/><circle cx="11.5" cy="9" r="1.5" fill="white" fillOpacity="0.6"/></svg> },
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
            <p className="text-center text-white/25 text-xs font-[Montserrat] mt-10">All tools introduced progressively across 4 modules — no prior visualisation experience required.</p>
          </div>
        </section>

        {/* ── 4. WHERE ALUMNI WORK ── */}
        <section className="py-14 bg-[#f4f9f8] border-y border-[#e2efee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Where our alumni work</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Access Bank", color: "#e02020" }, { name: "Stanbic IBTC", color: "#003087" },
                { name: "Interswitch", color: "#e02020" }, { name: "MTN Nigeria", color: "#f9a825" },
                { name: "Jumia", color: "#f97316" }, { name: "Flutterwave", color: "#f5a623" },
                { name: "Deloitte Nigeria", color: "#86bc25" }, { name: "KPMG Nigeria", color: "#00338d" },
                { name: "PwC Africa", color: "#d04a02" }, { name: "GTBank", color: "#f26522" },
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
                    BI Analysts Teaching<br /><span className="text-[#f9ba48]">BI Analysts</span>
                  </h2>
                  <p className="text-white/65 font-[Montserrat] text-base leading-relaxed mb-8">
                    Every instructor is a working business intelligence professional — analysts and dashboard developers who build and maintain real reporting systems at African banks, fintechs, and corporates.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {["Bi-weekly live dashboard sessions with working BI professionals", "Tableau and SQL help desk for technical questions", "Portfolio review and dashboard critique from senior analysts", "Alumni network and hiring partner connections"].map((item) => (
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
                <Image src="/IdealTeam.png" alt="Idealnovate Tableau instructors" fill className="object-cover object-center" />
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
                  4 Modules.<br /><span className="text-[#266D67]">One Portfolio.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  From first chart to an executive dashboard portfolio — in 8 structured, project-led weeks.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6 space-y-4">
                  {[
                    { icon: <Layers className="w-4 h-4" />, label: "4 Core Modules" },
                    { icon: <Clock className="w-4 h-4" />, label: "8 Weeks" },
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
                  Eight weeks of applied visualisation — not just Tableau clicks, but the full BI skill set that makes dashboards matter.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Database className="w-6 h-6" />, title: "SQL Included — Not Optional", desc: "Two full weeks of SQL mean you can connect to databases, write your own queries, and bring data into Tableau without depending on a data engineer." },
                  { icon: <Brain className="w-6 h-6" />, title: "Live Dashboard Critiques", desc: "Senior BI analysts critique your dashboards live in cohort — the same way design reviews work at top analytics teams. You improve fast." },
                  { icon: <Target className="w-6 h-6" />, title: "12-Month Access", desc: "Your recordings, project templates, and resource library remain accessible for 12 months after graduation — your personal BI reference library." },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Multi-Tool Versatility", desc: "Power BI, Excel, and Google Sheets are all covered — so you leave ready for any BI environment, not just Tableau-specific roles." },
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
              Turn Data Into Stories<br /><span className="text-[#f9ba48]">That Drive Action</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 890+ graduates who built their BI careers with Idealnovate — and start building dashboards that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-xl font-[Montserrat] text-sm">
                Apply Now — It&apos;s Easy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Tableau%20for%20Data%20Analysis%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
                { month: "Sep", year: "2026", fullDate: "Starts September 7, 2026", status: "Filling Fast", statusColor: "#f9ba48", accent: "#f9ba48", spots: "10 seats left", highlight: true },
                { month: "Dec", year: "2026", fullDate: "Starts December 7, 2026", status: "Open", statusColor: "#266D67", accent: "#266D67", spots: "22 seats left", highlight: false },
                { month: "Mar", year: "2027", fullDate: "Starts March 1, 2027", status: "Open", statusColor: "#266D67", accent: "#163d3a", spots: "30 seats left", highlight: false },
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
                  Real Dashboards.<br /><span className="text-[#266D67]">Real Careers.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Graduates who went from zero to BI analyst — with dashboards executives actually use.</p>
                <div className="space-y-4">
                  {[{ value: "4.7★", label: "Average course rating" }, { value: "890+", label: "BI graduates across Africa" }, { value: "87%", label: "Employed within 5 months" }].map((s) => (
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
                { icon: <Zap className="w-6 h-6" />, title: "Instalment Plan", tag: "Most Popular", tagColor: "#f9ba48", price: "2 payments", sub: "Split at 0% interest", perks: ["60% upfront, 40% at Week 4", "Zero interest, zero fees", "Full access from day one", "Flexible date arrangement"], popular: true, cta: "Get Started" },
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
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20Tableau%20for%20Data%20Analysis" className="text-[#266D67] font-semibold hover:underline">Contact admissions</a> for full pricing details.
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
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Four straightforward steps between you and your BI career.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", icon: <Search className="w-6 h-6" />, title: "Explore the Programme", desc: "Read through the curriculum, payment options, and cohort dates. Attend a free info session or reach out with any questions." },
                { step: "02", icon: <Briefcase className="w-6 h-6" />, title: "Submit Your Application", desc: "Complete our short application form. No essays, no prior Tableau experience needed — just tell us about yourself and your goals." },
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
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Everything you need to know about the Tableau for Data Analysis course before applying.</p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our admissions team is happy to help you make the right decision.</p>
                  <a href="mailto:hello@idealnovate.com?subject=Tableau%20for%20Data%20Analysis%20Question" className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]">Email Admissions</a>
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
              Build Dashboards That<br /><span className="text-[#f9ba48]">Change How Decisions Are Made</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">Over 890 BI graduates have taken this step. Your Tableau Public portfolio is eight weeks away.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                Start an Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Tableau%20for%20Data%20Analysis%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
