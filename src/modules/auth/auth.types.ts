// modules/auth/auth.types.ts

import { Role, User } from "../../generated/prisma/client.js";



export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  role?: Role;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface JwtPayload {
  userId: string;
  role: Role;
}