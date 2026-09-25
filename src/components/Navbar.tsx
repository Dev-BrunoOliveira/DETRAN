import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpenCheck, 
  Timer, 
  Layers, 
  BookMarked, 
  FileText, 
  PenTool, 
  Flame, 
  ShieldAlert,
  Type,
  Menu,
  X,
  Star,
  ChevronRight,
  Headphones,
  Radio,
  Volume2
} from 'lucide-react';
import { UserProgress, FontScaleMode } from '../types';
import { useAudioPlayer } from '../context/AudioContext';

export type TabType = 
  | 'dashboard' 
  | 'modules' 
  | 'simulator' 
  | 'flashcards' 
  | 'ctb_guide' 
  | 'errors' 
  | 'redacao';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  userProgress: UserProgress;
  fontScale: FontScaleMode;
  setFontScale: (scale: FontScaleMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  activeTab, 
  setActiveTab, 
  userProgress,
  fontScale,
  setFontScale
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { isPlaying, currentTrack, setIsPlayerVisible, setIsPlaylistOpen } = useAudioPlayer();

  const answeredCount = Object.keys(userProgress.answeredQuestions).length;
  const errorsCount = userProgress.errorNotebookIds.length;

  const navItems = [
    { id: 'dashboard' as TabType, label: 'Dashboard', icon: LayoutDashboard },
    { id: 'modules' as TabType, label: 'Questões por Módulo', icon: BookOpenCheck, badge: answeredCount > 0 ? answeredCount : undefined },
    { id: 'simulator' as TabType, label: 'Simulado Avalia', icon: Timer, highlight: true },
    { id: 'flashcards' as TabType, label: 'Flashcards', icon: Layers },
    { id: 'ctb_guide' as TabType, label: 'Resumo CTB 2026', icon: FileText },
    { id: 'errors' as TabType, label: 'Caderno de Erros', icon: BookMarked, badge: errorsCount > 0 ? errorsCount : undefined, color: 'text-rose-400' },
    { id: 'redacao' as TabType, label: 'Redação Técnica', icon: PenTool }
  ];

  const cycleFontScale = () => {
    if (fontScale === 'normal') setFontScale('large');
    else if (fontScale === 'large') setFontScale('xlarge');
    else setFontScale('normal');
  };

  const getFontScaleLabel = () => {
    if (fontScale === 'normal') return 'Média';
    if (fontScale === 'large') return 'Grande 🔍';
    return 'GG 🚀';
  };

  const handleSelectTab = (id: TabType) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Title */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 cursor-pointer group shrink-0" onClick={() => handleSelectTab('dashboard')}>
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-0.5 shadow-lg shadow-amber-500/25 flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-slate-950 rounded-[10px] sm:rounded-[14px] flex items-center justify-center">
                <ShieldAlert className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-black text-base sm:text-xl tracking-tight text-white font-outfit">
                  Prep<span className="text-amber-400">DETRAN</span>
                </span>
                <span className="px-1.5 py-0.2 sm:px-2 sm:py-0.5 text-[10px] sm:text-xs font-black rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  2026
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium hidden xs:block">Banca Avalia • Agente</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10'
                      : item.highlight
                      ? 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-500/40 font-black'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : item.color || 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-amber-500/25 text-amber-300 font-extrabold border border-amber-500/40">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Audio Player Trigger, Font Scale Toggle, Streak & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* CTB Audio Button */}
            <button
              onClick={() => {
                setIsPlayerVisible(true);
                setIsPlaylistOpen(true);
              }}
              title="Escutar os áudios do CTB em ordem (22 capítulos)"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all border shadow-sm ${
                isPlaying
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-amber-500/10 animate-pulse'
                  : 'bg-slate-900 hover:bg-slate-800 border-amber-500/30 text-amber-300 hover:border-amber-400'
              }`}
            >
              {isPlaying ? (
                <div className="flex items-end gap-0.5 h-3.5">
                  <span className="w-0.5 bg-amber-400 animate-[bounce_1s_infinite_100ms] h-full" />
                  <span className="w-0.5 bg-amber-400 animate-[bounce_1s_infinite_300ms] h-2/3" />
                  <span className="w-0.5 bg-amber-400 animate-[bounce_1s_infinite_200ms] h-5/6" />
                </div>
              ) : (
                <Headphones className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              )}
              <span className="hidden xs:inline">{isPlaying ? `Tocando ${currentTrack.chapterNumber}` : 'Áudio CTB'}</span>
            </button>

            {/* Font Scale Button */}
            <button
              onClick={cycleFontScale}
              title="Alternar tamanho da fonte da aplicação"
              className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/30 text-amber-300 text-[11px] sm:text-xs font-bold transition-all hover:border-amber-400 shadow-sm"
            >
              <Type className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              <span>{getFontScaleLabel()}</span>
            </button>

            {/* Streak Badge */}
            <div className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-lg sm:rounded-xl bg-slate-900 border border-slate-800 text-[11px] sm:text-xs font-extrabold text-amber-400 shadow-inner">
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
              <span>{userProgress.streakDays}d</span>
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 transition-colors focus:outline-none"
              aria-label="Abrir Menu de Navegação"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5 text-amber-400" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Horizontal Scroll Bar */}
      <div className="lg:hidden flex items-center gap-1.5 px-3 py-2 overflow-x-auto border-t border-slate-800/80 no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelectTab(item.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 ${
                isActive
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5 text-amber-400" />
              <span>{item.label}</span>
              {item.badge !== undefined && (
                <span className="px-1 py-0.2 text-[9px] rounded-full bg-amber-500/30 text-amber-200 font-black">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile Drawer Backdrop & Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop Blur overlay */}
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="relative z-10 w-full max-h-[85vh] bg-slate-950 border-t border-amber-500/30 rounded-t-3xl p-5 shadow-2xl flex flex-col overflow-y-auto space-y-4 animate-slideUp">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                <span className="font-extrabold text-white text-base font-outfit">Menu Principal</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links inside Drawer */}
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectTab(item.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-md shadow-amber-500/10'
                        : item.highlight
                        ? 'bg-blue-600/20 border-blue-500/40 text-blue-300 font-extrabold'
                        : 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${isActive ? 'bg-amber-500/30 text-amber-300' : 'bg-slate-800 text-slate-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span>{item.label}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {item.badge !== undefined && (
                        <span className="px-2 py-0.5 text-xs font-black rounded-full bg-amber-500/30 text-amber-200 border border-amber-500/40">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Extra Drawer Controls */}
            <div className="pt-3 border-t border-slate-800/80 space-y-3">
              
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
                <span className="text-slate-400 font-bold">Ajustar Tamanho de Fonte:</span>
                <button
                  onClick={cycleFontScale}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 font-extrabold border border-amber-500/40"
                >
                  {getFontScaleLabel()}
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Concurso DETRAN-SP 2026</span>
                </div>
                <span className="font-bold text-white">26/10/2026</span>
              </div>

            </div>

          </div>
        </div>
      )}

    </header>
  );
};
