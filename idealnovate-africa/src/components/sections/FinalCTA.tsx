"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, GraduationCap, Users, Briefcase } from "lucide-react";

const tracks = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    label: "I want to learn",
    desc: "Access world-class programmes",
    href: "/learn/design-school",
    color: "#266D67",
  },
  {
    icon: <Users className="w-6 h-6" />,
    label: "I want to hire",
    desc: "Find job-ready tech talent",
    href: "/hire/individuals",
    color: "#f9ba48",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    label: "I want to partner",
    desc: "Train & upskill your team",
    href: "/company/partnership",
    color: "#163d3a",
  },
];

export default function FinalCTA() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decor */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#266D67]/30 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#163d3a] to-[#266D67] rounded-[2.5rem] overflow-hidden p-10 lg:p-16 text-center">
          {/* Background effects */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #f9ba48 0%, transparent 50%), radial-gradient(circle at 80% 50%, #2d8a84 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-[#f9ba48] text-sm font-semibold rounded-full mb-6 border border-white/15 font-[Montserrat]">
              <Sparkles className="w-3.5 h-3.5" />
              Your Transformation Starts Today
            </div>

            <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-6xl text-white leading-tight mb-5">
              Ready to Kick-Start
              <br />
              <span className="text-[#f9ba48]">Your Journey?</span>
            </h2>
            <p className="text-white/70 font-[Montserrat] text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you&apos;re learning for the first time, building a team, or looking for world-class tech talent — Idealnovate Africa is your launchpad.
            </p>

            {/* Track selection */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              {tracks.map((track) => (
                <Link
                  key={track.label}
                  href={track.href}
                  className="group p-5 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-200 text-left"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-200"
                    style={{ background: track.color }}
                  >
                    {track.icon}
                  </div>
                  <p className="text-white font-[Montserrat] font-bold text-sm mb-1">{track.label}</p>
                  <p className="text-white/55 font-[Montserrat] text-xs">{track.desc}</p>
                </Link>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/company/scholarships"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-sm font-[Montserrat] text-base"
              >
                Get Scholarship Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/learn/design-school"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/20 transition-all font-[Montserrat] text-base"
              >
                Browse Programmes
              </Link>
            </div>

            <p className="mt-6 text-white/40 text-sm font-[Montserrat]">
              No credit card required · 5-day free trial available · Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
