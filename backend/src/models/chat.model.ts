import mongoose, { Schema, Document } from 'mongoose';

export interface ChatMessage extends Document {
  projectId: mongoose.Types.ObjectId;
  from: 'user' | 'assistant';
  content: string;
  metadata?: Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
}

const ChatSchema = new Schema<ChatMessage>(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Project',
    },
    from: {
      type: String,
      enum: ['user', 'assistant'],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    metadata: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ChatMessage>('Chat', ChatSchema);
