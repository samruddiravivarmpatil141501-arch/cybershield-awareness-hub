import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  BookOpen,
  AlertTriangle,
  Lightbulb
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/quizData';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanationInstant, setShowExplanationInstant] = useState(true);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const progressPercentage = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  const handleSelectOption = (optionIndex: number) => {
    if (isSubmitted || currentAnswerSelected) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Score calculations
  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const score = calculateScore();
  const scorePercent = Math.round((score / totalQuestions) * 100);

  const getScoreBadge = () => {
    if (scorePercent >= 90) {
      return {
        title: 'CyberShield Master',
        desc: 'Outstanding! You possess advanced cybersecurity intuition and strong habits to defend against sophisticated real-world attacks.',
        color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/40'
      };
    } else if (scorePercent >= 75) {
      return {
        title: 'Security Conscious',
        desc: 'Great job! You have solid baseline security knowledge and understand common scams and password fundamentals.',
        color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/40'
      };
    } else if (scorePercent >= 50) {
      return {
        title: 'Developing Defender',
        desc: 'Good start, but you have several vulnerabilities attackers frequently target. Review the explanation breakdown below.',
        color: 'text-amber-400 border-amber-500/30 bg-amber-950/40'
      };
    } else {
      return {
        title: 'Security Novice – High Risk',
        desc: 'You are vulnerable to common university phishing schemes, unencrypted Wi-Fi hazards, and credential theft. Please study the Learn Threats guide carefully.',
        color: 'text-red-400 border-red-500/30 bg-red-950/40'
      };
    }
  };

  const currentAnswerSelected = selectedAnswers[currentQuestionIndex] !== undefined;
  const isCurrentCorrect = selectedAnswers[currentQuestionIndex] === currentQ.correctAnswer;

  return (
    <div className="py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Interactive Knowledge Assessment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cyber Threat & Defense Quiz
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Test your ability to recognize phishing emails, insecure Wi-Fi setups, credential theft, and social engineering tricks in realistic university scenarios.
          </p>
        </div>

        {/* Quiz Body or Results Screen */}
        {!isSubmitted ? (
          <div className="space-y-6">
            {/* Question Progress Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#091124] border border-cyan-900/30 space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-slate-200">
                  Question <span className="text-cyan-400 font-mono font-bold">{currentQuestionIndex + 1}</span> of {totalQuestions}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Category: <span className="text-cyan-300 font-medium">{currentQ.category}</span>
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-sky-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Active Question Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#091124] border border-cyan-500/30 space-y-6 shadow-2xl">
              {currentQ.scenario && (
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-cyan-200 flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Context:</strong> {currentQ.scenario}
                  </span>
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Options List */}
              <div className="space-y-3">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;
                  const isAnswerSubmittedForStep = currentAnswerSelected && showExplanationInstant;
                  const isThisCorrect = optIdx === currentQ.correctAnswer;

                  let borderStyle = 'border-slate-800 hover:border-cyan-500/40 bg-slate-900/60';
                  let icon = null;

                  if (isAnswerSubmittedForStep) {
                    if (isThisCorrect) {
                      borderStyle = 'border-emerald-500/60 bg-emerald-950/30 text-emerald-100';
                      icon = <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />;
                    } else if (isSelected) {
                      borderStyle = 'border-red-500/60 bg-red-950/30 text-red-100';
                      icon = <XCircle className="w-5 h-5 text-red-400 shrink-0" />;
                    }
                  } else if (isSelected) {
                    borderStyle = 'border-cyan-400 bg-cyan-950/40 text-cyan-100 ring-2 ring-cyan-500/30';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={currentAnswerSelected}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3 ${
                        currentAnswerSelected ? 'cursor-default' : 'cursor-pointer hover:border-cyan-500/40'
                      } ${borderStyle}`}
                    >
                      <span className="w-6 h-6 rounded-md bg-slate-800 text-slate-300 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed flex-1">
                        {option}
                      </span>
                      {icon}
                    </button>
                  );
                })}
              </div>

              {/* Immediate Step Feedback Note */}
              {currentAnswerSelected && showExplanationInstant && (
                <div className={`p-4 rounded-xl border space-y-1.5 ${isCurrentCorrect ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-amber-950/20 border-amber-500/30'}`}>
                  <div className="flex items-center gap-2">
                    {isCurrentCorrect ? (
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" /> Explanation & Best Practice
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`px-4 py-2.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                    currentQuestionIndex === 0
                      ? 'text-slate-600 bg-slate-900/40 cursor-not-allowed'
                      : 'text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 cursor-pointer'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!currentAnswerSelected}
                    className={`px-5 py-2.5 rounded-lg text-xs font-bold flex items-center gap-2 transition-all ${
                      !currentAnswerSelected
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : currentQuestionIndex === totalQuestions - 1
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-950 cursor-pointer'
                        : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md shadow-cyan-950 cursor-pointer'
                    }`}
                  >
                    <span>{currentQuestionIndex === totalQuestions - 1 ? 'Finish & See Score' : 'Next Question'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Quiz Results Overview */
          <div className="space-y-8">
            {/* Score Summary Card */}
            <div className="p-8 rounded-2xl bg-[#091124] border border-cyan-500/40 text-center space-y-6 shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto">
                <Award className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-wider font-semibold text-cyan-400">Quiz Completed</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-white font-mono tabular-nums">{score}</span>
                  <span className="text-2xl sm:text-3xl font-bold text-slate-400 font-mono">/ {totalQuestions}</span>
                </div>
                <p className="text-base font-bold text-cyan-300 font-mono">
                  {scorePercent}% Accuracy
                </p>
              </div>

              {/* Tier Badge */}
              <div className={`p-4 rounded-xl border max-w-lg mx-auto ${getScoreBadge().color}`}>
                <h4 className="font-bold text-base">{getScoreBadge().title}</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{getScoreBadge().desc}</p>
              </div>

              {/* Retake CTA */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md shadow-cyan-950"
                >
                  <RotateCcw className="w-4 h-4 text-slate-950" />
                  Retake Quiz
                </button>
              </div>
            </div>

            {/* Detailed Question Review List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Full Answer Review & Explanations</h3>
                <span className="text-xs text-slate-400">Review all {totalQuestions} scenarios</span>
              </div>

              <div className="space-y-4">
                {QUIZ_QUESTIONS.map((q, idx) => {
                  const userAnswer = selectedAnswers[idx];
                  const isCorrect = userAnswer === q.correctAnswer;
                  return (
                    <div
                      key={q.id}
                      className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                        isCorrect
                          ? 'bg-[#081226] border-emerald-500/30'
                          : 'bg-[#150e18] border-red-500/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-slate-400">Q{idx + 1}</span>
                          <span className="text-xs font-medium text-cyan-400">· {q.category}</span>
                        </div>
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30' : 'bg-red-950 text-red-300 border border-red-500/30'}`}>
                          {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          {isCorrect ? 'Correct' : 'Missed'}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base font-semibold text-white mb-3">
                        {q.question}
                      </p>

                      <div className="space-y-2 mb-3 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-start gap-2">
                          <span className="font-bold text-slate-400 shrink-0">Your Answer:</span>
                          <span className={isCorrect ? 'text-emerald-300' : 'text-red-300'}>
                            {userAnswer !== undefined ? q.options[userAnswer] : 'No answer selected'}
                          </span>
                        </div>

                        {!isCorrect && (
                          <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 flex items-start gap-2">
                            <span className="font-bold text-emerald-400 shrink-0">Correct Answer:</span>
                            <span>{q.options[q.correctAnswer]}</span>
                          </div>
                        )}
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                        <strong className="text-cyan-300">Why this matters: </strong>
                        {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom restart button */}
              <div className="text-center pt-4">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm inline-flex items-center gap-2 cursor-pointer transition-colors shadow-md shadow-cyan-950"
                >
                  <RotateCcw className="w-4 h-4 text-slate-950" />
                  Restart Quiz
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
