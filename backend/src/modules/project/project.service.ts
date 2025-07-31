import { IProject, Project, ProjectContent, ProjectStatus } from "../../models/project.model";
import { CreateProjectDto } from "./dto/create-project.dto";
import { UpdateProjectDto } from "./dto/update-project-dto";

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
        const projects = userId ? await Project.find({ user: userId }).sort({ createdAt: -1 }) : Project.find().sort({ createdAt: -1 });
        return projects;
    }


    async updateProjectById(projectId: string, data: UpdateProjectDto): Promise<Boolean> {
        const result = await Project.updateOne({ _id: projectId }, { $set: data }).exec();
        return result.modifiedCount > 0;
    }

    async updateProjectContent(projectId: string, content: ProjectContent): Promise<Boolean> {
        const result = await Project.updateOne({ _id: projectId }, { $set: { content } }).exec();
        return result.modifiedCount > 0;
    }

    async changeProjectStatus(projectId: string, status: ProjectStatus): Promise<Boolean> {
        const result = await Project.updateOne({ _id: projectId }, { $set: { status } }).exec();
        return result.modifiedCount > 0;
    }


    async deleteProject(projectId: string): Promise<void> {
        await Project.findByIdAndDelete(projectId);
    }
}