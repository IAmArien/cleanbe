/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import {
  UserCredentialsDataSource,
  UserCredentialsRequestDto,
  UserCredentialsResponseDto,
} from '@/domain';
import { UserCredentialsRepository } from '@/frameworks/repository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UserCredentialsDataSourceImpl implements UserCredentialsDataSource {
  constructor(
    @inject('UserCredentialsRepositoryFrameworks') private repository: UserCredentialsRepository
  ) {}

  deleteUserCredential(userId: number): Promise<boolean> {
    return this.repository.deleteUserCredential(userId);
  }

  createUserCredential(
    userCredential: UserCredentialsRequestDto
  ): Promise<UserCredentialsResponseDto> {
    return this.repository.createUserCredential(userCredential);
  }
}
