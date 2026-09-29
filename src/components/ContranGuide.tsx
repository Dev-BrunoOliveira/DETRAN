import React, { useState } from 'react';
import { ContranApiService } from '../services/contranApi';
import { ContranArticle, ContranTopicSummary } from '../data/contranApiData';
import {
  FileCheck2,
  Search,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Award,
  Filter,
  CheckCircle2,
  HelpCircle,
  Cpu,
  Layers
} from 'lucide-react';

interface ContranGuideProps {
  onSelectTopicForQuestions?: (topicName: string) => void;
}

export const ContranGuide: React.FC<ContranGuideProps> = ({ onSelectTopicForQuestions }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSubTab, setActiveSubTab] = useState<'articles' | 'topics' | 'metadata'>('articles');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>('art-4');

  const metadata = ContranApiService.getMetadata();
  const articles = ContranApiService.searchArticles(searchQuery);
  const topicSummaries = ContranApiService.getAllTopicSummaries();

  const toggleExpand = (id: string) => {
    setExpandedArticleId(prev => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-slate-900 via-blue-950/20 to-slate-950 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center gap-1">
                <Cpu className="w-3 h-3" />
                CONTRAN Info API v1.020/2025
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
                70 Questões Agregadas
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-white font-outfit flex items-center gap-2">
              <FileCheck2 className="w-7 h-7 text-blue-400" />
              API & Guia Oficial das Resoluções do CONTRAN
            </h2>
            <p className="text-xs text-slate-300 max-w-3xl mt-1">
              Base de conhecimento unificada da <strong className="text-blue-300">Resolução CONTRAN nº 1.020/2025</strong> (Habilitação, Ciclomotores e Exames) e resoluções complementares (911/22 Toxicológico, 960/22 Insulfilm e 940/22 Capacete).
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveSubTab('articles')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'articles'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Artigos ({articles.length})
            </button>
            <button
              onClick={() => setActiveSubTab('topics')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'topics'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              Sínteses & Tópicos
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Pesquisar artigo, palavra-chave (ex: PPD, Ciclomotor, LADV, Toxicológico, 70%...)"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-0.5 rounded"
            >
              Limpar
            </button>
          )}
        </div>
      </div>

      {/* SUBTAB 1: ARTICLES DATABASE */}
      {activeSubTab === 'articles' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Mostrando {articles.length} de {ContranApiService.getAllArticles().length} artigos e blocos normativos</span>
            <span className="text-blue-400 font-semibold">Resolução CONTRAN 1.020/2025 & Correlatas</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {articles.map(art => {
              const isExpanded = expandedArticleId === art.id;
              return (
                <div
                  key={art.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'bg-slate-900/90 border-blue-500/50 shadow-xl shadow-blue-950/40'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(art.id)}
                    className="p-5 cursor-pointer flex items-start justify-between gap-4 select-none"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          {art.articleNumber}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {art.resolution} • {art.chapterTitle}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white font-outfit">
                        {art.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {art.content}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[11px] font-semibold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 hidden sm:inline-block">
                        {art.relatedQuestionIds.length} Questões
                      </span>
                      <button className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-white border border-slate-800">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="p-5 pt-0 border-t border-slate-800/60 space-y-4 text-xs">
                      {/* Full Text / Content */}
                      <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Texto Legal / Dispositivo Normativo
                        </span>
                        <p className="text-slate-200 leading-relaxed font-sans text-sm">
                          {art.content}
                        </p>
                      </div>

                      {/* Key Takeaways */}
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Pontos Chave para Estudo
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {art.keyTakeaways.map((kt, idx) => (
                            <div key={idx} className="bg-emerald-950/20 border border-emerald-500/20 p-3 rounded-xl flex items-start gap-2 text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                              <span>{kt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Exam Tip */}
                      {art.examTip && (
                        <div className="bg-amber-950/30 border border-amber-500/30 p-3.5 rounded-xl flex items-start gap-3">
                          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-amber-400 block text-xs uppercase tracking-wider mb-0.5">Dica de Prova DETRAN</span>
                            <p className="text-slate-300 text-xs leading-relaxed">
                              {art.examTip}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUBTAB 2: TOPIC SUMMARIES */}
      {activeSubTab === 'topics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topicSummaries.map(topic => (
            <div
              key={topic.id}
              className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4 hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {topic.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {topic.resolution}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-outfit">
                  {topic.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {topic.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Regras Fundamentais:</span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {topic.keyRules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 font-bold">•</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px]">Artigos: {topic.articleRefs.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
