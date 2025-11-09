import React from 'react';
import { CheckCircle2, Coins, Store, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: CheckCircle2,
      title: 'Complete Quests',
      desc: 'Short, behavior-first tasks matched to grade and class preset.',
    },
    {
      icon: Coins,
      title: 'Earn Coins',
      desc: 'Teachers approve or return; coins are awarded on approval.',
    },
    {
      icon: Store,
      title: 'Save or Spend',
      desc: 'Allocate coins to Save vs Spend. Spend in the classroom store.',
    },
    {
      icon: RefreshCw,
      title: 'Weekly Reset',
      desc: 'Cycles never end—habits form over time with gentle repetition.',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">How it works</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white">
            <div className="mb-3 inline-flex rounded-lg bg-sky-400/10 p-2 text-sky-300">
              <s.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
