import { StatusCodes } from "http-status-codes";
import Error from "./Errors";

class DatabaseError extends Error {
  constructor(message: string, statusCode: number) {
    super(message, statusCode);
  }
}

export default DatabaseError;
