export interface ErrorResponse {
  readonly message: string;
  readonly errors?: readonly string[];
}


// ===== Helpers =====
export const errorResponse = (
  message: string,
  errors?: string[]
): ErrorResponse => ({ message, errors });