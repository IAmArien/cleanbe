/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { AuthUser } from "../authenticator";

export const SECRET: Secret = "your-secret-key";

export function generateToken(payload: AuthUser, expiresIn = "1h") {
  return jwt.sign(payload, SECRET, { expiresIn } as SignOptions);
}

export function verifyToken<T>(token: string): T {
  return jwt.verify(token, SECRET) as T;
}
