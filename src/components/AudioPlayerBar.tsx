import React from 'react';
import { useAudioPlayer } from '../context/AudioContext';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  ListMusic,
  Minimize2,
  Maximize2,
  X,
  Radio,
  Repeat
} from 'lucide-react';

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

export const AudioPlayerBar: React.FC = () => {
  const {
    tracks,
    currentTrackIndex,
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    volume,
    isMuted,
    autoPlayNext,
    isPlayerVisible,
    isMinimized,
    togglePlayPause,
    nextTrack,
    prevTrack,
    seekTo,
    skipTime,
    setPlaybackRate,
    setVolume,
    toggleMute,
    setAutoPlayNext,
    setIsPlayerVisible,
    setIsMinimized,
    setIsPlaylistOpen,
  } = useAudioPlayer();

  if (!isPlayerVisible) return null;

  const speedOptions = [0.75, 1.0, 1.25, 1.5, 1.75, 2.0];

  // Minimized Compact Floating Widget
  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-40 animate-slideUp">
        <div className="glass-panel p-2.5 px-4 rounded-full border border-amber-500/40 bg-slate-900/90 shadow-2xl flex items-center gap-3 backdrop-blur-md">
          {/* Animated icon */}
          <div
            onClick={() => setIsMinimized(false)}
            className="cursor-pointer w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0"
          >
            {isPlaying ? (
              <div className="flex items-end gap-0.5 h-3.5">
                <span className="w-0.5 bg-amber-400 animate-[bounce_1s_infinite_100ms] h-full" />
                <span className="w-0.5 bg-amber-400 animate-[bounce_1s_infinite_300ms] h-2/3" />
                <span className="w-0.5 bg-amber-400 animate-[bounce_1s_infinite_200ms] h-5/6" />
              </div>
            ) : (
              <Radio className="w-4 h-4" />
            )}
          </div>

          {/* Title & info */}
          <div
            onClick={() => setIsMinimized(false)}
            className="cursor-pointer max-w-[180px] sm:max-w-[240px] truncate"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1 rounded border border-amber-500/20">
                {currentTrack.chapterNumber}
              </span>
              <span className="text-xs font-bold text-white truncate">
                {currentTrack.title}
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold hover:bg-amber-400 transition-transform active:scale-95 shrink-0"
            title={isPlaying ? 'Pausar' : 'Tocar'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>

          {/* Expand */}
          <button
            onClick={() => setIsMinimized(false)}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            title="Expandir player"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  // Expanded Docked Player Bar
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-slideUp bg-slate-950/95 border-t border-slate-800 shadow-2xl backdrop-blur-xl px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Left: Track Information & Playlist Trigger */}
        <div className="flex items-center gap-3 w-full md:w-1/3 min-w-0">
          <div
            onClick={() => setIsPlaylistOpen(true)}
            className="group relative cursor-pointer w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 hover:border-amber-400 transition-all"
            title="Abrir Lista dos 22 Capítulos"
          >
            {isPlaying ? (
              <div className="flex items-end gap-1 h-5">
                <span className="w-1 bg-amber-400 animate-[bounce_1s_infinite_100ms] rounded-full h-full" />
                <span className="w-1 bg-amber-400 animate-[bounce_1s_infinite_300ms] rounded-full h-2/3" />
                <span className="w-1 bg-amber-400 animate-[bounce_1s_infinite_200ms] rounded-full h-5/6" />
              </div>
            ) : (
              <Radio className="w-6 h-6 group-hover:scale-110 transition-transform" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0">
                Faixa {String(currentTrackIndex + 1).padStart(2, '0')}/{tracks.length} • {currentTrack.chapterNumber}
              </span>
            </div>
            <h3 className="text-xs font-bold text-white truncate mt-0.5 font-outfit" title={currentTrack.title}>
              {currentTrack.title}
            </h3>
            <p className="text-[11px] text-slate-400 truncate" title={currentTrack.description}>
              {currentTrack.description}
            </p>
          </div>

          <button
            onClick={() => setIsPlaylistOpen(true)}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1.5 rounded-lg border border-amber-500/30 transition-colors shrink-0"
          >
            <ListMusic className="w-3.5 h-3.5" />
            <span>Capítulos</span>
          </button>
        </div>

        {/* Center: Controls & Timeline Scrub Bar */}
        <div className="flex flex-col items-center gap-1.5 w-full md:w-2/5 max-w-xl">
          {/* Main Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Auto Play Next Toggle */}
            <button
              onClick={() => setAutoPlayNext((prev) => !prev)}
              className={`p-1.5 rounded-lg text-xs font-semibold transition-colors ${
                autoPlayNext
                  ? 'text-amber-400 bg-amber-500/10 border border-amber-500/30'
                  : 'text-slate-500 hover:text-slate-300'
              }`}
              title={autoPlayNext ? 'Auto-avanço ativado (toca em ordem)' : 'Auto-avanço desativado'}
            >
              <Repeat className="w-4 h-4" />
            </button>

            {/* Skip Back 10s */}
            <button
              onClick={() => skipTime(-10)}
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
              title="Voltar 10 segundos"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Prev Track */}
            <button
              onClick={prevTrack}
              className="p-1.5 text-slate-300 hover:text-white transition-colors"
              title="Capítulo Anterior"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            {/* Main Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all"
              title={isPlaying ? 'Pausar Áudio' : 'Tocar Áudio'}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            {/* Next Track */}
            <button
              onClick={nextTrack}
              className="p-1.5 text-slate-300 hover:text-white transition-colors"
              title="Próximo Capítulo"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            {/* Forward 10s */}
            <button
              onClick={() => skipTime(10)}
              className="p-1.5 text-slate-400 hover:text-white transition-colors"
              title="Avançar 10 segundos"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            {/* Speed selector */}
            <div className="relative group">
              <button
                className="px-2 py-1 rounded text-xs font-mono font-bold bg-slate-800 text-amber-300 hover:bg-slate-700 border border-slate-700"
                title="Velocidade de Reprodução"
              >
                {playbackRate}x
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col bg-slate-900 border border-slate-800 rounded-lg p-1 shadow-xl text-xs z-50">
                {speedOptions.map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setPlaybackRate(speed)}
                    className={`px-3 py-1 rounded text-left font-mono ${
                      playbackRate === speed
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Scrub Bar */}
          <div className="w-full flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-10 text-right shrink-0">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={(e) => seekTo(Number(e.target.value))}
              className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
            />
            <span className="w-10 shrink-0">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Right: Volume & Bar Window Controls */}
        <div className="flex items-center justify-end gap-3 w-full md:w-1/3">
          {/* Volume Slider */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-slate-400 hover:text-white transition-colors"
              title={isMuted ? 'Ativar Som' : 'Mutar'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-rose-400" />
              ) : (
                <Volume2 className="w-4 h-4 text-amber-400" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-16 sm:w-20 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Minimize Button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            title="Minimizar para widget flutuante"
          >
            <Minimize2 className="w-4 h-4" />
          </button>

          {/* Close Player */}
          <button
            onClick={() => setIsPlayerVisible(false)}
            className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition-colors"
            title="Fechar Player"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
