/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentials } from "@/domain";

export interface UserCredentialsRequestDto {
  email: string;
  password: string;
}

export interface UserCredentialsResponseDto {
  userId: number;
  email: string;
}

export function toUserCredentials(dto: UserCredentialsRequestDto): UserCredentials {
  return {
    id: 0,
    user_email: dto.email,
    user_password: dto.password,
    type: 'user'
  };
}

export function toUserCredentialsResponseDto(
  credentials: UserCredentials
): UserCredentialsResponseDto {
  return {
    userId: credentials.id,
    email: credentials.user_email
  };
}
