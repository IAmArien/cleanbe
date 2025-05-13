/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import {
  UserCredentialsDataSource,
  UserCredentialsRepository,
  UserInfoDataSource,
  UserInfoRepository,
  UserAuthDataSource,
  UserAuthRepository,
} from '@/domain';
import {
  CreateUserCredential,
  CreateUserInfo,
  DeleteUserCredential,
  DeleteUserInfo,
  GetUserInfo,
  GetUserList,
  LoginUser,
  PatchUserInfo,
  RefreshToken,
} from '@/domain/usecases';
import { container } from 'tsyringe';

container.register<UserCredentialsRepository>('UserCredentialsRepositoryDomain', {
  useFactory: (container) => {
    const dataSource = container.resolve<UserCredentialsDataSource>(
      'UserCredentialsDataSourceImpl'
    );
    return new UserCredentialsRepository(dataSource);
  },
});

container.register<CreateUserCredential>('CreateUserCredential', {
  useFactory: (container) => {
    const repository = container.resolve<UserCredentialsRepository>(
      'UserCredentialsRepositoryDomain'
    );
    return new CreateUserCredential(repository);
  },
});

container.register<DeleteUserCredential>('DeleteUserCredential', {
  useFactory: (container) => {
    const repository = container.resolve<UserCredentialsRepository>(
      'UserCredentialsRepositoryDomain'
    );
    return new DeleteUserCredential(repository);
  },
});

container.register<UserInfoRepository>('UserInfoRepositoryDomain', {
  useFactory: (container) => {
    const dataSource = container.resolve<UserInfoDataSource>('UserInfoDataSourceImpl');
    return new UserInfoRepository(dataSource);
  },
});

container.register<CreateUserInfo>('CreateUserInfo', {
  useFactory: (container) => {
    const repository = container.resolve<UserInfoRepository>('UserInfoRepositoryDomain');
    return new CreateUserInfo(repository);
  },
});

container.register<GetUserInfo>('GetUserInfo', {
  useFactory: (container) => {
    const repository = container.resolve<UserInfoRepository>('UserInfoRepositoryDomain');
    return new GetUserInfo(repository);
  },
});

container.register<GetUserList>('GetUserList', {
  useFactory: (container) => {
    const repository = container.resolve<UserInfoRepository>('UserInfoRepositoryDomain');
    return new GetUserList(repository);
  },
});

container.register<PatchUserInfo>('PatchUserInfo', {
  useFactory: (container) => {
    const repository = container.resolve<UserInfoRepository>('UserInfoRepositoryDomain');
    return new PatchUserInfo(repository);
  },
});

container.register<DeleteUserInfo>('DeleteUserInfo', {
  useFactory: (container) => {
    const repository = container.resolve<UserInfoRepository>('UserInfoRepositoryDomain');
    return new DeleteUserInfo(repository);
  },
});

container.register<UserAuthRepository>('UserAuthRepositoryDomain', {
  useFactory: (container) => {
    const dataSource = container.resolve<UserAuthDataSource>('UserAuthDataSourceImpl');
    return new UserAuthRepository(dataSource);
  },
});

container.register<LoginUser>('LoginUser', {
  useFactory: (container) => {
    const repository = container.resolve<UserAuthRepository>('UserAuthRepositoryDomain');
    return new LoginUser(repository);
  },
});

container.register<RefreshToken>('RefreshToken', {
  useFactory: (container) => {
    const repository = container.resolve<UserAuthRepository>('UserAuthRepositoryDomain');
    return new RefreshToken(repository);
  },
});
