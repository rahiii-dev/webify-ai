import { AppError } from "../../core/utils/AppError";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(`[❌ Error] ${req.method} ${req.url}`, err);

  // Handle AppError
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  //handle Mongoose validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: err.message,
      errors: Object.values(err.errors).map((e: any) => e.message),
    });
  }

  // Unknown errors
  return res.status(500).json({
    success: false,
    message: "Something went wrong",
    stack: process.env.NODE_ENV === "production" ? undefined : err.stack,
  });
};
