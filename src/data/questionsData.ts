import { Question } from '../types';
import { ctbQuestions } from './questions/ctbQuestions';
import { contranQuestions } from './questions/contranQuestions';
import { portuguesQuestions } from './questions/portuguesQuestions';
import { rlmQuestions } from './questions/rlmQuestions';
import { informaticaQuestions } from './questions/informaticaQuestions';
import { direitoQuestions } from './questions/direitoQuestions';

export const QUESTIONS_DATABASE: Question[] = [
  ...ctbQuestions,
  ...contranQuestions,
  ...portuguesQuestions,
  ...rlmQuestions,
  ...informaticaQuestions,
  ...direitoQuestions
];
