import { Ad } from "@prisma/client";
import prisma from "./prisma";

export const getAds = async (): Promise<Ad[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return prisma.ad.findMany();
};

export const getAdById = async (id: number): Promise<Ad | null> => {
  return prisma.ad.findUnique({
    where: {
      id,
    },
  });
};
