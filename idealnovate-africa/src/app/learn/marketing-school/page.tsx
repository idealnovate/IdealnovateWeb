"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight, Star, Users, Clock, CheckCircle, ChevronDown,
  Megaphone, Globe, BarChart3, Cpu, Zap, BookOpen, Award,
  Target, TrendingUp, Layers, Monitor, MessageSquare,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "2,560+", label: "Students Enrolled" },
  { value: "4.7★",   label: "Average Rating" },
  { value: "8 Wks",  label: "Flagship Duration" },
  { value: "89%",    label: "Job Placement Rate" },
];

const whyItems = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Revenue-First Curriculum",
    desc: "Every module is tied to real business outcomes — leads, conversions, and growth. We don't teach marketing theory; we teach what drives results.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Full Platform Coverage",
    desc: "Become proficient across Meta Ads, Google Ads, TikTok, email marketing, and SEO — the complete channel mix every employer and client wants.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "AI-Powered Marketing",
    desc: "Use ChatGPT and AI writing tools to produce, optimise, and scale campaigns faster than ever — without compromising brand voice or quality.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Live Campaign Experience",
    desc: "Don't just study theory — run real ads, manage real budgets, and analyse live performance data during the programme with mentor supervision.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Mentorship From Growth Practitioners",
    desc: "Learn from marketers managing multi-million naira ad budgets at agencies and brands — people who have solved the exact problems you'll face.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Portfolio of Real Campaign Results",
    desc: "Graduate with documented campaign case studies, ROAS reports, and content performance data — evidence employers can actually evaluate.",
  },
];

const tools = [
  { name: "Meta Ads",   icon: <Megaphone className="w-4 h-4" /> },
  { name: "Google Ads", icon: <Globe className="w-4 h-4" /> },
  { name: "TikTok",     icon: <Zap className="w-4 h-4" /> },
  { name: "Canva",      icon: <Monitor className="w-4 h-4" /> },
  { name: "Mailchimp",  icon: <Target className="w-4 h-4" /> },
  { name: "ChatGPT",    icon: <Cpu className="w-4 h-4" /> },
  { name: "GA4",        icon: <BarChart3 className="w-4 h-4" /> },
];

const programmes = [
  {
    id: 1,
    icon: <Megaphone className="w-6 h-6" />,
    tag: "Marketing School",
    tagColor: "#163d3a",
    title: "Digital Advertising & Media Buying",
    description: "Run high-performing paid ad campaigns across Meta, Google, and TikTok. Learn targeting, budgeting, and optimisation strategies that convert at scale.",
    duration: "3 Weeks",
    students: "2,260",
    rating: "4.7",
    level: "Beginner",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/marketing-school/digital-advertising",
    color: "#163d3a",
  },
  {
    id: 2,
    icon: <Cpu className="w-6 h-6" />,
    tag: "Marketing School",
    tagColor: "#163d3a",
    title: "Content Marketing Strategy with AI",
    description: "Build and execute a content strategy that attracts, nurtures, and converts audiences — supercharged with AI tools for creation and distribution.",
    duration: "6 Weeks",
    students: "940",
    rating: "4.9",
    level: "Beginner–Intermediate",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/marketing-school/content-marketing",
    color: "#266D67",
  },
];

const testimonials = [
  {
    name: "Blessing Okafor",
    role: "Growth Marketer @ PiggyVest",
    text: "Before Idealnovate, I was boosting posts and hoping for results. After the Digital Advertising course, I understand targeting, bidding, and optimisation deeply. My first real campaign hit 8× ROAS.",
    rating: 5,
    avatar: "BO",
    color: "#266D67",
  },
  {
    name: "Taiwo Adebayo",
    role: "Media Buyer @ MediaCraft Agency",
    text: "I now manage ₦15M+ in monthly ad spend across four industries. The Media Buying programme gave me the frameworks, and the mentors gave me the confidence to operate at this scale.",
    rating: 5,
    avatar: "TA",
    color: "#163d3a",
  },
  {
    name: "Yaa Asante",
    role: "Content Strategist @ Paystack",
    text: "The AI-powered content course completely transformed how I approach strategy. I'm producing three times the volume in half the time — and the quality is measurably better.",
    rating: 5,
    avatar: "YA",
    color: "#f9ba48",
  },
  {
    name: "Emeka Eze",
    role: "Digital Marketing Manager @ Moniepoint",
    text: "What I loved most is that I was running live campaigns during the programme. By graduation, I already had documented results to show in interviews — not just a certificate.",
    rating: 5,
    avatar: "EE",
    color: "#266D67",
  },
  {
    name: "Adeola Fashola",
    role: "Performance Marketer @ Stears",
    text: "I applied for the scholarship, got accepted, completed the course, and landed a job offer — all within 5 months. The return on this programme has been extraordinary.",
    rating: 5,
    avatar: "AF",
    color: "#163d3a",
  },
  {
    name: "Kwame Mensah",
    role: "Brand & Growth Lead @ Zeepay, Ghana",
    text: "Idealnovate connected me with a mentor who had run campaigns in 6 African markets. That regional context was invaluable and completely unpacked nuances I couldn't find anywhere else.",
    rating: 5,
    avatar: "KM",
    color: "#f9ba48",
  },
];

