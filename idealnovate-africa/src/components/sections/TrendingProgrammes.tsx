"use client";

import Link from "next/link";
import { Clock, Users, Star, ArrowRight, Sparkles, Cpu, Palette, BarChart3, Megaphone, Layers, TrendingUp } from "lucide-react";

const courses = [
  {
    id: 1,
    icon: <Cpu className="w-6 h-6" />,
    tag: "AI & Automation",
    tagColor: "#f4a85e",
    title: "AI Prompting & Automation Masterclass",
    description: "Master ChatGPT, Claude, Midjourney and automation workflows. Learn to build intelligent automations that save time and boost productivity.",
    duration: "6 Weeks",
    students: "2,840",
    rating: "4.9",
    level: "Beginner–Intermediate",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/data-ai-school",
    color: "#f4a85e",
  },
  {
    id: 2,
    icon: <Palette className="w-6 h-6" />,
    tag: "Design",
    tagColor: "#068276",
    title: "UI/UX Design Professional Diploma",
    description: "Design world-class digital experiences using Figma, Framer, and industry-standard design processes from research to prototyping.",
    duration: "3 Months",
    students: "3,120",
    rating: "4.8",
    level: "Beginner",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/design-school",
    color: "#068276",
  },
  {
    id: 3,
    icon: <BarChart3 className="w-6 h-6" />,
    tag: "Data & Analytics",
    tagColor: "#022c28",
    title: "Data Analytics & Visualisation Diploma",
    description: "From Excel to Python to Tableau — develop the ability to analyse, interpret, and visualise data for real business decisions.",
    duration: "4 Months",
    students: "1,980",
    rating: "4.8",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/data-ai-school",
    color: "#022c28",
  },
  {
    id: 4,
    icon: <Megaphone className="w-6 h-6" />,
    tag: "Marketing",
    tagColor: "#068276",
    title: "Digital Marketing & Growth Strategy",
    description: "Learn SEO, social media strategy, email marketing, paid ads, and growth hacking frameworks used by top marketing teams.",
    duration: "8 Weeks",
    students: "2,260",
    rating: "4.7",
    level: "Beginner",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/marketing-school",
    color: "#068276",
  },
  {
    id: 5,
    icon: <Layers className="w-6 h-6" />,
    tag: "Product Management",
    tagColor: "#f4a85e",
    title: "Product Management Masterclass",
    description: "Learn to lead product teams, develop roadmaps, and ship world-class digital products using agile and lean methodologies.",
    duration: "5 Months",
    students: "1,440",
    rating: "4.9",
    level: "Intermediate",
    price: "Scholarship Available",
    hot: false,
    href: "/learn/management-school",
    color: "#f4a85e",
  },
  {
    id: 6,
    icon: <TrendingUp className="w-6 h-6" />,
    tag: "Data & AI",
    tagColor: "#022c28",
    title: "Machine Learning Engineering Diploma",
    description: "Build and deploy ML models with Python, TensorFlow, and real-world datasets. Bridge the gap between data science and production AI.",
    duration: "6 Months",
    students: "980",
    rating: "4.8",
    level: "Intermediate",
    price: "Scholarship Available",
    hot: true,
    href: "/learn/data-ai-school",
    color: "#022c28",
  },
];

export default function TrendingProgrammes() {
  return (
    <section className="section-padding bg-[#f7fbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5f3] text-[#068276] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
              <Sparkles className="w-3.5 h-3.5" />
              Most Popular Right Now
            </span>
            <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#022c28] leading-tight">
              Trending Online
              <br />
              <span className="text-[#068276]">Programmes</span>
            </h2>
          </div>
          <Link
            href="/learn/design-school"
            className="inline-flex items-center gap-2 text-[#068276] font-bold hover:text-[#022c28] transition-colors font-[Montserrat] text-sm shrink-0"
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
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#068276]/20 hover:shadow-xl hover:shadow-[#068276]/8 transition-all duration-300 hover:-translate-y-1 flex flex-col"
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
                      <span className="px-2.5 py-1 bg-[#f4a85e]/10 text-[#f4a85e] text-xs font-bold rounded-full font-[Montserrat]">
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
                <h3 className="font-[Montserrat] font-bold text-[#022c28] text-base mb-2 group-hover:text-[#068276] transition-colors leading-snug">
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
                    <Star className="w-3.5 h-3.5 text-[#f4a85e]" fill="currentColor" />
                    {course.rating}
                  </span>
                </div>

                {/* Level + Price */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500 font-[Montserrat]">{course.level}</span>
                  <span className="text-xs font-bold text-[#068276] bg-[#f0faf8] px-3 py-1 rounded-full font-[Montserrat]">
                    {course.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-[#022c28] rounded-3xl p-8 lg:p-10 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #f4a85e 0%, transparent 70%)" }}
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
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f4a85e] text-white font-bold rounded-lg hover:bg-[#e8903e] transition-all shadow-sm font-[Montserrat] text-sm"
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
