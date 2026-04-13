"use client";

import Link from "next/link";
import { ArrowRight, Award, Users, BookOpen, CheckCircle } from "lucide-react";

const scholarshipTypes = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Full Scholarship",
    desc: "100% funded access to any Diploma programme. For exceptional applicants with financial need.",
    badge: "Limited Slots",
    badgeColor: "#f9ba48",
    color: "#266D67",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Corporate Scholarship",
    desc: "Partnered companies sponsor their employees or communities for professional upskilling.",
    badge: "Open Now",
    badgeColor: "#266D67",
    color: "#163d3a",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Partial Scholarship",
    desc: "Up to 70% subsidy on any programme. Available to learners who demonstrate potential.",
    badge: "Rolling Basis",
    badgeColor: "#2d8a84",
    color: "#2d8a84",
  },
];

const steps = [
  { num: "1", text: "Submit your scholarship application online" },
  { num: "2", text: "Complete a short skill & motivation assessment" },
  { num: "3", text: "Get notified within 5 business days" },
  { num: "4", text: "Begin your programme & change your career" },
];

export default function KickstartJourney() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
            <Award className="w-3.5 h-3.5" />
            Scholarship Access Programme
          </span>
          <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
            Your Dream Career
            <span className="text-[#266D67]"> Shouldn&apos;t Cost You</span>
            <br />
            a Fortune
          </h2>
          <p className="mt-5 text-gray-500 text-lg font-[Montserrat] font-light leading-relaxed">
            Financial constraints should never stand between you and a world-class tech education. Apply for our scholarship programme and kick-start your tech journey today.
          </p>
        </div>

        {/* Scholarship types */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {scholarshipTypes.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#266D67]/30 hover:shadow-xl hover:shadow-[#266D67]/8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: s.color }}
                >
                  {s.icon}
                </div>
                <span
                  className="px-2.5 py-1 text-xs font-bold rounded-full font-[Montserrat]"
                  style={{
                    background: `${s.badgeColor}20`,
                    color: s.badgeColor,
                  }}
                >
                  {s.badge}
                </span>
              </div>
              <h3 className="font-[Montserrat] font-bold text-[#163d3a] text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm font-[Montserrat] font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-[#f4f9f8] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-[Montserrat] font-bold text-2xl lg:text-3xl text-[#163d3a] mb-5">
                How to Apply in
                <span className="text-[#266D67]"> 4 Simple Steps</span>
              </h3>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.num} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#266D67] text-white font-bold font-[Montserrat] flex items-center justify-center text-sm shrink-0">
                      {step.num}
                    </div>
                    <p className="text-[#163d3a] font-[Montserrat] font-medium">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#163d3a] rounded-2xl p-8 text-white">
              <h4 className="font-[Montserrat] font-bold text-xl mb-4">Scholarship Eligibility</h4>
              <ul className="space-y-3 mb-6">
                {[
                  "Open to all Africans aged 18+",
                  "No prior tech experience needed",
                  "Demonstration of motivation & drive",
                  "Commitment to complete the programme",
                  "Available for individuals & corporate teams",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80 font-[Montserrat]">
                    <CheckCircle className="w-4 h-4 text-[#f9ba48] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/company/scholarships"
                className="group flex items-center justify-center gap-2 py-3.5 px-6 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-sm font-[Montserrat] text-sm"
              >
                Apply for Scholarship
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Teams section */}
        <div className="mt-8 bg-[#eef6f5] rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <p className="font-[Montserrat] font-bold text-[#163d3a] text-lg">Building a team?</p>
            <p className="text-gray-500 font-[Montserrat] text-sm mt-1">Get custom corporate training packages for your company or organisation.</p>
          </div>
          <Link
            href="/hire/team"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#163d3a] text-white font-bold rounded-lg hover:bg-[#266D67] transition-all shadow-sm font-[Montserrat] text-sm"
          >
            Explore Corporate Plans <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
