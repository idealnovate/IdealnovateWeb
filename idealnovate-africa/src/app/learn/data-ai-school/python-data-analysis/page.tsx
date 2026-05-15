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
  Layers, Search, Brain, Database, Code2,
} from "lucide-react";
import { useState } from "react";

const curriculum = [
  {
    module: "01", title: "Python & Jupyter Foundations", duration: "Week 1",
    desc: "Set up your Python environment and build confidence with core programming concepts — variables, loops, functions, and Jupyter Notebook workflows used by professional data analysts.",
    topics: ["Installing Python, Anaconda, and Jupyter Notebook", "Variables, data types, and operators", "Lists, dictionaries, and control flow", "Writing and calling functions", "Reading CSV files into Python"],
  },
  {
    module: "02", title: "NumPy for Numerical Computing", duration: "Week 2",
    desc: "Master NumPy arrays — the foundation of all data science libraries in Python. Learn vectorised operations, broadcasting, and statistical computations on structured numeric data.",
    topics: ["NumPy arrays vs Python lists", "Array slicing, indexing, and reshaping", "Vectorised arithmetic and broadcasting", "Statistical functions: mean, median, std, percentile", "Handling missing values with NumPy"],
  },
  {
    module: "03", title: "Pandas for Data Analysis", duration: "Weeks 3–4",
    desc: "Pandas is the core tool for data manipulation in Python. You will clean, reshape, merge, and aggregate real datasets from African businesses using professional-grade techniques.",
    topics: ["DataFrames and Series: creation and indexing", "Data cleaning: nulls, duplicates, and type conversion", "GroupBy and pivot tables in Pandas", "Merging, joining, and concatenating DataFrames", "Time-series data handling and resampling"],
  },
  {
    module: "04", title: "Data Visualisation: Matplotlib & Seaborn", duration: "Week 5",
    desc: "Build publication-quality charts and statistical plots. Learn to communicate findings visually using Matplotlib for control and Seaborn for statistical storytelling.",
    topics: ["Line, bar, scatter, and histogram charts in Matplotlib", "Subplots and figure customisation", "Seaborn: distribution plots, heatmaps, pairplots", "Styling charts for professional presentations", "Saving plots for reports and portfolios"],
  },
  {
    module: "05", title: "Capstone: EDA & Portfolio Project", duration: "Week 6",
    desc: "Apply every skill to a complete end-to-end exploratory data analysis on a real African business dataset. Build a polished Jupyter notebook portfolio project for employers.",
    topics: ["Full EDA workflow: load, clean, explore, visualise", "Identifying patterns and business insights", "Writing professional analysis narratives", "Publishing your notebook on GitHub", "Portfolio presentation and interview prep"],
  },
];

const testimonials = [
  { name: "Kelechi Eze", role: "Data Analyst @ Flutterwave", text: "I could write Python scripts after week two. By week five I had a full EDA project that impressed every interviewer I spoke to. The pace is intense but perfectly calibrated.", rating: 5, avatar: "KE", color: "#266D67" },
  { name: "Amaka Okonkwo", role: "Business Analyst, Lagos", text: "I came from Excel and was terrified of coding. This course made Python feel intuitive — the Pandas weeks especially. I went from pivot tables to groupby in days.", rating: 5, avatar: "AO", color: "#f9ba48" },
  { name: "Yaw Mensah", role: "Data Scientist, Accra", text: "The Seaborn week alone was worth the entire course. Understanding how to make statistical plots actually communicate findings changed how I approach every analysis.", rating: 5, avatar: "YM", color: "#163d3a" },
  { name: "Ngozi Adaeze", role: "Analytics Engineer, Nairobi", text: "Six weeks felt short going in, but the depth is real. My capstone project used a real Nigerian retail dataset — my interviewer at a top fintech asked for a copy of my notebook.", rating: 5, avatar: "NA", color: "#266D67" },
  { name: "Bello Musa", role: "Junior Data Scientist, Abuja", text: "I applied for a data science role two weeks after finishing this course and passed the technical screen. The NumPy and Pandas foundations made the difference.", rating: 5, avatar: "BM", color: "#f9ba48" },
  { name: "Ife Adeyinka", role: "Data Analyst @ Paystack", text: "Real data, real Python, real projects. Idealnovate does not waste your time on toy examples — everything we built could go directly into a portfolio. Mine did.", rating: 5, avatar: "IA", color: "#163d3a" },
];

