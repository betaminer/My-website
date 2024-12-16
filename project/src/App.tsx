import React, { useState } from 'react';
import { BookOpen, Clock, Upload as UploadIcon } from 'lucide-react';
import FileUpload from './components/FileUpload';
import QuestionCard from './components/QuestionCard';
import type { Question } from './types';

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const handleFileUpload = (file: File) => {
    // TODO: Implement file parsing logic for PDF and CSV
    console.log('File uploaded:', file);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">SSC CGL Mock Test</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="h-5 w-5 text-gray-500" />
              <span className="text-lg font-medium">120:00</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {questions.length === 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">Upload PDF</h2>
              <FileUpload
                accept=".pdf"
                label="Drop your PDF file here or click to upload"
                onFileSelect={handleFileUpload}
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4">Upload CSV</h2>
              <FileUpload
                accept=".csv"
                label="Drop your CSV file here or click to upload"
                onFileSelect={handleFileUpload}
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              {questions.map((question) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  selectedAnswer={selectedAnswers[question.id]}
                  onAnswerSelect={(answerId) => 
                    setSelectedAnswers(prev => ({...prev, [question.id]: answerId}))
                  }
                />
              ))}
            </div>
            <div className="lg:col-span-4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-lg font-semibold mb-4">Question Navigator</h2>
                <div className="grid grid-cols-5 gap-2">
                  {questions.map((q, index) => (
                    <button
                      key={q.id}
                      className={`p-2 text-sm font-medium rounded
                        ${selectedAnswers[q.id] !== undefined 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-600'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;