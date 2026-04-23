"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  ArrowRight, Star, Clock, CheckCircle, ChevronDown,
  Palette, Monitor, Globe, Zap, BookOpen, Award,
  Target, Briefcase, TrendingUp, PenTool, MessageSquare,
  Users, Calendar, Shield, HeartHandshake, GraduationCap,
  Layers, Search, Brain,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const curriculum = [
  {
    module: "01",
    title: "Introduction to UI/UX Design",
    desc: "Build a solid foundation in design thinking, UX terminology, and methodology. Explore the Figma workspace and core design principles that underpin every great product.",
    topics: ["Design thinking methodology", "UX terminology & core concepts", "Figma workspace orientation", "Design principles & visual hierarchy"],
    duration: "Week 1",
  },
  {
    module: "02",
    title: "UI/UX Research and Analysis",
    desc: "Learn how to understand your users deeply. Master research frameworks, user interviews, competitor analysis, and data-driven design decisions.",
    topics: ["User interviews & surveys", "Competitor & heuristic analysis", "Affinity mapping & synthesis", "Defining user personas & journey maps"],
    duration: "Week 2",
  },
  {
    module: "03",
    title: "Wireframes and Figma Components",
    desc: "Turn ideas into structure. Build low-fidelity wireframes for web and mobile, and master Figma's component and auto-layout systems.",
    topics: ["Lo-fi wireframing (web & mobile)", "Figma components & variants", "Auto layout fundamentals", "Information architecture & user flows"],
    duration: "Week 3",
  },
  {
    module: "04",
    title: "Visual Design and Branding",
    desc: "Master the art and science of visual communication — typography, colour theory, mood boards, and style guides that bring brands to life.",
    topics: ["Typography systems & hierarchy", "Colour theory & accessible palettes", "Mood boards & brand identity", "Style guide creation"],
    duration: "Week 4",
  },
  {
    module: "05",
    title: "Introduction to Prototyping",
    desc: "Transform static designs into interactive experiences. Set up Figma flows, transitions, and micro-interactions that communicate real product behaviour.",
    topics: ["Figma flows & connections", "Transitions & micro-interactions", "Mobile & desktop prototypes", "Sharing & presenting prototypes"],
    duration: "Week 5",
  },
  {
    module: "06",
    title: "Advanced UI/UX Design in Figma",
    desc: "Level up your Figma mastery — advanced components, variants, design systems, and portfolio-grade case study building.",
    topics: ["Advanced component architecture", "Design systems & token libraries", "High-fidelity UI polish", "Case study writing & presentation"],
    duration: "Weeks 6–7",
  },
  {
    module: "07",
    title: "User Experience Design",
    desc: "Understand the psychology behind habit-forming products. Apply the Hook Model and behavioural design principles to create experiences users love and return to.",
    topics: ["Habit-forming product design", "The Hook Model (Nir Eyal)", "Emotional design & delight", "Accessibility & inclusive design"],
    duration: "Week 7",
  },
  {
    module: "08",
    title: "UI/UX Testing and Feedback",
    desc: "Validate your designs with real users. Conduct usability tests, gather structured feedback, and iterate your way to a polished, user-approved product.",
    topics: ["Usability testing methods", "Moderated & unmoderated sessions", "Synthesising feedback into iterations", "A/B testing fundamentals"],
    duration: "Week 8",
  },
  {
    module: "09",
    title: "AI in UI/UX Design & Final Project",
    desc: "Harness AI tools in your design workflow — from AI-powered research to adaptive interfaces. Complete your capstone project and build your final portfolio piece.",
    topics: ["AI-powered UX research tools", "Generative UI & adaptive interfaces", "Capstone project (end-to-end product)", "Portfolio presentation & review"],
    duration: "Week 9–10",
  },
];

