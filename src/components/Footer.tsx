import React from 'react';
import { Shield, ExternalLink, Lock, AlertCircle, Heart } from 'lucide-react';
import { TabType } from '../types';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#040710] text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Shield className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Cyber<span className="text-cyan-400">Shield</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Cybersecurity Awareness Hub designed to equip college students and beginners with essential defensive knowledge against scams, malware, and digital intrusions.
            </p>
            <p className="text-[11px] text-cyan-400 font-medium">
              Learn · Protect · Stay Secure
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Learning Hub</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('threats')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Threats & Phishing Inspector
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('passwords')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Password Analyzer & Passphrases
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('quiz')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Interactive 12-Question Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('checklist')}
                  className="hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Personal Safety Checklist
                </button>
              </li>
            </ul>
          </div>

          {/* Official Security Reporting */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Report Real Threats</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.cisa.gov/report"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>CISA Incident Reporting</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ic3.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>FBI Internet Crime Center (IC3)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://reportfraud.ftc.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>FTC Scam & Identity Fraud</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li className="text-slate-400 text-[11px] pt-1">
                For campus issues, always report immediately to your official university IT Helpdesk.
              </li>
            </ul>
          </div>

          {/* Privacy & Educational Note */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Privacy Guarantee</h4>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-1.5 text-cyan-400 font-medium">
                <Lock className="w-3.5 h-3.5" />
                <span>Zero Data Transmission</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                All password evaluation calculations and quiz interactions run strictly client-side inside your browser. No personal credentials or quiz results are transmitted or logged.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} CyberShield – Cybersecurity Awareness Hub. Open educational resource.</p>
          <div className="flex items-center gap-4">
            <span>Built for college students and beginners</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
