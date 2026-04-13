"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Learners",
    q: "Do I need prior experience to enrol?",
    a: "No prior experience is needed for most of our programmes. Our Elementary Diploma and Diploma programmes are designed specifically for beginners. You just need a commitment to learn and access to a device and internet connection.",
  },
  {
    category: "Learners",
    q: "Are the courses self-paced or live?",
    a: "We offer both! Most of our Diploma and Elementary Diploma programmes are self-paced — learn on your schedule. Our Masterclass programmes include live sessions, cohort-based learning, and scheduled mentor interactions.",
  },
  {
    category: "Learners",
    q: "How do I apply for a scholarship?",
    a: "Simply visit our Scholarship page, complete the application form, and submit your motivation statement. Our team reviews applications on a rolling basis and you'll receive a decision within 5 business days.",
  },
  {
    category: "Learners",
    q: "What certification will I receive after completing a programme?",
    a: "Upon completion, you'll receive a professionally recognised digital certificate with a unique verification ID. It can be shared directly to LinkedIn and is accepted by our 48+ hiring partners across Africa.",
  },
  {
    category: "Learners",
    q: "Can I access the course content after completing the programme?",
    a: "Yes! All learners get lifetime access to the course content they've enrolled in — even after graduation. We also update our curriculum regularly, so your access includes future updates.",
  },
  {
    category: "Hiring Partners",
    q: "How do I hire graduates from Idealnovate?",
    a: "You can post a talent request through our Hire Individuals page or contact us directly. We match your requirements with our pool of certified graduates and vetted professionals within 48–72 hours.",
  },
  {
    category: "Hiring Partners",
    q: "Can Idealnovate train our company's team?",
    a: "Absolutely. We offer customised corporate training and upskilling programmes tailored to your organisation's tech stack, goals, and team size. Contact us on the Hire a Team page to discuss your needs.",
  },
  {
    category: "Hiring Partners",
    q: "Are Idealnovate graduates work-ready?",
    a: "Yes. Beyond technical skills, our graduates complete portfolio projects, career coaching, and professional development. 94% of our graduates are placed in relevant roles within 6 months of graduation.",
  },
  {
    category: "General",
    q: "What schools are available at Idealnovate?",
    a: "We currently have four schools: Design School (UI/UX, branding, graphics), Data & AI School (analytics, machine learning, AI), Marketing School (digital marketing, growth strategy), and Management School (product management, leadership).",
  },
  {
    category: "General",
    q: "How does the community work?",
    a: "When you join Idealnovate — even with a free account — you get access to our community of 25,000+ learners and professionals. Enjoy peer learning groups, live events, mentor matches, and collaborative challenges.",
  },
];

const categories = ["All", "Learners", "Hiring Partners", "General"];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = faqs.filter(
    (f) => activeCategory === "All" || f.category === activeCategory
  );

  return (
    <section className="section-padding bg-[#f7fbfa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left sidebar */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#e8f5f3] text-[#068276] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
              <HelpCircle className="w-3.5 h-3.5" />
              Got Questions?
            </span>
            <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#022c28] leading-tight mb-4">
              Frequently Asked
              <span className="text-[#068276]"> Questions</span>
            </h2>
            <p className="text-gray-500 font-[Montserrat] font-light leading-relaxed mb-8">
              Answers to the most common questions from learners, visitors, and recruiting partners.
            </p>

            {/* Category filter */}
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all font-[Montserrat] ${
                    activeCategory === cat
                      ? "bg-[#068276] text-white shadow-sm"
                      : "bg-white text-gray-600 hover:bg-[#f0faf8] hover:text-[#068276] border border-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-8 p-5 bg-[#022c28] rounded-2xl">
              <p className="font-[Montserrat] font-bold text-white text-sm mb-2">Still have questions?</p>
              <p className="text-white/60 text-xs font-[Montserrat] mb-4">Our team is ready to help you make the right decision.</p>
              <Link
                href="mailto:hello@idealnovate.com"
                className="block text-center py-2.5 bg-[#f4a85e] text-white font-bold text-xs rounded-lg hover:bg-[#e8903e] transition-all font-[Montserrat]"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* FAQ accordion */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {filtered.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border overflow-hidden transition-all duration-200 ${
                    openIndex === i
                      ? "border-[#068276]/30 shadow-lg shadow-[#068276]/8"
                      : "border-gray-100 hover:border-[#068276]/20"
                  }`}
                >
                  <button
                    className="w-full flex items-start justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full shrink-0 mt-0.5 font-[Montserrat]"
                        style={{
                          background: faq.category === "Learners"
                            ? "#f0faf8"
                            : faq.category === "Hiring Partners"
                            ? "#fff8f0"
                            : "#f7fbfa",
                          color: faq.category === "Learners"
                            ? "#068276"
                            : faq.category === "Hiring Partners"
                            ? "#f4a85e"
                            : "#022c28",
                        }}
                      >
                        {faq.category}
                      </span>
                      <span className="font-[Montserrat] font-bold text-[#022c28] text-sm leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#068276] shrink-0 transition-transform duration-200 mt-0.5 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      openIndex === i ? "max-h-48" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 pb-5 pt-0">
                      <div className="pl-[calc(2.5rem+0.75rem)]">
                        <p className="text-gray-500 text-sm font-[Montserrat] font-light leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
