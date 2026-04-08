import jwt from 'jsonwebtoken'
import type { StringValue } from 'ms'

const getJwtSecret = (): string => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }

  return secret;
};

const getJwtExpiresIn = (): StringValue => {
  const expiresIn = process.env.JWT_EXPIRES_IN;

  if (!expiresIn) {
    throw new Error('JWT_EXPIRES_IN is not defined');
  }

  return expiresIn as StringValue;
};

export const signToken = (payload: object) => {
  return jwt.sign(payload, getJwtSecret(), {
    expiresIn: getJwtExpiresIn(),
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, getJwtSecret());
};
