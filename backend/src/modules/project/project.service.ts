import { IProject, Project } from "../../models/project.model";
import { CreateProjectDto } from "./dto/create-project.dto";

export class ProjectService {
    async createProject(projectData: CreateProjectDto): Promise<IProject> {
        const project = new Project({
            user: projectData.userId,
            name: projectData.name,
            prompt: projectData.prompt,
            template: projectData.template,
            palette: projectData.palette,
        })
        await project.save();
        return project;
    }

    async getProjectById(projectId: string): Promise<IProject | null> {
        return await Project.findById(projectId);
    }

    async getAllProjects(userId?: string): Promise<IProject[]> {
        const projects = userId ? await Project.find({ user: userId }).sort({createdAt: -1 }) : Project.find().sort({createdAt: -1 });
        return projects;
    }


    async deleteProject(projectId: string): Promise<void> {
        await Project.findByIdAndDelete(projectId);
    }
}