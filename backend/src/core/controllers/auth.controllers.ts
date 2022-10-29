import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import * as authServices from "./../services/auth.services";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const response = await authServices.register(email, password);
    res.send({
      status: 200,
      data: response,
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send(err);
    next(err);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const response = await authServices.login(email, password);
    res.send({
      status: 200,
      data: response,
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send(err);
  }
};
