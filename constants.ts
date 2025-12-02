import { Category } from './types';

export const SYLLABUS: Category[] = [
  {
    id: 'numerical',
    title: 'Numerical Ability',
    titleHi: 'संख्यात्मक योग्यता',
    icon: 'Calculator',
    topics: [
      { id: 'num_system', name: 'Number System', nameHi: 'संख्या पद्धति', description: 'Properties of numbers, Divisibility Rules, Decimals, Fractions, LCM & HCF', descriptionHi: 'संख्याओं के गुण, विभाज्यता के नियम, दशमलव, भिन्न, ल.स.प और म.स.प' },
      { id: 'arithmetic', name: 'Arithmetic', nameHi: 'अंकगणित', description: 'Percentage, Ratio, Profit & Loss, Discount, SI & CI, Partnership', descriptionHi: 'प्रतिशत, अनुपात, लाभ और हानि, छूट, साधारण और चक्रवृद्धि ब्याज, साझेदारी' },
      { id: 'time_measure', name: 'Time & Measurement', nameHi: 'समय और मापन', description: 'Time and Work, Pipes, Speed & Distance, Trains, Boats & Streams', descriptionHi: 'समय और कार्य, पाइप, गति और दूरी, ट्रेनें, नाव और धारा' },
      { id: 'algebra_geo', name: 'Algebra & Geometry', nameHi: 'बीजगणित और ज्यामिति', description: 'Averages, Mensuration (2D & 3D), Basic Algebra, Linear Equations, Series', descriptionHi: 'औसत, क्षेत्रमिति (2D और 3D), बुनियादी बीजगणित, रैखिक समीकरण, श्रृंखला' },
      { id: 'data_interp', name: 'Data Interpretation', nameHi: 'आंकड़ा निर्वचन', description: 'Table & Graph use, Simplification (BODMAS)', descriptionHi: 'तालिका और ग्राफ का उपयोग, सरलीकरण (BODMAS)' },
    ]
  },
  {
    id: 'reasoning',
    title: 'Mental Ability (Reasoning)',
    titleHi: 'मानसिक क्षमता (तर्कशक्ति)',
    icon: 'Brain',
    topics: [
      { id: 'analogy', name: 'Analogy', nameHi: 'सादृश्यता', description: 'Word, Alphabet, and Number analogies, Semantic Analogy', descriptionHi: 'शब्द, वर्णमाला और संख्या सादृश्यता, अर्थपूर्ण सादृश्यता' },
      { id: 'series', name: 'Series Completion', nameHi: 'श्रृंखला पूर्ति', description: 'Number series, Letter series, Alpha-numeric series, Pattern continuation', descriptionHi: 'संख्या श्रृंखला, अक्षर श्रृंखला, अल्फ़ान्यूमेरिक श्रृंखला, पैटर्न निरंतरता' },
      { id: 'coding', name: 'Coding-Decoding', nameHi: 'कोडिंग-डिकोडिंग', description: 'Pattern matching, deciphering codes, Letter shifting', descriptionHi: 'पैटर्न मिलान, कोड को समझना, अक्षर स्थानांतरण' },
      { id: 'blood_rel', name: 'Blood Relations', nameHi: 'रक्त संबंध', description: 'Family tree, Coded relationships, Pointing problems', descriptionHi: 'वंश वृक्ष, कोडित संबंध, संकेत समस्याएँ' },
      { id: 'direction', name: 'Direction Sense', nameHi: 'दिशा ज्ञान', description: 'Distance and direction calculation, Shadow problems', descriptionHi: 'दूरी और दिशा की गणना, छाया समस्याएं' },
      { id: 'venn', name: 'Venn Diagrams', nameHi: 'वेन आरेख', description: 'Logical diagrams, Relationship between groups, Syllogism basics', descriptionHi: 'तार्किक आरेख, समूहों के बीच संबंध, न्यायवाक्य की मूल बातें' },
      { id: 'ranking', name: 'Ranking & Order', nameHi: 'रैंकिंग और क्रम', description: 'Position in rows, Time sequence tests, Ordering by height/weight', descriptionHi: 'पंक्तियों में स्थिति, समय अनुक्रम परीक्षण, ऊंचाई/वजन के अनुसार क्रम' },
      { id: 'data_suff', name: 'Data Sufficiency', nameHi: 'डेटा पर्याप्तता', description: 'Determining if provided data is sufficient to answer', descriptionHi: 'यह निर्धारित करना कि दिया गया डेटा उत्तर देने के लिए पर्याप्त है या नहीं' },
      { id: 'arith_reasoning', name: 'Arithmetical Reasoning', nameHi: 'अंकगणितीय तर्क', description: 'Calculation-based logic, Age problems', descriptionHi: 'गणना-आधारित तर्क, आयु समस्याएं' },
    ]
  },
  {
    id: 'police_aptitude',
    title: 'Police Aptitude & Attitude',
    titleHi: 'पुलिस अभिरुचि और दृष्टिकोण',
    icon: 'Shield',
    topics: [
      { id: 'law_order', name: 'Law and Order', nameHi: 'कानून और व्यवस्था', description: 'Maintaining public order and security, roles and responsibilities', descriptionHi: 'सार्वजनिक व्यवस्था और सुरक्षा बनाए रखना, भूमिकाएँ और जिम्मेदारियाँ' },
      { id: 'communal', name: 'Communal Harmony', nameHi: 'सांप्रदायिक सद्भाव', description: 'Promoting peace and cooperation between different communities', descriptionHi: 'विभिन्न समुदायों के बीच शांति और सहयोग को बढ़ावा देना' },
      { id: 'crime_control', name: 'Crime Control', nameHi: 'अपराध नियंत्रण', description: 'Crime prevention, investigation, and control measures', descriptionHi: 'अपराध की रोकथाम, जांच और नियंत्रण के उपाय' },
      { id: 'rule_law', name: 'Rule of Law', nameHi: 'विधि का शासन', description: 'Principles of justice, fairness, and upholding the legal system', descriptionHi: 'न्याय, निष्पक्षता और कानूनी प्रणाली को बनाए रखने के सिद्धांत' },
      { id: 'adaptability', name: 'Adaptability', nameHi: 'अनुकूलन क्षमता', description: 'Adjusting to new environments, people, or difficult situations', descriptionHi: 'नए वातावरण, लोगों या कठिन परिस्थितियों में समायोजन' },
      { id: 'prof_info', name: 'Professional Info', nameHi: 'व्यावसायिक जानकारी', description: 'Police System structure, contemporary police issues, basic laws', descriptionHi: 'पुलिस प्रणाली संरचना, समकालीन पुलिस मुद्दे, बुनियादी कानून' },
      { id: 'mental_tough', name: 'Mental Toughness', nameHi: 'मानसिक दृढ़ता', description: 'Remaining calm and focused under high-pressure conditions', descriptionHi: 'उच्च दबाव की स्थिति में शांत और केंद्रित रहना' },
      { id: 'sensitivity', name: 'Sensitivity', nameHi: 'संवेदनशीलता', description: 'Sensitivity towards Minorities, Underprivileged, and Gender issues', descriptionHi: 'अल्पसंख्यकों, वंचितों और लैंगिक मुद्दों के प्रति संवेदनशीलता' },
      { id: 'interest', name: 'Interest in Profession', nameHi: 'पेशे में रुचि', description: 'Motivation and commitment to the police service', descriptionHi: 'पुलिस सेवा के प्रति प्रेरणा और प्रतिबद्धता' },
    ]
  },
  {
    id: 'constitution',
    title: 'Constitution & Law',
    titleHi: 'संविधान और कानून',
    icon: 'BookOpen',
    topics: [
      { id: 'const_features', name: 'Features & Preamble', nameHi: 'विशेषताएं और प्रस्तावना', description: 'Sources, Federal nature, Parts, Schedules, Important Amendments (42nd, 44th, etc.)', descriptionHi: 'स्रोत, संघीय प्रकृति, भाग, अनुसूचियां, महत्वपूर्ण संशोधन (42वां, 44वां, आदि)' },
      { id: 'fund_rights', name: 'Fundamental Rights', nameHi: 'मौलिक अधिकार', description: 'Articles 12-35, Specific rights and exceptions', descriptionHi: 'अनुच्छेद 12-35, विशिष्ट अधिकार और अपवाद' },
      { id: 'dpsp', name: 'DPSP', nameHi: 'नीति निदेशक तत्व', description: 'Articles 36-51, Directive Principles of State Policy', descriptionHi: 'अनुच्छेद 36-51, राज्य नीति के निदेशक सिद्धांत' },
      { id: 'union_state', name: 'Union & State Executive', nameHi: 'संघ और राज्य कार्यपालिका', description: 'President, Governor, PM, CM - Powers and Functions', descriptionHi: 'राष्ट्रपति, राज्यपाल, प्रधानमंत्री, मुख्यमंत्री - शक्तियां और कार्य' },
      { id: 'judiciary', name: 'Parliament & Judiciary', nameHi: 'संसद और न्यायपालिका', description: 'Lok Sabha, Rajya Sabha, Supreme Court, High Courts, Writs', descriptionHi: 'लोकसभा, राज्यसभा, सर्वोच्च न्यायालय, उच्च न्यायालय, रिट' },
      { id: 'human_rights', name: 'Human Rights & Acts', nameHi: 'मानवाधिकार और अधिनियम', description: 'NHRC, Traffic Rules, NSA, SC/ST Act, Women & Child Laws', descriptionHi: 'एनएचआरसी, यातायात नियम, एनएसए, एससी/एसटी अधिनियम, महिला एवं बाल कानून' },
      { id: 'const_bodies', name: 'Constitutional Bodies', nameHi: 'संवैधानिक निकाय', description: 'Election Commission, CAG, UPSC, Finance Commission', descriptionHi: 'चुनाव आयोग, कैग, यूपीएससी, वित्त आयोग' },
    ]
  },
  {
    id: 'general_awareness',
    title: 'General Awareness',
    titleHi: 'सामान्य जागरूकता',
    icon: 'Globe',
    topics: [
      { id: 'history', name: 'History of India', nameHi: 'भारत का इतिहास', description: 'Indus Valley, Vedic, Maurya, Gupta, Delhi Sultanate, Mughals, Freedom Struggle', descriptionHi: 'सिंधु घाटी, वैदिक, मौर्य, गुप्त, दिल्ली सल्तनत, मुगल, स्वतंत्रता संग्राम' },
      { id: 'geography', name: 'Geography', nameHi: 'भूगोल', description: 'Indian Rivers, Mountains, Climate, Agriculture. World Continents & Oceans', descriptionHi: 'भारतीय नदियां, पहाड़, जलवायु, कृषि। विश्व महाद्वीप और महासागर' },
      { id: 'culture', name: 'Culture', nameHi: 'संस्कृति', description: 'Languages, Classical & Folk Dances, Festivals, Art Forms, Temples', descriptionHi: 'भाषाएं, शास्त्रीय और लोक नृत्य, त्योहार, कला के रूप, मंदिर' },
      { id: 'science', name: 'General Science', nameHi: 'सामान्य विज्ञान', description: 'Basic Physics, Chemistry, Biology (Diseases, Anatomy), SI Units', descriptionHi: 'बुनियादी भौतिकी, रसायन विज्ञान, जीव विज्ञान (रोग, शरीर रचना), एसआई इकाइयां' },
      { id: 'economy', name: 'Economic Scene', nameHi: 'आर्थिक दृश्य', description: 'Indian Economy, Budget, National Income, Five-Year Plans, Banking', descriptionHi: 'भारतीय अर्थव्यवस्था, बजट, राष्ट्रीय आय, पंचवर्षीय योजनाएं, बैंकिंग' },
    ]
  },
  {
    id: 'current_affairs',
    title: 'Current Affairs',
    titleHi: 'करंट अफेयर्स',
    icon: 'Newspaper',
    topics: [
      { id: 'recent_events', name: 'National/Intl Events', nameHi: 'राष्ट्रीय/अंतर्राष्ट्रीय घटनाक्रम', description: 'News of last 6-12 months, Political developments, Agreements', descriptionHi: 'पिछले 6-12 महीनों की खबरें, राजनीतिक विकास, समझौते' },
      { id: 'awards', name: 'Awards & Honors', nameHi: 'पुरस्कार और सम्मान', description: 'Bharat Ratna, Padma Awards, Nobel Prizes, Sports Awards', descriptionHi: 'भारत रत्न, पद्म पुरस्कार, नोबेल पुरस्कार, खेल पुरस्कार' },
      { id: 'books', name: 'Books and Authors', nameHi: 'पुस्तकें और लेखक', description: 'Recent and famous old books and writers', descriptionHi: 'हालिया और प्रसिद्ध पुरानी किताबें और लेखक' },
      { id: 'sports', name: 'Sports', nameHi: 'खेल', description: 'Olympics, Asian Games, World Cups, Athletes, Terminology', descriptionHi: 'ओलंपिक, एशियाई खेल, विश्व कप, एथलीट, शब्दावली' },
      { id: 'sci_tech', name: 'Science & Org', nameHi: 'विज्ञान और संगठन', description: 'ISRO, DRDO, Space Missions, UN, WHO, WTO, RBI, SEBI', descriptionHi: 'इसरो, डीआरडीओ, अंतरिक्ष मिशन, संयुक्त राष्ट्र, डब्ल्यूएचओ, डब्ल्यूटीओ, आरबीआई, सेबी' },
    ]
  }
];

