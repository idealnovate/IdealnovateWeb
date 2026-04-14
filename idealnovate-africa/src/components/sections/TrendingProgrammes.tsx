"use client";

import Link from "next/link";
import { Clock, Users, Star, ArrowRight, Sparkles, Cpu, Palette, BarChart3, Megaphone, Code2, Globe } from "lucide-react";

const courses = [
  {
    id: 1,
    icon: <Cpu className="w-6 h-6" />,
    tag: "Data & AI School",
    tagColor: "#266D67",
    title: "AI Prompting & Automation Masterclass",
    description: "Master ChatGPT, Claude, and no-code automation tools to design smart workflows that save time and boost output across any role.",
    duration: "6 Weeks",
    students: "2,840",
    rating: "4.9",
    level: "Beginner",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/data-ai-school/ai-agents",
    color: "#266D67",
  },
  {
    id: 2,
    icon: <Palette className="w-6 h-6" />,
    tag: "Design School",
    tagColor: "#c49a20",
    title: "UI/UX Design",
    description: "Design world-class digital experiences using Figma and industry-standard processes — from user research to high-fidelity prototyping.",
    duration: "10 Weeks",
    students: "3,120",
    rating: "4.8",
    level: "Beginner",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/design-school/ui-ux-design",
    color: "#f9ba48",
  },
  {
    id: 3,
    icon: <BarChart3 className="w-6 h-6" />,
    tag: "Data & AI School",
    tagColor: "#266D67",
    title: "Data Analysis",
    description: "Develop the ability to analyse, interpret, and visualise data using industry tools to drive real, evidence-based business decisions.",
    duration: "12 Weeks",
    students: "1,980",
    rating: "4.8",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/data-ai-school/data-analysis",
    color: "#266D67",
  },
  {
    id: 4,
    icon: <Megaphone className="w-6 h-6" />,
    tag: "Marketing School",
    tagColor: "#163d3a",
    title: "Digital Advertising & Media Buying",
    description: "Run high-performing paid ad campaigns across Meta, Google, and TikTok. Learn targeting, budgeting, and optimisation strategies that convert.",
    duration: "3 Weeks",
    students: "2,260",
    rating: "4.7",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/marketing-school",
    color: "#163d3a",
  },
  {
    id: 5,
    icon: <Code2 className="w-6 h-6" />,
    tag: "Data & AI School",
    tagColor: "#266D67",
    title: "Python for Data Analysis",
    description: "Learn Python from the ground up and apply it to real-world data problems — data wrangling, visualisation, and statistical analysis.",
    duration: "6 Weeks",
    students: "1,640",
    rating: "4.9",
    level: "Beginner–Intermediate",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/data-ai-school/python-data-analysis",
    color: "#266D67",
  },
  {
    id: 6,
    icon: <Globe className="w-6 h-6" />,
    tag: "Design School",
    tagColor: "#c49a20",
    title: "Build with WordPress",
    description: "Design and launch professional websites without code. Master WordPress, Elementor, WooCommerce and best-practice SEO fundamentals.",
    duration: "4 Weeks",
    students: "1,210",
    rating: "4.7",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/design-school/build-with-wordpress",
    color: "#f9ba48",
  },
];

export default function TrendingProgrammes() {
  return (
    <section className="section-padding bg-[#f4f9f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#e2efee] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
              <Sparkles className="w-3.5 h-3.5" />
              Most Popular Right Now
            </span>
            <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
              Trending Online
              <br />
              <span className="text-[#266D67]">Programmes</span>
            </h2>
          </div>
          <Link
            href="/learn/design-school"
            className="inline-flex items-center gap-2 text-[#266D67] font-bold hover:text-[#163d3a] transition-colors font-[Montserrat] text-sm shrink-0"
          >
            View All Programmes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Course grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={course.href}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#266D67]/20 hover:shadow-xl hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Card top strip */}
              <div
                className="h-2 w-full"
                style={{ background: `linear-gradient(90deg, ${course.color}, ${course.color}88)` }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + tags row */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                    style={{ background: course.color }}
                  >
                    {course.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {course.hot && (
                      <span className="px-2.5 py-1 bg-[#f9ba48]/10 text-[#f9ba48] text-xs font-bold rounded-full font-[Montserrat]">
                        🔥 Hot
                      </span>
                    )}
                    <span
                      className="px-2.5 py-1 text-xs font-semibold rounded-full font-[Montserrat]"
                      style={{ background: `${course.tagColor}15`, color: course.tagColor }}
                    >
                      {course.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-base mb-2 group-hover:text-[#266D67] transition-colors leading-snug">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm font-[Montserrat] font-light leading-relaxed flex-1 mb-4">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 flex-wrap font-[Montserrat]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {course.students} students
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#f9ba48]" fill="currentColor" />
                    {course.rating}
                  </span>
                </div>

                {/* Level + Price */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-[Montserrat]">{course.level}</span>
                  <span className="text-xs font-bold text-[#266D67] bg-[#eef6f5] px-3 py-1 rounded-full font-[Montserrat]">
                    {course.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-[#163d3a] rounded-3xl p-8 lg:p-10 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #f9ba48 0%, transparent 70%)" }}
          />
          <div className="relative z-10">
            <h3 className="font-[Montserrat] font-bold text-xl lg:text-2xl text-white mb-3">
              Not sure which programme to start with?
            </h3>
            <p className="text-white/65 font-[Montserrat] mb-6 max-w-md mx-auto">
              Book a free 15-minute career discovery call with our advisors.
            </p>
            <Link
              href="/company/scholarships"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-sm font-[Montserrat] text-sm"
            >
              Book Free Career Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
