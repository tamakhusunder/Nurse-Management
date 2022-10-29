import Nurse from "../model/nurse.model";

export const getAllNurses = async () => {
  const response = await Nurse.find();
  return response;
};
