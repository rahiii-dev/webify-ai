import { GoogleGenAI } from "@google/genai";
import { getOrThrow } from "../core/utils/env";

export const genAi = new GoogleGenAI({apiKey: getOrThrow('GEMINI_API_KEY')});
