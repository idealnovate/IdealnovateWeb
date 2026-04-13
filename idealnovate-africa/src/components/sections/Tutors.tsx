"use client";

import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";


const tutors = [
  {
    name: "Dr. Seun Adeyemi",
    role: "Lead Design Instructor",
    school: "Design School",
    specialty: "UI/UX & Brand Strategy",
    experience: "12 years experience",
    companies: ["Google", "Uber"],
    courses: 8,
    students: 2800,
    avatar: "SA",
    color: "#266D67",
    bgFrom: "#266D67",
    bgTo: "#163d3a",
  },
  {
    name: "Amara Okafor",
    role: "AI & Data Lead",
    school: "Data & AI School",
    specialty: "Machine Learning & AI",
    experience: "9 years experience",
    companies: ["Microsoft", "IBM"],
    courses: 6,
    students: 1940,
    avatar: "AO",
    color: "#163d3a",
    bgFrom: "#163d3a",
    bgTo: "#266D67",
  },
  {
    name: "Tunde Fashola",
    role: "Marketing Director",
    school: "Marketing School",
    specialty: "Growth & Digital Strategy",
    experience: "14 years experience",
    companies: ["Paystack", "Flutterwave"],
    courses: 5,
    students: 2100,
    avatar: "TF",
    color: "#f9ba48",
    bgFrom: "#f9ba48",
    bgTo: "#d4a030",
  },
  {
    name: "Chisom Nwosu",
    role: "Product Management Lead",
    school: "Management School",
    specialty: "Product & Agile Leadership",
    experience: "10 years experience",
    companies: ["Andela", "Interswitch"],
    courses: 4,
    students: 1350,
    avatar: "CN",
    color: "#2d8a84",
    bgFrom: "#2d8a84",
    bgTo: "#163d3a",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Career Associate",
    school: "Career Development",
    specialty: "Career Coaching & Placement",
    experience: "8 years experience",
    companies: ["Access Bank", "GTBank"],
    courses: 3,
    students: 3400,
    avatar: "FA",
    color: "#266D67",
    bgFrom: "#266D67",
    bgTo: "#2d8a84",
  },
  {
    name: "Emeka Daniels",
    role: "Data Instructor",
    school: "Data & AI School",
    specialty: "Data Analytics & BI Tools",
    experience: "7 years experience",
    companies: ["Konga", "Jumia"],
    courses: 5,
    students: 1680,
    avatar: "ED",
    color: "#163d3a",
    bgFrom: "#163d3a",
    bgTo: "#266D67",
  },
];

export default function Tutors() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#e2efee] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#266D67]" />
              Learn from the Best
            </span>
            <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
              Our World-Class
              <br />
              <span className="text-[#266D67]">Tutors & Mentors</span>
            </h2>
          </div>
          <p className="text-gray-500 font-[Montserrat] max-w-md lg:text-right leading-relaxed text-sm sm:text-base">
            Every instructor at Idealnovate is a proven industry professional with real-world experience at top companies. You&apos;re learning from people who have done it, not just studied it.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tutors.map((tutor) => (
            <div
              key={tutor.name}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-[#266D67]/10 transition-all duration-400 hover:-translate-y-2 flex flex-col"
            >
              {/* ── Avatar panel ── */}
              <div
                className="relative h-48 flex flex-col items-center justify-end pb-6 overflow-hidden"
                style={{
                  background: `linear-gradient(160deg, ${tutor.bgFrom} 0%, ${tutor.bgTo} 100%)`,
                }}
              >
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-white/5" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5" />

                {/* School badge */}
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-[11px] font-bold font-[Montserrat] rounded-full border border-white/20">
                  {tutor.school}
                </span>

                {/* Avatar circle */}
                <div className="relative z-10 w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center shadow-xl"
                  style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.10))` }}
                >
                  <span className="font-[Montserrat] font-bold text-white text-2xl tracking-wide">
                    {tutor.avatar}
                  </span>
                </div>
              </div>

              {/* ── Card body ── */}
              <div className="flex flex-col flex-1 p-6">

                {/* Name + role */}
                <div className="mb-4">
                  <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-lg leading-tight">
                    {tutor.name}
                  </h3>
                  <p className="font-[Montserrat] text-sm font-semibold mt-0.5" style={{ color: tutor.color }}>
                    {tutor.role}
                  </p>
                  <p className="font-[Montserrat] text-xs text-gray-400 mt-1">
                    {tutor.specialty}
                  </p>
                </div>

                {/* Experience + companies */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-[Montserrat]">
                    <Briefcase className="w-3.5 h-3.5 text-gray-300" />
                    {tutor.experience}
                  </span>
                  <span className="text-gray-200 text-xs">·</span>
                  {tutor.companies.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-[Montserrat] bg-[#eef6f5] text-[#266D67]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 font-[Montserrat] text-sm mb-3">Are you an industry expert?</p>
          <Link
            href="/company/partnership"
            className="inline-flex items-center gap-2 text-[#266D67] font-bold hover:text-[#163d3a] transition-colors font-[Montserrat] text-sm"
          >
            Join our team of instructors <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
