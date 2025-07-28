import { Express } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";
import { projectRoutes } from "./project.routes";
import { aiRoutes } from "./ai.routes";
import { chatRoutes } from "./chat.routes";

export const registerRoutes = (app: Express, prefix="/api") => {
    app.use(`${prefix}/projects`, isAuthenticated, projectRoutes);
    app.use(`${prefix}/ai`, isAuthenticated, aiRoutes);
    app.use(`${prefix}/chats`, isAuthenticated, chatRoutes);
};
