"use client";

import Link from "next/link";
import { GraduationCap, Users, Briefcase, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: "01",
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Upskill Talents",
    tagline: "Learn → Grow → Lead",
    description:
      "We offer structured online programmes — from elementary diplomas to expert masterclasses — designed to turn beginners into job-ready professionals in tech, design, data, marketing, and management.",
    features: [
      "Self-paced & live programmes",
      "Mentorship & career coaching",
      "Project-based portfolios",
      "Globally recognised certifications",
    ],
    cta: "Explore Programmes",
    href: "/learn/design-school",
    accent: "#068276",
    light: "#f0faf8",
    gradient: "from-[#068276] to-[#022c28]",
  },
  {
    id: "02",
    icon: <Users className="w-8 h-8" />,
    title: "Build Teams",
    tagline: "Hire → Train → Deploy",
    description:
      "We help companies build high-performing tech teams by sourcing, training and deploying talent that is already aligned to your business culture, tools, and workflow — reducing time-to-productivity.",
    features: [
      "Custom team training programmes",
      "Corporate upskilling plans",
      "Dedicated talent pipelines",
      "On-demand workforce solutions",
    ],
    cta: "Build Your Team",
    href: "/hire/team",
    accent: "#022c28",
    light: "#e8f0ef",
    gradient: "from-[#022c28] to-[#035249]",
  },
  {
    id: "03",
    icon: <Briefcase className="w-8 h-8" />,
    title: "Get Hired",
    tagline: "Skill → Apply → Succeed",
    description:
      "Our talent marketplace connects our graduates directly with employers who are actively looking. Complete your programme, build your portfolio, and get matched with real job opportunities.",
    features: [
      "Direct recruiter access",
      "Job-ready graduate profiles",
      "Internship placements",
      "Freelance talent network",
    ],
    cta: "Hire Our Talents",
    href: "/hire/individuals",
    accent: "#f4a85e",
    light: "#fff8f0",
    gradient: "from-[#f4a85e] to-[#e8903e]",
  },
];

export default function WhatWeDo() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0faf8] text-[#068276] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#068276]" />
            What We Do
          </span>
          <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#022c28] leading-tight">
            One Platform to Upskill Talents,
            <br />
            <span className="text-[#068276]">Build Teams and Get Hired</span>
          </h2>
          <p className="mt-5 text-gray-500 text-lg font-[Montserrat] font-light leading-relaxed max-w-2xl mx-auto">
            Idealnovate Africa bridges the gap between talent and opportunity — for learners, employers, and organisations across Africa and beyond.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-[#068276]/10 transition-all duration-300 ${
                index % 2 === 0 ? "" : ""
              }`}
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-white"
                      style={{ background: service.accent }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-400 font-[Montserrat]">{service.tagline}</span>
                      <h3 className="font-[Montserrat] font-bold text-2xl lg:text-3xl text-[#022c28] mt-0.5">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-6 text-base lg:text-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600 font-[Montserrat]">
                        <CheckCircle className="w-4 h-4 shrink-0" style={{ color: service.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.href}
                    className="group/btn inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-bold text-sm text-white transition-all duration-200 shadow-sm hover:shadow-md w-fit font-[Montserrat]"
                    style={{ background: service.accent }}
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual panel */}
                <div
                  className={`relative min-h-48 lg:min-h-0 bg-gradient-to-br ${service.gradient} flex items-center justify-center overflow-hidden ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  {/* Pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%)`,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Large number */}
                  <div className="relative text-center">
                    <div className="font-[Montserrat] font-bold text-[140px] lg:text-[200px] text-white/8 leading-none select-none">
                      {service.id}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                        <span className="scale-150">{service.icon}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
