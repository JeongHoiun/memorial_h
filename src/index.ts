import dotenv from "dotenv";

if (process.env.NODE_ENV == "development") {
  dotenv.config({ path: ".env.development.local" });
} else {
  dotenv.config({ path: ".env" });
}

import express, { Request, Response } from "express";
import { PORT } from "./const";
import { getDate } from "./database/date";

const app = express();
const port = PORT;

app.get("/", (_: Request, res: Response) => {
  getDate((err: Error, rows: Date) => {
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
