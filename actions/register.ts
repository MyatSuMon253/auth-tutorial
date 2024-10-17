"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schema";
import bcrypt from "bcrypt";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields) {
    return { error: "Invalid Fields!" };
  }

  const { email, password, name } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const user = await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  // send verification token email

  return { success: "Email sent!" };
};
