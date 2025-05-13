/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import {
  UserInfoRequestDto,
  UserInfoResponseDto,
  UserListInfoRequestDto,
  UserListInfoResponseDto,
} from '@/domain';

export interface UserInfoDataSource {
  createUserInfo: (userInfo: UserInfoRequestDto) => Promise<UserInfoResponseDto>;
  getUserInfo: (userId: number) => Promise<UserInfoResponseDto | null>;
  getUserList: (params: UserListInfoRequestDto) => Promise<UserListInfoResponseDto>;
  patchUserInfo: (
    userId: number,
    userInfo: UserInfoRequestDto
  ) => Promise<UserInfoResponseDto | null>;
  deleteUserInfo(userId: number): Promise<boolean>;
}
