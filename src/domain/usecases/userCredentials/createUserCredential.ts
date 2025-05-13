/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import {
  UserCredentialsRepository,
  UserCredentialsRequestDto,
  UserCredentialsResponseDto,
} from '@/domain';

export class CreateUserCredential {
  constructor(private repository: UserCredentialsRepository) {}

  invoke(userCredential: UserCredentialsRequestDto): Promise<UserCredentialsResponseDto> {
    return this.repository.createUserCredential(userCredential);
  }
}
