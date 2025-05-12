/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserInfoDataSource, UserInfoRequestDto, UserInfoResponseDto } from "@/domain";

export class UserInfoRepository {

  constructor(private dataSource: UserInfoDataSource) {}

  createUserInfo(userInfo: UserInfoRequestDto): Promise<UserInfoResponseDto> {
    return this.dataSource.createUserInfo(userInfo);
  }

  getUserInfo(userId: number): Promise<UserInfoResponseDto | null> {
    return this.dataSource.getUserInfo(userId);
  }

  patchUserInfo(
    userId: number,
    userInfo: UserInfoRequestDto
  ): Promise<UserInfoResponseDto | null> {
    return this.dataSource.patchUserInfo(userId, userInfo);
  }

  deleteUserInfo(userId: number): Promise<boolean> {
    return this.dataSource.deleteUserInfo(userId);
  }
}
