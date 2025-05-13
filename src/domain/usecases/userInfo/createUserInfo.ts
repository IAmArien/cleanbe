/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserInfoRepository, UserInfoRequestDto, UserInfoResponseDto } from '@/domain';

export class CreateUserInfo {
  constructor(private repository: UserInfoRepository) {}

  invoke(userInfo: UserInfoRequestDto): Promise<UserInfoResponseDto> {
    return this.repository.createUserInfo(userInfo);
  }
}
