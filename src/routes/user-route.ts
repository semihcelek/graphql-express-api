import { Router } from "express";
import { createUser, getAllUser, getOneUser } from "../services/user-service";

const route = Router();

route.get("/all/json", async (_req, res) => {
  const response = await getAllUser();
  res.send(response);
});

route.post("/", async (req, res) => {
  const response = await createUser(req.body);
  res.send(response);
});

route.get("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await getOneUser(id);
  res.send(response);
});

export default route;
