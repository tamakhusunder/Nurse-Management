import jwt from "jsonwebtoken";
import appConfig from "../config/app.config";

export const generateToken = (
  type: "access" | "refresh",
  user: { email: string }
) => {
  return type === "access"
    ? jwt.sign(user, appConfig.JWT_ACCESS_TOKEN_KEY, {
        expiresIn: appConfig.JWT_ACCESS_TOKEN_EXPIRES_IN,
      })
    : jwt.sign(user, appConfig.JWT_REFRESH_TOKEN_KEY, {
        expiresIn: appConfig.JWT_REFRESH_TOKEN_EXPIRES_IN,
      });
};

export const verifyToken = (type: "access" | "refresh", token: string) => {
  return type === "access"
    ? jwt.verify(token, appConfig.JWT_ACCESS_TOKEN_KEY)
    : jwt.verify(token, appConfig.JWT_REFRESH_TOKEN_KEY);
};
