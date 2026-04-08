import { Prisma, User } from "../generated/prisma/client.js";
import { prisma } from "../prisma/client.js";

export const createUser = async (data: Prisma.UserCreateInput): Promise<User> => {
    return prisma.user.create({ data })
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: { email }
    })
}

export const findUserById = async (id: string): Promise<User | null> => {
    return prisma.user.findUnique({
        where: { id }
    })
}

export const updateUserPassword = async (userId: string, password: string): Promise<User> => {
    return prisma.user.update({
        where: { id: userId },
        data: { password }
    })
}