import { prisma } from "../../prisma/client.js";

export const create = async (data: any) => {
  return prisma.listing.create({ data });
};

export const findAll = async () => {
    return prisma.listing.findMany();
};
