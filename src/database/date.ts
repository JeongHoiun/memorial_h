import { db } from ".";

const GET_ALL_DATES = "SELECT * FROM date";

export function getDate(callback: (error: Error, response: Date) => void) {
  db.all<Date>(GET_ALL_DATES, callback);
}
