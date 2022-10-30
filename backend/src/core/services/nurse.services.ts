import * as nurseDaos from "./../daos/nurse.daos";
import BadRequestError from "../../errors/BadRequestError";
import { INurse } from "../../interfaces/index.interface";

export const getAllNurses = async () => {
  const response = await nurseDaos.getAllNurses();
  return response;
};

export const createNurseInfo = async (data: INurse) => {
  const response = await nurseDaos.createNurseInfo(data);
  return response;
};
