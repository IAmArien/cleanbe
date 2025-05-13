/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserListInfoRequestDto, UserListInfoResponseDto } from '@/domain/models/userInfo.dto';
import { UserInfoRepository } from '@/domain/repository/userInfo.repository';

export class GetUserList {
  constructor(private repository: UserInfoRepository) {}

  invoke(params: UserListInfoRequestDto): Promise<UserListInfoResponseDto> {
    return this.repository.getUserList(params);
  }
}
