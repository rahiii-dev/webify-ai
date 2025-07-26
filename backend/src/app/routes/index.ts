import { Express } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";
import { projectRoutes } from "./project.routes";

export const registerRoutes = (app: Express, prefix="/api") => {
    app.use(`${prefix}/projects`, isAuthenticated, projectRoutes);
};
