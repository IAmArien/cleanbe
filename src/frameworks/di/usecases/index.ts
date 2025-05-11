/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsDataSource, UserCredentialsRepository } from "@/domain";
import { CreateUserCredential } from "@/domain/usecases";
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
