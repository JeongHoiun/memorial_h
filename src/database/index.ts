import sqlite3 from "sqlite3";
import { DATABASE_PATH } from "../const";

export const db = new sqlite3.Database(
  DATABASE_PATH,
  sqlite3.OPEN_READWRITE,
  (err: Error | null) => {
    if (err) {
      console.error(err.message);
    }
  },
);
