import { NextFunction, Request, Response } from "express";
import UnauthorizedError from "../errors/UnauthorizedError";
import jwt from "jsonwebtoken";
import appConfig from "../config/app.config";
import ForbiddenError from "../errors/ForbiddenError";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader: string | undefined = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (!token) throw new UnauthorizedError("Token required");
  jwt.verify(token, appConfig.JWT_ACCESS_TOKEN_KEY, (err, decodedUser) => {
    if (err) throw new ForbiddenError("Invalid Token");
    next();
  });
};
