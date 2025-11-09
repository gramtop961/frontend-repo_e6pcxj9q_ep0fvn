import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Coins } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-3xl bg-slate-950/90">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* light gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-start justify-end gap-6 p-8 text-white sm:p-12">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur-sm">Grades 1–5 • Behavior-first money practice</span>
        <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
          BankDojo Jr
          <span className="block text-sky-300">Save vs Spend — every week, forever</span>
        </h1>
        <p className="max-w-2xl text-sm text-slate-200 sm:text-base">
          A school-based, never-ending financial-life app. Kids complete short quests, earn coins, then choose Save or Spend. Teachers control complexity; parents get a weekly summary.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/login"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-4 py-2 font-semibold text-slate-900 shadow hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/60"
          >
            <Rocket size={18} /> Login with Auth0
          </a>
          <a
            href="#roles"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 font-semibold text-white backdrop-blur-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <Coins size={18} /> Explore features
          </a>
        </div>
      </div>
    </section>
  );
}
