import { Ad } from "@prisma/client";
import prisma from "./prisma";
import { FilterParams } from "@/schemas/filter-schema";
import { AdResultDto } from "@/types/ad.types";

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
): Promise<AdResultDto> => {
  const { order, page, pageSize } = filters;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const whereClause = getWhereClause(filters);

  const totalAds = await prisma.ad.count({
    where: whereClause,
  });
  const totalPages = Math.ceil(totalAds / pageSize);
  const currentPage = Math.max(1, Math.min(page, totalPages));

  const items = await prisma.ad.findMany({
    where: whereClause,
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
    orderBy: {
      createAt: order,
    },
  });

  return {
    items,
    totalCount: totalAds,
    totalPages,
    currentPage,
  };
};

export const getAdById = async (id: number): Promise<Ad | null> => {
  return prisma.ad.findUnique({
    where: {
      id,
    },
  });
};
