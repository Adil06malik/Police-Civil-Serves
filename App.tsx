import React, { useState } from 'react';
import { SYLLABUS, MOCK_TESTS, PREVIOUS_PAPERS } from './constants';
import { Topic, Difficulty, Question, ViewState, Category, Language } from './types';
import QuizCard from './components/QuizCard';
import SubjectCard from './components/SubjectCard';
import QuizInterface from './components/QuizInterface';
import { generateQuizQuestions } from './services/geminiService';
import { TRANSLATIONS } from './utils/translations';
import { 
  Loader2, 
  AlertCircle, 
  FileText, 
  Clock, 
  ChevronRight,
  Wand2,
  Sparkles,
  ArrowLeft
} from 'lucide-react';

// Imported Components
import Header from './components/Header';
import Hero from './components/Hero';
import ResultView from './components/ResultView';
import SyllabusView from './components/SyllabusView';

// --- Main App ---
export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quizData, setQuizData] = useState<Question[] | null>(null);
  const [quizTopic, setQuizTopic] = useState<string>('');
  const [quizResult, setQuizResult] = useState<{score: number, total: number} | null>(null);
  const [language, setLanguage] = useState<Language>('en'); // Language State
  
  // Selection State
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(Difficulty.BASIC);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [customTopic, setCustomTopic] = useState('');

  const t = TRANSLATIONS[language];

  const handleStartQuiz = async (topicName: string, categoryName: string, diff: Difficulty, count: number) => {
    setLoading(true);
    setError(null);
    try {
      // Pass language to generator
      const questions = await generateQuizQuestions(categoryName, topicName, diff, count, language);
      setQuizData(questions);
      setQuizTopic(topicName);
      // Clear modals
      setSelectedTopic(null);
    } catch (err) {
      setError("Failed to generate quiz. Please check your connection or try a smaller question count.");
    } finally {
      setLoading(false);
    }
  };

  const resetApp = () => {
    setQuizData(null);
    setQuizResult(null);
    setError(null);
  };

  const handleViewChange = (newView: ViewState) => {
    setView(newView);
    setActiveCategory(null);
    setError(null);
  };

  // Views Logic
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <h3 className="text-xl font-semibold text-gray-900">{t.common.loading}</h3>
        <p className="text-gray-500 mt-2">{t.common.loadingSub}</p>
        <p className="text-xs text-gray-400 mt-4">
            {language === 'hi' ? `आपके लिए ${questionCount} प्रश्न तैयार किए जा रहे हैं` : `Generating ${questionCount} unique questions...`}
        </p>
      </div>
    );
  }

  if (quizData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header currentView={view} onViewChange={handleViewChange} language={language} onLanguageChange={setLanguage} />
        <QuizInterface 
          questions={quizData} 
          topicName={quizTopic} 
          onFinish={(s, t) => { setQuizResult({score: s, total: t}); setQuizData(null); }}
          onExit={resetApp}
          language={language}
        />
      </div>
    );
  }

  if (quizResult) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header currentView={view} onViewChange={handleViewChange} language={language} onLanguageChange={setLanguage} />
        <ResultView 
          score={quizResult.score} 
          total={quizResult.total} 
          onRetry={resetApp} 
          onHome={resetApp} 
          language={language}
        />
      </div>
    );
  }

  // --- Main Render based on View ---
  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      <Header currentView={view} onViewChange={handleViewChange} language={language} onLanguageChange={setLanguage} />
      
      {/* Selection Modal for Topics */}
      {selectedTopic && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-6 overflow-y-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {language === 'hi' && selectedTopic.nameHi ? selectedTopic.nameHi : selectedTopic.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                {language === 'hi' && selectedTopic.descriptionHi ? selectedTopic.descriptionHi : selectedTopic.description}
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">{t.generator.difficulty}</label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.values(Difficulty).map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setSelectedDifficulty(diff)}
                        className={`py-2 px-1 text-center rounded-lg text-xs font-medium border transition-all
                          ${selectedDifficulty === diff 
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                            : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}
                      >
                        {diff}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-2">{t.generator.count}</label>
                  <div className="grid grid-cols-5 gap-2">
                    {[5, 10, 25, 50, 100].map((num) => (
                      <button
                        key={num}
                        onClick={() => setQuestionCount(num)}
                        className={`py-2 rounded-lg text-sm font-medium border transition-all
                          ${questionCount === num 
                            ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                            : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button 
                  onClick={() => setSelectedTopic(null)}
                  className="flex-1 py-3 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50"
                >
                  {t.common.cancel}
                </button>
                <button 
                  onClick={() => {
                    const category = SYLLABUS.find(c => c.topics.includes(selectedTopic!))?.title || "General";
                    handleStartQuiz(selectedTopic!.name, category, selectedDifficulty, questionCount);
                  }}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200"
                >
                  {t.common.startQuiz}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View Content */}
      <main>
        {view === 'home' && (
          <>
            {!activeCategory ? (
              // Step 1: Subject Selection View
              <>
                <Hero language={language} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-12">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-8 flex items-center gap-2 shadow-sm">
                      <AlertCircle className="w-5 h-5" />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SYLLABUS.map((cat) => (
                      <SubjectCard 
                        key={cat.id} 
                        category={cat} 
                        onClick={(c) => setActiveCategory(c)} 
                        language={language}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              // Step 2: Topic Selection View (Drill Down)
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <button 
                  onClick={() => setActiveCategory(null)}
                  className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium mb-6 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  {t.common.back}
                </button>

                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {language === 'hi' && activeCategory.titleHi ? activeCategory.titleHi : activeCategory.title}
                    </h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 animate-in slide-in-from-bottom-4 duration-500">
                  {activeCategory.topics.map((topic) => (
                    <QuizCard 
                      key={topic.id} 
                      topic={topic} 
                      categoryIcon={activeCategory.icon}
                      onSelect={(t) => {
                        setSelectedTopic(t);
                        setQuestionCount(10); 
                      }}
                      language={language}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {view === 'syllabus' && <SyllabusView language={language} />}

        {view === 'mock' && (
          <div className="max-w-5xl mx-auto px-4 py-8 md:py-10">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.nav.mock}</h2>
              <p className="text-gray-500 mt-2 text-sm md:text-base">Simulate real exam conditions.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_TESTS.map((test) => (
                <div key={test.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all group flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">{test.count} {t.common.questions}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {language === 'hi' && test.nameHi ? test.nameHi : test.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">
                    {language === 'hi' && test.descriptionHi ? test.descriptionHi : test.description}
                  </p>
                  <button 
                    onClick={() => handleStartQuiz(test.name, "Full Syllabus Mock Test", Difficulty.INTERMEDIATE, test.count)}
                    className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black transition-colors flex items-center justify-center gap-2 mt-auto"
                  >
                    {t.common.startQuiz} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'papers' && (
          <div className="max-w-5xl mx-auto px-4 py-8 md:py-10">
             <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t.nav.papers}</h2>
              <p className="text-gray-500 mt-2 text-sm md:text-base">Practice with previous years.</p>
            </div>

            <div className="space-y-4">
              {PREVIOUS_PAPERS.map((paper) => (
                <div key={paper.id} className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-50 rounded-xl shrink-0">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {language === 'hi' && paper.nameHi ? paper.nameHi : paper.name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {language === 'hi' && paper.descriptionHi ? paper.descriptionHi : paper.description}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleStartQuiz(paper.name, "Previous Year Paper", Difficulty.ADVANCED, 25)}
                    className="w-full md:w-auto px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:text-blue-600 hover:border-blue-200 whitespace-nowrap text-sm"
                  >
                    {t.common.startQuiz}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'generator' && (
          <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white text-center">
                    <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Wand2 className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-2">{t.generator.title}</h2>
                    <p className="text-blue-100">{t.generator.subtitle}</p>
                </div>
                
                <div className="p-8 space-y-8">
                    {/* Topic Input */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">{t.common.topics}</label>
                        <input 
                            type="text" 
                            value={customTopic}
                            onChange={(e) => setCustomTopic(e.target.value)}
                            placeholder={t.generator.inputPlaceholder}
                            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 text-lg transition-all"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase mb-3">{t.generator.difficulty}</label>
                          <div className="grid grid-cols-3 gap-2">
                            {Object.values(Difficulty).map((diff) => (
                              <button
                                key={diff}
                                onClick={() => setSelectedDifficulty(diff)}
                                className={`py-3 px-1 text-center rounded-lg text-xs font-medium border transition-all
                                  ${selectedDifficulty === diff 
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}
                              >
                                {diff}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-500 uppercase mb-3">{t.generator.count}</label>
                          <div className="grid grid-cols-5 gap-2">
                            {[5, 10, 25, 50, 100].map((num) => (
                              <button
                                key={num}
                                onClick={() => setQuestionCount(num)}
                                className={`py-3 rounded-lg text-sm font-medium border transition-all
                                  ${questionCount === num 
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-md' 
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'}`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <button 
                            onClick={() => handleStartQuiz(customTopic, "Custom Request", selectedDifficulty, questionCount)}
                            disabled={!customTopic.trim()}
                            className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-bold text-lg shadow-xl shadow-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform active:scale-[0.99]"
                        >
                            <Sparkles className="w-5 h-5" />
                            {t.generator.generateBtn}
                        </button>
                    </div>
                </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}