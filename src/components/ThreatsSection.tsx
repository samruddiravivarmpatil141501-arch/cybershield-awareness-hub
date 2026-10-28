import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Bug, 
  FileLock, 
  DollarSign, 
  Users, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink,
  Flame,
  Info,
  Mail,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { THREATS_DATA } from '../data/threatsData';
import { Threat } from '../types';

export const ThreatsSection: React.FC = () => {
  const [selectedThreatId, setSelectedThreatId] = useState<string>('phishing');
  const [inspectorActiveFlag, setInspectorActiveFlag] = useState<string | null>(null);

  const selectedThreat = THREATS_DATA.find((t) => t.id === selectedThreatId) || THREATS_DATA[0];

  const getThreatIcon = (id: string) => {
    switch (id) {
      case 'phishing':
        return Mail;
      case 'malware':
        return Bug;
      case 'ransomware':
        return FileLock;
      case 'scams':
        return DollarSign;
      case 'social_engineering':
        return Users;
      default:
        return ShieldAlert;
    }
  };

  const redFlagsInEmail = [
    {
      id: 'sender',
      title: 'Suspicious Sender Domain',
      tag: 'From Address',
      text: 'helpdesk@campus-secure-portal.com',
      explanation: 'Notice the domain is "campus-secure-portal.com", NOT your official university domain (e.g., @stateuniversity.edu). Attackers purchase lookalike domains to impersonate administrative departments.'
    },
    {
      id: 'urgency',
      title: 'Artificial Panic & Urgency',
      tag: 'Subject Line',
      text: 'FINAL NOTICE: Account Access Suspension in 2 Hours',
      explanation: 'Scammers deliberately manufacture time pressure to make you panic and react emotionally instead of critically verifying the authenticity.'
    },
    {
      id: 'greeting',
      title: 'Impersonal Generic Salutation',
      tag: 'Salutation',
      text: 'Dear Valued Student / User',
      explanation: 'Your official college registrar and IT department know your actual first and last name and student ID. Mass phishing campaigns often use generic placeholders.'
    },
    {
      id: 'link',
      title: 'Deceptive Hyperlink Target',
      tag: 'Button / Link',
      text: 'Click here to verify student identity',
      explanation: 'While the button text says "Verify Student Identity", hovering over the link reveals it actually routes to "https://tinyurl.com/fake-login-harvest" or an unencrypted external server.'
    },
    {
      id: 'attachment',
      title: 'Dangerous File Attachment',
      tag: 'Attachment',
      text: 'Account_Verification_Instructions.pdf.exe',
      explanation: 'Notice the double extension (".pdf.exe"). It is not a document; running it executes a malicious script that installs malware onto your operating system.'
    }
  ];

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Cyber Threat Encyclopedia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Learn Cybersecurity Threats
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Cybersecurity threats are designed to exploit curiosity, urgency, and misplaced trust. Below, explore simple breakdowns of the top 5 threats college students and beginners encounter, along with practical prevention strategies.
          </p>
        </div>

        {/* Threat Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/80 rounded-xl border border-slate-800">
          {THREATS_DATA.map((threat) => {
            const Icon = getThreatIcon(threat.id);
            const isSelected = selectedThreat.id === threat.id;
            return (
              <button
                key={threat.id}
                onClick={() => setSelectedThreatId(threat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-950'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                {threat.title}
              </button>
            );
          })}
        </div>

        {/* Selected Threat Detailed Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Threat Breakdown */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#091124] border border-cyan-900/30 space-y-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    {React.createElement(getThreatIcon(selectedThreat.id), { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedThreat.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span>Threat Category: {selectedThreat.category.replace('_', ' ').toUpperCase()}</span>
                      <span aria-hidden="true">·</span>
                      <span className={selectedThreat.severity === 'Critical' ? 'text-red-400 font-semibold' : 'text-amber-400 font-semibold'}>
                        {selectedThreat.severity} Severity
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* In Plain English */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">In Plain English</h4>
                <p className="text-base text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  {selectedThreat.plainEnglishExplanation}
                </p>
              </div>

              {/* How Attackers Execute It */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">How Attackers Operate</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedThreat.howItWorks.map((step, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/70 text-xs text-slate-300 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* College Campus Scenario */}
              <div className="p-4 sm:p-5 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>Real College Campus Scenario</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                  {selectedThreat.realWorldScenario}
                </p>
              </div>

              {/* Prevention Tips */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">How To Protect Yourself</h4>
                <div className="space-y-2">
                  {selectedThreat.preventionTips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-cyan-950/20 border border-cyan-900/30 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Warning Red Flags + Threat Quick Selector */}
          <div className="lg:col-span-4 space-y-6">
            {/* Warning Signs */}
            <div className="p-6 rounded-2xl bg-[#091124] border border-cyan-900/30 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Immediate Red Flags</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                If you encounter any of these signs when browsing or reading an incoming message, pause immediately:
              </p>
              <div className="space-y-2.5">
                {selectedThreat.commonRedFlags.map((flag, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                    <span>{flag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Threat Reference Cards */}
            <div className="p-6 rounded-2xl bg-[#091124] border border-cyan-900/30 space-y-3">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Other Threats to Review</h4>
              <div className="space-y-2">
                {THREATS_DATA.filter((t) => t.id !== selectedThreat.id).map((other) => {
                  const OtherIcon = getThreatIcon(other.id);
                  return (
                    <button
                      key={other.id}
                      onClick={() => setSelectedThreatId(other.id)}
                      className="w-full text-left p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800/80 hover:border-cyan-500/30 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <OtherIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="text-xs font-medium text-white group-hover:text-cyan-300">{other.title}</p>
                          <p className="text-[11px] text-slate-400 line-clamp-1">{other.shortDesc}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Feature: Phishing Email Anatomy Inspector */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#070e22] border border-cyan-500/30 space-y-6 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-cyan-950 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4" />
                <span>Interactive Learning Tool</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Phishing Email Anatomy Inspector
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-sm">
              Click the highlighted red tags on the mock phishing email below to reveal why cybersecurity analysts flag them as dangerous.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Mock Email Canvas */}
            <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-5 space-y-4 font-sans text-xs sm:text-sm">
              {/* Email Client Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="font-medium text-slate-300">University Inbox · Incoming Message</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">Today, 08:14 AM</span>
              </div>

              {/* Hotspot 1: Sender */}
              <div className="space-y-1">
                <span className="text-slate-400 font-mono text-[11px]">From: </span>
                <button
                  onClick={() => setInspectorActiveFlag('sender')}
                  className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-left transition-all cursor-pointer ${
                    inspectorActiveFlag === 'sender'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/60 ring-2 ring-red-500/30'
                      : 'bg-slate-900 text-slate-200 border border-slate-700 hover:border-cyan-400'
                  }`}
                >
                  <span className="font-semibold text-white">Campus IT Helpdesk</span>
                  <span className="text-red-400 font-mono">&lt;helpdesk@campus-secure-portal.com&gt;</span>
                  <span className="text-[10px] bg-red-950 text-red-300 px-1.5 py-0.2 rounded font-bold">CLICK TO INSPECT</span>
                </button>
              </div>

              {/* Hotspot 2: Urgency Subject */}
              <div className="space-y-1">
                <span className="text-slate-400 font-mono text-[11px]">Subject: </span>
                <button
                  onClick={() => setInspectorActiveFlag('urgency')}
                  className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-left transition-all cursor-pointer ${
                    inspectorActiveFlag === 'urgency'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/60 ring-2 ring-red-500/30'
                      : 'bg-slate-900 text-slate-200 border border-slate-700 hover:border-cyan-400'
                  }`}
                >
                  <span className="font-bold text-amber-300">FINAL NOTICE: Your Student Account Access Will Terminate in 2 Hours</span>
                  <span className="text-[10px] bg-amber-950 text-amber-300 px-1.5 py-0.2 rounded font-bold">INSPECT</span>
                </button>
              </div>

              {/* Email Body */}
              <div className="pt-3 border-t border-slate-800/80 space-y-3 text-slate-300 leading-relaxed">
                {/* Hotspot 3: Greeting */}
                <div>
                  <button
                    onClick={() => setInspectorActiveFlag('greeting')}
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded cursor-pointer transition-all ${
                      inspectorActiveFlag === 'greeting'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/60 ring-2 ring-red-500/30'
                        : 'hover:bg-slate-800 border border-transparent'
                    }`}
                  >
                    <span>Dear Valued Student / Campus Customer,</span>
                    <span className="text-[10px] text-cyan-400 underline">(Inspect Greeting)</span>
                  </button>
                </div>

                <p>
                  Our server migration detected an unconfirmed security status for your university student profile. To maintain continuous access to course registration, tuition bills, and library services, you must verify your identity immediately.
                </p>

                {/* Hotspot 4: Action Button Link */}
                <div className="pt-2 pb-2">
                  <button
                    type="button"
                    onClick={() => setInspectorActiveFlag('link')}
                    aria-label="Inspect simulated suspicious link button"
                    className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      inspectorActiveFlag === 'link'
                        ? 'bg-red-600 text-white ring-4 ring-red-500/30'
                        : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                    }`}
                  >
                    <span>Verify My Student Credentials Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[11px] text-slate-400 mt-1 font-mono">
                    Target URL: https://portal-auth-security-harvest.xyz/login
                  </p>
                </div>

                {/* Hotspot 5: Attachment */}
                <div className="pt-2">
                  <span className="text-slate-400 text-[11px] block mb-1">Attached Document:</span>
                  <button
                    onClick={() => setInspectorActiveFlag('attachment')}
                    className={`flex items-center gap-2 p-2 rounded-lg transition-all cursor-pointer ${
                      inspectorActiveFlag === 'attachment'
                        ? 'bg-red-500/20 text-red-300 border border-red-500/60 ring-2 ring-red-500/30'
                        : 'bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="font-mono text-xs text-white">Account_Verification_Guide.pdf.exe</span>
                    <span className="text-[10px] text-red-400 font-bold ml-auto">(Dangerous Extension)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Inspector Explanation Panel */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  <Info className="w-4 h-4" />
                  <span>Security Inspector Analysis</span>
                </div>

                {inspectorActiveFlag ? (
                  (() => {
                    const flagData = redFlagsInEmail.find((f) => f.id === inspectorActiveFlag);
                    if (!flagData) return null;
                    return (
                      <div className="space-y-3">
                        <div className="inline-block px-2.5 py-1 rounded bg-red-950/80 border border-red-500/40 text-red-300 font-semibold text-xs">
                          RED FLAG: {flagData.title}
                        </div>
                        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 font-mono text-xs text-amber-300">
                          {flagData.text}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {flagData.explanation}
                        </p>
                        <div className="pt-2 border-t border-slate-800">
                          <p className="text-xs text-cyan-300 font-medium">
                            Safety Rule: Never trust urgency; always type the university portal URL directly into your browser address bar.
                          </p>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  <div className="text-center py-8 space-y-3">
                    <Mail className="w-10 h-10 text-cyan-400/60 mx-auto" />
                    <p className="text-sm font-medium text-slate-200">
                      Click any highlighted item in the email preview to inspect it.
                    </p>
                    <p className="text-xs text-slate-400">
                      Learn to spot spoofed sender domains, artificial urgency, deceptive URLs, and masked executable attachments.
                    </p>
                  </div>
                )}
              </div>

              {/* Quick test buttons to inspect all flags */}
              <div className="space-y-1.5">
                <span className="text-[11px] text-slate-400 block font-medium">Or jump to any red flag:</span>
                <div className="flex flex-wrap gap-1.5">
                  {redFlagsInEmail.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setInspectorActiveFlag(item.id)}
                      className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                        inspectorActiveFlag === item.id
                          ? 'bg-cyan-400 text-slate-950 font-semibold'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {item.tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
