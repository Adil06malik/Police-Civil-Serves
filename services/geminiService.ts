import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Difficulty, Question, Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Define the schema for the response to ensure type safety
const questionSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    id: { type: Type.INTEGER, description: "A unique identifier for the question" },
    text: { type: Type.STRING, description: "The question text" },
    options: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "An array of 4 possible answers",
    },
    correctAnswerIndex: {
      type: Type.INTEGER,
      description: "The index (0-3) of the correct answer in the options array",
    },
    explanation: {
      type: Type.STRING,
      description: "A detailed explanation of why the answer is correct",
    },
  },
  required: ["id", "text", "options", "correctAnswerIndex", "explanation"],
};

const quizSchema: Schema = {
  type: Type.ARRAY,
  items: questionSchema,
};

export const generateQuizQuestions = async (
  category: string,
  topic: string,
  difficulty: Difficulty,
  count: number = 5,
  language: Language = 'en'
): Promise<Question[]> => {
  const model = "gemini-2.5-flash";

  // Batching logic: 
  // Generating 100 questions in one go often exceeds output token limits (8192 tokens).
  // We split requests into batches of max 20 questions and run them in parallel.
  const MAX_PER_BATCH = 20;
  const batches: number[] = [];
  let remaining = count;
  while (remaining > 0) {
    const batchSize = Math.min(remaining, MAX_PER_BATCH);
    batches.push(batchSize);
    remaining -= batchSize;
  }

  const generateBatch = async (batchCount: number, batchIndex: number) => {
    // Construct Prompt with Language instruction
    const langInstruction = language === 'hi' 
      ? "OUTPUT MUST BE IN HINDI LANGUAGE (Devanagari script) strictly." 
      : "Output must be in English language.";

    const prompt = `
      You are an expert examiner for Indian Competitive Exams (like Police Constable, UPSC, SSC).
      
      Generate a unique quiz with ${batchCount} multiple-choice questions (MCQ) for the following subject:
      Category: ${category}
      Topic: ${topic}
      Difficulty Level: ${difficulty}
      Language: ${language === 'hi' ? 'Hindi' : 'English'}

      Requirements:
      1. ${langInstruction} Ensure the Hindi translation is formal, grammatically correct, and uses standard terminology found in competitive exams.
      2. For Numerical Ability, ensure the numbers are computable within a minute.
      3. For Mental Aptitude and Reasoning:
         - Since this is a text-only interface, avoid questions that STRICTLY require viewing an image (like 'visual perception' or complex non-verbal series).
         - Instead, focus on Verbal Reasoning, Coding-Decoding, Series, Blood Relations, and Logic.
         - For Venn Diagrams, describe the relationship in text (e.g., "Which set of words represents the relationship: Doctors, Fathers, Men").
      4. Provide 4 options for each question.
      5. Include a clear, educational explanation for the solution in ${language === 'hi' ? 'Hindi' : 'English'}.
      6. Ensure the output is a valid JSON array of ${batchCount} objects.
      7. Do NOT repeat questions from common pools if possible.
      
      ${batchIndex > 0 ? "Ensure these questions are distinct and provide variety compared to standard introductory questions." : ""}

      If the topic is "Full Syllabus Mock Test", mix questions from Numerical Ability, General Awareness, Reasoning, and Constitution evenly.
      If the topic is "Previous Year Paper", simulate the difficulty and question style of the specified year's exam pattern.
    `;

    try {
      const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: quizSchema,
          temperature: 0.7 + (batchIndex * 0.05), // Slightly vary temperature to encourage diversity across batches
        },
      });

      if (response.text) {
        return JSON.parse(response.text);
      }
      return [];
    } catch (error) {
      console.error(`Batch ${batchIndex} generation failed:`, error);
      return [];
    }
  };

  try {
    // Run all batches in parallel
    const results = await Promise.all(batches.map((c, i) => generateBatch(c, i)));
    
    // Flatten and re-assign IDs
    const allQuestions = results.flat().map((q: any, index: number) => ({
      ...q,
      id: index + 1, // normalize IDs sequentially
    }));

    if (allQuestions.length === 0) {
      throw new Error("No data returned from API");
    }

    return allQuestions;
  } catch (error) {
    console.error("Failed to generate quiz:", error);
    throw error;
  }
};