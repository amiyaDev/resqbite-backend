import { Request, Response, NextFunction } from 'express'
import { success } from 'zod';
import { verifyToken } from '../utils/jwt.js';

export const protect = (req: Request,
    res: Response,
    next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized " })
    }
    try {
        const decodedToken = verifyToken(token);
        req.user = decodedToken
        next()
    } catch {
        return res.status(401).json({ success: false, message: "Unauthorized " })

    }
}