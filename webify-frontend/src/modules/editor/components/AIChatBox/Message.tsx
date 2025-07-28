import { AIMessage, AIMessageAvatar, AIMessageContent } from '@/shared/components/ui/kibo-ui/ai/message';
import type { AIChatMessage } from '../../types';

export interface MessageProps {
    message: AIChatMessage;
}

const Message = ({message}: MessageProps) => {
    return (
      <AIMessage from={message.from}>
        <AIMessageContent>{message.content}</AIMessageContent>
        <AIMessageAvatar src={message.avatar} />
      </AIMessage>
    );
}

export default Message;
