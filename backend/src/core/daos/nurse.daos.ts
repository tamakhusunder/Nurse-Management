import { INurse } from "../../interfaces/index.interface";
import Nurse from "../model/nurse.model";

export const getAllNurses = async () => {
  const response = await Nurse.find();
  return response;
};
export const createNurseInfo = async (data: INurse) => {
  console.log(data);

  const nurseInfo = new Nurse(data);
  const response = await nurseInfo.save();
  return response;
};
