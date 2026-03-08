import { UserDto } from "@/types/user.types";
import prisma from "./prisma";

export const getUserByEmail = async (
  email: string,
): Promise<UserDto | null> => {
  const userDb = await prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true },
  });
  if (!userDb) {
    return null;
  }

  return {
    id: userDb.id,
    email: userDb.email,
  };
};
