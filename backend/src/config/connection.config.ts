import mongoose from "mongoose";

const MONGO_URI: string = "mongodb://localhost:27017/nursedb";

const connectToMongodb = (): Promise<typeof mongoose> => {
  const connection: Promise<typeof mongoose> = mongoose.connect(MONGO_URI);

  mongoose.connection.on("connected", () => console.log("MongoDb connected.."));
  mongoose.connection.on("error", (err) =>
    console.log(`An Error occured while connecting DB. ERROR:${err}`)
  );
  mongoose.connection.on("disconnected", () =>
    console.log("MongoDb disconnected..")
  );

  return connection;
};

export default connectToMongodb;
