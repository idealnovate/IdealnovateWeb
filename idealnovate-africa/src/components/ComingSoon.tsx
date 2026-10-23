import Link from "next/link";
import { ArrowRight, Mail, Palette, Brain, Megaphone, Briefcase } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ─── Shared "Coming Soon" page for routes still being built ───────────────────

type ComingSoonProps = {
  /** Nav section the page lives under, e.g. "Company" */
  section: string;
  /** Page name as it appears in the nav, e.g. "About Us" */
  title: string;
  /** Large outlined word on the brand panel — usually the page name */
  mark: string;
  /** One or two sentences on what the page is for */
  summary: string;
  /** Three things visitors will find here once it launches */
  plans: string[];
  /** Subject line for the "email us" CTA */
  emailSubject: string;
  /** Button label for the email CTA */
  emailLabel: string;
};

const openSchools = [
  { label: "Design School",     href: "/learn/design-school",     icon: <Palette className="w-4 h-4" /> },
  { label: "Data & AI School",  href: "/learn/data-ai-school",    icon: <Brain className="w-4 h-4" /> },
  { label: "Marketing School",  href: "/learn/marketing-school",  icon: <Megaphone className="w-4 h-4" /> },
  { label: "Management School", href: "/learn/management-school", icon: <Briefcase className="w-4 h-4" /> },
];

export default function ComingSoon({
  section, title, mark, summary, plans, emailSubject, emailLabel,
}: ComingSoonProps) {
  // Scale the outlined word to the panel width so long names still fit on one line
  const markSize = `min(${(100 / (mark.length * 0.82)).toFixed(2)}cqi, 9rem)`;
  const mailto = `mailto:hello@idealnovate.com?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col md:grid md:grid-cols-2 min-h-screen">

        {/* ── LEFT: White panel ── */}
        <section className="bg-white flex items-center justify-end pt-32 lg:pt-40 pb-14 md:pb-20 px-6 sm:px-10 md:px-8 lg:px-12 xl:px-20">
          <div className="w-full max-w-lg">

            {/* Breadcrumb + status */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <p className="font-[Montserrat] text-xs font-semibold text-gray-400">
                {section} <span className="mx-1 text-gray-300">/</span>{" "}
                <span className="text-[#266D67]">{title}</span>
              </p>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#fff7e6] text-[#b07a1c] text-[11px] font-bold rounded-full font-[Montserrat]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f9ba48]" />
                Coming soon
              </span>
            </div>

            <h1 className="font-[Montserrat] font-bold text-[#163d3a] text-4xl sm:text-5xl xl:text-6xl leading-[1.1] tracking-tight mb-5">
              {title}
            </h1>
            <p className="font-[Montserrat] text-gray-500 text-base lg:text-lg leading-relaxed mb-8">
              {summary}
            </p>

            {/* What's coming */}
            <p className="font-[Montserrat] text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
              What you&apos;ll find here
            </p>
            <ul className="space-y-2.5 mb-10">
              {plans.map((plan) => (
                <li key={plan} className="flex items-start gap-3 font-[Montserrat] text-sm text-[#163d3a]">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#266D67] shrink-0" />
                  {plan}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
              <a
                href={mailto}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#163d3a] text-white font-bold text-sm rounded-lg hover:bg-[#266D67] transition-all duration-200 shadow-sm font-[Montserrat] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9ba48]"
              >
                <Mail className="w-4 h-4" />
                {emailLabel}
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#266D67] text-[#266D67] font-bold text-sm rounded-lg hover:bg-[#eef6f5] transition-all duration-200 font-[Montserrat] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#266D67]"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </section>

        {/* ── RIGHT: Brand dark panel ── */}
        <section
          aria-label="Open now"
          className="flex-1 bg-[#163d3a] flex items-start md:items-center justify-start relative overflow-hidden pt-14 pb-16 md:pt-40 md:pb-20 px-6 sm:px-10 md:px-8 lg:px-10 xl:px-16"
        >
          {/* Faint grid, echoing the marketplace hero */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative w-full max-w-lg [container-type:inline-size]">

            {/* Signature: outlined page name, filling with gold as it's "built" */}
            <div aria-hidden className="relative select-none mb-10">
              <span
                className="block font-[Montserrat] font-black uppercase leading-none tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.28)]"
                style={{ fontSize: markSize }}
              >
                {mark}
              </span>
              <span
                className="cs-fill absolute inset-0 block font-[Montserrat] font-black uppercase leading-none tracking-tight text-[#f9ba48]"
                style={{ fontSize: markSize }}
              >
                {mark}
              </span>
            </div>

            <p className="font-[Montserrat] text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              We&apos;re still building this page. Our schools are open for enrolment now.
            </p>

            {/* Live destinations */}
            <p className="font-[Montserrat] text-[11px] font-bold uppercase tracking-widest text-[#f9ba48] mb-3">
              Open now
            </p>
            <ul className="grid sm:grid-cols-2 gap-2">
              {openSchools.map((school) => (
                <li key={school.label}>
                  <Link
                    href={school.href}
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9ba48]"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white/10 text-[#f9ba48] flex items-center justify-center shrink-0">
                      {school.icon}
                    </span>
                    <span className="font-[Montserrat] text-sm font-semibold text-white flex-1">
                      {school.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
