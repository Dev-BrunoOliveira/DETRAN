import React, { useState } from 'react';
import { FLASHCARDS_DATABASE } from '../data/flashcardsData';
import { SUBJECTS_LIST } from '../data/editalData';
import { Layers, RotateCw, ChevronLeft, ChevronRight, Lightbulb, Scale } from 'lucide-react';

export const Flashcards: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const filteredCards = FLASHCARDS_DATABASE.filter(
    (fc) => selectedSubject === 'all' || fc.subjectId === selectedSubject
  );

  const currentCard = filteredCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-center space-y-2">
        <h2 className="text-2xl font-bold text-white font-outfit flex items-center justify-center gap-2">
          <Layers className="w-6 h-6 text-amber-400" />
          Flashcards Didáticos de Memorização Rápida
        </h2>
        <p className="text-xs text-slate-400">
          Clique no cartão para virar e testar seu nível de retenção de prazos, leis e artigos do CTB.
        </p>

        {/* Subject Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pt-3 pb-1 no-scrollbar">
          <button
            onClick={() => { setSelectedSubject('all'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
              selectedSubject === 'all' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-400 border border-slate-800'
            }`}
          >
            Todos ({FLASHCARDS_DATABASE.length})
          </button>
          {SUBJECTS_LIST.filter(s => s.category !== 'Discursiva').map((subj) => (
            <button
              key={subj.id}
              onClick={() => { setSelectedSubject(subj.id); setCurrentIndex(0); setIsFlipped(false); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedSubject === subj.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-slate-400 border border-slate-800'
              }`}
            >
              {subj.shortTitle}
            </button>
          ))}
        </div>
      </div>

      {/* Card Container */}
      {currentCard ? (
        <div className="space-y-4">
          
          <div className="perspective-1000 w-full min-h-[320px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`relative w-full h-full min-h-[320px] duration-500 transform-style-3d transition-all ${
              isFlipped ? 'rotate-y-180' : ''
            }`}>
              
              {/* FRONT OF CARD */}
              <div className="absolute inset-0 w-full h-full glass-panel p-8 rounded-3xl border border-slate-800 bg-slate-900 flex flex-col justify-between backface-hidden shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20 uppercase tracking-wider">
                    {currentCard.topic}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <RotateCw className="w-3.5 h-3.5" /> Clique para virar
                  </span>
                </div>

                <div className="my-auto py-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-relaxed font-outfit">
                    {currentCard.front}
                  </h3>
                </div>

                <div className="text-center text-xs text-slate-500">
                  Cartão {currentIndex + 1} de {filteredCards.length}
                </div>
              </div>

              {/* BACK OF CARD */}
              <div className="absolute inset-0 w-full h-full glass-panel p-8 rounded-3xl border border-amber-500/40 bg-slate-950 rotate-y-180 backface-hidden flex flex-col justify-between shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                    RESPOSTA DIDÁTICA
                  </span>
                  {currentCard.articleRef && (
                    <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                      <Scale className="w-3.5 h-3.5" /> {currentCard.articleRef}
                    </span>
                  )}
                </div>

                <div className="my-auto py-4 space-y-4">
                  <div className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed whitespace-pre-line text-left bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    {currentCard.back}
                  </div>

                  {currentCard.tip && (
                    <div className="flex items-start gap-2 text-xs text-amber-300 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20 text-left">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Dica de Ouro:</strong> {currentCard.tip}</span>
                    </div>
                  )}
                </div>

                <div className="text-center text-xs text-slate-500">
                  Clique novamente para voltar a pergunta
                </div>
              </div>

            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-between px-2">
            <button
              onClick={handlePrev}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-300 border border-slate-800 flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>

            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="px-5 py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-2"
            >
              <RotateCw className="w-4 h-4" /> Virar Cartão
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-300 border border-slate-800 flex items-center gap-1.5"
            >
              Próximo <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (
        <div className="glass-panel p-8 rounded-2xl text-center border border-slate-800 text-slate-400">
          Nenhum flashcard disponível nesta matéria.
        </div>
      )}

    </div>
  );
};
