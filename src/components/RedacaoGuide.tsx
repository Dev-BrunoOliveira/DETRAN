import React from 'react';
import { PenTool, CheckCircle2, AlertCircle, Award, Sparkles, BookOpen } from 'lucide-react';
import { EDITAL_INFO } from '../data/editalData';

export const RedacaoGuide: React.FC = () => {
  return (
    <div className="space-y-6 animate-fadeIn">
      
      {/* Header */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
            <PenTool className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white font-outfit">
              Guia da Prova Discursiva - Redação Técnica
            </h2>
            <p className="text-xs text-slate-400">
              Banca Instituto Avalia • {EDITAL_INFO.cargo} • Valendo 10,0 Pontos
            </p>
          </div>
        </div>
      </div>

      {/* Tabela 13.4 Criteria */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" />
          Critérios Oficiais de Avaliação (Tabela 13.4 do Edital)
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

        {/* Rules Box */}
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

      {/* Recommended Structure */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="text-lg font-bold text-white font-outfit flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          Estrutura Recomendada para Redação Nota 10
        </h3>

        <div className="space-y-3 text-xs text-slate-300">
          
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-bold text-amber-300 text-sm mb-1">Parágrafo 1: Introdução (5 a 6 linhas)</h4>
            <p>Apresente o tema técnico de trânsito (ex: Segurança Viária, PNATRANS ou Fiscalização Educativa), contextualize a legislação aplicável (ex: CF/88 Art. 144 ou CTB) e defina sua tese central.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-bold text-amber-300 text-sm mb-1">Parágrafo 2: Desenvolvimento 1 - Fundamentação Legal (7 a 8 linhas)</h4>
            <p>Aborde o papel do Agente de Trânsito, o uso de tecnologia (radares, sistemas inteligentes) e cite dados de prevenção de acidentes e proteção à vida no trânsito.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-bold text-amber-300 text-sm mb-1">Parágrafo 3: Desenvolvimento 2 - Ações Práticas e Engenharia (7 a 8 linhas)</h4>
            <p>Discuta a sinergia entre fiscalização ostensiva, educação para o trânsito e adequação de vias públicas no Estado de São Paulo.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
            <h4 className="font-bold text-amber-300 text-sm mb-1">Parágrafo 4: Conclusão (5 a 6 linhas)</h4>
            <p>Sintetize a tese e proponha uma conclusão técnica alinhada ao Plano de Segurança Viária do Estado de São Paulo (PSV-SP 2025-2035).</p>
          </div>

        </div>
      </div>

    </div>
  );
};
