/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import {
  UserInfoDataSource,
  UserInfoRequestDto,
  UserInfoResponseDto,
  UserListInfoRequestDto,
  UserListInfoResponseDto,
} from '@/domain';
import { UserInfoRepository } from '@/frameworks/repository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class UserInfoDataSourceImpl implements UserInfoDataSource {
  constructor(@inject('UserInfoRepositoryFrameworks') private repository: UserInfoRepository) {}

  getUserList(params: UserListInfoRequestDto): Promise<UserListInfoResponseDto> {
    return this.repository.getUserList(params);
  }

  deleteUserInfo(userId: number): Promise<boolean> {
    return this.repository.deleteUserInfo(userId);
  }

  patchUserInfo(userId: number, userInfo: UserInfoRequestDto): Promise<UserInfoResponseDto | null> {
    return this.repository.patchUserInfo(userId, userInfo);
  }

  getUserInfo(userId: number): Promise<UserInfoResponseDto | null> {
    return this.repository.getUserInfo(userId);
  }

  createUserInfo(userInfo: UserInfoRequestDto): Promise<UserInfoResponseDto> {
    return this.repository.createUserInfo(userInfo);
  }
}
