"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu, X, ChevronDown, ArrowRight,
  Palette, Brain, Megaphone, Briefcase,
  Users, Info, Handshake, Award, Calendar,
  Share2, Globe, HelpCircle, BookOpen,
} from "lucide-react";

// ─── Learn mega-menu data ──────────────────────────────────────────────────────

const learnSchools = [
  {
    label: "Design School",
    href: "/learn/design-school",
    icon: <Palette className="w-5 h-5" />,
    tagline: "Master UI/UX, graphics & brand design",
    accentBg: "bg-[#fff7e6]",
    accentText: "text-[#f9ba48]",
    accentHover: "group-hover/school:bg-[#f9ba48]",
    courses: [
      { label: "UI/UX Design",                       href: "/learn/design-school/ui-ux-design" },
      { label: "UX Research & Strategy with AI",     href: "/learn/design-school/ux-research" },
      { label: "UX Portfolio Storytelling with AI",  href: "/learn/design-school/ux-portfolio" },
      { label: "Build with Framer",                  href: "/learn/design-school/build-with-framer" },
      { label: "Build with WordPress",               href: "/learn/design-school/build-with-wordpress" },
    ],
  },
  {
    label: "Data & AI School",
    href: "/learn/data-ai-school",
    icon: <Brain className="w-5 h-5" />,
    tagline: "Data analytics, ML & AI engineering",
    accentBg: "bg-[#eef6f5]",
    accentText: "text-[#266D67]",
    accentHover: "group-hover/school:bg-[#266D67]",
    courses: [
      { label: "Data Analysis",                  href: "/learn/data-ai-school/data-analysis" },
      { label: "Python for Data Analysis",        href: "/learn/data-ai-school/python-data-analysis" },
      { label: "Tableau for Data Analysis",       href: "/learn/data-ai-school/tableau-data-analysis" },
      { label: "Microsoft Excel Mastery",         href: "/learn/data-ai-school/excel-mastery" },
      { label: "AI Workplace Fundamentals",       href: "/learn/data-ai-school/ai-fundamentals" },
      { label: "AI Prompting & Automations",        href: "/learn/data-ai-school/ai-agents" },
    ],
  },
  {
    label: "Marketing School",
    href: "/learn/marketing-school",
    icon: <Megaphone className="w-5 h-5" />,
    tagline: "Digital marketing & growth strategies",
    accentBg: "bg-[#fff7e6]",
    accentText: "text-[#f9ba48]",
    accentHover: "group-hover/school:bg-[#f9ba48]",
    courses: [
      { label: "Digital Advertising & Media Buying",   href: "/learn/marketing-school/digital-advertising" },
      { label: "Content Marketing Strategy with AI",   href: "/learn/marketing-school/content-marketing" },
    ],
  },
  {
    label: "Management School",
    href: "/learn/management-school",
    icon: <Briefcase className="w-5 h-5" />,
    tagline: "Product, project & tech leadership",
    accentBg: "bg-[#eef6f5]",
    accentText: "text-[#266D67]",
    accentHover: "group-hover/school:bg-[#266D67]",
    courses: [
      { label: "Product Management",            href: "/learn/management-school/product-management" },
      { label: "AI Product Strategy",           href: "/learn/management-school/ai-product-strategy" },
      { label: "Accounting Software Management",href: "/learn/management-school/accounting-software" },
    ],
  },
];

// ─── Standard dropdown nav items ──────────────────────────────────────────────

type DropdownChild = {
  label: string;
  href: string;
  icon: React.ReactNode;
  desc: string;
};

type NavItem = {
  label: string;
  href: string;
  children: DropdownChild[];
};

