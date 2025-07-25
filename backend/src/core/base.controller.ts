import { getAuth } from "@clerk/express";
import { Request } from "express";
import { UnauthorizedError } from "./utils/AppError";

export abstract class BaseController {
  sendSuccess(res: any, data: any, message = "Success") {
    return res.status(200).json({ message, data });
  }

  sendError(res: any, error: any, status = 500) {
    return res.status(status).json({ message: error.message || "Server error" });
  }

  protected getAuth(req: Request) {
    return getAuth(req);
  }

  protected getUserId(req: Request): string {
    const { userId } = this.getAuth(req);
    if (!userId) throw new UnauthorizedError("User not authenticated");
    return userId;
  }
}
