import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";

export type Video = {
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  fileUrl: JsonValue;
  id: string;
  owner: string | null;
  title: string | null;
  updatedAt: Date;
  uploadDate: Date | null;
};
