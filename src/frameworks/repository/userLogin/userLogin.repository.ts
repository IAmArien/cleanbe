/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { toUserLoginResponseDto, UserCredentialsModel, UserInfoModel, UserLoginRequestDto, UserLoginResponseDto } from "@/domain";
import { injectable } from "tsyringe";
import bcrypt from "bcrypt";

@injectable()
export class UserLoginRepository {

  login(userLogin: UserLoginRequestDto) {
    return new Promise<UserLoginResponseDto>(
      async (resolve, reject) => {
        try {
          const credentialsModel = await UserCredentialsModel.findOne({
            where: { user_email: userLogin.email }
          });
          if (credentialsModel !== null) {
            const isAuthorized = await bcrypt.compare(
              userLogin.password,
              credentialsModel.user_password
            );
            if (isAuthorized) {
              const infoModel = await UserInfoModel.findOne({
                where: { email: userLogin.email }
              });
              if (infoModel !== null) {
                const response = toUserLoginResponseDto(credentialsModel, infoModel);
                resolve(response);
              } else {
                reject(Error("Invalid email or password"));  
              }
            } else {
              reject(Error("Invalid email or password"));
            }
          } else {
            reject(Error("Invalid email or password"));
          }
        } catch (error) {
          reject(error);
        }
      }
    );
  }
}
