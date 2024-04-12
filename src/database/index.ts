import sqlite3 from "sqlite3";

export const db = new sqlite3.Database(
  process.env.DATABASE_FILE || "unknown.db",
  sqlite3.OPEN_READWRITE,
  (err: Error | null) => {
    if (err) {
      console.error(err.message);
    }
  },
);
