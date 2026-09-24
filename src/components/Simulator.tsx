import React, { useState, useEffect } from 'react';
import { UserProgress, ExamResultRecord } from '../types';
import { QUESTIONS_DATABASE } from '../data/questionsData';
import { SUBJECTS_LIST, EDITAL_INFO } from '../data/editalData';
import { saveExamResult } from '../utils/storage';
import confetti from 'canvas-confetti';
import { 
  Timer, 
  Award, 
  AlertTriangle, 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw
} from 'lucide-react';

interface SimulatorProps {
  userProgress: UserProgress;
  onProgressUpdate: (updated: UserProgress) => void;
}

export const Simulator: React.FC<SimulatorProps> = ({ userProgress, onProgressUpdate }) => {
  const [isExamActive, setIsExamActive] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  
  const [examQuestions, setExamQuestions] = useState<typeof QUESTIONS_DATABASE>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>>({});
  
  const [secondsRemaining, setSecondsRemaining] = useState<number>(4 * 3600);
  const [lastExamResult, setLastExamResult] = useState<ExamResultRecord | null>(null);

  const startNewExam = () => {
    const selected: typeof QUESTIONS_DATABASE = [];
    
    SUBJECTS_LIST.filter(s => s.category !== 'Discursiva').forEach(subj => {
      const subjectQuestions = QUESTIONS_DATABASE.filter(q => q.subjectId === subj.id);
      const picked = subjectQuestions.slice(0, Math.min(subjectQuestions.length, subj.questionCount));
      selected.push(...picked);
    });

    setExamQuestions(selected);
    setAnswers({});
    setCurrentIdx(0);
    setSecondsRemaining(4 * 3600);
    setIsFinished(false);
    setIsExamActive(true);
  };

  useEffect(() => {
    if (!isExamActive || isFinished) return;
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isExamActive, isFinished]);

  const handleSelectOption = (letter: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (!examQuestions[currentIdx]) return;
    const qId = examQuestions[currentIdx].id;
    setAnswers((prev) => ({ ...prev, [qId]: letter }));
  };

  const finishExam = () => {
    setIsExamActive(false);
    setIsFinished(true);

    let totalScore = 0;
    let zeroInAny = false;
    const subjectBreakdown: Record<string, { total: number; correct: number; points: number }> = {};

    SUBJECTS_LIST.filter(s => s.category !== 'Discursiva').forEach(subj => {
      const subjQuestions = examQuestions.filter(q => q.subjectId === subj.id);
      let correct = 0;
      subjQuestions.forEach(q => {
        if (answers[q.id] === q.correctLetter) {
          correct++;
        }
      });
      const points = correct * subj.weightPerQuestion;
      totalScore += points;

      if (correct === 0 && subjQuestions.length > 0) {
        zeroInAny = true;
      }

      subjectBreakdown[subj.id] = {
        total: subjQuestions.length,
        correct,
        points: Math.round(points * 100) / 100
      };
    });

    totalScore = Math.round(totalScore * 100) / 100;
    const passed = totalScore >= EDITAL_INFO.regraAprovacao.minimoObjetivaPontos && !zeroInAny;

    const resultRecord: ExamResultRecord = {
      id: `sim-${Date.now()}`,
      date: new Date().toLocaleDateString('pt-BR'),
      totalScore,
      percentage: Math.round((totalScore / 10.0) * 100),
      passed,
      zeroInAnySubject: zeroInAny,
      subjectBreakdown: subjectBreakdown as any,
      answers,
      timeSpentSeconds: 4 * 3600 - secondsRemaining
    };

    setLastExamResult(resultRecord);
    const updated = saveExamResult(resultRecord);
    onProgressUpdate(updated);

    if (passed) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const formatTimer = (totalSecs: number) => {
    const hours = Math.floor(totalSecs / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = totalSecs % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Start Screen
  if (!isExamActive && !isFinished) {
    return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
        <div className="glass-panel p-5 sm:p-8 rounded-3xl border border-amber-500/30 text-center space-y-6 bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/20">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/10">
            <Timer className="w-7 h-7 sm:w-8 sm:h-8 animate-pulse" />
          </div>

          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
              SIMULADO BANCA AVALIA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
              Simulado Oficial DETRAN-SP 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              60 questões distribuídas conforme a tabela oficial do edital.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-2xl mx-auto bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Duração</span>
              <strong className="text-sm text-white font-bold font-outfit">4 horas</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Questões</span>
              <strong className="text-sm text-amber-400 font-bold font-outfit">60 questões</strong>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Nota Corte</span>
              <strong className="text-sm text-emerald-400 font-bold font-outfit">6,0 pts</strong>
            </div>
          </div>

          <button
            onClick={startNewExam}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
          >
            Iniciar Simulado Agora
          </button>
        </div>
      </div>
    );
  }

  // Finished Screen
  if (isFinished && lastExamResult) {
    return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
        <div className={`glass-panel p-6 sm:p-8 rounded-3xl border text-center space-y-6 ${
          lastExamResult.passed 
            ? 'border-emerald-500/40 bg-slate-900/90 shadow-2xl shadow-emerald-500/10' 
            : 'border-rose-500/40 bg-slate-900/90 shadow-2xl shadow-rose-500/10'
        }`}>
          
          <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center mx-auto shadow-xl ${
            lastExamResult.passed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
          }`}>
            {lastExamResult.passed ? <Award className="w-8 h-8 sm:w-10 sm:h-10" /> : <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10" />}
          </div>

          <div className="space-y-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              lastExamResult.passed ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
            }`}>
              {lastExamResult.passed ? 'APROVADO NA PROVA OBJETIVA! 🎉' : 'NÃO ALCANÇOU A NOTA MÍNIMA DE CORTE'}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit mt-2">
              Nota Final: <span className={lastExamResult.passed ? 'text-emerald-400' : 'text-rose-400'}>{lastExamResult.totalScore.toFixed(2)}</span> / 10,0
            </h2>
          </div>

          {/* Subject breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-left max-w-2xl mx-auto bg-slate-950 p-3.5 sm:p-4 rounded-2xl border border-slate-800 text-xs">
            {Object.entries(lastExamResult.subjectBreakdown).map(([subjId, data]) => {
              const subjInfo = SUBJECTS_LIST.find(s => s.id === subjId);
              return (
                <div key={subjId} className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-slate-200 block text-xs">{subjInfo?.shortTitle}</span>
                    <span className="text-[10px] text-slate-400">{data.correct} de {data.total} corretas</span>
                  </div>
                  <span className={`font-bold text-xs sm:text-sm ${data.correct === 0 ? 'text-rose-400' : 'text-amber-400'}`}>
                    {data.points.toFixed(2)} pts
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={startNewExam}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Refazer Simulado
            </button>
          </div>

        </div>
      </div>
    );
  }

  // Active Exam Interface
  const currentQ = examQuestions[currentIdx];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-4 sm:space-y-6 animate-fadeIn">
      
      {/* Sticky Header */}
      <div className="glass-panel p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-2 sticky top-16 sm:top-20 z-40 bg-slate-950/95 backdrop-blur-md">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-amber-400">
            <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
            <span>{formatTimer(secondsRemaining)}</span>
          </div>
          <span className="text-xs text-slate-300 font-medium">
            Questão <strong className="text-white">{currentIdx + 1}</strong>/{examQuestions.length}
          </span>
        </div>

        <button
          onClick={finishExam}
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 text-[11px] sm:text-xs font-bold transition-colors"
        >
          Entregar Gabarito ({answeredCount}/{examQuestions.length})
        </button>
      </div>

      {/* Main Question View */}
      {currentQ && (
        <div className="glass-panel p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-4 sm:space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {SUBJECTS_LIST.find(s => s.id === currentQ.subjectId)?.title}
            </span>
            <span className="text-[11px] text-slate-400">{currentQ.topic}</span>
          </div>

          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            {currentQ.statement}
          </p>

          <div className="space-y-2.5 sm:space-y-3">
            {currentQ.options.map((option) => {
              const isSelected = answers[currentQ.id] === option.letter;
              return (
                <button
                  key={option.letter}
                  onClick={() => handleSelectOption(option.letter)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'border-amber-500 bg-amber-500/10 text-white font-medium shadow-md shadow-amber-500/10'
                      : 'border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <span className={`flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold shrink-0 border ${
                    isSelected ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {option.letter}
                  </span>
                  <span className="text-xs sm:text-base leading-snug pt-0.5">
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Navigation Prev/Next */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800">
            <button
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              className="px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-xs font-bold text-slate-300 border border-slate-800 flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Anterior
            </button>

            <button
              disabled={currentIdx === examQuestions.length - 1}
              onClick={() => setCurrentIdx(prev => Math.min(examQuestions.length - 1, prev + 1))}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-1"
            >
              Próxima <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Navigation Grid */}
      <div className="glass-panel p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-800">
        <span className="text-xs text-slate-400 font-bold block mb-2">Cartão Resposta:</span>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {examQuestions.map((q, idx) => {
            const isAnswered = answers[q.id] !== undefined;
            const isCurrent = idx === currentIdx;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-bold transition-all border ${
                  isCurrent
                    ? 'ring-2 ring-amber-400 bg-amber-500 text-slate-950 border-amber-300'
                    : isAnswered
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
