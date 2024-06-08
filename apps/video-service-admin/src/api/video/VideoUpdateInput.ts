import { CommentUpdateManyWithoutVideosInput } from "./CommentUpdateManyWithoutVideosInput";
import { InputJsonValue } from "../../types";

export type VideoUpdateInput = {
  comments?: CommentUpdateManyWithoutVideosInput;
  description?: string | null;
  fileUrl?: InputJsonValue;
  owner?: string | null;
  title?: string | null;
  uploadDate?: Date | null;
};
