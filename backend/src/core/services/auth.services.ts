import { generateToken } from "../../utils/token.utils";
import * as authDaos from "./../daos/auth.daos";
import BadRequestError from "../../errors/BadRequestError";
import bcrypt from "bcrypt";
import UnauthorizedError from "../../errors/UnauthorizedError";
import { ACCESS, REFRESH } from "../../constants/index.constants";

const getHashedPassword = async (password: string): Promise<string> => {
  const saltRounds: number = 10;
  const salt: string = await bcrypt.genSalt(saltRounds);
  const hashpassword: string = await bcrypt.hash(password, salt);
  return hashpassword;
};

export const getUserByEmail = async (email: string) => {
  const response = await authDaos.getUserByEmail(email);
  return response;
};

export const register = async (email: string, password: string) => {
  if (!(email && password))
    throw new BadRequestError("Data not formatted properly");
  const user = await authDaos.getUserByEmail(email);
  if (user.length) throw new BadRequestError("Email already exists");
  const hashPassword: string = await getHashedPassword(password);
  const response = await authDaos.register(email, hashPassword);
  return response;
};

export const login = async (email: string, password: string) => {
  if (!(email && password))
    throw new BadRequestError("Data not formatted properly");

  const user = await authDaos.login(email);
  if (user.length) {
    const userPasswordDB = user[0].password;
    const validPassword = await bcrypt.compare(password, userPasswordDB);
    if (validPassword) {
      const accessToken = generateToken(ACCESS, { email });
      const refreshToken = generateToken(REFRESH, { email });

      return { user, accessToken, refreshToken };
    } else throw new BadRequestError("Password incorrect");
  } else throw new UnauthorizedError("User not found");
};
