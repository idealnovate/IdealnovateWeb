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
  Layers, Search, BarChart, Megaphone,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const curriculum = [
  {
    module: "01",
    title: "How Paid Advertising Works",
    desc: "Understand the fundamentals of paid media — from ad auctions and bidding mechanics to the buyer journey and how each platform fits. Build the mental model every effective media buyer needs before spending a single naira.",
    topics: [
      "The paid media ecosystem — Meta, Google & TikTok",
      "Ad auctions, bidding & quality scores explained",
      "The buyer journey — awareness to conversion",
      "Setting up business accounts & ad accounts correctly",
    ],
    duration: "Week 1",
  },
  {
    module: "02",
    title: "Meta Ads — Facebook & Instagram Fundamentals",
    desc: "Master the Meta advertising ecosystem. Learn to create campaigns, choose the right objectives, and build audiences that actually match your client's ideal customer.",
    topics: [
      "Meta Ads Manager interface & campaign structure",
      "Campaign objectives — traffic, leads, conversions",
      "Audience building — interests, demographics & lookalikes",
      "Ad creatives — images, carousels & video formats",
    ],
    duration: "Week 2",
  },
  {
    module: "03",
    title: "Meta Ads — Advanced Targeting & Retargeting",
    desc: "Go beyond basic targeting. Learn custom audiences, retargeting, and the Pixel — the tools that separate amateur campaigns from ones that generate consistent, scalable returns.",
    topics: [
      "Meta Pixel setup & event tracking",
      "Custom audiences — website visitors, customer lists",
      "Retargeting campaigns & funnel sequencing",
      "Lookalike audiences & audience expansion strategies",
    ],
    duration: "Week 3",
  },
  {
    module: "04",
    title: "Google Ads — Search & Display",
    desc: "Master intent-based advertising. Build Google Search campaigns that capture buyers at the moment they're ready to act, and Display campaigns that keep your brand front of mind across the web.",
    topics: [
      "Google Ads interface & account structure",
      "Keyword research — match types & negative keywords",
      "Writing high-converting search ad copy",
      "Display Network — targeting, placements & banner ads",
    ],
    duration: "Week 4",
  },
  {
    module: "05",
    title: "TikTok Ads — Africa's Fastest-Growing Ad Platform",
    desc: "Unlock TikTok's advertising ecosystem — one of the fastest-growing platforms in Africa with some of the lowest CPMs available. Learn to build creative-first campaigns that drive awareness and conversions for African brands.",
    topics: [
      "TikTok Ads Manager setup & campaign structure",
      "TikTok ad formats — TopView, In-Feed & Spark Ads",
      "Creative strategy for TikTok — native vs branded content",
      "TikTok audience targeting & the TikTok Pixel",
    ],
    duration: "Week 5",
  },
  {
    module: "06",
    title: "Ad Creative Strategy & Copywriting",
    desc: "Great targeting with weak creative equals poor results. Learn to brief, create, and test ad creatives — copy, visuals, and video hooks — that stop the scroll and drive the action.",
    topics: [
      "The anatomy of a high-converting ad creative",
      "Writing ad copy — hooks, value props & CTAs",
      "Video ad scripts — first-3-seconds strategy",
      "Creative testing frameworks — A/B and multivariate",
    ],
    duration: "Week 6",
  },
  {
    module: "07",
    title: "Analytics, Reporting & Campaign Optimisation",
    desc: "Learn to read the data and act on it. Master the key metrics across every platform — ROAS, CPM, CPC, CTR, CVR — and build optimisation workflows that compound performance over time.",
    topics: [
      "Understanding ROAS, CPA, CPM, CTR & CVR",
      "Platform analytics deep-dive — Meta & Google",
      "Building client-ready performance reports",
      "Campaign optimisation — scaling winners, cutting losers",
    ],
    duration: "Week 7",
  },
  {
    module: "08",
    title: "Media Buying Strategy, Client Management & Freelancing",
    desc: "Turn your technical skills into a media buying business. Learn to manage client ad budgets, structure agency retainers, price your services, and build a freelance media buying practice that grows.",
    topics: [
      "Client onboarding — briefs, accounts & access",
      "Monthly retainer structures for media buyers",
      "Pricing your media buying services in Africa",
      "Building a portfolio with real campaign results",
    ],
    duration: "Week 8",
  },
];

