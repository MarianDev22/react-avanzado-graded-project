import { Ad } from "@prisma/client";
import prisma from "./prisma";
import { FilterParams } from "@/schemas/filter-schema";

const getWhereClause = (filters: FilterParams = {} as FilterParams) => {
  const { query, maxPrice } = filters;
  const conditions = [];

  if (query) {
    conditions.push({
      name: { contains: query, mode: "insensitive" as const },
    });
  }
  if (maxPrice && maxPrice > 0) {
    conditions.push({
      price: { lte: maxPrice },
    });
  }
  return conditions.length > 0 ? { AND: conditions } : {};
};

export const getAds = async (
  filters: FilterParams = {} as FilterParams,
): Promise<Ad[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const whereClause = getWhereClause(filters);
  const filteredAds = prisma.ad.findMany({
    where: whereClause,
    orderBy: {
      createAt: filters.order,
    },
  });
  return filteredAds;
};

export const getAdById = async (id: number): Promise<Ad | null> => {
  return prisma.ad.findUnique({
    where: {
      id,
    },
  });
};
