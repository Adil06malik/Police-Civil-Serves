import React from 'react';
import { Topic, Language } from '../types';
import { ChevronRight, BookOpen, Shield, Calculator, Globe, Newspaper, Brain } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface QuizCardProps {
  topic: Topic;
  categoryIcon: string;
  onSelect: (topic: Topic) => void;
  language: Language;
}

const QuizCard: React.FC<QuizCardProps> = ({ topic, categoryIcon, onSelect, language }) => {
  const t = TRANSLATIONS[language];
  
  const getIcon = () => {
    switch (categoryIcon) {
      case 'Calculator': return <Calculator className="w-6 h-6 text-blue-600" />;
      case 'Shield': return <Shield className="w-6 h-6 text-red-600" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-amber-600" />;
      case 'Globe': return <Globe className="w-6 h-6 text-green-600" />;
      case 'Newspaper': return <Newspaper className="w-6 h-6 text-purple-600" />;
      case 'Brain': return <Brain className="w-6 h-6 text-indigo-600" />;
      default: return <BookOpen className="w-6 h-6 text-gray-600" />;
    }
  };

  const name = language === 'hi' && topic.nameHi ? topic.nameHi : topic.name;
  const desc = language === 'hi' && topic.descriptionHi ? topic.descriptionHi : topic.description;

  return (
    <div 
      onClick={() => onSelect(topic)}
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex items-start justify-between mb-3">
          <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
            {getIcon()}
          </div>
          <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-1 leading-snug">{name}</h3>
        <p className="text-xs md:text-sm text-gray-500 line-clamp-2">{desc}</p>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-xs text-gray-400 font-medium">
        <span>{t.common.aiGenerated}</span>
        <span className="group-hover:text-blue-600 flex items-center">{t.common.startQuiz} &rarr;</span>
      </div>
    </div>
  );
};

export default QuizCard;