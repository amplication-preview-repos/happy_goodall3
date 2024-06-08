import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type VideoWhereInput = {
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  fileUrl?: JsonFilter;
  id?: StringFilter;
  owner?: StringNullableFilter;
  title?: StringNullableFilter;
  uploadDate?: DateTimeNullableFilter;
};
