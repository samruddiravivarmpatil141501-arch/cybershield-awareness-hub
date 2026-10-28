import React, { useState } from 'react';
import { 
  KeyRound, 
  ShieldCheck, 
  Eye, 
  EyeOff, 
  Check, 
  X, 
  Sparkles, 
  Copy, 
  Lock, 
  Clock, 
  RefreshCw, 
  ShieldAlert,
  HelpCircle,
  Cpu
} from 'lucide-react';
import { analyzePassword, generateSecurePassphrase } from '../utils/passwordAnalyzer';

export const PasswordSafetySection: React.FC = () => {
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [generatedPassphrase, setGeneratedPassphrase] = useState('');
  const [copyFeedback, setCopyFeedback] = useState(false);

  const analysis = analyzePassword(passwordInput);

  const handleGenerate = () => {
    const newPassphrase = generateSecurePassphrase();
    setGeneratedPassphrase(newPassphrase);
    setPasswordInput(newPassphrase);
  };

  const handleCopy = (text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopyFeedback(true);
    setTimeout(() => setCopyFeedback(false), 2000);
  };

  const getMeterColor = (score: number) => {
    switch (score) {
      case 0:
        return 'bg-red-500';
      case 1:
        return 'bg-orange-500';
      case 2:
        return 'bg-amber-400';
      case 3:
        return 'bg-cyan-400';
      case 4:
        return 'bg-emerald-400';
      default:
        return 'bg-slate-700';
    }
  };

  const getMeterTextColor = (score: number) => {
    switch (score) {
      case 0:
        return 'text-red-400';
      case 1:
        return 'text-orange-400';
      case 2:
        return 'text-amber-400';
      case 3:
        return 'text-cyan-400';
      case 4:
        return 'text-emerald-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Credential Hardening</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Password Safety & Strength Analyzer
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Over 80% of data breaches stem from stolen, reused, or guessable passwords. Learn modern cryptographic best practices, explore the passphrase technique, and test password resilience in real-time.
          </p>
        </div>

        {/* Interactive Analyzer & Passphrase Generator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Real-Time Local Tester */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#091124] border border-cyan-500/30 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <KeyRound className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Live Password Strength Evaluator</h3>
                  <p className="text-xs text-slate-400">Evaluates entropy and estimated brute-force resistance</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-[11px] text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>100% Client-Side Only</span>
              </div>
            </div>

            {/* Privacy notice banner */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Privacy Guaranteed:</strong> This calculation occurs entirely in your browser's local memory. No passwords are sent to a server, stored, or recorded.
              </span>
            </div>

            {/* Input Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-medium text-slate-300">
                <label htmlFor="test-password">Enter a sample password to test:</label>
                <span className="text-slate-400 font-mono">Length: {passwordInput.length} chars</span>
              </div>
              <div className="relative">
                <input
                  id="test-password"
                  type={showPassword ? 'text' : 'password'}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Type a password (e.g. coffee-window-guitar-78 or P@ssw0rd)..."
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-white placeholder-slate-500 font-mono text-sm outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Strength Meter Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Evaluation:</span>
                <span className={`font-bold uppercase tracking-wider ${passwordInput ? getMeterTextColor(analysis.score) : 'text-slate-400'}`}>
                  {passwordInput ? analysis.level : 'Enter Password'}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 h-2.5">
                {[0, 1, 2, 3].map((segmentIndex) => {
                  const isFilled = passwordInput ? (analysis.score === 0 ? segmentIndex === 0 : analysis.score >= segmentIndex + 1) : false;
                  return (
                    <div
                      key={segmentIndex}
                      className={`rounded-full transition-all duration-300 ${
                        isFilled ? getMeterColor(analysis.score) : 'bg-slate-800'
                      }`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Crack Time Estimation Card */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Estimated Time to Crack (Brute Force):</span>
                </div>
                <span className={`text-xs font-bold font-mono ${passwordInput ? getMeterTextColor(analysis.score) : 'text-slate-400'}`}>
                  {analysis.crackTimeEstimate}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Calculated assuming an attacker running specialized high-speed GPU cracking clusters (billions of password attempts per second).
              </p>
            </div>

            {/* Character & Complexity Checks */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Complexity Verification</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className={`p-2.5 rounded-lg border flex items-center justify-between ${analysis.checks.length ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200' : 'bg-slate-950/40 border-slate-800 text-slate-400'}`}>
                  <span>At least 12 characters</span>
                  {analysis.checks.length ? <Check className="w-4 h-4 text-cyan-400" /> : <X className="w-4 h-4 text-slate-500" />}
                </div>
                <div className={`p-2.5 rounded-lg border flex items-center justify-between ${analysis.checks.uppercase ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200' : 'bg-slate-950/40 border-slate-800 text-slate-400'}`}>
                  <span>Uppercase letters (A-Z)</span>
                  {analysis.checks.uppercase ? <Check className="w-4 h-4 text-cyan-400" /> : <X className="w-4 h-4 text-slate-500" />}
                </div>
                <div className={`p-2.5 rounded-lg border flex items-center justify-between ${analysis.checks.lowercase ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200' : 'bg-slate-950/40 border-slate-800 text-slate-400'}`}>
                  <span>Lowercase letters (a-z)</span>
                  {analysis.checks.lowercase ? <Check className="w-4 h-4 text-cyan-400" /> : <X className="w-4 h-4 text-slate-500" />}
                </div>
                <div className={`p-2.5 rounded-lg border flex items-center justify-between ${analysis.checks.numbers ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200' : 'bg-slate-950/40 border-slate-800 text-slate-400'}`}>
                  <span>Numeric digits (0-9)</span>
                  {analysis.checks.numbers ? <Check className="w-4 h-4 text-cyan-400" /> : <X className="w-4 h-4 text-slate-500" />}
                </div>
                <div className={`p-2.5 rounded-lg border flex items-center justify-between ${analysis.checks.symbols ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200' : 'bg-slate-950/40 border-slate-800 text-slate-400'}`}>
                  <span>Special symbols (!@#$%)</span>
                  {analysis.checks.symbols ? <Check className="w-4 h-4 text-cyan-400" /> : <X className="w-4 h-4 text-slate-500" />}
                </div>
                <div className={`p-2.5 rounded-lg border flex items-center justify-between ${analysis.checks.noCommonWords ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200' : 'bg-slate-950/40 border-slate-800 text-slate-400'}`}>
                  <span>No dictionary words/sequences</span>
                  {analysis.checks.noCommonWords ? <Check className="w-4 h-4 text-cyan-400" /> : <X className="w-4 h-4 text-slate-500" />}
                </div>
              </div>
            </div>

            {/* Constructive Feedback */}
            {analysis.feedback.length > 0 && (
              <div className="space-y-1.5 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">Analysis Advice:</span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {analysis.feedback.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Passphrase Generator + Password Golden Rules */}
          <div className="lg:col-span-5 space-y-6">
            {/* Passphrase Generator Tool */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#091124] border border-cyan-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white">Generate a Secure Passphrase</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modern security agencies (including NIST) recommend multi-word <strong>passphrases</strong>. They provide vastly superior mathematical length and entropy while remaining easy for human memory.
              </p>

              {/* Generator Action */}
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={handleGenerate}
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 text-cyan-400" />
                  Generate New Random Passphrase
                </button>

                {generatedPassphrase && (
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-sm text-cyan-300 break-all select-all">
                        {generatedPassphrase}
                      </span>
                      <button
                        onClick={() => handleCopy(generatedPassphrase)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                        title="Copy to clipboard"
                        aria-label="Copy generated passphrase"
                      >
                        {copyFeedback ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    {copyFeedback && (
                      <p className="text-[11px] text-emerald-400 font-medium">Copied to clipboard!</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Practical Password Safety Rules */}
            <div className="p-6 rounded-2xl bg-[#091124] border border-cyan-900/30 space-y-4">
              <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                3 Golden Rules for Password Safety
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <p className="font-semibold text-white">1. Never Reuse Passwords</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    If an obscure website gets breached, hackers test that identical password across your university portal, email, and bank account in seconds.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <p className="font-semibold text-white">2. Use a Reputable Password Manager</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Humans cannot memorize 50 unique 20-character passwords. Password managers store them securely encrypted behind one master passphrase.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                  <p className="font-semibold text-white">3. Avoid Obvious Personal Data</p>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Avoid using your pet's name, college mascot, birth year, or room number. These are the first guesses automated scripts attempt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
