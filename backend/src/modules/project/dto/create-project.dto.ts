export interface CreateProjectDto {
    userId: string;
    name: string;
    prompt: string;
    template?: string; 
    palette?: string;
    language?: string; 
}