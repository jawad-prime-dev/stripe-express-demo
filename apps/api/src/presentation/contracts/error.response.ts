export interface ErrorResponse {
  readonly message: string;
  readonly errors?: readonly string[];
}

export const errorResponse = (
  message: string,
  errors?: string[]
): ErrorResponse => ({ message, errors });