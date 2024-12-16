export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  subject?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface Test {
  id: string;
  title: string;
  duration: number; // in minutes
  questions: Question[];
  totalMarks: number;
}