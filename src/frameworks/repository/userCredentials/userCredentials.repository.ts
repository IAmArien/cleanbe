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

  deleteUserCredential(userId: number) {
    return new Promise<boolean>(
      async (resolve, reject) => {
        try {
          const findModel = await UserCredentialsModel.findByPk(userId);
          if (findModel !== null) {
            const rows = await UserCredentialsModel.destroy({
              where: { id: userId }
            });
            resolve(rows > 0);
          } else {
            resolve(false);
          }
        } catch (error) {
          reject(error);
        }
      }
    );
  }
};