export const MOCK_TESTS = [
  { id: 'mega_mock', name: 'Mega Mock Test (100 Questions)', nameHi: 'मेगा मॉक टेस्ट (100 प्रश्न)', description: 'The ultimate test of your endurance and knowledge across all subjects.', descriptionHi: 'सभी विषयों में आपकी सहनशक्ति और ज्ञान की अंतिम परीक्षा।', count: 100 },
  { id: 'full_mock_1', name: 'Full Length Mock Test 1', nameHi: 'पूर्ण मॉक टेस्ट 1', description: 'Comprehensive test covering all subjects (30 Questions)', descriptionHi: 'सभी विषयों को कवर करने वाला व्यापक परीक्षण (30 प्रश्न)', count: 30 },
  { id: 'full_mock_2', name: 'Full Length Mock Test 2', nameHi: 'पूर्ण मॉक टेस्ट 2', description: 'Comprehensive test covering all subjects (50 Questions)', descriptionHi: 'सभी विषयों को कवर करने वाला व्यापक परीक्षण (50 प्रश्न)', count: 50 },
  { id: 'police_special', name: 'Police Aptitude Special', nameHi: 'पुलिस अभिरुचि विशेष', description: 'Focused on Mental Aptitude and Law (25 Questions)', descriptionHi: 'मानसिक अभिरुचि और कानून पर केंद्रित (25 प्रश्न)', count: 25 },
  { id: 'gs_special', name: 'General Studies Special', nameHi: 'सामान्य अध्ययन विशेष', description: 'History, Geography, Science & Current Affairs (40 Questions)', descriptionHi: 'इतिहास, भूगोल, विज्ञान और करंट अफेयर्स (40 प्रश्न)', count: 40 },
];

