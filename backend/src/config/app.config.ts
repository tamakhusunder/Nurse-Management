import * as dotenv from "dotenv";

dotenv.config();

const PORT = "3444";
const HOST = "127.0.0.2";

export default {
  // env :env
  PORT: process.env.PORT || PORT,
  HOST: process.env.PORT || HOST,
};
