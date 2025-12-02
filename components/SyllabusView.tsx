import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight } from 'lucide-react';
import { SYLLABUS } from '../constants';
import { Language } from '../types';

const SyllabusView = ({ language }: { language: Language }) => {
  const [openCategory, setOpenCategory] = useState<string | null>('numerical');

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-600" />
        {language === 'hi' ? 'विस्तृत पाठ्यक्रम' : 'Detailed Syllabus'}
      </h2>
      
      {/* Mobile Layout (Accordion) */}
      <div className="md:hidden space-y-3">
        {SYLLABUS.map((cat) => (
          <div key={cat.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <button
              onClick={() => setOpenCategory(openCategory === cat.id ? null : cat.id)}
              className={`w-full text-left px-5 py-4 flex items-center justify-between transition-all
                ${openCategory === cat.id 
                  ? 'bg-blue-50 text-blue-800' 
                  : 'bg-white text-gray-800'}`}
            >
              <span className="font-bold flex items-center gap-2">
                {language === 'hi' && cat.titleHi ? cat.titleHi : cat.title}
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openCategory === cat.id ? 'rotate-180' : ''}`} />
            </button>
            
            {openCategory === cat.id && (
               <div className="bg-gray-50 border-t border-gray-100 divide-y divide-gray-100">
                 {cat.topics.map((topic) => (
                   <div key={topic.id} className="p-4 pl-6 hover:bg-blue-100/50 transition-colors">
                     <h4 className="font-semibold text-gray-800 text-sm mb-1">
                        {language === 'hi' && topic.nameHi ? topic.nameHi : topic.name}
                     </h4>
                     <p className="text-xs text-gray-600 leading-relaxed">
                        {language === 'hi' && topic.descriptionHi ? topic.descriptionHi : topic.description}
                     </p>
                   </div>
                 ))}
               </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Layout (Split View) */}
      <div className="hidden md:grid md:grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="md:col-span-4 space-y-2">
          {SYLLABUS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setOpenCategory(cat.id)}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center justify-between transition-all
                ${openCategory === cat.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'}`}
            >
              <span className="font-medium">
                 {language === 'hi' && cat.titleHi ? cat.titleHi : cat.title}
              </span>
              {openCategory === cat.id && <ChevronRight className="w-4 h-4" />}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="md:col-span-8">
          {SYLLABUS.map((cat) => (
            openCategory === cat.id && (
              <div key={cat.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden animate-in fade-in duration-300">
                <div className="p-6 border-b border-gray-100 bg-gray-50">
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'hi' && cat.titleHi ? cat.titleHi : cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {language === 'hi' ? 'विषयों का विस्तृत विवरण' : 'Detailed breakdown of topics'}
                  </p>
                </div>
                <div className="divide-y divide-gray-100">
                  {cat.topics.map((topic) => (
                    <div key={topic.id} className="p-5 hover:bg-blue-50/30 transition-colors">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {language === 'hi' && topic.nameHi ? topic.nameHi : topic.name}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {language === 'hi' && topic.descriptionHi ? topic.descriptionHi : topic.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusView;