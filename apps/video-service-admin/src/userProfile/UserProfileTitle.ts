import { UserProfile as TUserProfile } from "../api/userProfile/UserProfile";

export const USERPROFILE_TITLE_FIELD = "displayName";

export const UserProfileTitle = (record: TUserProfile): string => {
  return record.displayName?.toString() || String(record.id);
};
