import { User } from "../user/User";

export type UserProfile = {
  bio: string | null;
  createdAt: Date;
  displayName: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
