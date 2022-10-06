import { Request, Response } from "express";
import User from "../model/user.model";

export const register = async (email: string, password: string) => {
  const user = new User({ email, password });
  const response = await user.save();
  console.log("---------laast----------------", response);
  return response;
};

export const login = async (email: string, password: string) => {
  const response = await User.find({ email, password });
  console.log("loginDaos", response);
  return response;
};
