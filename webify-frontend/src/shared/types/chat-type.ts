export interface ChatMessage {
  projectId: string;
  _id: string;
  from: 'user' | 'assistant';
  content: string;
  metadata?: Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
}