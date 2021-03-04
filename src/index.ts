import { createConnection } from "typeorm";
import "reflect-metadata";
import app from "./app";

createConnection()
  .then((_connection) => {
    app.listen("3000", () => {
      console.log("i am all ears");
    });
  })
  .catch((error) => console.log("TypeORM connection error: ", error));
