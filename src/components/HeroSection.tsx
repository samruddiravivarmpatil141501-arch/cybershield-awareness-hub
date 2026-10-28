import React from 'react';
import { ArrowRight, HelpCircle, ShieldCheck, Lock, AlertTriangle, Eye, CheckCircle2 } from 'lucide-react';
import { TabType } from '../types';

interface HeroSectionProps {
  onStartLearning: () => void;
  onTakeQuiz: () => void;
  onGoToChecklist: () => void;
  onGoToPasswords: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLearning,
  onTakeQuiz,
  onGoToChecklist,
  onGoToPasswords
}) => {
  return (
    <div className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-sky-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Cybersecurity Education for Students & Beginners</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">CyberShield</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-cyan-200 tracking-tight">
                Learn. Protect. Stay Secure.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              From fake campus financial aid emails and torrented textbook malware to unsecured dorm Wi-Fi, modern cyber threats deliberately prey on students. CyberShield provides intuitive explanations, interactive threat breakdowns, local password evaluation, and a real-world quiz to empower your digital defense.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onStartLearning}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-md shadow-cyan-950/60 flex items-center gap-2 cursor-pointer group"
              >
                Start Learning
                <ArrowRight className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-0.5" />
              </button>

              <button
                onClick={onTakeQuiz}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                Take Cyber Quiz
              </button>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400">
              <div>
                <span className="block font-semibold text-white">100% Private</span>
                <span>Zero tracking or data storage</span>
              </div>
              <div>
                <span className="block font-semibold text-white">Student Focused</span>
                <span>Real campus attack cases</span>
              </div>
              <div>
                <span className="block font-semibold text-white">Interactive Tools</span>
                <span>Quiz & password analyzer</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-950/40 bg-slate-950">
              <img
                src="/src/assets/images/cyber_shield_hero_1793197142118.jpg"
                alt="CyberShield digital defense graphic"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/20 to-transparent" />
              
              {/* Overlay card for quick security tip */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#091124]/90 backdrop-blur-md border border-cyan-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <ShieldCheck className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-cyan-200">First Rule of Digital Defense</p>
                    <p className="text-xs text-slate-300 truncate">Legitimate services will never ask for your password via email.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Quick Section */}
        <div className="mt-16 pt-10 border-t border-slate-800/70">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Learning Modules</h2>
              <p className="text-xl font-bold text-white mt-1">Core Pillars of Cybersecurity Awareness</p>
            </div>
            <button
              onClick={onGoToChecklist}
              className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Student Safety Checklist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              onClick={onStartLearning}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onStartLearning(); } }}
              className="group p-5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Navigate to Threat Fundamentals module"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                Threat Fundamentals
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Understand phishing, ransomware, malware, job scams, and social manipulation before attackers strike.
              </p>
            </div>

            <div
              onClick={onGoToPasswords}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onGoToPasswords(); } }}
              className="group p-5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Navigate to Password Entropy module"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                Password Entropy
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Learn why length trumps complex symbols, generate memorable passphrases, and test your passwords locally.
              </p>
            </div>

            <div
              onClick={onTakeQuiz}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onTakeQuiz(); } }}
              className="group p-5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Navigate to Interactive Quiz"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                Interactive Quiz
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                12 practical scenario questions covering Wi-Fi, 2FA fatigue, fake checks, and malicious file downloads.
              </p>
            </div>

            <div
              onClick={onGoToChecklist}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onGoToChecklist(); } }}
              className="group p-5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Navigate to Safety Checklist"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                Safety Checklist
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Audit your personal devices, 2FA setup, and social media habits with an interactive persistent tracker.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
