import { AIConversation, AIConversationContent, AIConversationScrollButton } from '@/shared/components/ui/kibo-ui/ai/conversation';
import Message from './Message';
import type { AIChatMessage } from '../../types';
import AiTypingIndicator from '@/shared/components/AiTypingIndicator';

interface ConversationProps {
    messages: AIChatMessage[]
    isGenerating?: boolean;
}

const Conversation = ({messages, isGenerating=false}: ConversationProps) => {
    return (
        <AIConversation className="!relative !size-full">
            <AIConversationContent>
                {messages.map((message) => (
                    <Message
                        key={message.id}
                       message={message}
                    />
                ))}

                {isGenerating && <AiTypingIndicator />}
            </AIConversationContent>
            <AIConversationScrollButton />
        </AIConversation>
    );
}

export default Conversation;
