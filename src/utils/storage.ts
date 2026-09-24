import { UserProgress, ExamResultRecord } from '../types';

const STORAGE_KEY = 'prepdetran_user_progress_2026_v1';

const defaultProgress: UserProgress = {
  answeredQuestions: {},
  bookmarkedQuestionIds: [],
  errorNotebookIds: [],
  studyTimeMinutes: 0,
  streakDays: 1,
  lastStudyDate: new Date().toISOString().split('T')[0],
  examHistory: []
};

export const getStoredProgress = (): UserProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw);
    return { ...defaultProgress, ...parsed };
  } catch (e) {
    console.error('Failed to load progress', e);
    return defaultProgress;
  }
};

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
};

export const recordQuestionAnswer = (
  questionId: string, 
  selectedOption: 'A' | 'B' | 'C' | 'D' | 'E',
  isCorrect: boolean
): UserProgress => {
  const current = getStoredProgress();
  const updatedAnswers = { ...current.answeredQuestions, [questionId]: selectedOption };
  
  let updatedErrorIds = [...current.errorNotebookIds];
  if (!isCorrect && !updatedErrorIds.includes(questionId)) {
    updatedErrorIds.push(questionId);
  } else if (isCorrect && updatedErrorIds.includes(questionId)) {
    // Remove from error notebook if answered correctly now!
    updatedErrorIds = updatedErrorIds.filter(id => id !== questionId);
  }

  // Update streak if needed
  const today = new Date().toISOString().split('T')[0];
  let streak = current.streakDays;
  if (current.lastStudyDate !== today) {
    const lastDate = new Date(current.lastStudyDate);
    const nowDate = new Date(today);
    const diffDays = Math.round((nowDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1;
    }
  }

  const updated: UserProgress = {
    ...current,
    answeredQuestions: updatedAnswers,
    errorNotebookIds: updatedErrorIds,
    streakDays: streak,
    lastStudyDate: today,
    studyTimeMinutes: current.studyTimeMinutes + 1
  };

  saveProgress(updated);
  return updated;
};

export const toggleBookmarkQuestion = (questionId: string): UserProgress => {
  const current = getStoredProgress();
  const exists = current.bookmarkedQuestionIds.includes(questionId);
  const updatedBookmarks = exists
    ? current.bookmarkedQuestionIds.filter(id => id !== questionId)
    : [...current.bookmarkedQuestionIds, questionId];

  const updated: UserProgress = {
    ...current,
    bookmarkedQuestionIds: updatedBookmarks
  };

  saveProgress(updated);
  return updated;
};

export const saveExamResult = (result: ExamResultRecord): UserProgress => {
  const current = getStoredProgress();
  const updatedHistory = [result, ...current.examHistory];
  
  const updated: UserProgress = {
    ...current,
    examHistory: updatedHistory,
    studyTimeMinutes: current.studyTimeMinutes + Math.round(result.timeSpentSeconds / 60)
  };

  saveProgress(updated);
  return updated;
};
