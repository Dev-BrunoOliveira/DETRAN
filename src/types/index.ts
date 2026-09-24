export type SubjectId = 
  | 'ctb' 
  | 'contran_estadual' 
  | 'portugues' 
  | 'rlm' 
  | 'informatica' 
  | 'direito' 
  | 'redacao';

export type FontScaleMode = 'normal' | 'large' | 'xlarge';

export interface SubjectInfo {
  id: SubjectId;
  title: string;
  shortTitle: string;
  category: 'Especificos' | 'Gerais' | 'Discursiva';
  questionCount: number;
  weightPerQuestion: number;
  totalPoints: number;
  color: string;
  iconName: string;
  description: string;
  topics: string[];
}

export interface QuestionOption {
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface OptionExplanation {
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  isCorrect: boolean;
  explanation: string;
  lawRef?: string;
}

export interface Question {
  id: string;
  subjectId: SubjectId;
  topic: string;
  difficulty: 'Fácil' | 'Médio' | 'Difícil';
  statement: string;
  options: QuestionOption[];
  correctLetter: 'A' | 'B' | 'C' | 'D' | 'E';
  generalExplanation: string;
  explanations: Record<'A' | 'B' | 'C' | 'D' | 'E', string>;
  lawReference?: string;
  bancaTag?: string;
}

export interface Flashcard {
  id: string;
  subjectId: SubjectId;
  topic: string;
  front: string;
  back: string;
  tip?: string;
  articleRef?: string;
}

export interface CtbArticleSummary {
  article: string;
  title: string;
  keyRule: string;
  penaltyOrDetail?: string;
  category: string;
}

export interface CtbChapter {
  id: string;
  chapterNumber: string;
  title: string;
  articlesRange: string;
  summary: string;
  keyTakeaways: string[];
  importantArticles: CtbArticleSummary[];
}

export interface UserProgress {
  answeredQuestions: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  bookmarkedQuestionIds: string[];
  errorNotebookIds: string[];
  studyTimeMinutes: number;
  streakDays: number;
  lastStudyDate: string;
  examHistory: ExamResultRecord[];
}

export interface ExamResultRecord {
  id: string;
  date: string;
  totalScore: number;
  percentage: number;
  passed: boolean;
  zeroInAnySubject: boolean;
  subjectBreakdown: Record<SubjectId, { total: number; correct: number; points: number }>;
  answers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  timeSpentSeconds: number;
}
