/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsRequestDto, UserCredentialsResponseDto } from '@/domain';

export interface UserCredentialsDataSource {
  createUserCredential: (
    userCredential: UserCredentialsRequestDto
  ) => Promise<UserCredentialsResponseDto>;
  deleteUserCredential(userId: number): Promise<boolean>;
}
