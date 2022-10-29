import { StatusCodes } from "http-status-codes";
import Error from "./Errors";

class ForbiddenError extends Error {
  constructor(message: string) {
    super(message, StatusCodes.FORBIDDEN);
  }
}

export default ForbiddenError;
