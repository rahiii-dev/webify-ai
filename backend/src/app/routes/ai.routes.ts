import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware";
import { aiController } from "../../modules/ai";

const router = Router();

router.post('/website/generate', isAuthenticated, aiController.generateWebsite);

export const aiRoutes = router;