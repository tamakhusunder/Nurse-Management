import * as nurseServices from "./../services/nurse.services";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export const getAllNurses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await nurseServices.getAllNurses();
    res.send({
      status: 200,
      data: response,
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send(err);
    next(err);
  }
};
export const createNurseInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { fullName, email, contact, workingDays, dutyStartTime, dutyEndTime } =
    req.body;
  try {
    const response = await nurseServices.createNurseInfo({
      fullName,
      email,
      contact,
      workingDays,
      dutyStartTime,
      dutyEndTime,
    });
    res.send({
      status: 200,
      data: response,
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send(err);
    next(err);
  }
};
