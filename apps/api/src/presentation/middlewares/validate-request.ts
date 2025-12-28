import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../contracts/error.response";

export const validateRequest = (requestClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = plainToInstance(requestClass, req.body);
    const errors = await validate(request);

    if (errors.length > 0) {
      const messages = errors.flatMap(e =>
        Object.values(e.constraints ?? {})
      )

      const response: ErrorResponse = {
        message: "Validation failed",
        errors: messages,
      }

      return res.status(400).json(response);
    }

    req.body = request;
    next();
  }
}