const testimonials = [
  {
    name: "Blessing Okafor",
    role: "Growth Marketer @ PiggyVest (Lagos)",
    text: "Before this diploma, I was boosting posts and hoping for results. After it, I understand targeting, bidding, and optimisation deeply. My first real campaign hit 8× ROAS. I've never looked at advertising the same way again.",
    rating: 5,
    avatar: "BO",
    bg: "linear-gradient(135deg, #26aaa599 0%, #266D67 100%)",
  },
  {
    name: "Abena Asare",
    role: "Freelance Media Buyer (Accra)",
    text: "I manage ad budgets for three clients now — one of them is a major Ghanaian fashion brand. The retargeting module alone tripled their conversion rate. I charge a management fee plus a performance bonus. Best career decision I've ever made.",
    rating: 5,
    avatar: "AA",
    bg: "linear-gradient(135deg, #f9ba4899 0%, #f9ba48 100%)",
  },
  {
    name: "Emeka Obi",
    role: "Head of Performance Marketing @ Flutterwave",
    text: "The Google Ads module is genuinely comprehensive. Keyword match types, Quality Score, negative keyword strategy — concepts that took me two years to learn on the job were covered in one week with the precision I wish I'd had at the start.",
    rating: 5,
    avatar: "EO",
    bg: "linear-gradient(135deg, #163d3a99 0%, #163d3a 100%)",
  },
  {
    name: "Nkechi Eze",
    role: "Digital Marketing Manager @ Stanbic IBTC",
    text: "The TikTok module was revelatory. I hadn't considered TikTok Ads for our financial services brand, but the creative strategy framework they teach helped us run a campaign that got 4.2M impressions at ₦0.8 CPM. Unheard of on other platforms.",
    rating: 4,
    avatar: "NE",
    bg: "linear-gradient(135deg, #26aaa599 0%, #266D67 100%)",
  },
  {
    name: "Kofi Darko",
    role: "Founder, Clicks Agency (Kumasi)",
    text: "I started my media buying agency three months after completing this diploma. We now manage over ₦15M in monthly ad spend across four clients. The module on pricing retainers and managing client expectations saved me from every mistake agencies usually make early on.",
    rating: 5,
    avatar: "KD",
    bg: "linear-gradient(135deg, #163d3a99 0%, #163d3a 100%)",
  },
  {
    name: "Yewande Adeyemi",
    role: "Performance Marketer @ Jumia Nigeria",
    text: "What I appreciate most is how practical this programme is. You don't just learn concepts — you run campaigns with real money and real data. By the time I applied for my role at Jumia, I had actual campaign results in my portfolio. That's what got me the interview.",
    rating: 5,
    avatar: "YA",
    bg: "linear-gradient(135deg, #f9ba4899 0%, #f9ba48 100%)",
  },
];

