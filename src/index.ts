import express from "express";
import { config } from "dotenv";

config();
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, resp) => {
  resp.send("hello");
});

app.listen(port, () => console.log(`port: ${port}`));
