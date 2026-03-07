import { Ad } from "@prisma/client";
import prisma from "./prisma"

export const getAds = async (): Promise<Ad[]> =>{
    return prisma.ad.findMany();

}