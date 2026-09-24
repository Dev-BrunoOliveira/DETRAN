import React, { useState } from 'react';
import { Question, UserProgress } from '../types';
import { 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  BookmarkCheck, 
  ChevronDown, 
  ChevronUp, 
  Scale, 
  Sparkles 
} from 'lucide-react';
import { recordQuestionAnswer, toggleBookmarkQuestion } from '../utils/storage';
import { SUBJECTS_LIST } from '../data/editalData';

interface QuestionCardProps {
  question: Question;
  userProgress: UserProgress;
  onProgressUpdate: (updated: UserProgress) => void;
  showSubjectBadge?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  userProgress,
  onProgressUpdate,
  showSubjectBadge = true,
}) => {
  const previousAnswer = userProgress.answeredQuestions[question.id];
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | 'E' | null>(previousAnswer || null);
  const [showDetailedExplanations, setShowDetailedExplanations] = useState<boolean>(Boolean(previousAnswer));
  
  const isBookmarked = userProgress.bookmarkedQuestionIds.includes(question.id);
  const subjectInfo = SUBJECTS_LIST.find((s) => s.id === question.subjectId);

  const handleSelectOption = (letter: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (selectedOption !== null && previousAnswer !== undefined) return;
    setSelectedOption(letter);
    const isCorrect = letter === question.correctLetter;
    const updated = recordQuestionAnswer(question.id, letter, isCorrect);
    setShowDetailedExplanations(true);
    onProgressUpdate(updated);
  };

  const handleToggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = toggleBookmarkQuestion(question.id);
    onProgressUpdate(updated);
  };

  const hasAnswered = selectedOption !== null;
  const isCorrect = selectedOption === question.correctLetter;

  return (
    <div className={`glass-panel rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transition-all duration-300 border ${
      hasAnswered 
        ? isCorrect 
          ? 'border-emerald-500/50 bg-slate-900/95 shadow-xl shadow-emerald-500/10' 
          : 'border-rose-500/50 bg-slate-900/95 shadow-xl shadow-rose-500/10'
        : 'border-slate-800 hover:border-slate-700 bg-slate-900/80'
    }`}>
      
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-6 border-b border-slate-800/80 pb-3 sm:pb-4">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
          {showSubjectBadge && subjectInfo && (
            <span className="px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-black bg-amber-500/15 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
              {subjectInfo.shortTitle}
            </span>
          )}
          <span className="px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg text-[11px] sm:text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700">
            {question.topic}
          </span>
          <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-black ${
            question.difficulty === 'Fácil' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
            question.difficulty === 'Médio' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
            'bg-rose-500/20 text-rose-300 border border-rose-500/30'
          }`}>
            {question.difficulty}
          </span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleBookmark}
            title={isBookmarked ? 'Remover dos favoritos' : 'Favoritar questão'}
            className={`px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 transition-all ${
              isBookmarked 
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                : 'bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700'
            }`}
          >
            {isBookmarked ? <BookmarkCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" /> : <Bookmark className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            <span>{isBookmarked ? 'Salva' : 'Salvar'}</span>
          </button>
        </div>
      </div>

      {/* Statement */}
      <div className="mb-4 sm:mb-8">
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold">
          {question.statement}
        </p>
      </div>

      {/* Options List */}
      <div className="space-y-2.5 sm:space-y-4 mb-4 sm:mb-8">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.letter;
          const isRightLetter = option.letter === question.correctLetter;

          let btnClass = 'border-slate-800/80 bg-slate-950/80 text-slate-100 hover:bg-slate-800/80 hover:border-slate-700';
          let badgeClass = 'bg-slate-800 text-slate-200 border-slate-700';

          if (hasAnswered) {
            if (isRightLetter) {
              btnClass = 'border-emerald-500/80 bg-emerald-950/40 text-emerald-100 font-semibold shadow-md shadow-emerald-500/10';
              badgeClass = 'bg-emerald-500 text-slate-950 font-black border-emerald-400';
            } else if (isSelected && !isRightLetter) {
              btnClass = 'border-rose-500/80 bg-rose-950/40 text-rose-100 font-semibold';
              badgeClass = 'bg-rose-500 text-white font-black border-rose-400';
            } else {
              btnClass = 'border-slate-800/40 bg-slate-950/40 text-slate-400 opacity-50';
              badgeClass = 'bg-slate-800/40 text-slate-500 border-slate-800';
            }
          }

          return (
            <button
              key={option.letter}
              onClick={() => handleSelectOption(option.letter)}
              disabled={hasAnswered}
              className={`w-full text-left p-3.5 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-200 flex items-start gap-3 sm:gap-4 group ${btnClass}`}
            >
              <span className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black shrink-0 transition-colors border ${badgeClass}`}>
                {option.letter}
              </span>
              <span className="flex-1 text-sm sm:text-base md:text-lg leading-snug pt-0.5 font-medium">
                {option.text}
              </span>
              {hasAnswered && isRightLetter && (
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 shrink-0 mt-0.5" />
              )}
              {hasAnswered && isSelected && !isRightLetter && (
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400 shrink-0 mt-0.5" />
              )}
            </button>
          );
        })}
      </div>

      {/* Immediate Result Feedback Banner */}
      {hasAnswered && (
        <div className={`mb-4 sm:mb-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl border flex items-start gap-3 sm:gap-4 animate-fadeIn ${
          isCorrect 
            ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-100' 
            : 'bg-rose-950/60 border-rose-500/40 text-rose-100'
        }`}>
          {isCorrect ? (
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400 shrink-0 mt-0.5" />
          )}
          <div className="flex-1 space-y-1">
            <h4 className="font-extrabold text-sm sm:text-base md:text-lg font-outfit">
              {isCorrect ? 'Resposta Correta! Excelente fixação 🎉' : `Resposta Incorreta. A alternativa correta é a (${question.correctLetter}).`}
            </h4>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-95">
              {question.generalExplanation}
            </p>
          </div>
        </div>
      )}

      {/* Didactic Alternative-by-Alternative Explanation Accordion */}
      {hasAnswered && (
        <div className="mt-4 sm:mt-6 border-t border-slate-800/80 pt-4 sm:pt-5">
          <button
            onClick={() => setShowDetailedExplanations(!showDetailedExplanations)}
            className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-800/60 hover:bg-slate-800/90 border border-slate-700/80 text-xs sm:text-sm font-extrabold text-amber-300 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
              <span className="text-left">Gabarito Comentado Didático (Análise detalhada)</span>
            </div>
            {showDetailedExplanations ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />}
          </button>

          {showDetailedExplanations && (
            <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-950/90 border border-slate-800">
              
              {question.lawReference && (
                <div className="flex items-center gap-2 p-3 rounded-lg sm:rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 mb-3 text-xs sm:text-sm">
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
                  <span className="font-extrabold">Fundamento Legal: {question.lawReference}</span>
                </div>
              )}

              <div className="space-y-2.5 sm:space-y-3">
                {(['A', 'B', 'C', 'D', 'E'] as const).map((letra) => {
                  const isRight = letra === question.correctLetter;
                  const expText = question.explanations[letra];
                  if (!expText) return null;

                  return (
                    <div 
                      key={letra} 
                      className={`p-3.5 sm:p-4 rounded-lg sm:rounded-xl border leading-relaxed ${
                        isRight 
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100' 
                          : 'bg-slate-900/80 border-slate-800 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold mb-1 text-xs sm:text-sm">
                        <span className={`px-1.5 py-0.5 rounded font-black ${
                          isRight ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                        }`}>
                          Opção ({letra})
                        </span>
                        <span className={isRight ? 'text-emerald-400 font-extrabold' : 'text-slate-400 font-semibold'}>
                          {isRight ? '✔ CORRETA' : '✖ INCORRETA'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm md:text-base text-slate-200 pl-0.5 leading-relaxed">
                        {expText}
                      </p>
                    </div>
                  );
                })}
              </div>

            </div>
          )}
        </div>
      )}

    </div>
  );
};
