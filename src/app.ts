import express from "express";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";

import userRoute from "./routes/user-route";

const app = express();
app.use(express.json());
app.use(cors());

app.use(logger("dev"));
app.use(bodyParser.json());

app.get("/", (_req, res) => {
  res.send("express is running");
});

app.use("/user", userRoute);

export default app;
