import AIProvider from "./ai.provider";
import { DeepSeekProvider } from "./deepseek.provider";
import { GeminiProvider } from "./gemini.provide";

export type AIModels = "gemini-1.5-flash" | "gemini-1.5-pro" | "deepseek";

export function getAiProvider(model: AIModels): AIProvider {
    switch (model) {
        case "gemini-1.5-flash":
            return new GeminiProvider(model);
        case "gemini-1.5-pro": 
            return new GeminiProvider(model);
        case "deepseek": 
            return new DeepSeekProvider();
        default:
            throw new Error("Invalid Modal")
    }
}