export interface Date {
  id: number;
  date: string;
  description: string;
}

export interface File {
  id: number;
  name: string;
  date_fk: number;
}
