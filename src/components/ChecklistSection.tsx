import React, { useState, useEffect } from 'react';
import { 
  CheckSquare, 
  Square, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles,
  Wifi,
  Key,
  Smartphone,
  BookCheck
} from 'lucide-react';
import { CHECKLIST_ITEMS } from '../data/checklistData';
import { ChecklistItem } from '../types';

export const ChecklistSection: React.FC = () => {
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cybershield_checklist');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // Clean initial state: audit starts at 0% until the user checks off items
    return [];
  });

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [copyPledgeFeedback, setCopyPledgeFeedback] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('cybershield_checklist', JSON.stringify(completedIds));
    } catch {
      // ignore
    }
  }, [completedIds]);

  const toggleItem = (id: string) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setCompletedIds([]);
  };

  const handleSelectAll = () => {
    setCompletedIds(CHECKLIST_ITEMS.map((item) => item.id));
  };

  const totalItems = CHECKLIST_ITEMS.length;
  const completedCount = completedIds.length;
  const completionPercentage = Math.round((completedCount / totalItems) * 100);

  const filteredItems = filterCategory === 'all'
    ? CHECKLIST_ITEMS
    : CHECKLIST_ITEMS.filter((item) => item.category === filterCategory);

  const getReadinessLevel = () => {
    if (completionPercentage >= 90) {
      return {
        level: 'Fortified Defense',
        message: 'Outstanding! Your essential accounts, network endpoints, and device habits are well protected.',
        color: 'text-emerald-400'
      };
    } else if (completionPercentage >= 60) {
      return {
        level: 'Moderate Protection',
        message: 'Good progress. Complete the remaining items to close potential attacker access points.',
        color: 'text-cyan-400'
      };
    } else if (completionPercentage >= 30) {
      return {
        level: 'Baseline Defense',
        message: 'You have started your security journey, but significant attack vectors remain open.',
        color: 'text-amber-400'
      };
    } else if (completionPercentage > 0) {
      return {
        level: 'Vulnerable',
        message: 'Your digital footprint is exposed. Prioritize enabling 2FA and updating your devices today.',
        color: 'text-red-400'
      };
    } else {
      return {
        level: 'Audit Pending',
        message: 'Start your personal security audit by checking off the safeguards you have configured.',
        color: 'text-slate-400'
      };
    }
  };

  const handleCopyPledge = () => {
    const text = `CyberShield Security Readiness Audit:
Completed: ${completedCount}/${totalItems} (${completionPercentage}%)
Status: ${getReadinessLevel().level}
Pledged Habits: Two-Factor Authentication, Password Manager, Secure Wi-Fi, OS Updates, 3-2-1 Backups.
Audit completed at CyberShield Awareness Hub.`;
    navigator.clipboard.writeText(text);
    setCopyPledgeFeedback(true);
    setTimeout(() => setCopyPledgeFeedback(false), 2500);
  };

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Interactive Defense Audit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Personal Cybersecurity Safety Checklist
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Take immediate practical steps to protect your college portal, personal laptops, smartphones, and social identities. Check off each item as you configure your devices.
          </p>
        </div>

        {/* Readiness Meter Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#091124] border border-cyan-500/30 space-y-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <p className="text-xs uppercase font-semibold text-slate-400">Security Readiness Score</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
                  {completionPercentage}%
                </span>
                <span className={`text-sm font-bold ${getReadinessLevel().color}`}>
                  · {getReadinessLevel().level}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{getReadinessLevel().message}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyPledge}
                className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copyPledgeFeedback ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span>{copyPledgeFeedback ? 'Pledge Copied!' : 'Copy Summary'}</span>
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>{completedCount} of {totalItems} safeguards active</span>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSelectAll}
                className="hover:text-cyan-300 underline cursor-pointer"
              >
                Check All
              </button>
              <button
                onClick={handleReset}
                className="hover:text-red-400 underline cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/80 rounded-xl border border-slate-800">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              filterCategory === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Items ({CHECKLIST_ITEMS.length})
          </button>
          <button
            onClick={() => setFilterCategory('account')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              filterCategory === 'account'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Account Security
          </button>
          <button
            onClick={() => setFilterCategory('network')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              filterCategory === 'network'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Network & Wi-Fi
          </button>
          <button
            onClick={() => setFilterCategory('device')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              filterCategory === 'device'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Device Protection
          </button>
          <button
            onClick={() => setFilterCategory('habits')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
              filterCategory === 'habits'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Daily Habits & Privacy
          </button>
        </div>

        {/* Checklist Items Interactive List */}
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isCompleted = completedIds.includes(item.id);
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all ${
                  isCompleted
                    ? 'bg-slate-900/40 border-cyan-900/40'
                    : 'bg-[#091124] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="p-4 sm:p-5 flex items-start gap-3.5">
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={isCompleted}
                    onClick={() => toggleItem(item.id)}
                    className="mt-0.5 text-cyan-400 hover:text-cyan-300 transition-transform cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                    aria-label={isCompleted ? `Mark ${item.title} as incomplete` : `Mark ${item.title} as completed`}
                  >
                    {isCompleted ? (
                      <CheckSquare className="w-5 h-5 text-cyan-400 fill-cyan-950/80" />
                    ) : (
                      <Square className="w-5 h-5 text-slate-500 hover:text-cyan-400" />
                    )}
                  </button>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3
                        onClick={() => toggleItem(item.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggleItem(item.id);
                          }
                        }}
                        className={`text-sm sm:text-base font-semibold cursor-pointer focus:outline-none focus-visible:underline ${
                          isCompleted ? 'text-slate-300 line-through' : 'text-white'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono text-cyan-400/80">
                        {item.importance}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Step expand toggle */}
                    <button
                      type="button"
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 pt-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide Action Steps' : 'View Action Steps'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {/* Expanded Action Steps */}
                    {isExpanded && (
                      <div className="pt-3 pb-1 border-t border-slate-800/80 mt-2 space-y-2">
                        <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                          How to implement on your devices:
                        </span>
                        <div className="space-y-1.5">
                          {item.actionSteps.map((step, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <span className="w-4 h-4 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                                {sIdx + 1}
                              </span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
