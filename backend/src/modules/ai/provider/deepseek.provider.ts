import { deepseekAi } from "../../../lib/deepseek";
import AIProvider, { AIContent, AIinput } from "./ai.provider";

export class DeepSeekProvider extends AIProvider {
    constructor() {
        super();
    }

    private toDeepSeekPrompt(content: AIContent[]){
        return content.map(p => (
            {
                role: p.role,
                content: p.text
            }
        ));
    }

    async generate(data: AIinput): Promise<any> {
        const {content, systemPrompt, options} = data;

        const response = await deepseekAi.chat.completions.create({
            messages: [
                {role: "system", content: systemPrompt},
                ...this.toDeepSeekPrompt(content)
            ],
            model: "deepseek-chat",
            temperature: options.temperature
        })

        return response.choices[0].message.content
    }
}