const faqs = [
  {
    q: "Do I need prior marketing experience to join?",
    a: "No experience is needed. The programme starts from the absolute basics of how paid advertising works and builds systematically from there. All you need is a laptop, internet access, and the motivation to learn. If you've never run an ad in your life, you are in the right place.",
  },
  {
    q: "Will I actually run real ad campaigns during the programme?",
    a: "Yes — this is a core part of the experience. Under mentor supervision, you'll set up and run real campaigns (with a small test budget), analyse the results in real-time, and iterate based on actual data. By graduation you'll have live campaign results in your portfolio — not just theoretical knowledge.",
  },
  {
    q: "What ad platforms does this programme cover?",
    a: "The programme covers Meta Ads (Facebook & Instagram), Google Ads (Search and Display), and TikTok Ads Manager. You'll also learn cross-platform attribution and how to allocate budget across channels for maximum ROAS.",
  },
  {
    q: "How much money do I need to run campaigns during the programme?",
    a: "A modest test budget of ₦5,000–₦20,000 is recommended for the campaign exercises. This is enough to generate meaningful data and learn optimisation. You will not be required to run campaigns at scale — the goal is learning, not spending.",
  },
  {
    q: "Is media buying a profitable career in Africa?",
    a: "Extremely. Performance marketers and media buyers are among the highest-paid digital professionals in Africa. Freelance media buyers managing client accounts typically charge 10–15% of monthly ad spend as a management fee — so managing ₦5M/month in ad spend generates ₦500k–₦750k/month in fees. Salaried roles at growth companies start at ₦300k–₦600k/month.",
  },
  {
    q: "How are classes delivered — live or recorded?",
    a: "All sessions are delivered live (minimum 2 sessions per week, up to 2 hours each) with all classes recorded so you can review at your own pace. Diploma students get 1-on-1 mentor check-ins and live campaign review sessions where you present your campaign data and receive direct feedback.",
  },
  {
    q: "Is scholarship funding available?",
    a: "Yes. We offer an 80% scholarship to qualifying applicants — meaning you pay only 20% as a registration fee to secure your seat. Apply through our Scholarship page and our admissions team will review your application within 5 business days.",
  },
  {
    q: "What certificate do I receive on completion?",
    a: "You receive an Idealnovate Professional Certificate in Digital Advertising & Media Buying — a digitally verifiable credential with a LinkedIn-ready digital badge. The certificate is recognised by 48+ hiring partners across Africa and internationally.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DigitalAdvertisingPage() {
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
                <Link href="/learn/marketing-school" className="text-white/40 hover:text-white/60 transition-colors text-xs font-[Montserrat]">Marketing School</Link>
                <span className="text-white/25">/</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#f9ba48]/15 border border-[#f9ba48]/30 rounded-full text-[#f9ba48] text-xs font-bold font-[Montserrat]">
                  <Megaphone className="w-3 h-3" />
                  Digital Advertising Diploma
                </span>
              </div>

              <h1 className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
                Run Ads That<br />
                <span className="text-[#f9ba48]">Actually Convert.</span>
              </h1>

              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Master Meta, Google, and TikTok advertising — and build campaigns that generate real revenue for real businesses across Africa and beyond.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "8 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Career Paths", value: "Freelance & Employment" },
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
                <a href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Digital%20Advertising%20Diploma" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold text-sm rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat]">
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
                  {["BO", "AA", "EO", "NE", "KD"].map((init, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[9px] font-bold text-white" style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>
                      {init}
                    </div>
                  ))}
                </div>
                <p className="text-white/45 text-xs font-[Montserrat]">
                  Joined by <span className="text-white/70 font-semibold">2,260+ marketers</span> across Africa
                </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-center py-12 lg:py-16 px-8 xl:px-12">
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
                <Image src="/IdealTalent5.png" alt="Digital Advertising learners at Idealnovate" fill className="object-cover object-center" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,61,58,0.4) 0%, transparent 35%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.55) 0%, transparent 40%)" }} />

                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">8×</p>
                      <p className="text-gray-400 text-xs font-[Montserrat]">Average ROAS our grads achieve</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Primary Platform</p>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                      <circle cx="8" cy="8" r="6.5" fill="#1877F2"/>
                      <path d="M9 5.5H10V4h-1.2C7.3 4 6.5 4.8 6.5 6.2V7H5v1.5h1.5V12h1.5V8.5h1.5L9.8 7H8V6.2c0-.4.2-.7.6-.7H9V5.5z" fill="white"/>
                    </svg>
                    <span className="text-white font-bold text-sm font-[Montserrat]">Meta Ads</span>
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
                <Megaphone className="w-3.5 h-3.5" />
                Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                The Fastest Path to<br />
                <span className="text-[#266D67]">High-Performance Media Buying</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                Digital advertising is the most measurable, scalable, and lucrative marketing skill available today — and Africa&apos;s digital ad market is growing faster than any other region on earth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <BarChart className="w-7 h-7" />, title: "Three Platforms in One Diploma", desc: "Meta, Google, and TikTok — the three largest digital advertising platforms in Africa. You graduate proficient in all three, which means you can serve any client on any platform and never have to turn work away.", color: "#163d3a" },
                { icon: <TrendingUp className="w-7 h-7" />, title: "Premium Media Buyer Income", desc: "Freelance media buyers in Africa managing ₦5M/month in ad spend charge ₦500k–₦750k/month in management fees. Salaried performance marketers earn ₦300k–₦600k/month at growth companies. Few digital skills generate this level of income this quickly.", color: "#266D67" },
                { icon: <Target className="w-7 h-7" />, title: "Real Campaigns, Real Results", desc: "You run actual campaigns with real data under mentor supervision during this diploma. By graduation you have live campaign performance metrics — CTR, ROAS, CVR — in your portfolio. Employers and clients want to see what you&apos;ve actually achieved, not just what you&apos;ve learned.", color: "#f9ba48" },
                { icon: <Users className="w-7 h-7" />, title: "2,260+ Marketer Alumni Network", desc: "Join a community of 2,260+ performance marketers across Africa. Share campaign strategies, exchange client opportunities, stay current with platform changes, and collaborate with a network that is actively working in the field you are entering.", color: "#163d3a" },
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
                Platforms You&apos;ll<span className="text-[#f9ba48]"> Master</span>
              </h2>
              <p className="text-white/45 font-[Montserrat] text-lg max-w-lg mx-auto leading-relaxed">
                The three dominant advertising platforms across Africa — where your clients&apos; customers are, and where your career in media buying will be built.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  name: "Meta Ads",
                  tagline: "Facebook & Instagram",
                  glow: "rgba(24,119,242,0.5)",
                  iconBg: "linear-gradient(145deg, #0d2b6b 0%, #1877F2 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      <path d="M22 10h-2.5C16 10 14 12 14 15.5V18h-3v4h3v10h4V22h3l1-4h-4v-2c0-1.1.5-2 2-2H22V10z" fill="white" fillOpacity="0.95"/>
                    </svg>
                  ),
                  accent: "#1877F2",
                },
                {
                  name: "Google Ads",
                  tagline: "Search & Display",
                  glow: "rgba(234,67,53,0.45)",
                  iconBg: "linear-gradient(145deg, #8B0000 0%, #EA4335 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      {/* Google G shape */}
                      <path d="M34 20.5c0-1.1-.1-2.2-.3-3.2H20v6h7.8C27 25.5 25.6 27 23.5 28v3h5.5c3.2-3 5-7.3 5-10.5z" fill="white" fillOpacity="0.9"/>
                      <path d="M20 34c3.8 0 7-1.3 9.3-3.5L23.8 27c-1.3.9-2.9 1.4-3.8 1.4-4 0-7.4-2.7-8.6-6.3H7.6v3.2C9.9 30.6 14.6 34 20 34z" fill="white" fillOpacity="0.7"/>
                      <path d="M11.4 22c-.3-1-.5-2-.5-3s.2-2 .5-3V12.8H7.6C6.6 14.6 6 16.7 6 19s.6 4.4 1.6 6.2L11.4 22z" fill="white" fillOpacity="0.5"/>
                      <path d="M20 12.3c2.1 0 4 .7 5.5 2.1l4.1-4.1C27 8 23.8 6.5 20 6.5c-5.4 0-10.1 3.4-12.4 8.3l3.8 3.2c1.2-3.6 4.6-5.7 8.6-5.7z" fill="white" fillOpacity="0.85"/>
                    </svg>
                  ),
                  accent: "#EA4335",
                },
                {
                  name: "TikTok Ads",
                  tagline: "Africa's Fastest-Growing Platform",
                  glow: "rgba(105,201,208,0.45)",
                  iconBg: "linear-gradient(145deg, #010101 0%, #1a1a1a 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      {/* TikTok note shape */}
                      <path d="M26 8v16a8 8 0 1 1-5-7.4V21a4 4 0 1 0 1 2.6V8h4z" fill="white" fillOpacity="0.9"/>
                      <path d="M28 10c1.5 1 3.2 1.5 5 1.5" stroke="#69C9D0" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                  accent: "#69C9D0",
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
              Meta from Week 2, Google Ads from Week 4, TikTok Ads in Week 5. Analytics and reporting throughout.
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
                    From your first ad account setup to your first paying media buying client — our mentors and community are with you every step of the way.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {[
                      "Dedicated performance marketing mentor for the full 8 weeks",
                      "Missed a session? Every class is recorded",
                      "Community of 2,260+ marketers across Africa",
                      "Campaign reviews until your first client retainer is signed",
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
                <Image src="/IdealHire2.png" alt="Idealnovate mentorship team" fill className="object-cover object-center" />
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
                  8 Modules.<br />
                  <span className="text-[#266D67]">Three Platforms. One Career.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  A comprehensive, campaign-led curriculum that takes you from ad fundamentals to running and reporting real campaigns — with portfolio-ready results at graduation.
                </p>

                <div className="bg-[#163d3a] rounded-2xl p-6 space-y-4">
                  {[
                    { icon: <Layers className="w-4 h-4" />, label: "8 Core Modules" },
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
                  We don&apos;t just teach you how platforms work — we train performance marketers who run real campaigns, hit real targets, and build careers on measurable results.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Target className="w-6 h-6" />, title: "Real Campaigns from Week Two", desc: "You run actual paid campaigns under mentor supervision from Week 2 — not simulations, not dry exercises. Real ad accounts, real audiences, real data. By graduation you have campaign results to show, not just a certificate to wave." },
                  { icon: <BarChart className="w-6 h-6" />, title: "Data-First Optimisation Training", desc: "A full week of this programme is dedicated to analytics and optimisation — reading ROAS, CPM, CTR, and CVR data, then acting on it. This is the skill that separates media buyers who stay average from those who consistently outperform." },
                  { icon: <Megaphone className="w-6 h-6" />, title: "Creative Strategy Built In", desc: "Most ad courses ignore creative — the thing that determines 70% of your campaign results. We dedicate a full module to ad copywriting and creative strategy because getting the message right is just as important as targeting the right audience." },
                  { icon: <Briefcase className="w-6 h-6" />, title: "Business & Retainer Coaching", desc: "The final module teaches you how to find media buying clients, structure retainer agreements, and price your services in Africa's ad market. You don't just graduate with skills — you graduate with a business model." },
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
            8. CTA
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
              Your First Client Campaign.<br />
              <span className="text-[#f9ba48]">Running in 8 Weeks.</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 2,260+ performance marketers across Africa who turned paid ads into a high-earning career — managing real budgets and delivering real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-xl font-[Montserrat] text-sm">
                Apply Now — It&apos;s Easy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Digital%20Advertising%20Diploma%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
                { month: "Jun", year: "2026", label: "June 2026", status: "Filling Fast", statusColor: "#f9ba48", accent: "#f9ba48", spots: "7 seats left", highlight: true },
                { month: "Sep", year: "2026", label: "September 2026", status: "Open", statusColor: "#266D67", accent: "#266D67", spots: "24 seats left", highlight: false },
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
                  Real Marketers.<br />
                  <span className="text-[#266D67]">Real Results.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Graduates who turned ad platform knowledge into high-earning careers managing real client budgets across Africa.
                </p>
                <div className="space-y-4">
                  {[
                    { value: "4.7★", label: "Average diploma rating" },
                    { value: "2,260+", label: "Graduates across Africa" },
                    { value: "91%", label: "Working in marketing within 3 months" },
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
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs font-[Montserrat] shrink-0 ring-2 ring-white shadow-sm" style={{ background: t.bg }}>{t.avatar}</div>
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
            11. TUITION
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
                { icon: <Zap className="w-6 h-6" />, title: "Installment Plan", tag: "Most Popular", tagColor: "#f9ba48", price: "2 payments", sub: "Split at 0% interest", perks: ["60% upfront, 40% at Week 4", "Zero interest, zero fees", "Full access from day one", "Flexible date arrangement"], popular: true, cta: "Get Started" },
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
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20Digital%20Advertising%20Diploma" className="text-[#266D67] font-semibold hover:underline">Contact admissions</a>{" "}
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
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Four straightforward steps to your first live paid campaign.</p>
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
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Everything you need to know about the Digital Advertising & Media Buying Diploma.</p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our admissions team is happy to help you make the right decision.</p>
                  <a href="mailto:hello@idealnovate.com?subject=Digital%20Advertising%20Question" className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]">Email Admissions</a>
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
              Your Media Buying Career<br />
              <span className="text-[#f9ba48]">Starts Right Here</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Over 2,260 performance marketers across Africa have taken this step. Your first campaign is 8 weeks away — the only question is, are you next?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                Start an Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Digital%20Advertising%20Diploma" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
