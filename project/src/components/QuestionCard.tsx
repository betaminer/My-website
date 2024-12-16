import React from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer?: number;
  onAnswerSelect: (answerId: number) => void;
}

export default function QuestionCard({ question, selectedAnswer, onAnswerSelect }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-lg font-medium mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors
              ${selectedAnswer === index ? 'bg-blue-50 border border-blue-200' : 'hover:bg-gray-50'}`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={index}
              checked={selectedAnswer === index}
              onChange={() => onAnswerSelect(index)}
              className="h-4 w-4 text-blue-600"
            />
            <span className="ml-3">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}