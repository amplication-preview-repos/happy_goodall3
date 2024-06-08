import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileUpdateInput = {
  bio?: string | null;
  displayName?: string | null;
  user?: UserWhereUniqueInput | null;
};
