import React from 'react';
import HeroSection from './components/HeroSection';
import RoleCards from './components/RoleCards';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 text-white">
        <a href="/" className="flex items-center gap-2 font-extrabold">
          <span className="inline-block h-6 w-6 rounded-lg bg-sky-400" />
          <span>BankDojo Jr</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          <a href="#roles" className="text-slate-300 hover:text-white">Roles</a>
          <a href="#how" className="text-slate-300 hover:text-white">How it works</a>
          <a href="/login" className="rounded-lg bg-white/10 px-3 py-1.5 hover:bg-white/20">Login</a>
        </nav>
      </header>

      <main className="space-y-8 sm:space-y-12">
        <HeroSection />
        <div id="how">
          <HowItWorks />
        </div>
        <RoleCards />
        <CTASection />
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} BankDojo Jr — Behavior-first money practice for schools
      </footer>
    </div>
  );
}

export default App;
