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
  Layers, Search, Brain, Lightbulb,
} from "lucide-react";
import { useState } from "react";

const curriculum = [
  {
    module: "01", title: "Product Thinking & Discovery", duration: "Weeks 1–2",
    desc: "Learn to think like a product manager — how to identify real user problems, validate assumptions, and define opportunities before building a single feature.",
    topics: ["What product managers do — and don't do", "Jobs-to-be-done framework and user interviews", "Problem validation: discovery before solutions", "Competitive analysis and market positioning", "Defining opportunity areas and product bets"],
  },
  {
    module: "02", title: "Strategy, Vision & Roadmapping", duration: "Weeks 3–4",
    desc: "Build the strategic foundation of a great product — product vision, OKRs, and roadmaps that align teams, inform stakeholders, and create a clear path to user value.",
    topics: ["Writing a compelling product vision statement", "OKRs for product teams: goals that actually drive focus", "Now / next / later roadmapping with Notion and Miro", "Communicating strategy to stakeholders and executives", "African market considerations: localisation and regulation"],
  },
  {
    module: "03", title: "Prioritisation & Product Planning", duration: "Weeks 5–6",
    desc: "Learn the frameworks and data techniques that product managers use to decide what to build next — RICE, ICE, impact vs effort, and data-driven prioritisation.",
    topics: ["RICE and ICE scoring for feature prioritisation", "User story writing: epics, stories, and acceptance criteria", "Jira for product backlogs, sprints, and release planning", "Working with engineering: estimation, velocity, and trade-offs", "Amplitude: product analytics and metric-driven decisions"],
  },
  {
    module: "04", title: "UX Collaboration & Prototyping", duration: "Weeks 7–8",
    desc: "Product managers do not design — but they must direct design. Learn to work with UX teams, write clear design briefs, and use Figma to review and annotate designs.",
    topics: ["The PM-designer relationship: collaboration without overreach", "Writing effective design briefs and UX requirements", "Figma basics: reading and commenting on design files", "Usability testing: planning and interpreting results", "Using Miro for journey mapping and whiteboarding"],
  },
  {
    module: "05", title: "Launch, Growth & AI-Assisted PM", duration: "Weeks 9–10",
    desc: "Plan and execute product launches, measure success with analytics, and apply AI tools to supercharge your PM productivity — from research to specs to communication.",
    topics: ["Go-to-market planning: launch checklists and rollout strategy", "Defining success metrics and KPIs for product launches", "A/B testing fundamentals and experiment design", "ChatGPT for PMs: specs, research, docs, and communication", "Portfolio development and PM interview preparation"],
  },
];

const testimonials = [
  { name: "Seun Adesanya", role: "Product Manager @ Flutterwave", text: "The prioritisation frameworks alone transformed how I run sprint planning. Within two weeks of graduating I had re-structured my entire team's backlog using RICE — and my engineering lead noticed the quality difference immediately.", rating: 5, avatar: "SA", color: "#266D67" },
  { name: "Tobi Ogunyemi", role: "Associate PM, Lagos", text: "I came from a business development background and had no idea how PMs actually worked. Ten weeks gave me the frameworks, language, and portfolio to compete with CS graduates for PM roles. Three offers in six weeks.", rating: 5, avatar: "TO", color: "#f9ba48" },
  { name: "Afua Mensah", role: "Product Manager, Accra", text: "The Jira and Amplitude modules were worth the entire course. I now run sprint planning and track product metrics with complete confidence — skills that were black boxes to me before Idealnovate.", rating: 5, avatar: "AM", color: "#163d3a" },
  { name: "Kola Adeyemi", role: "Senior PM @ Kuda Bank", text: "The Figma week was a revelation. I can now review designs, spot UX problems, and annotate directly — instead of relying entirely on designers to tell me what they built. That collaboration shift is profound.", rating: 5, avatar: "KA", color: "#266D67" },
  { name: "Adaeze Okonkwo", role: "Product Lead, Nairobi", text: "The AI tools week gave me an unfair advantage. I use ChatGPT to draft PRDs, user stories, and competitive analyses in minutes — then refine rather than start from blank. Every PM should know this workflow.", rating: 5, avatar: "AO", color: "#f9ba48" },
  { name: "Chukwuemeka Eze", role: "PM @ Interswitch", text: "Real African product context throughout — regulatory considerations, local payment flows, connectivity constraints. Not a Silicon Valley playbook copy-pasted to Lagos. This programme understands our market.", rating: 5, avatar: "CE", color: "#163d3a" },
];

