import { BadRequestError } from "../../core/utils/AppError";
import { buildProjectPrompt } from "./helper/builder/project-prompt-builder";
import { getAiProvider } from "./provider";
import { parseAIResponse } from "./helper/parser/ai-response-parser";
import { WebsiteGenerationDto } from "./dto/website-generatedto";

export class AIService {

    async generateWebsite({ project, model, prompt, chatHistory }: WebsiteGenerationDto) {
        try {
            const ai = getAiProvider(model);

            const { systemPrompt, userPrompt } = buildProjectPrompt({
                name: project.name,
                content: project.content,
                prompt: prompt,
                language: project.language,
                template: project.template,
                palette: project.palette,
            })

            const historyContents = chatHistory.map(msg => ({
                role: msg.from,
                text: msg.content,
            }));

            const response = await ai.generate({
                content: [
                    ...historyContents,
                    { role: 'user', text: userPrompt }
                ],
                systemPrompt,
                options: {
                    temperature: 0.7
                }
            })

            const parseResponse = parseAIResponse(response);

            return parseResponse;
        } catch (error) {
            console.error("Website Generation Failed 🔴")
            console.error(error);
            throw new BadRequestError("Failed to generate website");
        }
    }

}
