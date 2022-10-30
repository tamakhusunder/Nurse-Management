import * as dotenv from "dotenv";

dotenv.config();

const PORT = "3444";
const HOST = "127.0.0.2";
const JWT_ACCESS_TOKEN_KEY = "secret";
const JWT_REFRESH_TOKEN_KEY = "secret";

export default {
  // env :env
  PORT: process.env.PORT || PORT,
  HOST: process.env.PORT || HOST,

  JWT_ACCESS_TOKEN_KEY:
    process.env.JWT_ACCESS_TOKEN_KEY ?? JWT_ACCESS_TOKEN_KEY,
  JWT_REFRESH_TOKEN_KEY:
    process.env.JWT_REFRESH_TOKEN_KEY ?? JWT_REFRESH_TOKEN_KEY,
  JWT_ACCESS_TOKEN_EXPIRES_IN: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN ?? "1h",
  JWT_REFRESH_TOKEN_EXPIRES_IN:
    process.env.JWT_REFRESH_TOKEN_EXPIRES_IN ?? "1d",
};
