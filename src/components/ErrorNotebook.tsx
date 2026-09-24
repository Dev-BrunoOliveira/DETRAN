import React, { useState } from 'react';
import { UserProgress } from '../types';
import { QUESTIONS_DATABASE } from '../data/questionsData';
import { QuestionCard } from './QuestionCard';
import { BookMarked, AlertTriangle, BookmarkCheck, CheckCircle2 } from 'lucide-react';

interface ErrorNotebookProps {
  userProgress: UserProgress;
  onProgressUpdate: (updated: UserProgress) => void;
}

export const ErrorNotebook: React.FC<ErrorNotebookProps> = ({ userProgress, onProgressUpdate }) => {
  const [activeTab, setActiveTab] = useState<'errors' | 'bookmarks'>('errors');

  const errorQuestions = QUESTIONS_DATABASE.filter(q => userProgress.errorNotebookIds.includes(q.id));
  const bookmarkedQuestions = QUESTIONS_DATABASE.filter(q => userProgress.bookmarkedQuestionIds.includes(q.id));

  const displayQuestions = activeTab === 'errors' ? errorQuestions : bookmarkedQuestions;

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white font-outfit flex items-center gap-2">
            <BookMarked className="w-6 h-6 text-amber-400" />
            Caderno de Erros e Questões Salvas
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Espaço de estudo direcionado para corrigir falhas e revisar pontos sensíveis até zerar suas dúvidas.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('errors')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'errors'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Erros ({errorQuestions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'bookmarks'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Favoritas ({bookmarkedQuestions.length})</span>
          </button>
        </div>
      </div>

      {/* Stream */}
      {displayQuestions.length === 0 ? (
        <div className="glass-panel p-12 rounded-2xl text-center border border-slate-800 space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
          <h3 className="text-lg font-bold text-white font-outfit">
            {activeTab === 'errors' ? 'Nenhuma questão no Caderno de Erros!' : 'Nenhuma questão favoritada ainda'}
          </h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            {activeTab === 'errors' 
              ? 'Você está mandando super bem! Todas as questões que você errar durante os treinos virão para cá automaticamente.'
              : 'Clique no ícone de bandeira/salvar nas questões durante seus estudos para montar sua lista personalizada.'}
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {displayQuestions.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              userProgress={userProgress}
              onProgressUpdate={onProgressUpdate}
            />
          ))}
        </div>
      )}

    </div>
  );
};
