import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import appConfig from "../config/app.config";
import HttpStatus from "http-status-codes";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader: string | undefined = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  // if (!token) throw new UnauthorizedError("Token required");
  if (!token) {
    return res
      .status(HttpStatus.UNAUTHORIZED)
      .json({ message: "Token required" });
  }

  jwt.verify(token, appConfig.JWT_ACCESS_TOKEN_KEY, (err, decodedUser) => {
    if (err) {
      return res
        .status(HttpStatus.FORBIDDEN)
        .json({ message: "Invalid Token" });
    }
    next();
  });
};
