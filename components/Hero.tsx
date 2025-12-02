import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../utils/translations';

const Hero = ({ language }: { language: Language }) => {
  const t = TRANSLATIONS[language];
  
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-8 md:py-12 px-4 mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight">{t.hero.title}</h2>
        <p className="text-blue-100 text-sm md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm font-medium text-blue-200">
          <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full"><span className="w-2 h-2 rounded-full bg-green-400"></span> {language === 'hi' ? 'संख्यात्मक' : 'Numerical'}</span>
          <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> {language === 'hi' ? 'जागरूकता' : 'General Awareness'}</span>
          <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full"><span className="w-2 h-2 rounded-full bg-red-400"></span> {language === 'hi' ? 'संविधान' : 'Constitution'}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;