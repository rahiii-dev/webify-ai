import OpenAI from "openai";
import { getOrThrow } from "../core/utils/env";

export const deepseekAi = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: getOrThrow('DEEPSEEK_API_KEY')
});
