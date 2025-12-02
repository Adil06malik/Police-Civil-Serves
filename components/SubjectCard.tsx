import React from 'react';
import { Category, Language } from '../types';
import { ChevronRight, BookOpen, Shield, Calculator, Globe, Newspaper, Brain } from 'lucide-react';
import { TRANSLATIONS } from '../utils/translations';

interface SubjectCardProps {
  category: Category;
  onClick: (category: Category) => void;
  language: Language;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ category, onClick, language }) => {
  const t = TRANSLATIONS[language];
  
  const getIcon = () => {
    switch (category.icon) {
      case 'Calculator': return <Calculator className="w-8 h-8 text-blue-600" />;
      case 'Shield': return <Shield className="w-8 h-8 text-red-600" />;
      case 'BookOpen': return <BookOpen className="w-8 h-8 text-amber-600" />;
      case 'Globe': return <Globe className="w-8 h-8 text-green-600" />;
      case 'Newspaper': return <Newspaper className="w-8 h-8 text-purple-600" />;
      case 'Brain': return <Brain className="w-8 h-8 text-indigo-600" />;
      default: return <BookOpen className="w-8 h-8 text-gray-600" />;
    }
  };

  const getBgColor = () => {
    switch (category.icon) {
      case 'Calculator': return 'bg-blue-50 group-hover:bg-blue-100';
      case 'Shield': return 'bg-red-50 group-hover:bg-red-100';
      case 'BookOpen': return 'bg-amber-50 group-hover:bg-amber-100';
      case 'Globe': return 'bg-green-50 group-hover:bg-green-100';
      case 'Newspaper': return 'bg-purple-50 group-hover:bg-purple-100';
      case 'Brain': return 'bg-indigo-50 group-hover:bg-indigo-100';
      default: return 'bg-gray-50 group-hover:bg-gray-100';
    }
  };

  const title = language === 'hi' && category.titleHi ? category.titleHi : category.title;
  
  // Helper to get translated topic names
  const getTopicNames = () => {
    const topics = category.topics.slice(0, 3);
    if (language === 'hi') {
      return topics.map(t => t.nameHi || t.name).join(', ');
    }
    return topics.map(t => t.name).join(', ');
  };

  return (
    <div 
      onClick={() => onClick(category)}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer group flex flex-col h-full animate-in fade-in zoom-in-95 duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-4 rounded-2xl transition-colors ${getBgColor()}`}>
          {getIcon()}
        </div>
        <div className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-500 group-hover:bg-white group-hover:shadow-sm transition-all whitespace-nowrap">
          {category.topics.length} {t.common.topics}
        </div>
      </div>
      
      <div className="mt-2">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
          {getTopicNames()} 
          {category.topics.length > 3 && '...'}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-50 flex items-center text-sm font-semibold text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        {t.common.exploreTopics} <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  );
};

export default SubjectCard;