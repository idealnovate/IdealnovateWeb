"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu, X, ChevronDown, ChevronRight,
  GraduationCap, Brain, Megaphone, Briefcase,
  Users, Info, Handshake, Award, Calendar, Share2, Globe, HelpCircle,
  BookOpen, Layers, Zap,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type SubItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
  desc: string;
};

type NavChild = {
  label: string;
  href: string;
  icon: React.ReactNode;
  desc: string;
  subItems?: SubItem[];
};

type NavItem = {
  label: string;
  href: string;
  children: NavChild[];
};

// ─── Data ────────────────────────────────────────────────────────────────────

const navItems: NavItem[] = [
  {
    label: "Learn",
    href: "#",
    children: [
      {
        label: "Design School",
        href: "/learn/design-school",
        icon: <GraduationCap className="w-4 h-4" />,
        desc: "Master UI/UX, graphics & brand design",
        subItems: [
          { label: "Elementary", href: "/learn/design-school?level=elementary", icon: <BookOpen className="w-3.5 h-3.5" />, desc: "Start from zero — 4 to 8 weeks" },
          { label: "Diploma", href: "/learn/design-school?level=diploma", icon: <Layers className="w-3.5 h-3.5" />, desc: "Go professional — 3 months" },
          { label: "Masterclass", href: "/learn/design-school?level=masterclass", icon: <Zap className="w-3.5 h-3.5" />, desc: "Become an expert — 6 months" },
        ],
      },
      { label: "Data & AI School",    href: "/learn/data-ai-school",    icon: <Brain className="w-4 h-4" />,     desc: "Data analytics, ML & AI engineering" },
      { label: "Marketing School",    href: "/learn/marketing-school",   icon: <Megaphone className="w-4 h-4" />, desc: "Digital marketing & growth strategies" },
      { label: "Management School",   href: "/learn/management-school",  icon: <Briefcase className="w-4 h-4" />, desc: "Product, project & tech leadership" },
    ],
  },
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
      { label: "About Us",    href: "/company/about",         icon: <Info className="w-4 h-4" />,       desc: "Our mission, vision & team" },
      { label: "Partnership", href: "/company/partnership",   icon: <Handshake className="w-4 h-4" />,  desc: "Partner with us to grow together" },
      { label: "Scholarships",href: "/company/scholarships",  icon: <Award className="w-4 h-4" />,      desc: "Access funded learning opportunities" },
      { label: "Events",      href: "/company/events",        icon: <Calendar className="w-4 h-4" />,   desc: "Webinars, bootcamps & masterclasses" },
      { label: "Affiliate",   href: "/company/affiliate",     icon: <Share2 className="w-4 h-4" />,     desc: "Earn by referring learners to us" },
      { label: "Community",   href: "/company/community",     icon: <Globe className="w-4 h-4" />,      desc: "Join our thriving learning community" },
      { label: "FAQ",         href: "/company/faq",           icon: <HelpCircle className="w-4 h-4" />, desc: "Answers to your questions" },
    ],
  },
  {
    label: "Marketplace",
    href: "/marketplace",
    children: [],
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Navigation() {
  const [isScrolled, setIsScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [activeMenu, setActiveMenu]           = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu]     = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded]   = useState<string | null>(null);
  const [mobileSub, setMobileSub]             = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
        setActiveSubMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg shadow-[#068276]/10"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-[#022c28] text-white text-center py-2 text-xs font-medium tracking-wide">
        <span>🎓 Scholarship applications now open — </span>
        <Link href="/company/scholarships" className="underline hover:text-[#f4a85e] transition-colors font-semibold">
          Apply Today →
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="relative w-36 h-10">
              <Image src="/nav-logo.png" alt="Idealnovate Africa" fill sizes="144px" className="object-contain object-left" />
            </div>
          </Link>

          {/* ── Desktop Nav ─────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => { setActiveMenu(item.label); setActiveSubMenu(null); }}
                onMouseLeave={() => { setActiveMenu(null); setActiveSubMenu(null); }}
              >
                {/* Top-level button / link */}
                {item.children.length > 0 ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-[Montserrat] ${
                      activeMenu === item.label
                        ? "text-[#068276] bg-[#f0faf8]"
                        : "text-[#022c28] hover:text-[#068276] hover:bg-[#f0faf8]"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === item.label ? "rotate-180 text-[#068276]" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold text-[#022c28] hover:text-[#068276] hover:bg-[#f0faf8] transition-all duration-200 font-[Montserrat]"
                  >
                    {item.label}
                  </Link>
                )}

                {/* First-level dropdown */}
                {item.children.length > 0 && (
                  <div
                    className={`absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-2xl shadow-[#068276]/15 border border-[#e8f5f3] overflow-visible transition-all duration-200 ${
                      activeMenu === item.label
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    style={{ minWidth: item.label === "Company" ? "300px" : "270px" }}
                  >
                    <div className="p-2">
                      {item.children.map((child) => (
                        <div
                          key={child.label}
                          className="relative"
                          onMouseEnter={() => child.subItems && setActiveSubMenu(child.label)}
                          onMouseLeave={() => child.subItems && setActiveSubMenu(null)}
                        >
                          {/* Child row */}
                          <Link
                            href={child.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150 group/item ${
                              activeSubMenu === child.label ? "bg-[#f0faf8]" : "hover:bg-[#f0faf8]"
                            }`}
                            onClick={() => { setActiveMenu(null); setActiveSubMenu(null); }}
                          >
                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 shrink-0 ${
                              activeSubMenu === child.label
                                ? "bg-[#068276] text-white"
                                : "bg-[#f0faf8] text-[#068276] group-hover/item:bg-[#068276] group-hover/item:text-white"
                            }`}>
                              {child.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className={`text-sm font-semibold font-[Montserrat] transition-colors ${
                                activeSubMenu === child.label ? "text-[#068276]" : "text-[#022c28] group-hover/item:text-[#068276]"
                              }`}>
                                {child.label}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5 font-[Montserrat] truncate">{child.desc}</div>
                            </div>
                            {child.subItems && (
                              <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-colors ${activeSubMenu === child.label ? "text-[#068276]" : "text-gray-300"}`} />
                            )}
                          </Link>

                          {/* Second-level flyout (sub-dropdown) */}
                          {child.subItems && (
                            <div
                              className={`absolute left-full top-0 ml-1 bg-white rounded-2xl shadow-2xl shadow-[#068276]/15 border border-[#e8f5f3] transition-all duration-200 ${
                                activeSubMenu === child.label
                                  ? "opacity-100 translate-x-0 pointer-events-auto"
                                  : "opacity-0 -translate-x-2 pointer-events-none"
                              }`}
                              style={{ minWidth: "230px" }}
                            >
                              {/* Sub-dropdown header */}
                              <div className="px-4 pt-3 pb-2 border-b border-[#e8f5f3]">
                                <p className="font-[Montserrat] text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                  {child.label} Levels
                                </p>
                              </div>
                              <div className="p-2">
                                {child.subItems.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f0faf8] group/sub transition-all duration-150"
                                    onClick={() => { setActiveMenu(null); setActiveSubMenu(null); }}
                                  >
                                    <span className="w-7 h-7 rounded-lg bg-[#f0faf8] flex items-center justify-center text-[#068276] group-hover/sub:bg-[#068276] group-hover/sub:text-white transition-all duration-150 shrink-0">
                                      {sub.icon}
                                    </span>
                                    <div>
                                      <div className="text-sm font-semibold text-[#022c28] group-hover/sub:text-[#068276] transition-colors font-[Montserrat]">
                                        {sub.label}
                                      </div>
                                      <div className="text-xs text-gray-400 mt-0.5 font-[Montserrat]">{sub.desc}</div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="px-4 pb-3"><div className="h-px bg-[#e8f5f3]" /></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/signin" className="px-5 py-2 text-sm font-semibold text-[#068276] border border-[#068276] rounded-lg hover:bg-[#068276] hover:text-white transition-all duration-200 font-[Montserrat]">
              Sign In
            </Link>
            <Link href="/company/scholarships" className="px-5 py-2 text-sm font-semibold text-white bg-[#068276] rounded-lg hover:bg-[#022c28] transition-all duration-200 shadow-sm font-[Montserrat]">
              Get Scholarship Access
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#022c28] hover:bg-[#f0faf8] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ─────────────────────────────────────────────── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-[#e8f5f3] px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children.length > 0 ? (
                <>
                  {/* Top-level toggle */}
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-[#022c28] hover:bg-[#f0faf8] transition-colors font-[Montserrat]"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 text-[#068276] transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>

                  {/* Children */}
                  <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === item.label ? "max-h-[600px]" : "max-h-0"}`}>
                    <div className="pl-4 py-1 space-y-1">
                      {item.children.map((child) => (
                        <div key={child.label}>
                          {child.subItems ? (
                            <>
                              {/* Child with sub-items — toggle */}
                              <button
                                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-[#f0faf8] text-sm text-gray-600 hover:text-[#068276] transition-colors font-[Montserrat]"
                                onClick={() => setMobileSub(mobileSub === child.label ? null : child.label)}
                              >
                                <span className="flex items-center gap-3">
                                  <span className="text-[#068276]">{child.icon}</span>
                                  {child.label}
                                </span>
                                <ChevronDown className={`w-3.5 h-3.5 text-[#068276] transition-transform ${mobileSub === child.label ? "rotate-180" : ""}`} />
                              </button>

                              {/* Sub-items */}
                              <div className={`overflow-hidden transition-all duration-200 ${mobileSub === child.label ? "max-h-60" : "max-h-0"}`}>
                                <div className="pl-6 py-1 space-y-1 border-l-2 border-[#e8f5f3] ml-6 mt-1">
                                  {child.subItems.map((sub) => (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-[#068276] hover:bg-[#f0faf8] transition-colors font-[Montserrat]"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      <span className="text-[#068276]">{sub.icon}</span>
                                      <div>
                                        <p className="font-semibold text-[#022c28] text-xs">{sub.label}</p>
                                        <p className="text-gray-400 text-[10px]">{sub.desc}</p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </>
                          ) : (
                            <Link
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-[#f0faf8] text-sm text-gray-600 hover:text-[#068276] transition-colors font-[Montserrat]"
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className="text-[#068276]">{child.icon}</span>
                              {child.label}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-[#022c28] hover:bg-[#f0faf8] hover:text-[#068276] transition-colors font-[Montserrat]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-3 pb-1 flex flex-col gap-3 border-t border-[#e8f5f3] mt-2">
            <Link href="/signin" className="text-center px-5 py-3 text-sm font-semibold text-[#068276] border border-[#068276] rounded-lg hover:bg-[#068276] hover:text-white transition-all font-[Montserrat]" onClick={() => setMobileOpen(false)}>
              Sign In
            </Link>
            <Link href="/company/scholarships" className="text-center px-5 py-3 text-sm font-semibold text-white bg-[#068276] rounded-lg hover:bg-[#022c28] transition-all shadow-sm font-[Montserrat]" onClick={() => setMobileOpen(false)}>
              Get Scholarship Access
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
