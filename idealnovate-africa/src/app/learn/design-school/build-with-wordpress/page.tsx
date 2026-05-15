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
  Layers, Search, Brain, ShoppingCart,
} from "lucide-react";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const curriculum = [
  {
    module: "01",
    title: "Introduction to WordPress & Web Fundamentals",
    desc: "Understand how WordPress powers over 43% of the internet. Set up your hosting, install WordPress, and navigate the dashboard with confidence before the week ends.",
    topics: [
      "What WordPress is and how it works",
      "Hosting, domain setup & WordPress installation",
      "Dashboard orientation & site settings",
      "Pages vs posts — understanding WordPress content types",
    ],
    duration: "Week 1",
  },
  {
    module: "02",
    title: "Themes, Templates & Visual Design",
    desc: "Choose, install, and customise professional WordPress themes. Understand the block editor and learn how to translate brand guidelines into a polished website.",
    topics: [
      "Premium vs free themes — choosing the right foundation",
      "Installing & configuring themes",
      "WordPress block editor (Gutenberg) fundamentals",
      "Brand colors, fonts & global styles",
    ],
    duration: "Week 2",
  },
  {
    module: "03",
    title: "Elementor Page Builder Mastery — Part 1",
    desc: "Master Elementor's drag-and-drop visual builder. Design pixel-perfect sections, hero banners, and page layouts without writing a single line of code.",
    topics: [
      "Elementor interface & core widgets",
      "Sections, columns & responsive grids",
      "Hero sections, headers & navigation design",
      "Typography, spacing & design fundamentals in Elementor",
    ],
    duration: "Week 3",
  },
  {
    module: "04",
    title: "Elementor Page Builder Mastery — Part 2",
    desc: "Go deeper into Elementor's advanced features. Build dynamic templates, global widgets, and responsive pages that look stunning on every device.",
    topics: [
      "Global widgets & template library",
      "Mobile & tablet responsive design in Elementor",
      "Popups, forms & lead capture with Elementor",
      "Animations, scroll effects & hover interactions",
    ],
    duration: "Week 4",
  },
  {
    module: "05",
    title: "Blog Design & Content Management",
    desc: "Design a high-converting blog and set up a complete content management system your clients can update themselves — without ever calling a developer.",
    topics: [
      "Blog page design & post templates",
      "Categories, tags & content architecture",
      "Custom author profiles & featured images",
      "Teaching clients to manage their own content",
    ],
    duration: "Week 5",
  },
  {
    module: "06",
    title: "WooCommerce & E-commerce Setup",
    desc: "Build functional online stores in WordPress. Install and configure WooCommerce, set up products, payment gateways, and shipping — the complete e-commerce stack.",
    topics: [
      "WooCommerce installation & initial setup",
      "Product pages, categories & inventory",
      "Payment gateways — Paystack, Flutterwave & Stripe",
      "Shipping zones, tax settings & order management",
    ],
    duration: "Week 6",
  },
  {
    module: "07",
    title: "SEO, Performance & Site Speed",
    desc: "Build websites that get found. Learn to optimise for search engines, improve Core Web Vitals, and deliver fast-loading pages that keep clients ranking and converting.",
    topics: [
      "Yoast SEO setup & on-page optimisation",
      "Image compression & performance best practices",
      "Caching plugins & CDN configuration",
      "Google Search Console & site audit workflow",
    ],
    duration: "Week 7",
  },
  {
    module: "08",
    title: "Plugins, Forms & Advanced Functionality",
    desc: "Extend WordPress beyond the basics. Discover the essential plugin ecosystem for forms, bookings, memberships, and custom functionality clients will pay a premium for.",
    topics: [
      "Essential plugin stack — what's worth installing",
      "WPForms & Contact Form 7 for lead generation",
      "Booking systems, membership plugins & custom fields",
      "Plugin conflicts, updates & maintenance best practices",
    ],
    duration: "Week 8",
  },
  {
    module: "09",
    title: "Security, Backups & Website Maintenance",
    desc: "Protect your clients' websites and build a recurring revenue stream through maintenance retainers. Learn how agencies make money long after the initial build.",
    topics: [
      "WordPress security hardening & firewall setup",
      "Automated backups — UpdraftPlus & cloud storage",
      "Malware scanning & vulnerability management",
      "Selling monthly maintenance retainers to clients",
    ],
    duration: "Week 9",
  },
  {
    module: "10",
    title: "Client Delivery, Freelancing & Portfolio Launch",
    desc: "Turn your WordPress skills into a business. Learn to scope, price, and deliver client projects — then build and launch your own WordPress portfolio as your graduation capstone.",
    topics: [
      "Project scoping & client briefing process",
      "WordPress pricing strategies for African freelancers",
      "Delivering, handing off & training clients",
      "Building & launching your WordPress portfolio",
    ],
    duration: "Week 10",
  },
];

