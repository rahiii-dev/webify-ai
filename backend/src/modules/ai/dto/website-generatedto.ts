import { ChatMessage } from "../../../models/chat.model";
import { IProject } from "../../../models/project.model";
import { AIModels } from "../provider";

export interface WebsiteGenerationDto {
    project: IProject, 
    prompt: string, 
    model: AIModels,
    chatHistory: ChatMessage[]
}