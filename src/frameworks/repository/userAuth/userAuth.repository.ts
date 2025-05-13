/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import {
  TokenRefreshRequestDto,
  TokenRefreshResponseDto,
  toUserLoginResponseDto,
  UserCredentialsModel,
  UserInfoModel,
  UserLoginRequestDto,
  UserLoginResponseDto,
} from '@/domain';
import { injectable } from 'tsyringe';
import bcrypt from 'bcrypt';
import {
  AuthUser,
  generateRefreshToken,
  generateToken,
  verifyRefreshToken,
} from '@/interfaces/auth';
import { BLACKLISTED_TOKEN_KEY, RedisService } from '@/lib';

@injectable()
export class UserAuthRepository {
  login(userLogin: UserLoginRequestDto) {
    return new Promise<UserLoginResponseDto>(async (resolve, reject) => {
      try {
        const credentialsModel = await UserCredentialsModel.findOne({
          where: { user_email: userLogin.email },
        });
        if (credentialsModel !== null) {
          const isAuthorized = await bcrypt.compare(
            userLogin.password,
            credentialsModel.user_password
          );
          if (isAuthorized) {
            const infoModel = await UserInfoModel.findOne({
              where: { email: userLogin.email },
            });
            if (infoModel !== null) {
              const response = toUserLoginResponseDto(credentialsModel, infoModel);
              resolve(response);
            } else {
              reject(Error('Invalid email or password'));
            }
          } else {
            reject(Error('Invalid email or password'));
          }
        } else {
          reject(Error('Invalid email or password'));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  refreshToken(token: TokenRefreshRequestDto) {
    return new Promise<TokenRefreshResponseDto>(async (resolve, reject) => {
      const redis = new RedisService();
      try {
        const infoModel = await UserInfoModel.findOne({
          where: {
            id: token.userId,
            email: token.email,
          },
        });
        const credentialModel = await UserCredentialsModel.findOne({
          where: {
            id: token.credentialUserId,
            user_email: token.email,
          },
        });
        if (infoModel !== null && credentialModel !== null) {
          const refreshToken = token.refreshToken;
          const userToken = verifyRefreshToken<AuthUser>(refreshToken);
          if (infoModel.id === userToken.id && infoModel.email === userToken.email) {
            const newToken: AuthUser = {
              id: userToken.id,
              email: userToken.email,
              name: userToken.name,
            };
            const newRefreshToken = generateRefreshToken(newToken);
            const newAccessToken = generateToken(newToken);
            const response: TokenRefreshResponseDto = {
              refreshToken: newRefreshToken,
              accessToken: newAccessToken,
            };
            const tokenExpiration: number = 60 * 60 * 24 * 7;
            await redis.set({
              key: `${BLACKLISTED_TOKEN_KEY}${refreshToken}`,
              value: 'blacklisted',
              exp: tokenExpiration,
            });
            resolve(response);
          } else {
            reject(Error('Invalid User Requests'));
          }
        } else {
          reject(Error('Invalid User Requests'));
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
