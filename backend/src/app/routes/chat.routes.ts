import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";
import { chatController } from "../../modules/chats";

const router = Router();

router.get('/project/:projectId', isAuthenticated, chatController.getMessagesByProject);

export const chatRoutes = router;