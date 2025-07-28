import { chatService } from "../chats";
import { projectService } from "../project";
import { AIController } from "./ai.controller";
import { AIService } from "./ai.service";

const aiService = new AIService();
const aiController = new AIController(aiService, chatService, projectService);

export {
    aiController,
}