const roadmap = [
  {
    level: "01",
    badge: "Beginner",
    subtitle: "Start from Zero",
    title: "Elementary Diploma",
    description: "Perfect for complete beginners. Build your digital marketing foundations with hands-on lessons designed to fast-track your confidence.",
    duration: "2–4 Weeks",
    modules: "6 Modules",
    students: "28,753+ enrolled",
    icon: <BookOpen className="w-7 h-7" />,
    popular: false,
    features: [
      "No prior marketing experience needed",
      "Digital marketing fundamentals",
      "Platform orientation (Meta, Google, TikTok)",
      "3 beginner campaign projects",
    ],
    href: "/learn/marketing-school/digital-advertising",
  },
  {
    level: "02",
    badge: "Most Popular",
    subtitle: "Go Professional",
    title: "Diploma",
    description: "Level up with live ad campaign management, analytics mastery, and AI-powered content — gain the skills brands are actively hiring for.",
    duration: "10–12 Weeks",
    modules: "12 Modules",
    students: "4,137+ enrolled",
    icon: <Layers className="w-7 h-7" />,
    popular: true,
    features: [
      "Full-stack paid advertising",
      "Live campaign management & reporting",
      "Analytics & ROI optimisation",
      "1-on-1 growth mentor sessions",
    ],
    href: "/learn/marketing-school/digital-advertising",
  },
  {
    level: "03",
    badge: "Expert",
    subtitle: "Become a Growth Leader",
    title: "Masterclass",
    description: "An elite programme for marketers ready to lead — advanced strategy, agency management, and AI-powered growth at scale.",
    duration: "2–4 Weeks",
    modules: "6 Modules",
    students: "900+ enrolled",
    icon: <Zap className="w-7 h-7" />,
    popular: false,
    features: [
      "Advanced media buying & growth strategy",
      "Agency & client management",
      "AI-powered content at scale",
      "Campaign portfolio with real results",
    ],
    href: "/learn/marketing-school/digital-advertising",
  },
];

