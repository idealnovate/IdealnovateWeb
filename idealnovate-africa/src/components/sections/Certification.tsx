"use client";

import Link from "next/link";
import { Award, CheckCircle, Globe, Share2, FileText, BadgeCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: <FileText className="w-5 h-5" />,
    title: "Complete Your Programme",
    desc: "Finish all modules, assignments, and assessments in your chosen programme.",
  },
  {
    step: "02",
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Pass the Final Assessment",
    desc: "Demonstrate mastery with a hands-on capstone project reviewed by industry mentors.",
  },
  {
    step: "03",
    icon: <BadgeCheck className="w-5 h-5" />,
    title: "Earn Your Certificate",
    desc: "Receive your officially recognised Idealnovate Africa certificate with a unique verification ID.",
  },
  {
    step: "04",
    icon: <Share2 className="w-5 h-5" />,
    title: "Share & Get Hired",
    desc: "Showcase your certificate on LinkedIn, your CV, and portfolio to stand out to employers.",
  },
];

const features = [
  { icon: <Globe className="w-5 h-5" />, label: "Globally Recognised", desc: "Accepted by employers across Africa and beyond" },
  { icon: <BadgeCheck className="w-5 h-5" />, label: "Blockchain Verified", desc: "Tamper-proof and verifiable with a unique digital ID" },
  { icon: <Award className="w-5 h-5" />, label: "Industry Endorsed", desc: "Backed by our network of 48+ hiring partners" },
  { icon: <Share2 className="w-5 h-5" />, label: "LinkedIn Ready", desc: "One-click sharing to your LinkedIn profile" },
];

export default function Certification() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left visual */}
          <div className="relative">
            {/* Certificate mockup */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Shadow card */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#f0faf8] rounded-3xl" />
              <div className="absolute -bottom-2 -right-2 w-full h-full bg-[#e8f5f3] rounded-3xl" />

              {/* Main certificate */}
              <div className="relative bg-white rounded-3xl border-2 border-[#068276]/20 overflow-hidden shadow-2xl shadow-[#068276]/15">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#022c28] to-[#068276] p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-white/60 text-xs font-[Montserrat] uppercase tracking-wider">Certificate of Completion</p>
                      <p className="font-[Montserrat] font-bold text-xl mt-1">Idealnovate Africa</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#f4a85e]" />
                    </div>
                  </div>

                  <div>
                    <p className="text-white/60 text-xs font-[Montserrat] mb-1">This certifies that</p>
                    <p className="font-[Montserrat] font-bold text-2xl text-[#f4a85e]">Amara Osei</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-500 text-sm font-[Montserrat] mb-1">has successfully completed</p>
                  <p className="font-[Montserrat] font-bold text-[#022c28] text-lg mb-4">
                    UI/UX Design Professional Diploma
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Figma", "User Research", "Prototyping", "Design Systems"].map((skill) => (
                      <span key={skill} className="px-2.5 py-1 bg-[#f0faf8] text-[#068276] text-xs font-bold rounded-full font-[Montserrat]">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400 font-[Montserrat]">Issued: April 2025</p>
                      <p className="text-xs font-bold text-[#068276] font-[Montserrat]">ID: IDA-2025-04-001234</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-[#f0faf8] flex items-center justify-center">
                      <BadgeCheck className="w-5 h-5 text-[#068276]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature pills floating */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f.label} className="flex items-start gap-3 p-4 bg-[#f7fbfa] rounded-2xl border border-[#e8f5f3]">
                  <div className="w-9 h-9 rounded-xl bg-[#e8f5f3] flex items-center justify-center text-[#068276] shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-[Montserrat] font-bold text-[#022c28] text-xs">{f.label}</p>
                    <p className="text-xs text-gray-400 font-[Montserrat] mt-0.5">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0faf8] text-[#068276] text-sm font-semibold rounded-full mb-6 font-[Montserrat]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#068276]" />
              Professional Certification
            </span>
            <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#022c28] leading-tight mb-5">
              Earn a Certificate That
              <span className="text-[#068276]"> Actually Opens Doors</span>
            </h2>
            <p className="text-gray-500 font-[Montserrat] text-lg leading-relaxed mb-8">
              Every Idealnovate graduate earns a professionally recognised certificate that signals real competence — not just course completion. Our credentials are backed by industry partners who actively hire our graduates.
            </p>

            {/* Steps */}
            <div className="space-y-4 mb-8">
              {steps.map((step) => (
                <div key={step.step} className="flex items-start gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-[#f0faf8] flex items-center justify-center text-[#068276]">
                      {step.icon}
                    </div>
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#068276] font-[Montserrat] bg-[#f0faf8] px-2 py-0.5 rounded-full">
                        Step {step.step}
                      </span>
                      <h4 className="font-[Montserrat] font-bold text-[#022c28] text-sm">{step.title}</h4>
                    </div>
                    <p className="text-sm text-gray-500 font-[Montserrat]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/learn/design-school"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-[#068276] text-white font-bold rounded-lg hover:bg-[#022c28] transition-all shadow-sm font-[Montserrat] text-sm"
            >
              Start Earning Your Certificate
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
