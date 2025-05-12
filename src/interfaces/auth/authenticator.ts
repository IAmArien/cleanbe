/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { ApiResponse } from "@/types";
import { Request, Response, NextFunction } from "express";
import { verifyToken } from ".";

export interface AuthUser {
  id: number;
  email: string;
  name: string;
}

export interface AuthRequest<
  Params = any,
  ResBody = any,
  ReqBody = any,
  ReqQuery = any
> extends Request<Params, ResBody, ReqBody, ReqQuery> {
  user?: AuthUser;
}

export function authenticator(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = verifyToken<AuthUser>(token);
      req.user = decoded;
      next();
    } catch (err) {
      const response: ApiResponse = {
        status: 401,
        message: "Invalid access token",
        errors: err
      };
      res.status(401).json(response);
    }
  } else {
    const response: ApiResponse = {
      status: 401,
      message: "Missing or Invalid access token"
    };
    res.status(401).json(response);
  }
}
