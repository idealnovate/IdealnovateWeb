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
  Layers, Search, Brain, Bot,
} from "lucide-react";
import { useState } from "react";

const curriculum = [
  {
    module: "01", title: "AI Agents & Automation Foundations", duration: "Week 1",
    desc: "Understand what AI agents are, how they differ from simple chatbots, and where automated workflows are transforming African businesses — from customer service to back-office operations.",
    topics: ["What is an AI agent? LLMs vs agents vs bots", "The African automation opportunity: real use cases", "ChatGPT and Claude AI for agent-style tasks", "Introduction to Make.com and Zapier interfaces", "Your first automated workflow: trigger → action → result"],
  },
  {
    module: "02", title: "No-Code Automation with Make & Zapier", duration: "Weeks 2–3",
    desc: "Build powerful multi-step automations using Make.com and Zapier — connecting apps, APIs, and AI tools without writing a single line of code. Real workflows, real time savings.",
    topics: ["Make scenarios: modules, routers, and error handling", "Zapier zaps: triggers, filters, and multi-step actions", "Connecting Google Workspace, Notion, Slack, and WhatsApp", "HTTP/webhook modules for custom API connections", "AI steps in Make and Zapier: ChatGPT and Claude integrations"],
  },
  {
    module: "03", title: "Advanced Automation with n8n", duration: "Week 4",
    desc: "Take control with n8n — the open-source automation platform that gives you full flexibility, self-hosting options, and deeper customisation for enterprise-grade workflows.",
    topics: ["n8n setup: cloud and self-hosted options", "Building complex workflows with conditional logic", "Code nodes: JavaScript for custom transformations", "Integrating n8n with databases and external APIs", "AI agent nodes: LLM-powered decision-making in workflows"],
  },
  {
    module: "04", title: "OpenAI API & Custom AI Applications", duration: "Week 5",
    desc: "Write your first API calls to OpenAI and Claude — building custom AI-powered tools, automations, and simple applications that go beyond the interfaces of standard AI products.",
    topics: ["OpenAI API: authentication, models, and endpoints", "Prompt chaining and multi-step API workflows", "Building a custom AI assistant with GPT-4 API", "Claude API via Anthropic: setup and basic usage", "Storing and retrieving context across API calls"],
  },
  {
    module: "05", title: "Capstone: Deploy a Real AI Agent", duration: "Week 6",
    desc: "Design, build, and deploy a complete AI agent or automation system on a real African business problem — a portfolio project that demonstrates production-level capability to employers.",
    topics: ["Agent scoping: problem definition and architecture", "Building the agent: tools, triggers, and AI decision logic", "Testing, debugging, and error-handling production workflows", "Deploying to cloud (Make, Zapier, or n8n hosted)", "Documenting and presenting your agent project"],
  },
];

const testimonials = [
  { name: "Emeka Chukwudi", role: "Automation Engineer @ Paystack", text: "I went from Zapier beginner to building a full AI-powered lead qualification system in week four. This course accelerated my career by at least two years.", rating: 5, avatar: "EC", color: "#266D67" },
  { name: "Adaeze Obi", role: "Operations Manager, Lagos", text: "I automated 40% of my team's manual tasks in the first week back at work. The Make.com skills alone have made me irreplaceable — my company now wants me to automate every department.", rating: 5, avatar: "AO", color: "#f9ba48" },
  { name: "Kweku Mensah", role: "Technical Consultant, Accra", text: "The OpenAI API module gave me the confidence to build custom AI tools for clients. I landed a ₦2M consulting project the month after graduating, directly from skills I learned in week five.", rating: 5, avatar: "KM", color: "#163d3a" },
  { name: "Ngozi Eze", role: "AI Product Developer, Nairobi", text: "n8n changed everything for me. The self-hosting option means I can build enterprise automations for clients without Zapier costs. My freelance revenue tripled in six months.", rating: 5, avatar: "NE", color: "#266D67" },
  { name: "Ibrahim Musa", role: "Automation Specialist, Abuja", text: "The capstone project is genuinely hard — in the best way. I built an AI agent that processes customer enquiries for a retail client and it now handles 200+ daily messages without human involvement.", rating: 5, avatar: "IM", color: "#f9ba48" },
  { name: "Chidi Okonkwo", role: "AI Engineer @ Kuda Bank", text: "The API week unlocked a completely new professional identity. I went from 'I'm not a developer' to 'I build AI-powered tools' — and my salary reflects that shift. Best professional investment I've made.", rating: 5, avatar: "CO", color: "#163d3a" },
];

