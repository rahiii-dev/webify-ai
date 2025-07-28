export interface CreateChatMessageDTO {
  projectId: string;
  from: 'user' | 'assistant';
  content: string;
  metadata?: Record<string, any>;
}