const faqs = [
  { q: "Do I need any programming experience before starting?", a: "No. The course starts from absolute zero — installing Python, understanding what a variable is, and writing your first script. If you can use Excel, you have the logical thinking this course builds on. No prior coding is needed." },
  { q: "How is this different from the Data Analysis Diploma?", a: "The Data Analysis Diploma is a 12-week programme covering Excel, SQL, Tableau, Power BI, and Python basics. This 6-week Python course goes much deeper into Python specifically — covering NumPy, advanced Pandas, Matplotlib, and Seaborn in detail that the broader course cannot. Many students complete the Diploma first, then return for this focused course." },
  { q: "What Python version and tools will I use?", a: "Python 3.11+ via Anaconda (free), Jupyter Notebook (free), and the standard data science stack: NumPy, Pandas, Matplotlib, Seaborn. All tools are open-source and free to install. We provide full setup guides for Windows and Mac." },
  { q: "How many hours per week does the course require?", a: "Expect 8–10 hours per week — one live session per week plus independent project work. All sessions are recorded and available for 12 months. Most students complete the course while working full-time, though it requires focused effort each week." },
  { q: "What is the capstone project?", a: "In week 6, you receive a real dataset from an African business — typically retail, fintech, or logistics — and must produce a complete EDA: cleaning, analysis, visualisation, and written insights, all in a polished Jupyter notebook. Instructors provide structured feedback on every submission." },
  { q: "Will my Python skills be enough for data science roles after this?", a: "This course gives you solid Python and data manipulation foundations that are required for junior data science and analytics engineering roles. For machine learning and modelling, you would continue with our AI & Machine Learning track. Many graduates use this course as the foundation for a data science career path." },
  { q: "Is scholarship funding available?", a: "Yes. We offer an 80% scholarship to qualifying applicants — you pay 20% as a registration fee. Apply via our scholarship page and our admissions team will review your application within 5 business days." },
  { q: "What roles does this course prepare me for?", a: "Data analyst, analytics engineer, junior data scientist, and Python-based BI developer. Graduates have been hired at fintechs, banks, e-commerce companies, and tech startups across Nigeria, Ghana, and Kenya." },
];

