import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { registerRoutes } from "./routes";
import { errorHandler } from "./middlewares/error.middleware";
import { notFoundHandler } from "./middlewares/not-found-middleware";
import { setupClerk } from "../lib/clerk";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(cors({origin: process.env.CLIENT_ORIGIN || "http://localhost:5173"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(setupClerk());
app.use(morgan("dev"))

registerRoutes(app);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "🟢 Healthy" });
});

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
