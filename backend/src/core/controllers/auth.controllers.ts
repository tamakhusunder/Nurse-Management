import { Request, Response } from "express";
import * as authServices from "./../services/auth.services";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const response = await authServices.register(email, password);
    res.send({
      status: 200,
      data: response,
    });
  } catch (err) {
    res.send({
      status: 404,
      data: `Register Failed. Error : ${err}`,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const response = await authServices.login(email, password);
  res.send({
    status: 200,
    data: response,
  });
};
