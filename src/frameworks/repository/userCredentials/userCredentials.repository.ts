/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { toUserCredentials, toUserCredentialsResponseDto, UserCredentialsModel, UserCredentialsRequestDto, UserCredentialsResponseDto } from "@/domain";
import { injectable } from "tsyringe";

@injectable()
export class UserCredentialsRepository {

  createUserCredential(userCredentials: UserCredentialsRequestDto) {
    return new Promise<UserCredentialsResponseDto>(
      async (resolve, reject) => {
        try {
          const credentials = toUserCredentials(userCredentials);
          const model = await UserCredentialsModel.create(credentials);
          const response = toUserCredentialsResponseDto(model);
          resolve(response);
        } catch (error) {
          reject(error)
        }
      }
    );
  }
};
