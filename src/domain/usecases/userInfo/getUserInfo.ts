/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserInfoRepository, UserInfoResponseDto } from "@/domain";

export class GetUserInfo {

  constructor(private repository: UserInfoRepository) {}

  invoke(userId: number): Promise<UserInfoResponseDto | null> {
    return this.repository.getUserInfo(userId);
  }
}