const faqs = [
  { q: "Do I need coding experience to take this course?", a: "Weeks 1–4 are entirely no-code or low-code — Make, Zapier, and n8n are visual tools. Week 5 introduces the OpenAI API using very basic JavaScript/Python concepts, but we start from scratch. Students with no coding background have successfully completed the API module. Curiosity matters more than experience." },
  { q: "What is the difference between Make, Zapier, and n8n?", a: "Make.com and Zapier are cloud-based no-code automation tools — easy to start with, wide app library, subscription-based. n8n is open-source and can be self-hosted, giving you full control and no per-task fees — ideal for enterprise clients and advanced use cases. We cover all three so you can choose the right tool for each situation." },
  { q: "What is an AI agent and how is it different from ChatGPT?", a: "ChatGPT is a conversational interface — you type, it responds. An AI agent goes further: it takes actions, makes decisions, calls tools and APIs, and completes multi-step tasks autonomously. In this course you build agents that do things — not just agents that say things." },
  { q: "How many hours per week does the course require?", a: "Expect 10–12 hours per week — one live session plus hands-on building time. Automation skills require practice: you must build workflows to understand them. This is the most hands-on course in our curriculum. Most students who struggle are those who watch without building." },
  { q: "What does the capstone project involve?", a: "You scope, build, and deploy a real AI agent or automation system on a genuine African business problem — customer enquiry handling, data processing, report generation, or similar. The project must run in production (not just a demo) and you present it with full documentation to the cohort." },
  { q: "What roles or career paths does this course open?", a: "Automation engineer, AI agent developer, no-code consultant, technical product manager, and AI integration specialist. These are among the fastest-growing roles in Africa's tech industry. Many graduates also build freelance consulting businesses around automation." },
  { q: "Is scholarship funding available?", a: "Yes. We offer an 80% scholarship to qualifying applicants — you pay only 20% as a registration fee. Apply via our scholarship page and our admissions team will review your application within 5 business days." },
  { q: "Can I take this course right after Generative AI for Workplace?", a: "Absolutely — and this is the recommended path. Generative AI for Workplace builds your AI intuition and prompting skills; this course applies those skills to build real systems. Many students take both courses in sequence within the same semester." },
];

