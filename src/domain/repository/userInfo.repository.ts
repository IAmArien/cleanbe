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
}
