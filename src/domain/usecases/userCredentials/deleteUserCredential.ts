/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsRepository } from '@/domain/repository/userCredentials.repository';

export class DeleteUserCredential {
  constructor(private repository: UserCredentialsRepository) {}

  invoke(userId: number): Promise<boolean> {
    return this.repository.deleteUserCredential(userId);
  }
}
