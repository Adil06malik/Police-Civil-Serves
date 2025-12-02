import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  History,
  LayoutDashboard,
  Menu,
  X,
  Sparkles,
  Languages
} from 'lucide-react';
import { ViewState, Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface HeaderProps {
  currentView: ViewState;
  onViewChange: (view: ViewState) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onViewChange, language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navItems = [
    { id: 'home', label: t.nav.home, icon: LayoutDashboard },
    { id: 'syllabus', label: t.nav.syllabus, icon: BookOpen },
    { id: 'mock', label: t.nav.mock, icon: Clock },
    { id: 'papers', label: t.nav.papers, icon: History },
    { id: 'generator', label: t.nav.generator, icon: Sparkles },
  ];

  const handleNavClick = (view: ViewState) => {
    onViewChange(view);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNavClick('home')}
        >
          <div className="bg-blue-600 p-2 rounded-lg shrink-0 group-hover:bg-blue-700 transition-colors">
            <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-tight">ExamPrep<span className="text-blue-600">AI</span></h1>
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider hidden sm:block">Police & Civil Services</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as ViewState)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all
                  ${currentView === item.id 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Toggle Desktop */}
          <button
            onClick={() => onLanguageChange(language === 'en' ? 'hi' : 'en')}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-blue-200 transition-all"
          >
            <Languages className="w-4 h-4" />
            {language === 'en' ? 'हिन्दी' : 'English'}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
           {/* Language Toggle Mobile */}
           <button
            onClick={() => onLanguageChange(language === 'en' ? 'hi' : 'en')}
            className="p-2 rounded-lg border border-gray-100 text-sm font-bold text-blue-600 bg-blue-50"
          >
            {language === 'en' ? 'हि' : 'EN'}
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-2 duration-200 z-50">
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as ViewState)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-base font-medium transition-colors
                  ${currentView === item.id 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-600 hover:bg-gray-50'}`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;