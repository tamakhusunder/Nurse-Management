import User from "../model/user.model";

export const getUserByEmail = async (email: string) => {
  const response = await User.find({ email });
  return response;
};

export const register = async (email: string, password: string) => {
  const user = new User({ email, password });
  const response = await user.save();
  return response;
};

export const login = async (email: string) => {
  const response = await User.find({ email });
  console.log("loginDaos", response);
  return response;
};
