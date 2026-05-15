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
    title: "Content Strategy & the Algorithm",
    desc: "Build a content strategy that compounds over time. Understand how platforms reward creators, how audiences behave, and how to create a content plan that consistently attracts the right people to any brand.",
    topics: [
      "The modern content landscape — what works in 2025",
      "Platform algorithms — Instagram, LinkedIn, TikTok & X",
      "Audience research & content persona building",
      "Building a 90-day content calendar from scratch",
    ],
    duration: "Week 1",
  },
  {
    module: "02",
    title: "Writing with AI — Claude & ChatGPT",
    desc: "Use AI as a creative force multiplier. Learn to prompt Claude and ChatGPT to produce first drafts, outlines, captions, and long-form content — then edit with the voice and specificity that makes it perform.",
    topics: [
      "Prompt engineering for content creation",
      "Claude AI for long-form writing & brand voice",
      "ChatGPT for ideation, outlines & rapid drafts",
      "Editing AI output to sound human and original",
    ],
    duration: "Week 2",
  },
  {
    module: "03",
    title: "Visual Content — Canva & Design for Social",
    desc: "Create scroll-stopping visual content without being a designer. Master Canva's professional toolkit — from social graphics and carousels to branded templates and video thumbnails your clients will want at scale.",
    topics: [
      "Canva Pro — advanced features and brand kits",
      "Social media graphic design fundamentals",
      "Carousel posts — structure, storytelling & hooks",
      "Video thumbnails, covers & Reels/TikTok graphics",
    ],
    duration: "Week 3",
  },
  {
    module: "04",
    title: "Short-Form Video Strategy & Scripting",
    desc: "Short-form video is the highest-reach content format available today. Learn to script, structure, and batch-produce Reels, TikToks, and YouTube Shorts — at a volume that builds real audiences.",
    topics: [
      "The anatomy of a viral short-form video",
      "Script frameworks — hook, value, CTA",
      "Batch filming & production workflows",
      "AI-assisted script writing for short-form video",
    ],
    duration: "Week 4",
  },
  {
    module: "05",
    title: "Distribution, Scheduling & Community Management",
    desc: "Getting content out consistently is half the battle. Learn to schedule content across platforms, manage communities, and engage audiences in ways that build loyalty and generate real business results.",
    topics: [
      "Buffer & scheduling tools — platform best practices",
      "Cross-posting strategy — adapt, don't just duplicate",
      "Community management — comments, DMs & engagement",
      "Turning followers into leads and customers",
    ],
    duration: "Week 5",
  },
  {
    module: "06",
    title: "Analytics, Growth & Content as a Business",
    desc: "Measure what matters and charge what you deserve. Learn to read content analytics, identify what's driving growth, report to clients in language they understand, and package your skills into a content retainer business.",
    topics: [
      "Platform analytics — reach, engagement, saves & shares",
      "Building data-driven content reports for clients",
      "Content pricing — project vs retainer models",
      "Building a content agency: tools, workflow & team",
    ],
    duration: "Week 6",
  },
];

