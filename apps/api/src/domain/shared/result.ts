// Failure
export abstract class Failure {
  constructor(message: string) {
    this.message = message;
  }
  readonly message: string;
}

export class ValidationFailure extends Failure {
  constructor(message: string) {
    super(message);
  }
}

export class NotFoundFailure extends Failure {
  constructor(message: string) {
    super(message);
  }
}

// Result
export type Result<T = void> =
  | { ok: true; value: T }
  | { ok: false; error: Failure };

// Helpers
export const ok = <T>(value: T): Result<T> => ({ ok: true, value });
export const err = (error: Failure): Result => ({ ok: false, error });