const faqs = [
  { q: "Do I need a technical or engineering background?", a: "No. Product management is a cross-functional role that bridges business, users, and engineering. You need logical thinking and communication skills, not code. Many great PMs come from business, finance, design, and operations backgrounds. The course is designed for non-technical professionals who want to move into product." },
  { q: "Which tools will I learn?", a: "Notion (documentation and roadmapping), Jira (backlog and sprint management), Miro (whiteboarding and journey mapping), Figma (design review), ChatGPT (AI-assisted PM work), and Amplitude (product analytics). These are the tools used by PMs at Africa's leading tech companies." },
  { q: "What is the difference between Product Management and Project Management?", a: "Product management is about deciding what to build and why — based on user needs, business strategy, and market opportunity. Project management is about executing a defined scope on time and on budget. This course teaches product management: discovery, strategy, prioritisation, and growth." },
  { q: "How is this course structured?", a: "Ten weeks of weekly live sessions plus independent project work — approximately 10–12 hours per week. Each week builds on the previous one. The course culminates in a product case study that serves as your primary portfolio piece for PM job applications." },
  { q: "Do I need prior PM experience?", a: "No. The course is designed for aspiring PMs making their first transition into the role — from business, engineering, design, finance, or any other background. It also provides structured upskilling for junior PMs who want to accelerate to senior roles." },
  { q: "What portfolio artefacts will I produce?", a: "By the end of the course you will have: a product brief on a real African product, a prioritised backlog in Jira, a roadmap in Notion, user interview notes and synthesis, an analytics dashboard in Amplitude, and a PM case study presentation for interviews." },
  { q: "Is scholarship funding available?", a: "Yes. We offer an 80% scholarship to qualifying applicants — you pay only 20% as a registration fee. Apply via our scholarship page and our admissions team will review your application within 5 business days." },
  { q: "What PM roles does this prepare me for?", a: "Associate PM, Junior PM, and mid-level PM roles at African tech companies, fintechs, banks, and startups. Graduates have been hired as PMs at Nigerian fintechs, Kenyan tech companies, and Ghanaian startups — and at companies across the African tech ecosystem." },
];

