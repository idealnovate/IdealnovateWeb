"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Adaeze Nnadi",
    role: "UX Designer",
    company: "Flutterwave",
    category: "learner",
    avatar: "A",
    avatarColor: "#266D67",
    rating: 5,
    text: "Idealnovate's UI/UX Diploma changed my life. I went from knowing nothing about design to landing a full-time role at Flutterwave in just 5 months. The mentors are incredibly supportive, and the curriculum is actually practical.",
    programme: "UI/UX Design Diploma",
  },
  {
    id: 2,
    name: "Chukwuemeka Obi",
    role: "Data Analyst",
    company: "Access Bank",
    category: "learner",
    avatar: "C",
    avatarColor: "#f9ba48",
    rating: 5,
    text: "I had no data skills whatsoever. Six months into the Data Analytics programme, I had a portfolio, a certification, and a job offer. Idealnovate doesn't just teach you — they prepare you for the real world.",
    programme: "Data Analytics Diploma",
  },
  {
    id: 3,
    name: "Ngozi Eze",
    role: "Digital Marketer",
    company: "Paystack",
    category: "learner",
    avatar: "N",
    avatarColor: "#2d8a84",
    rating: 5,
    text: "The Digital Marketing programme was well-structured, up-to-date, and loaded with real-world projects. Within 3 months of graduation, I got hired at Paystack. The scholarship made it accessible when I couldn't afford it.",
    programme: "Digital Marketing Diploma",
  },
  {
    id: 4,
    name: "Taiwo Abiola",
    role: "Head of Talent",
    company: "Andela",
    category: "partner",
    avatar: "T",
    avatarColor: "#163d3a",
    rating: 5,
    text: "We've been recruiting from Idealnovate's talent pool for over a year, and the quality is consistently impressive. Their graduates come with strong portfolios, professional attitudes, and real-world skills. They're always our first stop for junior talent.",
    programme: "Recruiting Partner",
  },
  {
    id: 5,
    name: "Hadiza Umar",
    role: "AI Engineer",
    company: "Interswitch",
    category: "learner",
    avatar: "H",
    avatarColor: "#266D67",
    rating: 5,
    text: "The Machine Learning programme was challenging in the best way possible. The instructors were available, the projects were real, and by the time I finished, I had built 3 production-ready ML models. I was recruited before I even graduated.",
    programme: "Machine Learning Diploma",
  },
  {
    id: 6,
    name: "Emeka Okafor",
    role: "CTO",
    company: "TechEdge Africa",
    category: "partner",
    avatar: "E",
    avatarColor: "#f9ba48",
    rating: 5,
    text: "We partnered with Idealnovate to upskill our 40-person team. The corporate training programme was customised to our tech stack and delivered excellent results. Our team's productivity and skill confidence went up significantly.",
    programme: "Corporate Training Partner",
  },
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<"all" | "learner" | "partner">("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = testimonials.filter(
    (t) => activeCategory === "all" || t.category === activeCategory
  );

  const prev = () => setActiveIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));

  const active = filtered[activeIndex] || filtered[0];

  return (
    <section className="section-padding bg-[#f4f9f8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#e2efee] text-[#266D67] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#266D67]" />
            Real Voices, Real Results
          </span>
          <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#163d3a] leading-tight">
            Stories That
            <span className="text-[#266D67]"> Inspire</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg font-[Montserrat] font-light leading-relaxed">
            Don&apos;t just take our word for it. Hear from the learners and partners who have experienced the Idealnovate transformation firsthand.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {[
            { key: "all", label: "All Stories" },
            { key: "learner", label: "Learners" },
            { key: "partner", label: "Hiring Partners" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveCategory(tab.key as typeof activeCategory);
                setActiveIndex(0);
              }}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 font-[Montserrat] ${
                activeCategory === tab.key
                  ? "bg-[#266D67] text-white shadow-sm"
                  : "bg-white text-gray-500 hover:bg-[#eef6f5] hover:text-[#266D67] border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main featured testimonial */}
        {active && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-[#266D67]/8 border border-[#e2efee] relative overflow-hidden">
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-20 h-20 text-[#266D67]" fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f9ba48]" fill="currentColor" />
                ))}
              </div>

              {/* Testimonial text */}
              <blockquote className="text-[#163d3a] text-lg lg:text-xl font-[Montserrat] leading-relaxed mb-8 font-medium relative z-10">
                &ldquo;{active.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl font-[Montserrat] shrink-0"
                    style={{ background: active.avatarColor }}
                  >
                    {active.avatar}
                  </div>
                  <div>
                    <p className="font-[Montserrat] font-bold text-[#163d3a] text-base">{active.name}</p>
                    <p className="text-gray-500 text-sm font-[Montserrat]">
                      {active.role} · <span className="text-[#266D67]">{active.company}</span>
                    </p>
                    <p className="text-xs text-gray-400 font-[Montserrat] mt-0.5">{active.programme}</p>
                  </div>
                </div>

                {/* Category badge */}
                <span className={`px-3 py-1 text-xs font-bold rounded-full font-[Montserrat] ${
                  active.category === "partner"
                    ? "bg-[#f9ba48]/15 text-[#f9ba48]"
                    : "bg-[#eef6f5] text-[#266D67]"
                }`}>
                  {active.category === "partner" ? "Hiring Partner" : "Graduate"}
                </span>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-[#e2efee]">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl border-2 border-[#e2efee] flex items-center justify-center text-[#266D67] hover:bg-[#266D67] hover:text-white hover:border-[#266D67] transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl border-2 border-[#e2efee] flex items-center justify-center text-[#266D67] hover:bg-[#266D67] hover:text-white hover:border-[#266D67] transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex gap-1.5 ml-2">
                  {filtered.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        i === activeIndex
                          ? "w-6 bg-[#266D67]"
                          : "w-2 bg-[#266D67]/20 hover:bg-[#266D67]/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonial mini cards row */}
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {filtered.slice(0, 3).map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(i)}
              className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 hover:shadow-md ${
                i === activeIndex
                  ? "border-[#266D67] bg-[#eef6f5]"
                  : "border-gray-100 bg-white hover:border-[#266D67]/30"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm font-[Montserrat] shrink-0"
                  style={{ background: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-[Montserrat] font-bold text-[#163d3a] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400 font-[Montserrat]">{t.company}</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs font-[Montserrat] line-clamp-2 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
