import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  displayName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
