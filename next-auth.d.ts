import { DefaultSession } from "next-auth";

export type UserRole = "ADMIN" | "USER";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  customField: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}
