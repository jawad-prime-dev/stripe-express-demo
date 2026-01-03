import { Failure, NotFoundFailure, ValidationFailure } from "@stripe-express-demo/shared";
import { Response } from "express";

export abstract class BaseController {
  protected fromError(res: Response, failure: Failure): Response {
    const statusCode = this.mapFailureToStatusCode(failure);

    return res.status(statusCode).json({
      error: failure.message
    });
  }

  private mapFailureToStatusCode(failure: Failure): number {
    if (failure instanceof ValidationFailure) {
      return 400;
    }

    if (failure instanceof NotFoundFailure) {
      return 404;
    }

    return 500;
  }
}