export default function PythonDataAnalysisPage() {
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
                  <Code2 className="w-3 h-3" /> Python for Data Analysis
                </span>
              </div>
              <h1 className="font-[Montserrat] font-bold text-white leading-[1.08] tracking-tight mb-5" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}>
                Python Skills Africa&apos;s<br /><span className="text-[#f9ba48]">Data Employers Want</span>
              </h1>
              <p className="font-[Montserrat] text-white/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
                A focused 6-week intensive on Python for data — NumPy, Pandas, Matplotlib, and Seaborn. Go from zero coding experience to a job-ready portfolio that speaks for itself.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: <Clock className="w-4 h-4" />, label: "Duration", value: "6 Weeks" },
                  { icon: <Monitor className="w-4 h-4" />, label: "Learning Mode", value: "Online" },
                  { icon: <Globe className="w-4 h-4" />, label: "Job Opportunities", value: "Data & Analytics Roles" },
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
                <a href="mailto:hello@idealnovate.com?subject=Python%20for%20Data%20Analysis%20Enquiry" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold text-sm rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat]">
                  <MessageSquare className="w-4 h-4" /> Talk with Admissions
                </a>
                <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-all font-[Montserrat]">
                  Start an Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
                <div className="flex -space-x-2">
                  {["KE", "AO", "YM", "NA", "BM"].map((init, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 border-[#163d3a] flex items-center justify-center text-[9px] font-bold text-white" style={{ background: i % 2 === 0 ? "#f9ba48" : "#266D67" }}>{init}</div>
                  ))}
                </div>
                <p className="text-white/45 text-xs font-[Montserrat]">Joined by <span className="text-white/70 font-semibold">1,640+ Python analysts</span> across Africa</p>
              </div>
            </div>
            <div className="hidden lg:flex flex-col justify-center py-12 lg:py-16 px-8 xl:px-12">
              <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[500px]">
                <Image src="/IdealTalent6.png" alt="Python Data Analysis learners at Idealnovate" fill className="object-cover object-top" priority />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(22,61,58,0.4) 0%, transparent 35%)" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(22,61,58,0.55) 0%, transparent 40%)" }} />
                <div className="absolute top-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67]"><Star className="w-5 h-5" fill="currentColor" /></div>
                    <div>
                      <p className="font-bold text-[#163d3a] text-xl font-[Montserrat] leading-none">4.9★</p>
                      <p className="text-gray-400 text-xs font-[Montserrat]">Highest-rated data course</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-[#163d3a] border border-white/10 rounded-xl px-4 py-3">
                  <p className="text-white/50 text-[10px] font-[Montserrat] mb-1 uppercase tracking-wider">Primary Language</p>
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[#f9ba48]" />
                    <span className="text-white font-bold text-sm font-[Montserrat]">Python 3</span>
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
                <Code2 className="w-3.5 h-3.5" /> Why Learn With Us
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
                The Python Course Built<br /><span className="text-[#266D67]">for African Data Careers</span>
              </h2>
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg leading-relaxed">
                Not a generic online tutorial. A six-week structured path from first script to polished portfolio.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: <Database className="w-7 h-7" />, title: "Real African Data from Day One", desc: "Every dataset in this course comes from real, anonymised African businesses — retail, fintech, logistics, and healthcare. You learn in context, not in a vacuum.", color: "#f9ba48" },
                { icon: <Code2 className="w-7 h-7" />, title: "Code, Not Theory", desc: "Every session is hands-on. You write code, break things, fix them, and understand why — the only way to actually learn Python for professional use.", color: "#266D67" },
                { icon: <Briefcase className="w-7 h-7" />, title: "Portfolio-First Capstone", desc: "Week 6 is a complete EDA project on a real dataset — cleaned, analysed, visualised, and written up in a Jupyter notebook ready to share with employers.", color: "#163d3a" },
                { icon: <TrendingUp className="w-7 h-7" />, title: "Data Science Entry Point", desc: "This course is the recognised foundation for Idealnovate's AI and Machine Learning track. Graduates have a clear, structured path into data science.", color: "#f9ba48" },
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
                Libraries You&apos;ll <span className="text-[#f9ba48]">Master</span>
              </h2>
              <p className="text-white/45 font-[Montserrat] text-lg max-w-lg mx-auto leading-relaxed">
                The exact Python stack used by data analysts and scientists at Africa&apos;s top companies.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Python", tagline: "Core Language", glow: "rgba(59,130,246,0.5)", iconBg: "linear-gradient(145deg, #1a3a6b 0%, #3b82f6 100%)", accent: "#3b82f6", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><path d="M19 5C13 5 10 7.5 10 11v4h9v2H8C5 17 3 19.5 3 23v4c0 3.5 3 6 7 6v-3c-2 0-4-1-4-3v-4c0-2 1.5-3 4-3h10c3 0 5-2 5-4v-8c0-3-2.5-6-6-6z" fill="white" fillOpacity="0.9"/><path d="M19 33C25 33 28 30.5 28 27v-4h-9v-2h12c3 0 5-2.5 5-6v-4c0-3.5-3-6-7-6v3c2 0 4 1 4 3v4c0 2-1.5 3-4 3H19c-3 0-5 2-5 4v8c0 3 2.5 6 5 6z" fill="white" fillOpacity="0.5"/><circle cx="14.5" cy="12" r="1.5" fill="#1a3a6b"/><circle cx="23.5" cy="26" r="1.5" fill="#1a3a6b"/></svg> },
                { name: "Pandas", tagline: "Data Manipulation", glow: "rgba(130,80,200,0.5)", iconBg: "linear-gradient(145deg, #2d0060 0%, #8250c8 100%)", accent: "#8250c8", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="8" y="5" width="6" height="28" rx="3" fill="white" fillOpacity="0.9"/><rect x="24" y="5" width="6" height="28" rx="3" fill="white" fillOpacity="0.9"/><rect x="8" y="15" width="22" height="5" rx="2.5" fill="white" fillOpacity="0.5"/></svg> },
                { name: "Matplotlib", tagline: "Data Plotting", glow: "rgba(20,114,175,0.5)", iconBg: "linear-gradient(145deg, #0a3a6e 0%, #1472AF 100%)", accent: "#1472AF", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><polyline points="5,30 12,18 18,24 25,10 33,20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/><circle cx="5" cy="30" r="2" fill="white"/><circle cx="12" cy="18" r="2" fill="white"/><circle cx="18" cy="24" r="2" fill="white"/><circle cx="25" cy="10" r="2" fill="white"/><circle cx="33" cy="20" r="2" fill="white"/></svg> },
                { name: "Seaborn", tagline: "Statistical Viz", glow: "rgba(66,135,180,0.5)", iconBg: "linear-gradient(145deg, #0d3550 0%, #4287B4 100%)", accent: "#4287B4", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="5" y="28" width="5" height="5" rx="1" fill="white" fillOpacity="0.9"/><rect x="12" y="22" width="5" height="11" rx="1" fill="white" fillOpacity="0.9"/><rect x="19" y="16" width="5" height="17" rx="1" fill="white" fillOpacity="0.9"/><rect x="26" y="10" width="5" height="23" rx="1" fill="white" fillOpacity="0.7"/><path d="M5 26 Q14 14 33 8" stroke="white" strokeWidth="1.5" strokeDasharray="3 2" fill="none"/></svg> },
                { name: "Jupyter", tagline: "Interactive Notebooks", glow: "rgba(243,156,18,0.5)", iconBg: "linear-gradient(145deg, #7a3500 0%, #F39C12 100%)", accent: "#F39C12", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><circle cx="19" cy="19" r="13" stroke="white" strokeWidth="2" fill="none"/><circle cx="19" cy="8" r="2.5" fill="white"/><circle cx="30" cy="27" r="2.5" fill="white"/><circle cx="8" cy="27" r="2.5" fill="white"/></svg> },
                { name: "NumPy", tagline: "Numerical Computing", glow: "rgba(77,151,201,0.5)", iconBg: "linear-gradient(145deg, #013870 0%, #4D97C9 100%)", accent: "#4D97C9", icon: <svg viewBox="0 0 38 38" className="w-9 h-9" fill="none"><rect x="5" y="5" width="12" height="12" rx="2" stroke="white" strokeWidth="2" fill="none"/><rect x="21" y="5" width="12" height="12" rx="2" stroke="white" strokeWidth="2" fill="none"/><rect x="5" y="21" width="12" height="12" rx="2" stroke="white" strokeWidth="2" fill="none"/><rect x="21" y="21" width="12" height="12" rx="2" stroke="white" strokeWidth="2" fill="none"/></svg> },
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
            <p className="text-center text-white/25 text-xs font-[Montserrat] mt-10">All libraries introduced progressively across 5 modules — no prior coding experience required.</p>
          </div>
        </section>

        {/* ── 4. WHERE ALUMNI WORK ── */}
        <section className="py-14 bg-[#f4f9f8] border-y border-[#e2efee]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">Where our alumni work</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Flutterwave", color: "#f5a623" }, { name: "Paystack", color: "#011B33" },
                { name: "Kuda Bank", color: "#7c3aed" }, { name: "MTN Nigeria", color: "#f9a825" },
                { name: "Interswitch", color: "#e02020" }, { name: "Moniepoint", color: "#4f46e5" },
                { name: "Andela", color: "#0d6efd" }, { name: "OPay", color: "#34d186" },
                { name: "PiggyVest", color: "#1faa00" }, { name: "Carbon", color: "#00b67a" },
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
                    Practitioners Teaching<br /><span className="text-[#f9ba48]">Practitioners</span>
                  </h2>
                  <p className="text-white/65 font-[Montserrat] text-base leading-relaxed mb-8">
                    Every instructor is a working data professional who uses Python daily — analysts, engineers, and scientists from Africa&apos;s leading tech and finance companies.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {["Weekly live coding sessions with practising data professionals", "Python help desk for debugging and concept questions", "Code review and feedback on your Jupyter notebooks", "Alumni network and hiring partner introductions"].map((item) => (
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
                <Image src="/IdealTeam.png" alt="Idealnovate Python instructors" fill className="object-cover object-center" />
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
                  5 Modules.<br /><span className="text-[#266D67]">One Stack.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
                  From your first Python script to a complete data portfolio — in just 6 weeks of focused, applied learning.
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
                  Six weeks of focused Python — not a side module in a broader course. Everything is designed to get you from zero to portfolio-ready.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: <Database className="w-6 h-6" />, title: "Real African Datasets", desc: "All exercises and projects use real, anonymised data from Nigerian, Kenyan, and Ghanaian businesses — so you understand the context, not just the code." },
                  { icon: <Brain className="w-6 h-6" />, title: "Live Code Reviews", desc: "Instructors review student code live in cohort sessions — the same code review culture used at top data teams globally. You learn as much from others' code as your own." },
                  { icon: <Target className="w-6 h-6" />, title: "12-Month Access", desc: "Your recordings, notebooks, and resource library remain accessible for 12 months after graduation — your personal Python reference library." },
                  { icon: <TrendingUp className="w-6 h-6" />, title: "Data Science Pathway", desc: "Graduates are pre-qualified for Idealnovate's AI and Machine Learning track — this course is explicitly designed as the foundation for data science careers." },
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
              Python Is the Language<br /><span className="text-[#f9ba48]">of Africa&apos;s Data Future</span>
            </h2>
            <p className="text-white/65 font-[Montserrat] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Join 1,640+ graduates who built their Python careers with Idealnovate — and start writing code that matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-xl font-[Montserrat] text-sm">
                Apply Now — It&apos;s Easy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Python%20for%20Data%20Analysis%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
                { month: "Aug", year: "2026", fullDate: "Starts August 3, 2026", status: "Filling Fast", statusColor: "#f9ba48", accent: "#f9ba48", spots: "12 seats left", highlight: true },
                { month: "Nov", year: "2026", fullDate: "Starts November 2, 2026", status: "Open", statusColor: "#266D67", accent: "#266D67", spots: "24 seats left", highlight: false },
                { month: "Feb", year: "2027", fullDate: "Starts February 1, 2027", status: "Open", statusColor: "#266D67", accent: "#163d3a", spots: "30 seats left", highlight: false },
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
                  Real Code.<br /><span className="text-[#266D67]">Real Careers.</span>
                </h2>
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">From first script to first offer — graduates who built Python careers in six weeks.</p>
                <div className="space-y-4">
                  {[{ value: "4.9★", label: "Average course rating" }, { value: "1,640+", label: "Python graduates across Africa" }, { value: "88%", label: "Employed within 4 months" }].map((s) => (
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
              <a href="mailto:hello@idealnovate.com?subject=Tuition%20Enquiry%20%E2%80%93%20Python%20for%20Data%20Analysis" className="text-[#266D67] font-semibold hover:underline">Contact admissions</a> for full pricing details.
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
              <p className="mt-4 text-gray-500 font-[Montserrat] font-light text-lg">Four straightforward steps between you and your Python career.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", icon: <Search className="w-6 h-6" />, title: "Explore the Programme", desc: "Read through the curriculum, payment options, and cohort dates. Attend a free info session or reach out with any questions." },
                { step: "02", icon: <Briefcase className="w-6 h-6" />, title: "Submit Your Application", desc: "Complete our short application form. No essays, no prior coding experience needed — just tell us about yourself and your goals." },
                { step: "03", icon: <MessageSquare className="w-6 h-6" />, title: "Talk with Admissions", desc: "A member of our admissions team will reach out within 48 hours to discuss scholarship eligibility and confirm your fit." },
                { step: "04", icon: <GraduationCap className="w-6 h-6" />, title: "Enrol & Secure Your Seat", desc: "Complete your registration, secure your cohort seat, and receive your pre-programme Python setup guide. Day one starts here." },
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
                <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">Everything you need to know about the Python for Data Analysis course before applying.</p>
                <div className="bg-[#163d3a] rounded-2xl p-6">
                  <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
                  <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our admissions team is happy to help you make the right decision.</p>
                  <a href="mailto:hello@idealnovate.com?subject=Python%20for%20Data%20Analysis%20Question" className="block text-center py-2.5 bg-[#f9ba48] text-white font-bold text-xs rounded-lg hover:bg-[#d4a030] transition-all font-[Montserrat]">Email Admissions</a>
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
              Write Code That<br /><span className="text-[#f9ba48]">Builds Your Career</span>
            </h2>
            <p className="font-[Montserrat] text-white/60 text-lg mb-10 max-w-xl mx-auto">Over 1,640 Python analysts have taken this step. Your portfolio project is six weeks away.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/company/scholarships" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-lg font-[Montserrat] text-sm">
                Start an Application <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="mailto:hello@idealnovate.com?subject=Python%20for%20Data%20Analysis%20Enquiry" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all font-[Montserrat] text-sm">
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
