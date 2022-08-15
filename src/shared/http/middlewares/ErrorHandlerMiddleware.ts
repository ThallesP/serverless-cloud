import { NextFunction, Request, Response } from "express";
import { BaseException } from "../utils/BaseException";

export function errorHandlerMiddleware(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof BaseException) {
    return response.status(err.statusCode).json({
      error: err.name,
      message: err.message,
    });
  }

  return response.status(500).json({
    error: "InternalServerError",
    message: "Oops! This is our fault.",
  });
}