const testimonials = [
  {
    name: "Adaeze Okafor",
    role: "UI/UX Designer @ Paystack",
    text: "The curriculum is incredibly thorough — 9 modules covering everything from research to AI-powered design. I landed my Paystack role before even finishing the final project.",
    rating: 5,
    avatar: "AO",
    color: "#266D67",
  },
  {
    name: "Segun Adeyemi",
    role: "Product Designer @ Flutterwave",
    text: "I was a graphics artist earning ₦80k a month. After completing the diploma, I joined Flutterwave as a product designer on ₦350k. The ROI is insane.",
    rating: 5,
    avatar: "SA",
    color: "#f9ba48",
  },
  {
    name: "Chiamaka Eze",
    role: "Freelance UI/UX Designer",
    text: "The Figma components module alone transformed how I work. I now build client projects 3× faster and charge premium rates. Worth every kobo.",
    rating: 4,
    avatar: "CE",
    color: "#163d3a",
  },
  {
    name: "Kofi Mensah",
    role: "UX Designer @ Bolt (Ghana)",
    text: "The live sessions and mentor feedback were exceptional. My mentor had worked at top design agencies — you can't put a price on that kind of guidance.",
    rating: 5,
    avatar: "KM",
    color: "#266D67",
  },
  {
    name: "Ngozi Uche",
    role: "Design Lead @ Andela",
    text: "The portfolio coaching in Module 6 is what separates Idealnovate from every other course. My case studies got compliments in every single interview.",
    rating: 4,
    avatar: "NU",
    color: "#163d3a",
  },
  {
    name: "Tunde Bakare",
    role: "UI Designer @ Interswitch",
    text: "The AI module at the end is a game-changer. Most design courses completely ignore AI tools — Idealnovate built it right into the programme.",
    rating: 5,
    avatar: "TB",
    color: "#f9ba48",
  },
];

