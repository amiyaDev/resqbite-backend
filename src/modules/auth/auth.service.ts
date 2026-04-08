import { Role } from "../../generated/prisma/enums.js";
import * as userRepo from "../../repository/user.repository.js";
import { comparePassword, hashPassword } from "../../utils/hash.js";
import { signToken } from "../../utils/jwt.js";
import { AuthResponse, LoginInput, RegisterInput } from "./auth.types.js";


export const registerUser = async (data: RegisterInput): Promise<AuthResponse> => {
    const existingUser = await userRepo.findUserByEmail(data.email)
    if (existingUser) {
        throw new Error( "User already exist")
    }
    const hashedPassword = await hashPassword(data.password)
    const user = await userRepo.createUser({
        name: data.name,
        email:data.email,
        password: hashedPassword,
        role: data.role?? Role.BUYER
    })
    const token = signToken({
        userId:user.id,
        role: user.role
    })
    return {user,token}
}

export const loginUser = async(data:LoginInput):Promise<AuthResponse>=>{
    const user = await userRepo.findUserByEmail(data.email);
    if(!user){
        throw new Error("Invalid credentials")
    }
   const  isPasswordValid  = await comparePassword(data.password, user.password);
    if(!isPasswordValid){
        throw new Error ("Invalid Credentials")
    }
    const token = signToken({
        userId:user.id,
        role:user.role
    })

    return {user,token}
}