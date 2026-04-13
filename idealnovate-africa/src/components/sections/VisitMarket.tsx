"use client";

import Link from "next/link";
import { ShoppingBag, Laptop, Headphones, Monitor, Smartphone, ArrowRight, Zap, Package } from "lucide-react";

const gadgets = [
  { icon: <Laptop className="w-5 h-5" />, name: "Laptops & PCs" },
  { icon: <Smartphone className="w-5 h-5" />, name: "Tablets & Phones" },
  { icon: <Headphones className="w-5 h-5" />, name: "Audio Equipment" },
  { icon: <Monitor className="w-5 h-5" />, name: "Monitors & Displays" },
  { icon: <Zap className="w-5 h-5" />, name: "Accessories" },
  { icon: <Package className="w-5 h-5" />, name: "Learning Bundles" },
];

export default function VisitMarket() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#163d3a] via-[#1f5954] to-[#266D67]">
          {/* Decorative layer */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, #f9ba48 0%, transparent 50%), radial-gradient(circle at 20% 80%, #2d8a84 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-[#f9ba48] text-sm font-semibold rounded-full mb-5 border border-white/15 font-[Montserrat]">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Idealnovate Marketplace
                </span>
                <h2 className="font-[Montserrat] font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
                  Get the Tech Gear
                  <br />
                  <span className="text-[#f9ba48]">Powering Your Journey</span>
                </h2>
                <p className="text-white/70 font-[Montserrat] font-light text-lg leading-relaxed mb-6">
                  Visit the Idealnovate Marketplace to explore a curated selection of premium tech gadgets, learning tools, and equipment — specially sourced for African tech learners and professionals.
                </p>

                {/* Gadget categories */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {gadgets.map((g) => (
                    <div
                      key={g.name}
                      className="flex items-center gap-2 px-3 py-2.5 bg-white/8 backdrop-blur-sm border border-white/10 rounded-xl text-white/80 text-sm font-[Montserrat] hover:bg-white/15 transition-colors"
                    >
                      <span className="text-[#f9ba48]">{g.icon}</span>
                      {g.name}
                    </div>
                  ))}
                </div>

                <Link
                  href="/marketplace"
                  className="group inline-flex items-center gap-3 px-7 py-4 bg-[#f9ba48] text-white font-bold rounded-lg hover:bg-[#d4a030] transition-all shadow-sm font-[Montserrat] text-base"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Visit Marketplace
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right — visual stack */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-72 h-72">
                  {/* Background cards */}
                  <div className="absolute top-4 left-4 w-full h-full bg-white/5 rounded-3xl rotate-6" />
                  <div className="absolute top-2 left-2 w-full h-full bg-white/8 rounded-3xl rotate-3" />

                  {/* Main card */}
                  <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 w-full h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-white/60 text-xs font-[Montserrat] uppercase tracking-wider">Featured</span>
                        <span className="px-2.5 py-1 bg-[#f9ba48] text-white text-xs font-bold rounded-full font-[Montserrat]">
                          Sale
                        </span>
                      </div>
                      <div className="w-full h-28 bg-white/8 rounded-2xl flex items-center justify-center mb-4">
                        <Laptop className="w-16 h-16 text-white/40" />
                      </div>
                      <p className="text-white font-[Montserrat] font-bold text-base">MacBook Air M2</p>
                      <p className="text-white/60 text-sm font-[Montserrat]">Perfect for learners</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#f9ba48] font-[Montserrat] font-bold text-xl">₦420,000</span>
                      <button className="px-3 py-1.5 bg-[#f9ba48] text-white text-xs font-bold rounded-lg font-[Montserrat]">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
