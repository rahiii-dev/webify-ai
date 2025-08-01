
export interface AIContent {
    role: "user" | "assistant",
    text: string;
}

export interface AIinput {
    content: AIContent[]; 
    systemPrompt: string;
    options?: {
        temperature: number;
    }
} 

export interface AIStreamInput extends AIinput {
    onData: (chunk: string) => void, onComplete: () => void
}

abstract class AIProvider {
    abstract generate(data: AIinput): Promise<any>;
    // abstract stream(data: AIStreamInput): Promise<void>;
}

export default AIProvider;
