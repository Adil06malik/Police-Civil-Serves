import React, { useState } from 'react';
import { Question, Language } from '../types';
import { CheckCircle, XCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface QuizInterfaceProps {
  questions: Question[];
  onFinish: (score: number, total: number) => void;
  onExit: () => void;
  topicName: string;
  language: Language;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({ questions, onFinish, onExit, topicName, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const t = TRANSLATIONS[language];

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setScore(s => s + 1);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onFinish(score + (selectedOption === currentQuestion.correctAnswerIndex ? 0 : 0), questions.length);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 md:py-8 pb-20 md:pb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div>
          <h2 className="text-base md:text-xl font-bold text-gray-800 line-clamp-1">{topicName}</h2>
          <p className="text-xs md:text-sm text-gray-500">{t.quiz.question} {currentIndex + 1} / {questions.length}</p>
        </div>
        <button 
          onClick={onExit}
          className="text-gray-500 hover:text-red-600 text-sm font-medium px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
        >
          {t.quiz.exit}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1.5 md:h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-5 md:p-8">
          <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-6 leading-relaxed">
            {currentQuestion.text}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              let btnClass = "w-full text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group touch-manipulation ";
              
              if (isAnswered) {
                if (idx === currentQuestion.correctAnswerIndex) {
                  btnClass += "border-green-500 bg-green-50 text-green-900";
                } else if (idx === selectedOption) {
                  btnClass += "border-red-500 bg-red-50 text-red-900";
                } else {
                  btnClass += "border-gray-100 text-gray-400 opacity-60";
                }
              } else {
                if (idx === selectedOption) {
                  btnClass += "border-blue-500 bg-blue-50 text-blue-900 shadow-sm";
                } else {
                  btnClass += "border-gray-100 hover:border-blue-200 hover:bg-gray-50 text-gray-700";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isAnswered}
                  className={btnClass}
                >
                  <span className="flex items-start gap-3 w-full">
                    <span className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full text-xs md:text-sm font-semibold shrink-0 mt-0.5
                      ${isAnswered 
                        ? (idx === currentQuestion.correctAnswerIndex ? 'bg-green-200 text-green-700' : (idx === selectedOption ? 'bg-red-200 text-red-700' : 'bg-gray-100 text-gray-500'))
                        : (idx === selectedOption ? 'bg-blue-200 text-blue-700' : 'bg-gray-100 text-gray-500 group-hover:bg-white')
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm md:text-base pt-1">{option}</span>
                  </span>
                  
                  {isAnswered && idx === currentQuestion.correctAnswerIndex && (
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 ml-2" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQuestion.correctAnswerIndex && (
                    <XCircle className="w-5 h-5 text-red-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer / Explanation */}
        <div className="bg-gray-50 p-4 md:p-8 border-t border-gray-100">
          {!isAnswered ? (
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className={`w-full md:w-auto px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all
                  ${selectedOption === null 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                  }`}
              >
                {t.quiz.submit}
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">{t.quiz.explanation}</h4>
                    <p className="text-blue-800 text-sm leading-relaxed">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-black transition-colors"
                >
                  {currentIndex === questions.length - 1 ? t.quiz.finish : t.quiz.next}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;