/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { AuthUser, generateRefreshToken, generateToken } from '@/interfaces/auth';
import { UserCredentials } from './userCredentials.model';
import { UserInfo } from './userInfo.model';

export interface UserLoginRequestDto {
  email: string;
  password: string;
}

export interface UserLoginInfoResponseDto {
  credentialUserId: number;
  userId: number;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  birthDate: string;
  sex: string;
  age: number;
  phoneNumber: string;
}

export interface UserLoginResponseDto {
  accessToken: string;
  refreshToken: string;
  user: UserLoginInfoResponseDto;
}

export interface TokenRefreshRequestDto {
  credentialUserId: number;
  userId: number;
  email: string;
  refreshToken: string;
}

export interface TokenRefreshResponseDto {
  accessToken: string;
  refreshToken: string;
}

export function toUserLoginResponseDto(
  credentials: UserCredentials,
  info: UserInfo
): UserLoginResponseDto {
  const authUser: AuthUser = {
    id: info.id,
    email: info.email,
    name: `${info.first_name} ${info.last_name}`,
  };
  return {
    refreshToken: generateRefreshToken(authUser),
    accessToken: generateToken(authUser),
    user: {
      credentialUserId: credentials.id,
      userId: info.id,
      email: info.email,
      firstName: info.first_name,
      middleName: info.middle_name,
      lastName: info.last_name,
      birthDate: info.birth_date,
      sex: info.sex,
      age: info.age,
      phoneNumber: info.phone_number,
    },
  };
}
