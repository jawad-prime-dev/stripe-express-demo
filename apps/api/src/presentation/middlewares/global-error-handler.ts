import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../contracts/error.response";

export const globalErrorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
    const title = "Internal Server Error";
    
    if (err instanceof Error) 
        return res.status(500).json(errorResponse(title, [err.message]));
  
    if (typeof err === "string")
        return res.status(500).json(errorResponse(title, [err]));
  
    return res.status(500).json(errorResponse(title));
}