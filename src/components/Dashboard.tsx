import React from 'react';
import { UserProgress } from '../types';
import { TabType } from './Navbar';
import { EDITAL_INFO, SUBJECTS_LIST } from '../data/editalData';
import { QUESTIONS_DATABASE } from '../data/questionsData';
import { 
  ShieldAlert, 
  Target, 
  TrendingUp, 
  Award, 
  BookOpenCheck, 
  Timer, 
  Layers, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Flame,
  AlertTriangle,
  Scale,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';

interface DashboardProps {
  userProgress: UserProgress;
  setActiveTab: (tab: TabType) => void;
  setSelectedSubjectFilter?: (subjectId: string | null) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ userProgress, setActiveTab, setSelectedSubjectFilter }) => {
  const totalQuestionsInDb = QUESTIONS_DATABASE.length;
  const answeredCount = Object.keys(userProgress.answeredQuestions).length;
  
  let correctCount = 0;
  Object.entries(userProgress.answeredQuestions).forEach(([qId, letter]) => {
    const q = QUESTIONS_DATABASE.find(item => item.id === qId);
    if (q && q.correctLetter === letter) {
      correctCount++;
    }
  });

  const accuracyRate = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  // Calculate Level & XP
  const xpPoints = correctCount * 100 + answeredCount * 25 + userProgress.streakDays * 50;
  const currentLevel = Math.floor(xpPoints / 500) + 1;
  const xpInCurrentLevel = xpPoints % 500;
  const xpProgressPct = Math.min(100, Math.round((xpInCurrentLevel / 500) * 100));

  // Countdown to Exam (26/10/2026)
  const examDate = new Date(2026, 9, 26);
  const today = new Date();
  const diffTime = examDate.getTime() - today.getTime();
  const daysRemaining = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  const motivationalPhrases = [
    "Cada questão resolvida hoje é um passo decisivo rumo à sua posse no DETRAN-SP!",
    "A disciplina de hoje constrói a estabilidade e o salário de R$ 5.702,18 de amanhã!",
    "Consistência vence qualquer dificuldade. Mantenha a sequência de estudos!",
    "Domine o CTB e garanta os 3.4 pontos de maior peso na sua prova objetiva!",
    "Foco na meta! O Instituto Avalia exige precisão, e você está se preparando no mais alto nível."
  ];

  const dailyQuote = motivationalPhrases[answeredCount % motivationalPhrases.length];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Motivational Daily Banner */}
      <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-950 flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>
        <div className="space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5" /> Motivação do Concurseiro DETRAN-SP
          </span>
          <p className="text-base sm:text-lg font-bold text-white font-outfit leading-snug">
            "{dailyQuote}"
          </p>
        </div>
      </div>

      {/* Hero Banner: DETRAN-SP Exam Header */}
      <div className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-8 border border-amber-500/40 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/50">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                EDITAL DETRAN-SP 2026
              </span>
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {EDITAL_INFO.banca}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-outfit">
              Concurso <span className="text-amber-400">DETRAN-SP 2026</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Preparação didática e focada para o emprego público de <strong className="text-white font-bold">Agente Estadual de Trânsito</strong>. Remuneração inicial de <span className="text-emerald-400 font-extrabold">{EDITAL_INFO.remuneracao}</span>.
            </p>

            {/* Level & XP Progress Bar */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
                <span className="text-amber-300 flex items-center gap-1.5 font-outfit">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  Nível {currentLevel} • Especialista em Trânsito
                </span>
                <span className="text-slate-400">{xpPoints} XP Total ({xpInCurrentLevel}/500 XP)</span>
              </div>
              <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
                <div 
                  className="bg-gradient-to-r from-amber-500 to-yellow-300 h-full rounded-full transition-all duration-500"
                  style={{ width: `${xpProgressPct}%` }}
                />
              </div>
            </div>

          </div>

          {/* Exam Countdown Box */}
          <div className="w-full lg:w-auto shrink-0 bg-slate-950/90 p-6 rounded-3xl border border-amber-500/30 flex flex-col items-center justify-center text-center shadow-2xl">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-black mb-1 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" /> Rumo à Aprovacão
            </span>
            <div className="text-5xl font-black text-amber-400 font-outfit my-2">
              {daysRemaining} <span className="text-base font-bold text-slate-300">dias</span>
            </div>
            <p className="text-xs text-slate-300 font-medium">Data da Prova: 11 de Novembro de 2026</p>
          </div>

        </div>
      </div>

      {/* Main Metrics Cards with Enriched Text */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <BookOpenCheck className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Questões Respondidas</p>
            <h3 className="text-3xl font-black text-white font-outfit">{answeredCount} <span className="text-sm font-normal text-slate-500">/ {totalQuestionsInDb}</span></h3>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <TrendingUp className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Taxa de Acertos</p>
            <h3 className="text-3xl font-black text-emerald-400 font-outfit">{accuracyRate}%</h3>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Flame className="w-7 h-7 text-amber-400 animate-bounce" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Ofensiva de Estudos</p>
            <h3 className="text-3xl font-black text-white font-outfit">{userProgress.streakDays} <span className="text-sm font-semibold text-slate-400">dias</span></h3>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
            <AlertTriangle className="w-7 h-7 text-rose-400" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Caderno de Erros</p>
            <h3 className="text-3xl font-black text-rose-400 font-outfit">{userProgress.errorNotebookIds.length} <span className="text-sm font-normal text-slate-500">questões</span></h3>
          </div>
        </div>

      </div>

      {/* Edital Score Structure & Module Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Matérias e Pesos do Edital */}
        <div className="lg:col-span-2 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-white font-outfit flex items-center gap-2.5">
                <Scale className="w-6 h-6 text-amber-400" />
                Matérias do Edital & Pesos de Prova
              </h3>
              <p className="text-sm text-slate-400 font-medium">Estrutura oficial da Tabela 10.1 do Edital DETRAN-SP 2026</p>
            </div>
            <button 
              onClick={() => setActiveTab('modules')}
              className="text-xs sm:text-sm text-amber-400 hover:underline flex items-center gap-1 font-bold"
            >
              <span>Estudar Questões</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {SUBJECTS_LIST.map((subject) => {
              const qSubjectInDb = QUESTIONS_DATABASE.filter(q => q.subjectId === subject.id);
              const qAnsweredInSubject = qSubjectInDb.filter(q => userProgress.answeredQuestions[q.id] !== undefined);
              const progressPct = qSubjectInDb.length > 0 ? Math.round((qAnsweredInSubject.length / qSubjectInDb.length) * 100) : 0;

              return (
                <div 
                  key={subject.id}
                  onClick={() => {
                    if (setSelectedSubjectFilter) setSelectedSubjectFilter(subject.id);
                    setActiveTab('modules');
                  }}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 cursor-pointer transition-all hover:bg-slate-800/80 group space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shrink-0 shadow-sm shadow-amber-400/50" />
                      <h4 className="font-extrabold text-base text-slate-100 group-hover:text-amber-300 transition-colors font-outfit">
                        {subject.title}
                      </h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-sm font-black text-amber-400">{subject.totalPoints} pts</span>
                      <span className="text-xs text-slate-400 ml-2">({subject.questionCount} q. × {subject.weightPerQuestion})</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
                    <div 
                      className="bg-amber-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 font-medium pt-0.5">
                    <span>{subject.description}</span>
                    <span className="font-extrabold text-amber-300">{progressPct}% praticado</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right 1 Col: Quick Actions & Passing Rules */}
        <div className="space-y-6">
          
          {/* Passing Criteria Card */}
          <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-amber-500/40 bg-slate-900/90 space-y-5">
            <h3 className="text-lg font-black text-white font-outfit flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Regras Oficiais de Aprovação
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Mínimo Prova Objetiva:</strong> 6,0 pontos (de 10,0 possíveis).</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>Proibição de Zerar:</strong> O candidato NÃO pode tirar nota 0 em NENHUMA disciplina.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Mínimo Prova de Redação:</strong> 6,0 pontos (de 10,0 possíveis).</span>
              </div>
            </div>

            <button
              onClick={() => setActiveTab('simulator')}
              className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Timer className="w-5 h-5" />
              <span>Iniciar Simulado Completo Avalia</span>
            </button>
          </div>

          {/* Quick Study Modes */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-black">Atalhos Principais</h4>
            
            <button
              onClick={() => setActiveTab('flashcards')}
              className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-left text-sm font-bold text-slate-200 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-blue-400" />
                <span>Flashcards de Memorização</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </button>

            <button
              onClick={() => setActiveTab('ctb_guide')}
              className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-left text-sm font-bold text-slate-200 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-emerald-400" />
                <span>Resumo Esquematizado CTB 2026</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </button>

            <button
              onClick={() => setActiveTab('errors')}
              className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-left text-sm font-bold text-slate-200 flex items-center justify-between group transition-colors"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-400" />
                <span>Caderno de Erros</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
