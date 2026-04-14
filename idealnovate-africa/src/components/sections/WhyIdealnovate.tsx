"use client";

import Image from "next/image";
import { Target, Briefcase, Users, Globe, BarChart, Shield, Cpu, HeartHandshake, ArrowRight, TrendingUp, Award, Star } from "lucide-react";

const reasons = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Job-Focused Curriculum",
    description: "Every programme is designed around real employer needs. We teach only what gets you hired — no fluff, no outdated theory.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Employer Network",
    description: "Our hiring partners actively recruit from our talent pool. Complete a programme and step into real job opportunities.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "World-Class Instructors",
    description: "Learn from vetted industry practitioners — not just academics. Real people solving real problems, passing on real skills.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Built for Africa, Recognised Globally",
    description: "Our certifications are respected across African markets and internationally, giving your career a truly global edge.",
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Track Your Progress",
    description: "With our learner dashboard, you can track milestones, measure skill growth, and stay motivated every step of the way.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Accredited Certifications",
    description: "Graduate with professional-grade certificates that stand out on LinkedIn, CVs, and job applications.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Cutting-Edge Tech Stack",
    description: "Our programmes are constantly updated to include the latest tools — from AI automation to modern design platforms.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Scholarship & Affordability",
    description: "We believe talent has no financial barrier. Access quality tech education through our funded scholarship programmes.",
  },
];


export default function WhyIdealnovate() {
  return (
    <section className="section-padding bg-[#f4f9f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16 lg:mb-20">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#e2efee] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#266D67]" />
              Why We Stand Out
            </span>
            <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
              The Smarter Path to
              <br />
              <span className="text-[#266D67]">Your Dream Career</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-500 text-lg font-[Montserrat] font-light leading-relaxed">
              We don&apos;t just teach skills — we engineer career transformations. From your first lesson to your first paycheck, Idealnovate Africa is with you every step of the way.
            </p>
          </div>
        </div>

        {/* Metrics strip */}
        <div className="relative bg-[#163d3a] rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #f9ba48 0%, transparent 65%)" }} />
          <div className="relative z-10 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { value: "94%",  label: "Job placement rate",         sub: "Within 6 months of completion",   icon: <Award className="w-5 h-5" /> },
              { value: "4.9★", label: "Learner satisfaction rating", sub: "Across all programmes",            icon: <Star  className="w-5 h-5" /> },
              { value: "3×",   label: "Average salary increase",     sub: "Post-certification growth",        icon: <TrendingUp className="w-5 h-5" /> },
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

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#266D67]/30 hover:shadow-xl hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eef6f5] flex items-center justify-center text-[#266D67] mb-4 group-hover:bg-[#266D67] group-hover:text-white transition-all duration-300">
                {r.icon}
              </div>
              <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-base mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-[Montserrat]">{r.description}</p>
            </div>
          ))}
        </div>

        {/* ── Gradient 50/50 CTA banner ── */}
        <div className="mt-16 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[360px] lg:min-h-[420px]">

            {/* LEFT — Brand gradient with CTA */}
            <div className="relative bg-gradient-to-br from-[#163d3a] via-[#1d5450] to-[#266D67] flex items-center px-8 sm:px-10 lg:px-14 py-12 lg:py-16">
              {/* Subtle decorative dot grid */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Soft radial glow */}
              <div
                className="absolute bottom-0 left-0 w-72 h-72 opacity-20 blur-3xl"
                style={{ background: "radial-gradient(circle, #f9ba48 0%, transparent 70%)" }}
              />

              <div className="relative z-10 max-w-md">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold font-[Montserrat] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f9ba48] animate-pulse" />
                  Transform Your Career
                </span>

                <h3 className="font-[Montserrat] font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
                  Ready to transform your career in 90 days?
                </h3>

                <p className="text-white/70 font-[Montserrat] text-sm sm:text-base leading-relaxed mb-8">
                  Join thousands of Africans who have gone from zero to employed using our proven learning system.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/company/scholarships"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-sm font-[Montserrat] text-sm group"
                  >
                    Apply for Scholarship
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/learn/design-school"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/20 transition-all font-[Montserrat] text-sm"
                  >
                    Browse Programmes
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT — Idealnovatehero image with gradient blend on left edge */}
            <div className="relative min-h-[280px] lg:min-h-0">
              <Image
                src="/Idealhero.jpg"
                alt="Idealnovate learners"
                fill
                className="object-cover object-center"
              />
              {/* Subtle dark vignette on bottom for depth */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(2,44,40,0.4) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