const testimonials = [
  {
    name: "Adaora Chukwu",
    role: "Content Strategist @ Interswitch (Lagos)",
    text: "This programme changed how I think about content entirely. The AI writing module alone saved me 6 hours a week. I now produce three times the content in half the time — and the quality is actually better because I spend my energy on strategy, not staring at a blank page.",
    rating: 5,
    avatar: "AC",
    bg: "linear-gradient(135deg, #26aaa599 0%, #266D67 100%)",
  },
  {
    name: "Kwame Ofori",
    role: "Freelance Content Creator (Accra)",
    text: "I had 2,000 followers before this programme. Eight months after graduation, I have 47,000 — and four brand partnerships. The distribution strategy they teach is genuinely next-level. I stopped posting and hoping, and started posting with intention.",
    rating: 5,
    avatar: "KO",
    bg: "linear-gradient(135deg, #f9ba4899 0%, #f9ba48 100%)",
  },
  {
    name: "Ngozi Okafor",
    role: "Social Media Manager @ Access Bank",
    text: "The Canva module unlocked something for me. I'd been a decent writer but always dependent on designers. Now I produce all our visual content in-house. Our engagement rate doubled in three months because the visuals finally match the copy quality.",
    rating: 5,
    avatar: "NO",
    bg: "linear-gradient(135deg, #163d3a99 0%, #163d3a 100%)",
  },
  {
    name: "Ibrahim Suleiman",
    role: "Brand Manager @ Airtel Nigeria",
    text: "The short-form video module is worth the entire programme fee. The script framework they teach — hook, value, CTA — seems simple until you realise how consistently it works. My first TikTok using the framework hit 180k views. I've never had a video perform that well before.",
    rating: 5,
    avatar: "IS",
    bg: "linear-gradient(135deg, #26aaa599 0%, #266D67 100%)",
  },
  {
    name: "Amara Diallo",
    role: "Content Creator & AI Consultant (Dakar)",
    text: "I now charge clients for AI-powered content production at scale. What used to take a team of five takes me and one assistant. The AI prompting skills they teach are not generic ChatGPT tips — they are genuine craft. This is what separates content professionals from hobbyists now.",
    rating: 4,
    avatar: "AD",
    bg: "linear-gradient(135deg, #163d3a99 0%, #163d3a 100%)",
  },
  {
    name: "Tolu Adewale",
    role: "Founder, ContentFirst Studio (Lagos)",
    text: "I built my content agency on the model this programme teaches. We manage content for six B2B clients on retainer — total monthly revenue of ₦3.2M. The analytics and reporting module is what helped me confidently pitch ROI to corporate clients. That's what closes deals.",
    rating: 5,
    avatar: "TA",
    bg: "linear-gradient(135deg, #f9ba4899 0%, #f9ba48 100%)",
  },
];

