import chatModel, { ChatMessage } from "../../models/chat.model";
import { CreateChatMessageDTO } from "./dto/create-chat-dto";

export class ChatService {
  async createMessage(dto: CreateChatMessageDTO): Promise<ChatMessage> {
    const message = new chatModel(dto);
    return await message.save();
  }

  async getMessagesByProject(projectId: string): Promise<ChatMessage[]> {
    return await chatModel.find({ projectId }).sort({ createdAt: 1 }).exec();
  }
}

