/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsDataSource } from "@/domain";
import { UserCredentialsRepository } from "@/frameworks/repository";
import { UserCredentialsDataSourceImpl } from "@/interfaces/controllers";
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