const faqs = [
  {
    q: "Do I need writing experience to take this programme?",
    a: "No prior writing experience is needed. This programme starts from content strategy fundamentals and builds up systematically. More importantly, you'll learn to use AI tools to generate strong first drafts — so the barrier to producing quality content is dramatically lower than it was even two years ago. If you have something to say and know your audience, you can produce great content.",
  },
  {
    q: "How is Content Creation & AI different from a standard social media course?",
    a: "Traditional content courses teach writing and planning. This programme goes further — you'll learn how to use Claude and ChatGPT to produce content at scale, Canva for professional visual production, short-form video scripting, and a distribution strategy that compounds over time. The AI tools layer turns content creation from a bottleneck into a competitive advantage.",
  },
  {
    q: "Which platforms does the programme focus on?",
    a: "The programme covers Instagram, LinkedIn, TikTok, X (Twitter), and YouTube Shorts — the five platforms where African brands and creators have the greatest opportunity right now. Each platform has its own algorithm logic, content format, and audience behaviour, and we cover all of them so you can serve any client on any channel.",
  },
  {
    q: "Will I actually learn to use AI tools, not just hear about them?",
    a: "Yes — Week 2 of this programme is dedicated entirely to hands-on AI tool use. You'll run prompt engineering exercises with Claude and ChatGPT, produce real content pieces, and learn how to edit AI output to sound distinctive and on-brand. By the end of Week 2 you'll have a repeatable AI-assisted content production workflow you can apply to any brief.",
  },
  {
    q: "Is content creation a sustainable income in Africa?",
    a: "Very much so. Freelance content creators in Africa charge ₦80k–₦300k per month per client for full-service content management. Brand partnerships and influencer deals layer on top of that. Content agencies managing multiple retainer clients generate ₦1M+ per month. This is one of the most scalable service models in digital marketing.",
  },
  {
    q: "How are classes delivered — live or recorded?",
    a: "All sessions are delivered live (minimum 2 sessions per week, up to 2 hours each) with all classes recorded so you can review at your own pace. Diploma students get 1-on-1 mentor check-ins and live content review sessions where you present your work and receive direct feedback from instructors.",
  },
  {
    q: "Is scholarship funding available?",
    a: "Yes. We offer an 80% scholarship to qualifying applicants — meaning you pay only 20% as a registration fee to secure your seat. Apply through our Scholarship page and our admissions team will review your application within 5 business days.",
  },
  {
    q: "What certificate do I receive on completion?",
    a: "You receive an Idealnovate Professional Certificate in Content Creation & AI — a digitally verifiable credential with a LinkedIn-ready digital badge. The certificate is recognised by 48+ hiring partners across Africa and internationally, and validates your expertise in both content strategy and AI-powered production.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContentMarketingPage() {
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
                  <Cpu className="w-3 h-3" />
                  Content Creation &amp; AI Diploma
                </span>
              </div>

              <h1 className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
                Create Content<br />
                <span className="text-[#f9ba48]">That Converts. At Scale.</span>
              </h1>

              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                Master content strategy, AI-powered writing, visual design, and short-form video — and build a content business that earns retainers from brands who need to grow.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "6 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Career Paths", value: "Freelance & Employment" },
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
                <a href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Content%20Creation%20AI%20Diploma" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold text-sm rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat]">
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
                  {["AC", "KO", "NO", "IS", "AD"].map((init, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[9px] font-bold text-white" style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>{init}</div>
                  ))}
                </div>
                <p className="text-white/45 text-xs font-[Montserrat]">
                  Joined by <span className="text-white/70 font-semibold">940+ creators</span> across Africa
                </p>
              </div>
            </div>

            <div className="hidden lg:flex flex-col justify-center py-12 lg:py-16 px-8 xl:px-12">
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
                <Image src="/IdealTalent3.jpg" alt="Content Creation learners at Idealnovate" fill className="object-cover object-center" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,61,58,0.4) 0%, transparent 35%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.55) 0%, transparent 40%)" }} />

                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">4.9★</p>
                      <p className="text-gray-400 text-xs font-[Montserrat]">Highest-rated programme</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Primary Tool</p>
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                      <path d="M8 3l3 8H5L8 3z" fill="#C4673A" fillOpacity="0.9"/>
                      <path d="M5.5 9h5" stroke="#C4673A" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-white font-bold text-sm font-[Montserrat]">Claude AI</span>
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
                <Cpu className="w-3.5 h-3.5" />
                Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                Content + AI = The<br />
                <span className="text-[#266D67]">Most Scalable Skill of 2025</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                Content creators who combine strategic thinking with AI tools produce in hours what used to take days — and African brands are desperately looking for professionals who can do exactly that.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Brain className="w-7 h-7" />, title: "AI Tools That 10× Your Output", desc: "Claude and ChatGPT aren't shortcuts — they're force multipliers. When you know how to prompt, edit, and direct AI output, you produce professional-grade content in a fraction of the time. That speed advantage is what lets you serve multiple retainer clients simultaneously.", color: "#C4673A" },
                { icon: <TrendingUp className="w-7 h-7" />, title: "Strategy Before Tactics", desc: "Most content creators post randomly and hope for results. We teach strategy first — audience research, platform algorithms, and content calendars — so every piece of content you produce is intentional, targeted, and built to compound over time.", color: "#266D67" },
                { icon: <Target className="w-7 h-7" />, title: "Full-Stack Creator Skills", desc: "Write. Design. Script. Distribute. Analyse. This programme covers the complete content production stack — from AI-assisted long-form writing to Canva visuals and short-form video scripts. You graduate as a complete content professional, not a one-trick creator.", color: "#163d3a" },
                { icon: <Users className="w-7 h-7" />, title: "The Retainer Business Model", desc: "Brands don't need content once — they need it every month. The final module teaches you to package your skills into predictable monthly retainers. Our graduates typically earn ₦150k–₦400k/month per retainer client within three months of graduation.", color: "#f9ba48" },
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
                The complete AI-powered content production stack — write with AI, design with Canva, distribute with precision.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  name: "Claude AI",
                  tagline: "Strategy & Long-Form Writing",
                  glow: "rgba(217,119,87,0.45)",
                  iconBg: "linear-gradient(145deg, #C4673A 0%, #E8906A 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      <path d="M20 7l9 22H11L20 7z" fill="white" fillOpacity="0.95"/>
                      <path d="M14.5 22h11" stroke="#C4673A" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="20" cy="33" r="2" fill="white" fillOpacity="0.6"/>
                    </svg>
                  ),
                  accent: "#D97757",
                },
                {
                  name: "Canva",
                  tagline: "Visual Content & Design",
                  glow: "rgba(0,200,181,0.45)",
                  iconBg: "linear-gradient(145deg, #007B72 0%, #00C8B5 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      {/* Canva C shape */}
                      <path d="M30 14a12 12 0 1 0 0 12" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>
                      <circle cx="30" cy="20" r="4" fill="white" fillOpacity="0.3"/>
                    </svg>
                  ),
                  accent: "#00C8B5",
                },
                {
                  name: "ChatGPT",
                  tagline: "Ideation & Content Drafts",
                  glow: "rgba(16,163,127,0.45)",
                  iconBg: "linear-gradient(145deg, #0a4a3a 0%, #10A37F 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      {/* OpenAI-inspired mark */}
                      <path d="M20 8a12 12 0 0 1 10.4 18L20 32 9.6 26A12 12 0 0 1 20 8z" stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
                      <circle cx="20" cy="20" r="4.5" fill="white" fillOpacity="0.9"/>
                    </svg>
                  ),
                  accent: "#10A37F",
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
              AI tools from Week 2, Canva from Week 3, distribution tools throughout Weeks 5–6.
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
                    From your first AI-assisted content piece to your first paying retainer client — our mentors and community are with you every step of the journey.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {[
                      "Dedicated content strategy mentor for the full 6 weeks",
                      "Missed a session? Every class is recorded",
                      "Community of 940+ creators across Africa",
                      "Retainer coaching until you sign your first client",
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
                <Image src="/IdealTalent6.png" alt="Idealnovate mentorship team" fill className="object-cover object-center" />
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
                  <span className="text-[#266D67]">One Content Business.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  A focused curriculum that takes you from content strategy fundamentals to a portfolio of live campaigns and the retainer model to sustain a content business.
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
                  We don&apos;t teach trends — we build content professionals who combine strategic thinking with AI tools to produce exceptional work at scale, and charge accordingly.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Brain className="w-6 h-6" />, title: "AI-Native from Week One", desc: "AI tools are not an optional add-on in this programme — they are embedded into every week. You learn to prompt, direct, and edit Claude and ChatGPT alongside content strategy, so AI becomes a natural part of your creative workflow, not a gimmick." },
                  { icon: <Globe className="w-6 h-6" />, title: "Full-Stack Creator, Not Just a Writer", desc: "Writing is one skill. This programme covers the full content stack: strategy, writing, visual design (Canva), video scripting, distribution, and analytics. You graduate as a complete content professional that any brand would pay a premium to retain." },
                  { icon: <Target className="w-6 h-6" />, title: "Africa-First Content Briefs", desc: "Every project brief is grounded in African market realities — local brands, cultural context, platform behaviour specific to Nigerian, Ghanaian, and East African audiences. Your portfolio speaks directly to the clients you'll be pitching." },
                  { icon: <Briefcase className="w-6 h-6" />, title: "The Retainer Business Built In", desc: "Module 6 teaches you to package and price your content skills as a monthly retainer service — the most sustainable income model for content professionals. Our graduates consistently land their first retainer client within 6 weeks of graduation." },
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
              Your First Retainer Client.<br />
              <span className="text-[#f9ba48]">Signed in 6 Weeks.</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 940+ content professionals across Africa who combined AI tools with strategy to build sustainable retainer businesses brands trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-xl font-[Montserrat] text-sm">
                Apply Now — It&apos;s Easy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Content%20Creation%20AI%20Diploma%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
                { month: "Jul", year: "2026", label: "July 2026", status: "Filling Fast", statusColor: "#f9ba48", accent: "#f9ba48", spots: "11 seats left", highlight: true },
                { month: "Oct", year: "2026", label: "October 2026", status: "Open", statusColor: "#266D67", accent: "#266D67", spots: "26 seats left", highlight: false },
                { month: "Jan", year: "2027", label: "January 2027", status: "Open", statusColor: "#266D67", accent: "#163d3a", spots: "30 seats left", highlight: false },
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
                  Real Creators.<br />
                  <span className="text-[#266D67]">Real Results.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Graduates who turned content + AI skills into sustainable retainer income and brand partnerships across Africa.
                </p>
                <div className="space-y-4">
                  {[
                    { value: "4.9★", label: "Average diploma rating" },
                    { value: "940+", label: "Graduates across Africa" },
                    { value: "93%", label: "Working in content within 3 months" },
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
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20Content%20Creation%20AI%20Diploma" className="text-[#266D67] font-semibold hover:underline">Contact admissions</a>{" "}
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
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Four steps to your first AI-powered content retainer.</p>
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
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Everything you need to know about the Content Creation & AI Diploma.</p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our admissions team is happy to help you make the right decision.</p>
                  <a href="mailto:hello@idealnovate.com?subject=Content%20Creation%20AI%20Question" className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]">Email Admissions</a>
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
              Your Content Career<br />
              <span className="text-[#f9ba48]">Begins Right Here</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Over 940 content professionals across Africa have taken this step. Your first retainer client is 6 weeks away — are you next?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                Start an Application
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Content%20Creation%20AI%20Diploma" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
