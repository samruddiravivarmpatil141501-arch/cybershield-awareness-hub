export type TabType = 'home' | 'threats' | 'passwords' | 'quiz' | 'checklist';

export interface Threat {
  id: string;
  title: string;
  category: 'phishing' | 'malware' | 'ransomware' | 'scams' | 'social_engineering';
  shortDesc: string;
  plainEnglishExplanation: string;
  howItWorks: string[];
  realWorldScenario: string;
  preventionTips: string[];
  commonRedFlags: string[];
  severity: 'Critical' | 'High' | 'Medium';
}

export interface QuizQuestion {
  id: number;
  question: string;
  scenario?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  category: 'account' | 'network' | 'device' | 'habits';
  importance: 'Essential' | 'Recommended' | 'Advanced';
  description: string;
  actionSteps: string[];
}

export interface PasswordAnalysis {
  score: number; // 0 to 4
  level: 'Very Weak' | 'Weak' | 'Fair' | 'Strong' | 'Fortified';
  crackTimeEstimate: string;
  feedback: string[];
  checks: {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
    noCommonWords: boolean;
  };
}
