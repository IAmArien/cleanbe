/**
 * Property of Norman Palisoc (Senior Software Engineer)
 * Reuse as a whole or in part is prohibited without permission.
 */

import { toUserInfo, toUserInfoResponseDto, UserInfo, UserInfoModel, UserInfoRequestDto, UserInfoResponseDto } from "@/domain";
import { injectable } from "tsyringe";

@injectable()
export class UserInfoRepository {

  createUserInfo(userInfo: UserInfoRequestDto) {
    return new Promise<UserInfoResponseDto>(
      async (resolve, reject) => {
        try {
          const info = toUserInfo(userInfo);
          const model = await UserInfoModel.create(info);
          const response = toUserInfoResponseDto(model);
          resolve(response);
        } catch (error) {
          reject(error);
        }
      }
    );
  }

  getUserInfo(userId: number) {
    return new Promise<UserInfoResponseDto | null>(
      async (resolve, reject) => {
        try {
          const model = await UserInfoModel.findByPk(userId);
          if (model !== null) {
            const response = toUserInfoResponseDto(model);
            resolve(response);
          } else {
            resolve(null);
          }
        } catch (error) {
          reject(error);
        }
      }
    );
  }

  patchUserInfo(userId: number, userInfo: UserInfoRequestDto) {
    return new Promise<UserInfoResponseDto | null>(
      async (resolve, reject) => {
        try {
          const findModel = await UserInfoModel.findByPk(userId);
          if (findModel !== null) {
            const partialUserInfo: Partial<UserInfo> = {}
            if (userInfo.firstName) {
              partialUserInfo.first_name = userInfo.firstName;
            }
            if (userInfo.middleName) {
              partialUserInfo.middle_name = userInfo.middleName;
            }
            if (userInfo.lastName) {
              partialUserInfo.last_name = userInfo.lastName;
            }
            if (userInfo.birthDate) {
              partialUserInfo.birth_date = userInfo.birthDate;
            }
            if (userInfo.age) {
              partialUserInfo.age = userInfo.age;
            }
            if (userInfo.sex) {
              partialUserInfo.sex = userInfo.sex;
            }
            if (userInfo.phoneNumber) {
              partialUserInfo.phone_number = userInfo.phoneNumber;
            }
            const updateModel = await UserInfoModel.update(
              partialUserInfo,
              { where: { id: userId } }
            );
            if (updateModel.length > 0 && updateModel[0] > 0) {
              const findModel = await UserInfoModel.findByPk(userId);
              if (findModel !== null) {
                const response = toUserInfoResponseDto(findModel);
                resolve(response);
              } else {
                reject(Error(`No such user found for ${userId}`));
              }
            } else {
              resolve(null)
            }
          } else {
            reject(Error(`No such user found for ${userId}`));
          }
        } catch (error) {
          reject(error);
        }
      }
    );
  }

  deleteUserInfo(userId: number) {
    return new Promise<boolean>(
      async (resolve, reject) => {
        try {
          const findModel = await UserInfoModel.findByPk(userId);
          if (findModel !== null) {
            const rows = await UserInfoModel.destroy({
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
}
