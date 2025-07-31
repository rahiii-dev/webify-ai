import { ProjectContent, ProjectStatus } from "../../../models/project.model";

export interface UpdateProjectDto {
    name?: string;
    template?: string;
    palette?: string;
    language?: string;
    content?: ProjectContent | null;
    status?: ProjectStatus;
}