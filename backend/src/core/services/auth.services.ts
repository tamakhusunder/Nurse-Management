import { Request, Response } from "express";
import * as authDaos from "./../daos/auth.daos";

export const register = async (email: string, password: string) => {
  const response = await authDaos.register(email, password);
  return response;
};

export const login = async (email: string, password: string) => {
  const response = await authDaos.login(email, password);
  return response;
};
