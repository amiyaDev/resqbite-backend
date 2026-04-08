import { success } from "zod";
import * as authService from "./auth.service.js"
import { loginSchema, registerSchema } from "./auth.validation.js"
import { Request, Response } from "express";


export const register = async(req:Request, res:Response) =>{
    const parsed =  registerSchema.parse(req.body)
    const result = await authService.registerUser(parsed)

    res.status(201).json({
        success:true,
        data: result,
        message: "User registered successfully"
    })

}

export const login = async (req:Request,res:Response)=>{
    const parsed = loginSchema.parse(req.body);

    const result = await authService.loginUser(parsed);
    res.status(200).json({
        success:true,
        data:result,
        message: "Login successfully"
    })
}