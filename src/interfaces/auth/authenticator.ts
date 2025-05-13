/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { ApiResponse } from '@/types';
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '.';
import { TokenRefreshRequestDto } from '@/domain';
import { BLACKLISTED_TOKEN_KEY, RedisService } from '@/lib';

export interface AuthUser {
  id: number;
  email: string;
  name: string;
}

export interface AuthRequest<Params = any, ResBody = any, ReqBody = any, ReqQuery = any>
  extends Request<Params, ResBody, ReqBody, ReqQuery> {
  user?: AuthUser;
}

export function tokenAuthenticator(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = verifyToken<AuthUser>(token);
      req.user = decoded;
      next();
    } catch (err) {
      const response: ApiResponse = {
        status: 401,
        message: 'Invalid Access Token',
        errors: err,
      };
      res.status(401).json(response);
    }
  } else {
    const response: ApiResponse = {
      status: 401,
      message: 'Missing or Invalid Access Token',
    };
    res.status(401).json(response);
  }
}

export async function refreshTokenAuthenticator(
  req: Request<any, any, TokenRefreshRequestDto>,
  res: Response,
  next: NextFunction
) {
  const redis = new RedisService();
  const refreshToken = req.body.refreshToken;
  if (refreshToken) {
    const blacklistedToken = await redis.get(`${BLACKLISTED_TOKEN_KEY}${refreshToken}`);
    if (blacklistedToken === null) {
      next();
    } else {
      const response: ApiResponse = {
        status: 401,
        message: 'Invalid Refresh Token',
      };
      res.status(401).json(response);
    }
  } else {
    const response: ApiResponse = {
      status: 401,
      message: 'Invalid Refresh Token',
    };
    res.status(401).json(response);
  }
}
