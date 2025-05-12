/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsDataSource, UserInfoDataSource, UserLoginDataSource } from "@/domain";
import { UserCredentialsRepository, UserInfoRepository, UserLoginRepository } from "@/frameworks/repository";
import { UserCredentialsDataSourceImpl, UserInfoDataSourceImpl, UserLoginDataSourceImpl } from "@/interfaces/controllers";
import { container } from "tsyringe";

container.register<UserCredentialsRepository>(
  "UserCredentialsRepositoryFrameworks",
  {
    useClass: UserCredentialsRepository
  }
);
container.register<UserCredentialsDataSource>(
  "UserCredentialsDataSourceImpl",
  {
    useClass: UserCredentialsDataSourceImpl
  }
)
container.register<UserInfoRepository>(
  "UserInfoRepositoryFrameworks",
  {
    useClass: UserInfoRepository
  }
)
container.register<UserInfoDataSource>(
  "UserInfoDataSourceImpl",
  {
    useClass: UserInfoDataSourceImpl
  }
)
container.register<UserLoginRepository>(
  "UserLoginRepositoryFrameworks",
  {
    useClass: UserLoginRepository
  }
)
container.register<UserLoginDataSource>(
  "UserLoginDataSourceImpl",
  {
    useClass: UserLoginDataSourceImpl
  }
)
