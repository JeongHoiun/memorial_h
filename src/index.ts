import express, { Request, Response } from "express";
import sqlite3 from "sqlite3";

const app = express();
const port = 3000;

const db = new sqlite3.Database(
  "./memorial.db",
  sqlite3.OPEN_READWRITE,
  err => {
    if (err) {
      console.error(err.message);
    }
  },
);

app.get("/", (req: Request, res: Response) => {
  db.all("SELECT * FROM lorem", (err, rows) => {
    console.log(err, rows);
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
