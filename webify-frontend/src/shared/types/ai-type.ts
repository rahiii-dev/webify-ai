export type GenerateMode = 'generate' | 'refine';

export type AIGenerationResponse =
    | {
        needs_followup: true;
        question: string;
    }
    | {
        needs_followup: false;
        summary: string;
        html: string;
        css: string;
    };
