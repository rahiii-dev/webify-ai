import { Request, Response } from "express";
import { BaseController } from "../../core/base.controller";
import { asyncWrapper } from "../../core/utils/asyncWrapper";
import { ChatService } from "./chat.service";

export class ChatController extends BaseController {
    private readonly chatService: ChatService;

    constructor(chatService: ChatService) {
        super();
        this.chatService = chatService;
    }

    getMessagesByProject = asyncWrapper(async (req: Request, res: Response) => {
        const { projectId } = req.params;
        const messages = await this.chatService.getMessagesByProject(projectId);
        this.sendSuccess(res, messages, "Project Messages");
    });
}
