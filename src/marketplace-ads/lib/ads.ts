import { Ad } from "@prisma/client";
import prisma from "./prisma";
import { FilterParams } from "@/schemas/filter-schema";
import { AdDto, AdResultDto } from "@/types/ad.types";

interface SaveAdInput {
  name: string;
  description: string;
  price: number;
  image?: string;
  userId?: string;
}

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

export const createAd = async (input: SaveAdInput): Promise<AdDto> => {
  return prisma.ad.create({
    data: {
      name: input.name,
      description: input.description,
      price: input.price,
      imageUrl:
        input.image ||
        "https://img.freepik.com/vector-premium/vector-icono-imagen-predeterminado-pagina-imagen-faltante-diseno-sitio-web-o-aplicacion-movil-no-hay-foto-disponible_87543-11093.jpg",
      userId: input.userId,
    },
  });
};

export const deleteAd = async (
  adId: number,
  userId: string,
): Promise<boolean> => {
  const adDb = await prisma.ad.findUnique({
    where: { id: adId, userId: userId },
    select: { id: true },
  });

  if (!adDb) return false;

  await prisma.ad.delete({ where: { id: adDb.id } });
  return true;
};
