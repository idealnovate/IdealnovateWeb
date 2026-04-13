"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    id: "01",
    icon: null,
    image: "/IdealTalent2.png",
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
    accent: "#266D67",
    light: "#eef6f5",
    gradient: "from-[#266D67] to-[#163d3a]",
  },
  {
    id: "02",
    image: "/IdealTeam.png",
    icon: null,
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
    accent: "#163d3a",
    light: "#e8f0ef",
    gradient: "from-[#163d3a] to-[#1f5954]",
  },
  {
    id: "03",
    image: "/IdealHire2.png",
    icon: null,
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
    accent: "#f9ba48",
    light: "#fff8f0",
    gradient: "from-[#f9ba48] to-[#d4a030]",
  },
];

export default function WhatWeDo() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef6f5] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#266D67]" />
            What We Do
          </span>
          <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
            One Platform to Upskill Talents,
            <br />
            <span className="text-[#266D67]">Build Teams and Get Hired</span>
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
              className={`group rounded-3xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-[#266D67]/10 transition-all duration-300 ${
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
                    {service.icon && (
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-white"
                        style={{ background: service.accent }}
                      >
                        {service.icon}
                      </div>
                    )}
                    <div>
                      <span className="text-sm font-semibold text-gray-400 font-[Montserrat]">{service.tagline}</span>
                      <h3 className="font-[Montserrat] font-bold text-2xl lg:text-3xl text-[#163d3a] mt-0.5">
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
                {service.image ? (
                  <div
                    className={`relative min-h-72 lg:min-h-0 overflow-hidden ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                        service.id === "01"
                          ? "object-[center_12%]"
                          : service.id === "02"
                          ? "object-[center_8%]"
                          : "object-[center_20%]"
                      }`}
                    />
                    {/* Bottom vignette — depth & legibility */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(2,44,40,0.65) 0%, rgba(2,44,40,0.15) 40%, transparent 65%)",
                      }}
                    />
                    {/* Content-side edge blend */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          index % 2 === 1
                            ? "linear-gradient(to left, rgba(2,44,40,0.18) 0%, transparent 40%)"
                            : "linear-gradient(to right, rgba(2,44,40,0.18) 0%, transparent 40%)",
                      }}
                    />
                    {/* Service label pinned bottom-left */}
                    <div className="absolute bottom-5 left-6 pointer-events-none">
                      <span className="font-[Montserrat] font-semibold text-white/80 text-xs uppercase tracking-widest">
                        {service.tagline}
                      </span>
                    </div>
                    {/* Large number watermark bottom-right */}
                    <div className="absolute inset-0 flex items-end justify-end p-4 pointer-events-none">
                      <span
                        className="font-[Montserrat] font-bold leading-none select-none"
                        style={{
                          fontSize: "clamp(80px, 12vw, 160px)",
                          color: "rgba(255,255,255,0.10)",
                        }}
                      >
                        {service.id}
                      </span>
                    </div>
                  </div>
                ) : (
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
                    {/* Large number + icon */}
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
