import React, { useState } from 'react';
import { CTB_CHAPTERS_SUMMARY } from '../data/ctbSummaryData';
import { FileText, Search, Scale, ChevronDown, ChevronUp, AlertCircle, Bookmark, Headphones, Play, Pause, Radio, ListMusic } from 'lucide-react';
import { useAudioPlayer } from '../context/AudioContext';

export const CtbGuide: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedChapterId, setExpandedChapterId] = useState<string>('cap-1');
  const { tracks, currentTrackIndex, isPlaying, playTrack, setIsPlaylistOpen, setIsPlayerVisible } = useAudioPlayer();

  const filteredChapters = CTB_CHAPTERS_SUMMARY.filter((chap) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const inTitle = chap.title.toLowerCase().includes(q);
    const inSummary = chap.summary.toLowerCase().includes(q);
    const inTakeaways = chap.keyTakeaways.some(t => t.toLowerCase().includes(q));
    const inArticles = chap.importantArticles.some(a => a.article.toLowerCase().includes(q) || a.title.toLowerCase().includes(q) || a.keyRule.toLowerCase().includes(q));
    return inTitle || inSummary || inTakeaways || inArticles;
  });

  const getTrackIndexForChapterNumber = (chapterNumber: string) => {
    const idx = tracks.findIndex(t => t.chapterNumber.toLowerCase() === chapterNumber.toLowerCase());
    return idx >= 0 ? idx : 0;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header & Audio Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white font-outfit flex items-center gap-2">
              <FileText className="w-6 h-6 text-amber-400" />
              Consulta Rápida & Resumo do CTB 2026 (Lei nº 9.503/1997)
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Resumo esquematizado dos principais capítulos e artigos indispensáveis para o cargo de Agente Estadual de Trânsito.
            </p>
          </div>

          {/* Master Audio Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                setIsPlayerVisible(true);
                if (!isPlaying) playTrack(0);
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 hover:scale-105 transition-all"
            >
              <Headphones className="w-4 h-4" />
              <span>Ouvir CTB em Ordem (22 Áudios)</span>
            </button>

            <button
              onClick={() => {
                setIsPlayerVisible(true);
                setIsPlaylistOpen(true);
              }}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-amber-400 transition-colors"
              title="Ver lista de capítulos em áudio"
            >
              <ListMusic className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Audio Player Card Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                  Audiobook do CTB
                </span>
                <span className="text-xs font-bold text-slate-300">Tocar Enquanto Estuda ou Responde Questões</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Os 22 áudios continuam tocando sem interrupção mesmo se você mudar de tela ou resolver simulados!
              </p>
            </div>
          </div>

          <button
            onClick={() => playTrack(currentTrackIndex)}
            className="flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs transition-all shrink-0"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" />
                <span>Pausar Áudio Atual</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Continuar Áudio</span>
              </>
            )}
          </button>
        </div>

        {/* Search */}
        <div className="relative max-w-xl">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar por artigo, palavra-chave ou capítulo do CTB (ex: Art. 165, Rodovia, CNH)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
          />
        </div>
      </div>

      {/* Chapters Accordion List */}
      <div className="space-y-4">
        {filteredChapters.map((chap) => {
          const isExpanded = expandedChapterId === chap.id;
          return (
            <div 
              key={chap.id}
              className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedChapterId(isExpanded ? '' : chap.id)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 bg-slate-900/60 hover:bg-slate-800/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {chap.chapterNumber}
                  </span>
                  <div>
                    <h3 className="font-bold text-base text-white font-outfit">
                      {chap.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-medium">
                      {chap.articlesRange}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      const trackIdx = getTrackIndexForChapterNumber(chap.chapterNumber);
                      playTrack(trackIdx);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                      currentTrackIndex === getTrackIndexForChapterNumber(chap.chapterNumber) && isPlaying
                        ? 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold shadow-md shadow-amber-500/20'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700 hover:text-white'
                    }`}
                  >
                    {currentTrackIndex === getTrackIndexForChapterNumber(chap.chapterNumber) && isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 fill-current" />
                        <span>Tocando</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        <span className="hidden sm:inline">Ouvir Áudio</span>
                      </>
                    )}
                  </button>

                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </button>

              {isExpanded && (
                <div className="p-6 border-t border-slate-800 space-y-6 bg-slate-950/80">
                  
                  {/* Summary */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Visão Geral</h4>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {chap.summary}
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div>
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Bookmark className="w-4 h-4 text-amber-400" /> Pontos de Alta Incidência em Provas
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {chap.keyTakeaways.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Important Articles */}
                  <div>
                    <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Scale className="w-4 h-4 text-emerald-400" /> Artigos Destacados e Leis
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {chap.importantArticles.map((art, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                              {art.article} - {art.title}
                            </span>
                            <span className="text-[10px] text-slate-400 font-semibold">{art.category}</span>
                          </div>
                          
                          <p className="text-xs text-slate-200 leading-relaxed font-medium">
                            {art.keyRule}
                          </p>

                          {art.penaltyOrDetail && (
                            <div className="flex items-center gap-1.5 text-[11px] text-rose-300 bg-rose-500/10 p-2 rounded-md border border-rose-500/20">
                              <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                              <span>{art.penaltyOrDetail}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
