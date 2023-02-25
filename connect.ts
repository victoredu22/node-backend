import mongoose, { ConnectOptions } from "mongoose";
import {config} from "./config";

type DBInput = {
  db: string;
};
export default () => {
  const connect = () => {
    mongoose
      .connect(
        `mongodb+srv://${config.server.mongo_username}:${config.server.mongo_password}@cluster0.3xcjkc4.mongodb.net/${config.server.mongo_db}`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          autoIndex: true,
        } as ConnectOptions
      )
      .then((db) => {
        console.log("Database Connected Successfuly.");
      })
      .catch((err) => {
        console.log("Error Connectiong to the Database");
      });
  };
  connect();
};
