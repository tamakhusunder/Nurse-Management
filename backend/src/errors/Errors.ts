/**
 * Base class to derive custom exceptions
 */
class Error {
  readonly isCustom: boolean;
  readonly statusCode: number;
  readonly message: string;
  constructor(message: string, statusCode: number) {
    this.isCustom = true;
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default Error;
