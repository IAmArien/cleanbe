/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserInfoRequestDto, UserInfoResponseDto } from "@/domain";

export interface UserInfoDataSource {
  createUserInfo: (userInfo: UserInfoRequestDto) => Promise<UserInfoResponseDto>;
  getUserInfo: (userId: number) => Promise<UserInfoResponseDto | null>;
  patchUserInfo: (
    userId: number,
    userInfo: UserInfoRequestDto
  ) => Promise<UserInfoResponseDto | null>;
}
