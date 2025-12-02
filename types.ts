export enum Difficulty {
  BASIC = 'Basic',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}

export type ViewState = 'home' | 'syllabus' | 'mock' | 'papers' | 'generator';

export type Language = 'en' | 'hi';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Topic {
  id: string;
  name: string;
  nameHi?: string;
  description: string;
  descriptionHi?: string;
}

export interface Category {
  id: string;
  title: string;
  titleHi?: string;
  icon: string;
  topics: Topic[];
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: Record<number, number>; // questionId -> optionIndex
  isFinished: boolean;
  score: number;
}