const navItems: NavItem[] = [
  {
    label: "Hire",
    href: "#",
    children: [
      { label: "Hire Individuals", href: "/hire/individuals", icon: <Users className="w-4 h-4" />,    desc: "Hire vetted tech talent from our pool" },
      { label: "Hire a Team",      href: "/hire/team",        icon: <Briefcase className="w-4 h-4" />, desc: "Build your full tech team with us" },
    ],
  },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us",     href: "/company/about",        icon: <Info className="w-4 h-4" />,      desc: "Our mission, vision & team" },
      { label: "Partnership",  href: "/company/partnership",  icon: <Handshake className="w-4 h-4" />, desc: "Partner with us to grow together" },
      { label: "Scholarships", href: "/company/scholarships", icon: <Award className="w-4 h-4" />,     desc: "Access funded learning opportunities" },
      { label: "Events",       href: "/company/events",       icon: <Calendar className="w-4 h-4" />,  desc: "Webinars, bootcamps & masterclasses" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Affiliate",  href: "/company/affiliate",  icon: <Share2 className="w-4 h-4" />,     desc: "Earn by referring learners to us" },
      { label: "Community",  href: "/company/community",  icon: <Globe className="w-4 h-4" />,      desc: "Join our thriving learning community" },
      { label: "FAQ",        href: "/company/faq",        icon: <HelpCircle className="w-4 h-4" />, desc: "Answers to your questions" },
      { label: "Blog",       href: "/resources/blog",     icon: <BookOpen className="w-4 h-4" />,   desc: "Articles, guides & industry insights" },
    ],
  },
  {
    label: "Marketplace",
    href: "/marketplace",
    children: [],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navigation() {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeMenu,     setActiveMenu]     = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSub,      setMobileSub]      = useState<string | null>(null);
  const navRef    = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const closeAll = () => { setActiveMenu(null); setMobileOpen(false); };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg shadow-[#266D67]/10"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-[#163d3a] text-white text-center py-2 text-xs font-medium tracking-wide font-[Montserrat]">
        <span>🎓 Scholarship applications now open — </span>
        <Link href="/company/scholarships" className="underline hover:text-[#f9ba48] transition-colors font-semibold">
          Apply Today →
        </Link>
      </div>

      {/* Main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative w-36 h-10">
              <Image src="/nav-logo.png" alt="Idealnovate Africa" fill sizes="144px" className="object-contain object-left" />
            </div>
          </Link>

          {/* ── Desktop nav ──────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-0.5">

            {/* ── Learn (Mega menu trigger) ── */}
            <div
              className="relative"
              onMouseEnter={() => openMenu("Learn")}
              onMouseLeave={scheduleClose}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-[Montserrat] ${
                  activeMenu === "Learn"
                    ? "text-[#266D67] bg-[#eef6f5]"
                    : "text-[#163d3a] hover:text-[#266D67] hover:bg-[#eef6f5]"
                }`}
              >
                Learn
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "Learn" ? "rotate-180 text-[#266D67]" : ""}`} />
              </button>
            </div>

            {/* ── Standard dropdown items ── */}
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={scheduleClose}
              >
                {item.children.length > 0 ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-[Montserrat] ${
                      activeMenu === item.label
                        ? "text-[#266D67] bg-[#eef6f5]"
                        : "text-[#163d3a] hover:text-[#266D67] hover:bg-[#eef6f5]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === item.label ? "rotate-180 text-[#266D67]" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-[#163d3a] hover:text-[#266D67] hover:bg-[#eef6f5] transition-all duration-200 font-[Montserrat]"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Standard dropdown panel */}
                {item.children.length > 0 && (
                  <div
                    className={`absolute top-full left-0 pt-1.5 transition-all duration-200 ${
                      activeMenu === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    style={{ minWidth: "260px" }}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl shadow-[#266D67]/12 border border-[#e2efee] overflow-hidden">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-[#eef6f5] group/item transition-all duration-150"
                            onClick={closeAll}
                          >
                            <span className="mt-0.5 w-8 h-8 rounded-lg bg-[#eef6f5] flex items-center justify-center text-[#266D67] group-hover/item:bg-[#266D67] group-hover/item:text-white transition-all duration-150 shrink-0">
                              {child.icon}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-[#163d3a] group-hover/item:text-[#266D67] transition-colors font-[Montserrat]">
                                {child.label}
                              </p>
                              <p className="text-xs text-gray-400 mt-0.5 font-[Montserrat]">{child.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="px-4 pb-3"><div className="h-px bg-[#e2efee]" /></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/signin"
              className="px-5 py-2 text-sm font-semibold text-[#266D67] border border-[#266D67] rounded-lg hover:bg-[#266D67] hover:text-white transition-all duration-200 font-[Montserrat]"
            >
              Sign In
            </Link>
            <Link
              href="/company/scholarships"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#266D67] rounded-lg hover:bg-[#163d3a] transition-all duration-200 shadow-sm font-[Montserrat]"
            >
              Get Scholarship
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#163d3a] hover:bg-[#eef6f5] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          LEARN MEGA MENU — full-width panel below nav bar
      ══════════════════════════════════════════════════════════════ */}
      <div
        className={`absolute top-full left-0 right-0 bg-white border-t border-[#e2efee] shadow-2xl shadow-[#266D67]/10 transition-all duration-200 ${
          activeMenu === "Learn"
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
        onMouseEnter={() => openMenu("Learn")}
        onMouseLeave={scheduleClose}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Eyebrow label */}
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 font-[Montserrat] mb-6">
            Explore Our Schools
          </p>

          {/* 4-column school grid */}
          <div className="grid grid-cols-4 gap-6">
            {learnSchools.map((school) => (
              <div key={school.label} className="group/school">

                {/* School header */}
                <Link
                  href={school.href}
                  className="flex items-center gap-3 mb-4 group/header"
                  onClick={closeAll}
                >
                  <div className={`w-9 h-9 rounded-xl ${school.accentBg} ${school.accentText} ${school.accentHover} group-hover/school:text-white flex items-center justify-center transition-all duration-200 shrink-0`}>
                    {school.icon}
                  </div>
                  <div>
                    <p className="font-[Montserrat] font-bold text-sm text-[#163d3a] group-hover/header:text-[#266D67] transition-colors leading-tight">
                      {school.label}
                    </p>
                    <p className="font-[Montserrat] text-[10px] text-gray-400 leading-snug mt-0.5">
                      {school.tagline}
                    </p>
                  </div>
                </Link>

                {/* Divider */}
                <div className="h-px bg-[#e2efee] mb-3" />

                {/* Course links */}
                <ul className="space-y-1">
                  {school.courses.map((course) => (
                    <li key={course.label}>
                      <Link
                        href={course.href}
                        className="group/course flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#eef6f5] transition-all duration-150"
                        onClick={closeAll}
                      >
                        <span className="w-1 h-1 rounded-full bg-gray-300 group-hover/course:bg-[#266D67] transition-colors shrink-0" />
                        <span className="font-[Montserrat] text-sm text-gray-600 group-hover/course:text-[#266D67] transition-colors leading-snug">
                          {course.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* View all link */}
                <Link
                  href={school.href}
                  className="inline-flex items-center gap-1 mt-4 px-2 text-xs font-semibold text-[#266D67] hover:text-[#163d3a] font-[Montserrat] transition-colors group/all"
                  onClick={closeAll}
                >
                  View all courses
                  <ArrowRight className="w-3 h-3 group-hover/all:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <div className="mt-8 pt-6 border-t border-[#e2efee] flex items-center justify-between">
            <div>
              <p className="font-[Montserrat] font-bold text-sm text-[#163d3a]">Not sure where to start?</p>
              <p className="font-[Montserrat] text-xs text-gray-400 mt-0.5">Take our free career quiz and find the right school for you</p>
            </div>
            <Link
              href="/company/scholarships"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#163d3a] text-white font-bold text-xs rounded-lg hover:bg-[#266D67] transition-all font-[Montserrat]"
              onClick={closeAll}
            >
              Take the Career Quiz
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          MOBILE MENU
      ══════════════════════════════════════════════════════════════ */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-[#e2efee] px-4 py-4 space-y-1 max-h-[82vh] overflow-y-auto">

          {/* ── Learn (mobile) ── */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#163d3a] hover:bg-[#eef6f5] transition-colors font-[Montserrat]"
              onClick={() => setMobileExpanded(mobileExpanded === "Learn" ? null : "Learn")}
            >
              Learn
              <ChevronDown className={`w-4 h-4 text-[#266D67] transition-transform ${mobileExpanded === "Learn" ? "rotate-180" : ""}`} />
            </button>

            <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === "Learn" ? "max-h-[800px]" : "max-h-0"}`}>
              <div className="pl-2 py-1 space-y-1">
                {learnSchools.map((school) => (
                  <div key={school.label}>
                    {/* School toggle */}
                    <button
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-[#eef6f5] text-sm transition-colors font-[Montserrat]"
                      onClick={() => setMobileSub(mobileSub === school.label ? null : school.label)}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`${school.accentText}`}>{school.icon}</span>
                        <span className="font-semibold text-[#163d3a]">{school.label}</span>
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 text-[#266D67] transition-transform ${mobileSub === school.label ? "rotate-180" : ""}`} />
                    </button>

                    {/* Course list */}
                    <div className={`overflow-hidden transition-all duration-200 ${mobileSub === school.label ? "max-h-60" : "max-h-0"}`}>
                      <div className="ml-10 pl-3 border-l-2 border-[#e2efee] py-1 space-y-0.5">
                        {school.courses.map((course) => (
                          <Link
                            key={course.label}
                            href={course.href}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-[#266D67] hover:bg-[#eef6f5] transition-colors font-[Montserrat]"
                            onClick={closeAll}
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                            {course.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Standard nav items (mobile) ── */}
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children.length > 0 ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#163d3a] hover:bg-[#eef6f5] transition-colors font-[Montserrat]"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 text-[#266D67] transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === item.label ? "max-h-96" : "max-h-0"}`}>
                    <div className="pl-4 py-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-[#eef6f5] text-sm text-gray-600 hover:text-[#266D67] transition-colors font-[Montserrat]"
                          onClick={closeAll}
                        >
                          <span className="text-[#266D67]">{child.icon}</span>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-[#163d3a] hover:bg-[#eef6f5] hover:text-[#266D67] transition-colors font-[Montserrat]"
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTAs */}
          <div className="pt-3 pb-1 flex flex-col gap-3 border-t border-[#e2efee] mt-2">
            <Link
              href="/signin"
              className="text-center px-5 py-3 text-sm font-semibold text-[#266D67] border border-[#266D67] rounded-lg hover:bg-[#266D67] hover:text-white transition-all font-[Montserrat]"
              onClick={closeAll}
            >
              Sign In
            </Link>
            <Link
              href="/company/scholarships"
              className="text-center px-5 py-3 text-sm font-semibold text-white bg-[#266D67] rounded-lg hover:bg-[#163d3a] transition-all shadow-sm font-[Montserrat]"
              onClick={closeAll}
            >
              Get Scholarship Access
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