const testimonials = [
  {
    name: "Aisha Mohammed",
    role: "Freelance WordPress Developer (Abuja)",
    text: "I built my first client website in Week 3 of the programme. By graduation I had four paying clients and was charging ₦200k per project. WordPress freelancing has completely replaced my 9-to-5 income — and I'm just getting started.",
    rating: 5,
    avatar: "AM",
    bg: "linear-gradient(135deg, #26aaa599 0%, #266D67 100%)",
  },
  {
    name: "Kofi Agyeman",
    role: "Web Developer @ Access Bank (Accra)",
    text: "I joined wanting to switch careers into tech. The WooCommerce module opened my eyes to e-commerce — I now build online stores for SMEs and earn retainer fees to maintain them. That recurring income changed my financial life.",
    rating: 5,
    avatar: "KA",
    bg: "linear-gradient(135deg, #f9ba4899 0%, #f9ba48 100%)",
  },
  {
    name: "Ngozi Adeyemi",
    role: "E-commerce Consultant (Lagos)",
    text: "As a business owner, I wanted to stop depending on expensive developers. Now I run and update my own WordPress store. The training paid for itself the first month I stopped outsourcing — and I now consult other SME owners on WooCommerce.",
    rating: 5,
    avatar: "NA",
    bg: "linear-gradient(135deg, #163d3a99 0%, #163d3a 100%)",
  },
  {
    name: "Seun Falope",
    role: "Founder, TechBridge Digital (Lagos)",
    text: "The SEO and maintenance modules are genuinely worth the price of the entire programme. I now pitch retainer packages to every WordPress client I build for — that's ₦50k–₦100k/month passive income per client. My agency runs on that model.",
    rating: 5,
    avatar: "SF",
    bg: "linear-gradient(135deg, #26aaa599 0%, #266D67 100%)",
  },
  {
    name: "Grace Asante",
    role: "Digital Marketing Manager @ Jumia Ghana",
    text: "I needed to stop waiting on developers for every landing page. WordPress gave me full autonomy. I now build and test campaign pages myself — and my team's output has doubled in speed since I completed this diploma.",
    rating: 4,
    avatar: "GA",
    bg: "linear-gradient(135deg, #163d3a99 0%, #163d3a 100%)",
  },
  {
    name: "Tunde Okafor",
    role: "WordPress Developer @ Stanbic IBTC",
    text: "Idealnovate's WordPress Diploma got me my job at Stanbic. The portfolio I built during the programme — four live WordPress sites including a WooCommerce store — was more impressive to the hiring manager than any certificate I'd ever had.",
    rating: 5,
    avatar: "TO",
    bg: "linear-gradient(135deg, #f9ba4899 0%, #f9ba48 100%)",
  },
];

