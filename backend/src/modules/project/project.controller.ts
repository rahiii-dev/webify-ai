import { Request } from "express";
import { BaseController } from "../../core/base.controller";
import { ProjectService } from "./project.service";
import { asyncWrapper } from "../../core/utils/asyncWrapper";
import { CreateProjectDto } from "./dto/create-project.dto";
import { getTemplate } from "../../core/utils/template";
import { getColorPalettes } from "../../core/utils/pallete";
import { UpdateProjectDto } from "./dto/update-project-dto";

export class ProjectController extends BaseController {
    private readonly projectService: ProjectService;

    constructor(service: ProjectService) {
        super();
        this.projectService = service;
    }

    createProject = asyncWrapper(async (req, res) => {
        const projectData = req.body as CreateProjectDto;
        const userId = this.getUserId(req);

        projectData.userId = userId;
        if (!projectData.name || !projectData.prompt) {
            return this.sendError(res, "Name and description are required fields", 400);
        }

        if (projectData.template && getTemplate(projectData.template) === undefined) {
            return this.sendError(res, "Invalid template type", 400);
        }

        if (projectData.palette && getColorPalettes(projectData.palette) === undefined) {
            return this.sendError(res, "Color palette must be a string", 400);
        }

        const project = await this.projectService.createProject(projectData);
        this.sendSuccess(res, project, "Project created successfully");
    });

    getProjectById = asyncWrapper(async (req: Request, res) => {
        const projectId = req.params.id;
        const project = await this.projectService.getProjectById(projectId);
        this.sendSuccess(res, project, "Project retrieved successfully");
    });

    updateProjectById = asyncWrapper(async (req: Request, res) => {
        const projectId = req.params.id;
        const data: UpdateProjectDto = req.body;
        console.log(data);
        const success = await this.projectService.updateProjectById(projectId, data);
        if(success){
            return this.sendSuccess(res, null, "Project updated successfully");
        }

        return this.sendError(res, "Project not found or no changes made")
    });


    deleteProject = asyncWrapper(async (req: Request, res) => {
        const projectId = req.params.id;
        await this.projectService.deleteProject(projectId);
        this.sendSuccess(res, null, "Project deleted successfully");
    });

    getAllProjects = asyncWrapper(async (req: Request, res) => {
        const userId = this.getUserId(req);
        const projects = await this.projectService.getAllProjects(userId);
        this.sendSuccess(res, projects, "Projects retrieved successfully");
    });
}