const faqs = [
  {
    q: "Do I need design experience to enrol in this diploma?",
    a: "Not at all. The diploma starts from absolute zero — no Figma experience, no design background required. All you need is a laptop, an internet connection, and the drive to learn. We've had engineers, accountants, teachers, and stay-at-home parents all graduate successfully.",
  },
  {
    q: "What tools will I use during the programme?",
    a: "Figma is the primary tool and you'll go from complete beginner to advanced professional-level use across 9 modules. You'll also explore Figma plugins, collaborative design workflows, and AI-powered design tools in the final module.",
  },
  {
    q: "How are classes delivered — live or recorded?",
    a: "Classes are fully virtual. Core lessons are delivered live (minimum 2 sessions per week, up to 2 hours each), with all sessions recorded so you never fall behind. Diploma students also get 1-on-1 mentor check-ins and live cohort review calls.",
  },
  {
    q: "How long does the diploma take to complete?",
    a: "The diploma runs for 8–10 weeks — roughly 2 sessions per week of up to 2 hours. Most students dedicate 1–2 hours per day and complete everything within the cohort timeframe. There is no rushing — you move through structured modules at a steady pace.",
  },
  {
    q: "Is scholarship funding available?",
    a: "Yes. We offer an 80% scholarship to qualifying applicants — meaning you only pay 20% as a registration fee. Apply via our scholarship page and our admissions team will review your application within 5 business days.",
  },
  {
    q: "What happens to my portfolio during the programme?",
    a: "Portfolio building is central to the programme. From Module 3 onwards, every project you build contributes to your portfolio. By graduation, you'll have a minimum of 5 polished case studies — reviewed and refined with mentor feedback — ready to show employers.",
  },
  {
    q: "Will I be job-ready by the time I graduate?",
    a: "That's the goal. 94% of our design graduates land relevant roles within 6 months. You'll leave with a professional portfolio, a globally recognised certification, and access to our employer network — companies that actively recruit from our talent pool.",
  },
  {
    q: "What is the certification I receive on completion?",
    a: "You receive an Idealnovate Professional Certificate in UI/UX Design — a digitally verifiable credential accepted by 48+ hiring partners across Africa and internationally. It includes a LinkedIn-ready digital badge to showcase on your profile.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function UIUXDesignPage() {
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
          {/* Full-bleed grid — no container so right image reaches the viewport edge */}
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[88vh]">

              {/* LEFT — Content with its own padding mirroring the site container */}
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
                    <Palette className="w-3 h-3" />
                    UI/UX Design Diploma
                  </span>
                </div>

                <h1
                  className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
                >
                  Become a Certified<br />
                  <span className="text-[#f9ba48]">UI/UX Designer</span>
                </h1>

                <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                  Master design thinking, prototyping, and user experience with Africa&apos;s leading digital academy.
                </p>

                {/* Key feature badges */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "10 Weeks" },
                    { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                    { icon: <Globe className="w-4 h-4" />, label: "Job Opportunities", value: "Global & Local Tech Roles" },
                    { icon: <Star className="w-4 h-4" fill="currentColor" />, label: "Alumni Rating", value: "4.8 / 5 ★" },
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
                    href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20UI%2FUX%20Design%20Diploma"
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
                    {["AO", "SA", "CE", "KM", "NU"].map((init, i) => (
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
                    Joined by <span className="text-white/70 font-semibold">3,120+ designers</span> across Africa
                  </p>
                </div>
              </div>

              {/* RIGHT — Full-bleed image, no padding, fills entire column */}
              <div className="relative hidden lg:block">
                <Image
                  src="/IdealTalent2.png"
                  alt="UI/UX Design learners at Idealnovate"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Left fade blending into dark hero bg */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, #163d3a 0%, transparent 30%)" }}
                />
                {/* Bottom vignette */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, #163d3a 0%, transparent 25%)" }}
                />

                {/* Floating stat card */}
                <div className="absolute top-8 right-8 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">94%</p>
                      <p className="text-gray-400 text-xs font-[Montserrat]">Job placement rate</p>
                    </div>
                  </div>
                </div>

                {/* Floating tool badge */}
                <div className="absolute bottom-10 right-8 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Primary Tool</p>
                  <div className="flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-[#f9ba48]" />
                    <span className="text-white font-bold text-sm font-[Montserrat]">Figma</span>
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
                <Palette className="w-3.5 h-3.5" />
                Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                The Only Design School<br />
                <span className="text-[#266D67]">Built to Get You Hired</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                We don&apos;t just teach you to design — we put you on a direct track from your first lesson to your first paycheck.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <PenTool className="w-7 h-7" />,
                  title: "Industry-Relevant Skills",
                  desc: "Master Figma from beginner to advanced, plus AI-powered design tools that top companies use daily. Every skill you learn is directly mapped to what employers are hiring for right now.",
                  color: "#f9ba48",
                },
                {
                  icon: <TrendingUp className="w-7 h-7" />,
                  title: "Increased Earnings",
                  desc: "UI/UX designers in Africa earn ₦300k–₦600k+ monthly. Our graduates report an average 3× salary increase within 6 months of completing the diploma — with global remote opportunities on top.",
                  color: "#266D67",
                },
                {
                  icon: <Briefcase className="w-7 h-7" />,
                  title: "Internship Access",
                  desc: "Get direct access to professional internship placements with our partner organisations. Build real experience, earn a reference, and fast-track your entry into the industry before you even graduate.",
                  color: "#163d3a",
                },
                {
                  icon: <Users className="w-7 h-7" />,
                  title: "Community Support",
                  desc: "Join a thriving network of 3,120+ designers across Africa. Get peer feedback, collaborate on projects, attend live events, and stay connected to a community that grows with you long after graduation.",
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
            TOOLS YOU'LL MASTER
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20" style={{ background: "#0d2320" }}>
          {/* Ambient glows */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] opacity-20 blur-[100px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #266D67 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] opacity-15 blur-[80px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 70%)" }} />
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/6 border border-white/12 rounded-full text-white/50 text-xs font-semibold font-[Montserrat] mb-5 uppercase tracking-widest">
                <Zap className="w-3 h-3 text-[#f9ba48]" />
                Industry-Standard Tools
              </span>
              <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Tools You&apos;ll
                <span className="text-[#f9ba48]"> Master</span>
              </h2>
              <p className="text-white/45 font-[Montserrat] text-lg max-w-lg mx-auto leading-relaxed">
                Get hands-on with the exact tools world-class design teams use every day — from day one.
              </p>
            </div>

            {/* Tool cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                {
                  name: "Figma",
                  tagline: "Interface Design",
                  glow: "rgba(242,78,30,0.5)",
                  iconBg: "linear-gradient(145deg, #1e1e1e 0%, #2a2a2a 100%)",
                  icon: (
                    <svg viewBox="0 0 38 57" className="w-9 h-9" fill="none">
                      <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
                      <path d="M0 47.5C0 41.977 4.477 38 9.5 38H19v9.5C19 53.023 14.523 57 9.5 57S0 53.023 0 47.5z" fill="#0ACF83"/>
                      <path d="M19 0v19h9.5C33.523 19 38 14.523 38 9.5S33.523 0 28.5 0H19z" fill="#FF7262"/>
                      <path d="M0 9.5C0 14.523 4.477 19 9.5 19H19V0H9.5C4.477 0 0 4.477 0 9.5z" fill="#F24E1E"/>
                      <path d="M0 28.5C0 33.523 4.477 38 9.5 38H19V19H9.5C4.477 19 0 23.477 0 28.5z" fill="#A259FF"/>
                    </svg>
                  ),
                  accent: "#F24E1E",
                },
                {
                  name: "Miro",
                  tagline: "Collaborative Boards",
                  glow: "rgba(255,208,47,0.45)",
                  iconBg: "linear-gradient(145deg, #FFD02F 0%, #FFE566 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <path d="M7 30V10l7.5 14L20 14l5.5 10L33 10v20" stroke="#050038" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  accent: "#FFD02F",
                },
                {
                  name: "Lovable AI",
                  tagline: "AI Product Builder",
                  glow: "rgba(232,67,147,0.45)",
                  iconBg: "linear-gradient(145deg, #C2185B 0%, #E91E8C 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <path d="M20 34S5 24.5 5 14.5a7.875 7.875 0 0 1 15-3.3 7.875 7.875 0 0 1 15 3.3C35 24.5 20 34 20 34z" fill="white"/>
                      <path d="M20 34S5 24.5 5 14.5a7.875 7.875 0 0 1 15-3.3 7.875 7.875 0 0 1 15 3.3C35 24.5 20 34 20 34z" fill="url(#lv)" fillOpacity="0.3"/>
                      <defs>
                        <linearGradient id="lv" x1="5" y1="10" x2="35" y2="34" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#FF6B9D"/>
                          <stop offset="1" stopColor="#C2185B"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  ),
                  accent: "#E91E8C",
                },
                {
                  name: "FigJam",
                  tagline: "Whiteboard & Ideation",
                  glow: "rgba(24,160,251,0.45)",
                  iconBg: "linear-gradient(145deg, #18A0FB 0%, #5BC8FF 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <rect x="6" y="7" width="17" height="20" rx="2.5" fill="white" fillOpacity="0.95"/>
                      <rect x="17" y="13" width="17" height="20" rx="2.5" fill="white" fillOpacity="0.55"/>
                      <path d="M10 13h9M10 17h9M10 21h5" stroke="#18A0FB" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  accent: "#18A0FB",
                },
                {
                  name: "Claude AI",
                  tagline: "AI Research Assistant",
                  glow: "rgba(217,119,87,0.45)",
                  iconBg: "linear-gradient(145deg, #C4673A 0%, #E8906A 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <path d="M20 7l9 22H11L20 7z" fill="white" fillOpacity="0.95"/>
                      <path d="M14.5 22h11" stroke="#C4673A" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="20" cy="33" r="2" fill="white" fillOpacity="0.6"/>
                    </svg>
                  ),
                  accent: "#D97757",
                },
                {
                  name: "Figma AI",
                  tagline: "AI-Powered Design",
                  glow: "rgba(151,71,255,0.45)",
                  iconBg: "linear-gradient(145deg, #7B2FBE 0%, #A855F7 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                      <path d="M20 8v5M20 27v5M8 20h5M27 20h5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M12.2 12.2l3.5 3.5M24.3 24.3l3.5 3.5M27.8 12.2l-3.5 3.5M15.7 24.3l-3.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
                      <circle cx="20" cy="20" r="4.5" fill="white"/>
                      <circle cx="20" cy="20" r="2" fill="#A855F7"/>
                    </svg>
                  ),
                  accent: "#9747FF",
                },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="group relative flex flex-col items-center text-center p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/16 transition-all duration-300 hover:-translate-y-2 cursor-default"
                >
                  {/* Per-card colour glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `0 0 40px 0 ${tool.glow}` }}
                  />

                  {/* Icon container */}
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{ background: tool.iconBg }}
                  >
                    {/* Shine overlay */}
                    <div className="absolute inset-0 rounded-2xl"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
                    <div className="relative z-10">{tool.icon}</div>
                  </div>

                  {/* Accent line that appears on hover */}
                  <div
                    className="w-6 h-0.5 rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-10"
                    style={{ background: tool.accent }}
                  />

                  <p className="font-[Montserrat] font-bold text-white text-sm leading-tight mb-1">{tool.name}</p>
                  <p className="font-[Montserrat] text-white/35 text-xs leading-snug">{tool.tagline}</p>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <p className="text-center text-white/25 text-xs font-[Montserrat] mt-10">
              All tools are introduced progressively throughout the 9 modules — no prior experience required.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3. WHERE ALUMNI WORK
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
            4. CTA — We've Got Your Back
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2 min-h-[420px]">

              {/* LEFT */}
              <div className="relative bg-gradient-to-br from-[#163d3a] via-[#1d5450] to-[#266D67] flex flex-col justify-center px-8 sm:px-12 py-12 lg:py-16">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 w-64 h-64 opacity-20 blur-3xl"
                  style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 70%)" }}
                />

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
                    From application to graduation, our team supports you every step of the way — so you never feel alone on your journey.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {[
                      "Dedicated mentor for the full 10 weeks",
                      "Missed a session? Every class is recorded",
                      "Peer community of 3,120+ designers",
                      "Career coaching until you land the job",
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

              {/* RIGHT — Mentorship image */}
              <div className="relative min-h-[320px] lg:min-h-0">
                <Image
                  src="/IdealTeam.png"
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
            5. CURRICULUM
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
                  <span className="text-[#266D67]">One Career.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  A structured, project-led journey from complete beginner to job-ready UI/UX designer — in just 10 weeks.
                </p>

                <div className="bg-[#163d3a] rounded-2xl p-6 space-y-4">
                  {[
                    { icon: <Layers className="w-4 h-4" />, label: "9 Core Modules" },
                    { icon: <Clock className="w-4 h-4" />, label: "8–10 Weeks" },
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
            6. UNIQUENESS — What Makes Us Different
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
                  Every element of this diploma is designed to move you from learner to employed — not just from beginner to certified.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Cohort-Based Learning",
                    desc: "You learn alongside real peers in structured cohorts — not alone. Peer reviews, live collaboration, and shared accountability keep you motivated and on track.",
                  },
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: "AI-Integrated Curriculum",
                    desc: "AI tools aren't an afterthought — they're embedded in every module from day one. You graduate fluent in AI-powered design workflows before most designers even start learning.",
                  },
                  {
                    icon: <Palette className="w-6 h-6" />,
                    title: "Portfolio from Week One",
                    desc: "You start building your portfolio in the very first module — not the last. By graduation you'll have 5+ polished case studies reviewed and refined with direct mentor feedback.",
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: "Africa-Centred Briefs",
                    desc: "Every project brief and case study is rooted in African market realities — products, brands, and problems your future employers will immediately recognise and respect.",
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
            7. CTA — Gradient
        ══════════════════════════════════════════ */}
        <section
          className="section-padding relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #163d3a 0%, #1d5450 40%, #266D67 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 blur-3xl rounded-full"
            style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 65%)" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold font-[Montserrat] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9ba48] animate-pulse" />
              Applications Open Now
            </span>
            <h2
              className="font-[Montserrat] font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Your Career in Design<br />
              <span className="text-[#f9ba48]">Starts With One Click</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Start your journey today and join Africa&apos;s leading design community — where learners become professionals.
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
                href="mailto:hello@idealnovate.com?subject=UI%2FUX%20Design%20Diploma%20Enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Ask a Question
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            8. NEXT COHORT
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
                Choose the cohort that works best for your schedule — all seats are limited.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  month: "Jun",
                  year: "2026",
                  fullDate: "Starts June 20, 2026",
                  status: "Filling Fast",
                  statusColor: "#f9ba48",
                  accent: "#f9ba48",
                  spots: "12 seats left",
                  highlight: true,
                },
                {
                  month: "Aug",
                  year: "2026",
                  fullDate: "Starts August 22, 2026",
                  status: "Open",
                  statusColor: "#266D67",
                  accent: "#266D67",
                  spots: "24 seats left",
                  highlight: false,
                },
                {
                  month: "Oct",
                  year: "2026",
                  fullDate: "Starts October 24, 2026",
                  status: "Open",
                  statusColor: "#266D67",
                  accent: "#163d3a",
                  spots: "30 seats left",
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
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: `linear-gradient(90deg, ${cohort.accent}, #266D67)` }}
                    />
                  )}

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: cohort.highlight ? "rgba(249,186,72,0.15)" : "#eef6f5" }}
                      >
                        <Calendar className="w-6 h-6" style={{ color: cohort.accent }} />
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold font-[Montserrat]"
                        style={{ background: `${cohort.statusColor}20`, color: cohort.statusColor }}
                      >
                        {cohort.status}
                      </span>
                    </div>

                    <p
                      className={`font-[Montserrat] text-6xl font-bold leading-none mb-1 ${
                        cohort.highlight ? "text-[#f9ba48]" : "text-[#163d3a]"
                      }`}
                    >
                      {cohort.month}
                    </p>
                    <p
                      className={`font-[Montserrat] font-semibold text-base mb-4 ${
                        cohort.highlight ? "text-white/40" : "text-gray-400"
                      }`}
                    >
                      {cohort.year}
                    </p>

                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-6 text-xs font-[Montserrat] font-medium ${
                        cohort.highlight ? "bg-white/8 text-white/60" : "bg-white text-gray-500"
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      {cohort.fullDate}
                    </div>

                    <div className="flex items-center gap-2 mb-7">
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ background: cohort.statusColor }}
                      />
                      <span
                        className={`text-xs font-[Montserrat] font-semibold ${
                          cohort.highlight ? "text-white/70" : "text-gray-500"
                        }`}
                      >
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
            9. TESTIMONIALS
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#f4f9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
              {/* Left sticky */}
              <div className="lg:sticky lg:top-32">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                  <Star className="w-3.5 h-3.5" fill="currentColor" />
                  Student Stories
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#163d3a] leading-tight mb-4">
                  Real Designers.<br />
                  <span className="text-[#266D67]">Real Results.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Graduates who went from zero to employed — with portfolios, offers, and promotions to prove it.
                </p>
                <div className="space-y-4">
                  {[
                    { value: "4.8★", label: "Average diploma rating" },
                    { value: "3,120+", label: "UI/UX graduates across Africa" },
                    { value: "94%", label: "Employed within 6 months" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-4">
                      <p className="font-[Montserrat] font-bold text-[#266D67] text-2xl w-20 shrink-0">{s.value}</p>
                      <p className="text-gray-500 text-sm font-[Montserrat]">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: review cards */}
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
                        style={{ background: `linear-gradient(135deg, ${t.color}99 0%, ${t.color} 100%)` }}
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
            10. TUITION
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
                    "60% upfront, 40% at Week 5",
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
                  sub: "Start now, registration at Week 2",
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
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: "linear-gradient(90deg, #f9ba48, #266D67)" }}
                    />
                  )}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          plan.popular ? "bg-[#f9ba48]/15 text-[#f9ba48]" : "bg-[#eef6f5] text-[#266D67]"
                        }`}
                      >
                        {plan.icon}
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold font-[Montserrat]"
                        style={{ background: `${plan.tagColor}20`, color: plan.tagColor }}
                      >
                        {plan.tag}
                      </span>
                    </div>
                    <h3
                      className={`font-[Montserrat] font-bold text-xl mb-1 ${
                        plan.popular ? "text-white" : "text-[#163d3a]"
                      }`}
                    >
                      {plan.title}
                    </h3>
                    <p
                      className={`text-sm font-[Montserrat] mb-5 ${
                        plan.popular ? "text-white/50" : "text-gray-400"
                      }`}
                    >
                      {plan.sub}
                    </p>
                    <p
                      className={`font-[Montserrat] font-bold text-3xl mb-7 ${
                        plan.popular ? "text-[#f9ba48]" : "text-[#163d3a]"
                      }`}
                    >
                      {plan.price}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.perks.map((p) => (
                        <li
                          key={p}
                          className={`flex items-start gap-2.5 text-sm font-[Montserrat] ${
                            plan.popular ? "text-white/75" : "text-gray-600"
                          }`}
                        >
                          <CheckCircle
                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                              plan.popular ? "text-[#f9ba48]" : "text-[#266D67]"
                            }`}
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/company/scholarships"
                      className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm font-[Montserrat] transition-all ${
                        plan.popular
                          ? "bg-[#f9ba48] text-white hover:bg-[#d4a030]"
                          : "bg-[#163d3a] text-white hover:bg-[#266D67]"
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
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20UI%2FUX%20Design%20Diploma" className="text-[#266D67] font-semibold hover:underline">
                Contact admissions
              </a>{" "}
              to get the full pricing details and explore your options.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            11. HOW TO APPLY
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
                Four straightforward steps stand between you and the start of your design career.
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
            12. FAQ
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
                  Everything you need to know about the UI/UX Design Diploma before applying.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">
                    Our admissions team is happy to help you make the right decision.
                  </p>
                  <a
                    href="mailto:hello@idealnovate.com?subject=UI%2FUX%20Diploma%20Question"
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
                      <span className="font-[Montserrat] font-bold text-[#163d3a] text-sm leading-snug">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#266D67] shrink-0 transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        openFaq === i ? "max-h-[400px]" : "max-h-0"
                      }`}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-gray-500 text-sm font-[Montserrat] font-light leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            13. FINAL CTA
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-[#163d3a] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #f9ba48 0%, transparent 45%), radial-gradient(circle at 80% 50%, #266D67 0%, transparent 45%)",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-xs font-semibold text-[#f9ba48] mb-6 font-[Montserrat]">
              <Zap className="w-3.5 h-3.5" />
              Next Cohort Filling Up
            </span>
            <h2 className="font-[Montserrat] font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Your Future as a Designer<br />
              <span className="text-[#f9ba48]">Begins Right Now</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Over 3,120 designers have taken this step. The only question is — are you next?
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
                href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20UI%2FUX%20Design%20Diploma"
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