const faqs = [
  {
    q: "Do I need any coding experience to learn WordPress?",
    a: "No coding experience is required. WordPress and Elementor are visual tools that let you build professional websites without writing HTML or CSS. Every technique in this programme is no-code. If you want to go deeper into customisation later, we introduce basic concepts — but the entire diploma is completable without a single line of code.",
  },
  {
    q: "What kinds of websites can I build with WordPress?",
    a: "With WordPress you can build virtually any website: business sites, portfolios, blogs, e-commerce stores (WooCommerce), booking platforms, membership sites, news portals, and more. By graduation you will have built a multi-page business site, a functional blog, and a WooCommerce-powered online store — all live and shareable.",
  },
  {
    q: "Will I be able to build and manage e-commerce stores?",
    a: "Yes — that is one of the most in-demand skills taught in this programme. Module 6 is dedicated entirely to WooCommerce setup, product management, and African payment gateway integration including Paystack, Flutterwave, and Stripe. Our graduates regularly land e-commerce clients and charge a significant premium for WooCommerce builds.",
  },
  {
    q: "How is WordPress different from Framer, Wix, or Squarespace?",
    a: "WordPress is the most powerful and flexible option — it's open-source, self-hosted, and powers 43% of the internet. Unlike Wix or Squarespace, you have full control over every aspect of your site. Unlike Framer, WordPress has a massive plugin ecosystem and is the standard platform for business and e-commerce clients across Africa and globally.",
  },
  {
    q: "Is freelancing with WordPress profitable in Africa?",
    a: "Extremely. WordPress developers in Africa charge ₦150k–₦500k per project, and WooCommerce store builds command even more. Beyond project fees, the maintenance retainer model taught in Module 9 generates ₦50k–₦100k/month per client for ongoing support — giving you predictable recurring income on top of new project revenue.",
  },
  {
    q: "How are classes delivered — live or recorded?",
    a: "All sessions are delivered live (minimum 2 sessions per week, up to 2 hours each) with all classes recorded so you can review them at your own pace. Diploma students get access to 1-on-1 mentor check-ins and live cohort critique sessions where you present your project work and receive direct instructor feedback.",
  },
  {
    q: "Is scholarship funding available?",
    a: "Yes. We offer an 80% scholarship to qualifying applicants — meaning you pay only 20% as a registration fee to secure your seat. Apply through our Scholarship page and our admissions team will review your application within 5 business days and contact you with a decision.",
  },
  {
    q: "What certificate do I receive on completion?",
    a: "You receive an Idealnovate Professional Certificate in Web Design with WordPress — a digitally verifiable credential with a LinkedIn-ready digital badge. The certificate is recognised by 48+ hiring partners across Africa and internationally, accepted for remote job applications, and validated by the e-commerce and agency clients who know WordPress as the industry standard.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BuildWithWordPressPage() {
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
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[88vh]">

            {/* LEFT — Content */}
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
                  <Globe className="w-3 h-3" />
                  Build with WordPress Diploma
                </span>
              </div>

              <h1
                className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
              >
                Build Websites<br />
                <span className="text-[#f9ba48]">the World Runs On.</span>
              </h1>

              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                WordPress powers 43% of the internet. Learn to build, customise, and deliver professional WordPress websites — and turn that skill into a sustainable income stream.
              </p>

              {/* Key feature badges */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "10 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Career Paths", value: "Freelance & Employment" },
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
                  href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Build%20with%20WordPress%20Diploma"
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
                  {["AM", "KA", "NA", "SF", "GA"].map((init, i) => (
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
                  Joined by <span className="text-white/70 font-semibold">892+ builders</span> across Africa
                </p>
              </div>
            </div>

            {/* RIGHT — Contained image card */}
            <div className="hidden lg:flex flex-col justify-center py-12 lg:py-16 px-8 xl:px-12">
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
                <Image
                  src="/IdealTalent6.png"
                  alt="Build with WordPress learners at Idealnovate"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to right, rgba(22,61,58,0.4) 0%, transparent 35%)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(22,61,58,0.55) 0%, transparent 40%)" }}
                />

                {/* Floating stat card */}
                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">92%</p>
                      <p className="text-gray-400 text-xs font-[Montserrat]">Freelancing within 3 months</p>
                    </div>
                  </div>
                </div>

                {/* Floating tool badge */}
                <div className="absolute bottom-6 right-6 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Primary Tool</p>
                  <div className="flex items-center gap-2">
                    {/* WordPress W mark */}
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                      <path d="M1 4L4 12L8 7L12 12L15 4" stroke="#f9ba48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white font-bold text-sm font-[Montserrat]">WordPress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            2. BENEFITS — Why Learn With Us
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <Globe className="w-3.5 h-3.5" />
                Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                The Fastest Path From<br />
                <span className="text-[#266D67]">Beginner to Web Professional</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                WordPress is the internet&apos;s most in-demand platform — and this diploma is built to get you building professionally in 10 weeks, with clients paying for your work before you graduate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <Globe className="w-7 h-7" />,
                  title: "The World&apos;s Biggest Platform",
                  desc: "WordPress powers over 43% of all websites on the internet. That's billions of sites — and the demand for skilled WordPress developers across Africa is growing faster than supply. Every business needs a web presence, and most of them need WordPress.",
                  color: "#21759b",
                },
                {
                  icon: <TrendingUp className="w-7 h-7" />,
                  title: "Recurring Income Through Retainers",
                  desc: "Unlike most web skills, WordPress creates a retainer income model. Every website you build becomes a client who needs monthly maintenance — SEO updates, security, backups. Our graduates earn ₦50k–₦100k/month per client in ongoing fees on top of new project revenue.",
                  color: "#266D67",
                },
                {
                  icon: <ShoppingCart className="w-7 h-7" />,
                  title: "E-commerce Builds That Pay More",
                  desc: "WooCommerce is the world's most used e-commerce platform. Building online stores for African SMEs — with Paystack and Flutterwave integration — commands significantly higher fees than standard WordPress builds. Our WooCommerce module is one of the most in-demand skills we teach.",
                  color: "#7b5ea7",
                },
                {
                  icon: <Users className="w-7 h-7" />,
                  title: "Community of 892+ Professionals",
                  desc: "Join a growing network of WordPress builders across Africa. Share project templates, exchange client referrals, get peer reviews, and stay connected to a community actively earning from the same skills you&apos;re learning — from Lagos to Nairobi to Accra.",
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
                  <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-base mb-2" dangerouslySetInnerHTML={{ __html: b.title }} />
                  <p className="text-gray-500 text-sm leading-relaxed font-[Montserrat]" dangerouslySetInnerHTML={{ __html: b.desc }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3. TOOLS YOU'LL MASTER
        ══════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 bg-[#163d3a]">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] opacity-20 blur-[100px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #266D67 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] opacity-15 blur-[80px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/6 border border-white/12 rounded-full text-white/50 text-xs font-semibold font-[Montserrat] mb-5 uppercase tracking-widest">
                <Zap className="w-3 h-3 text-[#f9ba48]" />
                Your Professional Toolkit
              </span>
              <h2 className="font-[Montserrat] font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Tools You&apos;ll
                <span className="text-[#f9ba48]"> Master</span>
              </h2>
              <p className="text-white/45 font-[Montserrat] text-lg max-w-lg mx-auto leading-relaxed">
                Go beyond the basics — learn the complete professional WordPress toolkit that agencies and freelancers across Africa rely on to build, optimise, and sell world-class websites.
              </p>
            </div>

            {/* 3 tools — centred wider cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  name: "WordPress",
                  tagline: "World's #1 CMS",
                  glow: "rgba(33,117,155,0.5)",
                  iconBg: "linear-gradient(145deg, #0d2d3e 0%, #1a5276 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      {/* Stylised W */}
                      <path d="M5 12L11 28L20 16L29 28L35 12" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  accent: "#21759b",
                },
                {
                  name: "Elementor",
                  tagline: "Visual Page Builder",
                  glow: "rgba(210,40,40,0.4)",
                  iconBg: "linear-gradient(145deg, #8B0000 0%, #C0392B 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      {/* Elementor E */}
                      <rect x="8" y="9" width="5" height="22" rx="2" fill="white" fillOpacity="0.95"/>
                      <rect x="13" y="9" width="19" height="5.5" rx="2" fill="white" fillOpacity="0.95"/>
                      <rect x="13" y="17.25" width="15" height="5.5" rx="2" fill="white" fillOpacity="0.65"/>
                      <rect x="13" y="25.5" width="19" height="5.5" rx="2" fill="white" fillOpacity="0.95"/>
                    </svg>
                  ),
                  accent: "#C0392B",
                },
                {
                  name: "WooCommerce",
                  tagline: "E-commerce Plugin",
                  glow: "rgba(155,92,143,0.45)",
                  iconBg: "linear-gradient(145deg, #5b2c6f 0%, #8e44ad 100%)",
                  icon: (
                    <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none">
                      {/* Shopping bag */}
                      <path d="M14 18V14a6 6 0 0 1 12 0v4" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                      <rect x="8" y="18" width="24" height="16" rx="3.5" stroke="white" strokeWidth="2.5"/>
                      <path d="M16 27a4 4 0 0 0 8 0" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                  accent: "#9b5c8f",
                },
              ].map((tool) => (
                <div
                  key={tool.name}
                  className="group relative flex flex-col items-center text-center p-8 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-white/16 transition-all duration-300 hover:-translate-y-2 cursor-default"
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ boxShadow: `0 0 50px 0 ${tool.glow}` }}
                  />
                  <div
                    className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{ background: tool.iconBg }}
                  >
                    <div className="absolute inset-0 rounded-2xl"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
                    <div className="relative z-10">{tool.icon}</div>
                  </div>
                  <div
                    className="w-6 h-0.5 rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-12"
                    style={{ background: tool.accent }}
                  />
                  <p className="font-[Montserrat] font-bold text-white text-base leading-tight mb-1">{tool.name}</p>
                  <p className="font-[Montserrat] text-white/35 text-sm leading-snug">{tool.tagline}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-white/25 text-xs font-[Montserrat] mt-12">
              Tools are introduced progressively — WordPress from Week 1, Elementor from Week 3, WooCommerce from Week 6.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            4. WHERE ALUMNI WORK
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
            5. STUDENT SUPPORT — We've Got Your Back
        ══════════════════════════════════════════ */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden grid lg:grid-cols-2 min-h-[420px]">

              {/* LEFT */}
              <div className="relative bg-gradient-to-br from-[#163d3a] via-[#1d5450] to-[#266D67] flex flex-col justify-center px-8 sm:px-12 py-12 lg:py-16">
                <div className="absolute inset-0 opacity-[0.05]"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 blur-3xl"
                  style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 70%)" }} />

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
                    From your first WordPress installation to your first paying client — our mentors and community are with you at every step of your journey.
                  </p>

                  <ul className="space-y-3 mb-10">
                    {[
                      "Dedicated WordPress mentor for the full 10 weeks",
                      "Missed a session? Every class is recorded",
                      "Community of 892+ builders across Africa",
                      "Freelance and retainer coaching until you land your first client",
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

              {/* RIGHT — image */}
              <div className="relative min-h-[320px] lg:min-h-0">
                <Image
                  src="/IdealTalent3.jpg"
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
            6. CURRICULUM
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
                  10 Modules.<br />
                  <span className="text-[#266D67]">One Complete Web Career.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  A structured, project-led journey from your first WordPress install to a portfolio of live client websites — and the retainer income to sustain it.
                </p>

                <div className="bg-[#163d3a] rounded-2xl p-6 space-y-4">
                  {[
                    { icon: <Layers className="w-4 h-4" />, label: "10 Core Modules" },
                    { icon: <Clock className="w-4 h-4" />, label: "10 Weeks" },
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
            7. OUR EDGE — What Makes Us Different
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
                  We don&apos;t just teach you to install WordPress — we build professionals who deliver complete web solutions, sell retainers, and operate as independent experts in a market that desperately needs them.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Globe className="w-6 h-6" />,
                    title: "Live Sites from Week Two",
                    desc: "You publish a real, live WordPress website in your second week — not a mockup, not a localhost preview. That momentum builds confidence fast and gives you something tangible to show clients before the programme is even halfway done.",
                  },
                  {
                    icon: <ShoppingCart className="w-6 h-6" />,
                    title: "E-commerce Skills Built In",
                    desc: "WooCommerce and African payment gateway integration (Paystack, Flutterwave) are core modules, not optional extras. You graduate able to build, configure, and deliver a fully functional online store — a skill that commands premium project fees.",
                  },
                  {
                    icon: <Brain className="w-6 h-6" />,
                    title: "The Retainer Income Model",
                    desc: "Module 9 teaches you exactly how to sell maintenance retainers to every client you build for — creating predictable recurring income on top of project fees. This is how agencies sustain themselves, and you learn it from day one.",
                  },
                  {
                    icon: <Target className="w-6 h-6" />,
                    title: "Africa-First Project Briefs",
                    desc: "Every project brief is rooted in African market realities — SME client types, local payment gateways, and business categories your future clients will immediately recognise. You graduate with a portfolio built specifically for the market you're entering.",
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
            8. CTA — Gradient
        ══════════════════════════════════════════ */}
        <section
          className="section-padding relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #163d3a 0%, #1d5450 40%, #266D67 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-15 blur-3xl rounded-full"
            style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 65%)" }} />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold font-[Montserrat] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9ba48] animate-pulse" />
              Applications Open Now
            </span>
            <h2
              className="font-[Montserrat] font-bold text-white leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Your First WordPress Client.<br />
              <span className="text-[#f9ba48]">Landed in 10 Weeks.</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 892+ developers across Africa who turned WordPress into a career — delivering client sites, building e-commerce stores, and earning retainers every month.
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
                href="mailto:hello@idealnovate.com?subject=Build%20with%20WordPress%20Diploma%20Enquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm"
              >
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
                Pick Your
                <span className="text-[#266D67]"> Start Date</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">
                Three cohorts per year — choose the one that fits your schedule. Seats are limited and fill fast.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  month: "Jul",
                  year: "2026",
                  label: "July 2026",
                  status: "Filling Fast",
                  statusColor: "#f9ba48",
                  accent: "#f9ba48",
                  spots: "10 seats left",
                  highlight: true,
                },
                {
                  month: "Sep",
                  year: "2026",
                  label: "September 2026",
                  status: "Open",
                  statusColor: "#266D67",
                  accent: "#266D67",
                  spots: "22 seats left",
                  highlight: false,
                },
                {
                  month: "Nov",
                  year: "2026",
                  label: "November 2026",
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
                    <div className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: `linear-gradient(90deg, ${cohort.accent}, #266D67)` }} />
                  )}

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: cohort.highlight ? "rgba(249,186,72,0.15)" : "#eef6f5" }}>
                        <Calendar className="w-6 h-6" style={{ color: cohort.accent }} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold font-[Montserrat]"
                        style={{ background: `${cohort.statusColor}20`, color: cohort.statusColor }}>
                        {cohort.status}
                      </span>
                    </div>

                    <p className={`font-[Montserrat] text-6xl font-bold leading-none mb-1 ${cohort.highlight ? "text-[#f9ba48]" : "text-[#163d3a]"}`}>
                      {cohort.month}
                    </p>
                    <p className={`font-[Montserrat] font-semibold text-base mb-4 ${cohort.highlight ? "text-white/40" : "text-gray-400"}`}>
                      {cohort.year}
                    </p>

                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-6 text-xs font-[Montserrat] font-medium ${cohort.highlight ? "bg-white/8 text-white/60" : "bg-white text-gray-500"}`}>
                      <Clock className="w-3.5 h-3.5" />
                      Starting {cohort.label}
                    </div>

                    <div className="flex items-center gap-2 mb-7">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: cohort.statusColor }} />
                      <span className={`text-xs font-[Montserrat] font-semibold ${cohort.highlight ? "text-white/70" : "text-gray-500"}`}>
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
            10. TESTIMONIALS — Student Stories
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
                  Real Developers.<br />
                  <span className="text-[#266D67]">Real Results.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  Graduates who went from zero WordPress experience to live client websites, recurring retainers, and sustainable creative careers.
                </p>
                <div className="space-y-4">
                  {[
                    { value: "4.8★", label: "Average diploma rating" },
                    { value: "892+", label: "WordPress graduates across Africa" },
                    { value: "92%", label: "Freelancing or employed within 3 months" },
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
                        style={{ background: t.bg }}
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
            11. TUITION & PAYMENT
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
                  sub: "Part or full payment at Week 2",
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
                    <div className="absolute top-0 left-0 right-0 h-1"
                      style={{ background: "linear-gradient(90deg, #f9ba48, #266D67)" }} />
                  )}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.popular ? "bg-[#f9ba48]/15 text-[#f9ba48]" : "bg-[#eef6f5] text-[#266D67]"}`}>
                        {plan.icon}
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold font-[Montserrat]"
                        style={{ background: `${plan.tagColor}20`, color: plan.tagColor }}>
                        {plan.tag}
                      </span>
                    </div>
                    <h3 className={`font-[Montserrat] font-bold text-xl mb-1 ${plan.popular ? "text-white" : "text-[#163d3a]"}`}>
                      {plan.title}
                    </h3>
                    <p className={`text-sm font-[Montserrat] mb-5 ${plan.popular ? "text-white/50" : "text-gray-400"}`}>
                      {plan.sub}
                    </p>
                    <p className={`font-[Montserrat] font-bold text-3xl mb-7 ${plan.popular ? "text-[#f9ba48]" : "text-[#163d3a]"}`}>
                      {plan.price}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {plan.perks.map((p) => (
                        <li key={p} className={`flex items-start gap-2.5 text-sm font-[Montserrat] ${plan.popular ? "text-white/75" : "text-gray-600"}`}>
                          <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-[#f9ba48]" : "text-[#266D67]"}`} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/company/scholarships"
                      className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm font-[Montserrat] transition-all ${
                        plan.popular ? "bg-[#f9ba48] text-white hover:bg-[#d4a030]" : "bg-[#163d3a] text-white hover:bg-[#266D67]"
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
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20Build%20with%20WordPress%20Diploma" className="text-[#266D67] font-semibold hover:underline">
                Contact admissions
              </a>{" "}
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
                Getting In Is
                <span className="text-[#266D67]"> Simple</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">
                Four straightforward steps stand between you and your first live WordPress website.
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
            13. FAQ
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
                  Everything you need to know about the Build with WordPress Diploma — from software requirements to freelance earning potential.
                </p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">
                    Our admissions team is happy to help you make the right decision.
                  </p>
                  <a
                    href="mailto:hello@idealnovate.com?subject=Build%20with%20WordPress%20Question"
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
                      <span className="font-[Montserrat] font-bold text-[#163d3a] text-sm leading-snug">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#266D67] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                      />
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
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute inset-0 opacity-15"
            style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #f9ba48 0%, transparent 45%), radial-gradient(circle at 80% 50%, #266D67 0%, transparent 45%)" }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f9ba48]/20 border border-[#f9ba48]/30 rounded-full text-xs font-semibold text-[#f9ba48] mb-6 font-[Montserrat]">
              <Zap className="w-3.5 h-3.5" />
              Next Cohort Filling Up
            </span>
            <h2 className="font-[Montserrat] font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
              Your WordPress Career<br />
              <span className="text-[#f9ba48]">Starts Right Here</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Over 892 developers across Africa have taken this step. Your first client website is 10 weeks away — the only question is, are you next?
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
                href="mailto:hello@idealnovate.com?subject=Admissions%20Enquiry%20%E2%80%93%20Build%20with%20WordPress%20Diploma"
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
