/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { AuthUser } from "../authenticator";

export const ACCESS_TOKEN_SECRET: Secret = "access-token-secret";
export const REFRESH_TOKEN_SECRET: Secret = "refresh-token-secret";

export function generateToken(payload: AuthUser, expiresIn = "3m") {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn } as SignOptions);
}

export function verifyToken<T>(token: string): T {
  return jwt.verify(token, ACCESS_TOKEN_SECRET) as T;
}

export function generateRefreshToken(payload: AuthUser, expiresIn = "7d") {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn } as SignOptions);
}

export function verifyRefreshToken<T>(token: string): T {
  return jwt.verify(token, REFRESH_TOKEN_SECRET) as T;
}
