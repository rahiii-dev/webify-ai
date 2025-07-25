import { getAuth, requireAuth } from "@clerk/express";
import { UnauthorizedError } from "../../core/utils/AppError";
import { Request, Response, NextFunction } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAuthenticated } = getAuth(req);
  
  if (!isAuthenticated) {
    throw new UnauthorizedError()
  }
  next();
};
