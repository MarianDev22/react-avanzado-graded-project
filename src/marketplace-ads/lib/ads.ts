import { Ad } from "@prisma/client";
import prisma from "./prisma"

export const getAds = async (): Promise<Ad[]> =>{
    await new Promise((resolve)=> setTimeout(resolve, 2000));
    return prisma.ad.findMany();

}