const faqs = [
  {
    q: "Do I need prior marketing experience to join Digital Advertising?",
    a: "No experience is needed. The Digital Advertising & Media Buying programme starts from the absolute basics of how paid ads work and builds up systematically. All you need is a laptop, internet access, and the motivation to learn.",
  },
  {
    q: "Will I run real ad campaigns during the programme?",
    a: "Yes — that's a core part of the experience. Under mentor supervision, you'll set up and run real campaigns (with a test budget), analyse the results, and iterate. By the end, you'll have live campaign data in your portfolio.",
  },
  {
    q: "How is Content Marketing Strategy with AI different from a standard content course?",
    a: "Traditional content courses teach writing and planning. Ours goes further — you'll also learn how to use AI tools to produce content at scale, analyse performance data, and build a distribution strategy that compounds over time.",
  },
  {
    q: "What ad platforms will I learn to advertise on?",
    a: "The Digital Advertising programme covers Meta (Facebook & Instagram Ads), Google Ads (Search and Display), and TikTok Ads. You'll also learn cross-platform attribution and how to allocate budget across channels for maximum ROI.",
  },
  {
    q: "How long is the Digital Advertising & Media Buying programme?",
    a: "The core programme runs for 3 weeks of intensive learning, designed to fit around a working schedule of 1–2 hours per day. Diploma-level learners will have extended access to advanced modules and live cohort sessions.",
  },
  {
    q: "Can I apply for a scholarship to cover the programme cost?",
    a: "Yes. We offer full and partial scholarships to qualifying applicants. Visit our Scholarship page and complete the short application form. Our admissions team reviews applications within 5 business days.",
  },
  {
    q: "What roles do Marketing School graduates typically land?",
    a: "Graduates go on to roles including Digital Marketing Manager, Media Buyer, Growth Marketer, Performance Marketing Analyst, Content Strategist, and Social Media Manager — across brands, agencies, and startups across Africa.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MarketingSchoolPage() {
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
                <Megaphone className="w-3.5 h-3.5" />
                Idealnovate · Marketing School
              </div>

              <h1 className="font-[Montserrat] font-bold text-white leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
                Digital Marketing.<br />
                <span className="text-[#f9ba48]">Real World Results.</span>
              </h1>

              <p className="font-[Montserrat] text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                From paid advertising to AI-driven content strategy — learn the growth skills that make businesses scale and careers thrive across Africa.
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
                  {["BO","TA","YA","EE","AF"].map((init, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>{init}</div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-[#f9ba48]" fill="currentColor" />)}
                    <span className="text-white font-bold text-xs ml-1 font-[Montserrat]">4.7</span>
                  </div>
                  <p className="text-white/40 text-xs font-[Montserrat]">Trusted by 2,560+ marketing students</p>
                </div>
              </div>

              {/* Top programmes mini cards — 2 programmes */}
              <div className="grid grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                {[
                  { icon: <Megaphone className="w-4 h-4" />, title: "Digital Advertising & Media Buying", students: "2,260", rating: "4.7", weeks: "3 Wks", color: "#163d3a", hot: true, href: "/learn/marketing-school/digital-advertising" },
                  { icon: <Cpu className="w-4 h-4" />, title: "Content Marketing Strategy with AI", students: "940", rating: "4.9", weeks: "6 Wks", color: "#266D67", hot: true, href: "/learn/marketing-school/content-marketing" },
                ].map((p) => (
                  <Link key={p.title} href={p.href} className="bg-white/6 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:bg-white/10 hover:border-white/20 transition-all duration-200">
                    <div className="h-1 w-full" style={{ background: p.color }} />
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0" style={{ background: p.color }}>
                          {p.icon}
                        </div>
                        {p.hot && <span className="text-[#f9ba48] text-[10px] font-bold font-[Montserrat]">🔥 Hot</span>}
                      </div>
                      <p className="text-white font-bold text-sm font-[Montserrat] leading-snug mb-4 flex-1">{p.title}</p>
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
              Platforms you&apos;ll master
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
            2. MARKETING SKILLS THAT MOVE THE MARKET
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-10 mb-10">

              <div className="relative rounded-3xl overflow-hidden min-h-[420px] lg:min-h-0">
                <Image src="/IdealTalent5.png" alt="Marketing School learners" fill className="object-cover object-center" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.92) 0%, rgba(22,61,58,0.35) 45%, transparent 75%)" }} />
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-[#f9ba48] text-xs font-bold font-[Montserrat] mb-4">
                    <TrendingUp className="w-3 h-3" />
                    Why Marketing School
                  </span>
                  <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-3"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                    Marketing Skills That<br />
                    <span className="text-[#f9ba48]">Move the Market</span>
                  </h2>
                  <p className="text-white/65 text-sm font-[Montserrat] leading-relaxed max-w-xs">
                    We don&apos;t just teach platforms — we build marketers who understand people, data, and what actually drives growth.
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
                  { value: "12×", label: "Average client ROI", sub: "Tracked by our graduates", icon: <TrendingUp className="w-5 h-5" /> },
                  { value: "89%", label: "Job placement rate", sub: "Within 6 months of graduation", icon: <Award className="w-5 h-5" /> },
                  { value: "₦250k+", label: "Entry-level marketer salary", sub: "Digital roles in Nigeria", icon: <Zap className="w-5 h-5" /> },
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
                <Megaphone className="w-3.5 h-3.5" />
                Marketing School Programmes
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Start with Clicks.
                <br />
                <span className="text-[#266D67]">End Up Driving Growth.</span>
              </h2>
              <p className="mt-5 text-gray-500 text-lg font-[Montserrat] font-light leading-relaxed">
                Both programmes are designed for beginners — no prior marketing experience is needed to get started.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

            {/* More coming soon notice */}
            <div className="mt-8 text-center py-8 border border-dashed border-[#e2efee] rounded-2xl bg-[#f4f9f8]">
              <p className="font-[Montserrat] font-semibold text-[#163d3a] text-sm mb-1">More programmes coming soon</p>
              <p className="text-gray-400 text-xs font-[Montserrat]">SEO Strategy, Email Marketing Mastery, Social Media Growth, and more — currently in development.</p>
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
                  <span className="text-[#266D67]"> Real Marketers</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Our students don&apos;t just learn platforms — they run campaigns, grow brands, and build profitable careers across Africa.
                </p>
                <div className="space-y-4">
                  {[
                    { value: "4.7★", label: "Average programme rating" },
                    { value: "2,560+", label: "Graduates across Africa" },
                    { value: "89%", label: "Employed within 6 months" },
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
                Whether you&apos;re new to marketing or scaling into leadership, we have a structured path that meets you exactly where you are.
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
                  Ready to Launch Your<br />
                  <span className="text-[#f9ba48]">Marketing Career?</span>
                </h2>
                <p className="font-[Montserrat] text-white/60 text-lg mb-8 max-w-md">
                  Join 2,560+ marketers who built their careers through Idealnovate. Scholarships available — you may qualify to start for free.
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
                    "Structured digital marketing curriculum",
                    "Live ad campaign management experience",
                    "Mentorship from experienced growth marketers",
                    "Training on Meta, Google, TikTok & AI tools",
                    "Portfolio of real campaign case studies",
                    "Career coaching & LinkedIn profile optimisation",
                    "Certified Marketing diploma on completion",
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
                  Answers to the most common questions from aspiring digital marketers.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our advisors are ready to help you choose the right marketing programme.</p>
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
