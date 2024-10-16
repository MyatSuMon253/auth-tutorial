"use server";

import { RegisterSchema } from "@/schema";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields) {
    return { error: "Invalid Fields!" };
  }

  return { success: "Email sent!" };
};
