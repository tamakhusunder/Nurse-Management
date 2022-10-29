import { StatusCodes } from "http-status-codes";
import Error from "./Errors";

class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export default UnauthorizedError;