export default function ProductManagementPage() {
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
                <Link href="/learn/management-school" className="text-white/40 hover:text-white/60 transition-colors text-xs font-[Montserrat]">Management School</Link>
                <span className="text-white/25">/</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#f9ba48]/15 border border-[#f9ba48]/30 rounded-full text-[#f9ba48] text-xs font-bold font-[Montserrat]">
                  <Lightbulb className="w-3 h-3" /> Product Management
                </span>
              </div>
              <h1 className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
                Build Products Africa<br /><span className="text-[#f9ba48]">Actually Wants to Use</span>
              </h1>
              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                A 10-week intensive on product discovery, strategy, roadmapping, and launch — using Notion, Jira, Miro, Figma, and Amplitude. From zero PM experience to job-ready portfolio.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "10 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Job Opportunities", value: "Product Roles" },
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
                <a href="mailto:hello@idealnovate.com?subject=Product%20Management%20Enquiry" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold text-sm rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat]">
                  <MessageSquare className="w-4 h-4" /> Talk with Admissions
                </a>
                <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all font-[Montserrat]">
                  Start an Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
                <div className="flex -space-x-2">
                  {["SA", "TO", "AM", "KA", "AO"].map((init, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[9px] font-bold text-white" style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>{init}</div>
                  ))}
                </div>
                <p className="text-white/45 text-xs font-[Montserrat]">Joined by <span className="text-white/70 font-semibold">920+ product managers</span> across Africa</p>
              </div>
            </div>
            <div className="hidden lg:flex flex-col justify-center py-12 lg:py-16 px-8 xl:px-12">
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
                <Image src="/IdealTalent7.png" alt="Product Management learners at Idealnovate" fill className="object-cover object-top" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,61,58,0.4) 0%, transparent 35%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.55) 0%, transparent 40%)" }} />
                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]"><Award className="w-5 h-5" /></div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">89%</p>
                      <p className="text-gray-400 text-xs font-[Montserrat]">Job placement rate</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Core Tool</p>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[#f9ba48]" />
                    <span className="text-white font-bold text-sm font-[Montserrat]">Notion + Jira</span>
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
                <Lightbulb className="w-3.5 h-3.5" /> Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Product Management<br /><span className="text-[#266D67]">Built for African Markets</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                Not a generic PM course. A ten-week programme built around the realities of product development at African fintechs, startups, and tech companies.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Lightbulb className="w-7 h-7" />, title: "Six Industry Tools", desc: "Notion, Jira, Miro, Figma, ChatGPT, and Amplitude — the exact tools used by PMs at Paystack, Flutterwave, Kuda, and Interswitch. You graduate tool-ready.", color: "#f9ba48" },
                { icon: <Target className="w-7 h-7" />, title: "African Product Context", desc: "All case studies are drawn from African products and markets — payment flows, connectivity constraints, localisation, and regulatory context. No US case studies copy-pasted.", color: "#266D67" },
                { icon: <Briefcase className="w-7 h-7" />, title: "Portfolio You Can Use", desc: "You finish with a complete PM portfolio: product brief, roadmap, Jira backlog, analytics dashboard, and case study presentation — ready for your first PM interview.", color: "#163d3a" },
                { icon: <TrendingUp className="w-7 h-7" />, title: "AI-Assisted PM Skills", desc: "Week 10 integrates ChatGPT into your PM workflow — writing PRDs, specs, user stories, and competitive analyses faster than any PM who doesn't use AI tools.", color: "#f9ba48" },
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
                The exact PM toolkit used at Africa&apos;s top tech companies — from roadmapping to analytics.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Notion", tagline: "Docs & Roadmaps", glow: "rgba(55,53,47,0.6)", iconBg: "linear-gradient(145deg, #1a1a1a 0%, #37352f 100%)", accent: "#888888", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="7" y="6" width="24" height="26" rx="3" stroke="white" strokeWidth="2" fill="none"/><line x1="12" y1="13" x2="26" y2="13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="19" x2="26" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="25" x2="20" y2="25" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
                { name: "Jira", tagline: "Backlog & Sprints", glow: "rgba(0,101,255,0.5)", iconBg: "linear-gradient(145deg, #001a6e 0%, #0065FF 100%)", accent: "#0065FF", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><path d="M19 5L5 19l6 6 8-8 8 8 6-6L19 5z" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none"/><circle cx="19" cy="19" r="3" fill="white"/></svg> },
                { name: "Miro", tagline: "Whiteboarding", glow: "rgba(255,208,0,0.5)", iconBg: "linear-gradient(145deg, #7a4f00 0%, #FFD000 100%)", accent: "#FFD000", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="5" y="5" width="28" height="28" rx="4" stroke="white" strokeWidth="2" fill="none"/><path d="M11 27V11l5 10 5-10 5 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg> },
                { name: "Figma", tagline: "Design Review", glow: "rgba(162,89,255,0.5)", iconBg: "linear-gradient(145deg, #3d006e 0%, #A259FF 100%)", accent: "#A259FF", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="11" y="5" width="8" height="10" rx="4" stroke="white" strokeWidth="2" fill="none"/><rect x="19" y="5" width="8" height="10" rx="4" stroke="white" strokeWidth="2" fill="none"/><rect x="11" y="15" width="8" height="10" rx="4" stroke="white" strokeWidth="2" fill="none"/><rect x="11" y="25" width="8" height="8" rx="4" stroke="white" strokeWidth="2" fill="none"/><circle cx="23" cy="20" r="4" stroke="white" strokeWidth="2" fill="none"/></svg> },
                { name: "ChatGPT", tagline: "AI-Assisted PM", glow: "rgba(16,163,127,0.5)", iconBg: "linear-gradient(145deg, #0a4a3a 0%, #10A37F 100%)", accent: "#10A37F", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><path d="M19 5C11.27 5 5 11.27 5 19c0 2.22.57 4.31 1.57 6.13L5 33l7.87-1.57A13.93 13.93 0 0019 33c7.73 0 14-6.27 14-14S26.73 5 19 5z" stroke="white" strokeWidth="2.5" fill="none"/><circle cx="13" cy="19" r="1.5" fill="white"/><circle cx="19" cy="19" r="1.5" fill="white"/><circle cx="25" cy="19" r="1.5" fill="white"/></svg> },
                { name: "Amplitude", tagline: "Product Analytics", glow: "rgba(23,107,255,0.5)", iconBg: "linear-gradient(145deg, #001040 0%, #176BFF 100%)", accent: "#176BFF", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><polyline points="4,28 10,20 16,24 22,12 28,18 34,8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="4" cy="28" r="2" fill="white"/><circle cx="34" cy="8" r="2" fill="white"/></svg> },
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
            <p className="text-center text-white/25 text-xs font-[Montserrat] mt-10">All tools introduced progressively across 5 modules — no prior product or tech experience required.</p>
          </div>
        </section>

        {/* ── 4. WHERE ALUMNI WORK ── */}
        <section className="py-14 bg-[#f4f9f8] border-y border-[#e2efee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Where our alumni work</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Flutterwave", color: "#f5a623" }, { name: "Paystack", color: "#011B33" },
                { name: "Kuda Bank", color: "#7c3aed" }, { name: "Interswitch", color: "#e02020" },
                { name: "PiggyVest", color: "#1faa00" }, { name: "Moniepoint", color: "#4f46e5" },
                { name: "Carbon", color: "#00b67a" }, { name: "Andela", color: "#0d6efd" },
                { name: "OPay", color: "#34d186" }, { name: "Wave Africa", color: "#4dabf7" },
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
                    PMs Teaching<br /><span className="text-[#f9ba48]">Future PMs</span>
                  </h2>
                  <p className="text-white/65 font-[Montserrat] text-base leading-relaxed mb-8">
                    Every instructor is a practising product manager at an African tech company — bringing real context on how product works at fintechs, startups, and enterprise technology teams in Africa.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {["Weekly live sessions with practising African PMs", "PRD and spec review from working product managers", "Mock PM interviews with current industry professionals", "Alumni network and hiring partner connections across Africa"].map((item) => (
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
                <Image src="/IdealTeam.png" alt="Idealnovate product management instructors" fill className="object-cover object-center" />
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
                  5 Modules.<br /><span className="text-[#266D67]">One Career.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Discovery through launch — 10 weeks of structured, African-context product management practice.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6 space-y-4">
                  {[
                    { icon: <Layers className="w-4 h-4" />, label: "5 Core Modules" },
                    { icon: <Clock className="w-4 h-4" />, label: "10 Weeks" },
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
                  Ten weeks of applied PM practice in African market context — not a Silicon Valley playbook adapted for Lagos, but a curriculum built from the ground up for African products.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Target className="w-6 h-6" />, title: "African Case Studies", desc: "All product exercises use real African companies — fintech, logistics, health, and e-commerce — with the context your future employers will recognise." },
                  { icon: <Brain className="w-6 h-6" />, title: "Mock PM Interviews", desc: "Practising PMs run structured mock interviews in week 10 — product sense, analytical, and execution questions in the exact format used by top African companies." },
                  { icon: <Lightbulb className="w-6 h-6" />, title: "12-Month Access", desc: "Your recordings, frameworks, and template library remain accessible for 12 months — your ongoing PM reference as you grow in your role." },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "AI-Integrated Workflow", desc: "We teach ChatGPT as a PM productivity tool — not as a novelty, but as a core part of how the next generation of African PMs will do their best work." },
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
              Africa&apos;s Product Economy<br /><span className="text-[#f9ba48]">Needs You to Lead It</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 920+ product managers who are building Africa&apos;s next generation of great products.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-xl font-[Montserrat] text-sm">
                Apply Now — It&apos;s Easy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Product%20Management%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
                { month: "Aug", year: "2026", fullDate: "Starts August 3, 2026", status: "Filling Fast", statusColor: "#f9ba48", accent: "#f9ba48", spots: "10 seats left", highlight: true },
                { month: "Nov", year: "2026", fullDate: "Starts November 2, 2026", status: "Open", statusColor: "#266D67", accent: "#266D67", spots: "20 seats left", highlight: false },
                { month: "Feb", year: "2027", fullDate: "Starts February 1, 2027", status: "Open", statusColor: "#266D67", accent: "#163d3a", spots: "25 seats left", highlight: false },
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
                  Real PMs.<br /><span className="text-[#266D67]">Real Products.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Graduates who went from zero to PM — building African products users love.</p>
                <div className="space-y-4">
                  {[{ value: "4.8★", label: "Average course rating" }, { value: "920+", label: "PM graduates across Africa" }, { value: "89%", label: "Employed within 5 months" }].map((s) => (
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
                { icon: <Zap className="w-6 h-6" />, title: "Instalment Plan", tag: "Most Popular", tagColor: "#f9ba48", price: "2 payments", sub: "Split at 0% interest", perks: ["60% upfront, 40% at Week 5", "Zero interest, zero fees", "Full access from day one", "Flexible date arrangement"], popular: true, cta: "Get Started" },
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
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20Product%20Management" className="text-[#266D67] font-semibold hover:underline">Contact admissions</a> for full pricing details.
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
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Four straightforward steps between you and your PM career.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", icon: <Search className="w-6 h-6" />, title: "Explore the Programme", desc: "Read through the curriculum, payment options, and cohort dates. Attend a free info session or reach out with any questions." },
                { step: "02", icon: <Briefcase className="w-6 h-6" />, title: "Submit Your Application", desc: "Complete our short application form. No product or tech experience required — just tell us about yourself and your goals." },
                { step: "03", icon: <MessageSquare className="w-6 h-6" />, title: "Talk with Admissions", desc: "A member of our admissions team will reach out within 48 hours to discuss scholarship eligibility and confirm your fit." },
                { step: "04", icon: <GraduationCap className="w-6 h-6" />, title: "Enrol & Secure Your Seat", desc: "Complete your registration, secure your cohort seat, and receive your pre-programme tool setup guide. Day one starts here." },
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
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Everything you need to know about the Product Management programme before applying.</p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our admissions team is happy to help you make the right decision.</p>
                  <a href="mailto:hello@idealnovate.com?subject=Product%20Management%20Question" className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]">Email Admissions</a>
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
              Lead the Products<br /><span className="text-[#f9ba48]">That Shape African Lives</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">Over 920 product managers have started with Idealnovate. Your PM career is ten weeks away.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                Start an Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Product%20Management%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
