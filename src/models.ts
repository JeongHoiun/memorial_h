export interface Date {
  id: number;
  date: string;
  description: string;
}

export interface File {
  id: number;
  name: string;
  file_type: FileType;
  date_fk: number;
}

enum FileType {
  Image = "image",
  Video = "video",
}