export default function AIAgentsPage() {
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
                  <Bot className="w-3 h-3" /> AI Agents &amp; Automation
                </span>
              </div>
              <h1 className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
                Build AI Systems That<br /><span className="text-[#f9ba48]">Work While You Sleep</span>
              </h1>
              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                A 6-week intensive on Make, Zapier, n8n, and the OpenAI API. Build AI agents and automated workflows that run real African businesses — no computer science degree required.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "6 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Job Opportunities", value: "AI & Automation Roles" },
                  { icon: <Star className="w-4 h-4" fill="currentColor" />, label: "Alumni Rating", value: "4.9 / 5 ★" },
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
                <a href="mailto:hello@idealnovate.com?subject=AI%20Agents%20%26%20Automation%20Enquiry" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold text-sm rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat]">
                  <MessageSquare className="w-4 h-4" /> Talk with Admissions
                </a>
                <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all font-[Montserrat]">
                  Start an Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
                <div className="flex -space-x-2">
                  {["EC", "AO", "KM", "NE", "IM"].map((init, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[9px] font-bold text-white" style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>{init}</div>
                  ))}
                </div>
                <p className="text-white/45 text-xs font-[Montserrat]">Joined by <span className="text-white/70 font-semibold">2,840+ automation builders</span> across Africa</p>
              </div>
            </div>
            <div className="hidden lg:flex flex-col justify-center py-12 lg:py-16 px-8 xl:px-12">
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
                <Image src="/IdealTalent1.png" alt="AI Agents and Automation learners at Idealnovate" fill className="object-cover object-top" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,61,58,0.4) 0%, transparent 35%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.55) 0%, transparent 40%)" }} />
                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]"><Award className="w-5 h-5" /></div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">4.9★</p>
                      <p className="text-gray-400 text-xs font-[Montserrat]">Top-rated AI course</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Core Stack</p>
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-[#f9ba48]" />
                    <span className="text-white font-bold text-sm font-[Montserrat]">Make + n8n + API</span>
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
                <Bot className="w-3.5 h-3.5" /> Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                The Automation Course<br /><span className="text-[#266D67]">Built for Africa&apos;s AI Era</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                Not theory about AI agents. Six weeks of building real automations that run real African business processes.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Bot className="w-7 h-7" />, title: "Three Platforms in One Course", desc: "Make.com, Zapier, and n8n — you learn all three so you can choose the right tool for every client, budget, and use case. Most courses teach only one.", color: "#f9ba48" },
                { icon: <Brain className="w-7 h-7" />, title: "OpenAI API Access", desc: "Week 5 moves beyond interfaces into the API layer — building custom AI tools that go further than any consumer product. A genuine technical differentiator.", color: "#266D67" },
                { icon: <Target className="w-7 h-7" />, title: "Production Capstone", desc: "Your capstone runs in production — not a demo. You build a real AI agent that processes real data, and present it to the cohort with full documentation.", color: "#163d3a" },
                { icon: <TrendingUp className="w-7 h-7" />, title: "Africa's Fastest-Growing Role", desc: "Automation engineers and AI agent developers are the most in-demand technical roles in Nigeria, Kenya, and Ghana right now. This course is built for that market.", color: "#f9ba48" },
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
                Platforms You&apos;ll <span className="text-[#f9ba48]">Master</span>
              </h2>
              <p className="text-white/45 font-[Montserrat] text-lg max-w-lg mx-auto leading-relaxed">
                The complete AI agent and automation stack — from no-code to API-level development.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "ChatGPT", tagline: "AI Task Execution", glow: "rgba(16,163,127,0.5)", iconBg: "linear-gradient(145deg, #0a4a3a 0%, #10A37F 100%)", accent: "#10A37F", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><path d="M19 5C11.27 5 5 11.27 5 19c0 2.22.57 4.31 1.57 6.13L5 33l7.87-1.57A13.93 13.93 0 0019 33c7.73 0 14-6.27 14-14S26.73 5 19 5z" stroke="white" strokeWidth="2.5" fill="none"/><circle cx="13" cy="19" r="1.5" fill="white"/><circle cx="19" cy="19" r="1.5" fill="white"/><circle cx="25" cy="19" r="1.5" fill="white"/></svg> },
                { name: "Claude AI", tagline: "Intelligent Reasoning", glow: "rgba(200,100,80,0.5)", iconBg: "linear-gradient(145deg, #5a1a0a 0%, #C8643C 100%)", accent: "#C8643C", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><path d="M19 6C12 6 7 11.5 7 18c0 3.5 1.5 6.5 4 8.5L9 33l6-2.5c1.2.4 2.6.5 4 .5 7 0 12-5.5 12-13S26 6 19 6z" stroke="white" strokeWidth="2" fill="none"/><path d="M14 18h10M14 22h7" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg> },
                { name: "Make.com", tagline: "Visual Automation", glow: "rgba(106,17,203,0.5)", iconBg: "linear-gradient(145deg, #2d0060 0%, #6A11CB 100%)", accent: "#6A11CB", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><circle cx="7" cy="19" r="4" stroke="white" strokeWidth="2" fill="none"/><circle cx="31" cy="19" r="4" stroke="white" strokeWidth="2" fill="none"/><circle cx="19" cy="7" r="4" stroke="white" strokeWidth="2" fill="none"/><circle cx="19" cy="31" r="4" stroke="white" strokeWidth="2" fill="none"/><line x1="11" y1="19" x2="27" y2="19" stroke="white" strokeWidth="1.5"/><line x1="19" y1="11" x2="19" y2="27" stroke="white" strokeWidth="1.5"/></svg> },
                { name: "Zapier", tagline: "App Integration", glow: "rgba(255,74,22,0.5)", iconBg: "linear-gradient(145deg, #7a1000 0%, #FF4A16 100%)", accent: "#FF4A16", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><path d="M19 5l5 9H24l3 8H23l4 11-16-14h7L12 8h7z" fill="white" fillOpacity="0.9"/></svg> },
                { name: "n8n", tagline: "Self-Hosted Automation", glow: "rgba(234,92,0,0.5)", iconBg: "linear-gradient(145deg, #5a2000 0%, #EA5C00 100%)", accent: "#EA5C00", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="5" y="15" width="8" height="8" rx="2" stroke="white" strokeWidth="2" fill="none"/><rect x="25" y="15" width="8" height="8" rx="2" stroke="white" strokeWidth="2" fill="none"/><rect x="15" y="5" width="8" height="8" rx="2" stroke="white" strokeWidth="2" fill="none"/><rect x="15" y="25" width="8" height="8" rx="2" stroke="white" strokeWidth="2" fill="none"/><line x1="13" y1="19" x2="25" y2="19" stroke="white" strokeWidth="1.5"/><line x1="19" y1="13" x2="19" y2="25" stroke="white" strokeWidth="1.5"/></svg> },
                { name: "OpenAI API", tagline: "Custom AI Development", glow: "rgba(16,163,127,0.45)", iconBg: "linear-gradient(145deg, #0a2a20 0%, #0D7B5C 100%)", accent: "#0D7B5C", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><circle cx="19" cy="19" r="12" stroke="white" strokeWidth="2" fill="none"/><path d="M14 14l10 5-10 5V14z" fill="white" fillOpacity="0.9"/></svg> },
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
            <p className="text-center text-white/25 text-xs font-[Montserrat] mt-10">All platforms introduced progressively across 5 modules — beginners welcome, builders leave ready for production.</p>
          </div>
        </section>

        {/* ── 4. WHERE ALUMNI WORK ── */}
        <section className="py-14 bg-[#f4f9f8] border-y border-[#e2efee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Where our alumni work</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Paystack", color: "#011B33" }, { name: "Flutterwave", color: "#f5a623" },
                { name: "Kuda Bank", color: "#7c3aed" }, { name: "Andela", color: "#0d6efd" },
                { name: "Moniepoint", color: "#4f46e5" }, { name: "PiggyVest", color: "#1faa00" },
                { name: "Carbon", color: "#00b67a" }, { name: "TeamApt", color: "#2563eb" },
                { name: "Interswitch", color: "#e02020" }, { name: "OPay", color: "#34d186" },
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
                    Builders Teaching<br /><span className="text-[#f9ba48]">Builders</span>
                  </h2>
                  <p className="text-white/65 font-[Montserrat] text-base leading-relaxed mb-8">
                    Every instructor actively builds and deploys AI agents and automation systems in production — at fintechs, tech companies, and for consulting clients across Africa.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {["Weekly live build sessions with production automation engineers", "Debugging help desk for Make, Zapier, n8n, and API issues", "Code review and architecture feedback on your capstone agent", "Alumni community for ongoing support and opportunity sharing"].map((item) => (
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
                <Image src="/IdealTeam.png" alt="Idealnovate AI automation instructors" fill className="object-cover object-center" />
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
                  5 Modules.<br /><span className="text-[#266D67]">Real Agents.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  From first automation to a production AI agent — in 6 weeks of intensive, hands-on building.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6 space-y-4">
                  {[
                    { icon: <Layers className="w-4 h-4" />, label: "5 Core Modules" },
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
                  Six weeks of hands-on building — not talking about automation, but actually building the systems that run African businesses.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Bot className="w-6 h-6" />, title: "Three Platforms Covered", desc: "Make, Zapier, and n8n — you leave knowing all three and when to use each. Most courses cover only one platform and leave you exposed to every other situation." },
                  { icon: <Brain className="w-6 h-6" />, title: "Live Agent Reviews", desc: "Senior automation engineers review and critique your workflows live in cohort — the same architecture review culture used at leading tech companies." },
                  { icon: <Target className="w-6 h-6" />, title: "12-Month Access", desc: "Your recordings, workflow templates, and resource library remain accessible for 12 months — the automation landscape changes fast and you stay current." },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "API-Level Skills", desc: "You leave this course able to call the OpenAI and Claude APIs directly — opening consulting and development opportunities beyond no-code tools." },
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
              Africa&apos;s Automation Economy<br /><span className="text-[#f9ba48]">Needs Builders. Be One.</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 2,840+ automation graduates who are building the AI-powered future of African business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-xl font-[Montserrat] text-sm">
                Apply Now — It&apos;s Easy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=AI%20Agents%20%26%20Automation%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
                { month: "Jul", year: "2026", fullDate: "Starts July 6, 2026", status: "Filling Fast", statusColor: "#f9ba48", accent: "#f9ba48", spots: "8 seats left", highlight: true },
                { month: "Oct", year: "2026", fullDate: "Starts October 5, 2026", status: "Open", statusColor: "#266D67", accent: "#266D67", spots: "20 seats left", highlight: false },
                { month: "Jan", year: "2027", fullDate: "Starts January 11, 2027", status: "Open", statusColor: "#266D67", accent: "#163d3a", spots: "30 seats left", highlight: false },
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
                  Real Builders.<br /><span className="text-[#266D67]">Real Systems.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Graduates who went from zero to production AI agents — in six weeks.</p>
                <div className="space-y-4">
                  {[{ value: "4.9★", label: "Average course rating" }, { value: "2,840+", label: "Automation graduates across Africa" }, { value: "93%", label: "Employed or consulting within 4 months" }].map((s) => (
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
                { icon: <Zap className="w-6 h-6" />, title: "Instalment Plan", tag: "Most Popular", tagColor: "#f9ba48", price: "2 payments", sub: "Split at 0% interest", perks: ["60% upfront, 40% at Week 3", "Zero interest, zero fees", "Full access from day one", "Flexible date arrangement"], popular: true, cta: "Get Started" },
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
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20AI%20Agents%20%26%20Automation" className="text-[#266D67] font-semibold hover:underline">Contact admissions</a> for full pricing details.
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
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Four straightforward steps between you and your AI automation career.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", icon: <Search className="w-6 h-6" />, title: "Explore the Programme", desc: "Read through the curriculum, payment options, and cohort dates. Attend a free info session or reach out with any questions." },
                { step: "02", icon: <Briefcase className="w-6 h-6" />, title: "Submit Your Application", desc: "Complete our short application form. No coding experience required — curiosity and a willingness to build are the only prerequisites." },
                { step: "03", icon: <MessageSquare className="w-6 h-6" />, title: "Talk with Admissions", desc: "A member of our admissions team will reach out within 48 hours to discuss scholarship eligibility and confirm your fit." },
                { step: "04", icon: <GraduationCap className="w-6 h-6" />, title: "Enrol & Secure Your Seat", desc: "Complete your registration, secure your cohort seat, and receive your pre-programme tool setup guide. Building starts day one." },
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
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Everything you need to know about the AI Agents &amp; Automation course before applying.</p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our admissions team is happy to help you make the right decision.</p>
                  <a href="mailto:hello@idealnovate.com?subject=AI%20Agents%20%26%20Automation%20Question" className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]">Email Admissions</a>
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
              Build the AI Agents<br /><span className="text-[#f9ba48]">Africa&apos;s Economy Needs</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">Over 2,840 automation engineers have taken this step. Your production AI agent is six weeks away.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                Start an Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=AI%20Agents%20%26%20Automation%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
