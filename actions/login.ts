"use server";

import { LoginSchema } from "@/schema";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields) {
    return { error: "Invalid Fields!" };
  }

  return { success: "Email sent!" };
};
