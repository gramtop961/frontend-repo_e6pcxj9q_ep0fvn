import React from 'react';
import { ArrowRight, Lock, Settings } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-white">
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">Sign in to your role</h3>
            <p className="mt-2 text-slate-300">
              Use your school email. Roles come from Auth0 and control what you can see and do.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1"><Lock size={16}/>Secure</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1"><Settings size={16}/>RBAC</span>
            </div>
            <a href="/login" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-sky-400 px-4 py-2 font-semibold text-slate-900 shadow hover:bg-sky-300">
              Go to Login <ArrowRight size={18} />
            </a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h4 className="font-semibold">Presets</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-300">
              <li>• Starter: 1–2 quests/week, basic store</li>
              <li>• Core: 3 quests/week, approvals, store</li>
              <li>• Advanced: 4+ quests, reflections, analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
