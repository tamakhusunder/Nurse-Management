import express from "express";
import appConfig from "./config/app.config";
import routes from "./routes/routes";
import connectToMongodb from "./config/connection.config";
import logger from "./utils/logger.utils";

const port = appConfig.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Worldss!");
});

app.use("/api", routes);
logger.info(`MONGO:: Connection started`);

connectToMongodb()
  .then((res) => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`MONGO : Connection Failed`);
  });
