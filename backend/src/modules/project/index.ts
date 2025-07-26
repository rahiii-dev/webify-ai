import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";

const projectService = new ProjectService();
export const projectController = new ProjectController(projectService);