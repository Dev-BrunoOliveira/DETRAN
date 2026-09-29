import React, { useState, useEffect } from 'react';
import { REDACAO_THEMES, RedacaoTheme } from '../data/redacaoData';
import { EDITAL_INFO } from '../data/editalData';
import {
  PenTool,
  Award,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  BookOpen,
  FileText,
  Save,
  RotateCcw,
  Copy,
  Check,
  Layers,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  History,
  Trash2,
  Share2
} from 'lucide-react';

interface SavedEssay {
  id: string;
  themeId: string;
  themeTitle: string;
  text: string;
  linesCount: number;
  wordCount: number;
  scoreContent: number;
  scoreGrammar: number;
  scoreCohesion: number;
  scoreStructure: number;
  totalScore: number;
  date: string;
}

const ESSAYS_STORAGE_KEY = 'prepdetran_saved_essays_2026';

export const RedacaoGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'themes' | 'practice' | 'history' | 'rules'>('themes');
  const [selectedTheme, setSelectedTheme] = useState<RedacaoTheme>(REDACAO_THEMES[0]);
  
  // Editor State
  const [essayText, setEssayText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [expandedThemeId, setExpandedThemeId] = useState<string | null>(REDACAO_THEMES[0].id);

  // Rubric Scoring State (0.0 to Max)
  const [scoreContent, setScoreContent] = useState<number>(2.5); // Max 3.0
  const [scoreGrammar, setScoreGrammar] = useState<number>(1.8); // Max 2.0
  const [scoreCohesion, setScoreCohesion] = useState<number>(1.8); // Max 2.0
  const [scoreStructure, setScoreStructure] = useState<number>(2.5); // Max 3.0

  // History State
  const [savedEssays, setSavedEssays] = useState<SavedEssay[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(ESSAYS_STORAGE_KEY);
      if (raw) {
        setSavedEssays(JSON.parse(raw));
      }
    } catch (e) {
      console.error('Failed to load saved essays', e);
    }
  }, []);

  // Calculate Lines and Words
  // A standard handwriting line in 20-30 lines corresponds to approx 65 characters per line or paragraph breaks
  const paragraphs = essayText.split('\n');
  let estimatedLines = 0;
  paragraphs.forEach(p => {
    if (p.trim() === '') {
      estimatedLines += 1;
    } else {
      estimatedLines += Math.max(1, Math.ceil(p.length / 65));
    }
  });

  const wordCount = essayText.trim() === '' ? 0 : essayText.trim().split(/\s+/).length;
  const totalScore = Number((scoreContent + scoreGrammar + scoreCohesion + scoreStructure).toFixed(1));

  const handleSaveEssay = () => {
    if (!essayText.trim()) return;

    const newEssay: SavedEssay = {
      id: `essay-${Date.now()}`,
      themeId: selectedTheme.id,
      themeTitle: selectedTheme.title,
      text: essayText,
      linesCount: estimatedLines,
      wordCount: wordCount,
      scoreContent,
      scoreGrammar,
      scoreCohesion,
      scoreStructure,
      totalScore,
      date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    const updated = [newEssay, ...savedEssays];
    setSavedEssays(updated);
    try {
      localStorage.setItem(ESSAYS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
    alert('Redação salva com sucesso no seu histórico de treino!');
  };

  const handleDeleteEssay = (id: string) => {
    const updated = savedEssays.filter(e => e.id !== id);
    setSavedEssays(updated);
    try {
      localStorage.setItem(ESSAYS_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(essayText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLineStatus = () => {
    if (estimatedLines === 0) return { text: 'Aguardando digitação', color: 'text-slate-400', bg: 'bg-slate-800' };
    if (estimatedLines < 20) return { text: `Abaixo do mínimo! (${estimatedLines}/20 linhas - Risco de Nota ZERO)`, color: 'text-rose-400', bg: 'bg-rose-500/20 border-rose-500/40' };
    if (estimatedLines <= 30) return { text: `Extensão Ideal! (${estimatedLines}/30 linhas)`, color: 'text-emerald-400', bg: 'bg-emerald-500/20 border-emerald-500/40' };
    return { text: `Excedeu o máximo! (${estimatedLines}/30 linhas - Penalização no Edital)`, color: 'text-amber-400', bg: 'bg-amber-500/20 border-amber-500/40' };
  };

  const status = getLineStatus();

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-950 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <PenTool className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Prova Discursiva • 10,0 Pontos
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  Corte Mínimo: 6,0 pts
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white font-outfit">
                Redação Técnica & Banco de Temas DETRAN-SP
              </h2>
              <p className="text-xs text-slate-300 mt-1">
                Pesquisa de temas prováveis para o cargo de Agente Estadual de Trânsito (Banca Instituto Avalia) com simulador interativo de escrita de 20 a 30 linhas.
              </p>
            </div>
          </div>

          {/* Tab Selection Navigation */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveTab('themes')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'themes'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              Temas Prováveis ({REDACAO_THEMES.length})
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'practice'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <PenTool className="w-4 h-4" />
              Praticar Redação
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'history'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <History className="w-4 h-4" />
              Histórico ({savedEssays.length})
            </button>
            <button
              onClick={() => setActiveTab('rules')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'rules'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              Regras do Edital
            </button>
          </div>
        </div>
      </div>

      {/* TAB 1: RESEARCHED PROBABLE THEMES */}
      {activeTab === 'themes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Selecione um tema para explorar o roteiro de argumentos e clicar em <strong>"Praticar Este Tema"</strong></span>
            <span className="text-amber-400 font-semibold">Pesquisa de Temas 2026</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {REDACAO_THEMES.map((theme) => {
              const isExpanded = expandedThemeId === theme.id;
              return (
                <div
                  key={theme.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'bg-slate-900/90 border-indigo-500/50 shadow-xl shadow-indigo-950/30'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div
                    onClick={() => setExpandedThemeId(isExpanded ? null : theme.id)}
                    className="p-5 cursor-pointer flex items-start justify-between gap-4 select-none"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {theme.category}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30">
                          Probabilidade {theme.probability}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white font-outfit">
                        {theme.title}
                      </h3>
                      <p className="text-xs text-slate-300 line-clamp-2">
                        {theme.context}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTheme(theme);
                          setActiveTab('practice');
                        }}
                        className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-bold text-xs shadow-md hover:scale-105 transition-all flex items-center gap-1.5"
                      >
                        <PenTool className="w-3.5 h-3.5" />
                        Praticar
                      </button>
                      <button className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white border border-slate-800">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Theme Details */}
                  {isExpanded && (
                    <div className="p-5 pt-0 border-t border-slate-800/80 space-y-4 text-xs text-slate-300">
                      {/* Context & Motivating Text */}
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" /> Texto Motivador & Contexto
                        </span>
                        <p className="text-slate-200 leading-relaxed text-sm">
                          {theme.motivatingText}
                        </p>
                      </div>

                      {/* Legal References to Cite */}
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" /> Legislações e Citações de Peso para Usar na Redação
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {theme.legalReferences.map((ref, idx) => (
                            <span key={idx} className="bg-amber-950/30 border border-amber-500/30 px-3 py-1.5 rounded-lg text-amber-300 font-semibold">
                              {ref}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Arguments */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {theme.keyArguments.map((arg, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                            <span className="font-bold text-indigo-300 block text-xs">Eixo {idx + 1}: {arg.title}</span>
                            <p className="text-slate-400 text-xs leading-relaxed">{arg.description}</p>
                          </div>
                        ))}
                      </div>

                      {/* Intervention Proposal */}
                      <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl space-y-1">
                        <span className="font-bold text-emerald-400 text-xs uppercase tracking-wider block">Proposta de Intervenção Técnica Recomendada</span>
                        <p className="text-slate-200 text-xs leading-relaxed">
                          {theme.interventionProposal}
                        </p>
                      </div>

                      {/* Paragraph Outline Guide */}
                      <div className="space-y-2 pt-2 border-t border-slate-800">
                        <span className="font-bold text-white text-xs uppercase tracking-wider block">Roteiro Parágrafo por Parágrafo (20 a 30 Linhas):</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                            <strong className="text-amber-300 block mb-0.5">Parágrafo 1 (Introdução):</strong>
                            <span className="text-slate-400">{theme.sampleOutline.intro}</span>
                          </div>
                          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                            <strong className="text-amber-300 block mb-0.5">Parágrafo 2 (Desenvolvimento 1):</strong>
                            <span className="text-slate-400">{theme.sampleOutline.dev1}</span>
                          </div>
                          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                            <strong className="text-amber-300 block mb-0.5">Parágrafo 3 (Desenvolvimento 2):</strong>
                            <span className="text-slate-400">{theme.sampleOutline.dev2}</span>
                          </div>
                          <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                            <strong className="text-amber-300 block mb-0.5">Parágrafo 4 (Conclusão):</strong>
                            <span className="text-slate-400">{theme.sampleOutline.conclusion}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: INTERACTIVE PRACTICE ESSAY EDITOR */}
      {activeTab === 'practice' && (
        <div className="space-y-6">
          {/* Selected Theme Context Bar */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-indigo-500/40 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-black uppercase text-indigo-400 bg-indigo-500/20 px-2.5 py-0.5 rounded border border-indigo-500/30">
                  Tema Selecionado para Treino
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  {selectedTheme.title}
                </h3>
              </div>

              {/* Selector to change theme */}
              <select
                value={selectedTheme.id}
                onChange={(e) => {
                  const found = REDACAO_THEMES.find(t => t.id === e.target.value);
                  if (found) setSelectedTheme(found);
                }}
                className="bg-slate-950 border border-slate-800 text-xs text-slate-200 rounded-xl px-3 py-2 focus:outline-none focus:border-indigo-500"
              >
                {REDACAO_THEMES.map(t => (
                  <option key={t.id} value={t.id}>{t.title.substring(0, 50)}...</option>
                ))}
              </select>
            </div>

            {/* Quick References Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800 text-xs">
              <span className="text-slate-400 font-semibold">Citações Úteis:</span>
              {selectedTheme.legalReferences.map((ref, i) => (
                <span key={i} className="bg-slate-950 border border-slate-800 px-2.5 py-0.5 rounded text-[11px] text-amber-300">
                  {ref}
                </span>
              ))}
            </div>
          </div>

          {/* Editor & Real-Time Counter Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Col (2 cols wide): Textarea Editor */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-indigo-400" />
                  Área de Escrita da Redação (Simulador da Folha Oficial)
                </label>

                {/* Line Counter Badge */}
                <div className={`px-3 py-1 rounded-xl text-xs font-bold border ${status.bg} ${status.color}`}>
                  {status.text}
                </div>
              </div>

              {/* Textarea */}
              <div className="relative">
                <textarea
                  value={essayText}
                  onChange={(e) => setEssayText(e.target.value)}
                  rows={16}
                  placeholder="Digite seu texto dissertativo-argumentativo aqui (mínimo de 20 linhas e máximo de 30 linhas)..."
                  className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-600 font-mono leading-relaxed focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-y"
                />

                {/* Counter Footer Bar */}
                <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Palavras: <strong className="text-white">{wordCount}</strong> | Caracteres: <strong className="text-white">{essayText.length}</strong></span>
                  <span>Linhas estimadas: <strong className="text-white">{estimatedLines}</strong> / 30</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyText}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
                  </button>

                  <button
                    onClick={() => setEssayText('')}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-rose-400 hover:text-rose-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Limpar Editor</span>
                  </button>
                </div>

                <button
                  onClick={handleSaveEssay}
                  disabled={!essayText.trim()}
                  className={`px-5 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all ${
                    essayText.trim()
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-slate-950 shadow-lg shadow-emerald-500/20 hover:scale-105 cursor-pointer'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Save className="w-4 h-4" />
                  Salvar Redação no Histórico
                </button>
              </div>
            </div>

            {/* Right Col: Interactive Rubric Scorer (Tabela 13.4 do Edital) */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-5 h-fit">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-white text-sm font-outfit flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    Autoavaliação (Tabela 13.4)
                  </h4>
                  <span className={`text-base font-black px-3 py-0.5 rounded-lg border ${
                    totalScore >= 6.0 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                  }`}>
                    {totalScore} / 10,0
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {totalScore >= 6.0 ? 'Aprovado na Discursiva (Nota >= 6,0)' : 'Abaixo do corte (Mínimo de 6,0 pts)'}
                </p>
              </div>

              {/* Rubric Sliders */}
              <div className="space-y-4 text-xs">
                {/* 1. Conteúdo */}
                <div className="space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span className="text-amber-300">1. Conteúdo e Argumentação</span>
                    <span className="text-slate-200 font-mono">{scoreContent.toFixed(1)} / 3,0</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3.0"
                    step="0.1"
                    value={scoreContent}
                    onChange={(e) => setScoreContent(parseFloat(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                {/* 2. Gramática */}
                <div className="space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span className="text-emerald-300">2. Norma-Padrão da Língua</span>
                    <span className="text-slate-200 font-mono">{scoreGrammar.toFixed(1)} / 2,0</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2.0"
                    step="0.1"
                    value={scoreGrammar}
                    onChange={(e) => setScoreGrammar(parseFloat(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>

                {/* 3. Coesão */}
                <div className="space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span className="text-blue-300">3. Coerência e Coesão</span>
                    <span className="text-slate-200 font-mono">{scoreCohesion.toFixed(1)} / 2,0</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2.0"
                    step="0.1"
                    value={scoreCohesion}
                    onChange={(e) => setScoreCohesion(parseFloat(e.target.value))}
                    className="w-full accent-blue-400 cursor-pointer"
                  />
                </div>

                {/* 4. Tipologia */}
                <div className="space-y-1">
                  <div className="flex justify-between font-semibold">
                    <span className="text-purple-300">4. Tipologia e Objetividade</span>
                    <span className="text-slate-200 font-mono">{scoreStructure.toFixed(1)} / 3,0</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3.0"
                    step="0.1"
                    value={scoreStructure}
                    onChange={(e) => setScoreStructure(parseFloat(e.target.value))}
                    className="w-full accent-purple-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Checklist reminder */}
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] space-y-1.5 text-slate-300">
                <span className="font-bold text-amber-400 block">Checklist de Revisão Rápida:</span>
                <div className="space-y-1 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Mínimo de 20 linhas e Máximo de 30 linhas</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Texto dissertativo em 3ª pessoa (impessoal)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Citou pelo menos 1 lei ou resolução relevante</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Proposta de intervenção na conclusão</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ESSAY HISTORY */}
      {activeTab === 'history' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Redações salvas localmente no seu histórico de treino ({savedEssays.length})</span>
          </div>

          {savedEssays.length === 0 ? (
            <div className="glass-panel p-12 text-center space-y-3 rounded-2xl border border-slate-800">
              <History className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-300">Nenhuma redação salva ainda</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Acesse a aba <strong>"Praticar Redação"</strong>, escolha um dos temas prováveis e escreva sua primeira redação simulada!
              </p>
              <button
                onClick={() => setActiveTab('practice')}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold transition-all hover:bg-indigo-500"
              >
                Escrever Redação Agora
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {savedEssays.map(essay => (
                <div key={essay.id} className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400">{essay.date}</span>
                      <h4 className="text-sm font-bold text-white font-outfit mt-0.5">{essay.themeTitle}</h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-xl text-xs font-black border ${
                        essay.totalScore >= 6.0 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' : 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                      }`}>
                        Nota: {essay.totalScore} / 10,0
                      </span>

                      <button
                        onClick={() => handleDeleteEssay(essay.id)}
                        className="p-2 rounded-xl bg-slate-950 text-slate-500 hover:text-rose-400 border border-slate-800 transition-colors"
                        title="Excluir redação"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 font-mono line-clamp-3 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    {essay.text}
                  </p>

                  <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2 pt-1">
                    <span>Extensão: <strong>{essay.linesCount} linhas</strong> ({essay.wordCount} palavras)</span>
                    <div className="flex items-center gap-3 text-slate-300">
                      <span>Conteúdo: <strong>{essay.scoreContent}</strong></span>
                      <span>Gramática: <strong>{essay.scoreGrammar}</strong></span>
                      <span>Coesão: <strong>{essay.scoreCohesion}</strong></span>
                      <span>Tipologia: <strong>{essay.scoreStructure}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 4: OFFICIAL RULES SUMMARY */}
      {activeTab === 'rules' && (
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Critérios Oficiais de Avaliação (Tabela 13.4 do Edital Instituto Avalia)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-amber-300">1. Conteúdo e Argumentação Técnica</span>
                  <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-amber-500 text-slate-950">
                    3,0 Pontos
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Atendimento ao tema; domínio do conteúdo proposto, informatividade e desenvolvimento de argumentação técnica, pertinente, impessoal e fundamentada.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-emerald-300">2. Norma-Padrão da Língua Portuguesa</span>
                  <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-emerald-500 text-slate-950">
                    2,0 Pontos
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Domínio da gramática culta, concordância verbal/nominal, regência, pontuação, acentuação e ortografia oficial.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-blue-300">3. Coerência e Coesão Textual</span>
                  <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-blue-500 text-slate-950">
                    2,0 Pontos
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Progressão de ideias, articulação entre frases e parágrafos, ausência de contradições e coesão referencial/sequencial.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-purple-300">4. Tipologia Textual e Objetividade</span>
                  <span className="px-2 py-0.5 rounded text-xs font-extrabold bg-purple-500 text-white">
                    3,0 Pontos
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Estrutura dissertativo-argumentativa clara, objetividade, adequação vocabular e adequação à finalidade técnico-avaliativa.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 text-xs space-y-2 text-slate-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Exigências Formais do Edital:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li><strong>Extensão:</strong> Mínimo de <strong>20 linhas</strong> e Máximo de <strong>30 linhas</strong>.</li>
                <li><strong>Nota de Corte:</strong> É necessário obter no mínimo <strong>6,0 pontos</strong> de 10,0.</li>
                <li><strong>Eliminação:</strong> Receberá nota ZERO a redação com menos de 20 linhas, fora do tema, ou com assinatura/marca identificadora fora do local.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
