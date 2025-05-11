/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsDataSource, UserCredentialsRepository, UserInfoDataSource, UserInfoRepository } from "@/domain";
import { CreateUserCredential, CreateUserInfo } from "@/domain/usecases";
import { container } from "tsyringe";

container.register<UserCredentialsRepository>(
  "UserCredentialsRepositoryDomain",
  {
    useFactory: (container) => {
      const dataSource = container.resolve<UserCredentialsDataSource>(
        "UserCredentialsDataSourceImpl"
      );
      return new UserCredentialsRepository(dataSource);
    }
  }
);

container.register<CreateUserCredential>(
  "CreateUserCredential",
  {
    useFactory: (container) => {
      const repository = container.resolve<UserCredentialsRepository>(
        "UserCredentialsRepositoryDomain"
      );
      return new CreateUserCredential(repository);
    }
  }
);

container.register<UserInfoRepository>(
  "UserInfoRepositoryDomain",
  {
    useFactory: (container) => {
      const dataSource = container.resolve<UserInfoDataSource>(
        "UserInfoDataSourceImpl"
      );
      return new UserInfoRepository(dataSource);
    }
  }
)

container.register<CreateUserInfo>(
  "CreateUserInfo",
  {
    useFactory: (container) => {
      const repository = container.resolve<UserInfoRepository>(
        "UserInfoRepositoryDomain"
      );
      return new CreateUserInfo(repository);
    }
  }
);
