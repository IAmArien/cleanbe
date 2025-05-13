/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsDataSource, UserInfoDataSource, UserAuthDataSource } from '@/domain';
import {
  UserCredentialsRepository,
  UserInfoRepository,
  UserAuthRepository,
} from '@/frameworks/repository';
import {
  UserCredentialsDataSourceImpl,
  UserInfoDataSourceImpl,
  UserAuthDataSourceImpl,
} from '@/interfaces/controllers';
import { container } from 'tsyringe';

container.register<UserCredentialsRepository>('UserCredentialsRepositoryFrameworks', {
  useClass: UserCredentialsRepository,
});
container.register<UserCredentialsDataSource>('UserCredentialsDataSourceImpl', {
  useClass: UserCredentialsDataSourceImpl,
});
container.register<UserInfoRepository>('UserInfoRepositoryFrameworks', {
  useClass: UserInfoRepository,
});
container.register<UserInfoDataSource>('UserInfoDataSourceImpl', {
  useClass: UserInfoDataSourceImpl,
});
container.register<UserAuthRepository>('UserAuthRepositoryFrameworks', {
  useClass: UserAuthRepository,
});
container.register<UserAuthDataSource>('UserAuthDataSourceImpl', {
  useClass: UserAuthDataSourceImpl,
});
