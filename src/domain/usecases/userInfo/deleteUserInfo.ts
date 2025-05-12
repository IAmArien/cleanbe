/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserInfoRepository } from "@/domain/repository/userInfo.repository";

export class DeleteUserInfo {

  constructor(private repository: UserInfoRepository) {}

  invoke(userId: number): Promise<boolean> {
    return this.repository.deleteUserInfo(userId);
  }
}
