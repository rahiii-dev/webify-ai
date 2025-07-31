import { Router } from "express";
import { projectController } from "../../modules/project";
import { isAuthenticated } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", isAuthenticated, projectController.getAllProjects);
router.post("/", isAuthenticated, projectController.createProject);
router.get("/:id", isAuthenticated, projectController.getProjectById);
router.put("/:id", isAuthenticated, projectController.updateProjectById);
router.delete("/:id", isAuthenticated, projectController.deleteProject);

export const projectRoutes = router;
