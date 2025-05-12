/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentials } from "@/domain";
import bcrypt from "bcrypt";

export interface UserCredentialsRequestDto {
  email: string;
  password: string;
}

export interface UserCredentialsResponseDto {
  userId: number;
  email: string;
}

export async function toUserCredentials(dto: UserCredentialsRequestDto): Promise<UserCredentials> {
  const hashedPassword = await bcrypt.hash(dto.password, 10)
  return Promise.resolve({
    id: 0,
    user_email: dto.email,
    user_password: hashedPassword,
    type: 'user'
  });
}

export function toUserCredentialsResponseDto(
  credentials: UserCredentials
): UserCredentialsResponseDto {
  return {
    userId: credentials.id,
    email: credentials.user_email
  };
}
