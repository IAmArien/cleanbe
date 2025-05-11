/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { UserCredentialsController, UserInfoController } from "@/interfaces/controllers";
import { container } from "tsyringe";

container.register<UserCredentialsController>(
  "UserCredentialsController",
  {
    useClass: UserCredentialsController
  }
);
container.register<UserInfoController>(
  "UserInfoController",
  {
    useClass: UserInfoController
  }
);
