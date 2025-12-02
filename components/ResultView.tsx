import React from 'react';
import { Award } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface ResultViewProps {
  score: number;
  total: number;
  onRetry: () => void;
  onHome: () => void;
  language: Language;
}

const ResultView: React.FC<ResultViewProps> = ({ score, total, onRetry, onHome, language }) => {
  const percentage = Math.round((score / total) * 100);
  const t = TRANSLATIONS[language];

  let message = "";
  let color = "";

  if (percentage >= 80) { message = t.result.outstanding; color = "text-green-600"; }
  else if (percentage >= 60) { message = t.result.good; color = "text-blue-600"; }
  else { message = t.result.practice; color = "text-orange-600"; }

  return (
    <div className="max-w-md mx-auto mt-6 md:mt-10 p-6 md:p-8 bg-white rounded-2xl shadow-xl text-center border border-gray-100 mx-4 md:mx-auto">
      <div className="mb-6 inline-flex p-4 rounded-full bg-gray-50 ring-4 ring-gray-50">
        <Award className={`w-12 h-12 ${color}`} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{score} <span className="text-xl md:text-2xl text-gray-400 font-normal">/ {total}</span></h2>
      <p className={`text-lg font-medium mb-8 ${color}`}>{message}</p>
      
      <div className="space-y-3">
        <button onClick={onRetry} className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
          {t.result.retry}
        </button>
        <button onClick={onHome} className="w-full py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
          {t.result.dashboard}
        </button>
      </div>
    </div>
  );
};

export default ResultView;