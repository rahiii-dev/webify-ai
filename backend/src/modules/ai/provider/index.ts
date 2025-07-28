import AIProvider from "./ai.provider";
import { GeminiProvider } from "./gemini.provide";

export type AIModels = "gemini-1.5-flash" | "gemini-1.5-pro";

export function getAiProvider(model: AIModels): AIProvider {
    switch (model) {
        case "gemini-1.5-flash":
            return new GeminiProvider(model);
        case "gemini-1.5-pro": 
            return new GeminiProvider(model);
        default:
            throw new Error("Invalid Modal")
    }
}