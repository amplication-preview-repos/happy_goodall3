import { Comment } from "../comment/Comment";
import { JsonValue } from "type-fest";
import { UserProfile } from "../userProfile/UserProfile";

export type User = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userProfiles?: Array<UserProfile>;
};
