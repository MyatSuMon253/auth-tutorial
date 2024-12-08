import { db } from "@/lib/db";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordToken.findUnique({
      where: {
        token,
      },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordToken.findeFirst({
      where: {
        email,
      },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};
