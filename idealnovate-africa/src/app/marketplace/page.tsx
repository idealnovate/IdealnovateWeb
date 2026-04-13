import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotifyForm from "./NotifyForm";
import { ShoppingBag, Sparkles, Laptop, Headphones, Monitor, Smartphone, Package, Zap } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace | Idealnovate Africa",
  description: "Explore our upcoming tech marketplace with premium gadgets and learning tools for African tech professionals.",
};

const categories = [
  { icon: <Laptop className="w-6 h-6" />, name: "Laptops & PCs", count: "120+ products" },
  { icon: <Smartphone className="w-6 h-6" />, name: "Tablets & Phones", count: "80+ products" },
  { icon: <Headphones className="w-6 h-6" />, name: "Audio Equipment", count: "60+ products" },
  { icon: <Monitor className="w-6 h-6" />, name: "Monitors & Displays", count: "45+ products" },
  { icon: <Zap className="w-6 h-6" />, name: "Accessories", count: "200+ products" },
  { icon: <Package className="w-6 h-6" />, name: "Learning Bundles", count: "30+ bundles" },
];

export default function MarketplacePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-[5.5rem]">
        {/* Hero section */}
        <section className="relative bg-gradient-to-br from-[#022c28] via-[#068276] to-[#0a9e90] py-24 lg:py-36 overflow-hidden">
          {/* Background effects */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #f4a85e 0%, transparent 50%), radial-gradient(circle at 80% 30%, #0a9e90 0%, transparent 40%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          {/* Floating orbs */}
          <div className="absolute top-10 left-20 w-40 h-40 rounded-full bg-[#f4a85e]/10 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Coming Soon badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f4a85e] text-white rounded-full text-sm font-bold mb-8 shadow-lg shadow-[#f4a85e]/30 font-[Montserrat]">
              <Sparkles className="w-4 h-4" />
              Coming Soon — Something Big is Building
            </div>

            {/* Icon */}
            <div className="relative inline-flex mb-8">
              <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                <ShoppingBag className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#f4a85e] rounded-full flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-[Montserrat] font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
              The Idealnovate
              <br />
              <span className="text-[#f4a85e]">Marketplace</span>
            </h1>
            <p className="text-white/75 text-lg lg:text-xl font-[Montserrat] leading-relaxed max-w-2xl mx-auto mb-8">
              We&apos;re building Africa&apos;s premier tech marketplace — a curated destination for premium gadgets, learning tools, and professional equipment, priced for African tech learners.
            </p>

            {/* Countdown teaser */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white mb-10">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#f4a85e]"
                    style={{ opacity: 0.4 + i * 0.3 }}
                  />
                ))}
              </div>
              <span className="font-[Montserrat] text-sm">Launching Q3 2025</span>
            </div>

            {/* Notify form — client component */}
            <div className="mb-4">
              <p className="text-white/60 text-sm font-[Montserrat] mb-3">Be the first to know when we launch</p>
              <NotifyForm />
            </div>
          </div>
        </section>

        {/* What to expect */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f0faf8] text-[#068276] text-sm font-semibold rounded-full mb-4 font-[Montserrat]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#068276]" />
                What to Expect
              </span>
              <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl text-[#022c28] leading-tight">
                A Marketplace Built for
                <span className="text-[#068276]"> African Tech Professionals</span>
              </h2>
            </div>

            {/* Category preview grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="relative group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#068276]/30 hover:shadow-xl hover:shadow-[#068276]/8 transition-all duration-300"
                >
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-0.5 bg-[#f0faf8] text-[#068276] text-xs font-bold rounded-full font-[Montserrat]">
                      Soon
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#f0faf8] flex items-center justify-center text-[#068276] mb-4 group-hover:bg-[#068276] group-hover:text-white transition-all duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="font-[Montserrat] font-bold text-[#022c28] text-base mb-1">{cat.name}</h3>
                  <p className="text-gray-400 text-sm font-[Montserrat]">{cat.count}</p>
                </div>
              ))}
            </div>

            {/* Why Marketplace */}
            <div className="bg-[#022c28] rounded-3xl p-8 lg:p-10 grid lg:grid-cols-3 gap-6">
              {[
                { title: "Vetted Quality", desc: "Every product is carefully selected and reviewed by our team. No counterfeits, no compromises." },
                { title: "Africa-First Pricing", desc: "Priced for African professionals with local payment methods and flexible financing options." },
                { title: "Learner Bundles", desc: "Special learning bundles that pair gadgets with Idealnovate courses at deeply discounted rates." },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <h4 className="font-[Montserrat] font-bold text-[#f4a85e] text-lg mb-2">{item.title}</h4>
                  <p className="text-white/60 text-sm font-[Montserrat] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back to home */}
        <section className="py-10 bg-[#f7fbfa]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gray-500 font-[Montserrat] mb-4">While we build the marketplace, explore our world-class learning programmes</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#068276] text-white font-bold rounded-lg hover:bg-[#022c28] transition-all shadow-sm font-[Montserrat] text-sm"
            >
              ← Back to Homepage
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
