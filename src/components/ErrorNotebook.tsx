import React, { useState } from 'react';
import { UserProgress, SubjectId, DailyAnswerRecord } from '../types';
import { QUESTIONS_DATABASE } from '../data/questionsData';
import { SUBJECTS_LIST } from '../data/editalData';
import { QuestionCard } from './QuestionCard';
import { 
  BookMarked, 
  AlertTriangle, 
  BookmarkCheck, 
  CheckCircle2, 
  Calendar, 
  Search, 
  RotateCcw, 
  BarChart3, 
  Sparkles,
  ChevronRight,
  Clock,
  Filter,
  Trash2
} from 'lucide-react';
import { clearQuestionAnswer, resetAllAnsweredQuestions } from '../utils/storage';

interface ErrorNotebookProps {
  userProgress: UserProgress;
  onProgressUpdate: (updated: UserProgress) => void;
}

export const ErrorNotebook: React.FC<ErrorNotebookProps> = ({ userProgress, onProgressUpdate }) => {
  const [activeSubTab, setActiveSubTab] = useState<'acertos' | 'erros' | 'bookmarks' | 'historico'>('erros');
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDateFilter, setSelectedDateFilter] = useState<string>('all');

  const todayStr = new Date().toISOString().split('T')[0];

  // Map answered questions to questions database
  const answeredQuestionIds = Object.keys(userProgress.answeredQuestions);
  
  // Categorize questions
  const correctQuestions = QUESTIONS_DATABASE.filter(q => {
    const userAns = userProgress.answeredQuestions[q.id];
    return userAns !== undefined && userAns === q.correctLetter;
  });

  const errorQuestions = QUESTIONS_DATABASE.filter(q => {
    return userProgress.errorNotebookIds.includes(q.id);
  });

  const bookmarkedQuestions = QUESTIONS_DATABASE.filter(q => {
    return userProgress.bookmarkedQuestionIds.includes(q.id);
  });

  // Daily History records
  const dailyRecords: DailyAnswerRecord[] = userProgress.dailyHistory || [];
  
  // Today's stats
  const todayRecords = dailyRecords.filter(r => r.date === todayStr);
  const todayCorrectCount = todayRecords.filter(r => r.isCorrect).length;
  const todayTotalCount = todayRecords.length;
  const todayAccuracy = todayTotalCount > 0 ? Math.round((todayCorrectCount / todayTotalCount) * 100) : 0;

  // Filter main dataset based on current tab
  const getQuestionsForTab = () => {
    if (activeSubTab === 'acertos') return correctQuestions;
    if (activeSubTab === 'erros') return errorQuestions;
    if (activeSubTab === 'bookmarks') return bookmarkedQuestions;
    return [];
  };

  const currentTabQuestions = getQuestionsForTab();

  // Apply subject & search filter
  const filteredQuestions = currentTabQuestions.filter(q => {
    if (selectedSubject !== 'all' && q.subjectId !== selectedSubject) return false;

    if (searchQuery.trim() !== '') {
      const qry = searchQuery.toLowerCase();
      const inStatement = q.statement.toLowerCase().includes(qry);
      const inTopic = q.topic.toLowerCase().includes(qry);
      const inLaw = q.lawReference?.toLowerCase().includes(qry);
      if (!inStatement && !inTopic && !inLaw) return false;
    }

    return true;
  });

  // Group daily history by date for 'historico' tab
  const historyByDate: Record<string, DailyAnswerRecord[]> = {};
  dailyRecords.forEach(rec => {
    if (!historyByDate[rec.date]) {
      historyByDate[rec.date] = [];
    }
    historyByDate[rec.date].push(rec);
  });

  const uniqueDates = Object.keys(historyByDate).sort((a, b) => b.localeCompare(a));

  const handleResetAnswers = () => {
    if (window.confirm('Tem certeza que deseja reiniciar as respostas do dia? As perguntas poderão ser respondidas novamente.')) {
      const updated = resetAllAnsweredQuestions();
      onProgressUpdate(updated);
    }
  };

  const handleClearSingleQuestion = (questionId: string) => {
    const updated = clearQuestionAnswer(questionId);
    onProgressUpdate(updated);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Page Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5" /> Painel de Desempenho Diário
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-outfit tracking-tight">
            Consultas de <span className="text-amber-400">Acertos & Erros</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Acompanhe a sua evolução diária, consulte todas as questões respondidas, revise seus acertos e zere os seus erros com explicações detalhadas.
          </p>
        </div>

        {/* Quick action buttons */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={handleResetAnswers}
            title="Permite responder novamente as questões salvando histórico"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 text-xs font-bold transition-all"
          >
            <RotateCcw className="w-4 h-4 text-amber-400" />
            <span>Resetar Respostas Diárias</span>
          </button>
        </div>
      </div>

      {/* Overview Stats Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        {/* Card 1: Total Respondidas */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 bg-slate-900/90 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Total Respondidas</span>
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-white font-outfit">
              {answeredQuestionIds.length}
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              de {QUESTIONS_DATABASE.length} questões no banco
            </p>
          </div>
        </div>

        {/* Card 2: Acertos */}
        <div className="glass-panel p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-400">Total de Acertos</span>
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-outfit">
              {correctQuestions.length}
            </div>
            <p className="text-[11px] text-emerald-400/80 mt-0.5 font-medium">
              {answeredQuestionIds.length > 0 ? Math.round((correctQuestions.length / answeredQuestionIds.length) * 100) : 0}% de precisão global
            </p>
          </div>
        </div>

        {/* Card 3: Erros */}
        <div className="glass-panel p-5 rounded-2xl border border-rose-500/30 bg-rose-950/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-400">Caderno de Erros</span>
            <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
              <AlertTriangle className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-rose-300 font-outfit">
              {errorQuestions.length}
            </div>
            <p className="text-[11px] text-rose-400/80 mt-0.5 font-medium">
              {errorQuestions.length === 0 ? 'Parabéns! Nenhum erro pendente' : 'Pontos a revisar e refazer'}
            </p>
          </div>
        </div>

        {/* Card 4: Hoje */}
        <div className="glass-panel p-5 rounded-2xl border border-amber-500/30 bg-amber-950/10 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-400">Atividade de Hoje</span>
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl sm:text-3xl font-black text-amber-300 font-outfit">
              {todayTotalCount} <span className="text-xs text-amber-400 font-normal">questões</span>
            </div>
            <p className="text-[11px] text-amber-400/80 mt-0.5 font-medium">
              {todayCorrectCount} acertos hoje ({todayAccuracy}%)
            </p>
          </div>
        </div>

      </div>

      {/* Main Tab Navigation */}
      <div className="glass-panel p-2 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          
          {/* Tab: Erros */}
          <button
            onClick={() => setActiveSubTab('erros')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'erros'
                ? 'bg-rose-500 text-slate-950 shadow-lg shadow-rose-500/25 font-black'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Meus Erros ({errorQuestions.length})</span>
          </button>

          {/* Tab: Acertos */}
          <button
            onClick={() => setActiveSubTab('acertos')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'acertos'
                ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 font-black'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Meus Acertos ({correctQuestions.length})</span>
          </button>

          {/* Tab: Favoritas */}
          <button
            onClick={() => setActiveSubTab('bookmarks')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'bookmarks'
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 font-black'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <BookmarkCheck className="w-4 h-4" />
            <span>Favoritas ({bookmarkedQuestions.length})</span>
          </button>

          {/* Tab: Histórico Diário */}
          <button
            onClick={() => setActiveSubTab('historico')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'historico'
                ? 'bg-blue-500 text-slate-950 shadow-lg shadow-blue-500/25 font-black'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Histórico Diário ({dailyRecords.length})</span>
          </button>

        </div>

        <div className="text-xs text-slate-400 font-medium px-3 py-1.5 hidden sm:block">
          Modo de consulta interativo
        </div>
      </div>

      {/* Sub-Filters for Questions View (Acertos, Erros, Bookmarks) */}
      {activeSubTab !== 'historico' && (
        <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-4">
          
          {/* Subject Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <button
              onClick={() => setSelectedSubject('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedSubject === 'all'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Todas as Matérias
            </button>
            {SUBJECTS_LIST.map((subj) => {
              const isSelected = selectedSubject === subj.id;
              const countInSubj = currentTabQuestions.filter(q => q.subjectId === subj.id).length;
              return (
                <button
                  key={subj.id}
                  onClick={() => setSelectedSubject(subj.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {subj.shortTitle} ({countInSubj})
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filtrar por enunciado, tema ou artigo de lei..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>

        </div>
      )}

      {/* Main Stream Area */}
      {activeSubTab === 'historico' ? (
        
        /* TIMELINE HISTÓRICO DIÁRIO VIEW */
        <div className="space-y-6">
          {uniqueDates.length === 0 ? (
            <div className="glass-panel p-12 rounded-3xl text-center border border-slate-800 space-y-3">
              <Calendar className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-200 font-outfit">Nenhum histórico diário registrado ainda</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Conforme você responde às questões nos módulos ou simulados, o sistema guardará a data, horário e resultado de cada resposta aqui!
              </p>
            </div>
          ) : (
            uniqueDates.map(dateStr => {
              const records = historyByDate[dateStr];
              const dateCorrect = records.filter(r => r.isCorrect).length;
              const dateTotal = records.length;
              const datePct = Math.round((dateCorrect / dateTotal) * 100);

              // Formatted date string
              const formattedDate = new Date(dateStr + 'T00:00:00').toLocaleDateString('pt-BR', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              return (
                <div key={dateStr} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white capitalize font-outfit">{formattedDate}</h4>
                        <span className="text-xs text-slate-400">{dateTotal} questões respondidas neste dia</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                        {dateCorrect} acertos
                      </span>
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-rose-500/15 text-rose-300 border border-rose-500/30">
                        {dateTotal - dateCorrect} erros
                      </span>
                      <span className="px-3 py-1 rounded-lg text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {datePct}% rendimento
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {records.map(rec => {
                      const q = QUESTIONS_DATABASE.find(item => item.id === rec.questionId);
                      if (!q) return null;
                      const timeStr = new Date(rec.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
                      
                      return (
                        <div 
                          key={rec.id}
                          className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                            rec.isCorrect 
                              ? 'bg-emerald-950/20 border-emerald-500/30' 
                              : 'bg-rose-950/20 border-rose-500/30'
                          }`}
                        >
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase ${
                                rec.isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-slate-950'
                              }`}>
                                {rec.isCorrect ? 'Acerto 🟢' : 'Erro 🔴'}
                              </span>
                              <span className="text-xs font-bold text-slate-300">{q.topic}</span>
                              <span className="text-[11px] text-slate-500">• {timeStr}</span>
                            </div>
                            <p className="text-xs text-slate-200 line-clamp-2">{q.statement}</p>
                            <div className="text-[11px] text-slate-400 flex items-center gap-2 pt-1">
                              <span>Sua opção: <strong className={rec.isCorrect ? 'text-emerald-400' : 'text-rose-400'}>{rec.selectedOption}</strong></span>
                              <span>•</span>
                              <span>Opção correta: <strong className="text-emerald-400">{rec.correctOption}</strong></span>
                              {q.lawReference && (
                                <>
                                  <span>•</span>
                                  <span className="text-amber-400/90">{q.lawReference}</span>
                                </>
                              )}
                            </div>
                          </div>

                          <button
                            onClick={() => handleClearSingleQuestion(q.id)}
                            title="Remover resposta para responder novamente"
                            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all shrink-0 self-end sm:self-center"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      );
                    })}
                  </div>

                </div>
              );
            })
          )}
        </div>

      ) : (

        /* QUESTIONS LIST VIEW (Acertos, Erros, Bookmarks) */
        <div className="space-y-6">
          {filteredQuestions.length === 0 ? (
            <div className="glass-panel p-12 rounded-3xl text-center border border-slate-800 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-slate-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-200 font-outfit">
                {activeSubTab === 'erros' && 'Nenhum erro encontrado!'}
                {activeSubTab === 'acertos' && 'Nenhum acerto registrado com os filtros selecionados!'}
                {activeSubTab === 'bookmarks' && 'Nenhuma questão favoritada ainda!'}
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                {activeSubTab === 'erros' 
                  ? 'Você não tem erros acumulados nesta matéria. Continue praticando nos módulos!' 
                  : 'Responda a mais questões no menu de Módulos para preencher seu banco de consultas.'}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredQuestions.map((q) => (
                <div key={q.id} className="relative group">
                  <QuestionCard
                    question={q}
                    userProgress={userProgress}
                    onProgressUpdate={onProgressUpdate}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

      )}

    </div>
  );
};
