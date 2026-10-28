/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ThreatsSection } from './components/ThreatsSection';
import { PasswordSafetySection } from './components/PasswordSafetySection';
import { QuizSection } from './components/QuizSection';
import { ChecklistSection } from './components/ChecklistSection';
import { Footer } from './components/Footer';
import { TabType } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div className="min-h-screen bg-[#050914] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            <HeroSection
              onStartLearning={() => {
                setActiveTab('threats');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onTakeQuiz={() => {
                setActiveTab('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onGoToChecklist={() => {
                setActiveTab('checklist');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onGoToPasswords={() => {
                setActiveTab('passwords');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* In Home overview, also display concise previews to invite exploration */}
            <div className="border-t border-slate-900/80 bg-[#060c1d]/60">
              <ThreatsSection />
            </div>

            <div className="border-t border-slate-900/80">
              <PasswordSafetySection />
            </div>

            <div className="border-t border-slate-900/80 bg-[#060c1d]/60">
              <ChecklistSection />
            </div>
          </div>
        )}

        {activeTab === 'threats' && <ThreatsSection />}

        {activeTab === 'passwords' && <PasswordSafetySection />}

        {activeTab === 'quiz' && <QuizSection />}

        {activeTab === 'checklist' && <ChecklistSection />}
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