export const PREVIOUS_PAPERS = [
  { id: 'paper_2023', name: 'Previous Year Paper (2023 Pattern)', nameHi: 'पिछले वर्ष का पेपर (2023)', description: 'Simulated questions based on 2023 trends', descriptionHi: '2023 के रुझानों पर आधारित प्रश्न', year: 2023 },
  { id: 'paper_2022', name: 'Previous Year Paper (2022 Pattern)', nameHi: 'पिछले वर्ष का पेपर (2022)', description: 'Simulated questions based on 2022 trends', descriptionHi: '2022 के रुझानों पर आधारित प्रश्न', year: 2022 },
  { id: 'paper_2021', name: 'Previous Year Paper (2021 Pattern)', nameHi: 'पिछले वर्ष का पेपर (2021)', description: 'Simulated questions based on 2021 trends', descriptionHi: '2021 के रुझानों पर आधारित प्रश्न', year: 2021 },
  { id: 'paper_2020', name: 'Previous Year Paper (2020 Pattern)', nameHi: 'पिछले वर्ष का पेपर (2020)', description: 'Simulated questions based on 2020 trends', descriptionHi: '2020 के रुझानों पर आधारित प्रश्न', year: 2020 },
  { id: 'paper_2019', name: 'Previous Year Paper (2019 Pattern)', nameHi: 'पिछले वर्ष का पेपर (2019)', description: 'Simulated questions based on 2019 trends', descriptionHi: '2019 के रुझानों पर आधारित प्रश्न', year: 2019 },
];