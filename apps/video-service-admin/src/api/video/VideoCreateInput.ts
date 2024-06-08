import { CommentCreateNestedManyWithoutVideosInput } from "./CommentCreateNestedManyWithoutVideosInput";
import { InputJsonValue } from "../../types";

export type VideoCreateInput = {
  comments?: CommentCreateNestedManyWithoutVideosInput;
  description?: string | null;
  fileUrl?: InputJsonValue;
  owner?: string | null;
  title?: string | null;
  uploadDate?: Date | null;
};
