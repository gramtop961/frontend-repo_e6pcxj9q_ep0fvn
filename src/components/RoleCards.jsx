import React from 'react';
import { User, GraduationCap, Shield, Users } from 'lucide-react';

const roles = [
  {
    key: 'student',
    title: 'Student',
    icon: User,
    points: [
      'Join class with a code',
      'Finish weekly quests',
      'Earn coins and choose Save vs Spend',
      'Spend in a fun, safe store',
    ],
    color: 'from-emerald-400/20 to-emerald-600/20 border-emerald-400/40',
  },
  {
    key: 'teacher',
    title: 'Teacher',
    icon: GraduationCap,
    points: [
      'Create classes and share join codes',
      'Pick Starter/Core/Advanced presets',
      'Approve/return submissions',
      'Track progress in minutes',
    ],
    color: 'from-sky-400/20 to-sky-600/20 border-sky-400/40',
  },
  {
    key: 'parent',
    title: 'Parent',
    icon: Users,
    points: [
      'See weekly summaries',
      'Celebrate wins and habits',
    ],
    color: 'from-violet-400/20 to-violet-600/20 border-violet-400/40',
  },
  {
    key: 'admin',
    title: 'Admin',
    icon: Shield,
    points: [
      'Provision schools and classes',
      'Manage teacher access',
    ],
    color: 'from-amber-400/20 to-amber-600/20 border-amber-400/40',
  },
];

export default function RoleCards() {
  return (
    <section id="roles" className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
      <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">Built for your school community</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((r) => (
          <article
            key={r.key}
            className={`group relative overflow-hidden rounded-2xl border ${r.color} bg-gradient-to-br p-5 text-white transition-transform hover:-translate-y-1`}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-white/10 p-2">
                <r.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{r.title}</h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {r.points.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-sky-300">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
