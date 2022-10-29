import * as nurseDaos from "./../daos/nurse.daos";
import BadRequestError from "../../errors/BadRequestError";

export const getAllNurses = async () => {
  const response = await nurseDaos.getAllNurses();
  console.log("getnurs", response);
  return response;
};
