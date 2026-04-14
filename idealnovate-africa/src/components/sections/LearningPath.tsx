"use client";

import Link from "next/link";
import { BookOpen, Layers, Zap, ArrowRight, CheckCircle, Clock, Users, Award } from "lucide-react";

const paths = [
  {
    level: "01",
    title: "Elementary Diploma",
    subtitle: "Start from Zero",
    description: "Perfect for complete beginners. Build your creative eye foundations with bite-sized lessons designed to fast-track your confidence.",
    duration: "2–4 Weeks",
    modules: "6 Modules",
    students: "28,753+ enrolled",
    features: [
      "No prior experience needed",
      "Foundation & core concepts",
      "Project-based learning",
      "Community support access",
    ],
    icon: <BookOpen className="w-7 h-7" />,
    color: "#266D67",
    bgColor: "#eef6f5",
    badge: "Beginner",
    badgeColor: "#266D67",
    href: "/learn/design-school",
    popular: false,
  },
  {
    level: "02",
    title: "Diploma",
    subtitle: "Go Professional",
    description: "Advance your skills with real-world projects, portfolio building, and industry-grade tools. Gain the competency employers are actively looking for.",
    duration: "10–12 Weeks",
    modules: "12 Modules",
    students: "4,137+ enrolled",
    features: [
      "Portfolio development",
      "Industry tools & software",
      "1-on-1 mentoring sessions",
      "Career readiness coaching",
    ],
    icon: <Layers className="w-7 h-7" />,
    color: "#163d3a",
    bgColor: "#163d3a",
    badge: "Most Popular",
    badgeColor: "#f9ba48",
    href: "/learn/design-school",
    popular: true,
  },
  {
    level: "03",
    title: "Masterclass",
    subtitle: "Become an Expert",
    description: "An elite, intensive programme for professionals ready to dominate their field — advanced systems, leadership strategy, and live cohort sessions.",
    duration: "2–4 Weeks",
    modules: "6 Modules",
    students: "900+ enrolled",
    features: [
      "Advanced specialization tracks",
      "Live sessions with industry leaders",
      "Job placement assistance",
      "Professional certification",
    ],
    icon: <Zap className="w-7 h-7" />,
    color: "#f9ba48",
    bgColor: "#fff8f0",
    badge: "Expert",
    badgeColor: "#f9ba48",
    href: "/learn/design-school",
    popular: false,
  },
];

export default function LearningPath() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Whether you&apos;re starting fresh or levelling up, we have a structured path that meets you exactly where you are.
          </p>
        </div>

        {/* Path cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((path, index) => (
            <div
              key={path.title}
              className={`relative group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                path.popular
                  ? "shadow-2xl shadow-[#163d3a]/20 scale-105"
                  : "shadow-lg hover:shadow-[#266D67]/10"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {path.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f9ba48] to-[#266D67]" />
              )}

              <div
                className={`p-8 h-full flex flex-col ${
                  path.popular ? "bg-[#163d3a] text-white" : "bg-white border border-gray-100"
                }`}
              >
                {/* Level & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-5xl font-bold font-[Montserrat] ${
                      path.popular ? "text-white/10" : "text-gray-100"
                    }`}
                  >
                    {path.level}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full font-[Montserrat]`}
                    style={{
                      background: path.popular ? "#f9ba48" : "#eef6f5",
                      color: path.popular ? "white" : "#266D67",
                    }}
                  >
                    {path.badge}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    path.popular
                      ? "bg-white/10 text-[#f9ba48]"
                      : "bg-[#eef6f5] text-[#266D67]"
                  }`}
                >
                  {path.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p
                    className={`text-sm font-semibold uppercase tracking-wider mb-1 font-[Montserrat] ${
                      path.popular ? "text-[#f9ba48]" : "text-[#266D67]"
                    }`}
                  >
                    {path.subtitle}
                  </p>
                  <h3
                    className={`font-[Montserrat] font-bold text-2xl mb-3 ${
                      path.popular ? "text-white" : "text-[#163d3a]"
                    }`}
                  >
                    {path.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 font-[Montserrat] ${
                      path.popular ? "text-white/70" : "text-gray-500"
                    }`}
                  >
                    {path.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {[
                      { icon: <Clock className="w-3.5 h-3.5" />, text: path.duration },
                      { icon: <Layers className="w-3.5 h-3.5" />, text: path.modules },
                      { icon: <Users className="w-3.5 h-3.5" />, text: path.students },
                    ].map((meta) => (
                      <span
                        key={meta.text}
                        className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-[Montserrat] font-medium ${
                          path.popular
                            ? "bg-white/10 text-white/70"
                            : "bg-[#f4f9f8] text-gray-600"
                        }`}
                      >
                        {meta.icon}
                        {meta.text}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {path.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm font-[Montserrat] ${path.popular ? "text-white/80" : "text-gray-600"}`}>
                        <CheckCircle
                          className={`w-4 h-4 mt-0.5 shrink-0 ${path.popular ? "text-[#f9ba48]" : "text-[#266D67]"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href={path.href}
                  className={`group/btn flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-bold text-sm transition-all duration-200 shadow-sm font-[Montserrat] ${
                    path.popular
                      ? "bg-[#f9ba48] text-white hover:bg-[#d4a030]"
                      : "bg-[#163d3a] text-white hover:bg-[#266D67]"
                  }`}
                >
                  Explore Programme
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 font-[Montserrat] mb-4">Not sure which path to take?</p>
          <Link
            href="/company/scholarships"
            className="inline-flex items-center gap-2 text-[#266D67] font-bold hover:text-[#163d3a] transition-colors font-[Montserrat] text-sm"
          >
            <Award className="w-4 h-4" />
            Take our free career assessment →
          </Link>
        </div>
      </div>
    </section>
  );
}
