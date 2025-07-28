import { Request, Response } from "express";
import { asyncWrapper } from "../../core/utils/asyncWrapper";
import { AIService } from "./ai.service";
import { BaseController } from "../../core/base.controller";
import { ChatService } from "../chats/chat.service";
import { ProjectService } from "../project/project.service";

export class AIController extends BaseController {
    private readonly aiService: AIService;
    private readonly chatService: ChatService;
    private readonly projectService: ProjectService;

    constructor(aiService: AIService, chatService: ChatService, projectService: ProjectService) {
        super();
        this.aiService = aiService;
        this.chatService = chatService;
        this.projectService = projectService
    }

    generateWebsite = asyncWrapper(async (req: Request, res: Response) => {
        const { projectId, model, prompt } = req.body;

        if (!prompt) {
            return this.sendError(res, "'prompt' is required", 400);
        }

        const project = await this.projectService.getProjectById(projectId);

        if (!project) {
            return this.sendError(res, "Project Not Found")
        }

        const chatHistory = await this.chatService.getMessagesByProject(projectId);

        this.projectService.changeProjectStatus(projectId, 'generating');

        try {
            const result = await this.aiService.generateWebsite({ project, prompt, model, chatHistory });

            if ("needs_followup" in result) {

                if (result.needs_followup === true) {
                    await this.chatService.createMessage({
                        content: result.question,
                        from: "assistant",
                        projectId,
                    })

                    return this.sendSuccess(res, result, "Needs FollowUp");
                }

                this.chatService.createMessage({
                    content: prompt,
                    from: "user",
                    projectId,
                })

                await this.chatService.createMessage({
                    content: result.summary,
                    from: "assistant",
                    projectId,
                })

                await this.projectService.updateProductContent(projectId, {
                    html: result.html || "",
                    css: result.css || "",
                });

                this.projectService.changeProjectStatus(projectId, 'completed');
                return this.sendSuccess(res, result, "Website Generated");
            }
        } catch (error) {
            this.projectService.changeProjectStatus(projectId, 'failed');
            console.error("Website Generation Failed 🔴")
            console.error(error)
            return this.sendError(res, "Failed to generate Website", 400);
        }
    })
}