import React, { useState, useEffect } from 'react';
import { TabType, Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { ModuleStudy } from './components/ModuleStudy';
import { Simulator } from './components/Simulator';
import { Flashcards } from './components/Flashcards';
import { CtbGuide } from './components/CtbGuide';
import { ErrorNotebook } from './components/ErrorNotebook';
import { RedacaoGuide } from './components/RedacaoGuide';
import { getStoredProgress } from './utils/storage';
import { UserProgress, FontScaleMode } from './types';
import { ShieldAlert, ExternalLink } from 'lucide-react';
import { AudioProvider } from './context/AudioContext';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { AudioPlaylistDrawer } from './components/AudioPlaylistDrawer';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [userProgress, setUserProgress] = useState<UserProgress>(getStoredProgress());
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string | null>(null);
  
  // Font scale mode state ('normal' | 'large' | 'xlarge')
  const [fontScale, setFontScale] = useState<FontScaleMode>('large'); // Default to large font for super comfortable reading!

  useEffect(() => {
    setUserProgress(getStoredProgress());
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-scale-large', 'font-scale-xlarge');
    if (fontScale === 'large') {
      root.classList.add('font-scale-large');
    } else if (fontScale === 'xlarge') {
      root.classList.add('font-scale-xlarge');
    }
  }, [fontScale]);

  const handleProgressUpdate = (updated: UserProgress) => {
    setUserProgress(updated);
  };

  return (
    <AudioProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative pb-20">
        
        {/* Top Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          userProgress={userProgress}
          fontScale={fontScale}
          setFontScale={setFontScale}
        />

        {/* Main Container */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeTab === 'dashboard' && (
            <Dashboard
              userProgress={userProgress}
              setActiveTab={setActiveTab}
              setSelectedSubjectFilter={setSelectedSubjectFilter}
            />
          )}

          {activeTab === 'modules' && (
            <ModuleStudy
              userProgress={userProgress}
              onProgressUpdate={handleProgressUpdate}
              initialSubjectFilter={selectedSubjectFilter}
            />
          )}

          {activeTab === 'simulator' && (
            <Simulator
              userProgress={userProgress}
              onProgressUpdate={handleProgressUpdate}
            />
          )}

          {activeTab === 'flashcards' && (
            <Flashcards />
          )}

          {activeTab === 'ctb_guide' && (
            <CtbGuide />
          )}

          {activeTab === 'errors' && (
            <ErrorNotebook
              userProgress={userProgress}
              onProgressUpdate={handleProgressUpdate}
            />
          )}

          {activeTab === 'redacao' && (
            <RedacaoGuide />
          )}
        </main>

        {/* Persistent CTB Audio Player Bar & Playlist Drawer */}
        <AudioPlayerBar />
        <AudioPlaylistDrawer />

        {/* Footer */}
        <footer className="border-t border-slate-800 bg-slate-950 py-6 mt-12 text-xs sm:text-sm text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-slate-300">PrepDETRAN SP 2026</span>
              <span>• Baseado no Edital DETRAN-SP (Banca Instituto Avalia)</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.avalia.org.br"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 flex items-center gap-1 transition-colors font-semibold"
              >
                <span>Instituto Avalia</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </footer>

      </div>
    </AudioProvider>
  );
}

export default App;
