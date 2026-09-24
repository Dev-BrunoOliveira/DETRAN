import React, { useState } from 'react';
import { UserProgress, SubjectId } from '../types';
import { QUESTIONS_DATABASE } from '../data/questionsData';
import { SUBJECTS_LIST } from '../data/editalData';
import { QuestionCard } from './QuestionCard';
import { Search, Filter, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

interface ModuleStudyProps {
  userProgress: UserProgress;
  onProgressUpdate: (updated: UserProgress) => void;
  initialSubjectFilter?: string | null;
}

export const ModuleStudy: React.FC<ModuleStudyProps> = ({
  userProgress,
  onProgressUpdate,
  initialSubjectFilter = null,
}) => {
  const [selectedSubject, setSelectedSubject] = useState<SubjectId | 'all'>(
    (initialSubjectFilter as SubjectId) || 'all'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'unanswered' | 'wrong'>('all');

  // Filter questions
  const filteredQuestions = QUESTIONS_DATABASE.filter((q) => {
    if (selectedSubject !== 'all' && q.subjectId !== selectedSubject) return false;
    if (difficultyFilter !== 'all' && q.difficulty !== difficultyFilter) return false;
    
    if (statusFilter === 'unanswered' && userProgress.answeredQuestions[q.id] !== undefined) {
      return false;
    }
    if (statusFilter === 'wrong') {
      const userAns = userProgress.answeredQuestions[q.id];
      if (!userAns || userAns === q.correctLetter) return false;
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const inStatement = q.statement.toLowerCase().includes(query);
      const inTopic = q.topic.toLowerCase().includes(query);
      const inLaw = q.lawReference?.toLowerCase().includes(query);
      if (!inStatement && !inTopic && !inLaw) return false;
    }

    return true;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-panel p-6 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-2xl font-bold text-white font-outfit flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-amber-400" />
            Estudo por Módulos & Questões Comentadas
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Explore dezenas de questões organizadas rigorosamente pelas matérias pedidas no Edital DETRAN-SP 2026.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{filteredQuestions.length} questões encontradas</span>
        </div>
      </div>

      {/* Filter bar */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-4">
        
        {/* Subject Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setSelectedSubject('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedSubject === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            Todas as Matérias ({QUESTIONS_DATABASE.length})
          </button>
          {SUBJECTS_LIST.map((subj) => {
            const count = QUESTIONS_DATABASE.filter(q => q.subjectId === subj.id).length;
            const isSelected = selectedSubject === subj.id;
            return (
              <button
                key={subj.id}
                onClick={() => setSelectedSubject(subj.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {subj.shortTitle} ({count})
              </button>
            );
          })}
        </div>

        {/* Search & Sub-filters */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800/60">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por palavra, artigo ou lei..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium shrink-0">Dificuldade:</span>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
            >
              <option value="all">Todas as Dificuldades</option>
              <option value="Fácil">Fácil</option>
              <option value="Médio">Médio</option>
              <option value="Difícil">Difícil</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium shrink-0">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
            >
              <option value="all">Todas as questões</option>
              <option value="unanswered">Não respondidas</option>
              <option value="wrong">Minhas questões erradas</option>
            </select>
          </div>

        </div>

      </div>

      {/* Questions Stream */}
      {filteredQuestions.length === 0 ? (
        <div className="glass-panel p-12 rounded-2xl text-center border border-slate-800 space-y-3">
          <CheckCircle2 className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-slate-300 font-outfit">Nenhuma questão encontrada</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Tente ajustar os filtros de busca ou escolher outra matéria no menu acima.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              userProgress={userProgress}
              onProgressUpdate={onProgressUpdate}
            />
          ))}
        </div>
      )}

    </div>
  );
};
