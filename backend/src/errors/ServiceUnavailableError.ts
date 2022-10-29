import { StatusCodes } from "http-status-codes";
import Error from "./Errors";

class ServiceUnavailableError extends Error {
  constructor(message: string) {
    super(message, StatusCodes.SERVICE_UNAVAILABLE);
  }
}

export default ServiceUnavailableError;
