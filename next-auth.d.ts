import { DefaultSession } from "next-auth";
import "next-auth/jwt";

export type UserRole = "ADMIN" | "USER";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
  customField: string;
  isTwoFactorEnabled: boolean;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
  }
}
