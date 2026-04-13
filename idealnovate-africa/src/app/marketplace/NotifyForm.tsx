"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-5 py-4 bg-[#068276]/20 border border-[#068276]/30 rounded-lg text-white text-sm font-semibold font-[Montserrat] text-center">
        ✓ You&apos;re on the list! We&apos;ll notify you when we launch.
      </div>
    );
  }

  return (
    <form className="flex gap-2 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-5 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-[Montserrat] focus:outline-none focus:border-[#f4a85e] transition-colors"
      />
      <button
        type="submit"
        className="px-5 py-3 bg-[#f4a85e] text-white font-bold rounded-lg hover:bg-[#e8903e] transition-all flex items-center gap-2 font-[Montserrat] text-sm shrink-0"
      >
        <Bell className="w-4 h-4" />
        Notify Me
      </button>
    </form>
  );
}
