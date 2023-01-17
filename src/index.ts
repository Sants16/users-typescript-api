import express from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";
import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";

config();
const app = express();

const port = process.env.PORT || 8000;

app.get("/users", async (req, resp) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();

  const getUsersController = new GetUsersController(mongoGetUsersRepository);

  const response = await getUsersController.handle();

  resp.send(response.body).status(response.statusCode);
});

app.listen(port, () => console.log(`port: ${port}`));
