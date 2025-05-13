/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserInfoRequestDto, UserInfoResponseDto } from '@/domain/models/userInfo.dto';
import { UserInfoRepository } from '@/domain/repository/userInfo.repository';

export class PatchUserInfo {
  constructor(private repository: UserInfoRepository) {}

  invoke(userId: number, userInfo: UserInfoRequestDto): Promise<UserInfoResponseDto | null> {
    return this.repository.patchUserInfo(userId, userInfo);
  }
}
