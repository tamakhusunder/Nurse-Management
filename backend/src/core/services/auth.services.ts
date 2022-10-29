import * as authDaos from "./../daos/auth.daos";
import BadRequestError from "../../errors/BadRequestError";

export const getUserByEmail = async (email: string) => {
  const response = await authDaos.getUserByEmail(email);
  return response;
};

export const register = async (email: string, password: string) => {
  const user = await authDaos.getUserByEmail(email);
  if (user.length) throw new BadRequestError("Email already exists");
  const response = await authDaos.register(email, password);
  return response;
};

export const login = async (email: string, password: string) => {
  const response = await authDaos.login(email, password);
  if (!response.length)
    throw new BadRequestError("Email or password incorrect");
  return response;
};
