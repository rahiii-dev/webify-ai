import { genAi } from "../../../lib/gemini";
import AIProvider, { AIinput, AIContent, AIStreamInput } from "./ai.provider";

export class GeminiProvider extends AIProvider {
    private readonly modelId: string;
    constructor(modelId: string) {
        super();
        this.modelId = modelId;
    }

    private toGeminiPrompt(content: AIContent[]) {
        return content.map((p) => ({
            role: p.role === "assistant" ? "model" : "user",
            parts: [{ text: p.text }],
        }));
    }

    async generate({content, systemPrompt}: AIinput): Promise<any> {
        const response = await genAi.models.generateContent({
            model: this.modelId,
            contents: this.toGeminiPrompt(content),
            config: {
                systemInstruction: systemPrompt
            }
        })

        return response.candidates[0].content.parts[0].text;
    }

    // async stream({ content, systemPrompt, onData, onComplete }: AIStreamInput): Promise<void> {
    //     const response = await genAi.models.generateContentStream({
    //         model: this.modelId,
    //         contents: this.toGeminiPrompt(content),
    //         config: {
    //             systemInstruction: systemPrompt
    //         }
    //     })

    //     for await (const chunk of response) {
    //         onData(chunk.text);
    //     }

    //     onComplete();
    // }
}