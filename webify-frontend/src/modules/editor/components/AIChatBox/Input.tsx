import { AIInput, AIInputModelSelect, AIInputModelSelectContent, AIInputModelSelectItem, AIInputModelSelectTrigger, AIInputModelSelectValue, AIInputSubmit, AIInputTextarea, AIInputToolbar, AIInputTools } from "@/shared/components/ui/kibo-ui/ai/input";
import { useState, type FormEventHandler } from "react";
import { AI_MODELS } from "@/shared/utils/constants";

export type InputStatus = 'submitted' | 'streaming' | 'ready' | 'error';

interface InputProps {
    status?: InputStatus;
    defaultModel: string;
    onSendPrompt: (message: string) => void;
    onModelChange?: (model: string) => void;
}

const Input = ({status="ready", defaultModel, onSendPrompt, onModelChange}: InputProps) => {
    const [text, setText] = useState<string>('');
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        if (!text) {
            return;
        }
        onSendPrompt(text);
        setText("");
    };

    return (
        <AIInput onSubmit={handleSubmit}>
            <AIInputTextarea className="!p-2" placeholder="Ask follow-ups" onChange={(e) => setText(e.target.value)} value={text} />
            <AIInputToolbar>
                <AIInputTools>
                    <AIInputModelSelect onValueChange={onModelChange} value={defaultModel}>
                        <AIInputModelSelectTrigger>
                            <AIInputModelSelectValue />
                        </AIInputModelSelectTrigger>
                        <AIInputModelSelectContent>
                            {AI_MODELS.map((model) => (
                                <AIInputModelSelectItem key={model.id} value={model.id}>
                                    {model.name}
                                </AIInputModelSelectItem>
                            ))}
                        </AIInputModelSelectContent>
                    </AIInputModelSelect>
                </AIInputTools>
                <AIInputSubmit disabled={!text} status={status} />
            </AIInputToolbar>
        </AIInput>
    );
}

export default Input;
