import React, { useState } from 'react';
import { useAudioPlayer } from '../context/AudioContext';
import { X, Search, Play, Pause, Music, Volume2, Repeat, Radio } from 'lucide-react';

export const AudioPlaylistDrawer: React.FC = () => {
  const {
    tracks,
    currentTrackIndex,
    isPlaying,
    playTrack,
    isPlaylistOpen,
    setIsPlaylistOpen,
    autoPlayNext,
    setAutoPlayNext,
  } = useAudioPlayer();

  const [searchQuery, setSearchQuery] = useState('');

  if (!isPlaylistOpen) return null;

  const filteredTracks = tracks.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.chapterNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-lg bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
                CTB em Áudio Completo
              </h2>
              <p className="text-xs text-slate-400">
                {tracks.length} capítulos narrados em ordem sequencial
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsPlaylistOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Fechar playlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar & Search */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar capítulo, artigo ou palavra-chave..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-300">Modo Sequencial:</span>
              <button
                onClick={() => setAutoPlayNext(!autoPlayNext)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
                  autoPlayNext
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
              >
                <Repeat className="w-3.5 h-3.5" />
                <span>{autoPlayNext ? 'Tocar Próximo Automático (Ativo)' : 'Reprodução Única'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tracks List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {filteredTracks.length === 0 ? (
            <div className="text-center py-12 text-slate-500 text-xs">
              Nenhum capítulo encontrado para "{searchQuery}".
            </div>
          ) : (
            filteredTracks.map((track) => {
              const trackIdx = track.id - 1;
              const isCurrent = currentTrackIndex === trackIdx;

              return (
                <div
                  key={track.id}
                  onClick={() => playTrack(trackIdx)}
                  className={`group p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isCurrent
                      ? 'bg-amber-500/10 border-amber-500/40 shadow-lg shadow-amber-500/5'
                      : 'bg-slate-950/40 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Track Number / Equalizer */}
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-bold text-xs transition-colors ${
                        isCurrent
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700 group-hover:text-slate-200'
                      }`}
                    >
                      {isCurrent && isPlaying ? (
                        <div className="flex items-end gap-0.5 h-4">
                          <span className="w-1 bg-slate-950 animate-[bounce_1s_infinite_100ms] rounded-full h-full" />
                          <span className="w-1 bg-slate-950 animate-[bounce_1s_infinite_300ms] rounded-full h-2/3" />
                          <span className="w-1 bg-slate-950 animate-[bounce_1s_infinite_200ms] rounded-full h-5/6" />
                        </div>
                      ) : (
                        <span>{String(track.id).padStart(2, '0')}</span>
                      )}
                    </div>

                    {/* Track Details */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 shrink-0">
                          {track.chapterNumber}
                        </span>
                        <h4
                          className={`text-xs font-bold truncate ${
                            isCurrent ? 'text-amber-300' : 'text-slate-200 group-hover:text-white'
                          }`}
                        >
                          {track.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {track.description}
                      </p>
                    </div>
                  </div>

                  {/* Play Action Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playTrack(trackIdx);
                    }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      isCurrent && isPlaying
                        ? 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                        : 'bg-slate-800 text-slate-300 hover:bg-amber-500/20 hover:text-amber-400'
                    }`}
                  >
                    {isCurrent && isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-center text-[11px] text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Áudio em alta qualidade CTB 2026</span>
          </span>
          <span className="font-semibold text-slate-400">Total: 22 Capítulos</span>
        </div>
      </div>
    </div>
  );
};
