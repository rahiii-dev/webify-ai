import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";
const apiKey = process.env.GEMINI_API_KEY; 


if(!apiKey) {
    throw new Error("'GEMINI_API_KEY is required env");
}

export const genAi = new GoogleGenAI({apiKey});
