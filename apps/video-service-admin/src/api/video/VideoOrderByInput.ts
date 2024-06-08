import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  fileUrl?: SortOrder;
  id?: SortOrder;
  owner?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
};
