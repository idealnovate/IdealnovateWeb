"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Heart } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FinTech Mobile App Design",
    student: "Amara Osei",
    school: "Design School",
    category: "UI/UX Design",
    color: "from-[#068276] to-[#022c28]",
    pattern: "circles",
    likes: 284,
  },
  {
    id: 2,
    title: "E-Commerce Brand Identity",
    student: "Chiamaka Eze",
    school: "Design School",
    category: "Branding",
    color: "from-[#f4a85e] to-[#e8903e]",
    pattern: "squares",
    likes: 196,
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    student: "Kwame Mensah",
    school: "Data & AI School",
    category: "Data Viz",
    color: "from-[#022c28] to-[#068276]",
    pattern: "dots",
    likes: 312,
  },
  {
    id: 4,
    title: "Travel App Prototype",
    student: "Fatimah Bello",
    school: "Design School",
    category: "Product Design",
    color: "from-[#0a9e90] to-[#068276]",
    pattern: "lines",
    likes: 241,
  },
  {
    id: 5,
    title: "Social Commerce Platform",
    student: "David Adeyemi",
    school: "Marketing School",
    category: "Digital Strategy",
    color: "from-[#f4a85e] to-[#022c28]",
    pattern: "waves",
    likes: 178,
  },
  {
    id: 6,
    title: "Healthcare Management System",
    student: "Zainab Yusuf",
    school: "Management School",
    category: "Product Management",
    color: "from-[#068276] to-[#f4a85e]",
    pattern: "grid",
    likes: 223,
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#068276]/20 hover:shadow-2xl hover:shadow-[#068276]/10 transition-all duration-300 hover:-translate-y-1">
      {/* Visual area */}
      <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
        {/* Abstract design pattern */}
        <div className="absolute inset-0 opacity-20">
          {project.pattern === "circles" && (
            <>
              <div className="absolute top-4 left-4 w-24 h-24 rounded-full border-4 border-white" />
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full border-4 border-white" />
              <div className="absolute top-12 right-12 w-8 h-8 rounded-full bg-white" />
            </>
          )}
          {project.pattern === "squares" && (
            <>
              <div className="absolute top-4 left-4 w-16 h-16 border-4 border-white rotate-12" />
              <div className="absolute bottom-4 right-4 w-20 h-20 border-4 border-white -rotate-6" />
            </>
          )}
          {project.pattern === "dots" && (
            <div className="grid grid-cols-8 gap-2 p-4">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white" />
              ))}
            </div>
          )}
          {project.pattern === "lines" && (
            <>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="absolute h-0.5 bg-white w-full"
                  style={{ top: `${20 + i * 20}%` }}
                />
              ))}
            </>
          )}
          {project.pattern === "waves" && (
            <svg className="absolute bottom-0 w-full" viewBox="0 0 300 60" fill="none">
              <path d="M0 30 Q75 10 150 30 Q225 50 300 30" stroke="white" strokeWidth="3" fill="none" />
              <path d="M0 45 Q75 25 150 45 Q225 65 300 45" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          )}
          {project.pattern === "grid" && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
          )}
        </div>

        {/* Mock UI elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl p-4 w-32">
            <div className="h-2 bg-white/60 rounded mb-2" />
            <div className="h-2 bg-white/40 rounded mb-2 w-3/4" />
            <div className="h-8 bg-white/20 rounded" />
          </div>
        </div>

        {/* Category tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full font-[Montserrat]">
            {project.category}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#022c28]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#f4a85e] transition-colors">
              <ExternalLink className="w-4 h-4 text-[#022c28] hover:text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-red-500 transition-colors">
              <Heart className="w-4 h-4 text-[#022c28] hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="p-4">
        <h4 className="font-[Montserrat] font-bold text-[#022c28] text-sm mb-1 group-hover:text-[#068276] transition-colors">
          {project.title}
        </h4>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-[#068276] font-[Montserrat]">{project.student}</p>
            <p className="text-xs text-gray-400 font-[Montserrat]">{project.school}</p>
          </div>
          <div className="flex items-center gap-1 text-gray-400 text-xs font-[Montserrat]">
            <Heart className="w-3.5 h-3.5" />
            {project.likes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StudentWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0faf8] text-[#068276] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#068276]" />
            Student Showcase
          </span>
          <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#022c28] leading-tight">
            Brilliant Minds,
            <span className="text-[#068276]"> Brilliant Work</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg font-[Montserrat] font-light leading-relaxed">
            Our learners don&apos;t just earn certificates — they build real portfolios that get them hired. Explore some of the incredible projects from our community.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/hire/individuals"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#068276] text-white font-bold rounded-lg hover:bg-[#022c28] transition-all shadow-sm font-[Montserrat] text-sm"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/hire/individuals"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#068276] text-[#068276] font-bold rounded-lg hover:bg-[#068276] hover:text-white transition-all font-[Montserrat] text-sm"
          >
            Hire Our Talents
          </Link>
        </div>
      </div>
    </section>
  );
}
