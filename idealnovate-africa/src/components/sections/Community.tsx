"use client";

import Link from "next/link";
import { MessageCircle, Users, Globe, Zap, Calendar, ArrowRight, BookOpen } from "lucide-react";

const communityStats = [
  { value: "25,000+", label: "Community Members" },
  { value: "60+", label: "Active Cohorts" },
  { value: "140+", label: "Weekly Events" },
  { value: "12", label: "African Cities" },
];

const features = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Peer Learning Groups",
    desc: "Connect with fellow learners in your programme. Collaborate on projects, share resources, and support each other through the journey.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Mentor Match Programme",
    desc: "Get paired with an industry professional who guides you through career decisions, portfolio reviews, and real-world challenges.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Pan-African Network",
    desc: "Build meaningful connections with tech professionals, entrepreneurs, and creative across 12 African cities and the diaspora.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Skill Challenges & Hackathons",
    desc: "Participate in monthly skill challenges, design sprints, and hackathons that push your abilities and build your reputation.",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Live Events & Webinars",
    desc: "Access 140+ weekly events including masterclasses, industry panels, career workshops, and live Q&A sessions with experts.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Resource Library",
    desc: "An ever-growing library of templates, tools, case studies, and curated learning resources — available to all community members.",
  },
];

export default function Community() {
  return (
    <section className="section-padding bg-[#163d3a] relative overflow-hidden">
      {/* Background decor */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 40%, #f9ba48 0%, transparent 50%), radial-gradient(circle at 70% 80%, #266D67 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-[#f9ba48] text-sm font-semibold rounded-full mb-4 border border-white/10 font-[Montserrat]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9ba48]" />
            The Power of Community
          </span>
          <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            You Don&apos;t Learn Alone.
            <br />
            <span className="text-[#f9ba48]">You Grow Together.</span>
          </h2>
          <p className="mt-5 text-white/65 text-lg font-[Montserrat] font-light leading-relaxed">
            Our community is one of our most powerful tools. When you join Idealnovate, you&apos;re plugging into a network of driven, talented professionals who will push you to be the best version of yourself.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {communityStats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/8 transition-colors">
              <div className="font-[Montserrat] font-bold text-3xl lg:text-4xl text-[#f9ba48] mb-1">{s.value}</div>
              <div className="text-white/55 text-sm font-[Montserrat]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#f9ba48]/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#f9ba48] mb-4 group-hover:bg-[#f9ba48] group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="font-[Montserrat] font-bold text-white text-base mb-2">{f.title}</h3>
              <p className="text-white/55 text-sm font-[Montserrat] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/company/community"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-sm font-[Montserrat] text-base"
          >
            Join Our Community Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-3 text-white/40 text-sm font-[Montserrat]">Free to join. No credit card required.</p>
        </div>
      </div>
    </section>
  );
}
